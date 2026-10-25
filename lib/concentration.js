'use strict';

/**
 * Concentración y correlación de las posiciones abiertas del satellite.
 * SOLO INFORMATIVO: no alimenta ninguna decisión de trading (tope sectorial,
 * menor maxPositionPct y shorts ya se probaron y descartaron en
 * GRADUATION_CRITERIA.md — esto solo mide el riesgo, no lo "corrige").
 */

/** Retornos simples diarios de una serie de cierres. */
function returnsFromCloses(closes) {
  const out = [];
  for (let i = 1; i < closes.length; i++) out.push(closes[i] / closes[i - 1] - 1);
  return out;
}

function pearson(a, b) {
  const n = Math.min(a.length, b.length);
  if (n < 3) return null;
  const x = a.slice(-n);
  const y = b.slice(-n);
  const mx = x.reduce((s, v) => s + v, 0) / n;
  const my = y.reduce((s, v) => s + v, 0) / n;
  let sxy = 0, sxx = 0, syy = 0;
  for (let i = 0; i < n; i++) {
    sxy += (x[i] - mx) * (y[i] - my);
    sxx += (x[i] - mx) ** 2;
    syy += (y[i] - my) ** 2;
  }
  if (sxx === 0 || syy === 0) return null;
  return sxy / Math.sqrt(sxx * syy);
}

/** Pesos (fracción del valor invertido, sin cash) por ticker. */
function weightsByTicker(positions, prices) {
  const values = {};
  let total = 0;
  for (const [t, pos] of Object.entries(positions)) {
    const p = prices.get ? prices.get(t) : prices[t];
    if (p == null) continue;
    values[t] = pos.shares * p;
    total += values[t];
  }
  const w = {};
  if (total <= 0) return w;
  for (const t of Object.keys(values)) w[t] = values[t] / total;
  return w;
}

/** Peso por sector, ordenado de mayor a menor. */
function sectorWeights(weights, sectorByTicker) {
  const bySector = {};
  for (const [t, w] of Object.entries(weights)) {
    const s = sectorByTicker.get(t) || 'Sin sector';
    bySector[s] = (bySector[s] || 0) + w;
  }
  return Object.entries(bySector).map(([sector, weight]) => ({ sector, weight })).sort((a, b) => b.weight - a.weight);
}

/** N efectivo por HHI: 1 / Σ w². 4 posiciones iguales → 4. */
function effectiveHoldings(weights) {
  const ws = Object.values(weights);
  if (ws.length === 0) return null;
  return 1 / ws.reduce((s, w) => s + w * w, 0);
}

/** Correlación promedio entre pares de retornos diarios (últimos `window` días). */
function averagePairwiseCorrelation(closesByTicker, window = 60) {
  const tickers = Object.keys(closesByTicker);
  const rets = tickers.map((t) => returnsFromCloses(closesByTicker[t]).slice(-window));
  const corrs = [];
  for (let i = 0; i < tickers.length; i++) {
    for (let j = i + 1; j < tickers.length; j++) {
      const c = pearson(rets[i], rets[j]);
      if (c !== null) corrs.push(c);
    }
  }
  if (corrs.length === 0) return null;
  return corrs.reduce((s, c) => s + c, 0) / corrs.length;
}

/**
 * N efectivo ajustado por correlación: N_hhi / (1 + (N_hhi-1)·ρ). Es una
 * aproximación estándar para N activos equiponderados con correlación media ρ
 * (tratamos N_hhi como N); ρ negativo se trunca a 0 para no inflar N.
 */
function correlationAdjustedN(nHhi, avgCorr) {
  if (nHhi == null || avgCorr == null) return null;
  const rho = Math.max(0, avgCorr);
  return nHhi / (1 + (nHhi - 1) * rho);
}

function buildConcentration({ positions, prices, sectorByTicker, candlesByTicker, window = 60 }) {
  const weights = weightsByTicker(positions, prices);
  const tickers = Object.keys(weights);
  if (tickers.length === 0) return null;
  const closes = {};
  for (const t of tickers) {
    const c = candlesByTicker?.get ? candlesByTicker.get(t) : candlesByTicker?.[t];
    const arr = c?.candles ?? c;
    if (Array.isArray(arr) && arr.length > 3) closes[t] = arr.map((x) => x.adjClose ?? x.close);
  }
  const nHhi = effectiveHoldings(weights);
  const avgCorr = tickers.length >= 2 ? averagePairwiseCorrelation(closes, window) : null;
  const sectors = sectorWeights(weights, sectorByTicker);
  return {
    positions: tickers.length,
    sectors,
    topSectorWeight: sectors[0].weight,
    effectiveHoldings: nHhi,
    avgPairwiseCorrelation: avgCorr,
    correlationAdjustedN: correlationAdjustedN(nHhi, avgCorr),
    window,
  };
}

function concentrationMarkdown(c) {
  if (!c) return [];
  const f = (x, d = 2) => (x == null ? '—' : x.toFixed(d));
  const lines = ['### Concentración y correlación (informativo)', ''];
  lines.push(`- Posiciones: ${c.positions} · N efectivo por peso (1/HHI): **${f(c.effectiveHoldings)}**`);
  lines.push(`- Correlación promedio entre posiciones (retornos diarios, últimas ${c.window} ruedas): **${f(c.avgPairwiseCorrelation)}** → N efectivo ajustado por correlación: **${f(c.correlationAdjustedN)}**`);
  lines.push(`- Por sector: ${c.sectors.map((s) => `${s.sector} ${(s.weight * 100).toFixed(0)}%`).join(' · ')}`);
  lines.push('');
  lines.push('_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._');
  lines.push('');
  return lines;
}

module.exports = { returnsFromCloses, pearson, weightsByTicker, sectorWeights, effectiveHoldings, averagePairwiseCorrelation, correlationAdjustedN, buildConcentration, concentrationMarkdown };
