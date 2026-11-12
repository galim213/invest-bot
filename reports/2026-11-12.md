# Reporte diario de inversión (simulado) — 2026-11-12

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1021.85**
- P&L acumulado: $21.85 (+2.18%)
- Core (70%, largo plazo): $727.98 (+4.00%) | Satellite (30%, técnico): $293.86 (-2.05%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 18.57 — CALMA (Dentro del rango histórico normal.) Variación 10d: -0.9 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.98 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: 0.27 pts — normal.
- **Índice dólar (DXY)**: 103.18 (variación 10d: +1.30)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $284.68 | $76.76 | 10.5% | $6.76 (+9.65%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $168.27 | $74.46 | 10.2% | $4.46 (+6.37%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $97.81 | $73.84 | 10.1% | $3.84 (+5.48%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $170.74 | $67.41 | 9.3% | $-2.59 (-3.70%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $217.90 | $67.86 | 9.3% | $-2.14 (-3.06%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $343.05 | $71.53 | 9.8% | $1.53 (+2.18%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $521.62 | $68.54 | 9.4% | $-1.46 (-2.09%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $422.16 | $72.61 | 10.0% | $2.61 (+3.74%) | $0.7800/acción (2026-11-10) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $606.78 | $77.31 | 10.6% | $7.31 (+10.45%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $311.85 | $77.67 | 10.7% | $8.02 (+11.51%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $302.60 | $68.47 | 23.3% | $-2.90 (-4.07%) |
| ISRG | Health Care | 0.221 | $438.48 | $441.38 | $97.68 | 33.2% | $0.64 (+0.66%) |
| TMO | Health Care | 0.114 | $690.08 | $703.00 | $80.46 | 27.4% | $1.48 (+1.87%) |
| CRL | Health Care | 0.062 | $339.66 | $340.95 | $21.18 | 7.2% | $0.08 (+0.38%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $424.93 | $11.32 | 3.9% | $0.75 (+7.09%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.66**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.16** → N efectivo ajustado por correlación: **2.58**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| STZ | Consumer Staples | 74 | BUY | $144.98 | Tendencia de corto plazo alcista: SMA20 (137.35) por encima de SMA50 (126.53). |
| TYL | Information Technology | 72 | BUY | $423.45 | Tendencia de corto plazo alcista: SMA20 (396.09) por encima de SMA50 (361.58). |
| ADP | Industrials | 71 | BUY | $307.72 | Tendencia de corto plazo alcista: SMA20 (298.26) por encima de SMA50 (280.67). |
| CBOE | Financials | 70 | BUY | $372.42 | Tendencia de corto plazo alcista: SMA20 (337.89) por encima de SMA50 (303.57). |
| VRSK | Industrials | 70 | BUY | $206.71 | Tendencia de corto plazo alcista: SMA20 (197.65) por encima de SMA50 (183.84). |
| ADSK | Information Technology | 69 | BUY | $259.32 | Tendencia de corto plazo alcista: SMA20 (252.87) por encima de SMA50 (233.66). |
| GDDY | Information Technology | 69 | BUY | $112.45 | Tendencia de corto plazo alcista: SMA20 (111.83) por encima de SMA50 (104.35). |
| BF-B | Consumer Staples | 68 | BUY | $29.91 | Tendencia de corto plazo alcista: SMA20 (29.37) por encima de SMA50 (27.64). |
| CTSH | Information Technology | 68 | BUY | $64.30 | Tendencia de corto plazo alcista: SMA20 (66.38) por encima de SMA50 (62.50). |
| JKHY | Financials | 68 | BUY | $176.21 | Tendencia de corto plazo alcista: SMA20 (164.72) por encima de SMA50 (157.47). |
| BRO | Financials | 67 | BUY | $70.99 | Tendencia de corto plazo alcista: SMA20 (70.79) por encima de SMA50 (66.75). |
| DD | Industrials | 67 | BUY | $154.91 | Tendencia de corto plazo alcista: SMA20 (142.56) por encima de SMA50 (134.92). |
| ERIE | Financials | 67 | BUY | $271.37 | Tendencia de corto plazo alcista: SMA20 (260.58) por encima de SMA50 (243.53). |
| MCK | Health Care | 67 | BUY | $1075.97 | Tendencia de corto plazo alcista: SMA20 (1023.40) por encima de SMA50 (951.44). |
| COST | Consumer Staples | 66 | BUY | $1090.92 | Tendencia de corto plazo alcista: SMA20 (1025.45) por encima de SMA50 (962.36). |
| MAR | Consumer Discretionary | 54 | BUY | $424.93 | Tendencia de corto plazo alcista: SMA20 (406.84) por encima de SMA50 (373.07). |
| VEEV | Health Care | 54 | BUY | $302.60 | Tendencia de corto plazo alcista: SMA20 (311.94) por encima de SMA50 (291.09). |
| ISRG | Health Care | 47 | BUY | $441.38 | Tendencia de corto plazo alcista: SMA20 (446.36) por encima de SMA50 (416.15). |
| TMO | Health Care | 34 | HOLD | $703.00 | Tendencia de corto plazo alcista: SMA20 (695.44) por encima de SMA50 (668.99). |
| CRL | Health Care | 23 | HOLD | $340.95 | Tendencia de corto plazo alcista: SMA20 (341.06) por encima de SMA50 (310.17). |
| TER | Information Technology | -73 | SELL | $263.55 | Tendencia de corto plazo bajista: SMA20 (285.49) por debajo de SMA50 (344.38). |
| ETN | Industrials | -74 | SELL | $359.73 | Tendencia de corto plazo bajista: SMA20 (370.02) por debajo de SMA50 (401.06). |
| STX | Information Technology | -74 | SELL | $543.09 | Tendencia de corto plazo bajista: SMA20 (604.34) por debajo de SMA50 (745.78). |
| AKAM | Information Technology | -75 | SELL | $86.32 | Tendencia de corto plazo bajista: SMA20 (89.25) por debajo de SMA50 (99.74). |
| LITE | Information Technology | -75 | SELL | $625.67 | Tendencia de corto plazo bajista: SMA20 (734.70) por debajo de SMA50 (872.27). |
| JBL | Information Technology | -76 | SELL | $259.32 | Tendencia de corto plazo bajista: SMA20 (268.14) por debajo de SMA50 (290.30). |
| LRCX | Information Technology | -76 | SELL | $232.60 | Tendencia de corto plazo bajista: SMA20 (236.19) por debajo de SMA50 (278.89). |
| WDC | Information Technology | -76 | SELL | $309.66 | Tendencia de corto plazo bajista: SMA20 (338.15) por debajo de SMA50 (394.60). |
| CIEN | Information Technology | -77 | SELL | $295.07 | Tendencia de corto plazo bajista: SMA20 (310.35) por debajo de SMA50 (344.01). |
| BE | Industrials | -78 | SELL | $202.91 | Tendencia de corto plazo bajista: SMA20 (206.94) por debajo de SMA50 (244.94). |
| ORCL | Information Technology | -78 | SELL | $126.60 | Tendencia de corto plazo bajista: SMA20 (126.72) por debajo de SMA50 (136.96). |
| FIX | Industrials | -79 | SELL | $1135.32 | Tendencia de corto plazo bajista: SMA20 (1232.72) por debajo de SMA50 (1478.42). |
| AMAT | Information Technology | -80 | SELL | $380.70 | Tendencia de corto plazo bajista: SMA20 (384.85) por debajo de SMA50 (439.21). |
| FLEX | Information Technology | -81 | SELL | $78.15 | Tendencia de corto plazo bajista: SMA20 (81.77) por debajo de SMA50 (99.92). |
| VRT | Industrials | -82 | SELL | $209.31 | Tendencia de corto plazo bajista: SMA20 (209.18) por debajo de SMA50 (232.63). |

#### Detalle de razonamiento (señales destacadas)

**STZ** (score 74, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (137.35) por encima de SMA50 (126.53).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.1%.
  - RSI 59: zona neutral.
**TYL** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (396.09) por encima de SMA50 (361.58).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.2%.
  - RSI 64: zona neutral.
**ADP** (score 71, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (298.26) por encima de SMA50 (280.67).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.6%.
  - RSI 53: zona neutral.
**CBOE** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (337.89) por encima de SMA50 (303.57).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 18.5%.
  - RSI 67: zona neutral.
**VRSK** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (197.65) por encima de SMA50 (183.84).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.4%.
  - RSI 59: zona neutral.
**ADSK** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (252.87) por encima de SMA50 (233.66).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.3%.
  - RSI 56: zona neutral.
**GDDY** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (111.83) por encima de SMA50 (104.35).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.2%.
  - RSI 50: zona neutral.
**BF-B** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (29.37) por encima de SMA50 (27.64).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.7%.
  - RSI 53: zona neutral.
**CTSH** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (66.38) por encima de SMA50 (62.50).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.8%.
  - RSI 34: zona neutral.
**JKHY** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (164.72) por encima de SMA50 (157.47).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.4%.
  - RSI 65: zona neutral.
**BRO** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (70.79) por encima de SMA50 (66.75).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.9%.
  - RSI 46: zona neutral.
**DD** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (142.56) por encima de SMA50 (134.92).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.2%.
  - RSI 72: sobrecompra, riesgo de corrección.
**ERIE** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (260.58) por encima de SMA50 (243.53).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.2%.
  - RSI 62: zona neutral.
**MCK** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1023.40) por encima de SMA50 (951.44).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.7%.
  - RSI 69: zona neutral.
**COST** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1025.45) por encima de SMA50 (962.36).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.7%.
  - RSI 72: sobrecompra, riesgo de corrección.
**MAR** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (406.84) por encima de SMA50 (373.07).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.3%.
  - RSI 75: sobrecompra, riesgo de corrección.
**VEEV** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (311.94) por encima de SMA50 (291.09).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.5%.
  - RSI 31: zona neutral.
**ISRG** (score 47, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (446.36) por encima de SMA50 (416.15).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -1.6%.
  - RSI 46: zona neutral.
**TMO** (score 34, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (695.44) por encima de SMA50 (668.99).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.9%.
  - RSI 58: zona neutral.
**CRL** (score 23, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (341.06) por encima de SMA50 (310.17).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -9.3%.
  - RSI 49: zona neutral.
**TER** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (285.49) por debajo de SMA50 (344.38).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.0%.
  - RSI 39: zona neutral.
**ETN** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (370.02) por debajo de SMA50 (401.06).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.4%.
  - RSI 49: zona neutral.
**STX** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (604.34) por debajo de SMA50 (745.78).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -22.5%.
  - RSI 40: zona neutral.
**AKAM** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (89.25) por debajo de SMA50 (99.74).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.1%.
  - RSI 42: zona neutral.
**LITE** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (734.70) por debajo de SMA50 (872.27).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -32.0%.
  - RSI 41: zona neutral.
**JBL** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (268.14) por debajo de SMA50 (290.30).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.9%.
  - RSI 43: zona neutral.
**LRCX** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (236.19) por debajo de SMA50 (278.89).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.6%.
  - RSI 51: zona neutral.
**WDC** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (338.15) por debajo de SMA50 (394.60).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -21.7%.
  - RSI 43: zona neutral.
**CIEN** (score -77, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (310.35) por debajo de SMA50 (344.01).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.6%.
  - RSI 45: zona neutral.
**BE** (score -78, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (206.94) por debajo de SMA50 (244.94).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.7%.
  - RSI 52: zona neutral.
**ORCL** (score -78, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (126.72) por debajo de SMA50 (136.96).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.3%.
  - RSI 50: zona neutral.
**FIX** (score -79, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1232.72) por debajo de SMA50 (1478.42).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.4%.
  - RSI 49: zona neutral.
**AMAT** (score -80, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (384.85) por debajo de SMA50 (439.21).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.7%.
  - RSI 51: zona neutral.
**FLEX** (score -81, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (81.77) por debajo de SMA50 (99.92).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.0%.
  - RSI 51: zona neutral.
**VRT** (score -82, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (209.18) por debajo de SMA50 (232.63).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.9%.
  - RSI 54: zona neutral.

---
_Generado automáticamente el 2026-11-12T20:07:40.510Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se encontró cobertura periodística fechada el 2026-11-12 (las búsquedas devolvieron solo notas de otros días o sin fecha), por lo que no se puede explicar el movimiento del día en el mercado. Último dato fechado hallado: el 2026-11-10 el S&P 500 cerró en 7.520,93 (-0,4%), el Dow en 52.231,89 (-0,3%) y el Nasdaq en 25.065,87 (-0,7%). Además, las research notes de hoy salieron vacías (falló la descarga de fundamentales/Yahoo), así que no hay veredicto sintetizado contra el cual contrastar noticias.

### Core (largo plazo)

Sin noticias verificables de hoy para JNJ, PG, KO, XOM, CVX, JPM, MSFT, V, LMT ni TXN. (Notas sin fecha, no confirmadas para hoy: Lockheed subiendo por un informe de la CBO sobre costos del F-35 y Visa cayendo por reportes de comerciantes explorando stablecoins; no se usan para ninguna conclusión.)

### Satellite (técnico)

Sin noticias verificables de hoy para VEEV, ISRG, TMO, CRL, MAR. Hoy no hubo trades del satellite.

### Fuentes

- [How major US stock indexes fared Tuesday 11/10/2026](https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-tuesday-11102026-nid10112026/)
- [Stock Market News for Nov 10, 2026 (Zacks)](https://www.zacks.com/stock/news/3026944/stock-market-news-for-nov-10-2026)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
