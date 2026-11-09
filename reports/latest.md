# Reporte diario de inversión (simulado) — 2026-11-09

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1019.08**
- P&L acumulado: $19.08 (+1.91%)
- Core (70%, largo plazo): $717.10 (+2.44%) | Satellite (30%, técnico): $301.98 (+0.66%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 19.94 — CALMA (Dentro del rango histórico normal.) Variación 10d: +2.4 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.83 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.86 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 101.66 (variación 10d: -0.66)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $282.67 | $76.22 | 10.6% | $6.22 (+8.88%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $168.60 | $74.60 | 10.4% | $4.60 (+6.57%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $95.82 | $72.34 | 10.1% | $2.34 (+3.34%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $163.42 | $64.52 | 9.0% | $-5.48 (-7.83%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $209.37 | $65.20 | 9.1% | $-4.80 (-6.86%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $342.86 | $71.49 | 10.0% | $1.49 (+2.13%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $547.17 | $71.90 | 10.0% | $1.90 (+2.71%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $423.55 | $72.85 | 10.2% | $2.85 (+4.08%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $588.27 | $74.96 | 10.5% | $4.96 (+7.08%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $293.23 | $73.03 | 10.2% | $3.38 (+4.86%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $307.00 | $69.47 | 23.0% | $-1.91 (-2.67%) |
| ISRG | Health Care | 0.221 | $438.48 | $460.68 | $101.95 | 33.8% | $4.91 (+5.06%) |
| TMO | Health Care | 0.114 | $690.08 | $719.66 | $82.37 | 27.3% | $3.39 (+4.29%) |
| CRL | Health Care | 0.062 | $339.66 | $358.06 | $22.24 | 7.4% | $1.14 (+5.42%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $420.31 | $11.19 | 3.7% | $0.63 (+5.92%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.65**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.17** → N efectivo ajustado por correlación: **2.51**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| DLTR | Consumer Staples | 74 | BUY | $138.17 | Tendencia de corto plazo alcista: SMA20 (129.26) por encima de SMA50 (122.53). |
| MRNA | Health Care | 74 | BUY | $275.60 | Tendencia de corto plazo alcista: SMA20 (227.95) por encima de SMA50 (194.60). |
| CCL | Consumer Discretionary | 69 | BUY | $31.18 | Tendencia de corto plazo alcista: SMA20 (27.89) por encima de SMA50 (25.29). |
| LLY | Health Care | 69 | BUY | $1417.23 | Tendencia de corto plazo alcista: SMA20 (1313.68) por encima de SMA50 (1219.10). |
| NCLH | Consumer Discretionary | 69 | BUY | $18.72 | Tendencia de corto plazo alcista: SMA20 (16.45) por encima de SMA50 (15.52). |
| HCA | Health Care | 68 | BUY | $506.20 | Tendencia de corto plazo alcista: SMA20 (472.73) por encima de SMA50 (445.21). |
| VTRS | Health Care | 68 | BUY | $20.51 | Tendencia de corto plazo alcista: SMA20 (18.68) por encima de SMA50 (17.78). |
| CAH | Health Care | 67 | BUY | $273.85 | Tendencia de corto plazo alcista: SMA20 (254.75) por encima de SMA50 (241.03). |
| MAS | Industrials | 67 | BUY | $86.76 | Tendencia de corto plazo alcista: SMA20 (77.42) por encima de SMA50 (72.29). |
| REGN | Health Care | 67 | BUY | $925.80 | Tendencia de corto plazo alcista: SMA20 (845.99) por encima de SMA50 (807.01). |
| RCL | Consumer Discretionary | 67 | BUY | $341.77 | Tendencia de corto plazo alcista: SMA20 (299.30) por encima de SMA50 (276.00). |
| TYL | Information Technology | 67 | BUY | $420.96 | Tendencia de corto plazo alcista: SMA20 (385.73) por encima de SMA50 (358.69). |
| VMC | Materials | 67 | BUY | $293.30 | Tendencia de corto plazo alcista: SMA20 (269.66) por encima de SMA50 (257.41). |
| BBY | Consumer Discretionary | 66 | BUY | $106.65 | Tendencia de corto plazo alcista: SMA20 (96.46) por encima de SMA50 (91.84). |
| STZ | Consumer Staples | 66 | BUY | $145.62 | Tendencia de corto plazo alcista: SMA20 (134.68) por encima de SMA50 (125.59). |
| MAR | Consumer Discretionary | 60 | BUY | $420.31 | Tendencia de corto plazo alcista: SMA20 (399.33) por encima de SMA50 (367.67). |
| TMO | Health Care | 53 | BUY | $719.66 | Tendencia de corto plazo alcista: SMA20 (690.03) por encima de SMA50 (662.67). |
| ISRG | Health Care | 52 | BUY | $460.68 | Tendencia de corto plazo alcista: SMA20 (442.82) por encima de SMA50 (411.69). |
| VEEV | Health Care | 46 | BUY | $307.00 | Tendencia de corto plazo alcista: SMA20 (311.92) por encima de SMA50 (289.75). |
| CRL | Health Care | 44 | BUY | $358.06 | Tendencia de corto plazo alcista: SMA20 (335.18) por encima de SMA50 (306.93). |
| CAT | Industrials | -68 | SELL | $596.86 | Tendencia de corto plazo bajista: SMA20 (674.09) por debajo de SMA50 (754.81). |
| COIN | Financials | -68 | SELL | $137.55 | Tendencia de corto plazo bajista: SMA20 (159.63) por debajo de SMA50 (174.53). |
| HOOD | Financials | -68 | SELL | $84.57 | Tendencia de corto plazo bajista: SMA20 (92.95) por debajo de SMA50 (105.58). |
| JBL | Information Technology | -69 | SELL | $252.86 | Tendencia de corto plazo bajista: SMA20 (274.70) por debajo de SMA50 (293.02). |
| STX | Information Technology | -69 | SELL | $500.94 | Tendencia de corto plazo bajista: SMA20 (631.84) por debajo de SMA50 (762.78). |
| BKR | Energy | -71 | SELL | $48.70 | Tendencia de corto plazo bajista: SMA20 (53.84) por debajo de SMA50 (56.65). |
| FIX | Industrials | -72 | SELL | $1108.72 | Tendencia de corto plazo bajista: SMA20 (1294.83) por debajo de SMA50 (1503.48). |
| GLW | Information Technology | -72 | SELL | $115.42 | Tendencia de corto plazo bajista: SMA20 (126.90) por debajo de SMA50 (143.82). |
| LITE | Information Technology | -72 | SELL | $598.81 | Tendencia de corto plazo bajista: SMA20 (779.56) por debajo de SMA50 (888.22). |
| MU | Information Technology | -72 | SELL | $729.80 | Tendencia de corto plazo bajista: SMA20 (866.04) por debajo de SMA50 (957.48). |
| WDC | Information Technology | -72 | SELL | $288.56 | Tendencia de corto plazo bajista: SMA20 (347.54) por debajo de SMA50 (403.32). |
| CIEN | Information Technology | -73 | SELL | $269.96 | Tendencia de corto plazo bajista: SMA20 (323.05) por debajo de SMA50 (348.71). |
| KEYS | Information Technology | -73 | SELL | $290.21 | Tendencia de corto plazo bajista: SMA20 (319.32) por debajo de SMA50 (336.79). |
| AKAM | Information Technology | -74 | SELL | $80.81 | Tendencia de corto plazo bajista: SMA20 (90.64) por debajo de SMA50 (101.02). |
| SMCI | Information Technology | -75 | SELL | $28.90 | Tendencia de corto plazo bajista: SMA20 (32.78) por debajo de SMA50 (37.28). |

#### Detalle de razonamiento (señales destacadas)

**DLTR** (score 74, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (129.26) por encima de SMA50 (122.53).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.6%.
  - RSI 60: zona neutral.
**MRNA** (score 74, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (227.95) por encima de SMA50 (194.60).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 38.6%.
  - RSI 60: zona neutral.
**CCL** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (27.89) por encima de SMA50 (25.29).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 16.7%.
  - RSI 68: zona neutral.
**LLY** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1313.68) por encima de SMA50 (1219.10).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.8%.
  - RSI 68: zona neutral.
**NCLH** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (16.45) por encima de SMA50 (15.52).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 22.7%.
  - RSI 69: zona neutral.
**HCA** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (472.73) por encima de SMA50 (445.21).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.8%.
  - RSI 63: zona neutral.
**VTRS** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (18.68) por encima de SMA50 (17.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.2%.
  - RSI 69: zona neutral.
**CAH** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (254.75) por encima de SMA50 (241.03).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 66: zona neutral.
**MAS** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (77.42) por encima de SMA50 (72.29).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 15.3%.
  - RSI 71: sobrecompra, riesgo de corrección.
**REGN** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (845.99) por encima de SMA50 (807.01).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 14.6%.
  - RSI 70: zona neutral.
**RCL** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (299.30) por encima de SMA50 (276.00).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 21.8%.
  - RSI 72: sobrecompra, riesgo de corrección.
**TYL** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (385.73) por encima de SMA50 (358.69).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.0%.
  - RSI 67: zona neutral.
**VMC** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (269.66) por encima de SMA50 (257.41).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.2%.
  - RSI 68: zona neutral.
**BBY** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (96.46) por encima de SMA50 (91.84).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 67: zona neutral.
**STZ** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (134.68) por encima de SMA50 (125.59).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.2%.
  - RSI 65: zona neutral.
**MAR** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (399.33) por encima de SMA50 (367.67).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.5%.
  - RSI 65: zona neutral.
**TMO** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (690.03) por encima de SMA50 (662.67).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.1%.
  - RSI 59: zona neutral.
**ISRG** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (442.82) por encima de SMA50 (411.69).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.0%.
  - RSI 58: zona neutral.
**VEEV** (score 46, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (311.92) por encima de SMA50 (289.75).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.5%.
  - RSI 40: zona neutral.
**CRL** (score 44, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (335.18) por encima de SMA50 (306.93).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.2%.
  - RSI 60: zona neutral.
**CAT** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (674.09) por debajo de SMA50 (754.81).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.8%.
  - RSI 30: zona neutral.
**COIN** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (159.63) por debajo de SMA50 (174.53).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.8%.
  - RSI 30: zona neutral.
**HOOD** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (92.95) por debajo de SMA50 (105.58).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.9%.
  - RSI 35: zona neutral.
**JBL** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (274.70) por debajo de SMA50 (293.02).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.3%.
  - RSI 40: zona neutral.
**STX** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (631.84) por debajo de SMA50 (762.78).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -22.2%.
  - RSI 31: zona neutral.
**BKR** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (53.84) por debajo de SMA50 (56.65).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.1%.
  - RSI 36: zona neutral.
**FIX** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1294.83) por debajo de SMA50 (1503.48).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.9%.
  - RSI 37: zona neutral.
**GLW** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (126.90) por debajo de SMA50 (143.82).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.6%.
  - RSI 38: zona neutral.
**LITE** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (779.56) por debajo de SMA50 (888.22).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -26.8%.
  - RSI 36: zona neutral.
**MU** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (866.04) por debajo de SMA50 (957.48).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.2%.
  - RSI 37: zona neutral.
**WDC** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (347.54) por debajo de SMA50 (403.32).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.0%.
  - RSI 36: zona neutral.
**CIEN** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (323.05) por debajo de SMA50 (348.71).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.6%.
  - RSI 38: zona neutral.
**KEYS** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (319.32) por debajo de SMA50 (336.79).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.0%.
  - RSI 38: zona neutral.
**AKAM** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (90.64) por debajo de SMA50 (101.02).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -18.0%.
  - RSI 39: zona neutral.
**SMCI** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (32.78) por debajo de SMA50 (37.28).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.6%.
  - RSI 42: zona neutral.

---
_Generado automáticamente el 2026-11-09T20:07:47.077Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se encontró cobertura periodística fechada el 2026-11-09 (cierre de índices ni noticias por ticker) en las búsquedas realizadas; los resultados disponibles eran de fechas anteriores y algunos se contradecían, por lo que no se atribuye el movimiento del día a ninguna causa específica. Además, las research notes de hoy salieron vacías (Yahoo Finance inalcanzable desde el entorno: `ENOTFOUND fc.yahoo.com`), así que no hay veredicto sintetizado contra el cual contrastar noticias.

### Core (largo plazo)
Sin noticia relevante verificable de hoy para JNJ, PG, KO, XOM, CVX, JPM, MSFT, V, LMT ni TXN.

### Satellite (técnico)
Sin noticia relevante verificable de hoy. Hoy no hubo trades del satellite.

### Fuentes
- [Market Wrap US Close (StockHub, referencia 5-nov-2026, no del día)](https://stockhub.kr/en/news/news_de127e25d6e0)

Chequeo de alertas: sin ventas hoy, sin sellTriggers (research notes vacías) y valor combinado en alza (+$17.1 core, +$7.8 satellite) → no se envió email.

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
