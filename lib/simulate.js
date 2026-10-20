'use strict';

const { STARTING_CAPITAL, STRATEGY } = require('../config');
const strategy = require('./strategy');
const portfolio = require('./portfolio');
const { runDecisionEngine } = require('./decide');
const metrics = require('./metrics');
const { sma } = require('./indicators');
const { normalizeTicker } = require('./pointInTime');

/**
 * Corre la simulación día por día sobre un rango de fechas ya definido, sin
 * mirar al futuro (cada día solo ve candles hasta esa fecha inclusive).
 * Reutilizada por backtest.js (últimos N días) y validate.js (regímenes
 * históricos específicos) para no duplicar la lógica central.
 *
 * `data`: Map<ticker, {candles}> con TODA la historia disponible (se recorta
 * internamente por fecha). `simDates`: fechas a simular, en orden.
 * `benchmarkCandles`: historia del benchmark (SPY) — se usa también para el
 * filtro de régimen de mercado (no abrir compras si está bajo su SMA200).
 * `pointInTime`: opcional, resultado de `lib/pointInTime.js` — si se pasa,
 * cada día solo se consideran tickers que REALMENTE integraban el S&P 500
 * en esa fecha (evita comprar, por ejemplo, PLTR en 2019 cuando recién
 * entró al índice en 2024).
 */
function runBacktest({ data, simDates, benchmarkCandles, useRegimeFilter = false, pointInTime = null }) {
  const dateIndexByTicker = new Map();
  for (const [ticker, d] of data.entries()) {
    const idx = new Map();
    d.candles.forEach((c, i) => idx.set(c.date, i));
    dateIndexByTicker.set(ticker, idx);
  }

  const benchmarkDateIndex = new Map();
  if (benchmarkCandles) benchmarkCandles.forEach((c, i) => benchmarkDateIndex.set(c.date, i));

  function regimeBullishOn(date) {
    if (!useRegimeFilter || !benchmarkCandles) return true;
    const idx = benchmarkDateIndex.get(date);
    const upTo = idx != null ? benchmarkCandles.slice(0, idx + 1) : benchmarkCandles.filter((c) => c.date <= date);
    if (upTo.length === 0) return true; // sin datos del benchmark todavía: no bloquear
    const adjCloses = upTo.map((c) => c.adjClose ?? c.close);
    const trendSma = sma(adjCloses, STRATEGY.smaTrend);
    if (trendSma === null) return true; // sin suficiente historia para el SMA200: no bloquear
    return adjCloses.at(-1) >= trendSma;
  }

  const state = portfolio.initialState();
  const tradeLog = [];

  for (const date of simDates) {
    // El universo point-in-time limita qué se puede COMPRAR hoy, pero nunca deja
    // de trackear una posición que ya tenemos (si no, una posición que sale del
    // índice quedaría congelada sin poder venderse — ver lib/pointInTime.js).
    const universeToday = pointInTime ? pointInTime.getUniverseAt(date) : null;

    const slicedData = new Map();
    for (const [ticker, d] of data.entries()) {
      const inUniverse = !universeToday || universeToday.has(normalizeTicker(ticker));
      if (!inUniverse && !state.positions[ticker]) continue;
      const idx = dateIndexByTicker.get(ticker).get(date);
      const upTo = idx != null ? d.candles.slice(0, idx + 1) : d.candles.filter((c) => c.date <= date);
      if (upTo.length > 0) slicedData.set(ticker, { ...d, candles: upTo });
    }

    const evaluations = strategy.evaluateAll(slicedData);
    const regimeBullish = regimeBullishOn(date);
    const { trades } = runDecisionEngine(state, evaluations, date, {
      regimeBullish,
      eligibleForEntry: universeToday ? (t) => universeToday.has(normalizeTicker(t)) : null,
    });
    tradeLog.push(...trades);

    const prices = new Map(evaluations.filter((e) => e.lastClose != null).map((e) => [e.ticker, e.lastClose]));
    portfolio.snapshot(state, { date, pricesByTicker: prices });
  }

  const finalSnapshot = state.dailySnapshots.at(-1);
  const closedTrades = tradeLog.filter((t) => t.action === 'SELL' || t.action === 'TRIM');
  const winners = closedTrades.filter((t) => t.realizedPnl > 0);
  const losers = closedTrades.filter((t) => t.realizedPnl <= 0);
  const winRate = closedTrades.length > 0 ? (winners.length / closedTrades.length) * 100 : null;

  const strategyValues = state.dailySnapshots.map((s) => s.totalValue);
  const drawdown = metrics.maxDrawdown(strategyValues);
  const sharpe = metrics.sharpeRatio(strategyValues);
  const sortino = metrics.sortinoRatio(strategyValues);

  let benchmark = null;
  if (benchmarkCandles) {
    const startClose = benchmarkCandles.find((c) => c.date === simDates[0])?.close;
    const endClose = benchmarkCandles.find((c) => c.date === simDates.at(-1))?.close;
    if (startClose && endClose) {
      const benchmarkValues = simDates.map((date) => {
        // último close conocido <= date (por si el benchmark no cotizó justo ese día)
        let c = benchmarkCandles.find((x) => x.date === date);
        if (!c) {
          const prior = benchmarkCandles.filter((x) => x.date <= date);
          c = prior.at(-1);
        }
        return c ? c.close : null;
      });
      const cleanValues = benchmarkValues.filter((v) => v != null);
      benchmark = {
        returnPct: ((endClose - startClose) / startClose) * 100,
        beta: cleanValues.length === strategyValues.length ? metrics.beta(strategyValues, cleanValues) : null,
      };
    }
  }

  return {
    period: { from: simDates[0], to: simDates.at(-1), days: simDates.length },
    startingCapital: STARTING_CAPITAL,
    finalValue: finalSnapshot.totalValue,
    returnPct: finalSnapshot.pnlPct,
    maxDrawdownPct: drawdown,
    sharpeRatio: sharpe,
    sortinoRatio: sortino,
    benchmark,
    winRatePct: winRate,
    trades: tradeLog,
    tradesCount: tradeLog.length,
    closedTradesCount: closedTrades.length,
    winnersCount: winners.length,
    losersCount: losers.length,
    dailySnapshots: state.dailySnapshots,
    openPositions: Object.keys(state.positions),
  };
}

module.exports = { runBacktest };
