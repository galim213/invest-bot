'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const marketData = require('../lib/marketData');
const macroRisk = require('../lib/macroRisk');

const { TICKERS } = macroRisk;

function candles(closes) {
  return closes.map((close) => ({ close }));
}

function series(n, fn) {
  return candles(Array.from({ length: n }, (_, i) => fn(i)));
}

async function withStub(dataByTicker, fn) {
  const original = marketData.fetchAll;
  marketData.fetchAll = async () => ({
    data: new Map(Object.entries(dataByTicker).map(([t, c]) => [t, { candles: c }])),
    errors: [],
  });
  try {
    return await fn();
  } finally {
    marketData.fetchAll = original;
  }
}

test('classifyVix: umbrales 20/30/40', () => {
  assert.equal(macroRisk.classifyVix(12).level, 'CALMA');
  assert.equal(macroRisk.classifyVix(19.99).level, 'CALMA');
  assert.equal(macroRisk.classifyVix(20).level, 'ELEVADO');
  assert.equal(macroRisk.classifyVix(30).level, 'ALTO');
  assert.equal(macroRisk.classifyVix(40).level, 'EXTREMO');
  assert.equal(macroRisk.classifyVix(80).level, 'EXTREMO');
});

test('fetchMacroRiskPanel: curva invertida cuando 10y < 3m', async () => {
  const panel = await withStub(
    {
      [TICKERS.yield10y]: candles([3.9]),
      [TICKERS.yield3m]: candles([4.5]),
    },
    () => macroRisk.fetchMacroRiskPanel(),
  );
  assert.ok(Math.abs(panel.yieldSpread - -0.6) < 1e-9);
  assert.equal(panel.inverted, true);
});

test('fetchMacroRiskPanel: curva normal no está invertida', async () => {
  const panel = await withStub(
    {
      [TICKERS.yield10y]: candles([4.5]),
      [TICKERS.yield3m]: candles([4.0]),
    },
    () => macroRisk.fetchMacroRiskPanel(),
  );
  assert.equal(panel.inverted, false);
});

test('fetchMacroRiskPanel: sin datos devuelve nulls y no inventa señales', async () => {
  const panel = await withStub({}, () => macroRisk.fetchMacroRiskPanel());
  assert.equal(panel.vix, null);
  assert.equal(panel.vixClass, null);
  assert.equal(panel.yieldSpread, null);
  assert.equal(panel.inverted, false);
  assert.equal(panel.creditSpreadProxy20d, null);
  assert.equal(panel.creditStress, false);
  assert.equal(panel.dxyTrend10d, null);
});

test('fetchMacroRiskPanel: estrés de crédito si HYG rinde >1.5% menos que LQD en 20d', async () => {
  // HYG cae 3% en 20 días, LQD sube 0%: proxy = -3% < -1.5%
  const hyg = series(30, (i) => (i < 9 ? 100 : i === 29 ? 97 : 100 - (i - 9) * 0.15));
  hyg[9] = { close: 100 };
  const lqd = series(30, () => 100);
  const panel = await withStub(
    { [TICKERS.highYieldBond]: hyg, [TICKERS.investmentGradeBond]: lqd },
    () => macroRisk.fetchMacroRiskPanel(),
  );
  assert.ok(panel.creditSpreadProxy20d < -0.015);
  assert.equal(panel.creditStress, true);
});

test('fetchMacroRiskPanel: sin estrés de crédito si ambos rinden parecido; pocas velas => null', async () => {
  const flat = series(30, () => 100);
  const ok = await withStub(
    { [TICKERS.highYieldBond]: flat, [TICKERS.investmentGradeBond]: flat },
    () => macroRisk.fetchMacroRiskPanel(),
  );
  assert.equal(ok.creditSpreadProxy20d, 0);
  assert.equal(ok.creditStress, false);

  const short = series(10, () => 100);
  const few = await withStub(
    { [TICKERS.highYieldBond]: short, [TICKERS.investmentGradeBond]: short },
    () => macroRisk.fetchMacroRiskPanel(),
  );
  assert.equal(few.creditSpreadProxy20d, null);
});

test('fetchMacroRiskPanel: tendencia del VIX a 10 velas y clasificación', async () => {
  const vix = candles([...Array(9).fill(15), 15, 35]);
  // at(-10) es el 2do elemento (15); último 35
  const panel = await withStub({ [TICKERS.vix]: vix }, () => macroRisk.fetchMacroRiskPanel());
  assert.equal(panel.vix, 35);
  assert.equal(panel.vixTrend10d, 20);
  assert.equal(panel.vixClass.level, 'ALTO');
});
