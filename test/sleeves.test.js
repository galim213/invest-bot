'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const portfolio = require('../lib/portfolio');
const sleeves = require('../lib/sleeves');
const { CORE_HOLDINGS } = require('../config');

function pricesFor(tickers, price = 100) {
  return new Map(tickers.map((t) => [t, price]));
}

test('initCoreIfEmpty: compra en partes iguales todos los CORE_HOLDINGS con precio', () => {
  const core = portfolio.initialState(700);
  const trades = sleeves.initCoreIfEmpty(core, pricesFor(CORE_HOLDINGS), '2026-01-02');
  assert.equal(trades.length, CORE_HOLDINGS.length);
  assert.equal(Object.keys(core.positions).length, CORE_HOLDINGS.length);
  assert.ok(core.cash >= -1e-9 && core.cash < 700 * 0.05);
});

test('initCoreIfEmpty: omite tickers sin precio', () => {
  const core = portfolio.initialState(700);
  const trades = sleeves.initCoreIfEmpty(core, pricesFor(CORE_HOLDINGS.slice(1)), '2026-01-02');
  assert.equal(trades.length, CORE_HOLDINGS.length - 1);
  assert.equal(core.positions[CORE_HOLDINGS[0]], undefined);
});

test('initCoreIfEmpty: no vuelve a comprar si ya hay posiciones o historial', () => {
  const core = portfolio.initialState(700);
  sleeves.initCoreIfEmpty(core, pricesFor(CORE_HOLDINGS), '2026-01-02');
  const again = sleeves.initCoreIfEmpty(core, pricesFor(CORE_HOLDINGS), '2026-01-03');
  assert.deepEqual(again, []);
});

test('initCoreIfEmpty: sin ningún precio disponible no hace nada', () => {
  const core = portfolio.initialState(700);
  assert.deepEqual(sleeves.initCoreIfEmpty(core, new Map(), '2026-01-02'), []);
  assert.equal(core.cash, 700);
});

test('applyDividends: acredita solo dividendos posteriores al último chequeo y no los duplica', () => {
  const core = portfolio.initialState(700);
  sleeves.initCoreIfEmpty(core, pricesFor(CORE_HOLDINGS), '2026-01-02');
  const t = CORE_HOLDINGS[0];
  const shares = core.positions[t].shares;
  const divs = new Map([[t, [
    { date: '2025-12-01', amountPerShare: 1 }, // anterior a la apertura
    { date: '2026-02-01', amountPerShare: 2 },
  ]]]);

  const cashBefore = core.cash;
  const first = sleeves.applyDividends(core, divs, '2026-03-01');
  assert.equal(first.length, 1);
  assert.ok(Math.abs(core.cash - (cashBefore + 2 * shares)) < 1e-9);

  const second = sleeves.applyDividends(core, divs, '2026-03-02');
  assert.equal(second.length, 0);
  assert.ok(Math.abs(core.cash - (cashBefore + 2 * shares)) < 1e-9);
});

test('applyDividends: ignora dividendos con fecha futura a la corrida', () => {
  const core = portfolio.initialState(700);
  sleeves.initCoreIfEmpty(core, pricesFor(CORE_HOLDINGS), '2026-01-02');
  const t = CORE_HOLDINGS[0];
  const divs = new Map([[t, [{ date: '2026-06-01', amountPerShare: 3 }]]]);
  assert.equal(sleeves.applyDividends(core, divs, '2026-03-01').length, 0);
});
