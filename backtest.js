#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const { WATCHLIST, BENCHMARK_TICKER, STRATEGY, STARTING_CAPITAL } = require('./config');
const marketData = require('./lib/marketData');
const { runBacktest } = require('./lib/simulate');
const { loadHistoricalMembership } = require('./lib/pointInTime');

// Cuántos días hábiles de atrás simular. Necesitamos STRATEGY.smaTrend (200) días
// previos de historia como "calentamiento" para cada día simulado, así que pedimos
// 2 años de datos y simulamos los últimos `BACKTEST_DAYS` de ese rango.
const BACKTEST_DAYS = Number(process.argv[2]) || 120;

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

  const pointInTime = loadHistoricalMembership();
  const result = runBacktest({ data, simDates, benchmarkCandles: benchmarkData?.candles, pointInTime });

  console.log('');
  console.log('=== Resultado del backtest ===');
  console.log(`Periodo simulado: ${result.period.from} → ${result.period.to} (${result.period.days} días)`);
  console.log(`Capital inicial: $${STARTING_CAPITAL.toFixed(2)}`);
  console.log(`Valor final: $${result.finalValue.toFixed(2)}`);
  console.log(`Retorno total: ${result.returnPct.toFixed(2)}%`);
  if (result.benchmark) {
    const diff = result.returnPct - result.benchmark.returnPct;
    console.log(
      `Benchmark buy & hold ${BENCHMARK_TICKER}: ${result.benchmark.returnPct.toFixed(2)}% (estrategia ${diff >= 0 ? 'superó' : 'quedó por debajo'} por ${Math.abs(diff).toFixed(2)} pts)`
    );
    if (result.benchmark.beta != null) console.log(`Beta vs ${BENCHMARK_TICKER}: ${result.benchmark.beta.toFixed(2)}`);
  }
  console.log(`Máximo drawdown: ${result.maxDrawdownPct.toFixed(2)}%`);
  if (result.sharpeRatio != null) console.log(`Sharpe ratio (anualizado): ${result.sharpeRatio.toFixed(2)}`);
  if (result.sortinoRatio != null) console.log(`Sortino ratio (anualizado): ${result.sortinoRatio.toFixed(2)}`);
  console.log(
    `Trades totales: ${result.tradesCount} (compras: ${result.trades.filter((t) => t.action === 'BUY').length}, ventas/trims: ${result.closedTradesCount})`
  );
  if (result.winRatePct !== null) {
    console.log(`Win rate (sobre cierres): ${result.winRatePct.toFixed(1)}% (${result.winnersCount} ganadores / ${result.losersCount} perdedores)`);
  }
  console.log(`Posiciones abiertas al final: ${result.openPositions.length ? result.openPositions.join(', ') : 'ninguna'}`);

  const outPath = path.join(__dirname, 'reports', `backtest-${result.period.from}_${result.period.to}.json`);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(result, null, 2));
  console.log(`\n[backtest] Detalle completo guardado en ${outPath}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error('[backtest] ERROR fatal:', err);
    process.exit(1);
  });
}

module.exports = { main };
