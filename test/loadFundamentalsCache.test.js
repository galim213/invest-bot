'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('fs');
const { loadQualityScores, CACHE_PATH } = require('../lib/loadFundamentalsCache');

// Reemplaza el cache real por `content` (null = sin archivo) y lo restaura siempre.
function withCache(content, fn) {
  const backup = CACHE_PATH + '.testbak';
  const existed = fs.existsSync(CACHE_PATH);
  if (existed) fs.renameSync(CACHE_PATH, backup);
  try {
    if (content !== null) fs.writeFileSync(CACHE_PATH, content);
    fn();
  } finally {
    if (fs.existsSync(CACHE_PATH)) fs.unlinkSync(CACHE_PATH);
    if (existed) fs.renameSync(backup, CACHE_PATH);
  }
}

test('loadQualityScores: sin archivo devuelve null', () => {
  withCache(null, () => assert.equal(loadQualityScores(), null));
});

test('loadQualityScores: JSON corrupto devuelve null', () => {
  withCache('{no es json', () => assert.equal(loadQualityScores(), null));
});

test('loadQualityScores: cache sin tickers devuelve null', () => {
  withCache(JSON.stringify({ generatedAt: 'x', tickers: {} }), () => assert.equal(loadQualityScores(), null));
});

test('loadQualityScores: cache válido devuelve count, generatedAt y scores', () => {
  const tickers = {
    AAA: { ticker: 'AAA', trailingPE: 10, returnOnEquity: 0.3, profitMargins: 0.25 },
    BBB: { ticker: 'BBB', trailingPE: 40, returnOnEquity: 0.05, profitMargins: 0.02 },
  };
  withCache(JSON.stringify({ generatedAt: '2026-01-01T00:00:00Z', tickers }), () => {
    const r = loadQualityScores();
    assert.equal(r.count, 2);
    assert.equal(r.generatedAt, '2026-01-01T00:00:00Z');
    assert.ok(r.scores.has('AAA') && r.scores.has('BBB'));
  });
});
