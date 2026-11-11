# Reporte diario de inversión (simulado) — 2026-11-11

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1021.69**
- P&L acumulado: $21.69 (+2.17%)
- Core (70%, largo plazo): $723.00 (+3.29%) | Satellite (30%, técnico): $298.69 (-0.44%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 17.47 — CALMA (Dentro del rango histórico normal.) Variación 10d: +0.3 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.88 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -0.53 pts — normal.
- **Índice dólar (DXY)**: 102.90 (variación 10d: +0.86)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $280.18 | $75.54 | 10.4% | $5.54 (+7.92%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $167.62 | $74.17 | 10.3% | $4.17 (+5.95%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $97.38 | $73.51 | 10.2% | $3.51 (+5.02%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $165.99 | $65.53 | 9.1% | $-4.47 (-6.38%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $212.49 | $66.17 | 9.2% | $-3.83 (-5.47%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $344.41 | $71.81 | 9.9% | $1.81 (+2.59%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $520.06 | $68.34 | 9.5% | $-1.66 (-2.38%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $424.78 | $73.07 | 10.1% | $3.07 (+4.38%) | $0.7800/acción (2026-11-10) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $608.45 | $77.53 | 10.7% | $7.53 (+10.75%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $310.50 | $77.33 | 10.7% | $7.68 (+11.03%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $307.43 | $69.56 | 23.3% | $-1.81 (-2.54%) |
| ISRG | Health Care | 0.221 | $438.48 | $448.46 | $99.25 | 33.2% | $2.21 (+2.28%) |
| TMO | Health Care | 0.114 | $690.08 | $717.24 | $82.09 | 27.5% | $3.11 (+3.94%) |
| CRL | Health Care | 0.062 | $339.66 | $347.81 | $21.61 | 7.2% | $0.51 (+2.40%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $428.94 | $11.42 | 3.8% | $0.86 (+8.10%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.66**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.16** → N efectivo ajustado por correlación: **2.56**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| BRO | Financials | 79 | BUY | $71.26 | Tendencia de corto plazo alcista: SMA20 (70.62) por encima de SMA50 (66.76). |
| BF-B | Consumer Staples | 75 | BUY | $29.97 | Tendencia de corto plazo alcista: SMA20 (29.29) por encima de SMA50 (27.58). |
| STZ | Consumer Staples | 75 | BUY | $144.18 | Tendencia de corto plazo alcista: SMA20 (136.53) por encima de SMA50 (126.20). |
| DG | Consumer Staples | 75 | BUY | $137.80 | Tendencia de corto plazo alcista: SMA20 (133.75) por encima de SMA50 (127.90). |
| DLTR | Consumer Staples | 75 | BUY | $142.57 | Tendencia de corto plazo alcista: SMA20 (131.48) por encima de SMA50 (123.01). |
| ERIE | Financials | 74 | BUY | $272.39 | Tendencia de corto plazo alcista: SMA20 (258.95) por encima de SMA50 (243.24). |
| EG | Financials | 73 | BUY | $422.93 | Tendencia de corto plazo alcista: SMA20 (403.93) por encima de SMA50 (384.88). |
| ADP | Industrials | 72 | BUY | $305.58 | Tendencia de corto plazo alcista: SMA20 (297.12) por encima de SMA50 (280.09). |
| BBY | Consumer Discretionary | 72 | BUY | $105.59 | Tendencia de corto plazo alcista: SMA20 (98.07) por encima de SMA50 (92.80). |
| FDS | Financials | 72 | BUY | $335.36 | Tendencia de corto plazo alcista: SMA20 (323.79) por encima de SMA50 (297.41). |
| HD | Consumer Discretionary | 72 | BUY | $350.73 | Tendencia de corto plazo alcista: SMA20 (329.85) por encima de SMA50 (310.89). |
| MAS | Industrials | 72 | BUY | $85.13 | Tendencia de corto plazo alcista: SMA20 (78.95) por encima de SMA50 (72.84). |
| TYL | Information Technology | 72 | BUY | $423.75 | Tendencia de corto plazo alcista: SMA20 (393.01) por encima de SMA50 (360.57). |
| VRSK | Industrials | 72 | BUY | $204.10 | Tendencia de corto plazo alcista: SMA20 (196.59) por encima de SMA50 (183.42). |
| BR | Industrials | 71 | BUY | $192.43 | Tendencia de corto plazo alcista: SMA20 (183.17) por encima de SMA50 (172.73). |
| MAR | Consumer Discretionary | 63 | BUY | $428.94 | Tendencia de corto plazo alcista: SMA20 (404.86) por encima de SMA50 (371.23). |
| ISRG | Health Care | 52 | BUY | $448.46 | Tendencia de corto plazo alcista: SMA20 (445.63) por encima de SMA50 (414.74). |
| VEEV | Health Care | 49 | BUY | $307.43 | Tendencia de corto plazo alcista: SMA20 (312.59) por encima de SMA50 (290.70). |
| TMO | Health Care | 42 | BUY | $717.24 | Tendencia de corto plazo alcista: SMA20 (695.09) por encima de SMA50 (667.08). |
| CRL | Health Care | 28 | HOLD | $347.81 | Tendencia de corto plazo alcista: SMA20 (339.58) por encima de SMA50 (309.29). |
| GEV | Industrials | -72 | SELL | $812.32 | Tendencia de corto plazo bajista: SMA20 (859.06) por debajo de SMA50 (917.69). |
| SNDK | Information Technology | -73 | SELL | $991.79 | Tendencia de corto plazo bajista: SMA20 (1168.64) por debajo de SMA50 (1467.43). |
| TER | Information Technology | -73 | SELL | $265.28 | Tendencia de corto plazo bajista: SMA20 (289.45) por debajo de SMA50 (345.93). |
| STX | Information Technology | -74 | SELL | $554.15 | Tendencia de corto plazo bajista: SMA20 (611.85) por debajo de SMA50 (751.13). |
| KEYS | Information Technology | -75 | SELL | $306.51 | Tendencia de corto plazo bajista: SMA20 (312.76) por debajo de SMA50 (335.88). |
| SMCI | Information Technology | -75 | SELL | $30.48 | Tendencia de corto plazo bajista: SMA20 (31.93) por debajo de SMA50 (36.96). |
| WDC | Information Technology | -75 | SELL | $312.83 | Tendencia de corto plazo bajista: SMA20 (340.46) por debajo de SMA50 (397.37). |
| FIX | Industrials | -76 | SELL | $1155.19 | Tendencia de corto plazo bajista: SMA20 (1249.69) por debajo de SMA50 (1486.79). |
| LITE | Information Technology | -76 | SELL | $656.53 | Tendencia de corto plazo bajista: SMA20 (747.32) por debajo de SMA50 (877.33). |
| AKAM | Information Technology | -77 | SELL | $86.61 | Tendencia de corto plazo bajista: SMA20 (89.55) por debajo de SMA50 (100.11). |
| CIEN | Information Technology | -77 | SELL | $298.88 | Tendencia de corto plazo bajista: SMA20 (313.56) por debajo de SMA50 (345.25). |
| JBL | Information Technology | -78 | SELL | $259.64 | Tendencia de corto plazo bajista: SMA20 (269.57) por debajo de SMA50 (291.12). |
| FLEX | Information Technology | -81 | SELL | $79.64 | Tendencia de corto plazo bajista: SMA20 (82.82) por debajo de SMA50 (100.49). |
| ORCL | Information Technology | -81 | SELL | $128.88 | Tendencia de corto plazo bajista: SMA20 (127.13) por debajo de SMA50 (137.34). |
| VRT | Industrials | -82 | SELL | $208.85 | Tendencia de corto plazo bajista: SMA20 (209.57) por debajo de SMA50 (233.62). |

#### Detalle de razonamiento (señales destacadas)

**BRO** (score 79, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (70.62) por encima de SMA50 (66.76).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.4%.
  - RSI 44: zona neutral.
**BF-B** (score 75, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (29.29) por encima de SMA50 (27.58).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.0%.
  - RSI 49: zona neutral.
**STZ** (score 75, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (136.53) por encima de SMA50 (126.20).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.0%.
  - RSI 58: zona neutral.
**DG** (score 75, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (133.75) por encima de SMA50 (127.90).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.2%.
  - RSI 49: zona neutral.
**DLTR** (score 75, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (131.48) por encima de SMA50 (123.01).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.1%.
  - RSI 59: zona neutral.
**ERIE** (score 74, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (258.95) por encima de SMA50 (243.24).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.6%.
  - RSI 60: zona neutral.
**EG** (score 73, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (403.93) por encima de SMA50 (384.88).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.3%.
  - RSI 58: zona neutral.
**ADP** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (297.12) por encima de SMA50 (280.09).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.1%.
  - RSI 48: zona neutral.
**BBY** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (98.07) por encima de SMA50 (92.80).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 58: zona neutral.
**FDS** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (323.79) por encima de SMA50 (297.41).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.3%.
  - RSI 50: zona neutral.
**HD** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (329.85) por encima de SMA50 (310.89).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.4%.
  - RSI 63: zona neutral.
**MAS** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (78.95) por encima de SMA50 (72.84).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.4%.
  - RSI 64: zona neutral.
**TYL** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (393.01) por encima de SMA50 (360.57).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 17.4%.
  - RSI 63: zona neutral.
**VRSK** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (196.59) por encima de SMA50 (183.42).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.5%.
  - RSI 51: zona neutral.
**BR** (score 71, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (183.17) por encima de SMA50 (172.73).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.7%.
  - RSI 59: zona neutral.
**MAR** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (404.86) por encima de SMA50 (371.23).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.8%.
  - RSI 73: sobrecompra, riesgo de corrección.
**ISRG** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (445.63) por encima de SMA50 (414.74).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.0%.
  - RSI 52: zona neutral.
**VEEV** (score 49, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (312.59) por encima de SMA50 (290.70).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.3%.
  - RSI 36: zona neutral.
**TMO** (score 42, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (695.09) por encima de SMA50 (667.08).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.9%.
  - RSI 62: zona neutral.
**CRL** (score 28, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (339.58) por encima de SMA50 (309.29).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -7.0%.
  - RSI 52: zona neutral.
**GEV** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (859.06) por debajo de SMA50 (917.69).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.5%.
  - RSI 48: zona neutral.
**SNDK** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1168.64) por debajo de SMA50 (1467.43).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -29.4%.
  - RSI 38: zona neutral.
**TER** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (289.45) por debajo de SMA50 (345.93).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.3%.
  - RSI 39: zona neutral.
**STX** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (611.85) por debajo de SMA50 (751.13).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -20.6%.
  - RSI 40: zona neutral.
**KEYS** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (312.76) por debajo de SMA50 (335.88).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.6%.
  - RSI 48: zona neutral.
**SMCI** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (31.93) por debajo de SMA50 (36.96).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.9%.
  - RSI 42: zona neutral.
**WDC** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (340.46) por debajo de SMA50 (397.37).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -21.1%.
  - RSI 42: zona neutral.
**FIX** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1249.69) por debajo de SMA50 (1486.79).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.2%.
  - RSI 44: zona neutral.
**LITE** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (747.32) por debajo de SMA50 (877.33).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -28.2%.
  - RSI 44: zona neutral.
**AKAM** (score -77, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (89.55) por debajo de SMA50 (100.11).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.7%.
  - RSI 45: zona neutral.
**CIEN** (score -77, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (313.56) por debajo de SMA50 (345.25).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -17.7%.
  - RSI 46: zona neutral.
**JBL** (score -78, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (269.57) por debajo de SMA50 (291.12).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.8%.
  - RSI 47: zona neutral.
**FLEX** (score -81, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (82.82) por debajo de SMA50 (100.49).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.4%.
  - RSI 52: zona neutral.
**ORCL** (score -81, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (127.13) por debajo de SMA50 (137.34).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.8%.
  - RSI 52: zona neutral.
**VRT** (score -82, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (209.57) por debajo de SMA50 (233.62).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.0%.
  - RSI 53: zona neutral.

---
_Generado automáticamente el 2026-11-11T20:07:30.295Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se encontraron noticias de mercado fechadas el 2026-11-11 (dos búsquedas web devolvieron solo recaps de fechas anteriores), por lo que no se puede explicar el movimiento del día ni conectar noticias con tickers del core o del satellite. Además, run-daily.js no pudo obtener fundamentales/research notes (fc.yahoo.com inalcanzable), así que research-notes-latest.md está vacío. Datos del propio bot: core +0.37% y satellite +0.23% vs. el día anterior; sin trades hoy; VIX 17.47 (calma).

### Core (largo plazo)
Sin noticias relevantes verificadas hoy.

### Satellite (técnico)
Sin noticias relevantes verificadas hoy.

Fuentes consultadas (ninguna fechada hoy):
- [Tapeboard: Stock Market Today, October 2, 2026](https://tapeboard.com/blog/market-pulse-2026-10-02)
- [Trading Economics: Dow Jones Index](https://tradingeconomics.com/indu:ind/news/584350)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.

_Chequeo de alertas: sin ventas hoy, sin sellTriggers en posiciones abiertas, variación total diaria positiva (no cae >3%) → no se envió email._
