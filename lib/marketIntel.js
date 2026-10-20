'use strict';

const fs = require('fs');
const path = require('path');

const { SECTOR_ETFS } = require('../config');
const marketData = require('./marketData');
const { fetchFundamentalsAll } = require('./fundamentals');

const QUALITY_COMPANIES_PATH = path.join(__dirname, '..', 'qualityCompanies.json');

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

module.exports = { buildSectorRotation, buildQualityCompaniesReport, buildMarketIntelMarkdown };
