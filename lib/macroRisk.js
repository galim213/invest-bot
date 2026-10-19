'use strict';

const marketData = require('./marketData');

// Tickers públicos de Yahoo Finance para contexto macro (no para trading directo).
const TICKERS = { vix: '^VIX', yield10y: '^TNX', yield3m: '^IRX' };

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
async function fetchMacroRiskPanel() {
  const { data, errors } = await marketData.fetchAll(Object.values(TICKERS), { range: '1mo' });

  const vixData = data.get(TICKERS.vix);
  const y10Data = data.get(TICKERS.yield10y);
  const y3mData = data.get(TICKERS.yield3m);

  const vix = vixData?.candles.at(-1)?.close ?? null;
  const y10 = y10Data?.candles.at(-1)?.close ?? null;
  const y3m = y3mData?.candles.at(-1)?.close ?? null;

  const vixPrev10 = vixData?.candles.at(-10)?.close ?? null;
  const vixTrend = vix != null && vixPrev10 != null ? vix - vixPrev10 : null;

  const yieldSpread = y10 != null && y3m != null ? y10 - y3m : null;
  const inverted = yieldSpread != null && yieldSpread < 0;

  return {
    vix,
    vixClass: vix != null ? classifyVix(vix) : null,
    vixTrend10d: vixTrend,
    yield10y: y10,
    yield3m: y3m,
    yieldSpread,
    inverted,
    errors,
  };
}

module.exports = { fetchMacroRiskPanel, classifyVix, TICKERS };
