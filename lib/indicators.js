'use strict';

function sma(values, period) {
  if (values.length < period) return null;
  const slice = values.slice(values.length - period);
  return slice.reduce((a, b) => a + b, 0) / period;
}

function stdevReturns(closes, period) {
  if (closes.length < period + 1) return null;
  const slice = closes.slice(closes.length - period - 1);
  const returns = [];
  for (let i = 1; i < slice.length; i++) {
    returns.push((slice[i] - slice[i - 1]) / slice[i - 1]);
  }
  const mean = returns.reduce((a, b) => a + b, 0) / returns.length;
  const variance = returns.reduce((a, b) => a + (b - mean) ** 2, 0) / returns.length;
  return Math.sqrt(variance);
}

function momentum(closes, window) {
  if (closes.length < window + 1) return null;
  const past = closes[closes.length - 1 - window];
  const current = closes[closes.length - 1];
  return (current - past) / past;
}

function rsi(closes, period) {
  if (closes.length < period + 1) return null;
  let gains = 0;
  let losses = 0;
  const slice = closes.slice(closes.length - period - 1);
  for (let i = 1; i < slice.length; i++) {
    const diff = slice[i] - slice[i - 1];
    if (diff >= 0) gains += diff;
    else losses += -diff;
  }
  const avgGain = gains / period;
  const avgLoss = losses / period;
  if (avgLoss === 0) return 100;
  const rs = avgGain / avgLoss;
  return 100 - 100 / (1 + rs);
}

module.exports = { sma, stdevReturns, momentum, rsi };
