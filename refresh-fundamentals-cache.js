#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');

const { WATCHLIST } = require('./config');
const { fetchFundamentalsAll } = require('./lib/fundamentals');

const CACHE_PATH = path.join(__dirname, 'fundamentals-cache.json');

/**
 * Refresca el cache de fundamentales para TODO el universo (503 tickers).
 * Corre esto manualmente (localmente) cada tanto — no desde la rutina
 * automática en la nube, porque ese endpoint no oficial de Yahoo está
 * bloqueado desde ahí (confirmado — ver README). El motor de trading lee
 * este archivo, no pega la red para esto en producción.
 *
 * Los fundamentales cambian lento (trimestral), así que no hace falta
 * refrescar todos los días — una vez por semana alcanza de sobra.
 */
async function main() {
  const tickers = WATCHLIST.map((w) => w.ticker);
  console.log(`[refresh-fundamentals] Descargando fundamentales para ${tickers.length} tickers (esto tarda varios minutos, endpoint no oficial y frágil)...`);

  const { data, errors } = await fetchFundamentalsAll(tickers, 5);

  console.log(`[refresh-fundamentals] Obtenidos: ${data.size}/${tickers.length}. Fallos: ${errors.length}.`);
  if (errors.length > 0) {
    console.log(`[refresh-fundamentals] Ejemplo de fallo: ${errors[0].ticker}: ${errors[0].message}`);
  }

  const cache = {
    generatedAt: new Date().toISOString(),
    count: data.size,
    tickers: Object.fromEntries(data.entries()),
  };

  fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
  console.log(`[refresh-fundamentals] Cache guardado en ${CACHE_PATH}`);
}

if (require.main === module) {
  main().catch((err) => {
    console.error('[refresh-fundamentals] ERROR fatal:', err);
    process.exit(1);
  });
}

module.exports = { main };
