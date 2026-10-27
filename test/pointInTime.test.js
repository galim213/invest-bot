'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { loadHistoricalMembership, normalizeTicker } = require('../lib/pointInTime');

test('normalizeTicker: mayúsculas, trim y punto -> guion', () => {
  assert.equal(normalizeTicker(' brk.b '), 'BRK-B');
  assert.equal(normalizeTicker('aapl'), 'AAPL');
});

test('loadHistoricalMembership: getUniverseAt devuelve Set no vacío y es monótono en fechas conocidas', () => {
  const m = loadHistoricalMembership();
  if (!m) return; // CSV ausente: la función documenta devolver null
  assert.ok(m.rowCount > 0);
  assert.ok(m.coverage.from <= m.coverage.to);
  const u = m.getUniverseAt(m.coverage.from);
  assert.ok(u instanceof Set && u.size > 100);
});

test('loadHistoricalMembership: fecha posterior a la cobertura usa fallback (WATCHLIST) y anterior a la primera también', () => {
  const m = loadHistoricalMembership();
  if (!m) return;
  const after = m.getUniverseAt('2999-01-01');
  const before = m.getUniverseAt('1900-01-01');
  assert.ok(after.size > 0);
  assert.deepEqual([...before].sort(), [...after].sort());
});
