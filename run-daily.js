#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const { WATCHLIST, BENCHMARK_TICKER, STRATEGY, CORE_HOLDINGS, USE_FUNDAMENTAL_TILT_IN_PRODUCTION, MIDCAP_WATCHLIST, SMALLCAP_WATCHLIST, GLOBAL_WATCHLIST } = require('./config');
const { buildMidcapWatchlist, buildMidcapWatchlistMarkdown } = require('./lib/midcapWatch');
const { buildSmallcapWatchlist, buildSmallcapWatchlistMarkdown } = require('./lib/smallcapWatch');
const { buildGlobalWatchlist, buildGlobalWatchlistMarkdown } = require('./lib/globalWatch');
const { buildThirteenFReport, buildThirteenFMarkdown } = require('./lib/thirteenF');
const marketData = require('./lib/marketData');
const strategy = require('./lib/strategy');
const portfolio = require('./lib/portfolio');
const { runDecisionEngine } = require('./lib/decide');
const { buildReportMarkdown, buildReportJson } = require('./lib/report');
const { fetchMacroRiskPanel } = require('./lib/macroRisk');
const { sma } = require('./lib/indicators');
const {
  buildSectorRotation,
  buildQualityCompaniesReport,
  buildMarketIntelMarkdown,
  buildResearchReport,
  buildResearchNotesMarkdown,
  buildOtherMarketsPanel,
  loadInvestmentTechniques,
  buildOtherMarketsMarkdown,
  loadChileInvestingGuide,
  buildChileInvestingGuideMarkdown,
} = require('./lib/marketIntel');
const { appendHistory } = require('./lib/trackRecord');
const { appendScoreHistory } = require('./lib/scoreHistory');
const { appendToJournal, loadJournal, buildDecisionJournalMarkdown } = require('./lib/decisionJournal');
const { loadQualityScores } = require('./lib/loadFundamentalsCache');
const { loadPortfolio, savePortfolio, initCoreIfEmpty, applyDividends } = require('./lib/sleeves');
const { loadVariant, saveVariant, runVariantDay, buildVariantMarkdown, buildVariantJson } = require('./lib/variantPortfolio');

// Carteras paralelas en vivo: mismo motor técnico (lib/decide.js, sin cambios)
// que el satellite de producción, pero sobre universos que no se pueden
// backtestear con el mismo rigor (sin dataset point-in-time gratuito para
// mid/small-cap e internacional, ver GRADUATION_CRITERIA.md) — avanzar día a
// día en vivo es la única forma de evaluarlos sin look-ahead bias. Capital
// ficticio propio, igual al que recibe el satellite de producción ($300 =
// 30% de $1000), para comparar manzanas con manzanas.
const VARIANTS_STARTING_CAPITAL = 300;

async function main() {
  const date = new Date().toISOString().slice(0, 10);
  const tickers = WATCHLIST.map((w) => w.ticker);

  const midcapTickers = MIDCAP_WATCHLIST.map((w) => w.ticker);
  const smallcapTickers = SMALLCAP_WATCHLIST.map((w) => w.ticker);
  const globalTickers = GLOBAL_WATCHLIST.map((w) => w.ticker);
  console.log(`[invest-bot] ${date} — descargando datos de mercado para ${tickers.length} tickers (satellite) + ${CORE_HOLDINGS.length} (core, con dividendos) + ${midcapTickers.length} (mid-cap) + ${smallcapTickers.length} (small-cap) + ${globalTickers.length} (internacional, todos solo seguimiento)...`);
  const [{ data, errors }, macro, benchmarkData, coreFetch, midcapFetch, smallcapFetch, globalFetch] = await Promise.all([
    marketData.fetchAll(tickers),
    fetchMacroRiskPanel(),
    marketData.fetchDailyCandles(BENCHMARK_TICKER),
    marketData.fetchAll(CORE_HOLDINGS, { range: '2y', includeDividends: true }),
    marketData.fetchAll(midcapTickers),
    marketData.fetchAll(smallcapTickers),
    marketData.fetchAll(globalTickers),
  ]);
  for (const e of errors) console.warn(`[invest-bot] WARN: ${e.ticker}: ${e.message}`);
  for (const e of coreFetch.errors) console.warn(`[invest-bot] WARN (core): ${e.ticker}: ${e.message}`);

  // --- Sleeve CORE (70%, largo plazo, dividendos, buy & hold) ---
  const { core, satellite } = loadPortfolio();

  const corePrices = new Map();
  const coreDividends = new Map();
  for (const [ticker, d] of coreFetch.data.entries()) {
    corePrices.set(ticker, d.candles.at(-1)?.close ?? null);
    coreDividends.set(ticker, d.dividends || []);
  }

  const coreInitTrades = initCoreIfEmpty(core, corePrices, date);
  const dividendsCredited = applyDividends(core, coreDividends, date);
  const coreSnapshot = portfolio.snapshot(core, { date, pricesByTicker: corePrices });

  if (coreInitTrades.length > 0) {
    console.log(`[invest-bot] Core inicializado: ${coreInitTrades.length} posiciones compradas con $${core.startingCapital.toFixed(2)}.`);
  }
  if (dividendsCredited.length > 0) {
    const total = dividendsCredited.reduce((a, d) => a + d.usdAmount, 0);
    console.log(`[invest-bot] Dividendos acreditados hoy: ${dividendsCredited.length} pagos, $${total.toFixed(2)} total.`);
  }

  // --- Sleeve SATELLITE (30%, técnico, el motor que ya teníamos) ---
  const quality = loadQualityScores();
  if (quality && USE_FUNDAMENTAL_TILT_IN_PRODUCTION) {
    console.log(`[invest-bot] Cache de fundamentales: ${quality.count} tickers (generado ${quality.generatedAt}) — tilt ACTIVO.`);
  } else if (quality) {
    console.log(`[invest-bot] Cache de fundamentales disponible (${quality.count} tickers) pero el tilt está APAGADO en producción (no validado) — score 100% técnico.`);
  }

  const evaluations = strategy.evaluateAll(data, quality && USE_FUNDAMENTAL_TILT_IN_PRODUCTION ? quality.scores : null);

  // Régimen de mercado (benchmark vs su propia SMA200): se calcula y se muestra
  // como contexto informativo, pero NO se usa para bloquear compras — lo probamos
  // en validate.js y empeoró el resultado fuera de muestra (ver GRADUATION_CRITERIA.md).
  const benchAdjCloses = benchmarkData.candles.map((c) => c.adjClose ?? c.close);
  const benchSma200 = sma(benchAdjCloses, STRATEGY.smaTrend);
  const regimeBullish = benchSma200 === null ? true : benchAdjCloses.at(-1) >= benchSma200;
  console.log(`[invest-bot] Régimen de mercado (${BENCHMARK_TICKER} vs SMA200, solo informativo): ${regimeBullish ? 'ALCISTA' : 'BAJISTA'}`);

  const { trades, warnings, prices } = runDecisionEngine(satellite, evaluations, date);
  const satelliteSnapshot = portfolio.snapshot(satellite, { date, pricesByTicker: prices });

  savePortfolio({ core, satellite });

  const allWarnings = [
    ...errors.map((e) => `Sin datos de ${e.ticker}: ${e.message}`),
    ...coreFetch.errors.map((e) => `Sin datos de ${e.ticker} (core): ${e.message}`),
    ...warnings,
  ];

  const combined = {
    totalValue: coreSnapshot.totalValue + satelliteSnapshot.totalValue,
    startingCapital: core.startingCapital + satellite.startingCapital,
  };
  combined.pnl = combined.totalValue - combined.startingCapital;
  combined.pnlPct = (combined.pnl / combined.startingCapital) * 100;

  const markdown = buildReportMarkdown({
    date,
    core: { state: core, snapshot: coreSnapshot, trades: coreInitTrades, dividends: dividendsCredited, prices: corePrices, allDividendsByTicker: coreDividends },
    satellite: { state: satellite, snapshot: satelliteSnapshot, evaluations, trades, prices },
    combined,
    warnings: allWarnings,
    macro,
    regimeBullish,
  });

  const json = buildReportJson({
    date,
    core: { state: core, snapshot: coreSnapshot, trades: coreInitTrades, dividends: dividendsCredited, prices: corePrices, allDividendsByTicker: coreDividends },
    satellite: { state: satellite, snapshot: satelliteSnapshot, evaluations, trades, prices },
    combined,
    warnings: allWarnings,
    macro,
    regimeBullish,
  });

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
  console.log(
    `[invest-bot] Total: $${combined.totalValue.toFixed(2)} (${combined.pnlPct.toFixed(2)}%) — Core: $${coreSnapshot.totalValue.toFixed(2)} | Satellite: $${satelliteSnapshot.totalValue.toFixed(2)}`
  );
  console.log(`[invest-bot] Trades satellite hoy: ${trades.length}`);

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

  // Research notes profesionales: core (10) + posiciones actuales del satellite.
  // Veredicto sintetizado (caso alcista/bajista/gatillos de venta), no solo datos.
  try {
    const researchTickers = [...new Set([...CORE_HOLDINGS, ...Object.keys(satellite.positions)])];
    console.log(`[invest-bot] Generando research notes para ${researchTickers.length} tickers (core + posiciones satellite)...`);
    const { notes, errors: researchErrors } = await buildResearchReport(researchTickers);
    const researchMd = buildResearchNotesMarkdown({ date, notes });

    fs.writeFileSync(path.join(reportsDir, `research-notes-${date}.md`), researchMd);
    fs.writeFileSync(path.join(reportsDir, 'research-notes-latest.md'), researchMd);

    const researchJson = { date, generatedAt: new Date().toISOString(), notes };
    fs.writeFileSync(path.join(reportsDir, `research-notes-${date}.json`), JSON.stringify(researchJson, null, 2));
    fs.writeFileSync(path.join(reportsDir, 'research-notes-latest.json'), JSON.stringify(researchJson, null, 2));

    console.log(`[invest-bot] Research notes generadas: ${notes.length} (${notes.filter((n) => n.verdict === 'POSITIVO').length} positivo, ${notes.filter((n) => n.verdict === 'CAUTELA').length} cautela).`);
    if (researchErrors.length > 0) {
      console.warn(`[invest-bot] WARN research notes: ${researchErrors.length} tickers sin datos. Motivo (primer caso): ${researchErrors[0].ticker}: ${researchErrors[0].message}`);
    }

    // Historial de scores por ticker (core + posiciones satellite) — para
    // graficar en el dashboard cómo evolucionó cada acción en el tiempo, no
    // solo el valor total del portfolio. Ver lib/scoreHistory.js.
    const addedToScoreHistory = appendScoreHistory(evaluations, researchTickers, date);
    if (addedToScoreHistory > 0) console.log(`[invest-bot] Historial de scores: ${addedToScoreHistory} entradas nuevas.`);

    // Track record (idea de TipRanks: medir el historial de cada veredicto,
    // no solo mostrarlo) — guarda hoy en la bitácora para poder comparar más
    // adelante contra el precio futuro. Ver track-record.js y lib/trackRecord.js.
    const addedToHistory = appendHistory(notes, date);
    if (addedToHistory > 0) console.log(`[invest-bot] Track record: ${addedToHistory} entradas nuevas agregadas a la bitácora histórica.`);

    // Bitácora de decisiones: cada trade del satellite hoy, junto al research
    // note vigente de ese ticker (si lo hay) — para poder preguntar más
    // adelante "¿por qué compramos/vendimos X ese día?" sin buscar el
    // reporte viejo a mano. Ver lib/decisionJournal.js.
    if (trades.length > 0) {
      const notesByTicker = new Map(notes.map((n) => [n.ticker, n]));
      const addedToJournal = appendToJournal(trades, notesByTicker);
      if (addedToJournal > 0) console.log(`[invest-bot] Bitácora de decisiones: ${addedToJournal} trade(s) nuevos registrados.`);
    }
    const journalMd = buildDecisionJournalMarkdown({ journal: loadJournal() });
    fs.writeFileSync(path.join(reportsDir, 'decision-journal-latest.md'), journalMd);
  } catch (err) {
    console.warn(`[invest-bot] WARN: no se pudieron generar las research notes (${err.message}) — se sigue sin esto, no es crítico.`);
  }

  // Seguimiento del S&P MidCap 400: mismo score técnico, pero NUNCA se pasa a
  // runDecisionEngine — no genera trades. No hay dataset point-in-time
  // gratuito para este índice, así que no se puede validar con validate.js
  // el mismo rigor que el S&P 500 — ver lib/midcapWatch.js y GRADUATION_CRITERIA.md.
  try {
    console.log(`[invest-bot] Evaluando ${midcapFetch.data.size} empresas del S&P MidCap 400 (solo seguimiento, no se opera)...`);
    const midcapEvaluations = strategy.evaluateAll(midcapFetch.data);
    const sectorByTicker = new Map(MIDCAP_WATCHLIST.map((w) => [w.ticker, w.sector]));
    const midcapWatchlist = buildMidcapWatchlist(midcapEvaluations, sectorByTicker);
    const midcapMd = buildMidcapWatchlistMarkdown({ date, watchlist: midcapWatchlist });

    fs.writeFileSync(path.join(reportsDir, `midcap-watch-${date}.md`), midcapMd);
    fs.writeFileSync(path.join(reportsDir, 'midcap-watch-latest.md'), midcapMd);

    const midcapJson = { date, generatedAt: new Date().toISOString(), ...midcapWatchlist };
    fs.writeFileSync(path.join(reportsDir, `midcap-watch-${date}.json`), JSON.stringify(midcapJson, null, 2));
    fs.writeFileSync(path.join(reportsDir, 'midcap-watch-latest.json'), JSON.stringify(midcapJson, null, 2));

    console.log(`[invest-bot] Seguimiento mid-cap generado: ${midcapWatchlist.totalEvaluated} evaluadas.`);
    if (midcapFetch.errors.length > 0) console.warn(`[invest-bot] WARN mid-cap: ${midcapFetch.errors.length} tickers sin datos.`);
  } catch (err) {
    console.warn(`[invest-bot] WARN: no se pudo generar el seguimiento mid-cap (${err.message}) — se sigue sin esto, no es crítico.`);
  }

  // Seguimiento del S&P SmallCap 600: mismo trato que el MidCap 400 arriba —
  // solo seguimiento, nunca genera trades. Ver lib/smallcapWatch.js.
  try {
    console.log(`[invest-bot] Evaluando ${smallcapFetch.data.size} empresas del S&P SmallCap 600 (solo seguimiento, no se opera)...`);
    const smallcapEvaluations = strategy.evaluateAll(smallcapFetch.data);
    const smallcapSectorByTicker = new Map(SMALLCAP_WATCHLIST.map((w) => [w.ticker, w.sector]));
    const smallcapWatchlist = buildSmallcapWatchlist(smallcapEvaluations, smallcapSectorByTicker);
    const smallcapMd = buildSmallcapWatchlistMarkdown({ date, watchlist: smallcapWatchlist });

    fs.writeFileSync(path.join(reportsDir, `smallcap-watch-${date}.md`), smallcapMd);
    fs.writeFileSync(path.join(reportsDir, 'smallcap-watch-latest.md'), smallcapMd);

    const smallcapJson = { date, generatedAt: new Date().toISOString(), ...smallcapWatchlist };
    fs.writeFileSync(path.join(reportsDir, `smallcap-watch-${date}.json`), JSON.stringify(smallcapJson, null, 2));
    fs.writeFileSync(path.join(reportsDir, 'smallcap-watch-latest.json'), JSON.stringify(smallcapJson, null, 2));

    console.log(`[invest-bot] Seguimiento small-cap generado: ${smallcapWatchlist.totalEvaluated} evaluadas.`);
    if (smallcapFetch.errors.length > 0) console.warn(`[invest-bot] WARN small-cap: ${smallcapFetch.errors.length} tickers sin datos.`);
  } catch (err) {
    console.warn(`[invest-bot] WARN: no se pudo generar el seguimiento small-cap (${err.message}) — se sigue sin esto, no es crítico.`);
  }

  // Seguimiento de empresas internacionales (ADRs y similares en bolsas de
  // EEUU) — mismo trato: solo seguimiento, nunca genera trades. Ver lib/globalWatch.js.
  try {
    console.log(`[invest-bot] Evaluando ${globalFetch.data.size} empresas internacionales (solo seguimiento, no se opera)...`);
    const globalEvaluations = strategy.evaluateAll(globalFetch.data);
    const globalMetaByTicker = new Map(GLOBAL_WATCHLIST.map((w) => [w.ticker, { sector: w.sector, country: w.country }]));
    const globalWatchlist = buildGlobalWatchlist(globalEvaluations, globalMetaByTicker);
    const globalMd = buildGlobalWatchlistMarkdown({ date, watchlist: globalWatchlist });

    fs.writeFileSync(path.join(reportsDir, `global-watch-${date}.md`), globalMd);
    fs.writeFileSync(path.join(reportsDir, 'global-watch-latest.md'), globalMd);

    const globalJson = { date, generatedAt: new Date().toISOString(), ...globalWatchlist };
    fs.writeFileSync(path.join(reportsDir, `global-watch-${date}.json`), JSON.stringify(globalJson, null, 2));
    fs.writeFileSync(path.join(reportsDir, 'global-watch-latest.json'), JSON.stringify(globalJson, null, 2));

    console.log(`[invest-bot] Seguimiento internacional generado: ${globalWatchlist.totalEvaluated} evaluadas.`);
    if (globalFetch.errors.length > 0) console.warn(`[invest-bot] WARN internacional: ${globalFetch.errors.length} tickers sin datos.`);
  } catch (err) {
    console.warn(`[invest-bot] WARN: no se pudo generar el seguimiento internacional (${err.message}) — se sigue sin esto, no es crítico.`);
  }

  // Carteras paralelas en vivo (ver VARIANTS_STARTING_CAPITAL arriba): mismo
  // motor técnico que el satellite de producción, aplicado sobre mid+small
  // cap e internacional. A diferencia de los paneles de seguimiento de
  // arriba, estas SÍ ejecutan trades reales (ficticios) con su propio
  // capital, independiente del satellite — es el experimento en vivo, no
  // solo un ranking de scores.
  try {
    console.log('[invest-bot] Corriendo carteras paralelas en vivo (mid+small cap, internacional)...');

    const midsmallCandles = new Map([...midcapFetch.data, ...smallcapFetch.data]);
    const variantDefs = [
      { name: 'midsmall', label: 'Mid + Small cap', universeLabel: 'S&P MidCap 400 + SmallCap 600', candles: midsmallCandles },
      { name: 'global', label: 'Internacional (ADRs)', universeLabel: 'empresas internacionales en bolsas de EEUU', candles: globalFetch.data },
    ];

    for (const v of variantDefs) {
      const vState = loadVariant(v.name, VARIANTS_STARTING_CAPITAL);
      const { trades: vTrades, snapshot: vSnapshot } = runVariantDay({ state: vState, candlesByTicker: v.candles, date });
      saveVariant(v.name, vState);

      const vMd = buildVariantMarkdown({ date, label: v.label, universeLabel: v.universeLabel, state: vState, snapshot: vSnapshot, trades: vTrades });
      const vJson = buildVariantJson({ date, name: v.name, label: v.label, universeLabel: v.universeLabel, state: vState, snapshot: vSnapshot, trades: vTrades });

      fs.writeFileSync(path.join(reportsDir, `variant-${v.name}-${date}.md`), vMd);
      fs.writeFileSync(path.join(reportsDir, `variant-${v.name}-latest.md`), vMd);
      fs.writeFileSync(path.join(reportsDir, `variant-${v.name}-${date}.json`), JSON.stringify(vJson, null, 2));
      fs.writeFileSync(path.join(reportsDir, `variant-${v.name}-latest.json`), JSON.stringify(vJson, null, 2));

      console.log(`[invest-bot] Variante "${v.label}": $${vSnapshot.totalValue.toFixed(2)} (${vSnapshot.pnlPct.toFixed(2)}%), ${vTrades.length} trade(s) hoy.`);
    }
  } catch (err) {
    console.warn(`[invest-bot] WARN: no se pudieron correr las carteras paralelas (${err.message}) — se sigue sin esto, no es crítico.`);
  }

  // Mercados más allá de acciones (commodities, bonos, REITs, cripto, forex)
  // + técnicas de inversión (short selling, opciones) — educativo, no afecta
  // el trading. Ver investment-techniques.json para el contenido estático.
  try {
    console.log('[invest-bot] Generando panel de otros mercados y técnicas de inversión...');
    const otherMarkets = await buildOtherMarketsPanel();
    const techniques = loadInvestmentTechniques();
    const otherMarketsMd = buildOtherMarketsMarkdown({ date, otherMarkets, techniques });

    fs.writeFileSync(path.join(reportsDir, `other-markets-${date}.md`), otherMarketsMd);
    fs.writeFileSync(path.join(reportsDir, 'other-markets-latest.md'), otherMarketsMd);

    const otherMarketsJson = { date, generatedAt: new Date().toISOString(), otherMarkets: otherMarkets.rows, techniques };
    fs.writeFileSync(path.join(reportsDir, `other-markets-${date}.json`), JSON.stringify(otherMarketsJson, null, 2));
    fs.writeFileSync(path.join(reportsDir, 'other-markets-latest.json'), JSON.stringify(otherMarketsJson, null, 2));

    console.log(`[invest-bot] Panel de otros mercados generado: ${otherMarkets.rows.length} activos, ${techniques.length} técnicas documentadas.`);
    if (otherMarkets.errors.length > 0) console.warn(`[invest-bot] WARN otros mercados: ${otherMarkets.errors.length} activos sin datos.`);
  } catch (err) {
    console.warn(`[invest-bot] WARN: no se pudo generar el panel de otros mercados (${err.message}) — se sigue sin esto, no es crítico.`);
  }

  // Guía de tributación/brokers para invertir desde Chile en EEUU — contenido
  // estático, no se regenera con datos de mercado, solo se copia al reporte
  // del día para que quede versionado junto con el resto.
  try {
    const guide = loadChileInvestingGuide();
    const guideMd = buildChileInvestingGuideMarkdown({ date, guide });

    fs.writeFileSync(path.join(reportsDir, `chile-guide-${date}.md`), guideMd);
    fs.writeFileSync(path.join(reportsDir, 'chile-guide-latest.md'), guideMd);

    const guideJson = { date, generatedAt: new Date().toISOString(), guide };
    fs.writeFileSync(path.join(reportsDir, `chile-guide-${date}.json`), JSON.stringify(guideJson, null, 2));
    fs.writeFileSync(path.join(reportsDir, 'chile-guide-latest.json'), JSON.stringify(guideJson, null, 2));

    console.log(`[invest-bot] Guía de inversión desde Chile copiada al reporte (${guide.length} temas).`);
  } catch (err) {
    console.warn(`[invest-bot] WARN: no se pudo copiar la guía de inversión desde Chile (${err.message}) — se sigue sin esto, no es crítico.`);
  }

  // 13F: qué compran los fondos grandes (Berkshire, Scion) — trimestral,
  // con retraso de hasta 45 días, nunca en vivo. Solo informativo, no
  // alimenta al satellite. Ver lib/thirteenF.js.
  try {
    console.log('[invest-bot] Generando reporte 13F (fondos grandes)...');
    const { reports: fundReports, errors: fundErrors } = await buildThirteenFReport();
    const fundMd = buildThirteenFMarkdown({ date, reports: fundReports });

    fs.writeFileSync(path.join(reportsDir, `thirteen-f-${date}.md`), fundMd);
    fs.writeFileSync(path.join(reportsDir, 'thirteen-f-latest.md'), fundMd);

    const fundJson = { date, generatedAt: new Date().toISOString(), reports: fundReports };
    fs.writeFileSync(path.join(reportsDir, `thirteen-f-${date}.json`), JSON.stringify(fundJson, null, 2));
    fs.writeFileSync(path.join(reportsDir, 'thirteen-f-latest.json'), JSON.stringify(fundJson, null, 2));

    console.log(`[invest-bot] Reporte 13F generado: ${fundReports.length} fondo(s).`);
    if (fundErrors.length > 0) console.warn(`[invest-bot] WARN 13F: ${JSON.stringify(fundErrors)}`);
  } catch (err) {
    console.warn(`[invest-bot] WARN: no se pudo generar el reporte 13F (${err.message}) — se sigue sin esto, no es crítico.`);
  }

  return { reportPath, combined, trades };
}

if (require.main === module) {
  main().catch((err) => {
    console.error('[invest-bot] ERROR fatal:', err);
    process.exit(1);
  });
}

module.exports = { main };
