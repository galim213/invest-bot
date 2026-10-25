'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { pickCoreByScreen } = require('../lib/coreScreen');

function company(overrides = {}) {
  return {
    sector: 'Technology',
    dividendYield: 0.02,
    returnOnEquity: 0.15,
    profitMargin: 0.1,
    revenueGrowth: 0.05,
    debtToEquity: 50,
    trailingPE: 20,
    ...overrides,
  };
}

test('pickCoreByScreen: excluye empresas que no pagan dividendo', () => {
  const data = new Map([
    ['AAPL', company({ dividendYield: 0.02 })],
    ['TSLA', company({ dividendYield: 0 })],
    ['GOOG', company({ dividendYield: null })],
  ]);
  const result = pickCoreByScreen(data);
  assert.equal(result.totalEligible, 1);
  assert.ok(result.picks.every((p) => p.ticker === 'AAPL'));
});

test('pickCoreByScreen: excluye empresas no rentables (ROE o margen <= 0)', () => {
  const data = new Map([
    ['A', company({ returnOnEquity: 0.1, profitMargin: 0.1 })],
    ['B', company({ returnOnEquity: -0.05, profitMargin: 0.1 })], // ROE negativo
    ['C', company({ returnOnEquity: 0.1, profitMargin: -0.02 })], // margen negativo
  ]);
  const result = pickCoreByScreen(data);
  assert.equal(result.totalEligible, 1);
  assert.equal(result.picks[0].ticker, 'A');
});

test('pickCoreByScreen: ordena por quality score descendente y respeta topN', () => {
  const data = new Map([
    ['LOW', company({ returnOnEquity: 0.05, profitMargin: 0.05, revenueGrowth: 0.01, debtToEquity: 200, trailingPE: 40 })],
    ['MID', company({ returnOnEquity: 0.15, profitMargin: 0.15, revenueGrowth: 0.08, debtToEquity: 80, trailingPE: 20 })],
    ['HIGH', company({ returnOnEquity: 0.3, profitMargin: 0.3, revenueGrowth: 0.2, debtToEquity: 10, trailingPE: 10 })],
  ]);
  const result = pickCoreByScreen(data, { topN: 2 });
  assert.equal(result.picks.length, 2);
  assert.equal(result.picks[0].ticker, 'HIGH');
  assert.equal(result.picks[1].ticker, 'MID');
});

test('pickCoreByScreen: respeta un minDividendYield más exigente', () => {
  const data = new Map([
    ['LOWYIELD', company({ dividendYield: 0.005 })],
    ['HIGHYIELD', company({ dividendYield: 0.04 })],
  ]);
  const result = pickCoreByScreen(data, { minDividendYield: 0.01 });
  assert.equal(result.totalEligible, 1);
  assert.equal(result.picks[0].ticker, 'HIGHYIELD');
});

test('pickCoreByScreen: totalEvaluated cuenta el universo completo, no solo los elegibles', () => {
  const data = new Map([
    ['AAPL', company({ dividendYield: 0.02 })],
    ['TSLA', company({ dividendYield: 0 })],
  ]);
  const result = pickCoreByScreen(data);
  assert.equal(result.totalEvaluated, 2);
  assert.equal(result.totalEligible, 1);
});
