'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { buildGlobalWatchlist, buildGlobalWatchlistMarkdown } = require('../lib/globalWatch');

function ev(ticker, score, overrides = {}) {
  return { ticker, score, signal: score >= 35 ? 'BUY' : score <= -35 ? 'SELL' : 'HOLD', lastClose: 50, reasons: ['x'], ...overrides };
}

test('buildGlobalWatchlist: adjunta sector y país desde el mapa de metadata', () => {
  const evaluations = [ev('TSM', 90)];
  const meta = new Map([['TSM', { sector: 'Information Technology', country: 'Taiwan' }]]);
  const result = buildGlobalWatchlist(evaluations, meta);

  assert.equal(result.top[0].sector, 'Information Technology');
  assert.equal(result.top[0].country, 'Taiwan');
});

test('buildGlobalWatchlist: ordena por score y respeta topN', () => {
  const evaluations = [ev('A', 90), ev('B', 10), ev('C', -90)];
  const result = buildGlobalWatchlist(evaluations, new Map(), 1);
  assert.equal(result.top[0].ticker, 'A');
  assert.equal(result.bottom[0].ticker, 'C');
});

test('buildGlobalWatchlist: excluye evaluaciones con error', () => {
  const evaluations = [ev('A', 90), { ticker: 'B', error: 'x', score: 0 }];
  const result = buildGlobalWatchlist(evaluations, new Map());
  assert.equal(result.totalEvaluated, 1);
});

test('buildGlobalWatchlistMarkdown: aclara que es solo seguimiento y el riesgo adicional de ADRs', () => {
  const md = buildGlobalWatchlistMarkdown({ date: '2026-10-22', watchlist: { top: [], bottom: [], totalEvaluated: 0 } });
  assert.ok(/NO compra ni vende/.test(md));
  assert.ok(/deslisting/.test(md));
});
