'use strict';

const marketData = require('./marketData');

// Tickers públicos de Yahoo Finance para contexto macro (no para trading directo).
const TICKERS = {
  vix: '^VIX',
  yield10y: '^TNX',
  yield3m: '^IRX',
  // HYG (bonos high-yield) vs LQD (grado de inversión): cuando HYG cae más que LQD,
  // el mercado de crédito está pidiendo más compensación por riesgo — un spread de
  // crédito ampliándose es una de las señales de estrés más seguidas por mesas de
  // crédito reales (más rápida que la curva de rendimientos, aunque más ruidosa).
  highYieldBond: 'HYG',
  investmentGradeBond: 'LQD',
  // Índice dólar: en crisis globales el dólar suele fortalecerse (flight to safety).
  dollarIndex: 'DX-Y.NYB',
};

function classifyVix(vix) {
  if (vix >= 40) return { level: 'EXTREMO', note: 'Pánico de mercado (zona típica de crisis agudas, ej. 2008/2020).' };
  if (vix >= 30) return { level: 'ALTO', note: 'Estrés de mercado elevado.' };
  if (vix >= 20) return { level: 'ELEVADO', note: 'Por encima del promedio histórico (~15-20).' };
  return { level: 'CALMA', note: 'Dentro del rango histórico normal.' };
}

/**
 * Trae un panel de riesgo macro: VIX (volatilidad esperada) y la pendiente de la
 * curva de rendimientos (10 años vs 3 meses). Son los dos indicadores con más
 * respaldo académico como "señales tempranas" de recesión/crisis (ver research:
 * Bluwstein et al., BoE/ECB — crecimiento del crédito y pendiente de la curva como
 * mejores predictores fuera de muestra sobre 150 años de datos de 17 países).
 *
 * IMPORTANTE: esto es contexto histórico, no una predicción. Son señales con
 * horizontes largos y variables (6-24 meses) y tasas de falsos positivos conocidas;
 * no identifican el tipo ni el momento exacto de una crisis (ej. 2008 fue un evento
 * de crédito/apalancamiento oculto en CDS, no algo visible en precios públicos).
 */
function pctReturn(candles, window) {
  if (!candles || candles.length < window + 1) return null;
  const past = candles.at(-1 - window)?.close;
  const now = candles.at(-1)?.close;
  if (past == null || now == null) return null;
  return (now - past) / past;
}

async function fetchMacroRiskPanel() {
  const { data, errors } = await marketData.fetchAll(Object.values(TICKERS), { range: '3mo' });

  const vixData = data.get(TICKERS.vix);
  const y10Data = data.get(TICKERS.yield10y);
  const y3mData = data.get(TICKERS.yield3m);
  const hyData = data.get(TICKERS.highYieldBond);
  const igData = data.get(TICKERS.investmentGradeBond);
  const dxyData = data.get(TICKERS.dollarIndex);

  const vix = vixData?.candles.at(-1)?.close ?? null;
  const y10 = y10Data?.candles.at(-1)?.close ?? null;
  const y3m = y3mData?.candles.at(-1)?.close ?? null;

  const vixPrev10 = vixData?.candles.at(-10)?.close ?? null;
  const vixTrend = vix != null && vixPrev10 != null ? vix - vixPrev10 : null;

  const yieldSpread = y10 != null && y3m != null ? y10 - y3m : null;
  const inverted = yieldSpread != null && yieldSpread < 0;

  // Proxy de spread de crédito: retorno relativo HYG vs LQD en 20 días. Negativo y
  // grande = los bonos high-yield están cayendo más que los investment-grade, es
  // decir el mercado de crédito está pidiendo más compensación por riesgo.
  const hyReturn20d = pctReturn(hyData?.candles, 20);
  const igReturn20d = pctReturn(igData?.candles, 20);
  const creditSpreadProxy20d = hyReturn20d != null && igReturn20d != null ? hyReturn20d - igReturn20d : null;
  const creditStress = creditSpreadProxy20d != null && creditSpreadProxy20d < -0.015; // HYG underperforma LQD >1.5% en 20d

  const dxy = dxyData?.candles.at(-1)?.close ?? null;
  const dxyPrev10 = dxyData?.candles.at(-10)?.close ?? null;
  const dxyTrend10d = dxy != null && dxyPrev10 != null ? dxy - dxyPrev10 : null;

  return {
    vix,
    vixClass: vix != null ? classifyVix(vix) : null,
    vixTrend10d: vixTrend,
    yield10y: y10,
    yield3m: y3m,
    yieldSpread,
    inverted,
    creditSpreadProxy20d,
    creditStress,
    dxy,
    dxyTrend10d,
    errors,
  };
}

module.exports = { fetchMacroRiskPanel, classifyVix, TICKERS };
