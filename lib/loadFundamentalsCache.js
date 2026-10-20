'use strict';

const fs = require('fs');
const path = require('path');

const { buildQualityScores } = require('./fundamentalScore');

const CACHE_PATH = path.join(__dirname, '..', 'fundamentals-cache.json');

/**
 * Lee fundamentals-cache.json (generado por refresh-fundamentals-cache.js,
 * corrido manualmente) y devuelve el Map<ticker, {qualityScore, parts, raw}>
 * listo para pasarle a strategy.evaluateAll. Si el cache no existe o está
 * vacío, devuelve null — el motor sigue funcionando solo con señales técnicas.
 */
function loadQualityScores() {
  if (!fs.existsSync(CACHE_PATH)) return null;

  let cache;
  try {
    cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
  } catch {
    return null;
  }

  const entries = Object.entries(cache.tickers || {});
  if (entries.length === 0) return null;

  const fundamentalsByTicker = new Map(entries);
  return { scores: buildQualityScores(fundamentalsByTicker), generatedAt: cache.generatedAt, count: entries.length };
}

module.exports = { loadQualityScores, CACHE_PATH };
