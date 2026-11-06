# Reporte diario de inversión (simulado) — 2026-11-06

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1001.43**
- P&L acumulado: $1.43 (+0.14%)
- Core (70%, largo plazo): $707.27 (+1.04%) | Satellite (30%, técnico): $294.16 (-1.95%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 24.59 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: +6.2 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.86 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -2.02 pts — **ESTRÉS**.
- **Índice dólar (DXY)**: 102.31 (variación 10d: +0.35)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $275.82 | $74.37 | 10.5% | $4.37 (+6.24%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $165.63 | $73.29 | 10.4% | $3.29 (+4.70%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $96.07 | $72.53 | 10.3% | $2.53 (+3.61%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $166.34 | $65.67 | 9.3% | $-4.33 (-6.18%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $213.20 | $66.39 | 9.4% | $-3.61 (-5.15%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $336.74 | $70.21 | 9.9% | $0.21 (+0.30%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $532.19 | $69.93 | 9.9% | $-0.07 (-0.10%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $422.95 | $72.75 | 10.3% | $2.75 (+3.93%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $570.01 | $72.63 | 10.3% | $2.63 (+3.76%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $279.02 | $69.49 | 9.8% | $-0.16 (-0.22%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $301.10 | $68.13 | 23.2% | $-3.24 (-4.54%) |
| ISRG | Health Care | 0.221 | $438.48 | $452.07 | $100.05 | 34.0% | $3.01 (+3.10%) |
| TMO | Health Care | 0.114 | $690.08 | $692.60 | $79.27 | 26.9% | $0.29 (+0.37%) |
| CRL | Health Care | 0.062 | $339.66 | $335.68 | $20.85 | 7.1% | $-0.25 (-1.17%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $416.89 | $11.10 | 3.8% | $0.53 (+5.06%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.63**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.16** → N efectivo ajustado por correlación: **2.54**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| MRNA | Health Care | 73 | BUY | $263.78 | Tendencia de corto plazo alcista: SMA20 (225.33) por encima de SMA50 (192.04). |
| CCL | Consumer Discretionary | 71 | BUY | $29.57 | Tendencia de corto plazo alcista: SMA20 (27.78) por encima de SMA50 (25.28). |
| RCL | Consumer Discretionary | 68 | BUY | $327.47 | Tendencia de corto plazo alcista: SMA20 (296.26) por encima de SMA50 (274.73). |
| CAH | Health Care | 66 | BUY | $271.99 | Tendencia de corto plazo alcista: SMA20 (252.98) por encima de SMA50 (240.49). |
| IDXX | Health Care | 66 | BUY | $675.55 | Tendencia de corto plazo alcista: SMA20 (584.26) por encima de SMA50 (546.74). |
| VTRS | Health Care | 65 | BUY | $19.64 | Tendencia de corto plazo alcista: SMA20 (18.52) por encima de SMA50 (17.69). |
| MAS | Industrials | 64 | BUY | $82.28 | Tendencia de corto plazo alcista: SMA20 (76.80) por encima de SMA50 (72.29). |
| SNPS | Information Technology | 64 | BUY | $451.11 | Tendencia de corto plazo alcista: SMA20 (462.87) por encima de SMA50 (441.62). |
| GEHC | Health Care | 63 | BUY | $82.84 | Tendencia de corto plazo alcista: SMA20 (74.05) por encima de SMA50 (69.30). |
| MCK | Health Care | 62 | BUY | $1067.21 | Tendencia de corto plazo alcista: SMA20 (1003.47) por encima de SMA50 (937.78). |
| DLTR | Consumer Staples | 61 | BUY | $132.43 | Tendencia de corto plazo alcista: SMA20 (128.29) por encima de SMA50 (122.36). |
| REGN | Health Care | 61 | BUY | $909.01 | Tendencia de corto plazo alcista: SMA20 (838.08) por encima de SMA50 (804.48). |
| FTV | Industrials | 60 | BUY | $65.28 | Tendencia de corto plazo alcista: SMA20 (61.66) por encima de SMA50 (58.43). |
| GILD | Health Care | 60 | BUY | $167.65 | Tendencia de corto plazo alcista: SMA20 (160.13) por encima de SMA50 (152.87). |
| LLY | Health Care | 60 | BUY | $1363.45 | Tendencia de corto plazo alcista: SMA20 (1302.43) por encima de SMA50 (1214.44). |
| MAR | Consumer Discretionary | 60 | BUY | $416.89 | Tendencia de corto plazo alcista: SMA20 (396.80) por encima de SMA50 (366.30). |
| TMO | Health Care | 48 | BUY | $692.60 | Tendencia de corto plazo alcista: SMA20 (687.05) por encima de SMA50 (660.67). |
| ISRG | Health Care | 46 | BUY | $452.07 | Tendencia de corto plazo alcista: SMA20 (441.14) por encima de SMA50 (409.92). |
| VEEV | Health Care | 38 | BUY | $301.10 | Tendencia de corto plazo alcista: SMA20 (311.23) por encima de SMA50 (289.09). |
| CRL | Health Care | 36 | BUY | $335.68 | Tendencia de corto plazo alcista: SMA20 (332.28) por encima de SMA50 (305.56). |
| LITE | Information Technology | -68 | SELL | $535.09 | Tendencia de corto plazo bajista: SMA20 (799.22) por debajo de SMA50 (894.07). |
| AMAT | Information Technology | -69 | SELL | $333.17 | Tendencia de corto plazo bajista: SMA20 (400.85) por debajo de SMA50 (444.85). |
| CIEN | Information Technology | -69 | SELL | $242.84 | Tendencia de corto plazo bajista: SMA20 (329.77) por debajo de SMA50 (350.86). |
| DELL | Information Technology | -69 | SELL | $331.05 | Tendencia de corto plazo bajista: SMA20 (453.72) por debajo de SMA50 (504.53). |
| FICO | Information Technology | -69 | SELL | $685.84 | Tendencia de corto plazo bajista: SMA20 (739.98) por debajo de SMA50 (827.33). |
| JBL | Information Technology | -69 | SELL | $240.45 | Tendencia de corto plazo bajista: SMA20 (277.73) por debajo de SMA50 (294.02). |
| HOOD | Financials | -69 | SELL | $80.55 | Tendencia de corto plazo bajista: SMA20 (94.16) por debajo de SMA50 (105.96). |
| AXON | Industrials | -70 | SELL | $316.27 | Tendencia de corto plazo bajista: SMA20 (408.08) por debajo de SMA50 (441.59). |
| MU | Information Technology | -70 | SELL | $692.26 | Tendencia de corto plazo bajista: SMA20 (879.10) por debajo de SMA50 (961.58). |
| ORCL | Information Technology | -70 | SELL | $115.15 | Tendencia de corto plazo bajista: SMA20 (129.31) por debajo de SMA50 (138.79). |
| WDC | Information Technology | -70 | SELL | $263.86 | Tendencia de corto plazo bajista: SMA20 (352.47) por debajo de SMA50 (406.74). |
| BE | Industrials | -71 | SELL | $174.68 | Tendencia de corto plazo bajista: SMA20 (217.50) por debajo de SMA50 (246.10). |
| CHRW | Industrials | -71 | SELL | $125.25 | Tendencia de corto plazo bajista: SMA20 (135.87) por debajo de SMA50 (143.58). |
| SMCI | Information Technology | -75 | SELL | $28.68 | Tendencia de corto plazo bajista: SMA20 (33.33) por debajo de SMA50 (37.44). |
| AKAM | Information Technology | -77 | SELL | $83.32 | Tendencia de corto plazo bajista: SMA20 (91.69) por debajo de SMA50 (101.56). |

#### Detalle de razonamiento (señales destacadas)

**MRNA** (score 73, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (225.33) por encima de SMA50 (192.04).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 31.8%.
  - RSI 61: zona neutral.
**CCL** (score 71, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (27.78) por encima de SMA50 (25.28).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 13.3%.
  - RSI 65: zona neutral.
**RCL** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (296.26) por encima de SMA50 (274.73).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 18.4%.
  - RSI 70: sobrecompra, riesgo de corrección.
**CAH** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (252.98) por encima de SMA50 (240.49).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.0%.
  - RSI 68: zona neutral.
**IDXX** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (584.26) por encima de SMA50 (546.74).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 20.6%.
  - RSI 73: sobrecompra, riesgo de corrección.
**VTRS** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (18.52) por encima de SMA50 (17.69).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.1%.
  - RSI 66: zona neutral.
**MAS** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (76.80) por encima de SMA50 (72.29).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.2%.
  - RSI 67: zona neutral.
**SNPS** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (462.87) por encima de SMA50 (441.62).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.9%.
  - RSI 49: zona neutral.
**GEHC** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (74.05) por encima de SMA50 (69.30).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 15.9%.
  - RSI 78: sobrecompra, riesgo de corrección.
**MCK** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1003.47) por encima de SMA50 (937.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.6%.
  - RSI 64: zona neutral.
**DLTR** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (128.29) por encima de SMA50 (122.36).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.7%.
  - RSI 57: zona neutral.
**REGN** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (838.08) por encima de SMA50 (804.48).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.9%.
  - RSI 71: sobrecompra, riesgo de corrección.
**FTV** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (61.66) por encima de SMA50 (58.43).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.3%.
  - RSI 76: sobrecompra, riesgo de corrección.
**GILD** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (160.13) por encima de SMA50 (152.87).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.4%.
  - RSI 67: zona neutral.
**LLY** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1302.43) por encima de SMA50 (1214.44).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.1%.
  - RSI 68: zona neutral.
**MAR** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (396.80) por encima de SMA50 (366.30).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.7%.
  - RSI 67: zona neutral.
**TMO** (score 48, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (687.05) por encima de SMA50 (660.67).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.8%.
  - RSI 54: zona neutral.
**ISRG** (score 46, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (441.14) por encima de SMA50 (409.92).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.0%.
  - RSI 56: zona neutral.
**VEEV** (score 38, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (311.23) por encima de SMA50 (289.09).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -6.8%.
  - RSI 36: zona neutral.
**CRL** (score 36, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (332.28) por encima de SMA50 (305.56).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.8%.
  - RSI 59: zona neutral.
**LITE** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (799.22) por debajo de SMA50 (894.07).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -29.2%.
  - RSI 30: sobreventa, posible rebote.
**AMAT** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (400.85) por debajo de SMA50 (444.85).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.7%.
  - RSI 32: zona neutral.
**CIEN** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (329.77) por debajo de SMA50 (350.86).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -24.2%.
  - RSI 32: zona neutral.
**DELL** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (453.72) por debajo de SMA50 (504.53).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -27.5%.
  - RSI 32: zona neutral.
**FICO** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (739.98) por debajo de SMA50 (827.33).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.9%.
  - RSI 32: zona neutral.
**JBL** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (277.73) por debajo de SMA50 (294.02).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.2%.
  - RSI 32: zona neutral.
**HOOD** (score -69, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (94.16) por debajo de SMA50 (105.96).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.3%.
  - RSI 31: zona neutral.
**AXON** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (408.08) por debajo de SMA50 (441.59).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -24.8%.
  - RSI 33: zona neutral.
**MU** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (879.10) por debajo de SMA50 (961.58).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -21.1%.
  - RSI 33: zona neutral.
**ORCL** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (129.31) por debajo de SMA50 (138.79).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.7%.
  - RSI 40: zona neutral.
**WDC** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (352.47) por debajo de SMA50 (406.74).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -23.2%.
  - RSI 33: zona neutral.
**BE** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (217.50) por debajo de SMA50 (246.10).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.6%.
  - RSI 37: zona neutral.
**CHRW** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (135.87) por debajo de SMA50 (143.58).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.3%.
  - RSI 35: zona neutral.
**SMCI** (score -75, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (33.33) por debajo de SMA50 (37.44).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.9%.
  - RSI 42: zona neutral.
**AKAM** (score -77, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (91.69) por debajo de SMA50 (101.56).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.9%.
  - RSI 45: zona neutral.

---
_Generado automáticamente el 2026-11-06T20:07:28.923Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se pudo obtener cobertura confiable del cierre de hoy (2026-11-06): las búsquedas web devolvieron solo artículos de otras fechas, sin datos verificables de S&P 500/Nasdaq ni noticias de los tickers del core o del satellite. Por eso no se atribuye el movimiento del día a ninguna noticia. Dato propio del bot: el valor combinado fue $1001.43 (-0.76% vs. ayer); VIX 24.59 (elevado) y spread de crédito en estrés, según el panorama macro de arriba.

Además, las research notes quedaron vacías hoy (Yahoo Finance inalcanzable: `fc.yahoo.com ENOTFOUND`), así que no hay veredicto por ticker para contrastar.

### Core (largo plazo)
_Sin noticia relevante verificada._

### Satellite (técnico)
_Sin noticia relevante verificada._

Fuentes: ninguna utilizable (resultados de búsqueda de fechas distintas a hoy).

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
