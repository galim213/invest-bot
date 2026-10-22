'use strict';

/**
 * Seguimiento del S&P SmallCap 600 — mismo patrón que lib/midcapWatch.js
 * (ver ese archivo para la explicación completa de por qué es solo
 * seguimiento, sin operar): no hay dataset gratuito de membresía histórica
 * punto-en-el-tiempo para este índice, así que `validate.js` no puede
 * probar con el mismo rigor si esta parte del universo habría sobrevivido
 * 2018/2020/2022. El motor técnico evalúa estas 600 empresas todos los
 * días, pero nunca se pasa a lib/decide.js — no genera trades.
 */
function buildSmallcapWatchlist(evaluations, sectorByTicker, topN = 20) {
  const ranked = evaluations
    .filter((e) => !e.error && e.lastClose != null)
    .map((e) => ({ ...e, sector: sectorByTicker.get(e.ticker) || null }))
    .sort((a, b) => b.score - a.score);

  return {
    top: ranked.slice(0, topN),
    bottom: ranked.slice(-topN).reverse(),
    totalEvaluated: ranked.length,
  };
}

function buildSmallcapWatchlistMarkdown({ date, watchlist }) {
  const lines = [];
  lines.push(`# Seguimiento S&P SmallCap 600 (candidatos, sin operar) — ${date}`);
  lines.push('');
  lines.push(
    '> 🔭 **Solo seguimiento — el satellite NO compra ni vende nada de esta lista todavía.** El motor técnico puntúa estas 600 empresas igual que el S&P 500, pero no hay dataset gratuito de membresía histórica para validar esto con `validate.js` (a diferencia del S&P 500). Hasta tener esa validación o un track record real en papel, esto es contexto — ver GRADUATION_CRITERIA.md. No es asesoría financiera real.'
  );
  lines.push('');

  lines.push(`_${watchlist.totalEvaluated} empresas evaluadas hoy._`);
  lines.push('');

  lines.push('## Las más alcistas (score más alto)');
  lines.push('');
  lines.push('| Ticker | Sector | Score | Señal | Precio | Motivo principal |');
  lines.push('|---|---|---|---|---|---|');
  for (const e of watchlist.top) {
    lines.push(`| ${e.ticker} | ${e.sector || '—'} | ${e.score} | ${e.signal} | $${e.lastClose.toFixed(2)} | ${e.reasons[0] || '—'} |`);
  }
  lines.push('');

  lines.push('## Las más bajistas (score más bajo)');
  lines.push('');
  lines.push('| Ticker | Sector | Score | Señal | Precio | Motivo principal |');
  lines.push('|---|---|---|---|---|---|');
  for (const e of watchlist.bottom) {
    lines.push(`| ${e.ticker} | ${e.sector || '—'} | ${e.score} | ${e.signal} | $${e.lastClose.toFixed(2)} | ${e.reasons[0] || '—'} |`);
  }
  lines.push('');

  lines.push('---');
  lines.push(`_Generado automáticamente el ${new Date().toISOString()}. Mismo motor que lib/strategy.js, sin tilt fundamental (apagado en producción). No genera trades._`);

  return lines.join('\n');
}

module.exports = { buildSmallcapWatchlist, buildSmallcapWatchlistMarkdown };
