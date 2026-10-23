'use strict';

const fs = require('fs');
const path = require('path');
const strategy = require('./strategy');
const portfolioLib = require('./portfolio');
const { runDecisionEngine } = require('./decide');

const DATA_DIR = path.join(__dirname, '..', 'data');

/**
 * Carteras paralelas en vivo: mismo motor técnico y mismo STRATEGY que el
 * satellite de producción (lib/decide.js sin cambios), pero corriendo sobre
 * un universo distinto y con su propio capital ficticio aislado — para
 * comparar en vivo universos que no se pueden backtestear con el mismo
 * rigor que el S&P 500 (mid/small-cap e internacional no tienen dataset
 * point-in-time gratuito, ver GRADUATION_CRITERIA.md). Al no haber datos
 * históricos point-in-time, avanzar día por día en vivo es la única forma
 * de evaluarlas sin look-ahead bias.
 */
function statePath(name) {
  return path.join(DATA_DIR, `portfolio-${name}.json`);
}

function loadVariant(name, startingCapital, filePath = statePath(name)) {
  if (fs.existsSync(filePath)) return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  return portfolioLib.initialState(startingCapital);
}

function saveVariant(name, state, filePath = statePath(name)) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(state, null, 2));
}

/** Muta `state` ejecutando las decisiones de hoy, igual que run-daily.js hace con el satellite de producción. */
function runVariantDay({ state, candlesByTicker, date }) {
  const evaluations = strategy.evaluateAll(candlesByTicker);
  const { trades, warnings, prices } = runDecisionEngine(state, evaluations, date);
  const snapshot = portfolioLib.snapshot(state, { date, pricesByTicker: prices });
  return { evaluations, trades, warnings, snapshot };
}

function buildVariantMarkdown({ date, label, universeLabel, state, snapshot, trades }) {
  const lines = [];
  lines.push(`# Cartera paralela — ${label} — ${date}`);
  lines.push('');
  lines.push(
    `> 🧪 **Experimento en vivo, no validado por backtest** (no hay dataset point-in-time gratuito para ${universeLabel}, así que no se puede correr validate.js con el mismo rigor que el S&P 500). Mismo motor técnico y mismos umbrales que el satellite de producción, aplicados sobre ${universeLabel} en vez de S&P 500. Capital ficticio independiente — simulación 100% educativa, no es asesoría financiera real.`
  );
  lines.push('');
  lines.push(`- Capital inicial: $${state.startingCapital.toFixed(2)}`);
  lines.push(`- Valor hoy: **$${snapshot.totalValue.toFixed(2)}**`);
  lines.push(`- P&L: $${snapshot.pnl.toFixed(2)} (${snapshot.pnlPct.toFixed(2)}%)`);
  lines.push('');
  lines.push('## Movimientos de hoy');
  lines.push('');
  if (trades.length === 0) {
    lines.push('_Sin movimientos hoy._');
  } else {
    for (const t of trades) {
      lines.push(`- **${t.action} ${t.ticker}**: ${t.shares.toFixed(4)} shares @ $${t.price.toFixed(2)} ($${t.usdAmount.toFixed(2)}). ${t.reason}`);
    }
  }
  lines.push('');
  lines.push('## Posiciones abiertas');
  lines.push('');
  const positions = Object.entries(state.positions);
  if (positions.length === 0) {
    lines.push('_Sin posiciones abiertas._');
  } else {
    lines.push('| Ticker | Shares | Costo prom. |');
    lines.push('|---|---|---|');
    for (const [ticker, pos] of positions) {
      lines.push(`| ${ticker} | ${pos.shares.toFixed(4)} | $${pos.avgCost.toFixed(2)} |`);
    }
  }
  lines.push('');
  lines.push(`_Generado automáticamente el ${new Date().toISOString()}. Simulación 100% educativa, no es asesoría financiera real._`);
  return lines.join('\n');
}

function buildVariantJson({ date, name, label, universeLabel, state, snapshot, trades }) {
  return {
    date,
    generatedAt: new Date().toISOString(),
    name,
    label,
    universeLabel,
    startingCapital: state.startingCapital,
    snapshot,
    trades,
    positions: Object.entries(state.positions).map(([ticker, pos]) => ({ ticker, ...pos })),
    dailySnapshots: state.dailySnapshots,
  };
}

module.exports = { statePath, loadVariant, saveVariant, runVariantDay, buildVariantMarkdown, buildVariantJson };
