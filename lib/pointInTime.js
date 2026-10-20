'use strict';

const fs = require('fs');
const path = require('path');
const { WATCHLIST } = require('../config');

const CSV_PATH = path.join(__dirname, '..', 'sp500_historical_components.csv');

function normalizeTicker(t) {
  return t.trim().toUpperCase().replace(/\./g, '-');
}

/**
 * Carga la membresía histórica real del S&P 500 (día por día, solo una fila
 * por cambio de composición) desde hanshof/sp500_constituents (MIT, ver
 * README). Esto es lo que permite backtestear SIN el sesgo de "usar la lista
 * de hoy para simular el pasado" — un ticker que hoy es gigante (ej. PLTR,
 * recién sumado al índice en 2024) no aparece como disponible para comprar
 * en fechas anteriores a su incorporación real.
 *
 * Limitación conocida: la fuente llega hasta 2025-08-23. Para fechas más
 * recientes que eso, se usa la lista actual (`WATCHLIST`) como fallback —
 * no es ideal pero es la mejor aproximación disponible sin pagar por datos
 * de membresía point-in-time al día.
 *
 * Limitación más profunda (no resuelta por esto): esto arregla el sesgo de
 * "comprar algo antes de que fuera investable", pero NO arregla que no
 * tengamos precios de las empresas que SALIERON del índice (quebraron, las
 * compraron, etc.) — Yahoo Finance no tiene datos confiables de tickers
 * delistados. El sesgo de supervivencia se reduce, no se elimina.
 */
function loadHistoricalMembership() {
  if (!fs.existsSync(CSV_PATH)) return null;

  const content = fs.readFileSync(CSV_PATH, 'utf8').trim();
  const lines = content.split('\n');
  const rows = [];

  for (let i = 1; i < lines.length; i++) {
    const commaIdx = lines[i].indexOf(',');
    if (commaIdx === -1) continue;
    const date = lines[i].slice(0, commaIdx);
    let tickerField = lines[i].slice(commaIdx + 1);
    // El campo de tickers viene entre comillas si tiene comas adentro (siempre, en este archivo).
    if (tickerField.startsWith('"') && tickerField.endsWith('"')) {
      tickerField = tickerField.slice(1, -1);
    }
    const tickers = new Set(tickerField.split(',').map(normalizeTicker).filter(Boolean));
    rows.push({ date, tickers });
  }

  rows.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

  const fallbackUniverse = new Set(WATCHLIST.map((w) => normalizeTicker(w.ticker)));
  const lastKnownDate = rows.length > 0 ? rows[rows.length - 1].date : null;

  /** Devuelve el Set<ticker> (normalizado) que integraba el S&P 500 en esa fecha. */
  function getUniverseAt(date) {
    if (rows.length === 0) return fallbackUniverse;
    if (lastKnownDate && date > lastKnownDate) return fallbackUniverse;

    // Búsqueda binaria de la última fila con date <= fecha buscada.
    let lo = 0;
    let hi = rows.length - 1;
    let result = null;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (rows[mid].date <= date) {
        result = rows[mid];
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return result ? result.tickers : fallbackUniverse;
  }

  return { getUniverseAt, coverage: { from: rows[0]?.date, to: lastKnownDate }, rowCount: rows.length };
}

module.exports = { loadHistoricalMembership, normalizeTicker };
