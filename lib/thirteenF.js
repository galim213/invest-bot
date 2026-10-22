'use strict';

const fs = require('fs');
const path = require('path');

const CONTACT = 'invest-bot galiazzo.nicoras@gmail.com';
const SUBMISSIONS_URL = 'https://data.sec.gov/submissions/CIK';
const ARCHIVES_URL = 'https://www.sec.gov/Archives/edgar/data/';

/**
 * Form 13F: lo que tiene que declarar trimestralmente cualquier fondo con
 * más de $100M bajo gestión — "qué compró Buffett/Burry el trimestre
 * pasado". Gratis, sin API key, mismo User-Agent que lib/secEdgar.js.
 *
 * Limitaciones reales (no se pueden evitar con datos gratis):
 * - **Retraso de hasta 45 días**: el fondo tiene 45 días después del cierre
 *   del trimestre para declarar. Nunca es "en vivo".
 * - **No reporta shorts**: 13F solo exige declarar posiciones LARGAS en
 *   acciones (y algunas opciones). Si un fondo está corto una acción, eso
 *   NO aparece acá — por eso los shorts famosos de Michael Burry en 2008
 *   nunca salieron en un 13F. Lo que sí puede aparecer son PUTS (opciones
 *   de venta) sobre una acción — una apuesta bajista real, pero distinta
 *   de una posición corta.
 * - **Sin ticker**: el 13F da el nombre del emisor y el CUSIP (no el
 *   ticker) — no hay mapeo CUSIP→ticker gratuito y confiable. Se intenta
 *   resolver el ticker cruzando el nombre normalizado contra los universos
 *   que ya tenemos (S&P 500/400/600 + internacional) — funciona para la
 *   mayoría de las posiciones grandes y conocidas, no para todas.
 */
const TRACKED_FUNDS = [
  { cik: '0001067983', name: 'Berkshire Hathaway (Warren Buffett)' },
  { cik: '0001649339', name: 'Scion Asset Management (Michael Burry)' },
];

function pad10(cik) {
  return String(cik).replace(/\D/g, '').padStart(10, '0');
}

async function fetchJson(url) {
  const res = await fetch(url, { headers: { 'User-Agent': CONTACT } });
  if (!res.ok) throw new Error(`${url} respondió ${res.status}`);
  return res.json();
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': CONTACT } });
  if (!res.ok) throw new Error(`${url} respondió ${res.status}`);
  return res.text();
}

/** Busca el 13F-HR más reciente de un fondo y devuelve dónde está su information table. */
async function findLatest13F(cik) {
  const padded = pad10(cik);
  const submissions = await fetchJson(`${SUBMISSIONS_URL}${padded}.json`);
  const recent = submissions.filings.recent;
  const idx = recent.form.findIndex((f) => f === '13F-HR' || f === '13F-HR/A');
  if (idx === -1) return null;

  const accessionNoDashes = recent.accessionNumber[idx].replace(/-/g, '');
  const dirUrl = `${ARCHIVES_URL}${Number(padded)}/${accessionNoDashes}/`;
  const index = await fetchJson(`${dirUrl}index.json`);
  const files = index.directory.item.map((i) => i.name);

  // La information table es el .xml que NO es el primary_doc (la carátula).
  const infoTableFile = files.find((f) => f.endsWith('.xml') && f !== recent.primaryDocument[idx] && !/index/i.test(f));
  if (!infoTableFile) return null;

  return {
    entityName: submissions.name,
    filingDate: recent.filingDate[idx],
    periodOfReport: recent.reportDate ? recent.reportDate[idx] : null,
    infoTableUrl: `${dirUrl}${infoTableFile}`,
  };
}

/**
 * Parsea la information table (XML) a mano con regex — el schema de la SEC
 * es estable y predecible, no justifica traer una librería de XML para esto.
 */
function parseInfoTable(xmlText) {
  const blocks = xmlText.match(/<infoTable>[\s\S]*?<\/infoTable>/g) || [];
  const field = (block, tag) => {
    const m = block.match(new RegExp(`<${tag}>([^<]*)<\\/${tag}>`));
    return m ? m[1].trim() : null;
  };

  return blocks.map((block) => {
    const value = field(block, 'value');
    const shares = field(block, 'sshPrnamt');
    return {
      issuer: field(block, 'nameOfIssuer'),
      titleOfClass: field(block, 'titleOfClass'),
      cusip: field(block, 'cusip'),
      // La SEC reporta este campo en dólares completos desde el 3 de enero
      // de 2023 (antes era en miles) — verificado en vivo cruzando
      // value/shares contra precios reales de acciones conocidas.
      valueUsd: value != null ? Number(value) : null,
      shares: shares != null ? Number(shares) : null,
      putCall: field(block, 'putCall'), // null = tenencia normal; "Put"/"Call" = opción
    };
  });
}

/** Quita sufijos corporativos y puntuación para poder cruzar nombres contra nuestros universos. */
function normalizeCompanyName(name) {
  if (!name) return '';
  return name
    .toUpperCase()
    .replace(/[.,]/g, '')
    .replace(/\b(INC|CORP|CORPORATION|CO|COMPANY|LTD|LIMITED|PLC|LLC|HOLDINGS?|GROUP|TRUST|SA|AG|NV|CL\s?A|CL\s?B|CLASS\s?A|CLASS\s?B)\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Combina los universos que ya tenemos (nombre real, no solo ticker) en un índice nombre→ticker. */
function buildNameToTickerIndex() {
  const index = new Map();
  const sources = ['sp500.json', 'sp400.json', 'sp600.json', 'global-watchlist.json', 'qualityCompanies.json'];
  for (const file of sources) {
    const filePath = path.join(__dirname, '..', file);
    if (!fs.existsSync(filePath)) continue;
    const list = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    for (const entry of list) {
      if (!entry.name || !entry.ticker) continue;
      const key = normalizeCompanyName(entry.name);
      if (key && !index.has(key)) index.set(key, entry.ticker);
    }
  }
  return index;
}

function matchTicker(issuerName, nameIndex) {
  const normalized = normalizeCompanyName(issuerName);
  if (!normalized) return null;
  if (nameIndex.has(normalized)) return nameIndex.get(normalized);

  // Segundo intento: alguno de los dos nombres empieza con el otro (ej. "ALPHABET"
  // vs "ALPHABET INC CL A" ya normalizado a "ALPHABET" en ambos casos no haría
  // falta, pero nombres parciales como "ALLY FINL" vs "ALLY FINANCIAL" sí).
  const issuerFirstWord = normalized.split(' ')[0];
  for (const [key, ticker] of nameIndex.entries()) {
    if (key.startsWith(issuerFirstWord) && issuerFirstWord.length >= 4) return ticker;
  }
  return null;
}

/** Trae y arma el reporte de un fondo: sus holdings, con ticker resuelto cuando se pudo. */
async function buildFundReport(fund, nameIndex) {
  const latest = await findLatest13F(fund.cik);
  if (!latest) return { fund, error: 'sin 13F-HR encontrado' };

  const xmlText = await fetchText(latest.infoTableUrl);
  const rawHoldings = parseInfoTable(xmlText);

  // Varios "otherManager" pueden reportar la misma posición por separado
  // (gestión compartida) — se suma por emisor+clase+put/call para no
  // mostrar la misma empresa repetida 5 veces con valores parciales.
  const byKey = new Map();
  for (const h of rawHoldings) {
    const key = `${h.cusip}|${h.putCall || 'STOCK'}`;
    if (!byKey.has(key)) {
      byKey.set(key, { ...h, ticker: matchTicker(h.issuer, nameIndex) });
    } else {
      const existing = byKey.get(key);
      existing.valueUsd = (existing.valueUsd || 0) + (h.valueUsd || 0);
      existing.shares = (existing.shares || 0) + (h.shares || 0);
    }
  }

  const holdings = [...byKey.values()].sort((a, b) => (b.valueUsd || 0) - (a.valueUsd || 0));

  return {
    fund,
    filingDate: latest.filingDate,
    entityName: latest.entityName,
    holdingsCount: holdings.length,
    matchedCount: holdings.filter((h) => h.ticker).length,
    holdings,
  };
}

async function buildThirteenFReport() {
  const nameIndex = buildNameToTickerIndex();
  const reports = [];
  const errors = [];
  for (const fund of TRACKED_FUNDS) {
    try {
      const report = await buildFundReport(fund, nameIndex);
      if (report.error) errors.push({ fund: fund.name, message: report.error });
      else reports.push(report);
    } catch (err) {
      errors.push({ fund: fund.name, message: err.message });
    }
  }
  return { reports, errors };
}

function buildThirteenFMarkdown({ date, reports }) {
  const lines = [];
  lines.push(`# 13F — qué compran los fondos grandes — ${date}`);
  lines.push('');
  lines.push(
    '> 🏦 **Datos oficiales de la SEC, con retraso de hasta 45 días (es trimestral, nunca en vivo) y sin tickers directos (se intenta resolver cruzando nombres — no siempre se logra).** El 13F NO reporta posiciones cortas — solo tenencias largas y algunas opciones (put/call). No es asesoría financiera real, y copiar lo que hizo otro hace más de un mes no es una estrategia.'
  );
  lines.push('');

  for (const r of reports) {
    lines.push(`## ${r.fund.name}`);
    lines.push('');
    lines.push(`_Declarado el ${r.filingDate} · ${r.holdingsCount} posiciones · ${r.matchedCount}/${r.holdingsCount} con ticker resuelto._`);
    lines.push('');
    lines.push('| Ticker | Empresa | Tipo | Valor declarado |');
    lines.push('|---|---|---|---|');
    for (const h of r.holdings.slice(0, 30)) {
      const tipo = h.putCall ? `Opción ${h.putCall} (apuesta ${h.putCall === 'Put' ? 'bajista' : 'alcista'})` : 'Tenencia larga';
      // La SEC reporta "value" en dólares completos desde 2023 (antes era en
      // miles) — confirmado cruzando value/shares contra precios reales
      // (ej. AAPL a $289.36/acción constante en las 12 entradas de Berkshire).
      const valor = h.valueUsd != null ? `$${(h.valueUsd / 1e6).toFixed(1)}M` : '—';
      lines.push(`| ${h.ticker || '—'} | ${h.issuer} | ${tipo} | ${valor} |`);
    }
    lines.push('');
  }

  lines.push('---');
  lines.push(`_Generado automáticamente el ${new Date().toISOString()}. Fuente: SEC EDGAR (Form 13F-HR). El valor declarado está en dólares completos (convención de la SEC desde 2023) — para opciones (put/call), es el valor de mercado de las acciones subyacentes que cubre la opción, no la prima pagada._`);

  return lines.join('\n');
}

module.exports = {
  TRACKED_FUNDS,
  normalizeCompanyName,
  buildNameToTickerIndex,
  matchTicker,
  parseInfoTable,
  findLatest13F,
  buildFundReport,
  buildThirteenFReport,
  buildThirteenFMarkdown,
};
