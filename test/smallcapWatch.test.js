'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { buildSmallcapWatchlist, buildSmallcapWatchlistMarkdown } = require('../lib/smallcapWatch');

function ev(ticker, score, overrides = {}) {
  return { ticker, score, signal: score >= 35 ? 'BUY' : score <= -35 ? 'SELL' : 'HOLD', lastClose: 50, reasons: ['x'], ...overrides };
}

test('buildSmallcapWatchlist: ordena por score y recorta a topN por extremo', () => {
  const evaluations = [ev('A', 90), ev('B', 10), ev('C', -90), ev('D', 50)];
  const result = buildSmallcapWatchlist(evaluations, new Map(), 1);

  assert.equal(result.top.length, 1);
  assert.equal(result.top[0].ticker, 'A');
  assert.equal(result.bottom.length, 1);
  assert.equal(result.bottom[0].ticker, 'C');
  assert.equal(result.totalEvaluated, 4);
});

test('buildSmallcapWatchlist: excluye evaluaciones con error o sin precio', () => {
  const evaluations = [ev('A', 90), { ticker: 'B', error: 'sin datos', score: 0 }, ev('C', 10, { lastClose: null })];
  const result = buildSmallcapWatchlist(evaluations, new Map());
  assert.equal(result.totalEvaluated, 1);
});

test('buildSmallcapWatchlist: adjunta el sector desde el mapa ticker->sector', () => {
  const evaluations = [ev('A', 90)];
  const result = buildSmallcapWatchlist(evaluations, new Map([['A', 'Industrials']]));
  assert.equal(result.top[0].sector, 'Industrials');
});

test('buildSmallcapWatchlistMarkdown: aclara que es solo seguimiento, nunca opera', () => {
  const md = buildSmallcapWatchlistMarkdown({ date: '2026-10-22', watchlist: { top: [], bottom: [], totalEvaluated: 0 } });
  assert.ok(/NO compra ni vende/.test(md));
  assert.ok(md.includes('S&P SmallCap 600'));
});
