# Reporte diario de inversión (simulado) — 2026-11-19

> 🚨 **ALERTA ACTIVA 2026-11-19:** (a) hubo una venta en el satellite: VEEV por stop-loss (-16.7% vs entrada, umbral -12%); (b) JNJ (core, posición abierta) tiene gatillo de salida en research notes (payout ratio >100% haría insostenible el dividendo). (c) La caída total de hoy fue ~-2.2% (no superó el 3%). **El email de alerta NO se pudo enviar**: el conector de Gmail devolvió "missing a permission" (hay que reconectar Gmail y otorgar permiso de envío).


> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$965.07**
- P&L acumulado: $-34.93 (-3.49%)
- Core (70%, largo plazo): $691.06 (-1.28%) | Satellite (30%, técnico): $274.02 (-8.66%)

**Régimen de mercado: BAJISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 27.50 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: +1.9 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.91 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: 0.45 pts — normal.
- **Índice dólar (DXY)**: 103.91 (variación 10d: +1.61)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $265.86 | $71.68 | 10.4% | $1.68 (+2.41%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $168.29 | $74.46 | 10.8% | $4.46 (+6.38%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $96.18 | $72.60 | 10.5% | $2.60 (+3.72%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $158.64 | $62.63 | 9.1% | $-7.37 (-10.53%) | $1.0700/acción (2026-11-16) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $206.00 | $64.15 | 9.3% | $-5.85 (-8.35%) | $1.7800/acción (2026-11-18) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $320.08 | $66.74 | 9.7% | $-3.26 (-4.66%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $499.33 | $65.61 | 9.5% | $-4.39 (-6.27%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $401.63 | $69.08 | 10.0% | $-0.92 (-1.31%) | $0.7800/acción (2026-11-10) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $570.86 | $72.74 | 10.5% | $2.74 (+3.91%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $286.49 | $71.35 | 10.3% | $1.70 (+2.45%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| ISRG | Health Care | 0.221 | $438.48 | $405.77 | $89.80 | 32.8% | $-7.24 (-7.46%) |
| TMO | Health Care | 0.114 | $690.08 | $687.43 | $78.68 | 28.7% | $-0.30 (-0.38%) |
| CRL | Health Care | 0.062 | $339.66 | $327.24 | $20.33 | 7.4% | $-0.77 (-3.66%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $414.76 | $11.05 | 4.0% | $0.48 (+4.53%) |
| J | Industrials | 0.327 | $154.68 | $154.68 | $50.55 | 18.4% | $0.00 (0.00%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.62**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.23** → N efectivo ajustado por correlación: **2.27**
- Por sector: Health Care 75% · Industrials 20% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

- **VENTA VEEV** — 0.226 shares a $262.80 ($59.43). _Stop-loss: precio -16.7% desde el precio de entrada (umbral -12%)._
- **COMPRA J** — 0.327 shares a $154.68 ($50.55). _Señal técnica de compra (score 64): Tendencia de corto plazo alcista: SMA20 (154.67) por encima de SMA50 (146.21). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 4.8%. RSI 50: zona neutral._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| CRL | Health Care | 70 | BUY | $327.24 | Tendencia de corto plazo alcista: SMA20 (344.35) por encima de SMA50 (315.22). |
| J | Industrials | 64 | BUY | $154.68 | Tendencia de corto plazo alcista: SMA20 (154.67) por encima de SMA50 (146.21). |
| NXPI | Information Technology | 64 | BUY | $253.36 | Tendencia de corto plazo alcista: SMA20 (256.09) por encima de SMA50 (242.17). |
| FERG | Industrials | 62 | BUY | $247.55 | Tendencia de corto plazo alcista: SMA20 (244.71) por encima de SMA50 (231.01). |
| URI | Industrials | 62 | BUY | $1059.90 | Tendencia de corto plazo alcista: SMA20 (1122.45) por encima de SMA50 (1070.30). |
| CDW | Information Technology | 61 | BUY | $167.69 | Tendencia de corto plazo alcista: SMA20 (163.65) por encima de SMA50 (152.39). |
| TXN | Information Technology | 61 | BUY | $286.49 | Tendencia de corto plazo alcista: SMA20 (299.03) por encima de SMA50 (285.54). |
| APA | Energy | 59 | BUY | $44.67 | Tendencia de corto plazo alcista: SMA20 (47.79) por encima de SMA50 (46.23). |
| EOG | Energy | 59 | BUY | $149.46 | Tendencia de corto plazo alcista: SMA20 (155.29) por encima de SMA50 (150.03). |
| LMT | Industrials | 59 | BUY | $570.86 | Tendencia de corto plazo alcista: SMA20 (605.96) por encima de SMA50 (557.72). |
| VTRS | Health Care | 59 | BUY | $19.87 | Tendencia de corto plazo alcista: SMA20 (19.65) por encima de SMA50 (18.41). |
| WST | Health Care | 59 | BUY | $394.27 | Tendencia de corto plazo alcista: SMA20 (406.37) por encima de SMA50 (385.40). |
| BIIB | Health Care | 58 | BUY | $246.62 | Tendencia de corto plazo alcista: SMA20 (250.68) por encima de SMA50 (236.17). |
| REGN | Health Care | 58 | BUY | $927.03 | Tendencia de corto plazo alcista: SMA20 (907.30) por encima de SMA50 (827.05). |
| HST | Real Estate | 54 | BUY | $24.59 | Tendencia de corto plazo alcista: SMA20 (25.36) por encima de SMA50 (23.78). |
| MAR | Consumer Discretionary | 42 | BUY | $414.76 | Tendencia de corto plazo alcista: SMA20 (413.59) por encima de SMA50 (382.07). |
| TMO | Health Care | 40 | BUY | $687.43 | Tendencia de corto plazo alcista: SMA20 (696.82) por encima de SMA50 (677.25). |
| ISRG | Health Care | 5 | HOLD | $405.77 | Tendencia de corto plazo alcista: SMA20 (444.72) por encima de SMA50 (422.88). |
| FIS | Financials | -63 | SELL | $25.73 | Tendencia de corto plazo bajista: SMA20 (32.12) por debajo de SMA50 (33.99). |
| BG | Consumer Staples | -64 | SELL | $91.21 | Tendencia de corto plazo bajista: SMA20 (97.66) por debajo de SMA50 (104.27). |
| XYL | Industrials | -65 | SELL | $95.13 | Tendencia de corto plazo bajista: SMA20 (96.70) por debajo de SMA50 (101.32). |
| COIN | Financials | -66 | SELL | $109.99 | Tendencia de corto plazo bajista: SMA20 (138.81) por debajo de SMA50 (165.28). |
| FCX | Materials | -66 | SELL | $49.26 | Tendencia de corto plazo bajista: SMA20 (60.59) por debajo de SMA50 (66.72). |
| NOW | Information Technology | -66 | SELL | $88.26 | Tendencia de corto plazo bajista: SMA20 (112.22) por debajo de SMA50 (128.77). |
| SKYD | Communication Services | -67 | SELL | $6.31 | Tendencia de corto plazo bajista: SMA20 (7.70) por debajo de SMA50 (8.68). |
| SMCI | Information Technology | -67 | SELL | $24.04 | Tendencia de corto plazo bajista: SMA20 (29.47) por debajo de SMA50 (35.37). |
| HOOD | Financials | -68 | SELL | $69.19 | Tendencia de corto plazo bajista: SMA20 (82.74) por debajo de SMA50 (99.49). |
| TWLO | Information Technology | -70 | SELL | $181.57 | Tendencia de corto plazo bajista: SMA20 (217.67) por debajo de SMA50 (249.51). |
| ALB | Materials | -71 | SELL | $82.73 | Tendencia de corto plazo bajista: SMA20 (93.17) por debajo de SMA50 (100.37). |
| MOS | Materials | -71 | SELL | $19.58 | Tendencia de corto plazo bajista: SMA20 (20.34) por debajo de SMA50 (21.04). |
| DASH | Consumer Discretionary | -72 | SELL | $158.47 | Tendencia de corto plazo bajista: SMA20 (175.95) por debajo de SMA50 (185.15). |
| NFLX | Communication Services | -73 | SELL | $58.26 | Tendencia de corto plazo bajista: SMA20 (62.73) por debajo de SMA50 (67.81). |
| ARE | Real Estate | -75 | SELL | $41.94 | Tendencia de corto plazo bajista: SMA20 (43.14) por debajo de SMA50 (45.62). |

#### Detalle de razonamiento (señales destacadas)

**CRL** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (344.35) por encima de SMA50 (315.22).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.5%.
  - RSI 39: zona neutral.
**J** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (154.67) por encima de SMA50 (146.21).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.8%.
  - RSI 50: zona neutral.
**NXPI** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (256.09) por encima de SMA50 (242.17).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.7%.
  - RSI 46: zona neutral.
**FERG** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (244.71) por encima de SMA50 (231.01).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.0%.
  - RSI 55: zona neutral.
**URI** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1122.45) por encima de SMA50 (1070.30).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.7%.
  - RSI 36: zona neutral.
**CDW** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (163.65) por encima de SMA50 (152.39).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.9%.
  - RSI 60: zona neutral.
**TXN** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (299.03) por encima de SMA50 (285.54).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.0%.
  - RSI 44: zona neutral.
**APA** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (47.79) por encima de SMA50 (46.23).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.7%.
  - RSI 28: sobreventa, posible rebote.
**EOG** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (155.29) por encima de SMA50 (150.03).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.2%.
  - RSI 31: zona neutral.
**LMT** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (605.96) por encima de SMA50 (557.72).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.9%.
  - RSI 31: zona neutral.
**VTRS** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (19.65) por encima de SMA50 (18.41).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.7%.
  - RSI 59: zona neutral.
**WST** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (406.37) por encima de SMA50 (385.40).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.5%.
  - RSI 38: zona neutral.
**BIIB** (score 58, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (250.68) por encima de SMA50 (236.17).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.1%.
  - RSI 43: zona neutral.
**REGN** (score 58, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (907.30) por encima de SMA50 (827.05).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.7%.
  - RSI 50: zona neutral.
**HST** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (25.36) por encima de SMA50 (23.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.1%.
  - RSI 43: zona neutral.
**MAR** (score 42, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (413.59) por encima de SMA50 (382.07).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.6%.
  - RSI 61: zona neutral.
**TMO** (score 40, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (696.82) por encima de SMA50 (677.25).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.5%.
  - RSI 47: zona neutral.
**ISRG** (score 5, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (444.72) por encima de SMA50 (422.88).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.4%.
  - RSI 41: zona neutral.
**FIS** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (32.12) por debajo de SMA50 (33.99).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.5%.
  - RSI 21: sobreventa, posible rebote.
**BG** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (97.66) por debajo de SMA50 (104.27).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.8%.
  - RSI 40: zona neutral.
**XYL** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (96.70) por debajo de SMA50 (101.32).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.9%.
  - RSI 56: zona neutral.
**COIN** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (138.81) por debajo de SMA50 (165.28).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.6%.
  - RSI 27: sobreventa, posible rebote.
**FCX** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (60.59) por debajo de SMA50 (66.72).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.9%.
  - RSI 27: sobreventa, posible rebote.
**NOW** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (112.22) por debajo de SMA50 (128.77).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.8%.
  - RSI 27: sobreventa, posible rebote.
**SKYD** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (7.70) por debajo de SMA50 (8.68).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -22.6%.
  - RSI 29: sobreventa, posible rebote.
**SMCI** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (29.47) por debajo de SMA50 (35.37).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.2%.
  - RSI 28: sobreventa, posible rebote.
**HOOD** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (82.74) por debajo de SMA50 (99.49).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.7%.
  - RSI 30: sobreventa, posible rebote.
**TWLO** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (217.67) por debajo de SMA50 (249.51).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.6%.
  - RSI 36: zona neutral.
**ALB** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (93.17) por debajo de SMA50 (100.37).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.9%.
  - RSI 35: zona neutral.
**MOS** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (20.34) por debajo de SMA50 (21.04).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.3%.
  - RSI 56: zona neutral.
**DASH** (score -72, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (175.95) por debajo de SMA50 (185.15).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.9%.
  - RSI 37: zona neutral.
**NFLX** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (62.73) por debajo de SMA50 (67.81).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.1%.
  - RSI 38: zona neutral.
**ARE** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (43.14) por debajo de SMA50 (45.62).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.2%.
  - RSI 57: zona neutral.

---
_Generado automáticamente el 2026-11-19T20:06:44.599Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._

## Análisis cualitativo de cierre (agente con búsqueda web)

Búsquedas web realizadas, pero **no se encontraron noticias fechadas hoy (2026-11-19)**: los resultados más recientes de índices son del 11-13-2026 (S&P 500 y Nasdaq a la baja, WTI ~$88.5) y el resto es de fechas anteriores. No se puede atribuir con certeza el movimiento de hoy a una noticia concreta; los datos propios muestran un día débil (portfolio -2.2%, VIX 27.5, régimen BAJISTA, dólar +1.6 pts en 10d).

### Core (largo plazo)

- **XOM / CVX:** ambas lideran las pérdidas del core (-10.5% y -8.4% vs costo). Una nota sin fecha clara de Yahoo Finance las vincula a la baja del crudo por distensión con Irán; ambas superaron estimaciones del Q3 el 30-10-2026. No contradice el caso alcista de CVX (research notes: 4/4 beats, analistas más optimistas), pero la debilidad del petróleo sigue siendo el riesgo principal. Noticia no verificada para hoy.

### Satellite (técnico)

- **VEEV (vendida por stop-loss):** hay cobertura de una caída sostenida del año (-20% a -30% YTD, recortes de objetivos por márgenes y transición de CRM), consistente con la salida técnica; no se halló un evento específico de hoy.
- **ISRG:** sin noticia de hoy; fundamentales del Q3 sólidos (ingresos +22%), pero cotiza -7.5% bajo su costo.

### Fuentes

- [Stock market news for Nov 12 2026 (Zacks)](https://www.zacks.com/stock/news/3028272/stock-market-news-for-nov-12-2026)
- [How major US stock indexes fared Thursday 11/12/2026 (La Nación/AP)](https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-thursday-11122026-nid12112026/)
- [ExxonMobil and Chevron top Q3 estimates](https://www.news4jax.com/business/2026/10/30/exxonmobil-and-chevron-top-q3-estimates-on-higher-prices-and-strong-output/)
- [Exxon Mobil, Chevron fall (Yahoo Finance)](https://finance.yahoo.com/sectors/energy/articles/exxon-mobil-chevron-fall-5-181337458.html)
- [2 reasons to watch VEEV and 1 to stay cautious (Barchart)](https://www.barchart.com/story/news/3199841/2-reasons-to-watch-veev-and-1-to-stay-cautious)
- [Intuitive Surgical Q3 revenue rises 22% (Quiver)](https://www.quiverquant.com/news/Intuitive+Q3+Revenue+Rises+22%25+to+$3.05+Billion)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
