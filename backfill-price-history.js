#!/usr/bin/env node
'use strict';

const { CORE_HOLDINGS, BENCHMARK_TICKER } = require('./config');
const marketData = require('./lib/marketData');
const { buildPriceHistoryRows, loadPriceHistory, savePriceHistory } = require('./lib/priceHistory');

/**
 * Corrida única (no forma parte de la rutina diaria) para traer precio
 * histórico REAL de las 10 acciones del core + SPY — pensado para poder ver
 * ciclos de mercado completos (2018, COVID 2020, 2022), no solo desde que
 * arrancó esta simulación. Después de esta corrida, run-daily.js va
 * agregando un cierre por día solo (ver lib/priceHistory.appendPriceHistory).
 *
 * Uso: node backfill-price-history.js [rango]   (default: 10y)
 */
async function main() {
  const range = process.argv[2] || '10y';
  const tickers = [...CORE_HOLDINGS, BENCHMARK_TICKER];
  console.log(`[backfill] Trayendo ${range} de historia real para ${tickers.length} tickers (${tickers.join(', ')})...`);

  const { data, errors } = await marketData.fetchAll(tickers, { range });
  for (const e of errors) console.warn(`[backfill] WARN: ${e.ticker}: ${e.message}`);

  const newRows = buildPriceHistoryRows(data);
  const existing = loadPriceHistory();
  const existingKeys = new Set(existing.map((r) => `${r.date}|${r.ticker}`));
  const merged = [...existing, ...newRows.filter((r) => !existingKeys.has(`${r.date}|${r.ticker}`))];
  merged.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : a.ticker < b.ticker ? -1 : 1));

  savePriceHistory(merged);
  console.log(`[backfill] Listo: ${merged.length} filas totales (${newRows.length} traídas esta corrida) en data/price-history.json.`);

  for (const ticker of tickers) {
    const rows = data.get(ticker);
    if (rows && rows.candles.length > 0) {
      console.log(`[backfill]   ${ticker}: ${rows.candles.length} velas, desde ${rows.candles[0].date} hasta ${rows.candles.at(-1).date}`);
    }
  }
}

main().catch((err) => {
  console.error('[backfill] ERROR fatal:', err);
  process.exit(1);
});
