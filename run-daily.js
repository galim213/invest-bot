#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const { WATCHLIST } = require('./config');
const marketData = require('./lib/marketData');
const strategy = require('./lib/strategy');
const portfolio = require('./lib/portfolio');
const { runDecisionEngine } = require('./lib/decide');
const { buildReportMarkdown } = require('./lib/report');
const { fetchMacroRiskPanel } = require('./lib/macroRisk');

async function main() {
  const date = new Date().toISOString().slice(0, 10);
  const tickers = WATCHLIST.map((w) => w.ticker);

  console.log(`[invest-bot] ${date} — descargando datos de mercado para ${tickers.length} tickers...`);
  const [{ data, errors }, macro] = await Promise.all([marketData.fetchAll(tickers), fetchMacroRiskPanel()]);
  for (const e of errors) console.warn(`[invest-bot] WARN: ${e.ticker}: ${e.message}`);

  const evaluations = strategy.evaluateAll(data);

  const state = portfolio.load();
  const { trades, warnings, prices } = runDecisionEngine(state, evaluations, date);

  const snapshot = portfolio.snapshot(state, { date, pricesByTicker: prices });
  portfolio.save(state);

  const allWarnings = [...errors.map((e) => `Sin datos de ${e.ticker}: ${e.message}`), ...warnings];

  const markdown = buildReportMarkdown({
    date,
    state,
    evaluations,
    trades,
    warnings: allWarnings,
    snapshot,
    prices,
    macro,
  });

  const reportsDir = path.join(__dirname, 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });
  const reportPath = path.join(reportsDir, `${date}.md`);
  fs.writeFileSync(reportPath, markdown);

  const latestPath = path.join(reportsDir, 'latest.md');
  fs.writeFileSync(latestPath, markdown);

  console.log(`[invest-bot] Reporte generado en ${reportPath}`);
  console.log(`[invest-bot] Valor del portfolio: $${snapshot.totalValue.toFixed(2)} (${snapshot.pnlPct.toFixed(2)}%)`);
  console.log(`[invest-bot] Trades ejecutados hoy: ${trades.length}`);

  return { reportPath, snapshot, trades };
}

if (require.main === module) {
  main().catch((err) => {
    console.error('[invest-bot] ERROR fatal:', err);
    process.exit(1);
  });
}

module.exports = { main };
