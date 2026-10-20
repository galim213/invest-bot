'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { runDecisionEngine } = require('../lib/decide');
const portfolio = require('../lib/portfolio');
const { STRATEGY } = require('../config');

function ev(ticker, overrides = {}) {
  return { ticker, lastClose: 100, score: 0, signal: 'HOLD', reasons: ['x'], metrics: {}, ...overrides };
}

test('runDecisionEngine: con allowShorting apagado (default) nunca abre una posición corta nueva', () => {
  const state = portfolio.initialState(1000);
  const evaluations = [ev('BEAR', { lastClose: 50, score: STRATEGY.shortThreshold - 10 })];

  runDecisionEngine(state, evaluations, '2026-01-01'); // sin pasar allowShorting

  assert.deepEqual(state.shorts, {});
});

test('runDecisionEngine: con allowShorting prendido, abre un corto si el score es suficientemente bajista', () => {
  const state = portfolio.initialState(1000);
  const evaluations = [ev('BEAR', { lastClose: 50, score: STRATEGY.shortThreshold - 10, reasons: ['muy bajista'] })];

  const { trades } = runDecisionEngine(state, evaluations, '2026-01-01', { allowShorting: true });

  assert.equal(trades.length, 1);
  assert.equal(trades[0].action, 'SHORT');
  assert.ok(state.shorts.BEAR);
});

test('runDecisionEngine: no abre un corto si el score no llega al umbral (solo HOLD/SELL normal)', () => {
  const state = portfolio.initialState(1000);
  const evaluations = [ev('MILD', { lastClose: 50, score: STRATEGY.sellThreshold - 5 })]; // bajista pero no "short-worthy"

  runDecisionEngine(state, evaluations, '2026-01-01', { allowShorting: true });

  assert.deepEqual(state.shorts, {});
});

test('runDecisionEngine: no abre un corto en un ticker que ya se tiene en largo', () => {
  const state = portfolio.initialState(1000);
  portfolio.buy(state, { ticker: 'AAPL', price: 50, usdAmount: 100, date: '2026-01-01', reason: 'ya en cartera' });
  const evaluations = [ev('AAPL', { lastClose: 50, score: STRATEGY.shortThreshold - 10 })];

  runDecisionEngine(state, evaluations, '2026-01-02', { allowShorting: true });

  assert.deepEqual(state.shorts, {});
});

test('runDecisionEngine: cubre un corto por el stop obligatorio si el precio sube demasiado en contra', () => {
  const state = portfolio.initialState(1000);
  portfolio.shortSell(state, { ticker: 'BEAR', price: 100, usdAmount: 200, date: '2026-01-01', reason: 'open' });

  // El precio subió más que shortStopLossPct desde la entrada -> cobertura obligatoria.
  const upPrice = 100 * (1 + STRATEGY.shortStopLossPct + 0.05);
  const evaluations = [ev('BEAR', { lastClose: upPrice, score: 0 })];

  const { trades } = runDecisionEngine(state, evaluations, '2026-01-05', { allowShorting: true });

  assert.ok(trades.some((t) => t.action === 'COVER' && /Stop obligatorio/.test(t.reason)));
  assert.equal(state.shorts.BEAR, undefined);
});

test('runDecisionEngine: cubre un corto por toma de ganancias si el precio cayó lo suficiente', () => {
  const state = portfolio.initialState(1000);
  portfolio.shortSell(state, { ticker: 'BEAR', price: 100, usdAmount: 200, date: '2026-01-01', reason: 'open' });

  const downPrice = 100 * (1 + STRATEGY.shortTakeProfitPct - 0.02); // más abajo que el umbral
  const evaluations = [ev('BEAR', { lastClose: downPrice, score: STRATEGY.shortThreshold - 10 })];

  const { trades } = runDecisionEngine(state, evaluations, '2026-01-05', { allowShorting: true });

  assert.ok(trades.some((t) => t.action === 'COVER' && /Toma de ganancias/.test(t.reason)));
});

test('runDecisionEngine: cubre un corto si la convicción bajista se perdió (score ya no es de venta)', () => {
  const state = portfolio.initialState(1000);
  portfolio.shortSell(state, { ticker: 'BEAR', price: 100, usdAmount: 200, date: '2026-01-01', reason: 'open' });

  // Precio sin moverse lo suficiente para stop/take-profit, pero el score ya mejoró.
  const evaluations = [ev('BEAR', { lastClose: 100, score: STRATEGY.sellThreshold + 10 })];

  const { trades } = runDecisionEngine(state, evaluations, '2026-01-05', { allowShorting: true });

  assert.ok(trades.some((t) => t.action === 'COVER' && /convicción bajista se perdió/.test(t.reason)));
});

test('runDecisionEngine: el régimen bajista bloquea compras largas nuevas pero no el cierre de cortos', () => {
  const state = portfolio.initialState(1000);
  portfolio.shortSell(state, { ticker: 'BEAR', price: 100, usdAmount: 200, date: '2026-01-01', reason: 'open' });

  const upPrice = 100 * (1 + STRATEGY.shortStopLossPct + 0.05);
  const evaluations = [
    ev('BEAR', { lastClose: upPrice, score: 0 }),
    ev('BUY_CANDIDATE', { lastClose: 50, score: STRATEGY.buyThreshold + 10, signal: 'BUY' }),
  ];

  const { trades, warnings } = runDecisionEngine(state, evaluations, '2026-01-05', { regimeBullish: false, allowShorting: true });

  assert.ok(warnings.some((w) => /no se abren compras largas/.test(w)));
  assert.equal(state.positions.BUY_CANDIDATE, undefined); // no compró pese a la señal BUY
  assert.ok(trades.some((t) => t.action === 'COVER')); // pero sí cubrió el short por el stop
});
