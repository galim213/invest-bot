'use strict';

/**
 * Seguimiento de empresas internacionales que cotizan en bolsas de EEUU
 * (ADRs y empresas con domicilio fuera de EEUU, vía la API pública de
 * screener de Nasdaq, filtradas a >= $500M de market cap para no llenarlo
 * de micro-caps chinas ilíquidas) — mismo trato que mid/small-cap: SOLO
 * seguimiento, nunca genera trades. No hay dataset point-in-time para esto
 * tampoco, y además el riesgo de delisting/fraude contable es más alto en
 * ADRs chinas específicamente (ver casos históricos de empresas chinas
 * deslistadas de bolsas de EEUU) — razón extra para no operar esto a ciegas.
 */
function buildGlobalWatchlist(evaluations, metaByTicker, topN = 20) {
  const ranked = evaluations
    .filter((e) => !e.error && e.lastClose != null)
    .map((e) => {
      const meta = metaByTicker.get(e.ticker) || {};
      return { ...e, sector: meta.sector || null, country: meta.country || null };
    })
    .sort((a, b) => b.score - a.score);

  return {
    top: ranked.slice(0, topN),
    bottom: ranked.slice(-topN).reverse(),
    totalEvaluated: ranked.length,
  };
}

function buildGlobalWatchlistMarkdown({ date, watchlist }) {
  const lines = [];
  lines.push(`# Seguimiento global — empresas internacionales en bolsas de EEUU (candidatos, sin operar) — ${date}`);
  lines.push('');
  lines.push(
    '> 🌍 **Solo seguimiento — el satellite NO compra ni vende nada de esta lista todavía.** Empresas domiciliadas fuera de EEUU que cotizan en NYSE/Nasdaq/AMEX (ADRs y similares), >= $500M de market cap. Mismo motor técnico, sin validación histórica posible (no hay dataset point-in-time gratuito) — ver GRADUATION_CRITERIA.md. Riesgo adicional a tener en cuenta: algunas ADRs (sobre todo chinas) tuvieron casos históricos de fraude contable o deslisting forzado — no es lo mismo que una empresa del S&P 500. No es asesoría financiera real.'
  );
  lines.push('');

  lines.push(`_${watchlist.totalEvaluated} empresas evaluadas hoy._`);
  lines.push('');

  lines.push('## Las más alcistas (score más alto)');
  lines.push('');
  lines.push('| Ticker | País | Sector | Score | Señal | Precio | Motivo principal |');
  lines.push('|---|---|---|---|---|---|---|');
  for (const e of watchlist.top) {
    lines.push(`| ${e.ticker} | ${e.country || '—'} | ${e.sector || '—'} | ${e.score} | ${e.signal} | $${e.lastClose.toFixed(2)} | ${e.reasons[0] || '—'} |`);
  }
  lines.push('');

  lines.push('## Las más bajistas (score más bajo)');
  lines.push('');
  lines.push('| Ticker | País | Sector | Score | Señal | Precio | Motivo principal |');
  lines.push('|---|---|---|---|---|---|---|');
  for (const e of watchlist.bottom) {
    lines.push(`| ${e.ticker} | ${e.country || '—'} | ${e.sector || '—'} | ${e.score} | ${e.signal} | $${e.lastClose.toFixed(2)} | ${e.reasons[0] || '—'} |`);
  }
  lines.push('');

  lines.push('---');
  lines.push(`_Generado automáticamente el ${new Date().toISOString()}. Fuente del universo: screener público de Nasdaq (api.nasdaq.com), filtrado por país != EEUU y market cap >= $500M. No genera trades._`);

  return lines.join('\n');
}

module.exports = { buildGlobalWatchlist, buildGlobalWatchlistMarkdown };
