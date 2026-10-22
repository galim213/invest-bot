'use strict';

const fs = require('fs');
const path = require('path');

const { SECTOR_ETFS, OTHER_MARKETS } = require('../config');
const marketData = require('./marketData');
const { fetchFundamentalsAll, fetchDeepResearchAll } = require('./fundamentals');
const { fetchSecFundamentalsAll } = require('./secEdgar');
const { buildResearchNotes } = require('./researchNote');

const QUALITY_COMPANIES_PATH = path.join(__dirname, '..', 'qualityCompanies.json');
const INVESTMENT_TECHNIQUES_PATH = path.join(__dirname, '..', 'investment-techniques.json');
const CHILE_INVESTING_GUIDE_PATH = path.join(__dirname, '..', 'chile-investing-guide.json');

function pctReturn(candles, window) {
  if (!candles || candles.length < window + 1) return null;
  const past = candles.at(-1 - window)?.close;
  const now = candles.at(-1)?.close;
  if (past == null || now == null) return null;
  return (now - past) / past;
}

/**
 * Rotación sectorial: para cada ETF de sector, momentum a 1 mes (21 ruedas) y
 * 3 meses (63 ruedas), ranking de líderes/rezagados. Es contexto de mercado,
 * no una señal que el motor de trading use para decidir — para eso está
 * strategy.js sobre tickers individuales.
 */
async function buildSectorRotation() {
  const tickers = SECTOR_ETFS.map((s) => s.ticker);
  const { data, errors } = await marketData.fetchAll(tickers, { range: '6mo' });

  const sectorByTicker = new Map(SECTOR_ETFS.map((s) => [s.ticker, s.sector]));
  const rows = [];
  for (const [ticker, d] of data.entries()) {
    const mom1m = pctReturn(d.candles, 21);
    const mom3m = pctReturn(d.candles, 63);
    rows.push({
      ticker,
      sector: sectorByTicker.get(ticker),
      lastClose: d.candles.at(-1)?.close ?? null,
      momentum1m: mom1m,
      momentum3m: mom3m,
    });
  }
  rows.sort((a, b) => (b.momentum1m ?? -Infinity) - (a.momentum1m ?? -Infinity));

  return { rows, errors };
}

/** Carga la base curada de empresas "de calidad" y les suma fundamentales en vivo. */
async function buildQualityCompaniesReport() {
  const curated = JSON.parse(fs.readFileSync(QUALITY_COMPANIES_PATH, 'utf8'));
  const tickers = curated.map((c) => c.ticker);

  const { data: fundamentals, errors } = await fetchFundamentalsAll(tickers);

  const companies = curated.map((c) => {
    const f = fundamentals.get(c.ticker);
    return {
      ticker: c.ticker,
      name: c.name,
      sector: c.sector,
      why: c.why,
      fundamentals: f
        ? {
            marketCap: f.marketCap,
            trailingPE: f.trailingPE,
            forwardPE: f.forwardPE,
            dividendYield: f.dividendYield,
            profitMargin: f.profitMargin,
            returnOnEquity: f.returnOnEquity,
            revenueGrowth: f.revenueGrowth,
            debtToEquity: f.debtToEquity,
            currentPrice: f.currentPrice,
            analystTargetMean: f.targetMeanPrice,
            analystRecommendation: f.recommendationKey,
          }
        : null,
    };
  });

  return { companies, errors };
}

/**
 * Research notes profesionales: para un set chico de tickers (core + posiciones
 * actuales del satellite), trae investigación profunda y arma un veredicto
 * sintetizado (caso alcista, caso bajista, gatillos de venta) — ver
 * lib/researchNote.js para la lógica de síntesis.
 */
async function buildResearchReport(tickers) {
  const curated = JSON.parse(fs.readFileSync(QUALITY_COMPANIES_PATH, 'utf8'));
  const qualityTextByTicker = new Map(curated.map((c) => [c.ticker, c.why]));

  // Yahoo (analistas, insiders, precio en vivo) y SEC EDGAR (fundamentales
  // oficiales de los 10-K/10-Q) en paralelo — si Yahoo falla (pasó el
  // 2026-10-20 y 2026-10-21), igual queda SEC EDGAR para no dejar las notas
  // vacías. Ver lib/secEdgar.js y lib/researchNote.js.
  const [{ data: deepResearch, errors: yahooErrors }, { data: secFundamentals, errors: secErrors }] = await Promise.all([
    fetchDeepResearchAll(tickers),
    fetchSecFundamentalsAll(tickers),
  ]);

  const notes = buildResearchNotes(tickers, deepResearch, qualityTextByTicker, secFundamentals);
  notes.sort((a, b) => b.bull.length - b.bear.length - (a.bull.length - a.bear.length));

  return { notes, errors: [...yahooErrors, ...secErrors.map((e) => ({ ...e, source: 'SEC EDGAR' }))] };
}

/**
 * Mercados más allá de acciones (materias primas, bonos, REITs, cripto,
 * forex): mismo tratamiento que la rotación sectorial — precio + momentum,
 * puramente informativo/educativo. El motor de trading del satellite sigue
 * operando solo sobre el S&P 500; esto es contexto para entender qué más
 * existe y cómo se está moviendo, no una señal que el bot use para decidir.
 */
async function buildOtherMarketsPanel() {
  const tickers = OTHER_MARKETS.map((m) => m.ticker);
  const { data, errors } = await marketData.fetchAll(tickers, { range: '6mo' });

  const infoByTicker = new Map(OTHER_MARKETS.map((m) => [m.ticker, m]));
  const rows = [];
  for (const [ticker, d] of data.entries()) {
    const info = infoByTicker.get(ticker);
    rows.push({
      ticker,
      name: info?.name,
      category: info?.category,
      lastClose: d.candles.at(-1)?.close ?? null,
      momentum1m: pctReturn(d.candles, 21),
      momentum3m: pctReturn(d.candles, 63),
    });
  }
  rows.sort((a, b) => (a.category || '').localeCompare(b.category || ''));

  return { rows, errors };
}

/** Lee la base educativa estática de técnicas de inversión (short selling, opciones, etc.). */
function loadInvestmentTechniques() {
  return JSON.parse(fs.readFileSync(INVESTMENT_TECHNIQUES_PATH, 'utf8'));
}

function riskPill(level) {
  if (/ALTO/.test(level)) return '🔴';
  if (/MEDIO/.test(level)) return '🟡';
  return '🟢';
}

function buildOtherMarketsMarkdown({ date, otherMarkets, techniques }) {
  const lines = [];
  lines.push(`# Más allá de acciones: mercados y técnicas — ${date}`);
  lines.push('');
  lines.push(
    '> 📚 **Sección educativa.** El motor de trading de este bot opera solo acciones del S&P 500 (satellite) + 10 empresas de calidad (core) — esto es contexto sobre otros mercados y herramientas que existen, para decidir con información, no es asesoría financiera real.'
  );
  lines.push('');

  lines.push('## Otros mercados: precio y momentum');
  lines.push('');
  lines.push('| Categoría | Activo | Precio | Momentum 1m | Momentum 3m |');
  lines.push('|---|---|---|---|---|');
  for (const r of otherMarkets.rows) {
    lines.push(
      `| ${r.category || '—'} | ${r.name || r.ticker} (\`${r.ticker}\`) | ${r.lastClose != null ? '$' + fmtNum(r.lastClose, 2) : '—'} | ${fmtPct(r.momentum1m)} | ${fmtPct(r.momentum3m)} |`
    );
  }
  lines.push('');
  lines.push(
    '_Futuros de materias primas (`=F`) y pares de forex (`=X`) pueden tener mayor volatilidad y mecánica de apalancamiento distinta a una acción — ver la sección de técnicas abajo. Cripto cotiza 24/7, el resto sigue horario de mercado._'
  );
  lines.push('');

  lines.push('## Técnicas de inversión más allá de comprar y mantener');
  lines.push('');
  lines.push(
    'Cada técnica tiene un nivel de riesgo y un caso de uso típico. "Implementado en el bot" indica si el motor de simulación ya puede ejecutar esto con plata ficticia (y si está activo en producción o todavía en validación).'
  );
  lines.push('');
  for (const t of techniques) {
    lines.push(`### ${riskPill(t.riskLevel)} ${t.name} — riesgo ${t.riskLevel}`);
    lines.push('');
    lines.push(`**Cómo funciona:** ${t.howItWorks}`);
    lines.push('');
    lines.push(`**Ejemplo numérico:** ${t.example}`);
    lines.push('');
    lines.push('**Riesgos:**');
    for (const r of t.risks) lines.push(`- ${r}`);
    lines.push('');
    lines.push(`**Cuándo lo usa un profesional:** ${t.whenAProUsesIt}`);
    lines.push('');
    lines.push(`**En este bot:** ${t.implementedInBot.status}`);
    lines.push('');
  }

  lines.push('---');
  lines.push(
    `_Generado automáticamente el ${new Date().toISOString()}. Precios: Yahoo Finance (público, retrasado). Las técnicas son contenido educativo estático (investment-techniques.json) — no son recomendaciones de uso, cada una tiene riesgo real de pérdida. No es asesoría financiera real._`
  );

  return lines.join('\n');
}

/** Lee la guía estática de tributación/brokers para invertir desde Chile en EEUU. */
function loadChileInvestingGuide() {
  return JSON.parse(fs.readFileSync(CHILE_INVESTING_GUIDE_PATH, 'utf8'));
}

function buildChileInvestingGuideMarkdown({ date, guide }) {
  const lines = [];
  lines.push(`# Invertir desde Chile en EEUU: tributación y brokers — ${date}`);
  lines.push('');
  lines.push(
    '> 📚 **Información general, no asesoría tributaria ni legal personalizada.** Las reglas tributarias cambian y dependen de tu situación particular — antes de actuar con plata real, confirmá con un contador o asesor tributario. Esto es para entender el panorama, no para declarar impuestos solo con esto. No es asesoría financiera real.'
  );
  lines.push('');

  for (const item of guide) {
    lines.push(`## ${item.question}`);
    lines.push('');
    lines.push(item.answer);
    lines.push('');
    if (item.caveats && item.caveats.length > 0) {
      lines.push('**Ojo con esto:**');
      for (const c of item.caveats) lines.push(`- ${c}`);
      lines.push('');
    }
    if (item.sources && item.sources.length > 0) {
      lines.push('**Fuentes:** ' + item.sources.map((s) => `[link](${s})`).join(' · '));
      lines.push('');
    }
  }

  lines.push('---');
  lines.push(
    `_Generado el ${new Date().toISOString()}. Contenido estático (chile-investing-guide.json), investigado con búsqueda web — no se actualiza solo, puede quedar desactualizado si cambia la normativa. No es asesoría tributaria ni legal real._`
  );

  return lines.join('\n');
}

function fmtUsdB(n) {
  if (n == null) return '—';
  return `$${(n / 1e9).toFixed(1)}B`;
}
function fmtPct(n) {
  if (n == null) return '—';
  return `${(n * 100).toFixed(1)}%`;
}
function fmtNum(n, d = 1) {
  if (n == null) return '—';
  return n.toFixed(d);
}

function buildMarketIntelMarkdown({ date, sectorRotation, qualityCompanies }) {
  const lines = [];
  lines.push(`# Informe de mercado — sectores y empresas de calidad — ${date}`);
  lines.push('');
  lines.push(
    '> 📚 **Sección educativa.** Esto es contexto de mercado y análisis fundamental para aprender, no son señales del motor de trading (que opera sobre el S&P 500 completo con reglas técnicas — ver el reporte diario). No es asesoría financiera.'
  );
  lines.push('');

  lines.push('## Rotación sectorial');
  lines.push('');
  lines.push('Qué sectores lideran y cuáles están rezagados, por momentum de precio.');
  lines.push('');
  lines.push('| Sector | ETF | Momentum 1m | Momentum 3m | Precio |');
  lines.push('|---|---|---|---|---|');
  for (const r of sectorRotation.rows) {
    lines.push(
      `| ${r.sector} | ${r.ticker} | ${fmtPct(r.momentum1m)} | ${fmtPct(r.momentum3m)} | $${fmtNum(r.lastClose, 2)} |`
    );
  }
  lines.push('');
  lines.push(
    '_Momentum = retorno de precio en la ventana, no es una recomendación de comprar el sector — un sector "caliente" también puede estar sobrecomprado._'
  );
  lines.push('');

  lines.push('## Empresas de calidad por sector (educativo)');
  lines.push('');
  lines.push(
    'Selección curada de empresas con posición competitiva reconocida en su sector, con fundamentales en vivo. La columna "por qué" explica el moat/ventaja competitiva — eso no cambia día a día, los números sí.'
  );
  lines.push('');

  const bySector = new Map();
  for (const c of qualityCompanies.companies) {
    if (!bySector.has(c.sector)) bySector.set(c.sector, []);
    bySector.get(c.sector).push(c);
  }

  for (const [sector, companies] of bySector.entries()) {
    lines.push(`### ${sector}`);
    lines.push('');
    for (const c of companies) {
      const f = c.fundamentals;
      lines.push(`**${c.ticker} — ${c.name}**`);
      lines.push(`- _Por qué:_ ${c.why}`);
      if (f) {
        lines.push(
          `- Market cap: ${fmtUsdB(f.marketCap)} | P/E: ${fmtNum(f.trailingPE, 1)} | Div. yield: ${fmtPct(f.dividendYield)} | Margen neto: ${fmtPct(f.profitMargin)} | ROE: ${fmtPct(f.returnOnEquity)} | Crec. ingresos: ${fmtPct(f.revenueGrowth)}`
        );
        if (f.analystRecommendation) {
          lines.push(`- Consenso de analistas: ${f.analystRecommendation}${f.analystTargetMean ? ` (precio objetivo promedio: $${fmtNum(f.analystTargetMean, 2)})` : ''}`);
        }
      } else {
        lines.push('- _Sin datos fundamentales disponibles hoy (falla ocasional del endpoint no oficial de Yahoo)._');
      }
      lines.push('');
    }
  }

  lines.push('---');
  lines.push(
    `_Generado automáticamente el ${new Date().toISOString()}. Fundamentales: endpoint no oficial de Yahoo Finance (mismo mecanismo que usa la librería yfinance) — puede fallar sin aviso. Los textos "por qué" son análisis cualitativo, no se actualizan automáticamente y pueden quedar desactualizados; revisalos cada tanto._`
  );

  return lines.join('\n');
}

function verdictPill(verdict) {
  if (verdict === 'POSITIVO') return '🟢 POSITIVO';
  if (verdict === 'CAUTELA') return '🟡 CAUTELA';
  return '⚪ NEUTRAL';
}

function buildResearchNotesMarkdown({ date, notes }) {
  const lines = [];
  lines.push(`# Research notes — core y posiciones actuales — ${date}`);
  lines.push('');
  lines.push(
    '> 📊 **Veredicto sintetizado, no solo datos.** Cada flag sale de una regla objetiva sobre datos reales (tendencia de analistas, historial de resultados, insiders, valuación) — no es una opinión libre. Es apoyo para decidir, no una recomendación de compra/venta. No es asesoría financiera real.'
  );
  lines.push('');

  for (const n of notes) {
    lines.push(`## ${n.ticker} — ${verdictPill(n.verdict)}`);
    lines.push('');
    if (n.why) lines.push(`_${n.why}_`);
    lines.push('');
    if (!n.yahooDataAvailable) {
      lines.push('_⚠️ Yahoo Finance no estuvo disponible hoy para este ticker — esta nota se armó solo con datos oficiales de SEC EDGAR, sin analistas/insiders/precio en vivo._');
      lines.push('');
    }
    lines.push(
      `Precio: ${n.currentPrice != null ? '$' + n.currentPrice.toFixed(2) : '—'} | Precio objetivo analistas: ${n.analystTarget != null ? '$' + n.analystTarget.toFixed(2) : '—'} | Consenso: ${n.analystRecommendation || '—'} | Próximos resultados: ${n.nextEarningsDate || '—'} | Percentil de calidad: ${n.qualityScore != null ? n.qualityScore.toFixed(0) + '/100' : '—'}`
    );
    if (n.secFundamentals) {
      const s = n.secFundamentals;
      const period = s.resultsArePartial ? `período parcial ${s.resultsPeriodLabel}` : `10-K FY${s.fiscalYear}`;
      lines.push(
        `Datos oficiales SEC (${period}): Ingresos ${s.revenue != null ? '$' + (s.revenue / 1e9).toFixed(1) + 'B' : '—'} | Utilidad neta ${s.netIncome != null ? '$' + (s.netIncome / 1e9).toFixed(1) + 'B' : '—'} | Margen neto ${s.netMarginPct != null ? s.netMarginPct.toFixed(1) + '%' : '—'} | Deuda/equity ${s.debtToEquityPct != null ? s.debtToEquityPct.toFixed(0) + '%' : '—'}`
      );
    }
    lines.push('');

    if (n.bull.length > 0) {
      lines.push('**Caso alcista:**');
      for (const b of n.bull) lines.push(`- ✅ ${b}`);
      lines.push('');
    }
    if (n.bear.length > 0) {
      lines.push('**Caso bajista / riesgos:**');
      for (const b of n.bear) lines.push(`- ⚠️ ${b}`);
      lines.push('');
    }
    if (n.sellTriggers.length > 0) {
      lines.push('**Qué vigilar (gatillos de salida):**');
      for (const t of n.sellTriggers) lines.push(`- 🚨 ${t}`);
      lines.push('');
    }
    if (n.bull.length === 0 && n.bear.length === 0) {
      lines.push('_Sin señales claras en ningún sentido con los datos disponibles hoy._');
      lines.push('');
    }
  }

  lines.push('---');
  lines.push(
    `_Generado automáticamente el ${new Date().toISOString()}. Reglas de síntesis en lib/researchNote.js — totalmente auditables, no son una "opinión de IA". No es asesoría financiera real._`
  );

  return lines.join('\n');
}

module.exports = {
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
};
