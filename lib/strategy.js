'use strict';

const { sma, stdevReturns, momentum, rsi } = require('./indicators');
const { STRATEGY } = require('../config');

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Calcula un score multi-factor (-100..100) para un ticker a partir de sus candles diarias.
 * Factores: tendencia de corto plazo (SMA rápida vs lenta), tendencia de fondo (precio vs SMA200),
 * momentum (retorno de los últimos N días) y RSI (sobrecompra/sobreventa).
 */
function evaluateTicker(ticker, candles) {
  const closes = candles.map((c) => c.close);
  const lastClose = closes.at(-1);

  const smaFast = sma(closes, STRATEGY.smaFast);
  const smaSlow = sma(closes, STRATEGY.smaSlow);
  const smaTrend = sma(closes, STRATEGY.smaTrend);
  const mom = momentum(closes, STRATEGY.momentumWindow);
  const rsiVal = rsi(closes, STRATEGY.rsiPeriod);
  const vol = stdevReturns(closes, STRATEGY.volWindow);

  const reasons = [];
  let score = 0;

  if (smaFast !== null && smaSlow !== null) {
    const trendSignal = clamp(((smaFast - smaSlow) / smaSlow) * 800, -40, 40);
    score += trendSignal;
    reasons.push(
      trendSignal >= 0
        ? `Tendencia de corto plazo alcista: SMA${STRATEGY.smaFast} (${smaFast.toFixed(2)}) por encima de SMA${STRATEGY.smaSlow} (${smaSlow.toFixed(2)}).`
        : `Tendencia de corto plazo bajista: SMA${STRATEGY.smaFast} (${smaFast.toFixed(2)}) por debajo de SMA${STRATEGY.smaSlow} (${smaSlow.toFixed(2)}).`
    );
  }

  if (smaTrend !== null) {
    const bgSignal = lastClose >= smaTrend ? 10 : -10;
    score += bgSignal;
    reasons.push(
      bgSignal > 0
        ? `Precio por encima de la media de ${STRATEGY.smaTrend} días: contexto de fondo alcista.`
        : `Precio por debajo de la media de ${STRATEGY.smaTrend} días: contexto de fondo bajista.`
    );
  }

  if (mom !== null) {
    const momSignal = clamp(mom * 300, -30, 30);
    score += momSignal;
    reasons.push(`Momentum ${STRATEGY.momentumWindow}d: ${(mom * 100).toFixed(1)}%.`);
  }

  if (rsiVal !== null) {
    const rsiSignal = clamp((50 - rsiVal) * 0.6, -20, 20);
    score += rsiSignal;
    if (rsiVal >= 70) reasons.push(`RSI ${rsiVal.toFixed(0)}: sobrecompra, riesgo de corrección.`);
    else if (rsiVal <= 30) reasons.push(`RSI ${rsiVal.toFixed(0)}: sobreventa, posible rebote.`);
    else reasons.push(`RSI ${rsiVal.toFixed(0)}: zona neutral.`);
  }

  score = clamp(Math.round(score), -100, 100);

  let signal = 'HOLD';
  if (score >= STRATEGY.buyThreshold) signal = 'BUY';
  else if (score <= STRATEGY.sellThreshold) signal = 'SELL';

  // Guardrail de riesgo: no abrir compras nuevas en sobrecompra extrema,
  // aunque la tendencia/momentum empujen el score por encima del umbral.
  if (signal === 'BUY' && rsiVal !== null && rsiVal >= 80) {
    signal = 'HOLD';
    reasons.push(`Compra bloqueada por sobrecompra extrema (RSI ${rsiVal.toFixed(0)} >= 80): se espera una corrección antes de entrar.`);
  }

  return {
    ticker,
    lastClose,
    score,
    signal,
    reasons,
    metrics: { smaFast, smaSlow, smaTrend, momentum: mom, rsi: rsiVal, volatility: vol },
  };
}

function evaluateAll(candlesByTicker) {
  const evaluations = [];
  for (const [ticker, data] of candlesByTicker.entries()) {
    try {
      evaluations.push(evaluateTicker(ticker, data.candles));
    } catch (err) {
      evaluations.push({ ticker, error: err.message, score: 0, signal: 'HOLD', reasons: [] });
    }
  }
  return evaluations.sort((a, b) => b.score - a.score);
}

module.exports = { evaluateTicker, evaluateAll, clamp };
