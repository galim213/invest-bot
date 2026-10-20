#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const { WATCHLIST, BENCHMARK_TICKER, STRATEGY, STARTING_CAPITAL } = require('./config');
const marketData = require('./lib/marketData');
const strategy = require('./lib/strategy');
const portfolio = require('./lib/portfolio');
const { runDecisionEngine } = require('./lib/decide');

// Cuántos días hábiles de atrás simular. Necesitamos STRATEGY.smaTrend (200) días
// previos de historia como "calentamiento" para cada día simulado, así que pedimos
// 2 años de datos y simulamos los últimos `BACKTEST_DAYS` de ese rango.
const BACKTEST_DAYS = Number(process.argv[2]) || 120;

function maxDrawdown(snapshots) {
  let peak = -Infinity;
  let worst = 0;
  for (const s of snapshots) {
    peak = Math.max(peak, s.totalValue);
    const dd = (s.totalValue - peak) / peak;
    worst = Math.min(worst, dd);
  }
  return worst * 100;
}

async function main() {
  const tickers = WATCHLIST.map((w) => w.ticker);
  console.log(`[backtest] Descargando 2 años de historia para ${tickers.length} tickers del universo + benchmark...`);
  const [{ data, errors }, benchmarkData] = await Promise.all([
    marketData.fetchAll(tickers, { range: '2y' }),
    marketData.fetchDailyCandles(BENCHMARK_TICKER, { range: '2y' }),
  ]);
  for (const e of errors) console.warn(`[backtest] WARN: ${e.ticker}: ${e.message}`);
  console.log(`[backtest] Datos obtenidos para ${data.size}/${tickers.length} tickers (${errors.length} fallaron).`);

  if (data.size === 0) throw new Error('No se pudo descargar historia para ningún ticker.');

  // Timeline de referencia: fechas del ticker con más historia.
  let refTicker = null;
  let refLen = -1;
  for (const [ticker, d] of data.entries()) {
    if (d.candles.length > refLen) {
      refLen = d.candles.length;
      refTicker = ticker;
    }
  }
  const allDates = data.get(refTicker).candles.map((c) => c.date);

  if (allDates.length < STRATEGY.smaTrend + 10) {
    throw new Error(`No hay suficiente historia (${allDates.length} días) para calentar SMA${STRATEGY.smaTrend}.`);
  }

  const simStart = Math.max(STRATEGY.smaTrend, allDates.length - BACKTEST_DAYS);
  const simDates = allDates.slice(simStart);

  console.log(
    `[backtest] Simulando ${simDates.length} días hábiles (${simDates[0]} a ${simDates.at(-1)}) con $${STARTING_CAPITAL} iniciales.`
  );

  // Índice fecha -> posición en el array de candles, precalculado una sola vez
  // por ticker (evita un findIndex O(n) por ticker en cada día simulado — con
  // ~500 tickers x días esto importa).
  const dateIndexByTicker = new Map();
  for (const [ticker, d] of data.entries()) {
    const idx = new Map();
    d.candles.forEach((c, i) => idx.set(c.date, i));
    dateIndexByTicker.set(ticker, idx);
  }

  const state = portfolio.initialState();
  const tradeLog = [];
  let processedDays = 0;

  for (const date of simDates) {
    // Para cada ticker, recortamos las candles hasta `date` (inclusive) para simular
    // "lo que se sabía ese día" — sin mirar al futuro.
    const slicedData = new Map();
    for (const [ticker, d] of data.entries()) {
      const idx = dateIndexByTicker.get(ticker).get(date);
      const upTo = idx != null ? d.candles.slice(0, idx + 1) : d.candles.filter((c) => c.date <= date);
      if (upTo.length > 0) slicedData.set(ticker, { ...d, candles: upTo });
    }

    const evaluations = strategy.evaluateAll(slicedData);
    const { trades } = runDecisionEngine(state, evaluations, date);
    tradeLog.push(...trades);

    const prices = new Map(evaluations.filter((e) => e.lastClose != null).map((e) => [e.ticker, e.lastClose]));
    portfolio.snapshot(state, { date, pricesByTicker: prices });

    processedDays++;
    if (processedDays % 20 === 0) console.log(`[backtest] ...${processedDays}/${simDates.length} días simulados`);
  }

  // Benchmark pasivo: comprar y mantener el benchmark (SPY) durante el mismo período.
  let benchmark = null;
  if (benchmarkData) {
    const startClose = benchmarkData.candles.find((c) => c.date === simDates[0])?.close;
    const endClose = benchmarkData.candles.find((c) => c.date === simDates.at(-1))?.close;
    if (startClose && endClose) {
      benchmark = { ticker: BENCHMARK_TICKER, returnPct: ((endClose - startClose) / startClose) * 100 };
    }
  }

  const finalSnapshot = state.dailySnapshots.at(-1);
  const closedTrades = tradeLog.filter((t) => t.action === 'SELL' || t.action === 'TRIM');
  const winners = closedTrades.filter((t) => t.realizedPnl > 0);
  const losers = closedTrades.filter((t) => t.realizedPnl <= 0);
  const winRate = closedTrades.length > 0 ? (winners.length / closedTrades.length) * 100 : null;
  const drawdown = maxDrawdown(state.dailySnapshots);

  console.log('');
  console.log('=== Resultado del backtest ===');
  console.log(`Periodo simulado: ${simDates[0]} → ${simDates.at(-1)} (${simDates.length} días)`);
  console.log(`Capital inicial: $${STARTING_CAPITAL.toFixed(2)}`);
  console.log(`Valor final: $${finalSnapshot.totalValue.toFixed(2)}`);
  console.log(`Retorno total: ${finalSnapshot.pnlPct.toFixed(2)}%`);
  if (benchmark) {
    const diff = finalSnapshot.pnlPct - benchmark.returnPct;
    console.log(`Benchmark buy & hold ${benchmark.ticker}: ${benchmark.returnPct.toFixed(2)}% (estrategia ${diff >= 0 ? 'superó' : 'quedó por debajo'} por ${Math.abs(diff).toFixed(2)} pts)`);
  }
  console.log(`Máximo drawdown: ${drawdown.toFixed(2)}%`);
  console.log(`Trades totales: ${tradeLog.length} (compras: ${tradeLog.filter((t) => t.action === 'BUY').length}, ventas/trims: ${closedTrades.length})`);
  if (winRate !== null) {
    console.log(`Win rate (sobre cierres): ${winRate.toFixed(1)}% (${winners.length} ganadores / ${losers.length} perdedores)`);
  }
  const posiciones = Object.keys(state.positions);
  console.log(`Posiciones abiertas al final: ${posiciones.length ? posiciones.join(', ') : 'ninguna'}`);

  const outPath = path.join(__dirname, 'reports', `backtest-${simDates[0]}_${simDates.at(-1)}.json`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(
    outPath,
    JSON.stringify(
      {
        period: { from: simDates[0], to: simDates.at(-1), days: simDates.length },
        startingCapital: STARTING_CAPITAL,
        finalValue: finalSnapshot.totalValue,
        returnPct: finalSnapshot.pnlPct,
        benchmark,
        maxDrawdownPct: drawdown,
        winRatePct: winRate,
        trades: tradeLog,
        dailySnapshots: state.dailySnapshots,
      },
      null,
      2
    )
  );
  console.log(`\n[backtest] Detalle completo guardado en ${outPath}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error('[backtest] ERROR fatal:', err);
    process.exit(1);
  });
}

module.exports = { main };
