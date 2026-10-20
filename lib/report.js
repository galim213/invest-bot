'use strict';

const { WATCHLIST } = require('../config');

function fmtUsd(n) {
  return `$${n.toFixed(2)}`;
}

function fmtPct(n) {
  const sign = n > 0 ? '+' : '';
  return `${sign}${n.toFixed(2)}%`;
}

function buildReportMarkdown({ date, state, evaluations, trades, warnings, snapshot, prices, macro }) {
  const sectorByTicker = new Map(WATCHLIST.map((w) => [w.ticker, w.sector]));
  const lines = [];

  lines.push(`# Reporte diario de inversión (simulado) — ${date}`);
  lines.push('');
  lines.push(
    '> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. Las señales se generan con reglas técnicas simples (medias móviles, momentum, RSI) sobre datos públicos y pueden estar equivocadas.'
  );
  lines.push('');

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
    lines.push(
      '- _Nota: estos dos indicadores (crecimiento del crédito y pendiente de la curva) son los que más respaldo académico tienen como señales tempranas de crisis en estudios de largo plazo multi-país. Aun así, tienen horizontes largos y variables, tasas de falso positivo conocidas, y no anticipan el tipo ni el momento exacto de una crisis — no son una alarma de "vender todo"._'
    );
    lines.push('');
  }

  lines.push('## Resumen del portfolio');
  lines.push('');
  lines.push(`- Capital inicial: ${fmtUsd(state.startingCapital)}`);
  lines.push(`- Valor total hoy: **${fmtUsd(snapshot.totalValue)}**`);
  lines.push(`- Efectivo disponible: ${fmtUsd(snapshot.cash)}`);
  lines.push(`- P&L acumulado: ${fmtUsd(snapshot.pnl)} (${fmtPct(snapshot.pnlPct)})`);
  const prevSnapshot = state.dailySnapshots.at(-2);
  if (prevSnapshot) {
    const dayPnl = snapshot.totalValue - prevSnapshot.totalValue;
    const dayPnlPct = (dayPnl / prevSnapshot.totalValue) * 100;
    lines.push(`- Variación de hoy: ${fmtUsd(dayPnl)} (${fmtPct(dayPnlPct)})`);
  }
  lines.push('');

  lines.push('## Posiciones actuales');
  lines.push('');
  const positionEntries = Object.entries(state.positions);
  if (positionEntries.length === 0) {
    lines.push('_Sin posiciones abiertas — 100% en efectivo._');
  } else {
    lines.push('| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor mercado | P&L no realizado |');
    lines.push('|---|---|---|---|---|---|---|');
    for (const [ticker, pos] of positionEntries) {
      const price = prices.get(ticker) ?? pos.avgCost;
      const marketValue = pos.shares * price;
      const unrealizedPnl = (price - pos.avgCost) * pos.shares;
      const unrealizedPct = ((price - pos.avgCost) / pos.avgCost) * 100;
      lines.push(
        `| ${ticker} | ${sectorByTicker.get(ticker) || '-'} | ${pos.shares.toFixed(3)} | ${fmtUsd(pos.avgCost)} | ${fmtUsd(price)} | ${fmtUsd(marketValue)} | ${fmtUsd(unrealizedPnl)} (${fmtPct(unrealizedPct)}) |`
      );
    }
  }
  lines.push('');

  lines.push('## Movimientos ejecutados hoy');
  lines.push('');
  if (trades.length === 0) {
    lines.push('_No se ejecutaron movimientos hoy._');
  } else {
    for (const t of trades) {
      const verb = { BUY: 'COMPRA', SELL: 'VENTA', TRIM: 'VENTA PARCIAL' }[t.action] || t.action;
      lines.push(
        `- **${verb} ${t.ticker}** — ${t.shares.toFixed(3)} shares a ${fmtUsd(t.price)} (${fmtUsd(t.usdAmount)}). _${t.reason}_`
      );
    }
  }
  lines.push('');

  lines.push('## Señales y predicciones de hoy (todo el watchlist)');
  lines.push('');
  lines.push('| Ticker | Score | Señal | Precio | Motivo principal |');
  lines.push('|---|---|---|---|---|');
  for (const ev of evaluations) {
    if (ev.error) {
      lines.push(`| ${ev.ticker} | - | SIN DATOS | - | ${ev.error} |`);
      continue;
    }
    lines.push(
      `| ${ev.ticker} | ${ev.score} | ${ev.signal} | ${fmtUsd(ev.lastClose)} | ${ev.reasons[0] || '-'} |`
    );
  }
  lines.push('');

  lines.push('### Detalle de razonamiento por ticker');
  lines.push('');
  for (const ev of evaluations) {
    if (ev.error) continue;
    lines.push(`**${ev.ticker}** (score ${ev.score}, señal ${ev.signal})`);
    for (const r of ev.reasons) lines.push(`  - ${r}`);
  }
  lines.push('');

  if (warnings.length > 0) {
    lines.push('## Avisos');
    lines.push('');
    for (const w of warnings) lines.push(`- ⚠️ ${w}`);
    lines.push('');
  }

  lines.push('---');
  lines.push(
    `_Generado automáticamente el ${new Date().toISOString()}. Fuente de datos: Yahoo Finance (público, retrasado). Estrategia: cruce de medias móviles + momentum + RSI con stop-loss y toma de ganancias automáticos. No constituye asesoría financiera._`
  );

  return lines.join('\n');
}

/**
 * Versión estructurada (JSON) del mismo reporte, pensada para ser consumida por
 * un dashboard u otra app — sin tener que parsear el markdown.
 */
function buildReportJson({ date, state, evaluations, trades, warnings, snapshot, prices, macro }) {
  const sectorByTicker = new Map(WATCHLIST.map((w) => [w.ticker, w.sector]));

  const prevSnapshot = state.dailySnapshots.at(-2);
  const dayPnl = prevSnapshot ? snapshot.totalValue - prevSnapshot.totalValue : null;
  const dayPnlPct = prevSnapshot ? (dayPnl / prevSnapshot.totalValue) * 100 : null;

  const positions = Object.entries(state.positions).map(([ticker, pos]) => {
    const price = prices.get(ticker) ?? pos.avgCost;
    const marketValue = pos.shares * price;
    const unrealizedPnl = (price - pos.avgCost) * pos.shares;
    const unrealizedPct = ((price - pos.avgCost) / pos.avgCost) * 100;
    return {
      ticker,
      sector: sectorByTicker.get(ticker) || null,
      shares: pos.shares,
      avgCost: pos.avgCost,
      currentPrice: price,
      marketValue,
      unrealizedPnl,
      unrealizedPct,
      openedAt: pos.openedAt,
    };
  });

  const signals = evaluations.map((ev) => ({
    ticker: ev.ticker,
    sector: sectorByTicker.get(ev.ticker) || null,
    score: ev.error ? null : ev.score,
    signal: ev.error ? 'NO_DATA' : ev.signal,
    lastClose: ev.error ? null : ev.lastClose,
    reasons: ev.error ? [] : ev.reasons,
    metrics: ev.error ? null : ev.metrics,
    error: ev.error || null,
  }));

  return {
    date,
    generatedAt: new Date().toISOString(),
    portfolio: {
      startingCapital: state.startingCapital,
      cash: snapshot.cash,
      totalValue: snapshot.totalValue,
      pnl: snapshot.pnl,
      pnlPct: snapshot.pnlPct,
      dayPnl,
      dayPnlPct,
      positions,
    },
    dailySnapshots: state.dailySnapshots,
    signals,
    trades,
    macro: macro || null,
    warnings: warnings || [],
  };
}

module.exports = { buildReportMarkdown, buildReportJson };
