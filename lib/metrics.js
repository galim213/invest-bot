'use strict';

/** Retornos diarios simples a partir de una serie de valores de portfolio. */
function dailyReturns(values) {
  const out = [];
  for (let i = 1; i < values.length; i++) {
    out.push((values[i] - values[i - 1]) / values[i - 1]);
  }
  return out;
}

function mean(arr) {
  if (arr.length === 0) return 0;
  return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function stdev(arr) {
  if (arr.length < 2) return 0;
  const m = mean(arr);
  const variance = arr.reduce((a, b) => a + (b - m) ** 2, 0) / (arr.length - 1);
  return Math.sqrt(variance);
}

/**
 * Sharpe ratio anualizado (asume tasa libre de riesgo ≈ 0 por simplicidad —
 * en la práctica subestima un poco el ratio real en períodos de tasas altas).
 */
function sharpeRatio(values, tradingDaysPerYear = 252) {
  const returns = dailyReturns(values);
  const sd = stdev(returns);
  if (sd === 0) return null;
  return (mean(returns) / sd) * Math.sqrt(tradingDaysPerYear);
}

/** Como Sharpe pero solo penaliza la volatilidad a la baja (retornos negativos). */
function sortinoRatio(values, tradingDaysPerYear = 252) {
  const returns = dailyReturns(values);
  const downside = returns.filter((r) => r < 0);
  const downsideDev = stdev(downside.length > 1 ? downside : [0, 0]);
  if (downsideDev === 0) return null;
  return (mean(returns) / downsideDev) * Math.sqrt(tradingDaysPerYear);
}

/** Beta de la estrategia respecto al benchmark (sensibilidad al mercado). */
function beta(strategyValues, benchmarkValues) {
  const sRet = dailyReturns(strategyValues);
  const bRet = dailyReturns(benchmarkValues);
  const n = Math.min(sRet.length, bRet.length);
  if (n < 2) return null;
  const s = sRet.slice(-n);
  const b = bRet.slice(-n);
  const mS = mean(s);
  const mB = mean(b);
  let cov = 0;
  let varB = 0;
  for (let i = 0; i < n; i++) {
    cov += (s[i] - mS) * (b[i] - mB);
    varB += (b[i] - mB) ** 2;
  }
  if (varB === 0) return null;
  return cov / varB;
}

function maxDrawdown(values) {
  let peak = -Infinity;
  let worst = 0;
  for (const v of values) {
    peak = Math.max(peak, v);
    const dd = (v - peak) / peak;
    worst = Math.min(worst, dd);
  }
  return worst * 100;
}

module.exports = { dailyReturns, mean, stdev, sharpeRatio, sortinoRatio, beta, maxDrawdown };
