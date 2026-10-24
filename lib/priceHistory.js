'use strict';

const fs = require('fs');
const path = require('path');

const HISTORY_PATH = path.join(__dirname, '..', 'data', 'price-history.json');

/**
 * Historial de precio REAL (no ajustado por dividendos, igual que `close` en
 * el resto del proyecto) de las 10 acciones del core + el benchmark (SPY) —
 * para poder graficar la evolución de largo plazo y ver ciclos de mercado
 * (2018, COVID 2020, 2022), no solo desde que arrancó esta simulación. Se
 * carga una vez con `backfill-price-history.js` (10 años de historia real de
 * Yahoo Finance) y después se va completando solo, un cierre por día, vía
 * `appendPriceHistory` en run-daily.js.
 */

function loadPriceHistory(filePath = HISTORY_PATH) {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function savePriceHistory(history, filePath = HISTORY_PATH) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(history, null, 2));
}

/** Aplana Map<ticker, {candles}> (forma de lib/marketData.fetchAll) a filas {date, ticker, close} — para el backfill inicial. */
function buildPriceHistoryRows(candlesByTicker) {
  const rows = [];
  for (const [ticker, d] of candlesByTicker.entries()) {
    for (const c of d.candles) {
      if (c.close == null) continue;
      rows.push({ date: c.date, ticker, close: c.close });
    }
  }
  return rows;
}

/** Agrega el cierre de hoy para los tickers de interés (idempotente por fecha+ticker) — uso diario en run-daily.js. */
function appendPriceHistory(pricesByTicker, date, tickers, filePath = HISTORY_PATH) {
  const history = loadPriceHistory(filePath);
  const existingKeys = new Set(history.map((h) => `${h.date}|${h.ticker}`));

  let added = 0;
  for (const ticker of tickers) {
    const key = `${date}|${ticker}`;
    if (existingKeys.has(key)) continue;
    const close = pricesByTicker.get(ticker);
    if (close == null) continue;
    history.push({ date, ticker, close });
    added++;
  }
  if (added > 0) savePriceHistory(history, filePath);
  return added;
}

module.exports = { HISTORY_PATH, loadPriceHistory, savePriceHistory, buildPriceHistoryRows, appendPriceHistory };
