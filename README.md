# invest-bot — paper trading simulado (educativo)

Simula un corredor de bolsa operando con **$1000 USD ficticios** sobre el **S&P 500 completo**
(~503 tickers, universo objetivo — no una lista elegida a mano). No es asesoría financiera
real, no ejecuta órdenes en ningún broker de verdad, y las señales pueden estar equivocadas.

**Antes de pensar en plata real, leé [`GRADUATION_CRITERIA.md`](./GRADUATION_CRITERIA.md).**
Estado actual: **no cumple los criterios** — la validación fuera de muestra con universo
point-in-time real (`reports/validation-multi-regime.json`) le gana al benchmark en solo
2 de 5 regímenes históricos probados.

Este repo es operado por una rutina automática en la nube (al cierre de Wall Street, días
hábiles) que:
1. Corre el motor cuantitativo (`npm run invest:daily`) — señales técnicas multi-factor
   (SMA20/50, SMA200, momentum, RSI sobre precio ajustado por dividendos) sobre las 503
   acciones del S&P 500 + panel de riesgo macro (VIX, curva de rendimientos, spread de
   crédito proxy, índice dólar) + ejecución de trades simulados con gestión de riesgo
   (stop-loss, toma de ganancias, límites de posición, costo de transacción simulado).
2. Busca noticias financieras reales del día para las señales destacadas y el panorama
   macro, y agrega una sección de análisis cualitativo al reporte.
3. Genera el informe de mercado educativo (`reports/market-intel-<fecha>.md`) — rotación
   sectorial (13 ETFs, incluyendo energía, semiconductores y defensa) + fundamentales en
   vivo de 34 empresas de calidad curadas a mano, con el porqué de cada una.
4. Hace commit y push de todo (`reports/<fecha>.md`, `market-intel-<fecha>.md` + `.json`) y
   del estado del portfolio (`data/portfolio.json`) para que quede un historial auditable
   día por día.

## Estructura

- `config.js` — universo (S&P 500 desde `sp500.json`), parámetros de la estrategia
- `sp500.json` — constituyentes actuales del S&P 500 (ticker, nombre, sector) — universo operable en vivo
- `sp500_historical_components.csv` — membresía real del S&P 500 día a día desde 1996, de [hanshof/sp500_constituents](https://github.com/hanshof/sp500_constituents) (MIT). Cobertura hasta 2025-08-23; para fechas posteriores se usa `sp500.json` como fallback. Usado por `lib/pointInTime.js` para que `validate.js`/`backtest.js` solo puedan "comprar" un ticker en fechas donde realmente integraba el índice.
- `lib/pointInTime.js` — carga y consulta la membresía point-in-time
- `lib/marketData.js` — datos de mercado (Yahoo Finance, sin API key), con `adjClose` para indicadores y concurrencia limitada
- `lib/indicators.js` — SMA, RSI, momentum, volatilidad
- `lib/metrics.js` — Sharpe, Sortino, beta, max drawdown
- `lib/strategy.js` — scoring multi-factor por ticker (-100 a 100) → BUY/SELL/HOLD
- `lib/decide.js` — motor de decisión (señales + gestión de riesgo + estado del portfolio)
- `lib/portfolio.js` — estado persistente (cash, posiciones, historial, costo de transacción)
- `lib/macroRisk.js` — panel de riesgo macro (VIX, curva de rendimientos, spread de crédito, DXY)
- `lib/fundamentals.js` — fundamentales en vivo (P/E, márgenes, ROE, dividendos) vía el endpoint no oficial de Yahoo Finance (cookie+crumb, igual que `yfinance`) — requiere `fc.yahoo.com` además de `query1.finance.yahoo.com` en el allowlist de red (ver Limitaciones)
- `qualityCompanies.json` — base curada de 34 empresas "de calidad" (energía, semiconductores, defensa, y otros sectores rentables) con análisis cualitativo del moat escrito a mano
- `lib/marketIntel.js` — arma el informe de mercado (rotación sectorial + fundamentales + educativo)
- `fundamentals-cache.json` — fundamentales (P/E, ROE, márgenes, deuda, crecimiento) de los 503 tickers del universo, refrescado manualmente con `node refresh-fundamentals-cache.js` (no corre solo, el endpoint no funciona en la nube)
- `lib/fundamentalScore.js` — convierte el cache en un "score de calidad" por percentil y un tilt aditivo al score técnico (`STRATEGY.fundamentalTiltMax`, hasta ±15) — **apagado en producción** (`USE_FUNDAMENTAL_TILT_IN_PRODUCTION = false` en `config.js`), ver GRADUATION_CRITERIA.md para el porqué
- `lib/loadFundamentalsCache.js` — lee el cache del disco (sin red) y arma los quality scores
- `lib/report.js` — genera el reporte diario (markdown + JSON), recorta a señales destacadas
- `lib/simulate.js` — motor de simulación compartido (día a día, sin mirar al futuro), usado por `backtest.js` y `validate.js`
- `run-daily.js` — orquestador del ciclo diario (producción)
- `backtest.js` — backtest sobre los últimos N días (`npm run invest:backtest -- <días>`)
- `validate.js` — **validación fuera de muestra multi-régimen** (`npm run invest:validate`) — corre la estrategia (sin tocar parámetros) sobre 2018, el crash COVID 2020, el bajista 2022, 2023 y el período reciente
- `GRADUATION_CRITERIA.md` — criterios objetivos para considerar plata real algún día
- `data/portfolio.json` — estado actual del portfolio simulado (se crea solo con $1000 la primera vez)
- `reports/` — un `.md`+`.json` por día + `latest.md`/`latest.json` + `validation-multi-regime.json`

## Correrlo manualmente

```
npm run invest:daily                      # ciclo diario completo (datos + señales + trades + reporte)
npm run invest:backtest -- 120            # backtest sobre los últimos ~120 días hábiles
npm run invest:backtest -- 60 --fundamentals  # idem + tilt fundamental (experimental, ver GRADUATION_CRITERIA.md)
npm run invest:validate                   # validación fuera de muestra, 2018 a hoy, por régimen de mercado
node refresh-fundamentals-cache.js        # refresca fundamentals-cache.json (manual, ~30s para 503 tickers)
```

## Metodología (Fase 1 + Fase 2 del roadmap de validación)

- **Universo objetivo**: S&P 500 completo, no 10 acciones elegidas a mano — reduce (no
  elimina) el sesgo de selección. Sigue habiendo sesgo de reconstitución de índice (usar la
  lista *actual* para testear años viejos ya excluye a las empresas que quebraron/se
  achicaron) — arreglarlo del todo requiere datos de membresía histórica punto-en-el-tiempo,
  que no son gratis.
- **Precio ajustado**: indicadores técnicos sobre `adjClose` (ajustado por dividendos), precio
  de trading real sobre `close`.
- **Costo de transacción**: 5 bps simulados por operación, no es un backtest sin fricción.
- **Validación fuera de muestra**: `validate.js` corre la estrategia (parámetros fijos, sin
  reajustar) sobre 4 regímenes históricos que nunca se usaron para tunear, más el período
  reciente de referencia. Cualquier cambio de parámetros se re-testea ahí antes de aceptarlo
  — y si solo mejora el período reciente, se descarta (señal de overfitting). Así se descartó
  un filtro de régimen de mercado probado la noche del 2026-10-20: mejoraba el período
  reciente pero empeoraba 3 de los 4 regímenes genuinamente fuera de muestra.

## Limitaciones

- Datos públicos (Yahoo Finance), pueden tener retraso de minutos.
- **`lib/fundamentals.js` NO funciona en la rutina automática de la nube** — confirmado:
  aunque `fc.yahoo.com` esté en el allowlist de red del entorno, la conexión a ese dominio
  específico no responde desde el sandbox en la nube (probablemente bloqueo por rango de IP
  de datacenter, algo común en endpoints no oficiales/anti-scraping, no arreglable con
  allowlist de dominio). Localmente funciona bien. La sección de "empresas de calidad" del
  informe de mercado sale sin fundamentales en las corridas automáticas por este motivo — la
  rotación sectorial (que no depende de este endpoint) sí funciona siempre. Para refrescar
  los fundamentales hay que correrlo manualmente (`npm run invest:daily` desde una máquina
  normal) y pushear — mismo patrón que el dashboard.
- **Sesgo de supervivencia reducido, no eliminado**: con `sp500_historical_components.csv`
  ya no se "compran" tickers antes de que integraran el índice de verdad. Pero Yahoo
  Finance no tiene precios confiables de empresas que salieron del índice (quebraron, las
  compraron) — confirmado probando tickers reales delistados (Lehman Brothers, Bear
  Stearns, Monsanto: sin datos; otros como "SHLD" devuelven un ticker reciclado por una
  empresa distinta, no la original). No hay forma gratis de arreglar esto del todo.
- La estrategia es un conjunto de reglas técnicas simples. La validación fuera de muestra
  (`validation-multi-regime.json`) muestra que **hoy no tiene edge robusto** fuera del
  período usado para ajustarla — ver `GRADUATION_CRITERIA.md`.
- El panel de riesgo macro es contexto histórico, **no una predicción de crisis**.

## Investigación: fuentes de datos y proyectos similares (2026-10-20)

Antes de seguir sumando cosas, investigamos qué hace la comunidad de trading algorítmico
retail/open-source con este mismo problema. Resumen para no repetir la investigación:

**Para el sesgo de supervivencia** (el hallazgo más útil de la noche):
- [hanshof/sp500_constituents](https://github.com/hanshof/sp500_constituents) (MIT) — ya integrado, ver arriba.
- [fja05680/sp500](https://github.com/fja05680/sp500) — alternativa similar, no evaluada en detalle.
- Ninguna fuente gratis resuelve el problema de precios de empresas delistadas — eso requiere datos pagos (EODHD, Norgate Data, Refinitiv) y no vale la pena el costo para un proyecto educativo.

**Fundamentales gratis, para cuando se quiera sumar más señales (Fase 3)**:
- **SEC EDGAR** (`data.sec.gov`) — la más generosa: gratis, sin API key, solo requiere un header `User-Agent` descriptivo con contacto (sin eso devuelve 403 y puede banear la IP), límite ~10 req/seg. Datos XBRL crudos (hay que normalizarlos uno mismo, distintas empresas usan tags distintos). Mapeo ticker→CIK en `sec.gov/files/company_tickers.json`.
- **Finnhub** — tier gratis con 60 llamadas/minuto, incluye financials básicos.
- **Financial Modeling Prep** — ~250 llamadas/día gratis, datos ya normalizados.
- **Alpha Vantage** — el más limitado (25/día), probablemente no alcanza para 503 tickers.
- Ninguna de estas se integró todavía — todas requieren que el usuario cree una cuenta/API key, que es una decisión suya, no algo que se pueda automatizar.

**Por qué la estrategia de cruce de medias falla en ciertos regímenes** (contexto para no reinventar la rueda):
- Es un patrón conocido: un crossover confirma la tendencia después de que ya empezó, así que llega tarde a los giros y genera pérdidas repetidas en mercados picados ("whipsaw"). La ruptura del SMA200 en Q4 2018 es citada como ejemplo clásico de whipsaw (ninguna de esas rupturas produjo una recuperación rápida).
- El paper académico de referencia (Hurst, Ooi, Pedersen 2017, AQR — "A Century of Evidence on Trend Following Investing") sí encuentra que el trend-following funciona sostenido en 100+ años de datos — pero diversificando entre clases de activos no correlacionadas (acciones, bonos, monedas, commodities) y permitiendo posiciones cortas, no como estrategia long-only sobre un solo mercado de acciones como la nuestra. No es una receta directa para lo que tenemos acá.

**Proyectos open-source con filosofía similar** (validar antes de confiar, no vender humo):
- [gr8monk3ys/trading-bot](https://github.com/gr8monk3ys/trading-bot) — bot sobre Alpaca, con gestión de riesgo (VaR, correlación, circuit breaker de pérdida diaria) y, igual que nosotros, el README dice explícitamente "No proven edge — not for real capital".
- [zachisit/july-backtester](https://github.com/zachisit) — backtester en Python sobre Yahoo Finance con Walk-Forward Analysis + Monte Carlo/block-bootstrap + validación de calidad de datos.
- [purgedcv](https://github.com/search?q=purgedcv) — librería de validación cruzada "purgada" (evita fugas de información en series de tiempo), técnica de López de Prado ("Advances in Financial Machine Learning").
- Comunidad de **freqtrade** (bot de trading, cripto pero misma lógica): corren el optimizador con distintas semillas aleatorias y testean los resultados contra un período posterior como cuasi-validación cruzada; regla de pulgar: si la "eficiencia walk-forward" (desempeño out-of-sample / in-sample) está por debajo de ~50%, hay overfitting.

No se encontraron atajos mágicos — la conclusión de la comunidad es consistente con lo que
ya veníamos aplicando acá: walk-forward, out-of-sample real, desconfiar de resultados que
solo se ven bien en el período que ya conocés.
