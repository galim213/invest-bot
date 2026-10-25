'use strict';

const test = require('node:test');
const assert = require('node:assert');
const c = require('../lib/concentration');

test('effectiveHoldings: pesos iguales → N; concentrado → menos', () => {
  assert.ok(Math.abs(c.effectiveHoldings({ A: 0.25, B: 0.25, C: 0.25, D: 0.25 }) - 4) < 1e-9);
  const n = c.effectiveHoldings({ A: 0.4, B: 0.25, C: 0.15, D: 0.12, E: 0.08 });
  assert.ok(Math.abs(n - 3.76) < 0.01);
  assert.strictEqual(c.effectiveHoldings({}), null);
});

test('pearson: perfecta, inversa y serie constante', () => {
  assert.ok(Math.abs(c.pearson([1, 2, 3, 4], [2, 4, 6, 8]) - 1) < 1e-9);
  assert.ok(Math.abs(c.pearson([1, 2, 3, 4], [4, 3, 2, 1]) + 1) < 1e-9);
  assert.strictEqual(c.pearson([1, 1, 1], [1, 2, 3]), null);
});

test('correlationAdjustedN: ρ=1 → 1, ρ=0 → N, ρ negativo se trunca', () => {
  assert.ok(Math.abs(c.correlationAdjustedN(4, 1) - 1) < 1e-9);
  assert.ok(Math.abs(c.correlationAdjustedN(4, 0) - 4) < 1e-9);
  assert.ok(Math.abs(c.correlationAdjustedN(4, -0.5) - 4) < 1e-9);
  assert.strictEqual(c.correlationAdjustedN(4, null), null);
});

test('sectorWeights agrupa y ordena; weightsByTicker ignora sin precio', () => {
  const w = c.weightsByTicker({ A: { shares: 1 }, B: { shares: 1 }, C: { shares: 5 } }, new Map([['A', 100], ['B', 100]]));
  assert.deepStrictEqual(w, { A: 0.5, B: 0.5 });
  const s = c.sectorWeights({ A: 0.3, B: 0.3, C: 0.4 }, new Map([['A', 'HC'], ['B', 'HC'], ['C', 'Tech']]));
  assert.strictEqual(s[0].sector, 'HC');
  assert.ok(Math.abs(s[0].weight - 0.6) < 1e-9);
});

test('buildConcentration: dos series idénticas → correlación ≈ 1; sin posiciones → null', () => {
  const candles = Array.from({ length: 30 }, (_, i) => ({ close: 100 + Math.sin(i) * 5 + i }));
  const r = c.buildConcentration({
    positions: { A: { shares: 1 }, B: { shares: 1 } },
    prices: new Map([['A', 10], ['B', 10]]),
    sectorByTicker: new Map([['A', 'HC'], ['B', 'HC']]),
    candlesByTicker: new Map([['A', { candles }], ['B', { candles }]]),
  });
  assert.ok(r.avgPairwiseCorrelation > 0.999);
  assert.ok(Math.abs(r.correlationAdjustedN - 1) < 0.01);
  assert.strictEqual(r.topSectorWeight, 1);
  assert.strictEqual(c.buildConcentration({ positions: {}, prices: new Map(), sectorByTicker: new Map() }), null);
  assert.deepStrictEqual(c.concentrationMarkdown(null), []);
});
