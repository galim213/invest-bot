'use strict';

const { buildQualityScores } = require('./fundamentalScore');

/**
 * Convierte investigación profunda (lib/fundamentals.fetchDeepResearch) en un
 * veredicto sintetizado: caso alcista, caso bajista, y gatillos de venta
 * objetivos — lo que un analista real escribiría antes de recomendar una
 * posición, no solo una lista de números.
 *
 * Reglas explícitas, no "IA opinando libremente": cada flag sale de una
 * condición concreta sobre los datos, para que sea reproducible y uno pueda
 * verificar por qué se disparó. Esto es deliberado — queremos decisiones
 * auditables, no una sensación de que "algo dijo que vendamos".
 */
function synthesizeVerdict(research, qualityScore) {
  const bull = [];
  const bear = [];
  const sellTriggers = [];

  const r = research;

  // --- Earnings track record ---
  if (r.earningsHistory && r.earningsHistory.length > 0) {
    const beats = r.earningsHistory.filter((e) => e.surprisePercent != null && e.surprisePercent > 0).length;
    const misses = r.earningsHistory.filter((e) => e.surprisePercent != null && e.surprisePercent < 0).length;
    const total = r.earningsHistory.length;
    if (beats >= Math.ceil(total * 0.75)) {
      bull.push(`Le ganó a las expectativas de ganancias en ${beats}/${total} de los últimos trimestres.`);
    }
    if (misses >= Math.ceil(total * 0.5)) {
      bear.push(`Le falló a las expectativas de ganancias en ${misses}/${total} de los últimos trimestres.`);
      if (misses >= Math.ceil(total * 0.75)) {
        sellTriggers.push('Ha fallado la mayoría de sus últimos resultados trimestrales — vigilar si se vuelve un patrón.');
      }
    }
  }

  // --- Tendencia de analistas (¿se están poniendo más optimistas o más cautos?) ---
  if (r.recommendationTrend && r.recommendationTrend.length >= 2) {
    const now = r.recommendationTrend.find((t) => t.period === '0m') || r.recommendationTrend[0];
    const prior = r.recommendationTrend.find((t) => t.period === '-2m' || t.period === '-3m') || r.recommendationTrend[r.recommendationTrend.length - 1];
    if (now && prior) {
      const bullishNow = (now.strongBuy || 0) + (now.buy || 0);
      const bullishPrior = (prior.strongBuy || 0) + (prior.buy || 0);
      const bearishNow = (now.sell || 0) + (now.strongSell || 0);
      const bearishPrior = (prior.sell || 0) + (prior.strongSell || 0);
      if (bullishNow > bullishPrior && bearishNow <= bearishPrior) {
        bull.push(`Los analistas se pusieron más optimistas: ${bullishPrior} → ${bullishNow} recomendaciones de compra en los últimos meses.`);
      } else if (bearishNow > bearishPrior || bullishNow < bullishPrior) {
        bear.push(`Los analistas se pusieron más cautos: recomendaciones de compra bajaron de ${bullishPrior} a ${bullishNow}.`);
      }
    }
  }

  // --- Upgrades/downgrades recientes ---
  if (r.recentRatingActions && r.recentRatingActions.length > 0) {
    const recentCutoffDays = 30;
    const now = Date.now();
    const recent = r.recentRatingActions.filter((a) => a.date && (now - new Date(a.date).getTime()) / 86400000 <= recentCutoffDays);
    const downgrades = recent.filter((a) => a.action === 'down');
    const upgrades = recent.filter((a) => a.action === 'up');
    if (upgrades.length > 0) bull.push(`${upgrades.length} upgrade(s) de analistas en los últimos 30 días (ej. ${upgrades[0].firm}: ${upgrades[0].fromGrade} → ${upgrades[0].toGrade}).`);
    if (downgrades.length > 0) {
      bear.push(`${downgrades.length} downgrade(s) de analistas en los últimos 30 días (ej. ${downgrades[0].firm}: ${downgrades[0].fromGrade} → ${downgrades[0].toGrade}).`);
      if (downgrades.length >= 2) sellTriggers.push('Múltiples downgrades de analistas en el último mes.');
    }
  }

  // --- Valuación: ¿el mercado espera que las ganancias crezcan o se achiquen? ---
  if (r.trailingPE != null && r.forwardPE != null && r.trailingPE > 0 && r.forwardPE > 0) {
    if (r.forwardPE < r.trailingPE * 0.9) {
      bull.push(`P/E futuro (${r.forwardPE.toFixed(1)}) más bajo que el actual (${r.trailingPE.toFixed(1)}) — el mercado espera que las ganancias crezcan.`);
    } else if (r.forwardPE > r.trailingPE * 1.15) {
      bear.push(`P/E futuro (${r.forwardPE.toFixed(1)}) más alto que el actual (${r.trailingPE.toFixed(1)}) — el mercado espera que las ganancias se achiquen.`);
    }
  }

  // --- Dividendo: sostenibilidad ---
  if (r.payoutRatio != null && r.dividendYield != null && r.dividendYield > 0) {
    if (r.payoutRatio > 0.8) {
      bear.push(`Payout ratio de ${(r.payoutRatio * 100).toFixed(0)}% — reparte más del 80% de las ganancias como dividendo, poco margen de error.`);
      sellTriggers.push('Si el payout ratio sigue subiendo por encima del 100%, el dividendo actual no es sostenible con las ganancias actuales.');
    }
  }

  // --- Deuda ---
  if (r.debtToEquity != null && r.debtToEquity > 150) {
    bear.push(`Deuda/equity de ${r.debtToEquity.toFixed(0)}% — nivel de apalancamiento alto, más sensible a subas de tasas.`);
  }

  // --- Insiders (señal suave — aclarar que las ventas no siempre son bajistas) ---
  if (r.recentInsiderTransactions && r.recentInsiderTransactions.length > 0) {
    const sales = r.recentInsiderTransactions.filter((t) => t.text && /sale/i.test(t.text));
    const buys = r.recentInsiderTransactions.filter((t) => t.text && /purchase|buy/i.test(t.text));
    if (buys.length > 0) bull.push(`${buys.length} compra(s) de insiders registrada(s) — ejecutivos poniendo plata propia en la empresa.`);
    if (sales.length >= 3 && buys.length === 0) {
      bear.push(`${sales.length} ventas de insiders registradas sin compras — señal débil por sí sola (puede ser solo diversificación personal), pero vale la pena vigilar si se repite.`);
    }
  }

  // --- Calidad relativa al universo (percentil ya calculado) ---
  if (qualityScore != null) {
    if (qualityScore >= 70) bull.push(`Percentil de calidad fundamental ${qualityScore.toFixed(0)}/100 — entre lo mejor del universo en ROE/margen/crecimiento/deuda.`);
    else if (qualityScore <= 30) bear.push(`Percentil de calidad fundamental ${qualityScore.toFixed(0)}/100 — por debajo de la mayoría del universo.`);
  }

  // --- Posición en el rango de 52 semanas ---
  let priceContext = null;
  if (r.currentPrice != null && r.fiftyTwoWeekLow != null && r.fiftyTwoWeekHigh != null && r.fiftyTwoWeekHigh > r.fiftyTwoWeekLow) {
    const pct = (r.currentPrice - r.fiftyTwoWeekLow) / (r.fiftyTwoWeekHigh - r.fiftyTwoWeekLow);
    priceContext = { pctOfRange: pct * 100, low: r.fiftyTwoWeekLow, high: r.fiftyTwoWeekHigh };
    if (pct >= 0.95) bear.push(`Precio en el ${(pct * 100).toFixed(0)}% de su rango de 52 semanas — cerca del máximo anual, menos margen de seguridad para comprar más.`);
    if (pct <= 0.15) bull.push(`Precio en el ${(pct * 100).toFixed(0)}% de su rango de 52 semanas — cerca del mínimo anual.`);
  }

  const verdict = bull.length > bear.length ? 'POSITIVO' : bear.length > bull.length ? 'CAUTELA' : 'NEUTRAL';

  return { verdict, bull, bear, sellTriggers, priceContext };
}

/** Arma las notas de research completas para un conjunto de tickers con su investigación profunda. */
function buildResearchNotes(deepResearchByTicker, qualityTextByTicker) {
  const qualityScores = buildQualityScores(deepResearchByTicker);
  const notes = [];

  for (const [ticker, research] of deepResearchByTicker.entries()) {
    const qInfo = qualityScores.get(ticker);
    const verdict = synthesizeVerdict(research, qInfo ? qInfo.qualityScore : null);
    notes.push({
      ticker,
      sector: research.sector,
      why: qualityTextByTicker.get(ticker) || null,
      currentPrice: research.currentPrice,
      nextEarningsDate: research.nextEarningsDate,
      analystTarget: research.targetMeanPrice,
      analystRecommendation: research.recommendationKey,
      qualityScore: qInfo ? qInfo.qualityScore : null,
      ...verdict,
    });
  }

  return notes;
}

module.exports = { synthesizeVerdict, buildResearchNotes };
