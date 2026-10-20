'use strict';

const fs = require('fs');
const path = require('path');

const { STARTING_CAPITAL, CORE_ALLOCATION_PCT, SATELLITE_ALLOCATION_PCT, CORE_HOLDINGS } = require('../config');
const portfolio = require('./portfolio');

const STATE_PATH = path.join(__dirname, '..', 'data', 'portfolio.json');

/**
 * El portfolio real tiene dos sub-portfolios independientes:
 * - `core`: 70% del capital, compra única diversificada en empresas de calidad
 *   con dividendo, se mantiene a largo plazo (no tradea señales técnicas).
 * - `satellite`: 30% del capital, el motor técnico multi-factor de siempre
 *   sobre el S&P 500 completo — la porción de mayor riesgo/actividad.
 *
 * Esto refleja cómo arma una cartera real alguien que quiere tanto estabilidad
 * (dividendos, apreciación de largo plazo) como aprender/buscar ganancias de
 * corto plazo con una porción menor — ver GRADUATION_CRITERIA.md para el
 * contexto de por qué el satellite no tiene edge validado todavía.
 */
function loadPortfolio() {
  if (!fs.existsSync(STATE_PATH)) {
    const state = {
      core: portfolio.initialState(STARTING_CAPITAL * CORE_ALLOCATION_PCT),
      satellite: portfolio.initialState(STARTING_CAPITAL * SATELLITE_ALLOCATION_PCT),
    };
    savePortfolio(state);
    return state;
  }
  return JSON.parse(fs.readFileSync(STATE_PATH, 'utf8'));
}

function savePortfolio(state) {
  fs.mkdirSync(path.dirname(STATE_PATH), { recursive: true });
  fs.writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
}

/**
 * Si el core todavía no tiene posiciones (primera corrida), compra en partes
 * iguales los CORE_HOLDINGS con el cash disponible. No vuelve a comprar
 * después — es buy-once-and-hold, no dollar-cost-averaging automático (se
 * podría sumar más adelante si se simulan aportes periódicos).
 */
function initCoreIfEmpty(coreState, pricesByTicker, date) {
  if (Object.keys(coreState.positions).length > 0 || coreState.history.length > 0) return [];

  const available = CORE_HOLDINGS.filter((t) => pricesByTicker.get(t) != null);
  if (available.length === 0) return [];

  const perTicker = coreState.cash / available.length;
  const trades = [];
  for (const ticker of available) {
    const price = pricesByTicker.get(ticker);
    const trade = portfolio.buy(coreState, {
      ticker,
      price,
      usdAmount: perTicker,
      date,
      reason: `Compra inicial del core: ${(100 / available.length).toFixed(1)}% del sleeve de largo plazo en partes iguales.`,
    });
    if (trade) trades.push(trade);
  }
  return trades;
}

/**
 * Acredita dividendos pagados desde la última corrida. Guarda `lastDividendCheck`
 * por posición para no pagar el mismo dividendo dos veces si el bot corre varios
 * días seguidos o se salta alguno (feriados, etc.).
 */
function applyDividends(coreState, dividendsByTicker, date) {
  const credited = [];
  for (const [ticker, pos] of Object.entries(coreState.positions)) {
    const divs = dividendsByTicker.get(ticker);
    if (!divs || divs.length === 0) continue;

    const since = pos.lastDividendCheck || pos.openedAt;
    const pending = divs.filter((d) => d.date > since && d.date <= date);
    for (const d of pending) {
      const entry = portfolio.creditDividend(coreState, {
        ticker,
        amountPerShare: d.amountPerShare,
        shares: pos.shares,
        date: d.date,
      });
      if (entry) credited.push(entry);
    }
    pos.lastDividendCheck = date;
  }
  return credited;
}

module.exports = { STATE_PATH, loadPortfolio, savePortfolio, initCoreIfEmpty, applyDividends };
