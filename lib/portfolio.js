'use strict';

const fs = require('fs');
const path = require('path');
const { STARTING_CAPITAL } = require('../config');

const STATE_PATH = path.join(__dirname, '..', 'data', 'portfolio.json');

function initialState() {
  return {
    startingCapital: STARTING_CAPITAL,
    cash: STARTING_CAPITAL,
    positions: {}, // ticker -> { shares, avgCost, openedAt }
    history: [], // trades ejecutados
    dailySnapshots: [], // { date, totalValue, cash, pnl, pnlPct }
    createdAt: new Date().toISOString(),
  };
}

function load() {
  if (!fs.existsSync(STATE_PATH)) {
    const state = initialState();
    save(state);
    return state;
  }
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

/** Ejecuta una compra en USD (no en shares) respetando el cash disponible. */
function buy(state, { ticker, price, usdAmount, date, reason }) {
  const amount = Math.min(usdAmount, state.cash);
  if (amount <= 1) return null; // evita micro-trades irrelevantes
  const shares = amount / price;

  const existing = state.positions[ticker];
  if (existing) {
    const totalCost = existing.avgCost * existing.shares + amount;
    const totalShares = existing.shares + shares;
    existing.avgCost = totalCost / totalShares;
    existing.shares = totalShares;
  } else {
    state.positions[ticker] = { shares, avgCost: price, openedAt: date };
  }

  state.cash -= amount;

  const trade = { date, action: 'BUY', ticker, shares, price, usdAmount: amount, reason };
  state.history.push(trade);
  return trade;
}

/** Vende una fracción (0-1] de las shares actuales de un ticker. */
function sell(state, { ticker, price, fraction = 1, date, reason }) {
  const pos = state.positions[ticker];
  if (!pos) return null;

  const sharesToSell = pos.shares * fraction;
  const proceeds = sharesToSell * price;
  const realizedPnl = (price - pos.avgCost) * sharesToSell;

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
    realizedPnl,
    reason,
  };
  state.history.push(trade);
  return trade;
}

function snapshot(state, { date, pricesByTicker }) {
  const totalValue = portfolioValue(state, pricesByTicker);
  const pnl = totalValue - state.startingCapital;
  const pnlPct = (pnl / state.startingCapital) * 100;
  const entry = { date, totalValue, cash: state.cash, pnl, pnlPct };
  state.dailySnapshots.push(entry);
  return entry;
}

module.exports = { STATE_PATH, load, save, initialState, portfolioValue, buy, sell, snapshot };
