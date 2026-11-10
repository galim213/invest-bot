# Reporte diario de inversión (simulado) — 2026-11-10

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1018.34**
- P&L acumulado: $18.34 (+1.83%)
- Core (70%, largo plazo): $720.32 (+2.90%) | Satellite (30%, técnico): $298.01 (-0.66%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 19.79 — CALMA (Dentro del rango histórico normal.) Variación 10d: +2.9 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.87 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.15 pts — normal.
- **Índice dólar (DXY)**: 102.22 (variación 10d: +0.03)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $280.44 | $75.62 | 10.5% | $5.62 (+8.02%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $169.06 | $74.81 | 10.4% | $4.81 (+6.86%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $96.89 | $73.14 | 10.2% | $3.14 (+4.49%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $164.74 | $65.04 | 9.0% | $-4.96 (-7.08%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $211.59 | $65.89 | 9.1% | $-4.11 (-5.87%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $343.52 | $71.62 | 9.9% | $1.62 (+2.32%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $532.62 | $69.99 | 9.7% | $-0.01 (-0.02%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $423.77 | $72.89 | 10.1% | $2.89 (+4.13%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $602.18 | $76.73 | 10.7% | $6.73 (+9.61%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $299.53 | $74.60 | 10.4% | $4.95 (+7.11%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $304.45 | $68.89 | 23.1% | $-2.48 (-3.48%) |
| ISRG | Health Care | 0.221 | $438.48 | $449.44 | $99.46 | 33.4% | $2.43 (+2.50%) |
| TMO | Health Care | 0.114 | $690.08 | $716.93 | $82.06 | 27.5% | $3.07 (+3.89%) |
| CRL | Health Care | 0.062 | $339.66 | $346.10 | $21.50 | 7.2% | $0.40 (+1.90%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $426.13 | $11.35 | 3.8% | $0.78 (+7.39%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.65**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.16** → N efectivo ajustado por correlación: **2.55**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| MRNA | Health Care | 79 | BUY | $251.85 | Tendencia de corto plazo alcista: SMA20 (229.40) por encima de SMA50 (196.70). |
| ACN | Information Technology | 74 | BUY | $258.99 | Tendencia de corto plazo alcista: SMA20 (247.20) por encima de SMA50 (212.12). |
| DLTR | Consumer Staples | 74 | BUY | $140.18 | Tendencia de corto plazo alcista: SMA20 (130.40) por encima de SMA50 (122.78). |
| HLT | Consumer Discretionary | 72 | BUY | $376.84 | Tendencia de corto plazo alcista: SMA20 (357.33) por encima de SMA50 (331.27). |
| CCL | Consumer Discretionary | 71 | BUY | $30.66 | Tendencia de corto plazo alcista: SMA20 (28.07) por encima de SMA50 (25.42). |
| HCA | Health Care | 71 | BUY | $502.70 | Tendencia de corto plazo alcista: SMA20 (474.76) por encima de SMA50 (446.97). |
| VRSK | Industrials | 71 | BUY | $204.04 | Tendencia de corto plazo alcista: SMA20 (195.41) por encima de SMA50 (183.22). |
| VMC | Materials | 71 | BUY | $287.59 | Tendencia de corto plazo alcista: SMA20 (271.23) por encima de SMA50 (257.24). |
| STZ | Consumer Staples | 70 | BUY | $145.33 | Tendencia de corto plazo alcista: SMA20 (135.63) por encima de SMA50 (125.91). |
| ERIE | Financials | 70 | BUY | $273.31 | Tendencia de corto plazo alcista: SMA20 (256.90) por encima de SMA50 (242.90). |
| MCK | Health Care | 70 | BUY | $1078.88 | Tendencia de corto plazo alcista: SMA20 (1014.18) por encima de SMA50 (944.88). |
| REGN | Health Care | 70 | BUY | $909.41 | Tendencia de corto plazo alcista: SMA20 (853.52) por encima de SMA50 (809.10). |
| TYL | Information Technology | 70 | BUY | $419.97 | Tendencia de corto plazo alcista: SMA20 (389.24) por encima de SMA50 (359.59). |
| CAH | Health Care | 69 | BUY | $276.69 | Tendencia de corto plazo alcista: SMA20 (256.62) por encima de SMA50 (241.89). |
| HD | Consumer Discretionary | 69 | BUY | $350.94 | Tendencia de corto plazo alcista: SMA20 (327.09) por encima de SMA50 (310.22). |
| MAR | Consumer Discretionary | 69 | BUY | $426.13 | Tendencia de corto plazo alcista: SMA20 (401.90) por encima de SMA50 (369.30). |
| TMO | Health Care | 50 | BUY | $716.93 | Tendencia de corto plazo alcista: SMA20 (692.82) por encima de SMA50 (664.71). |
| VEEV | Health Care | 50 | BUY | $304.45 | Tendencia de corto plazo alcista: SMA20 (312.03) por encima de SMA50 (290.12). |
| ISRG | Health Care | 48 | BUY | $449.44 | Tendencia de corto plazo alcista: SMA20 (444.19) por encima de SMA50 (413.14). |
| CRL | Health Care | 39 | BUY | $346.10 | Tendencia de corto plazo alcista: SMA20 (337.30) por encima de SMA50 (307.99). |
| GLW | Information Technology | -70 | SELL | $110.99 | Tendencia de corto plazo bajista: SMA20 (125.05) por debajo de SMA50 (143.08). |
| LITE | Information Technology | -70 | SELL | $582.48 | Tendencia de corto plazo bajista: SMA20 (759.16) por debajo de SMA50 (881.52). |
| VRT | Industrials | -70 | SELL | $192.46 | Tendencia de corto plazo bajista: SMA20 (210.18) por debajo de SMA50 (234.53). |
| CIEN | Information Technology | -71 | SELL | $270.93 | Tendencia de corto plazo bajista: SMA20 (316.54) por debajo de SMA50 (346.46). |
| KEYS | Information Technology | -71 | SELL | $290.80 | Tendencia de corto plazo bajista: SMA20 (315.28) por debajo de SMA50 (336.12). |
| MU | Information Technology | -71 | SELL | $713.00 | Tendencia de corto plazo bajista: SMA20 (854.20) por debajo de SMA50 (952.63). |
| BE | Industrials | -72 | SELL | $184.32 | Tendencia de corto plazo bajista: SMA20 (210.05) por debajo de SMA50 (245.29). |
| CHRW | Industrials | -72 | SELL | $128.02 | Tendencia de corto plazo bajista: SMA20 (134.84) por debajo de SMA50 (142.75). |
| FIX | Industrials | -72 | SELL | $1107.55 | Tendencia de corto plazo bajista: SMA20 (1269.10) por debajo de SMA50 (1494.81). |
| GEV | Industrials | -72 | SELL | $783.47 | Tendencia de corto plazo bajista: SMA20 (864.83) por debajo de SMA50 (919.13). |
| JBL | Information Technology | -72 | SELL | $248.47 | Tendencia de corto plazo bajista: SMA20 (271.22) por debajo de SMA50 (291.88). |
| FLEX | Information Technology | -75 | SELL | $75.29 | Tendencia de corto plazo bajista: SMA20 (83.81) por debajo de SMA50 (101.02). |
| ORCL | Information Technology | -75 | SELL | $117.09 | Tendencia de corto plazo bajista: SMA20 (127.17) por debajo de SMA50 (137.56). |
| AKAM | Information Technology | -76 | SELL | $83.81 | Tendencia de corto plazo bajista: SMA20 (89.81) por debajo de SMA50 (100.51). |
| COHR | Information Technology | -76 | SELL | $212.65 | Tendencia de corto plazo bajista: SMA20 (220.63) por debajo de SMA50 (267.63). |

#### Detalle de razonamiento (señales destacadas)

**MRNA** (score 79, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (229.40) por encima de SMA50 (196.70).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 21.1%.
  - RSI 52: zona neutral.
**ACN** (score 74, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (247.20) por encima de SMA50 (212.12).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.1%.
  - RSI 59: zona neutral.
**DLTR** (score 74, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (130.40) por encima de SMA50 (122.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.4%.
  - RSI 60: zona neutral.
**HLT** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (357.33) por encima de SMA50 (331.27).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.3%.
  - RSI 60: zona neutral.
**CCL** (score 71, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (28.07) por encima de SMA50 (25.42).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.1%.
  - RSI 65: zona neutral.
**HCA** (score 71, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (474.76) por encima de SMA50 (446.97).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.7%.
  - RSI 65: zona neutral.
**VRSK** (score 71, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (195.41) por encima de SMA50 (183.22).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.7%.
  - RSI 58: zona neutral.
**VMC** (score 71, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (271.23) por encima de SMA50 (257.24).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.8%.
  - RSI 65: zona neutral.
**STZ** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (135.63) por encima de SMA50 (125.91).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.1%.
  - RSI 66: zona neutral.
**ERIE** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (256.90) por encima de SMA50 (242.90).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.7%.
  - RSI 66: zona neutral.
**MCK** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1014.18) por encima de SMA50 (944.88).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.6%.
  - RSI 66: zona neutral.
**REGN** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (853.52) por encima de SMA50 (809.10).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.4%.
  - RSI 67: zona neutral.
**TYL** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (389.24) por encima de SMA50 (359.59).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.9%.
  - RSI 67: zona neutral.
**CAH** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (256.62) por encima de SMA50 (241.89).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.3%.
  - RSI 68: zona neutral.
**HD** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (327.09) por encima de SMA50 (310.22).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.2%.
  - RSI 68: zona neutral.
**MAR** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (401.90) por encima de SMA50 (369.30).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.2%.
  - RSI 65: zona neutral.
**TMO** (score 50, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (692.82) por encima de SMA50 (664.71).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.5%.
  - RSI 56: zona neutral.
**VEEV** (score 50, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (312.03) por encima de SMA50 (290.12).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.9%.
  - RSI 35: zona neutral.
**ISRG** (score 48, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (444.19) por encima de SMA50 (413.14).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.8%.
  - RSI 57: zona neutral.
**CRL** (score 39, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (337.30) por encima de SMA50 (307.99).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.6%.
  - RSI 50: zona neutral.
**GLW** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (125.05) por debajo de SMA50 (143.08).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.1%.
  - RSI 34: zona neutral.
**LITE** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (759.16) por debajo de SMA50 (881.52).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -32.8%.
  - RSI 33: zona neutral.
**VRT** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (210.18) por debajo de SMA50 (234.53).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.7%.
  - RSI 45: zona neutral.
**CIEN** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (316.54) por debajo de SMA50 (346.46).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -22.8%.
  - RSI 34: zona neutral.
**KEYS** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (315.28) por debajo de SMA50 (336.12).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.5%.
  - RSI 35: zona neutral.
**MU** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (854.20) por debajo de SMA50 (952.63).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -23.2%.
  - RSI 35: zona neutral.
**BE** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (210.05) por debajo de SMA50 (245.29).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.6%.
  - RSI 37: zona neutral.
**CHRW** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (134.84) por debajo de SMA50 (142.75).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.8%.
  - RSI 37: zona neutral.
**FIX** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1269.10) por debajo de SMA50 (1494.81).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.1%.
  - RSI 37: zona neutral.
**GEV** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (864.83) por debajo de SMA50 (919.13).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.5%.
  - RSI 37: zona neutral.
**JBL** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (271.22) por debajo de SMA50 (291.88).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.3%.
  - RSI 37: zona neutral.
**FLEX** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (83.81) por debajo de SMA50 (101.02).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.7%.
  - RSI 43: zona neutral.
**ORCL** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (127.17) por debajo de SMA50 (137.56).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.3%.
  - RSI 42: zona neutral.
**AKAM** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (89.81) por debajo de SMA50 (100.51).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.8%.
  - RSI 43: zona neutral.
**COHR** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (220.63) por debajo de SMA50 (267.63).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.8%.
  - RSI 44: zona neutral.

---
_Generado automáticamente el 2026-11-10T20:07:49.039Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se pudo obtener cobertura de noticias financieras reales del 2026-11-10: las búsquedas web devolvieron solo artículos de fechas anteriores (el más reciente, agosto/septiembre 2026), por lo que no se atribuye el movimiento del día a ninguna causa ni se menciona ningún ticker. Además, las research notes de hoy salieron vacías (0 generadas: Yahoo Finance inalcanzable desde el entorno), así que no hay veredicto sintetizado que contrastar.

### Core (largo plazo)
Sin noticias relevantes verificadas hoy.

### Satellite (técnico)
Sin noticias relevantes verificadas hoy. Sin trades hoy; sin alertas activas (ventas: 0; sellTriggers: sin datos; variación total diaria ≈ -0.07%).

Fuentes consultadas (sin datos de hoy):
- [Cierre 29-sep-2026](https://tapeboard.com/blog/market-pulse-2026-09-29)
- [Cierre 17-ago-2026](https://nbcpalmsprings.com/2026/08/17/stocks-fall-as-dow-sp-500-and-nasdaq-close-lower-monday)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
