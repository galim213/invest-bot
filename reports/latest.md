🚨 **ALERTA 2026-11-25:** se cumplió la condición (b): JNJ (posición abierta del core) tiene un sellTrigger activo en research-notes (payout ratio >100% haría insostenible el dividendo). El email de alerta NO se pudo enviar (el conector de Gmail no tiene el permiso necesario).

# Reporte diario de inversión (simulado) — 2026-11-25

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$976.86**
- P&L acumulado: $-23.14 (-2.31%)
- Core (70%, largo plazo): $700.79 (+0.11%) | Satellite (30%, técnico): $276.08 (-7.97%)

**Régimen de mercado: BAJISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 27.98 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: +9.3 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.69 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.66 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 103.66 (variación 10d: +0.49)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $275.36 | $74.25 | 10.6% | $4.25 (+6.06%) | $1.3400/acción (2026-11-24) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $173.52 | $76.78 | 11.0% | $6.78 (+9.68%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $98.24 | $74.16 | 10.6% | $4.16 (+5.95%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $159.13 | $62.82 | 9.0% | $-7.18 (-10.25%) | $1.0700/acción (2026-11-16) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $211.64 | $65.91 | 9.4% | $-4.09 (-5.85%) | $1.7800/acción (2026-11-18) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $317.23 | $66.14 | 9.4% | $-3.86 (-5.51%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $490.45 | $64.44 | 9.2% | $-5.56 (-7.94%) | $0.9800/acción (2026-11-19) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $425.77 | $73.24 | 10.5% | $3.24 (+4.62%) | $0.7800/acción (2026-11-10) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $599.26 | $76.35 | 10.9% | $6.35 (+9.08%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $267.77 | $66.69 | 9.5% | $-2.96 (-4.25%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| ISRG | Health Care | 0.221 | $438.48 | $427.02 | $94.50 | 34.2% | $-2.54 (-2.61%) |
| TMO | Health Care | 0.114 | $690.08 | $686.05 | $78.52 | 28.4% | $-0.46 (-0.58%) |
| CRL | Health Care | 0.062 | $339.66 | $332.23 | $20.64 | 7.5% | $-0.46 (-2.19%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $416.50 | $11.09 | 4.0% | $0.52 (+4.96%) |
| J | Industrials | 0.327 | $154.68 | $145.77 | $47.64 | 17.3% | $-2.91 (-5.76%) |
| ALL | Financials | 0.038 | $268.70 | $270.64 | $10.21 | 3.7% | $0.07 (+0.72%) |

### Concentración y correlación (informativo)

- Posiciones: 6 · N efectivo por peso (1/HHI): **3.83**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.20** → N efectivo ajustado por correlación: **2.46**
- Por sector: Health Care 74% · Industrials 18% · Consumer Discretionary 4% · Financials 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| BRO | Financials | 73 | BUY | $78.56 | Tendencia de corto plazo alcista: SMA20 (72.41) por encima de SMA50 (67.78). |
| DPZ | Consumer Discretionary | 69 | BUY | $361.00 | Tendencia de corto plazo alcista: SMA20 (338.95) por encima de SMA50 (317.33). |
| TSCO | Consumer Discretionary | 66 | BUY | $39.98 | Tendencia de corto plazo alcista: SMA20 (36.90) por encima de SMA50 (34.17). |
| DHI | Consumer Discretionary | 65 | BUY | $157.34 | Tendencia de corto plazo alcista: SMA20 (148.63) por encima de SMA50 (142.64). |
| SYK | Health Care | 64 | BUY | $332.98 | Tendencia de corto plazo alcista: SMA20 (317.76) por encima de SMA50 (297.97). |
| ERIE | Financials | 62 | BUY | $280.88 | Tendencia de corto plazo alcista: SMA20 (272.29) por encima de SMA50 (248.45). |
| PHM | Consumer Discretionary | 62 | BUY | $134.57 | Tendencia de corto plazo alcista: SMA20 (128.79) por encima de SMA50 (121.28). |
| YUM | Consumer Discretionary | 62 | BUY | $167.33 | Tendencia de corto plazo alcista: SMA20 (161.13) por encima de SMA50 (150.60). |
| AOS | Industrials | 61 | BUY | $67.25 | Tendencia de corto plazo alcista: SMA20 (64.65) por encima de SMA50 (60.64). |
| HRL | Consumer Staples | 61 | BUY | $22.84 | Tendencia de corto plazo alcista: SMA20 (22.34) por encima de SMA50 (20.93). |
| KHC | Consumer Staples | 61 | BUY | $26.43 | Tendencia de corto plazo alcista: SMA20 (24.93) por encima de SMA50 (24.00). |
| AZO | Consumer Discretionary | 60 | BUY | $3416.35 | Tendencia de corto plazo alcista: SMA20 (3263.83) por encima de SMA50 (3082.90). |
| DLTR | Consumer Staples | 60 | BUY | $151.57 | Tendencia de corto plazo alcista: SMA20 (139.97) por encima de SMA50 (127.13). |
| AON | Financials | 59 | BUY | $348.79 | Tendencia de corto plazo alcista: SMA20 (335.37) por encima de SMA50 (304.86). |
| AJG | Financials | 59 | BUY | $293.46 | Tendencia de corto plazo alcista: SMA20 (281.23) por encima de SMA50 (257.19). |
| ALL | Financials | 57 | BUY | $270.64 | Tendencia de corto plazo alcista: SMA20 (264.54) por encima de SMA50 (248.24). |
| MAR | Consumer Discretionary | 42 | BUY | $416.50 | Tendencia de corto plazo alcista: SMA20 (417.26) por encima de SMA50 (387.61). |
| CRL | Health Care | 36 | BUY | $332.23 | Tendencia de corto plazo alcista: SMA20 (338.66) por encima de SMA50 (319.69). |
| J | Industrials | 29 | HOLD | $145.77 | Tendencia de corto plazo alcista: SMA20 (155.38) por encima de SMA50 (146.84). |
| ISRG | Health Care | 28 | HOLD | $427.02 | Tendencia de corto plazo alcista: SMA20 (438.93) por encima de SMA50 (426.32). |
| TMO | Health Care | 12 | HOLD | $686.05 | Tendencia de corto plazo alcista: SMA20 (696.06) por encima de SMA50 (681.82). |
| VRT | Industrials | -79 | SELL | $173.44 | Tendencia de corto plazo bajista: SMA20 (198.65) por debajo de SMA50 (219.35). |
| AMD | Information Technology | -80 | SELL | $403.22 | Tendencia de corto plazo bajista: SMA20 (489.08) por debajo de SMA50 (548.29). |
| FLEX | Information Technology | -80 | SELL | $67.51 | Tendencia de corto plazo bajista: SMA20 (76.15) por debajo de SMA50 (92.99). |
| LRCX | Information Technology | -80 | SELL | $182.62 | Tendencia de corto plazo bajista: SMA20 (215.34) por debajo de SMA50 (262.74). |
| STX | Information Technology | -80 | SELL | $471.41 | Tendencia de corto plazo bajista: SMA20 (531.72) por debajo de SMA50 (686.12). |
| TER | Information Technology | -80 | SELL | $210.95 | Tendencia de corto plazo bajista: SMA20 (242.10) por debajo de SMA50 (320.92). |
| WDC | Information Technology | -80 | SELL | $270.75 | Tendencia de corto plazo bajista: SMA20 (302.71) por debajo de SMA50 (364.94). |
| ANET | Information Technology | -81 | SELL | $163.38 | Tendencia de corto plazo bajista: SMA20 (180.11) por debajo de SMA50 (190.65). |
| CIEN | Information Technology | -81 | SELL | $239.47 | Tendencia de corto plazo bajista: SMA20 (272.12) por debajo de SMA50 (330.26). |
| IBKR | Financials | -81 | SELL | $74.64 | Tendencia de corto plazo bajista: SMA20 (77.11) por debajo de SMA50 (82.76). |
| INTC | Information Technology | -81 | SELL | $53.66 | Tendencia de corto plazo bajista: SMA20 (59.32) por debajo de SMA50 (87.68). |
| KLAC | Information Technology | -81 | SELL | $133.31 | Tendencia de corto plazo bajista: SMA20 (146.98) por debajo de SMA50 (166.67). |
| VST | Utilities | -81 | SELL | $121.47 | Tendencia de corto plazo bajista: SMA20 (128.30) por debajo de SMA50 (139.57). |
| KEYS | Information Technology | -82 | SELL | $268.38 | Tendencia de corto plazo bajista: SMA20 (288.86) por debajo de SMA50 (327.48). |
| COHR | Information Technology | -84 | SELL | $195.74 | Tendencia de corto plazo bajista: SMA20 (208.72) por debajo de SMA50 (251.74). |

#### Detalle de razonamiento (señales destacadas)

**BRO** (score 73, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (72.41) por encima de SMA50 (67.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.0%.
  - RSI 62: zona neutral.
**DPZ** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (338.95) por encima de SMA50 (317.33).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.9%.
  - RSI 68: zona neutral.
**TSCO** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (36.90) por encima de SMA50 (34.17).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.5%.
  - RSI 71: sobrecompra, riesgo de corrección.
**DHI** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (148.63) por encima de SMA50 (142.64).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.0%.
  - RSI 50: zona neutral.
**SYK** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (317.76) por encima de SMA50 (297.97).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.5%.
  - RSI 48: zona neutral.
**ERIE** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (272.29) por encima de SMA50 (248.45).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.2%.
  - RSI 46: zona neutral.
**PHM** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (128.79) por encima de SMA50 (121.28).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.9%.
  - RSI 49: zona neutral.
**YUM** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (161.13) por encima de SMA50 (150.60).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.4%.
  - RSI 53: zona neutral.
**AOS** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (64.65) por encima de SMA50 (60.64).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.1%.
  - RSI 53: zona neutral.
**HRL** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (22.34) por encima de SMA50 (20.93).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.1%.
  - RSI 53: zona neutral.
**KHC** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (24.93) por encima de SMA50 (24.00).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 61: zona neutral.
**AZO** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (3263.83) por encima de SMA50 (3082.90).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.5%.
  - RSI 62: zona neutral.
**DLTR** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (139.97) por encima de SMA50 (127.13).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.1%.
  - RSI 63: zona neutral.
**AON** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (335.37) por encima de SMA50 (304.86).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.6%.
  - RSI 54: zona neutral.
**AJG** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (281.23) por encima de SMA50 (257.19).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.1%.
  - RSI 55: zona neutral.
**ALL** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (264.54) por encima de SMA50 (248.24).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.2%.
  - RSI 55: zona neutral.
**MAR** (score 42, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (417.26) por encima de SMA50 (387.61).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.8%.
  - RSI 50: zona neutral.
**CRL** (score 36, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (338.66) por encima de SMA50 (319.69).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.1%.
  - RSI 59: zona neutral.
**J** (score 29, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (155.38) por encima de SMA50 (146.84).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -7.4%.
  - RSI 48: zona neutral.
**ISRG** (score 28, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (438.93) por encima de SMA50 (426.32).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -5.0%.
  - RSI 35: zona neutral.
**TMO** (score 12, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (696.06) por encima de SMA50 (681.82).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -4.4%.
  - RSI 53: zona neutral.
**VRT** (score -79, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (198.65) por debajo de SMA50 (219.35).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.0%.
  - RSI 49: zona neutral.
**AMD** (score -80, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (489.08) por debajo de SMA50 (548.29).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -27.1%.
  - RSI 50: zona neutral.
**FLEX** (score -80, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (76.15) por debajo de SMA50 (92.99).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.5%.
  - RSI 51: zona neutral.
**LRCX** (score -80, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (215.34) por debajo de SMA50 (262.74).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -22.6%.
  - RSI 49: zona neutral.
**STX** (score -80, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (531.72) por debajo de SMA50 (686.12).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.6%.
  - RSI 51: zona neutral.
**TER** (score -80, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (242.10) por debajo de SMA50 (320.92).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -20.6%.
  - RSI 50: zona neutral.
**WDC** (score -80, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (302.71) por debajo de SMA50 (364.94).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.6%.
  - RSI 51: zona neutral.
**ANET** (score -81, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (180.11) por debajo de SMA50 (190.65).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.9%.
  - RSI 52: zona neutral.
**CIEN** (score -81, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (272.12) por debajo de SMA50 (330.26).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.1%.
  - RSI 52: zona neutral.
**IBKR** (score -81, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (77.11) por debajo de SMA50 (82.76).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.5%.
  - RSI 53: zona neutral.
**INTC** (score -81, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (59.32) por debajo de SMA50 (87.68).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.1%.
  - RSI 52: zona neutral.
**KLAC** (score -81, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (146.98) por debajo de SMA50 (166.67).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -17.1%.
  - RSI 52: zona neutral.
**VST** (score -81, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (128.30) por debajo de SMA50 (139.57).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.0%.
  - RSI 57: zona neutral.
**KEYS** (score -82, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (288.86) por debajo de SMA50 (327.48).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.2%.
  - RSI 53: zona neutral.
**COHR** (score -84, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (208.72) por debajo de SMA50 (251.74).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -16.5%.
  - RSI 56: zona neutral.

---
_Generado automáticamente el 2026-11-25T20:07:16.566Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

Las búsquedas web no devolvieron ninguna crónica de cierre ni noticia puntual del 2026-11-25 (los resultados más recientes son de mediados de noviembre), así que no se puede atribuir el movimiento de hoy a una noticia concreta. Contexto verificable del reporte: VIX 27.98 (elevado), spread de crédito en estrés y régimen BAJISTA; el core subió +0.11% y el satellite bajó (-7.97% acumulado). Referencia de semanas previas: el S&P 500 cayó 1% el 17/11 por una venta en tecnología y 0.2% el 18/11 ([How major US stock indexes fared Tuesday 11/17/2026](https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-tuesday-11172026-nid17112026/), [Wednesday 11/18/2026](https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-wednesday-11182026-nid18112026/)).

### Core (largo plazo)
Sin noticias relevantes del día encontradas para los 10 tickers; se mantiene el veredicto de research-notes-latest.md. Único flag a vigilar: JNJ tiene un gatillo de venta activo (payout ratio por encima de 100% haría insostenible el dividendo).

### Satellite (técnico)
Sin noticias relevantes del día encontradas para las posiciones ni para las señales destacadas.

**Fuentes:** [Stock market news for Nov 18, 2026 (Zacks)](https://www.zacks.com/stock/news/3031665/stock-market-news-for-nov-18-2026)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
