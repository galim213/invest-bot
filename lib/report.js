'use strict';

const { buildConcentration, concentrationMarkdown } = require('./concentration');

const { WATCHLIST, REPORT_TOP_N } = require('../config');

function fmtUsd(n) {
  return `$${n.toFixed(2)}`;
}

function fmtPct(n) {
  const sign = n > 0 ? '+' : '';
  return `${sign}${n.toFixed(2)}%`;
}

function dayChange(snapshot, dailySnapshots) {
  const prev = dailySnapshots.at(-2);
  if (!prev) return { dayPnl: null, dayPnlPct: null };
  const dayPnl = snapshot.totalValue - prev.totalValue;
  return { dayPnl, dayPnlPct: (dayPnl / prev.totalValue) * 100 };
}

/**
 * El universo completo (S&P 500, ~500 tickers) se evalúa siempre para decidir
 * trades, pero listar las 500 señales en el reporte no es legible ni escala
 * bien para la búsqueda de noticias del agente. Esto recorta a lo accionable:
 * las N mejores, las N peores, y cualquier ticker con posición abierta.
 */
function spotlightEvaluations(evaluations, heldTickers, n) {
  const held = new Set(heldTickers);
  const withScore = evaluations.filter((e) => !e.error);
  const sorted = [...withScore].sort((a, b) => b.score - a.score);
  const top = sorted.slice(0, n);
  const bottom = sorted.slice(-n);
  const heldEvals = withScore.filter((e) => held.has(e.ticker));

  const byTicker = new Map();
  for (const e of [...top, ...bottom, ...heldEvals]) byTicker.set(e.ticker, e);
  return [...byTicker.values()].sort((a, b) => b.score - a.score);
}

/**
 * Agrupa los dividendos acreditados (state.history, action: 'DIVIDEND') por
 * ticker: el último pagado, lo acumulado en el año de `asOfDate` (YYYY-MM-DD)
 * y lo acumulado desde que se abrió la posición (siempre "desde el inicio"
 * para el core, que se compra una sola vez y no vuelve a abrirse).
 */
function dividendStatsByTicker(history, asOfDate) {
  const year = asOfDate ? asOfDate.slice(0, 4) : null;
  const byTicker = new Map();

  for (const h of history) {
    if (h.action !== 'DIVIDEND') continue;
    if (!byTicker.has(h.ticker)) byTicker.set(h.ticker, { lastDividend: null, dividendsYtd: 0, dividendsAllTime: 0 });
    const stats = byTicker.get(h.ticker);
    stats.dividendsAllTime += h.usdAmount;
    if (year && h.date && h.date.slice(0, 4) === year) stats.dividendsYtd += h.usdAmount;
    if (!stats.lastDividend || h.date > stats.lastDividend.date) {
      stats.lastDividend = { date: h.date, amountPerShare: h.price, usdAmount: h.usdAmount };
    }
  }

  return byTicker;
}

/**
 * El último dividendo que la EMPRESA pagó de verdad (histórico de 2 años de
 * Yahoo, `includeDividends: true` en marketData.fetchAll) — informativo,
 * independiente de si nosotros ya lo cobramos o no (si abrimos la posición
 * hace 2 días, `dividendStatsByTicker` va a estar vacío durante meses, pero
 * la empresa sigue pagando su dividendo real en el medio).
 */
function lastRealDividendByTicker(allDividendsByTicker) {
  const byTicker = new Map();
  if (!allDividendsByTicker) return byTicker;
  for (const [ticker, dividends] of allDividendsByTicker.entries()) {
    if (!dividends || dividends.length === 0) continue;
    const last = [...dividends].sort((a, b) => (a.date < b.date ? 1 : -1))[0];
    byTicker.set(ticker, { date: last.date, amountPerShare: last.amountPerShare });
  }
  return byTicker;
}

function positionsTable(positions, prices, sectorByTicker, dividendStats, totalValue, realDividends) {
  const lines = [];
  const entries = Object.entries(positions);
  if (entries.length === 0) {
    lines.push('_Sin posiciones abiertas._');
    return lines;
  }
  const showDividends = Boolean(dividendStats);
  const header = showDividends
    ? '| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |'
    : '| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |';
  lines.push(header);
  lines.push(showDividends ? '|---|---|---|---|---|---|---|---|---|---|---|' : '|---|---|---|---|---|---|---|---|');
  for (const [ticker, pos] of entries) {
    const price = prices.get(ticker) ?? pos.avgCost;
    const marketValue = pos.shares * price;
    const unrealizedPnl = (price - pos.avgCost) * pos.shares;
    const unrealizedPct = ((price - pos.avgCost) / pos.avgCost) * 100;
    const weightPct = totalValue ? (marketValue / totalValue) * 100 : null;
    let row = `| ${ticker} | ${sectorByTicker.get(ticker) || '-'} | ${pos.shares.toFixed(3)} | ${fmtUsd(pos.avgCost)} | ${fmtUsd(price)} | ${fmtUsd(marketValue)} | ${weightPct != null ? weightPct.toFixed(1) + '%' : '-'} | ${fmtUsd(unrealizedPnl)} (${fmtPct(unrealizedPct)}) |`;
    if (showDividends) {
      const d = dividendStats.get(ticker);
      const real = realDividends ? realDividends.get(ticker) : null;
      // "Último dividendo" es el de la EMPRESA de verdad (histórico real de Yahoo),
      // no si nosotros ya lo cobramos — eso está en las columnas de "cobrado".
      const last = real ? `$${real.amountPerShare.toFixed(4)}/acción (${real.date})` : '—';
      const ytd = d ? fmtUsd(d.dividendsYtd) : fmtUsd(0);
      const allTime = d ? fmtUsd(d.dividendsAllTime) : fmtUsd(0);
      row += ` ${last} | ${ytd} | ${allTime} |`;
    }
    lines.push(row);
  }
  return lines;
}

function positionsJson(positions, prices, sectorByTicker, dividendStats, totalValue, realDividends) {
  return Object.entries(positions).map(([ticker, pos]) => {
    const price = prices.get(ticker) ?? pos.avgCost;
    const marketValue = pos.shares * price;
    const unrealizedPnl = (price - pos.avgCost) * pos.shares;
    const unrealizedPct = ((price - pos.avgCost) / pos.avgCost) * 100;
    const d = dividendStats ? dividendStats.get(ticker) : null;
    const real = realDividends ? realDividends.get(ticker) : null;
    return {
      ticker,
      sector: sectorByTicker.get(ticker) || null,
      shares: pos.shares,
      avgCost: pos.avgCost,
      currentPrice: price,
      marketValue,
      weightPct: totalValue ? (marketValue / totalValue) * 100 : null,
      unrealizedPnl,
      unrealizedPct,
      openedAt: pos.openedAt,
      // Dividendo real de la EMPRESA (histórico de Yahoo), independiente de
      // si nosotros ya lo cobramos — lo que pagó de verdad la última vez.
      lastRealDividendDate: real?.date ?? null,
      lastRealDividendPerShare: real?.amountPerShare ?? null,
      // Lo que nosotros efectivamente cobramos en la simulación (puede estar
      // vacío por semanas si recién abrimos la posición, aunque la empresa
      // haya pagado dividendo en el medio — ver lastRealDividendDate arriba).
      lastDividendDate: d?.lastDividend?.date ?? null,
      lastDividendPerShare: d?.lastDividend?.amountPerShare ?? null,
      lastDividendUsd: d?.lastDividend?.usdAmount ?? null,
      dividendsYtd: d ? d.dividendsYtd : null,
      dividendsAllTime: d ? d.dividendsAllTime : null,
    };
  });
}

function buildReportMarkdown({ date, core, satellite, combined, warnings, macro, regimeBullish }) {
  const sectorByTicker = new Map(WATCHLIST.map((w) => [w.ticker, w.sector]));
  const lines = [];

  lines.push(`# Reporte diario de inversión (simulado) — ${date}`);
  lines.push('');
  lines.push(
    '> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.'
  );
  lines.push('');

  // --- Resumen combinado ---
  lines.push('## Resumen combinado (core + satellite)');
  lines.push('');
  lines.push(`- Capital inicial total: ${fmtUsd(combined.startingCapital)}`);
  lines.push(`- Valor total hoy: **${fmtUsd(combined.totalValue)}**`);
  lines.push(`- P&L acumulado: ${fmtUsd(combined.pnl)} (${fmtPct(combined.pnlPct)})`);
  lines.push(
    `- Core (70%, largo plazo): ${fmtUsd(core.snapshot.totalValue)} (${fmtPct(core.snapshot.pnlPct)}) | Satellite (30%, técnico): ${fmtUsd(satellite.snapshot.totalValue)} (${fmtPct(satellite.snapshot.pnlPct)})`
  );
  lines.push('');

  if (regimeBullish != null) {
    lines.push(
      (regimeBullish ? '**Régimen de mercado: ALCISTA**' : '**Régimen de mercado: BAJISTA**') +
        ' (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._'
    );
    lines.push('');
  }

  if (macro) {
    lines.push('## Panorama de riesgo macro (contexto, no predicción)');
    lines.push('');
    if (macro.vix != null) {
      lines.push(
        `- **VIX**: ${macro.vix.toFixed(2)} — ${macro.vixClass.level} (${macro.vixClass.note})${macro.vixTrend10d != null ? ` Variación 10d: ${macro.vixTrend10d >= 0 ? '+' : ''}${macro.vixTrend10d.toFixed(1)} pts.` : ''}`
      );
    }
    if (macro.yieldSpread != null) {
      lines.push(
        `- **Curva de rendimientos (10 años vs 3 meses)**: ${macro.yieldSpread >= 0 ? '+' : ''}${macro.yieldSpread.toFixed(2)} pts ${macro.inverted ? '— **INVERTIDA** (señal histórica de riesgo de recesión a 6-24 meses, no un timing exacto).' : '— normal (sin inversión).'}`
      );
    }
    if (macro.creditSpreadProxy20d != null) {
      lines.push(
        `- **Spread de crédito (proxy HYG vs LQD, 20d)**: ${(macro.creditSpreadProxy20d * 100).toFixed(2)} pts ${macro.creditStress ? '— **ESTRÉS**.' : '— normal.'}`
      );
    }
    if (macro.dxy != null) {
      lines.push(`- **Índice dólar (DXY)**: ${macro.dxy.toFixed(2)}${macro.dxyTrend10d != null ? ` (variación 10d: ${macro.dxyTrend10d >= 0 ? '+' : ''}${macro.dxyTrend10d.toFixed(2)})` : ''}`);
    }
    lines.push('');
  }

  // --- CORE ---
  lines.push('## 🏛️ Core — largo plazo, dividendos (70% del capital)');
  lines.push('');
  lines.push(
    'Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".'
  );
  lines.push('');
  const coreDividendStats = dividendStatsByTicker(core.state.history, date);
  const coreRealDividends = lastRealDividendByTicker(core.allDividendsByTicker);
  lines.push(...positionsTable(core.state.positions, core.prices, sectorByTicker, coreDividendStats, core.snapshot.totalValue, coreRealDividends));
  lines.push('');
  if (core.trades.length > 0) {
    lines.push('**Compra inicial de hoy:**');
    for (const t of core.trades) {
      lines.push(`- COMPRA ${t.ticker} — ${t.shares.toFixed(3)} shares a ${fmtUsd(t.price)} (${fmtUsd(t.usdAmount)}).`);
    }
    lines.push('');
  }
  const totalDividendsEver = core.state.history.filter((h) => h.action === 'DIVIDEND').reduce((a, h) => a + h.usdAmount, 0);
  lines.push(`**Dividendos acumulados desde el inicio: ${fmtUsd(totalDividendsEver)}**`);
  if (core.dividends.length > 0) {
    lines.push('');
    lines.push('Dividendos acreditados hoy:');
    for (const d of core.dividends) lines.push(`- ${d.ticker}: ${fmtUsd(d.usdAmount)} ($${d.price.toFixed(4)}/acción × ${d.shares.toFixed(3)} shares).`);
  }
  lines.push('');

  // --- SATELLITE ---
  lines.push('## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)');
  lines.push('');
  lines.push(
    'El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.'
  );
  lines.push('');
  lines.push(...positionsTable(satellite.state.positions, satellite.prices, sectorByTicker, null, satellite.snapshot.totalValue));
  lines.push('');
  lines.push(...concentrationMarkdown(buildConcentration({ positions: satellite.state.positions, prices: satellite.prices, sectorByTicker, candlesByTicker: satellite.candles })));

  lines.push('### Movimientos ejecutados hoy');
  lines.push('');
  if (satellite.trades.length === 0) {
    lines.push('_No se ejecutaron movimientos hoy._');
  } else {
    for (const t of satellite.trades) {
      const verb = { BUY: 'COMPRA', SELL: 'VENTA', TRIM: 'VENTA PARCIAL' }[t.action] || t.action;
      lines.push(`- **${verb} ${t.ticker}** — ${t.shares.toFixed(3)} shares a ${fmtUsd(t.price)} (${fmtUsd(t.usdAmount)}). _${t.reason}_`);
    }
  }
  lines.push('');

  const spotlight = spotlightEvaluations(satellite.evaluations, Object.keys(satellite.state.positions), REPORT_TOP_N);
  const dataErrors = satellite.evaluations.filter((e) => e.error);

  lines.push(`### Señales destacadas (top ${REPORT_TOP_N} + posiciones abiertas, de ${satellite.evaluations.length} tickers evaluados)`);
  lines.push('');
  lines.push('| Ticker | Sector | Score | Señal | Precio | Motivo principal |');
  lines.push('|---|---|---|---|---|---|');
  for (const ev of spotlight) {
    lines.push(`| ${ev.ticker} | ${sectorByTicker.get(ev.ticker) || '-'} | ${ev.score} | ${ev.signal} | ${fmtUsd(ev.lastClose)} | ${ev.reasons[0] || '-'} |`);
  }
  lines.push('');

  lines.push('#### Detalle de razonamiento (señales destacadas)');
  lines.push('');
  for (const ev of spotlight) {
    lines.push(`**${ev.ticker}** (score ${ev.score}, señal ${ev.signal})`);
    for (const r of ev.reasons) lines.push(`  - ${r}`);
  }
  lines.push('');

  if (warnings.length > 0 || dataErrors.length > 0) {
    lines.push('## Avisos');
    lines.push('');
    for (const w of warnings.slice(0, 10)) lines.push(`- ⚠️ ${w}`);
    if (warnings.length > 10) lines.push(`- ⚠️ ...y ${warnings.length - 10} avisos más.`);
    if (dataErrors.length > 0) {
      lines.push(`- ⚠️ Sin datos para ${dataErrors.length} ticker(s): ${dataErrors.slice(0, 15).map((e) => e.ticker).join(', ')}${dataErrors.length > 15 ? '...' : ''}.`);
    }
    lines.push('');
  }

  lines.push('---');
  lines.push(
    `_Generado automáticamente el ${new Date().toISOString()}. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._`
  );

  return lines.join('\n');
}

/**
 * Versión estructurada (JSON) del mismo reporte, pensada para ser consumida por
 * un dashboard u otra app — sin tener que parsear el markdown.
 */
function buildReportJson({ date, core, satellite, combined, warnings, macro, regimeBullish }) {
  const sectorByTicker = new Map(WATCHLIST.map((w) => [w.ticker, w.sector]));

  const spotlight = spotlightEvaluations(satellite.evaluations, Object.keys(satellite.state.positions), REPORT_TOP_N);
  const signals = spotlight.map((ev) => ({
    ticker: ev.ticker,
    sector: sectorByTicker.get(ev.ticker) || null,
    score: ev.score,
    signal: ev.signal,
    lastClose: ev.lastClose,
    reasons: ev.reasons,
    metrics: ev.metrics,
  }));

  const totalDividendsEver = core.state.history.filter((h) => h.action === 'DIVIDEND').reduce((a, h) => a + h.usdAmount, 0);
  const coreDividendStats = dividendStatsByTicker(core.state.history, date);
  const coreRealDividends = lastRealDividendByTicker(core.allDividendsByTicker);

  return {
    date,
    generatedAt: new Date().toISOString(),
    universeSize: satellite.evaluations.length,
    regimeBullish: regimeBullish ?? null,
    combined,
    core: {
      startingCapital: core.state.startingCapital,
      cash: core.snapshot.cash,
      totalValue: core.snapshot.totalValue,
      pnl: core.snapshot.pnl,
      pnlPct: core.snapshot.pnlPct,
      ...dayChange(core.snapshot, core.state.dailySnapshots),
      totalDividendsEver,
      dividendsToday: core.dividends,
      positions: positionsJson(core.state.positions, core.prices, sectorByTicker, coreDividendStats, core.snapshot.totalValue, coreRealDividends),
      dailySnapshots: core.state.dailySnapshots,
    },
    satellite: {
      startingCapital: satellite.state.startingCapital,
      cash: satellite.snapshot.cash,
      totalValue: satellite.snapshot.totalValue,
      pnl: satellite.snapshot.pnl,
      pnlPct: satellite.snapshot.pnlPct,
      ...dayChange(satellite.snapshot, satellite.state.dailySnapshots),
      positions: positionsJson(satellite.state.positions, satellite.prices, sectorByTicker, null, satellite.snapshot.totalValue),
      concentration: buildConcentration({ positions: satellite.state.positions, prices: satellite.prices, sectorByTicker, candlesByTicker: satellite.candles }),
      dailySnapshots: satellite.state.dailySnapshots,
      signals,
      trades: satellite.trades,
    },
    macro: macro || null,
    warnings: warnings || [],
  };
}

module.exports = { buildReportMarkdown, buildReportJson, dividendStatsByTicker, lastRealDividendByTicker, positionsJson, positionsTable };
