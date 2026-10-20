'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const portfolio = require('../lib/portfolio');
const { STRATEGY } = require('../config');

const FEE = STRATEGY.transactionCostPct;

test('initialState: arranca con todo el capital en cash y sin posiciones', () => {
  const s = portfolio.initialState(1000);
  assert.equal(s.cash, 1000);
  assert.equal(s.startingCapital, 1000);
  assert.deepEqual(s.positions, {});
  assert.deepEqual(s.history, []);
  assert.deepEqual(s.dailySnapshots, []);
});

test('buy: descuenta cash por el monto más la comisión, y abre la posición', () => {
  const s = portfolio.initialState(1000);
  const trade = portfolio.buy(s, { ticker: 'AAPL', price: 100, usdAmount: 200, date: '2026-01-01', reason: 'test' });

  assert.equal(trade.action, 'BUY');
  assert.equal(trade.shares, 2); // 200 USD / 100 price
  assert.ok(Math.abs(trade.fee - 200 * FEE) < 1e-9);
  assert.ok(Math.abs(s.cash - (1000 - 200 - 200 * FEE)) < 1e-9);
  assert.equal(s.positions.AAPL.shares, 2);
  assert.equal(s.positions.AAPL.avgCost, 100);
});

test('buy: una segunda compra del mismo ticker promedia el costo ponderado por shares', () => {
  const s = portfolio.initialState(1000);
  portfolio.buy(s, { ticker: 'AAPL', price: 100, usdAmount: 200, date: '2026-01-01', reason: 'a' });
  portfolio.buy(s, { ticker: 'AAPL', price: 200, usdAmount: 200, date: '2026-01-02', reason: 'b' });

  // 2 shares a costo 100 + 1 share a costo 200 = 3 shares, costo promedio ponderado = 400/3
  assert.ok(Math.abs(s.positions.AAPL.shares - 3) < 1e-9);
  assert.ok(Math.abs(s.positions.AAPL.avgCost - 400 / 3) < 1e-6);
});

test('buy: no ejecuta micro-trades por debajo de 1 USD', () => {
  const s = portfolio.initialState(1000);
  const trade = portfolio.buy(s, { ticker: 'AAPL', price: 100, usdAmount: 0.5, date: '2026-01-01', reason: 'test' });
  assert.equal(trade, null);
  assert.equal(s.cash, 1000);
  assert.equal(s.positions.AAPL, undefined);
});

test('buy: nunca gasta más cash del disponible aunque usdAmount lo pida', () => {
  const s = portfolio.initialState(100);
  const trade = portfolio.buy(s, { ticker: 'AAPL', price: 10, usdAmount: 10000, date: '2026-01-01', reason: 'test' });
  // amount = min(10000, cash/(1+fee)) <= cash, así que cash nunca puede quedar negativo.
  assert.ok(s.cash >= -1e-9, `cash quedó negativo: ${s.cash}`);
  assert.ok(trade.usdAmount <= 100);
});

test('sell: vender el 100% cierra la posición y calcula el PnL realizado', () => {
  const s = portfolio.initialState(1000);
  portfolio.buy(s, { ticker: 'AAPL', price: 100, usdAmount: 200, date: '2026-01-01', reason: 'buy' });
  const trade = portfolio.sell(s, { ticker: 'AAPL', price: 150, fraction: 1, date: '2026-01-05', reason: 'sell' });

  assert.equal(trade.action, 'SELL');
  assert.equal(s.positions.AAPL, undefined); // posición cerrada por completo
  // PnL bruto esperado: (150-100)*2 shares = 100, menos la fee de venta.
  const expectedGross = (150 - 100) * 2;
  assert.ok(Math.abs(trade.realizedPnl - (expectedGross - trade.fee)) < 1e-9);
});

test('sell: una venta parcial (fraction < 1) se marca TRIM y deja resto abierto', () => {
  const s = portfolio.initialState(1000);
  portfolio.buy(s, { ticker: 'AAPL', price: 100, usdAmount: 200, date: '2026-01-01', reason: 'buy' });
  const trade = portfolio.sell(s, { ticker: 'AAPL', price: 120, fraction: 0.5, date: '2026-01-05', reason: 'trim' });

  assert.equal(trade.action, 'TRIM');
  assert.ok(Math.abs(s.positions.AAPL.shares - 1) < 1e-9); // quedó 1 de las 2 shares originales
});

test('sell: sobre un ticker sin posición no hace nada y devuelve null', () => {
  const s = portfolio.initialState(1000);
  const trade = portfolio.sell(s, { ticker: 'NOPE', price: 10, date: '2026-01-01', reason: 'x' });
  assert.equal(trade, null);
});

test('creditDividend: suma cash sin tocar shares y queda registrado en el historial', () => {
  const s = portfolio.initialState(1000);
  portfolio.buy(s, { ticker: 'JNJ', price: 100, usdAmount: 200, date: '2026-01-01', reason: 'buy' });
  const sharesBefore = s.positions.JNJ.shares;

  const div = portfolio.creditDividend(s, { ticker: 'JNJ', amountPerShare: 1.5, shares: sharesBefore, date: '2026-02-01' });

  assert.equal(div.action, 'DIVIDEND');
  assert.ok(Math.abs(s.cash - (1000 - 200 - 200 * FEE + 1.5 * sharesBefore)) < 1e-9);
  assert.equal(s.positions.JNJ.shares, sharesBefore); // no cambia shares
  assert.equal(s.history.at(-1).action, 'DIVIDEND');
});

test('creditDividend: con monto cero o negativo no hace nada', () => {
  const s = portfolio.initialState(1000);
  const div = portfolio.creditDividend(s, { ticker: 'JNJ', amountPerShare: 0, shares: 10, date: '2026-02-01' });
  assert.equal(div, null);
  assert.equal(s.cash, 1000);
});

test('snapshot: calcula pnl/pnlPct contra el capital inicial y lo guarda en dailySnapshots', () => {
  const s = portfolio.initialState(1000);
  portfolio.buy(s, { ticker: 'AAPL', price: 100, usdAmount: 500, date: '2026-01-01', reason: 'buy' });

  const prices = new Map([['AAPL', 150]]); // sube 50%
  const snap = portfolio.snapshot(s, { date: '2026-01-10', pricesByTicker: prices });

  const expectedValue = s.cash + 5 * 150; // 5 shares a 150
  assert.ok(Math.abs(snap.totalValue - expectedValue) < 1e-9);
  assert.ok(Math.abs(snap.pnl - (expectedValue - 1000)) < 1e-9);
  assert.equal(s.dailySnapshots.length, 1);
  assert.equal(s.dailySnapshots[0], snap);
});

test('portfolioValue: usa avgCost como fallback cuando no hay precio fresco para un ticker', () => {
  const s = portfolio.initialState(1000);
  portfolio.buy(s, { ticker: 'AAPL', price: 100, usdAmount: 200, date: '2026-01-01', reason: 'buy' });

  const value = portfolio.portfolioValue(s, new Map()); // sin precio para AAPL
  assert.ok(Math.abs(value - (s.cash + 2 * 100)) < 1e-9);
});
