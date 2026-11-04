# Reporte diario de inversión (simulado) — 2026-11-04

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1034.45**
- P&L acumulado: $34.45 (+3.45%)
- Core (70%, largo plazo): $729.70 (+4.24%) | Satellite (30%, técnico): $304.75 (+1.58%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 16.85 — CALMA (Dentro del rango histórico normal.) Variación 10d: -2.2 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.87 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.90 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 101.57 (variación 10d: -0.04)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $276.42 | $74.53 | 10.2% | $4.53 (+6.47%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $167.58 | $74.15 | 10.2% | $4.15 (+5.93%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $96.25 | $72.66 | 10.0% | $2.66 (+3.81%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $168.59 | $66.56 | 9.1% | $-3.44 (-4.92%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $216.39 | $67.39 | 9.2% | $-2.61 (-3.73%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $350.36 | $73.05 | 10.0% | $3.05 (+4.36%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $558.01 | $73.32 | 10.0% | $3.32 (+4.75%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $434.22 | $74.69 | 10.2% | $4.69 (+6.70%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $596.57 | $76.01 | 10.4% | $6.01 (+8.59%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $310.51 | $77.34 | 10.6% | $7.69 (+11.04%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $310.81 | $70.33 | 23.1% | $-1.05 (-1.47%) |
| ISRG | Health Care | 0.221 | $438.48 | $484.30 | $107.18 | 35.2% | $10.14 (+10.45%) |
| TMO | Health Care | 0.114 | $690.08 | $703.75 | $80.55 | 26.4% | $1.56 (+1.98%) |
| CRL | Health Care | 0.062 | $339.66 | $332.36 | $20.65 | 6.8% | $-0.45 (-2.15%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $424.17 | $11.30 | 3.7% | $0.73 (+6.90%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.58**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.16** → N efectivo ajustado por correlación: **2.56**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| HCA | Health Care | 71 | BUY | $513.21 | Tendencia de corto plazo alcista: SMA20 (465.16) por encima de SMA50 (440.33). |
| ADSK | Information Technology | 70 | BUY | $271.31 | Tendencia de corto plazo alcista: SMA20 (244.71) por encima de SMA50 (232.89). |
| GDDY | Information Technology | 70 | BUY | $118.51 | Tendencia de corto plazo alcista: SMA20 (108.75) por encima de SMA50 (102.46). |
| ACN | Information Technology | 68 | BUY | $266.42 | Tendencia de corto plazo alcista: SMA20 (237.40) por encima de SMA50 (206.23). |
| STZ | Consumer Staples | 68 | BUY | $146.57 | Tendencia de corto plazo alcista: SMA20 (131.61) por encima de SMA50 (124.84). |
| EL | Consumer Staples | 67 | BUY | $112.58 | Tendencia de corto plazo alcista: SMA20 (105.23) por encima de SMA50 (100.58). |
| ISRG | Health Care | 67 | BUY | $484.30 | Tendencia de corto plazo alcista: SMA20 (437.18) por encima de SMA50 (406.30). |
| BF-B | Consumer Staples | 66 | BUY | $30.67 | Tendencia de corto plazo alcista: SMA20 (28.42) por encima de SMA50 (27.21). |
| CCL | Consumer Discretionary | 66 | BUY | $31.17 | Tendencia de corto plazo alcista: SMA20 (27.44) por encima de SMA50 (25.11). |
| RL | Consumer Discretionary | 66 | BUY | $410.56 | Tendencia de corto plazo alcista: SMA20 (385.07) por encima de SMA50 (362.65). |
| ULTA | Consumer Discretionary | 66 | BUY | $659.98 | Tendencia de corto plazo alcista: SMA20 (611.46) por encima de SMA50 (571.54). |
| CCI | Real Estate | 65 | BUY | $91.95 | Tendencia de corto plazo alcista: SMA20 (83.13) por encima de SMA50 (76.27). |
| LMT | Industrials | 65 | BUY | $596.51 | Tendencia de corto plazo alcista: SMA20 (576.50) por encima de SMA50 (547.71). |
| RCL | Consumer Discretionary | 65 | BUY | $333.39 | Tendencia de corto plazo alcista: SMA20 (291.94) por encima de SMA50 (273.16). |
| WMT | Consumer Staples | 65 | BUY | $130.45 | Tendencia de corto plazo alcista: SMA20 (119.08) por encima de SMA50 (111.58). |
| MAR | Consumer Discretionary | 50 | BUY | $424.17 | Tendencia de corto plazo alcista: SMA20 (391.40) por encima de SMA50 (363.85). |
| TMO | Health Care | 44 | BUY | $703.75 | Tendencia de corto plazo alcista: SMA20 (683.95) por encima de SMA50 (658.50). |
| VEEV | Health Care | 42 | BUY | $310.81 | Tendencia de corto plazo alcista: SMA20 (309.73) por encima de SMA50 (287.42). |
| CRL | Health Care | 34 | HOLD | $332.36 | Tendencia de corto plazo alcista: SMA20 (330.14) por encima de SMA50 (304.54). |
| COHR | Information Technology | -68 | SELL | $192.04 | Tendencia de corto plazo bajista: SMA20 (240.11) por debajo de SMA50 (274.50). |
| COIN | Financials | -68 | SELL | $151.99 | Tendencia de corto plazo bajista: SMA20 (165.79) por debajo de SMA50 (177.38). |
| FIX | Industrials | -68 | SELL | $1088.53 | Tendencia de corto plazo bajista: SMA20 (1393.14) por debajo de SMA50 (1536.59). |
| GLW | Information Technology | -68 | SELL | $116.75 | Tendencia de corto plazo bajista: SMA20 (133.39) por debajo de SMA50 (146.35). |
| IBKR | Financials | -68 | SELL | $77.75 | Tendencia de corto plazo bajista: SMA20 (82.49) por debajo de SMA50 (87.29). |
| KLAC | Information Technology | -68 | SELL | $148.24 | Tendencia de corto plazo bajista: SMA20 (165.75) por debajo de SMA50 (176.79). |
| LITE | Information Technology | -68 | SELL | $611.54 | Tendencia de corto plazo bajista: SMA20 (853.82) por debajo de SMA50 (910.78). |
| AMAT | Information Technology | -69 | SELL | $363.94 | Tendencia de corto plazo bajista: SMA20 (418.79) por debajo de SMA50 (450.94). |
| SNDK | Information Technology | -69 | SELL | $1029.73 | Tendencia de corto plazo bajista: SMA20 (1327.48) por debajo de SMA50 (1531.14). |
| FLEX | Information Technology | -70 | SELL | $77.15 | Tendencia de corto plazo bajista: SMA20 (92.44) por debajo de SMA50 (104.15). |
| STX | Information Technology | -70 | SELL | $560.11 | Tendencia de corto plazo bajista: SMA20 (676.12) por debajo de SMA50 (784.70). |
| SMCI | Information Technology | -72 | SELL | $29.69 | Tendencia de corto plazo bajista: SMA20 (34.77) por debajo de SMA50 (37.84). |
| FICO | Information Technology | -73 | SELL | $716.10 | Tendencia de corto plazo bajista: SMA20 (739.82) por debajo de SMA50 (845.58). |
| BE | Industrials | -74 | SELL | $196.84 | Tendencia de corto plazo bajista: SMA20 (227.88) por debajo de SMA50 (247.90). |
| WDC | Information Technology | -76 | SELL | $325.99 | Tendencia de corto plazo bajista: SMA20 (365.53) por debajo de SMA50 (414.76). |

#### Detalle de razonamiento (señales destacadas)

**HCA** (score 71, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (465.16) por encima de SMA50 (440.33).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.7%.
  - RSI 65: zona neutral.
**ADSK** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (244.71) por encima de SMA50 (232.89).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.8%.
  - RSI 67: zona neutral.
**GDDY** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (108.75) por encima de SMA50 (102.46).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.5%.
  - RSI 64: zona neutral.
**ACN** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (237.40) por encima de SMA50 (206.23).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.9%.
  - RSI 70: sobrecompra, riesgo de corrección.
**STZ** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (131.61) por encima de SMA50 (124.84).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.9%.
  - RSI 71: sobrecompra, riesgo de corrección.
**EL** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (105.23) por encima de SMA50 (100.58).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.6%.
  - RSI 60: zona neutral.
**ISRG** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (437.18) por encima de SMA50 (406.30).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.1%.
  - RSI 72: sobrecompra, riesgo de corrección.
**BF-B** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (28.42) por encima de SMA50 (27.21).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 60: zona neutral.
**CCL** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (27.44) por encima de SMA50 (25.11).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 14.2%.
  - RSI 74: sobrecompra, riesgo de corrección.
**RL** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (385.07) por encima de SMA50 (362.65).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.9%.
  - RSI 62: zona neutral.
**ULTA** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (611.46) por encima de SMA50 (571.54).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.7%.
  - RSI 67: zona neutral.
**CCI** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (83.13) por encima de SMA50 (76.27).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 16.9%.
  - RSI 75: sobrecompra, riesgo de corrección.
**LMT** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (576.50) por encima de SMA50 (547.71).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.2%.
  - RSI 66: zona neutral.
**RCL** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (291.94) por encima de SMA50 (273.16).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 15.6%.
  - RSI 76: sobrecompra, riesgo de corrección.
**WMT** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (119.08) por encima de SMA50 (111.58).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.7%.
  - RSI 74: sobrecompra, riesgo de corrección.
**MAR** (score 50, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (391.40) por encima de SMA50 (363.85).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.0%.
  - RSI 76: sobrecompra, riesgo de corrección.
**TMO** (score 44, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (683.95) por encima de SMA50 (658.50).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.4%.
  - RSI 53: zona neutral.
**VEEV** (score 42, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (309.73) por encima de SMA50 (287.42).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.0%.
  - RSI 48: zona neutral.
**CRL** (score 34, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (330.14) por encima de SMA50 (304.54).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.6%.
  - RSI 58: zona neutral.
**COHR** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (240.11) por debajo de SMA50 (274.50).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.2%.
  - RSI 30: zona neutral.
**COIN** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (165.79) por debajo de SMA50 (177.38).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.2%.
  - RSI 31: zona neutral.
**FIX** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1393.14) por debajo de SMA50 (1536.59).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -22.3%.
  - RSI 30: zona neutral.
**GLW** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (133.39) por debajo de SMA50 (146.35).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.5%.
  - RSI 29: sobreventa, posible rebote.
**IBKR** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (82.49) por debajo de SMA50 (87.29).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.9%.
  - RSI 36: zona neutral.
**KLAC** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (165.75) por debajo de SMA50 (176.79).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.3%.
  - RSI 34: zona neutral.
**LITE** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (853.82) por debajo de SMA50 (910.78).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -28.1%.
  - RSI 31: zona neutral.
**AMAT** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (418.79) por debajo de SMA50 (450.94).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.0%.
  - RSI 32: zona neutral.
**SNDK** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (1327.48) por debajo de SMA50 (1531.14).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -25.3%.
  - RSI 31: zona neutral.
**FLEX** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (92.44) por debajo de SMA50 (104.15).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.5%.
  - RSI 33: zona neutral.
**STX** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (676.12) por debajo de SMA50 (784.70).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.6%.
  - RSI 34: zona neutral.
**SMCI** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (34.77) por debajo de SMA50 (37.84).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.5%.
  - RSI 37: zona neutral.
**FICO** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (739.82) por debajo de SMA50 (845.58).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.9%.
  - RSI 39: zona neutral.
**BE** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (227.88) por debajo de SMA50 (247.90).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -17.5%.
  - RSI 39: zona neutral.
**WDC** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (365.53) por debajo de SMA50 (414.76).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.9%.
  - RSI 44: zona neutral.

---
_Generado automáticamente el 2026-11-04T20:08:07.688Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se encontró cobertura periodística fechada el 2026-11-04 (cierre de S&P 500/Nasdaq, noticias del core ni de los tickers del satellite): las búsquedas devolvieron solo material de años anteriores o sin fecha. Por honestidad, no se atribuye el movimiento del día a ninguna noticia. Además, research-notes de hoy salió vacío (Yahoo Finance inalcanzable desde el entorno), así que no hay veredicto contra el cual contrastar.

### Core (largo plazo)
Sin noticias relevantes verificadas.

### Satellite (técnico)
Sin noticias relevantes verificadas. (Contexto no verificado de una búsqueda: ISRG acumulaba caída en 2026 según páginas sin fecha clara.)

Fuentes consultadas (sin datos útiles del día):
- [How major US stock indexes fared Tuesday, 11/4/2025](https://wtop.com/news/2025/11/how-major-us-stock-indexes-fared-tuesday-11-4-2025) (año anterior, no aplica)
- [Intuitive Surgical, Inc. (ISRG) — StockAnalysis](https://stockanalysis.com/stocks/ISRG/)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.

_Chequeo de alertas: ninguna condición se cumplió (0 ventas, sin sellTriggers, valor total subió). No se envió email._
