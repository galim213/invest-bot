'use strict';

/**
 * Convierte fundamentales crudos en un "score de calidad" (0-100, percentil
 * relativo al resto del universo) y de ahí en un ajuste (tilt) al score
 * técnico de strategy.js. Factores: ROE, margen neto, crecimiento de
 * ingresos (más alto = mejor), deuda/equity y P/E (más bajo = mejor).
 *
 * Es un factor ADITIVO de peso moderado (ver FUNDAMENTAL_TILT_MAX en
 * config.js) — no reemplaza el score técnico, lo complementa. Un ticker sin
 * fundamentales en el cache simplemente no recibe tilt (ni bonus ni
 * penalización), para no sesgar contra empresas recién listadas o fuera del
 * cache.
 *
 * LIMITACIÓN IMPORTANTE: el cache es una foto del presente. Para el
 * universo de HOY esto es razonable, pero no hay fundamentales
 * point-in-time históricos — por eso este factor NO se puede validar de
 * forma confiable contra los regímenes viejos de validate.js (2018, 2020,
 * 2022). Ver GRADUATION_CRITERIA.md.
 */

function percentileRanks(tickerToValue, { higherIsBetter }) {
  const entries = [...tickerToValue.entries()].filter(([, v]) => v != null && !Number.isNaN(v));
  if (entries.length === 0) return new Map();

  const sorted = [...entries].sort((a, b) => a[1] - b[1]); // ascendente
  const n = sorted.length;
  const ranks = new Map();
  sorted.forEach(([ticker], i) => {
    // percentil ascendente: el valor más bajo = percentil ~0, el más alto = ~100
    const pctileAsc = n === 1 ? 50 : (i / (n - 1)) * 100;
    ranks.set(ticker, higherIsBetter ? pctileAsc : 100 - pctileAsc);
  });
  return ranks;
}

/**
 * Calcula el score de calidad (0-100) y el detalle por factor para cada
 * ticker del cache. `fundamentalsByTicker`: Map<ticker, fundamentals>.
 */
function buildQualityScores(fundamentalsByTicker) {
  const roe = new Map();
  const margin = new Map();
  const growth = new Map();
  const debt = new Map();
  const pe = new Map();

  for (const [ticker, f] of fundamentalsByTicker.entries()) {
    if (f.returnOnEquity != null) roe.set(ticker, f.returnOnEquity);
    if (f.profitMargin != null) margin.set(ticker, f.profitMargin);
    if (f.revenueGrowth != null) growth.set(ticker, f.revenueGrowth);
    if (f.debtToEquity != null) debt.set(ticker, f.debtToEquity);
    // P/E negativo (empresa con pérdidas) se trata aparte, no entra al percentil normal.
    if (f.trailingPE != null && f.trailingPE > 0) pe.set(ticker, f.trailingPE);
  }

  const roePctile = percentileRanks(roe, { higherIsBetter: true });
  const marginPctile = percentileRanks(margin, { higherIsBetter: true });
  const growthPctile = percentileRanks(growth, { higherIsBetter: true });
  const debtPctile = percentileRanks(debt, { higherIsBetter: false }); // menos deuda = mejor
  const pePctile = percentileRanks(pe, { higherIsBetter: false }); // P/E más bajo = mejor

  const WEIGHTS = { roe: 0.25, margin: 0.25, growth: 0.2, debt: 0.15, pe: 0.15 };
  const scores = new Map();

  for (const ticker of fundamentalsByTicker.keys()) {
    const f = fundamentalsByTicker.get(ticker);
    const parts = {
      roe: roePctile.get(ticker) ?? null,
      margin: marginPctile.get(ticker) ?? null,
      growth: growthPctile.get(ticker) ?? null,
      debt: debtPctile.get(ticker) ?? null,
      // P/E negativo (empresa no rentable) = peor percentil posible, no "sin dato".
      pe: f.trailingPE != null && f.trailingPE <= 0 ? 0 : (pePctile.get(ticker) ?? null),
    };

    let weightSum = 0;
    let weighted = 0;
    for (const [key, w] of Object.entries(WEIGHTS)) {
      if (parts[key] != null) {
        weighted += parts[key] * w;
        weightSum += w;
      }
    }
    // Si falta algún factor, renormalizamos sobre los pesos disponibles en vez
    // de penalizar por datos faltantes.
    const qualityScore = weightSum > 0 ? weighted / weightSum : null;

    scores.set(ticker, { qualityScore, parts, raw: f });
  }

  return scores;
}

/** Convierte qualityScore (0-100) en un tilt aditivo (-max..+max) para el score técnico. */
function qualityScoreToTilt(qualityScore, maxTilt) {
  if (qualityScore == null) return 0;
  return ((qualityScore - 50) / 50) * maxTilt;
}

module.exports = { buildQualityScores, qualityScoreToTilt };
