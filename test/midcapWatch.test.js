'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { buildMidcapWatchlist, buildMidcapWatchlistMarkdown } = require('../lib/midcapWatch');

function ev(ticker, score, overrides = {}) {
  return { ticker, score, signal: score >= 35 ? 'BUY' : score <= -35 ? 'SELL' : 'HOLD', lastClose: 50, reasons: ['x'], ...overrides };
}

test('buildMidcapWatchlist: ordena por score y recorta a topN por extremo', () => {
  const result = buildMidcapWatchlist([ev('A', 90), ev('B', 10), ev('C', -90), ev('D', 50)], new Map(), 1);
  assert.equal(result.top[0].ticker, 'A');
  assert.equal(result.bottom[0].ticker, 'C');
  assert.equal(result.totalEvaluated, 4);
});

test('buildMidcapWatchlist: excluye errores y sin precio, y adjunta sector', () => {
  const evaluations = [ev('A', 90), { ticker: 'B', error: 'sin datos', score: 0 }, ev('C', 10, { lastClose: null })];
  const result = buildMidcapWatchlist(evaluations, new Map([['A', 'Industrials']]));
  assert.equal(result.totalEvaluated, 1);
  assert.equal(result.top[0].sector, 'Industrials');
});

test('buildMidcapWatchlistMarkdown: aclara que no opera y lista ambas tablas', () => {
  const watchlist = buildMidcapWatchlist([ev('A', 90), ev('C', -90)], new Map(), 1);
  const md = buildMidcapWatchlistMarkdown({ date: '2026-10-28', watchlist });
  assert.match(md, /NO compra ni vende/);
  assert.match(md, /Las más alcistas/);
  assert.match(md, /Las más bajistas/);
  assert.match(md, /\| A \| — \| 90 \|/);
});
