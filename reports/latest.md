> 🚨 **ALERTA 2026-11-24:** se cumplió la condición (b): la posición abierta del core JNJ tiene un sellTrigger activo en research-notes ("Si el payout ratio sigue subiendo por encima del 100%, el dividendo actual no es sostenible con las ganancias actuales."). Sin ventas del satellite hoy y sin caída >3%. **El email de alerta NO se pudo enviar** (el conector Gmail carece del permiso necesario).

# Reporte diario de inversión (simulado) — 2026-11-24

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$975.31**
- P&L acumulado: $-24.69 (-2.47%)
- Core (70%, largo plazo): $694.85 (-0.74%) | Satellite (30%, técnico): $280.45 (-6.52%)

**Régimen de mercado: BAJISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 27.08 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: +9.6 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.74 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.06 pts — normal.
- **Índice dólar (DXY)**: 103.83 (variación 10d: +0.92)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $275.87 | $74.38 | 10.7% | $4.38 (+6.26%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $172.09 | $76.15 | 11.0% | $6.15 (+8.78%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $97.67 | $73.73 | 10.6% | $3.73 (+5.33%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $158.76 | $62.68 | 9.0% | $-7.32 (-10.46%) | $1.0700/acción (2026-11-16) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $209.76 | $65.32 | 9.4% | $-4.68 (-6.68%) | $1.7800/acción (2026-11-18) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $316.21 | $65.93 | 9.5% | $-4.07 (-5.81%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $493.62 | $64.86 | 9.3% | $-5.14 (-7.34%) | $0.9800/acción (2026-11-19) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $415.30 | $71.43 | 10.3% | $1.43 (+2.05%) | $0.7800/acción (2026-11-10) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $589.77 | $75.15 | 10.8% | $5.15 (+7.35%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $261.87 | $65.22 | 9.4% | $-4.43 (-6.36%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| ISRG | Health Care | 0.221 | $438.48 | $432.54 | $95.72 | 34.1% | $-1.32 (-1.36%) |
| TMO | Health Care | 0.114 | $690.08 | $695.52 | $79.61 | 28.4% | $0.62 (+0.79%) |
| CRL | Health Care | 0.062 | $339.66 | $338.52 | $21.03 | 7.5% | $-0.07 (-0.34%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $414.30 | $11.03 | 3.9% | $0.47 (+4.41%) |
| J | Industrials | 0.327 | $154.68 | $151.15 | $49.39 | 17.6% | $-1.15 (-2.28%) |
| ALL | Financials | 0.038 | $268.70 | $270.28 | $10.20 | 3.6% | $0.06 (+0.59%) |

### Concentración y correlación (informativo)

- Posiciones: 6 · N efectivo por peso (1/HHI): **3.83**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.20** → N efectivo ajustado por correlación: **2.44**
- Por sector: Health Care 74% · Industrials 19% · Consumer Discretionary 4% · Financials 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| DLTR | Consumer Staples | 74 | BUY | $154.01 | Tendencia de corto plazo alcista: SMA20 (138.71) por encima de SMA50 (126.34). |
| DPZ | Consumer Discretionary | 64 | BUY | $355.42 | Tendencia de corto plazo alcista: SMA20 (336.32) por encima de SMA50 (316.12). |
| REGN | Health Care | 64 | BUY | $980.99 | Tendencia de corto plazo alcista: SMA20 (927.08) por encima de SMA50 (836.07). |
| BIIB | Health Care | 61 | BUY | $269.00 | Tendencia de corto plazo alcista: SMA20 (251.68) por encima de SMA50 (238.67). |
| BRO | Financials | 61 | BUY | $75.00 | Tendencia de corto plazo alcista: SMA20 (71.72) por encima de SMA50 (67.51). |
| YUM | Consumer Discretionary | 61 | BUY | $165.90 | Tendencia de corto plazo alcista: SMA20 (160.25) por encima de SMA50 (150.00). |
| AOS | Industrials | 60 | BUY | $65.69 | Tendencia de corto plazo alcista: SMA20 (64.30) por encima de SMA50 (60.42). |
| ALL | Financials | 60 | BUY | $270.28 | Tendencia de corto plazo alcista: SMA20 (263.51) por encima de SMA50 (247.93). |
| AZO | Consumer Discretionary | 60 | BUY | $3345.88 | Tendencia de corto plazo alcista: SMA20 (3250.36) por encima de SMA50 (3071.36). |
| GILD | Health Care | 60 | BUY | $178.68 | Tendencia de corto plazo alcista: SMA20 (168.86) por encima de SMA50 (158.39). |
| HRL | Consumer Staples | 60 | BUY | $23.18 | Tendencia de corto plazo alcista: SMA20 (22.22) por encima de SMA50 (20.88). |
| WMT | Consumer Staples | 60 | BUY | $131.70 | Tendencia de corto plazo alcista: SMA20 (126.41) por encima de SMA50 (117.53). |
| DRI | Consumer Discretionary | 58 | BUY | $238.45 | Tendencia de corto plazo alcista: SMA20 (227.95) por encima de SMA50 (214.73). |
| PSA | Real Estate | 58 | BUY | $331.74 | Tendencia de corto plazo alcista: SMA20 (331.21) por encima de SMA50 (308.03). |
| TSN | Consumer Staples | 58 | BUY | $63.46 | Tendencia de corto plazo alcista: SMA20 (60.39) por encima de SMA50 (56.00). |
| MAR | Consumer Discretionary | 45 | BUY | $414.30 | Tendencia de corto plazo alcista: SMA20 (416.03) por encima de SMA50 (385.93). |
| J | Industrials | 44 | BUY | $151.15 | Tendencia de corto plazo alcista: SMA20 (155.60) por encima de SMA50 (146.77). |
| CRL | Health Care | 41 | BUY | $338.52 | Tendencia de corto plazo alcista: SMA20 (340.86) por encima de SMA50 (318.57). |
| ISRG | Health Care | 36 | BUY | $432.54 | Tendencia de corto plazo alcista: SMA20 (439.69) por encima de SMA50 (425.38). |
| TMO | Health Care | 21 | HOLD | $695.52 | Tendencia de corto plazo alcista: SMA20 (696.96) por encima de SMA50 (681.07). |
| MU | Information Technology | -73 | SELL | $627.05 | Tendencia de corto plazo bajista: SMA20 (761.76) por debajo de SMA50 (901.86). |
| ETN | Industrials | -74 | SELL | $319.27 | Tendencia de corto plazo bajista: SMA20 (351.10) por debajo de SMA50 (389.19). |
| MRVL | Information Technology | -74 | SELL | $132.19 | Tendencia de corto plazo bajista: SMA20 (161.03) por debajo de SMA50 (216.98). |
| ON | Information Technology | -74 | SELL | $62.32 | Tendencia de corto plazo bajista: SMA20 (68.92) por debajo de SMA50 (73.08). |
| VRT | Industrials | -74 | SELL | $172.85 | Tendencia de corto plazo bajista: SMA20 (202.18) por debajo de SMA50 (220.76). |
| AMAT | Information Technology | -75 | SELL | $323.48 | Tendencia de corto plazo bajista: SMA20 (362.50) por debajo de SMA50 (421.54). |
| FLEX | Information Technology | -75 | SELL | $67.12 | Tendencia de corto plazo bajista: SMA20 (77.46) por debajo de SMA50 (93.81). |
| TER | Information Technology | -75 | SELL | $212.82 | Tendencia de corto plazo bajista: SMA20 (247.18) por debajo de SMA50 (323.51). |
| AMD | Information Technology | -76 | SELL | $411.18 | Tendencia de corto plazo bajista: SMA20 (497.74) por debajo de SMA50 (550.44). |
| ANET | Information Technology | -76 | SELL | $167.63 | Tendencia de corto plazo bajista: SMA20 (181.23) por debajo de SMA50 (191.32). |
| CIEN | Information Technology | -76 | SELL | $241.13 | Tendencia de corto plazo bajista: SMA20 (278.40) por debajo de SMA50 (332.32). |
| KLAC | Information Technology | -76 | SELL | $133.68 | Tendencia de corto plazo bajista: SMA20 (148.24) por debajo de SMA50 (167.35). |
| LRCX | Information Technology | -76 | SELL | $196.53 | Tendencia de corto plazo bajista: SMA20 (218.92) por debajo de SMA50 (264.47). |
| VST | Utilities | -76 | SELL | $119.78 | Tendencia de corto plazo bajista: SMA20 (129.31) por debajo de SMA50 (139.93). |
| COHR | Information Technology | -78 | SELL | $194.81 | Tendencia de corto plazo bajista: SMA20 (210.84) por debajo de SMA50 (253.59). |

#### Detalle de razonamiento (señales destacadas)

**DLTR** (score 74, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (138.71) por encima de SMA50 (126.34).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.4%.
  - RSI 56: zona neutral.
**DPZ** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (336.32) por encima de SMA50 (316.12).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.7%.
  - RSI 65: zona neutral.
**REGN** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (927.08) por encima de SMA50 (836.07).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.2%.
  - RSI 62: zona neutral.
**BIIB** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (251.68) por encima de SMA50 (238.67).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.2%.
  - RSI 62: zona neutral.
**BRO** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (71.72) por encima de SMA50 (67.51).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.3%.
  - RSI 54: zona neutral.
**YUM** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (160.25) por encima de SMA50 (150.00).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.5%.
  - RSI 49: zona neutral.
**AOS** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (64.30) por encima de SMA50 (60.42).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.1%.
  - RSI 44: zona neutral.
**ALL** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (263.51) por encima de SMA50 (247.93).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.5%.
  - RSI 51: zona neutral.
**AZO** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (3250.36) por encima de SMA50 (3071.36).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.0%.
  - RSI 52: zona neutral.
**GILD** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (168.86) por encima de SMA50 (158.39).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.6%.
  - RSI 56: zona neutral.
**HRL** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (22.22) por encima de SMA50 (20.88).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.4%.
  - RSI 55: zona neutral.
**WMT** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (126.41) por encima de SMA50 (117.53).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.9%.
  - RSI 59: zona neutral.
**DRI** (score 58, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (227.95) por encima de SMA50 (214.73).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.3%.
  - RSI 58: zona neutral.
**PSA** (score 58, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (331.21) por encima de SMA50 (308.03).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -1.2%.
  - RSI 31: zona neutral.
**TSN** (score 58, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (60.39) por encima de SMA50 (56.00).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.3%.
  - RSI 63: zona neutral.
**MAR** (score 45, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (416.03) por encima de SMA50 (385.93).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.1%.
  - RSI 42: zona neutral.
**J** (score 44, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (155.60) por encima de SMA50 (146.77).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.8%.
  - RSI 41: zona neutral.
**CRL** (score 41, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (340.86) por encima de SMA50 (318.57).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.1%.
  - RSI 55: zona neutral.
**ISRG** (score 36, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (439.69) por encima de SMA50 (425.38).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.9%.
  - RSI 32: zona neutral.
**TMO** (score 21, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (696.96) por encima de SMA50 (681.07).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.2%.
  - RSI 47: zona neutral.
**MU** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (761.76) por debajo de SMA50 (901.86).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.5%.
  - RSI 38: zona neutral.
**ETN** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (351.10) por debajo de SMA50 (389.19).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.9%.
  - RSI 40: zona neutral.
**MRVL** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (161.03) por debajo de SMA50 (216.98).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.4%.
  - RSI 41: zona neutral.
**ON** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (68.92) por debajo de SMA50 (73.08).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.5%.
  - RSI 40: zona neutral.
**VRT** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (202.18) por debajo de SMA50 (220.76).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.0%.
  - RSI 40: zona neutral.
**AMAT** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (362.50) por debajo de SMA50 (421.54).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.0%.
  - RSI 42: zona neutral.
**FLEX** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (77.46) por debajo de SMA50 (93.81).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.8%.
  - RSI 41: zona neutral.
**TER** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (247.18) por debajo de SMA50 (323.51).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -13.2%.
  - RSI 41: zona neutral.
**AMD** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (497.74) por debajo de SMA50 (550.44).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -20.2%.
  - RSI 43: zona neutral.
**ANET** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (181.23) por debajo de SMA50 (191.32).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.4%.
  - RSI 46: zona neutral.
**CIEN** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (278.40) por debajo de SMA50 (332.32).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.4%.
  - RSI 44: zona neutral.
**KLAC** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (148.24) por debajo de SMA50 (167.35).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.5%.
  - RSI 43: zona neutral.
**LRCX** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (218.92) por debajo de SMA50 (264.47).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.6%.
  - RSI 43: zona neutral.
**VST** (score -76, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (129.31) por debajo de SMA50 (139.93).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.7%.
  - RSI 50: zona neutral.
**COHR** (score -78, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (210.84) por debajo de SMA50 (253.59).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.2%.
  - RSI 50: zona neutral.

---
_Generado automáticamente el 2026-11-24T20:07:17.320Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

Las búsquedas web no devolvieron cobertura fechada del 2026-11-24 (el índice llega hasta ~2026-11-17). Último contexto encontrado: el S&P 500 cayó ~1,9% el 16/11 y ~1% el 17/11, con tecnología y Nvidia como motor de la baja. Hoy el portfolio subió (+$18,69 vs. cierre anterior: $975,31 vs. $956,62), pero la causa de hoy no pudo verificarse con fuentes.

### Core (largo plazo)
Sin noticias relevantes fechadas hoy para JNJ, PG, KO, XOM, CVX, JPM, MSFT, V, LMT ni TXN. El único dato ya sintetizado que merece atención sigue siendo el gatillo de venta de JNJ (payout ratio por encima del 100%), que dispara la alerta de hoy.

### Satellite (técnico)
Sin noticias relevantes encontradas para las posiciones o señales destacadas.

### Fuentes
- [How major US stock indexes fared Monday 11/16/2026](https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-monday-11162026-nid16112026/)
- [How major US stock indexes fared Tuesday 11/17/2026](https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-tuesday-11172026-nid17112026/)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
