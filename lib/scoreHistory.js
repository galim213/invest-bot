'use strict';

const fs = require('fs');
const path = require('path');

const HISTORY_PATH = path.join(__dirname, '..', 'data', 'score-history.json');

/**
 * Historial de score/señal por ticker en el tiempo — para graficar en el
 * dashboard cómo evolucionó cada acción, no solo el valor total del
 * portfolio (que ya se ve en el gráfico de equity). Se limita a los
 * tickers "de interés" (core + posiciones actuales/pasadas del satellite,
 * el mismo conjunto que ya se usa para research notes) en vez de los 503
 * del universo completo, para que el dataset no crezca sin sentido.
 */

function loadScoreHistory(filePath = HISTORY_PATH) {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function saveScoreHistory(history, filePath = HISTORY_PATH) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(history, null, 2));
}

/** Agrega el score/señal de hoy para los tickers de interés (idempotente por fecha+ticker). */
function appendScoreHistory(evaluations, tickersOfInterest, date, filePath = HISTORY_PATH) {
  const history = loadScoreHistory(filePath);
  const existingKeys = new Set(history.map((h) => `${h.date}|${h.ticker}`));
  const byTicker = new Map(evaluations.map((e) => [e.ticker, e]));

  let added = 0;
  for (const ticker of tickersOfInterest) {
    const key = `${date}|${ticker}`;
    if (existingKeys.has(key)) continue;
    const ev = byTicker.get(ticker);
    if (!ev || ev.error || ev.lastClose == null) continue;
    history.push({ date, ticker, score: ev.score, signal: ev.signal, lastClose: ev.lastClose });
    added++;
  }
  if (added > 0) saveScoreHistory(history, filePath);
  return added;
}

module.exports = { HISTORY_PATH, loadScoreHistory, saveScoreHistory, appendScoreHistory };
