#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const { WATCHLIST, BENCHMARK_TICKER, STRATEGY, USE_FUNDAMENTAL_TILT_IN_PRODUCTION } = require('./config');
const marketData = require('./lib/marketData');
const strategy = require('./lib/strategy');
const portfolio = require('./lib/portfolio');
const { runDecisionEngine } = require('./lib/decide');
const { buildReportMarkdown, buildReportJson } = require('./lib/report');
const { fetchMacroRiskPanel } = require('./lib/macroRisk');
const { sma } = require('./lib/indicators');
const { buildSectorRotation, buildQualityCompaniesReport, buildMarketIntelMarkdown } = require('./lib/marketIntel');
const { loadQualityScores } = require('./lib/loadFundamentalsCache');

async function main() {
  const date = new Date().toISOString().slice(0, 10);
  const tickers = WATCHLIST.map((w) => w.ticker);

  console.log(`[invest-bot] ${date} — descargando datos de mercado para ${tickers.length} tickers...`);
  const [{ data, errors }, macro, benchmarkData] = await Promise.all([
    marketData.fetchAll(tickers),
    fetchMacroRiskPanel(),
    marketData.fetchDailyCandles(BENCHMARK_TICKER),
  ]);
  for (const e of errors) console.warn(`[invest-bot] WARN: ${e.ticker}: ${e.message}`);

  // Cache de fundamentales (lectura de disco, sin red — se refresca a mano con
  // refresh-fundamentals-cache.js porque ese endpoint no funciona en la nube).
  // Apagado por default en producción: testeado en backtest.js --fundamentals,
  // empeoró en ventanas cortas (60/120d) y solo "mejoró" en la ventana larga
  // (250d, contaminada por look-ahead) — mismo patrón sospechoso que el filtro
  // de régimen ya descartado. Ver USE_FUNDAMENTAL_TILT_IN_PRODUCTION en config.js.
  const quality = loadQualityScores();
  if (quality && USE_FUNDAMENTAL_TILT_IN_PRODUCTION) {
    console.log(`[invest-bot] Cache de fundamentales: ${quality.count} tickers (generado ${quality.generatedAt}) — tilt ACTIVO.`);
  } else if (quality) {
    console.log(`[invest-bot] Cache de fundamentales disponible (${quality.count} tickers) pero el tilt está APAGADO en producción (no validado) — score 100% técnico.`);
  } else {
    console.log('[invest-bot] Sin cache de fundamentales — el score es 100% técnico hoy.');
  }

  const evaluations = strategy.evaluateAll(data, quality && USE_FUNDAMENTAL_TILT_IN_PRODUCTION ? quality.scores : null);

  // Régimen de mercado (benchmark vs su propia SMA200): se calcula y se muestra
  // como contexto informativo, pero NO se usa para bloquear compras — lo probamos
  // en validate.js (ver reports/validation-multi-regime.json) y empeoró el
  // resultado fuera de muestra en 3 de 4 regímenes probados (solo mejoraba en el
  // período ya usado para ajustar parámetros, señal clásica de overfitting).
  const benchAdjCloses = benchmarkData.candles.map((c) => c.adjClose ?? c.close);
  const benchSma200 = sma(benchAdjCloses, STRATEGY.smaTrend);
  const regimeBullish = benchSma200 === null ? true : benchAdjCloses.at(-1) >= benchSma200;
  console.log(`[invest-bot] Régimen de mercado (${BENCHMARK_TICKER} vs SMA200, solo informativo): ${regimeBullish ? 'ALCISTA' : 'BAJISTA'}`);

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
    regimeBullish,
  });

  const json = buildReportJson({ date, state, evaluations, trades, warnings: allWarnings, snapshot, prices, macro, regimeBullish });

  const reportsDir = path.join(__dirname, 'reports');
  fs.mkdirSync(reportsDir, { recursive: true });
  const reportPath = path.join(reportsDir, `${date}.md`);
  fs.writeFileSync(reportPath, markdown);

  const latestPath = path.join(reportsDir, 'latest.md');
  fs.writeFileSync(latestPath, markdown);

  const jsonPath = path.join(reportsDir, `${date}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2));

  const latestJsonPath = path.join(reportsDir, 'latest.json');
  fs.writeFileSync(latestJsonPath, JSON.stringify(json, null, 2));

  console.log(`[invest-bot] Reporte generado en ${reportPath}`);
  console.log(`[invest-bot] Valor del portfolio: $${snapshot.totalValue.toFixed(2)} (${snapshot.pnlPct.toFixed(2)}%)`);
  console.log(`[invest-bot] Trades ejecutados hoy: ${trades.length}`);

  // Informe de mercado (sectores + empresas de calidad educativo) — no afecta
  // las decisiones de trading, es contexto/aprendizaje aparte. Si Yahoo bloquea
  // el endpoint no oficial de fundamentales, esto no debe tirar abajo el resto.
  try {
    console.log('[invest-bot] Generando informe de mercado (rotación sectorial + empresas de calidad)...');
    const [sectorRotation, qualityCompanies] = await Promise.all([buildSectorRotation(), buildQualityCompaniesReport()]);
    const marketIntelMd = buildMarketIntelMarkdown({ date, sectorRotation, qualityCompanies });

    const intelPath = path.join(reportsDir, `market-intel-${date}.md`);
    fs.writeFileSync(intelPath, marketIntelMd);
    fs.writeFileSync(path.join(reportsDir, 'market-intel-latest.md'), marketIntelMd);

    const intelJson = { date, generatedAt: new Date().toISOString(), sectorRotation, qualityCompanies };
    fs.writeFileSync(path.join(reportsDir, `market-intel-${date}.json`), JSON.stringify(intelJson, null, 2));
    fs.writeFileSync(path.join(reportsDir, 'market-intel-latest.json'), JSON.stringify(intelJson, null, 2));

    console.log(`[invest-bot] Informe de mercado generado en ${intelPath}`);
    if (sectorRotation.errors.length > 0) console.warn(`[invest-bot] WARN rotación sectorial: ${sectorRotation.errors.length} ETFs sin datos.`);
    if (qualityCompanies.errors.length > 0) {
      console.warn(`[invest-bot] WARN fundamentales: ${qualityCompanies.errors.length} empresas sin datos. Motivo (primer caso): ${qualityCompanies.errors[0].ticker}: ${qualityCompanies.errors[0].message}`);
    }
  } catch (err) {
    console.warn(`[invest-bot] WARN: no se pudo generar el informe de mercado (${err.message}) — se sigue sin esto, no es crítico.`);
  }

  return { reportPath, snapshot, trades };
}

if (require.main === module) {
  main().catch((err) => {
    console.error('[invest-bot] ERROR fatal:', err);
    process.exit(1);
  });
}

module.exports = { main };
