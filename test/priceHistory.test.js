'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { buildPriceHistoryRows, appendPriceHistory, loadPriceHistory } = require('../lib/priceHistory');

function tmpFile() {
  return path.join(os.tmpdir(), `price-history-test-${Date.now()}-${Math.random().toString(36).slice(2)}.json`);
}

test('buildPriceHistoryRows: aplana candles por ticker a filas {date, ticker, close}', () => {
  const candlesByTicker = new Map([
    ['AAPL', { candles: [{ date: '2026-01-01', close: 100 }, { date: '2026-01-02', close: 102 }] }],
    ['SPY', { candles: [{ date: '2026-01-01', close: 400 }] }],
  ]);
  const rows = buildPriceHistoryRows(candlesByTicker);

  assert.equal(rows.length, 3);
  assert.deepEqual(rows[0], { date: '2026-01-01', ticker: 'AAPL', close: 100 });
  assert.deepEqual(rows[2], { date: '2026-01-01', ticker: 'SPY', close: 400 });
});

test('buildPriceHistoryRows: ignora velas sin close', () => {
  const candlesByTicker = new Map([['AAPL', { candles: [{ date: '2026-01-01', close: null }] }]]);
  assert.deepEqual(buildPriceHistoryRows(candlesByTicker), []);
});

test('appendPriceHistory: guarda el cierre de hoy para los tickers de interés', () => {
  const file = tmpFile();
  const prices = new Map([['AAPL', 200], ['OTHER', 50]]);
  const added = appendPriceHistory(prices, '2026-01-01', ['AAPL'], file);

  assert.equal(added, 1);
  const history = loadPriceHistory(file);
  assert.equal(history.length, 1);
  assert.deepEqual(history[0], { date: '2026-01-01', ticker: 'AAPL', close: 200 });
  fs.unlinkSync(file);
});

test('appendPriceHistory: es idempotente — no duplica la misma fecha+ticker', () => {
  const file = tmpFile();
  appendPriceHistory(new Map([['AAPL', 200]]), '2026-01-01', ['AAPL'], file);
  const addedAgain = appendPriceHistory(new Map([['AAPL', 999]]), '2026-01-01', ['AAPL'], file);

  assert.equal(addedAgain, 0);
  const history = loadPriceHistory(file);
  assert.equal(history.length, 1);
  assert.equal(history[0].close, 200); // no se pisó
  fs.unlinkSync(file);
});

test('appendPriceHistory: ignora un ticker de interés sin precio fresco hoy', () => {
  const file = tmpFile();
  const added = appendPriceHistory(new Map([['AAPL', 200]]), '2026-01-01', ['AAPL', 'MISSING'], file);
  assert.equal(added, 1);
  const history = loadPriceHistory(file);
  assert.equal(history.find((h) => h.ticker === 'MISSING'), undefined);
  fs.unlinkSync(file);
});

test('appendPriceHistory: distintos días del mismo ticker se acumulan', () => {
  const file = tmpFile();
  appendPriceHistory(new Map([['AAPL', 190]]), '2026-01-01', ['AAPL'], file);
  appendPriceHistory(new Map([['AAPL', 200]]), '2026-01-02', ['AAPL'], file);

  const history = loadPriceHistory(file);
  assert.equal(history.length, 2);
  assert.deepEqual(history.map((h) => h.date), ['2026-01-01', '2026-01-02']);
  fs.unlinkSync(file);
});

test('loadPriceHistory: sin archivo previo, devuelve array vacío', () => {
  const file = tmpFile();
  assert.deepEqual(loadPriceHistory(file), []);
});
