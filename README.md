# invest-bot — paper trading simulado (educativo)

Simula un corredor de bolsa operando con **$1000 USD ficticios** sobre el **S&P 500 completo**
(~503 tickers, universo objetivo — no una lista elegida a mano). No es asesoría financiera
real, no ejecuta órdenes en ningún broker de verdad, y las señales pueden estar equivocadas.

**Antes de pensar en plata real, leé [`GRADUATION_CRITERIA.md`](./GRADUATION_CRITERIA.md).**
Estado actual: **no cumple los criterios** — la validación fuera de muestra
(`reports/validation-multi-regime.json`) muestra que la estrategia pierde contra el
benchmark en 3 de 4 regímenes históricos no usados para ajustarla.

Este repo es operado por una rutina automática en la nube (al cierre de Wall Street, días
hábiles) que:
1. Corre el motor cuantitativo (`npm run invest:daily`) — señales técnicas multi-factor
   (SMA20/50, SMA200, momentum, RSI sobre precio ajustado por dividendos) sobre las 503
   acciones del S&P 500 + panel de riesgo macro (VIX, curva de rendimientos, spread de
   crédito proxy, índice dólar) + ejecución de trades simulados con gestión de riesgo
   (stop-loss, toma de ganancias, límites de posición, costo de transacción simulado).
2. Busca noticias financieras reales del día para las señales destacadas y el panorama
   macro, y agrega una sección de análisis cualitativo al reporte.
3. Hace commit y push del reporte (`reports/<fecha>.md` + `.json`) y del estado del
   portfolio (`data/portfolio.json`) para que quede un historial auditable día por día.

## Estructura

- `config.js` — universo (S&P 500 desde `sp500.json`), parámetros de la estrategia
- `sp500.json` — constituyentes del S&P 500 (ticker, nombre, sector) — snapshot actual, no point-in-time histórico (ver limitaciones)
- `lib/marketData.js` — datos de mercado (Yahoo Finance, sin API key), con `adjClose` para indicadores y concurrencia limitada
- `lib/indicators.js` — SMA, RSI, momentum, volatilidad
- `lib/metrics.js` — Sharpe, Sortino, beta, max drawdown
- `lib/strategy.js` — scoring multi-factor por ticker (-100 a 100) → BUY/SELL/HOLD
- `lib/decide.js` — motor de decisión (señales + gestión de riesgo + estado del portfolio)
- `lib/portfolio.js` — estado persistente (cash, posiciones, historial, costo de transacción)
- `lib/macroRisk.js` — panel de riesgo macro (VIX, curva de rendimientos, spread de crédito, DXY)
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
npm run invest:daily              # ciclo diario completo (datos + señales + trades + reporte)
npm run invest:backtest -- 120    # backtest sobre los últimos ~120 días hábiles
npm run invest:validate           # validación fuera de muestra, 2018 a hoy, por régimen de mercado
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
- Universo con sesgo de reconstitución de índice (ver arriba) — los resultados de
  `validate.js` en períodos viejos son optimistas por esta razón, no solo por la estrategia.
- La estrategia es un conjunto de reglas técnicas simples. La validación fuera de muestra
  (`validation-multi-regime.json`) muestra que **hoy no tiene edge robusto** fuera del
  período usado para ajustarla — ver `GRADUATION_CRITERIA.md`.
- El panel de riesgo macro es contexto histórico, **no una predicción de crisis**.
