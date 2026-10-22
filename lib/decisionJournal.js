'use strict';

const fs = require('fs');
const path = require('path');

const JOURNAL_PATH = path.join(__dirname, '..', 'data', 'decision-journal.json');

/**
 * Bitácora de decisiones: cada trade del satellite (compra, venta, corto,
 * cobertura) queda guardado junto al research note vigente ese mismo día
 * para ese ticker, si existe — así en el futuro se puede preguntar "¿por qué
 * compramos X el 22 de octubre?" sin ir a buscar el reporte de ese día a
 * mano. El `reason` del trade ya trae el score/razones técnicas como texto;
 * esto le suma el veredicto sintetizado (bull/bear/sellTriggers) cuando
 * estuvo disponible — para una venta, el ticker ya no está en posiciones esa
 * misma corrida, así que no siempre va a haber research note, y eso está
 * bien: no se inventa uno.
 */

function loadJournal(filePath = JOURNAL_PATH) {
  if (!fs.existsSync(filePath)) return [];
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function saveJournal(journal, filePath = JOURNAL_PATH) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(journal, null, 2));
}

function tradeKey(t) {
  return `${t.date}|${t.ticker}|${t.action}|${t.shares}|${t.price}`;
}

/**
 * Agrega los trades de hoy a la bitácora (idempotente por trade — si
 * run-daily.js corre más de una vez el mismo día, no duplica el mismo trade
 * exacto). `researchNotesByTicker` es un Map ticker -> nota (del mismo día,
 * después de research notes) — opcional.
 */
function appendToJournal(trades, researchNotesByTicker, filePath = JOURNAL_PATH) {
  const journal = loadJournal(filePath);
  const existingKeys = new Set(journal.map(tradeKey));

  let added = 0;
  for (const t of trades) {
    const key = tradeKey(t);
    if (existingKeys.has(key)) continue;

    const note = researchNotesByTicker ? researchNotesByTicker.get(t.ticker) : null;
    journal.push({
      date: t.date,
      ticker: t.ticker,
      action: t.action,
      shares: t.shares,
      price: t.price,
      usdAmount: t.usdAmount,
      fee: t.fee ?? null,
      realizedPnl: t.realizedPnl ?? null,
      reason: t.reason,
      researchAvailable: Boolean(note),
      researchVerdict: note?.verdict ?? null,
      researchBull: note?.bull ?? null,
      researchBear: note?.bear ?? null,
      researchSellTriggers: note?.sellTriggers ?? null,
    });
    existingKeys.add(key);
    added++;
  }

  if (added > 0) saveJournal(journal, filePath);
  return added;
}

function buildDecisionJournalMarkdown({ journal, limit = 30 }) {
  const lines = [];
  lines.push('# Bitácora de decisiones — satellite');
  lines.push('');
  lines.push(
    '> 📓 Cada compra/venta del satellite, junto al research note vigente ese día para ese ticker (cuando existe). El motivo técnico siempre está (viene del score); el veredicto sintetizado solo cuando el ticker tenía research note generada esa misma corrida — una venta no siempre lo tiene, porque la posición se cierra esa misma corrida.'
  );
  lines.push('');

  const recent = [...journal].sort((a, b) => (a.date < b.date ? 1 : -1)).slice(0, limit);
  if (recent.length === 0) {
    lines.push('_Todavía no hay trades registrados en la bitácora._');
    return lines.join('\n');
  }

  const verbMap = { BUY: 'COMPRA', SELL: 'VENTA', TRIM: 'VENTA PARCIAL', SHORT: 'APERTURA DE CORTO', COVER: 'CIERRE DE CORTO', COVER_PARTIAL: 'CIERRE PARCIAL DE CORTO' };
  for (const entry of recent) {
    lines.push(`## ${entry.date} — ${verbMap[entry.action] || entry.action} ${entry.ticker}`);
    lines.push('');
    lines.push(
      `${entry.shares.toFixed(3)} shares a $${entry.price.toFixed(2)} ($${entry.usdAmount.toFixed(2)})${entry.realizedPnl != null ? ` — PnL realizado: $${entry.realizedPnl.toFixed(2)}` : ''}`
    );
    lines.push('');
    lines.push(`_Motivo técnico:_ ${entry.reason}`);
    lines.push('');
    if (entry.researchAvailable) {
      lines.push(`**Research note vigente ese día: ${entry.researchVerdict}**`);
      if (entry.researchBull?.length) for (const b of entry.researchBull) lines.push(`- ✅ ${b}`);
      if (entry.researchBear?.length) for (const b of entry.researchBear) lines.push(`- ⚠️ ${b}`);
      if (entry.researchSellTriggers?.length) for (const t of entry.researchSellTriggers) lines.push(`- 🚨 ${t}`);
    } else {
      lines.push('_Sin research note disponible para este ticker ese mismo día (frecuente en ventas, el ticker ya no está en posiciones al generarse las notas)._');
    }
    lines.push('');
  }

  return lines.join('\n');
}

module.exports = { JOURNAL_PATH, loadJournal, saveJournal, appendToJournal, buildDecisionJournalMarkdown };
