'use strict';

const fs = require('fs');
const path = require('path');
const { STARTING_CAPITAL, STRATEGY } = require('../config');

const STATE_PATH = path.join(__dirname, '..', 'data', 'portfolio.json');

/** `startingCapital` parametrizable: el portfolio real son dos sub-portfolios
 * (core + satellite, ver lib/sleeves.js), cada uno con su propio capital inicial. */
function initialState(startingCapital = STARTING_CAPITAL) {
  return {
    startingCapital,
    cash: startingCapital,
    positions: {}, // ticker -> { shares, avgCost, openedAt }
    history: [], // trades ejecutados (incluye dividendos, action: 'DIVIDEND')
    dailySnapshots: [], // { date, totalValue, cash, pnl, pnlPct }
    createdAt: new Date().toISOString(),
  };
}

function load() {
  if (!fs.existsSync(STATE_PATH)) return null;
  return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
}

function save(state) {
  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}

function portfolioValue(state, pricesByTicker) {
  let value = state.cash;
  for (const [ticker, pos] of Object.entries(state.positions)) {
    const price = pricesByTicker.get(ticker);
    if (price != null) value += pos.shares * price;
    else value += pos.shares * pos.avgCost; // fallback si no hay precio fresco
  }
  return value;
}

/**
 * Ejecuta una compra en USD (no en shares) respetando el cash disponible.
 * Aplica un costo de transacción simulado (comisión + spread efectivo): un
 * backtest sin fricción siempre se ve mejor que la realidad.
 */
function buy(state, { ticker, price, usdAmount, date, reason }) {
  const costPct = STRATEGY.transactionCostPct || 0;
  // `amount` es lo que se invierte en shares; el costo se paga aparte, sobre el cash.
  const amount = Math.min(usdAmount, state.cash / (1 + costPct));
  if (amount <= 1) return null; // evita micro-trades irrelevantes
  const shares = amount / price;
  const fee = amount * costPct;

  const existing = state.positions[ticker];
  if (existing) {
    const totalCost = existing.avgCost * existing.shares + amount;
    const totalShares = existing.shares + shares;
    existing.avgCost = totalCost / totalShares;
    existing.shares = totalShares;
  } else {
    state.positions[ticker] = { shares, avgCost: price, openedAt: date };
  }

  state.cash -= amount + fee;

  const trade = { date, action: 'BUY', ticker, shares, price, usdAmount: amount, fee, reason };
  state.history.push(trade);
  return trade;
}

/** Vende una fracción (0-1] de las shares actuales de un ticker. */
function sell(state, { ticker, price, fraction = 1, date, reason }) {
  const pos = state.positions[ticker];
  if (!pos) return null;

  const costPct = STRATEGY.transactionCostPct || 0;
  const sharesToSell = pos.shares * fraction;
  const grossProceeds = sharesToSell * price;
  const fee = grossProceeds * costPct;
  const proceeds = grossProceeds - fee;
  const realizedPnl = (price - pos.avgCost) * sharesToSell - fee;

  pos.shares -= sharesToSell;
  state.cash += proceeds;
  if (pos.shares <= 1e-6) delete state.positions[ticker];

  const trade = {
    date,
    action: fraction >= 1 ? 'SELL' : 'TRIM',
    ticker,
    shares: sharesToSell,
    price,
    usdAmount: proceeds,
    fee,
    realizedPnl,
    reason,
  };
  state.history.push(trade);
  return trade;
}

/** Acredita un dividendo en efectivo (no cambia shares). Usado por el sleeve core. */
function creditDividend(state, { ticker, amountPerShare, shares, date }) {
  const amount = amountPerShare * shares;
  if (amount <= 0) return null;
  state.cash += amount;
  const entry = { date, action: 'DIVIDEND', ticker, shares, price: amountPerShare, usdAmount: amount, reason: `Dividendo de ${ticker}: $${amountPerShare.toFixed(4)}/acción.` };
  state.history.push(entry);
  return entry;
}

function snapshot(state, { date, pricesByTicker }) {
  const totalValue = portfolioValue(state, pricesByTicker);
  const pnl = totalValue - state.startingCapital;
  const pnlPct = (pnl / state.startingCapital) * 100;
  const entry = { date, totalValue, cash: state.cash, pnl, pnlPct };
  state.dailySnapshots.push(entry);
  return entry;
}

module.exports = { STATE_PATH, load, save, initialState, portfolioValue, buy, sell, creditDividend, snapshot };
