'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { runBacktest } = require('../lib/simulate');
const { STARTING_CAPITAL } = require('../config');

function mkCandles(n, fn) {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date(Date.UTC(2024, 0, 1 + i)).toISOString().slice(0, 10);
    const p = fn(i);
    return { date: d, open: p, high: p, low: p, close: p, adjClose: p, volume: 1e6 };
  });
}

test('sin tickers: capital intacto, sin trades y período correcto', () => {
  const bench = mkCandles(10, () => 100);
  const simDates = bench.map((c) => c.date);
  const r = runBacktest({ data: new Map(), simDates, benchmarkCandles: bench });
  assert.equal(r.tradesCount, 0);
  assert.equal(r.finalValue, STARTING_CAPITAL);
  assert.equal(r.returnPct, 0);
  assert.deepEqual(r.period, { from: simDates[0], to: simDates.at(-1), days: 10 });
  assert.equal(r.dailySnapshots.length, 10);
  assert.equal(r.winRatePct, null);
});

test('benchmark: retorno % entre primera y última fecha simulada', () => {
  const bench = mkCandles(5, (i) => 100 + i * 5); // 100 -> 120
  const simDates = bench.map((c) => c.date);
  const r = runBacktest({ data: new Map(), simDates, benchmarkCandles: bench });
  assert.ok(Math.abs(r.benchmark.returnPct - 20) < 1e-9);
});

test('sin benchmarkCandles: benchmark es null', () => {
  const bench = mkCandles(3, () => 100);
  const r = runBacktest({ data: new Map(), simDates: bench.map((c) => c.date), benchmarkCandles: null });
  assert.equal(r.benchmark, null);
});

test('el resultado es consistente: trades cerrados = ganadores + perdedores', () => {
  const n = 320;
  const up = mkCandles(n, (i) => 100 + i * 0.3 + Math.sin(i / 5) * 4);
  const data = new Map([['TEST', { candles: up }]]);
  const simDates = up.slice(-40).map((c) => c.date);
  const r = runBacktest({ data, simDates, benchmarkCandles: up });
  assert.equal(r.closedTradesCount, r.winnersCount + r.losersCount);
  assert.equal(r.tradesCount, r.trades.length);
  assert.equal(r.dailySnapshots.length, simDates.length);
  assert.ok(Number.isFinite(r.finalValue));
});
