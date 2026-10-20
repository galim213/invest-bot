#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const { WATCHLIST, BENCHMARK_TICKER, STRATEGY } = require('./config');
const marketData = require('./lib/marketData');
const { runBacktest } = require('./lib/simulate');
const { loadHistoricalMembership } = require('./lib/pointInTime');

/**
 * Fase 2 — validación fuera de muestra: la estrategia se ajustó (thresholds,
 * stop-loss, etc.) mirando solo 2025-2026. Acá la corremos SIN tocar ningún
 * parámetro sobre períodos que nunca vio durante el ajuste, incluyendo
 * mercados bajistas y crashes — si el edge es real, debería sobrevivir en
 * algo de esto, aunque sea peor que en el período alcista reciente.
 *
 * Importante: seguimos usando el universo ACTUAL del S&P 500 (503 tickers de
 * hoy) para simular también estos años viejos. Eso sigue teniendo sesgo de
 * reconstitución (ver nota en el reporte) — mitigado pero no eliminado.
 * Además, tickers que no cotizaban todavía en un período simplemente no
 * participan en esos años (su historia empieza después).
 */
const REGIMES = [
  { name: 'Selloff Q4 2018', from: '2018-09-01', to: '2018-12-31', note: 'Subida de tasas de la Fed + miedo a desaceleración global.' },
  { name: 'Crash COVID 2020', from: '2020-01-15', to: '2020-04-30', note: 'Caída más rápida de la historia + recuperación en V.' },
  { name: 'Bajista 2022', from: '2021-12-01', to: '2022-10-31', note: 'Suba agresiva de tasas, inflación alta, growth stocks castigadas.' },
  { name: 'Recuperación 2023', from: '2023-01-01', to: '2023-12-31', note: 'Mercado lateral/alcista post-2022, sin tendencia extrema.' },
  { name: 'Reciente (ya visto)', from: '2025-01-01', to: '2026-10-19', note: 'Período usado para tunear los parámetros — referencia, no es out-of-sample real.' },
];

async function main() {
  const tickers = WATCHLIST.map((w) => w.ticker);
  console.log(`[validate] Descargando 10 años de historia para ${tickers.length} tickers + benchmark (esto tarda más que el backtest normal)...`);
  const [{ data, errors }, benchmarkData] = await Promise.all([
    marketData.fetchAll(tickers, { range: '10y' }),
    marketData.fetchDailyCandles(BENCHMARK_TICKER, { range: '10y' }),
  ]);
  for (const e of errors) console.warn(`[validate] WARN: ${e.ticker}: ${e.message}`);
  console.log(`[validate] Datos obtenidos para ${data.size}/${tickers.length} tickers (${errors.length} fallaron).`);

  // Timeline de referencia: el ticker con más historia marca qué fechas son hábiles.
  let refTicker = null;
  let refLen = -1;
  for (const [ticker, d] of data.entries()) {
    if (d.candles.length > refLen) {
      refLen = d.candles.length;
      refTicker = ticker;
    }
  }
  const allDates = data.get(refTicker).candles.map((c) => c.date);

  const pointInTime = loadHistoricalMembership();
  if (pointInTime) {
    console.log(
      `[validate] Universo point-in-time cargado (hanshof/sp500_constituents): ${pointInTime.rowCount} cambios de composición, cobertura ${pointInTime.coverage.from} a ${pointInTime.coverage.to}.`
    );
  } else {
    console.warn('[validate] No se encontró sp500_historical_components.csv — se usa el universo actual para todo el período (sesgo de reconstitución sin mitigar).');
  }

  const results = [];

  for (const regime of REGIMES) {
    // Dejamos STRATEGY.smaTrend (200) días hábiles de calentamiento ANTES del
    // inicio del régimen, para que el SMA200 ya esté formado el día 1.
    const fromIdx = allDates.findIndex((d) => d >= regime.from);
    if (fromIdx === -1) {
      console.warn(`[validate] Sin datos para el período "${regime.name}" (${regime.from}) — se salta.`);
      continue;
    }
    const warmupStart = Math.max(0, fromIdx - STRATEGY.smaTrend);
    const simDates = allDates.filter((d) => d >= allDates[warmupStart] && d >= regime.from && d <= regime.to);

    if (simDates.length < 5) {
      console.warn(`[validate] Muy pocos días simulables para "${regime.name}" — se salta.`);
      continue;
    }

    console.log(`[validate] Simulando "${regime.name}" (${simDates[0]} a ${simDates.at(-1)}, ${simDates.length} días)...`);
    const result = runBacktest({ data, simDates, benchmarkCandles: benchmarkData?.candles, pointInTime });

    results.push({ regime: regime.name, note: regime.note, ...result });

    const diff = result.benchmark ? result.returnPct - result.benchmark.returnPct : null;
    console.log(
      `  → Retorno: ${result.returnPct.toFixed(2)}% | Benchmark: ${result.benchmark ? result.benchmark.returnPct.toFixed(2) + '%' : 'n/a'} | ${diff != null ? (diff >= 0 ? '+' : '') + diff.toFixed(2) + ' pts vs benchmark' : ''} | Drawdown: ${result.maxDrawdownPct.toFixed(2)}% | Sharpe: ${result.sharpeRatio != null ? result.sharpeRatio.toFixed(2) : 'n/a'} | Trades: ${result.tradesCount}`
    );
  }

  console.log('');
  console.log('=== Resumen de validación multi-régimen ===');
  console.log('');
  console.log('| Régimen | Período | Retorno | Benchmark | Diferencia | Drawdown | Sharpe | Trades |');
  console.log('|---|---|---|---|---|---|---|---|');
  for (const r of results) {
    const diff = r.benchmark ? r.returnPct - r.benchmark.returnPct : null;
    console.log(
      `| ${r.regime} | ${r.period.from} a ${r.period.to} | ${r.returnPct.toFixed(1)}% | ${r.benchmark ? r.benchmark.returnPct.toFixed(1) + '%' : 'n/a'} | ${diff != null ? (diff >= 0 ? '+' : '') + diff.toFixed(1) + 'pts' : 'n/a'} | ${r.maxDrawdownPct.toFixed(1)}% | ${r.sharpeRatio != null ? r.sharpeRatio.toFixed(2) : 'n/a'} | ${r.tradesCount} |`
    );
  }

  const beatBenchmark = results.filter((r) => r.benchmark && r.returnPct > r.benchmark.returnPct).length;
  const totalWithBenchmark = results.filter((r) => r.benchmark).length;
  console.log('');
  console.log(`Le ganó al benchmark en ${beatBenchmark}/${totalWithBenchmark} regímenes probados.`);

  const outPath = path.join(__dirname, 'reports', 'validation-multi-regime.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(
    outPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        pointInTimeUniverse: !!pointInTime,
        note: pointInTime
          ? 'Universo point-in-time real (hanshof/sp500_constituents, MIT) — un ticker solo se puede COMPRAR si realmente integraba el S&P 500 en esa fecha. Limitación que sigue sin resolver: no hay precios confiables de empresas delistadas/adquiridas (Yahoo Finance no las tiene), así que el sesgo de supervivencia se reduce pero no se elimina. Parámetros de la estrategia NO se re-ajustaron para estos períodos (fuera de muestra real, excepto el último régimen).'
          : 'Universo = S&P 500 actual aplicado retroactivamente a períodos viejos (sin archivo point-in-time disponible). Sesgo de reconstitución de índice sin mitigar.',
        regimes: results,
        summary: { beatBenchmark, totalWithBenchmark },
      },
      null,
      2
    )
  );
  console.log(`\n[validate] Detalle completo guardado en ${outPath}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error('[validate] ERROR fatal:', err);
    process.exit(1);
  });
}

module.exports = { main, REGIMES };
