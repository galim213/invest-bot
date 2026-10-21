#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const marketData = require('./lib/marketData');
const { BENCHMARK_TICKER } = require('./config');
const { loadHistory, computeTrackRecord } = require('./lib/trackRecord');

// Horizonte mínimo (días) para considerar que un veredicto ya tuvo tiempo de
// "demostrar algo" — antes de eso, cualquier retorno es ruido de corto plazo.
const MIN_DAYS = Number(process.argv[2]) || 30;

async function main() {
  const history = loadHistory();

  if (history.length === 0) {
    console.log(
      '[track-record] Todavía no hay historial (data/research-notes-history.json no existe o está vacío). ' +
        'Se va llenando solo cada vez que run-daily.js genera research notes — hace falta esperar a que se acumulen días.'
    );
    return;
  }

  const tickers = [...new Set(history.map((h) => h.ticker))];
  console.log(`[track-record] Historial: ${history.length} entradas, ${tickers.length} tickers únicos.`);
  console.log(`[track-record] Buscando precios actuales de ${tickers.length} tickers + benchmark (${BENCHMARK_TICKER})...`);

  const [{ data, errors }, benchmarkData] = await Promise.all([
    marketData.fetchAll(tickers, { range: '5d' }),
    marketData.fetchDailyCandles(BENCHMARK_TICKER, { range: '5d' }),
  ]);
  for (const e of errors) console.warn(`[track-record] WARN: ${e.ticker}: ${e.message}`);

  const pricesByTicker = new Map();
  for (const [ticker, d] of data.entries()) pricesByTicker.set(ticker, d.candles.at(-1)?.close ?? null);
  const benchmarkPrice = benchmarkData?.candles.at(-1)?.close ?? null;

  const result = computeTrackRecord(history, pricesByTicker, { minDaysElapsed: MIN_DAYS });

  console.log('');
  console.log(`=== Track record de research-notes (horizonte: ${MIN_DAYS}+ días) ===`);
  console.log('');

  if (result.totalEligible === 0) {
    const oldestDate = history.reduce((min, h) => (h.date < min ? h.date : min), history[0].date);
    const daysSinceOldest = Math.floor((Date.now() - new Date(oldestDate)) / 86400000);
    console.log(
      `Ninguna entrada tiene todavía ${MIN_DAYS}+ días de antigüedad (la más vieja es del ${oldestDate}, hace ${daysSinceOldest} día(s)). ` +
        `Volvé a correr esto más adelante — esta validación necesita tiempo, no se puede apurar.`
    );
    return;
  }

  console.log(`Entradas evaluables (≥${MIN_DAYS} días): ${result.totalEligible} de ${result.totalInHistory} totales en el historial.`);
  console.log('');
  console.log('| Veredicto | N | Retorno promedio hacia adelante | Win rate |');
  console.log('|---|---|---|---|');
  for (const s of result.summary) {
    console.log(`| ${s.verdict} | ${s.count} | ${s.avgForwardReturnPct >= 0 ? '+' : ''}${s.avgForwardReturnPct.toFixed(2)}% | ${s.winRatePct.toFixed(1)}% |`);
  }

  const positivo = result.summary.find((s) => s.verdict === 'POSITIVO');
  const cautela = result.summary.find((s) => s.verdict === 'CAUTELA');
  if (positivo && cautela) {
    const diff = positivo.avgForwardReturnPct - cautela.avgForwardReturnPct;
    console.log('');
    console.log(
      diff > 0
        ? `POSITIVO le ganó a CAUTELA por ${diff.toFixed(2)} pts en promedio — el veredicto va en la dirección correcta (con esta muestra chica, todavía no es prueba de nada robusto).`
        : `POSITIVO NO le ganó a CAUTELA (diferencia de ${diff.toFixed(2)} pts) — con esta muestra todavía chica, no hay que sacar conclusiones fuertes, pero vale la pena seguir mirando.`
    );
  }

  const outPath = path.join(__dirname, 'reports', 'track-record.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(
    outPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        minDaysElapsed: MIN_DAYS,
        benchmarkPriceToday: benchmarkPrice,
        ...result,
      },
      null,
      2
    )
  );
  console.log(`\n[track-record] Detalle completo guardado en ${outPath}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error('[track-record] ERROR fatal:', err);
    process.exit(1);
  });
}

module.exports = { main };
