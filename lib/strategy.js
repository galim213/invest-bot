'use strict';

const { sma, stdevReturns, momentum, rsi } = require('./indicators');
const { STRATEGY } = require('../config');
const { qualityScoreToTilt } = require('./fundamentalScore');

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Calcula un score multi-factor (-100..100) para un ticker a partir de sus candles diarias.
 * Factores técnicos: tendencia de corto plazo (SMA rápida vs lenta), tendencia de fondo
 * (precio vs SMA200), momentum (retorno de los últimos N días) y RSI (sobrecompra/sobreventa).
 * Factor fundamental opcional: `qualityInfo` (de fundamentalScore.buildQualityScores) suma
 * un tilt chico (ver STRATEGY.fundamentalTiltMax) basado en ROE/márgenes/crecimiento/deuda/P/E
 * relativos al resto del universo — complementa el score técnico, no lo reemplaza.
 */
function evaluateTicker(ticker, candles, qualityInfo = null) {
  // El precio real de trading es `close`; los indicadores se calculan sobre
  // `adjClose` (ajustado por dividendos) para no leer un dividendo como si
  // fuera una caída de precio real.
  const lastClose = candles.at(-1).close;
  const adjCloses = candles.map((c) => c.adjClose ?? c.close);
  const lastAdjClose = adjCloses.at(-1);

  const smaFast = sma(adjCloses, STRATEGY.smaFast);
  const smaSlow = sma(adjCloses, STRATEGY.smaSlow);
  const smaTrend = sma(adjCloses, STRATEGY.smaTrend);
  const mom = momentum(adjCloses, STRATEGY.momentumWindow);
  const rsiVal = rsi(adjCloses, STRATEGY.rsiPeriod);
  const vol = stdevReturns(adjCloses, STRATEGY.volWindow);

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
    const bgSignal = lastAdjClose >= smaTrend ? 10 : -10;
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

  let fundamentalTilt = null;
  if (qualityInfo && qualityInfo.qualityScore != null) {
    fundamentalTilt = Math.round(qualityScoreToTilt(qualityInfo.qualityScore, STRATEGY.fundamentalTiltMax));
    score += fundamentalTilt;
    reasons.push(
      `Calidad fundamental: percentil ${qualityInfo.qualityScore.toFixed(0)}/100 (ROE, margen, crecimiento, deuda, P/E vs el resto del universo) → ${fundamentalTilt >= 0 ? '+' : ''}${fundamentalTilt} al score.`
    );
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
    fundamentalTilt,
  };
}

function evaluateAll(candlesByTicker, qualityScores = null) {
  const evaluations = [];
  for (const [ticker, data] of candlesByTicker.entries()) {
    try {
      const qualityInfo = qualityScores ? qualityScores.get(ticker) : null;
      evaluations.push(evaluateTicker(ticker, data.candles, qualityInfo));
    } catch (err) {
      evaluations.push({ ticker, error: err.message, score: 0, signal: 'HOLD', reasons: [] });
    }
  }
  return evaluations.sort((a, b) => b.score - a.score);
}

module.exports = { evaluateTicker, evaluateAll, clamp };
