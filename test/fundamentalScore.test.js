'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { buildQualityScores, qualityScoreToTilt } = require('../lib/fundamentalScore');

const good = { returnOnEquity: 0.3, profitMargin: 0.25, revenueGrowth: 0.2, debtToEquity: 20, trailingPE: 15 };
const mid = { returnOnEquity: 0.15, profitMargin: 0.1, revenueGrowth: 0.08, debtToEquity: 80, trailingPE: 25 };
const bad = { returnOnEquity: 0.02, profitMargin: 0.01, revenueGrowth: -0.1, debtToEquity: 200, trailingPE: 60 };

test('buildQualityScores: ordena good > mid > bad y los extremos dan 100 y 0', () => {
  const s = buildQualityScores(new Map([['G', good], ['M', mid], ['B', bad]]));
  assert.equal(s.get('G').qualityScore, 100);
  assert.equal(s.get('B').qualityScore, 0);
  assert.ok(s.get('M').qualityScore > 0 && s.get('M').qualityScore < 100);
});

test('buildQualityScores: P/E negativo recibe percentil 0 en ese factor', () => {
  const loss = { ...good, trailingPE: -5 };
  const s = buildQualityScores(new Map([['L', loss], ['M', mid], ['B', bad]]));
  assert.equal(s.get('L').parts.pe, 0);
});

test('buildQualityScores: factores faltantes se renormalizan, sin datos da null', () => {
  const partial = { returnOnEquity: 0.3, profitMargin: 0.25 };
  const s = buildQualityScores(new Map([['P', partial], ['B', bad], ['E', {}]]));
  assert.equal(s.get('P').parts.growth, null);
  assert.equal(s.get('P').qualityScore, 100);
  assert.equal(s.get('E').qualityScore, null);
});

test('buildQualityScores: un solo ticker queda en percentil 50', () => {
  const s = buildQualityScores(new Map([['X', good]]));
  assert.equal(s.get('X').qualityScore, 50);
});

test('qualityScoreToTilt: lineal entre -max y +max, null = 0', () => {
  assert.equal(qualityScoreToTilt(100, 10), 10);
  assert.equal(qualityScoreToTilt(0, 10), -10);
  assert.equal(qualityScoreToTilt(50, 10), 0);
  assert.equal(qualityScoreToTilt(75, 10), 5);
  assert.equal(qualityScoreToTilt(null, 10), 0);
});
