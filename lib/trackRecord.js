'use strict';

const fs = require('fs');
const path = require('path');

const HISTORY_PATH = path.join(__dirname, '..', 'data', 'research-notes-history.json');

/**
 * Track record de las research notes (idea tomada de cómo TipRanks mide el
 * historial de cada analista, no solo su consenso de hoy): cada día que se
 * genera un veredicto (POSITIVO/CAUTELA/NEUTRAL) por ticker, se guarda junto
 * al precio de ese momento. Más adelante, una vez pasado suficiente tiempo,
 * se compara contra el precio actual para ver si el veredicto predijo algo
 * de verdad — no se puede saber el día que se emite, solo con el tiempo.
 */

function loadHistory(filePath = HISTORY_PATH) {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function saveHistory(history, filePath = HISTORY_PATH) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(history, null, 2));
}

/** Agrega las research notes de hoy a la bitácora (idempotente: no duplica fecha+ticker). */
function appendHistory(notes, date, filePath = HISTORY_PATH) {
  const history = loadHistory(filePath);
  const existingKeys = new Set(history.map((h) => `${h.date}|${h.ticker}`));
  let added = 0;
  for (const n of notes) {
    const key = `${date}|${n.ticker}`;
    if (existingKeys.has(key)) continue;
    if (n.currentPrice == null) continue; // sin precio no se puede medir retorno futuro
    history.push({
      date,
      ticker: n.ticker,
      verdict: n.verdict,
      bullCount: n.bull.length,
      bearCount: n.bear.length,
      sellTriggersCount: n.sellTriggers.length,
      priceAtVerdict: n.currentPrice,
    });
    added++;
  }
  if (added > 0) saveHistory(history, filePath);
  return added;
}

/**
 * Retorno hacia adelante (desde el precio al momento del veredicto hasta el
 * precio de HOY) para cada entrada con al menos `minDaysElapsed` días de
 * antigüedad, agrupado por veredicto. `pricesByTicker` son precios ya
 * obtenidos (esta función no hace red, así queda testeable sin mockear fetch).
 */
function computeTrackRecord(history, pricesByTicker, { minDaysElapsed = 30, asOfDate = new Date() } = {}) {
  const msPerDay = 86400000;
  const eligible = history.filter((h) => {
    const daysElapsed = (asOfDate - new Date(h.date)) / msPerDay;
    return daysElapsed >= minDaysElapsed && pricesByTicker.get(h.ticker) != null;
  });

  const byVerdict = new Map();
  for (const h of eligible) {
    const currentPrice = pricesByTicker.get(h.ticker);
    const forwardReturnPct = ((currentPrice - h.priceAtVerdict) / h.priceAtVerdict) * 100;
    if (!byVerdict.has(h.verdict)) byVerdict.set(h.verdict, []);
    byVerdict.get(h.verdict).push({ ...h, currentPrice, forwardReturnPct });
  }

  const summary = [];
  for (const [verdict, entries] of byVerdict.entries()) {
    const avgForwardReturnPct = entries.reduce((a, e) => a + e.forwardReturnPct, 0) / entries.length;
    const winRatePct = (entries.filter((e) => e.forwardReturnPct > 0).length / entries.length) * 100;
    summary.push({ verdict, count: entries.length, avgForwardReturnPct, winRatePct, entries });
  }
  summary.sort((a, b) => b.avgForwardReturnPct - a.avgForwardReturnPct);

  return {
    minDaysElapsed,
    totalEligible: eligible.length,
    totalInHistory: history.length,
    summary,
  };
}

module.exports = { HISTORY_PATH, loadHistory, saveHistory, appendHistory, computeTrackRecord };
