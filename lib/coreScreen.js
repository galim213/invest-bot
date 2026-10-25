'use strict';

/**
 * Selección de un set de core alternativo con un CRITERIO OBJETIVO, en vez
 * de la curación cualitativa a mano del core actual (ver CORE_HOLDINGS en
 * config.js). Reutiliza fundamentalScore.buildQualityScores (ROE, margen,
 * crecimiento, deuda, P/E — percentil relativo al resto del universo, ya
 * testeado y en uso como tilt opcional del satellite) en vez de inventar un
 * score nuevo.
 *
 * Criterio, en orden:
 * 1. Elegibilidad: paga dividendo real (dividendYield > 0) — el core es
 *    "dividendo real", así que no tiene sentido incluir algo que no paga.
 * 2. Calidad mínima: rentable (returnOnEquity > 0 y profitMargin > 0) — saca
 *    trampas de valor (empresas baratas porque están perdiendo plata).
 * 3. Ranking: quality score (percentil compuesto) descendente.
 * 4. Top N tal cual sale — SIN forzar diversificación sectorial a mano, para
 *    que el resultado sea honesto sobre lo que el criterio realmente eligió.
 *
 * LIMITACIÓN (igual que fundamentalScore.js): el cache de fundamentales es
 * una foto de HOY, no point-in-time histórico — este criterio no se puede
 * backtestear contra los regímenes de validate.js con el mismo rigor que el
 * satellite técnico.
 */
function pickCoreByScreen(fundamentalsByTicker, { topN = 10, minDividendYield = 0 } = {}) {
  const { buildQualityScores } = require('./fundamentalScore');

  const eligible = new Map(
    [...fundamentalsByTicker.entries()].filter(
      ([, f]) => f.dividendYield != null && f.dividendYield > minDividendYield && f.returnOnEquity != null && f.returnOnEquity > 0 && f.profitMargin != null && f.profitMargin > 0
    )
  );

  const scores = buildQualityScores(eligible);

  const ranked = [...eligible.entries()]
    .map(([ticker, f]) => ({
      ticker,
      sector: f.sector || null,
      qualityScore: scores.get(ticker)?.qualityScore ?? null,
      dividendYield: f.dividendYield,
      returnOnEquity: f.returnOnEquity,
      profitMargin: f.profitMargin,
      revenueGrowth: f.revenueGrowth,
      debtToEquity: f.debtToEquity,
      trailingPE: f.trailingPE,
    }))
    .filter((r) => r.qualityScore != null)
    .sort((a, b) => b.qualityScore - a.qualityScore);

  return {
    totalEligible: eligible.size,
    totalEvaluated: fundamentalsByTicker.size,
    picks: ranked.slice(0, topN),
  };
}

module.exports = { pickCoreByScreen };
