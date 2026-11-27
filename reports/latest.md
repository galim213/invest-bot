> 🚨 **ALERTA 2026-11-27:** se cumplió la condición (b): JNJ (core, posición abierta) tiene un gatillo de venta activo en research-notes ("Si el payout ratio sigue subiendo por encima del 100%, el dividendo actual no es sostenible con las ganancias actuales."). No hubo ventas del satellite ni caída >3% del total. **El email de alerta NO se pudo enviar** (el conector Gmail carece de un permiso necesario para enviar).

# Reporte diario de inversión (simulado) — 2026-11-27

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$984.28**
- P&L acumulado: $-15.72 (-1.57%)
- Core (70%, largo plazo): $707.08 (+1.01%) | Satellite (30%, técnico): $277.20 (-7.60%)

**Régimen de mercado: BAJISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 23.81 — ELEVADO (Por encima del promedio histórico (~15-20).) Variación 10d: +0.9 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.78 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.04 pts — normal.
- **Índice dólar (DXY)**: 104.05 (variación 10d: +0.64)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $275.51 | $74.29 | 10.5% | $4.29 (+6.12%) | $1.3400/acción (2026-11-24) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $172.86 | $76.49 | 10.8% | $6.49 (+9.27%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $97.40 | $73.53 | 10.4% | $3.53 (+5.04%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $160.18 | $63.24 | 8.9% | $-6.76 (-9.66%) | $1.0700/acción (2026-11-16) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $212.45 | $66.16 | 9.4% | $-3.84 (-5.49%) | $1.7800/acción (2026-11-18) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $322.96 | $67.34 | 9.5% | $-2.66 (-3.80%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $492.85 | $64.76 | 9.2% | $-5.24 (-7.49%) | $0.9800/acción (2026-11-19) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $429.56 | $73.89 | 10.4% | $3.89 (+5.55%) | $0.7800/acción (2026-11-10) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $605.88 | $77.20 | 10.9% | $7.20 (+10.28%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $281.85 | $70.20 | 9.9% | $0.55 (+0.79%) | $1.5200/acción (2026-10-30) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| ISRG | Health Care | 0.221 | $438.48 | $430.18 | $95.20 | 34.3% | $-1.84 (-1.89%) |
| TMO | Health Care | 0.114 | $690.08 | $683.04 | $78.18 | 28.2% | $-0.81 (-1.02%) |
| CRL | Health Care | 0.062 | $339.66 | $337.39 | $20.96 | 7.6% | $-0.14 (-0.67%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $421.01 | $11.21 | 4.0% | $0.64 (+6.10%) |
| J | Industrials | 0.327 | $154.68 | $146.57 | $47.90 | 17.3% | $-2.65 (-5.24%) |
| ALL | Financials | 0.038 | $268.70 | $272.51 | $10.28 | 3.7% | $0.14 (+1.42%) |

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
| GPN | Financials | 80 | BUY | $97.04 | Tendencia de corto plazo alcista: SMA20 (93.88) por encima de SMA50 (87.47). |
| BRO | Financials | 68 | BUY | $78.38 | Tendencia de corto plazo alcista: SMA20 (72.94) por encima de SMA50 (68.05). |
| SYK | Health Care | 67 | BUY | $334.27 | Tendencia de corto plazo alcista: SMA20 (318.88) por encima de SMA50 (299.07). |
| TSCO | Consumer Discretionary | 67 | BUY | $40.01 | Tendencia de corto plazo alcista: SMA20 (37.25) por encima de SMA50 (34.33). |
| DHI | Consumer Discretionary | 66 | BUY | $156.80 | Tendencia de corto plazo alcista: SMA20 (149.14) por encima de SMA50 (142.97). |
| PHM | Consumer Discretionary | 66 | BUY | $134.49 | Tendencia de corto plazo alcista: SMA20 (129.30) por encima de SMA50 (121.60). |
| WTW | Financials | 64 | BUY | $359.85 | Tendencia de corto plazo alcista: SMA20 (334.87) por encima de SMA50 (316.43). |
| TSN | Consumer Staples | 62 | BUY | $63.20 | Tendencia de corto plazo alcista: SMA20 (61.15) por encima de SMA50 (56.45). |
| PNR | Industrials | 61 | BUY | $73.41 | Tendencia de corto plazo alcista: SMA20 (69.53) por encima de SMA50 (60.45). |
| DIS | Communication Services | 61 | BUY | $127.24 | Tendencia de corto plazo alcista: SMA20 (118.91) por encima de SMA50 (111.95). |
| ZBH | Health Care | 61 | BUY | $110.43 | Tendencia de corto plazo alcista: SMA20 (104.36) por encima de SMA50 (97.45). |
| AJG | Financials | 60 | BUY | $292.50 | Tendencia de corto plazo alcista: SMA20 (282.39) por encima de SMA50 (258.19). |
| DRI | Consumer Discretionary | 60 | BUY | $243.26 | Tendencia de corto plazo alcista: SMA20 (230.40) por encima de SMA50 (216.23). |
| CMG | Consumer Discretionary | 59 | BUY | $37.32 | Tendencia de corto plazo alcista: SMA20 (35.52) por encima de SMA50 (32.68). |
| DPZ | Consumer Discretionary | 59 | BUY | $358.30 | Tendencia de corto plazo alcista: SMA20 (341.29) por encima de SMA50 (318.56). |
| CRL | Health Care | 47 | BUY | $337.39 | Tendencia de corto plazo alcista: SMA20 (336.71) por encima de SMA50 (320.81). |
| MAR | Consumer Discretionary | 45 | BUY | $421.01 | Tendencia de corto plazo alcista: SMA20 (418.33) por encima de SMA50 (389.35). |
| ALL | Financials | 39 | BUY | $272.51 | Tendencia de corto plazo alcista: SMA20 (265.41) por encima de SMA50 (248.67). |
| ISRG | Health Care | 29 | HOLD | $430.18 | Tendencia de corto plazo alcista: SMA20 (438.01) por encima de SMA50 (427.25). |
| J | Industrials | 29 | HOLD | $146.57 | Tendencia de corto plazo alcista: SMA20 (155.06) por encima de SMA50 (146.88). |
| TMO | Health Care | 20 | HOLD | $683.04 | Tendencia de corto plazo alcista: SMA20 (694.72) por encima de SMA50 (682.30). |
| BE | Industrials | -78 | SELL | $163.02 | Tendencia de corto plazo bajista: SMA20 (180.50) por debajo de SMA50 (225.49). |
| HPE | Information Technology | -78 | SELL | $42.76 | Tendencia de corto plazo bajista: SMA20 (46.96) por debajo de SMA50 (56.52). |
| LRCX | Information Technology | -78 | SELL | $192.69 | Tendencia de corto plazo bajista: SMA20 (212.37) por debajo de SMA50 (261.26). |
| MU | Information Technology | -78 | SELL | $646.95 | Tendencia de corto plazo bajista: SMA20 (728.44) por debajo de SMA50 (888.80). |
| AMAT | Information Technology | -79 | SELL | $322.04 | Tendencia de corto plazo bajista: SMA20 (352.35) por debajo de SMA50 (417.58). |
| DELL | Information Technology | -79 | SELL | $316.96 | Tendencia de corto plazo bajista: SMA20 (340.23) por debajo de SMA50 (451.06). |
| LITE | Information Technology | -79 | SELL | $514.63 | Tendencia de corto plazo bajista: SMA20 (580.34) por debajo de SMA50 (796.77). |
| VRT | Industrials | -79 | SELL | $178.71 | Tendencia de corto plazo bajista: SMA20 (195.30) por debajo de SMA50 (218.09). |
| GLW | Information Technology | -80 | SELL | $105.08 | Tendencia de corto plazo bajista: SMA20 (110.95) por debajo de SMA50 (132.03). |
| FLEX | Information Technology | -80 | SELL | $69.77 | Tendencia de corto plazo bajista: SMA20 (74.97) por debajo de SMA50 (92.20). |
| MRVL | Information Technology | -80 | SELL | $140.54 | Tendencia de corto plazo bajista: SMA20 (151.07) por debajo de SMA50 (212.99). |
| KLAC | Information Technology | -81 | SELL | $140.86 | Tendencia de corto plazo bajista: SMA20 (145.71) por debajo de SMA50 (166.13). |
| TER | Information Technology | -81 | SELL | $222.96 | Tendencia de corto plazo bajista: SMA20 (238.50) por debajo de SMA50 (318.34). |
| CIEN | Information Technology | -82 | SELL | $256.58 | Tendencia de corto plazo bajista: SMA20 (267.64) por debajo de SMA50 (328.58). |
| ON | Information Technology | -82 | SELL | $66.24 | Tendencia de corto plazo bajista: SMA20 (67.77) por debajo de SMA50 (72.94). |

#### Detalle de razonamiento (señales destacadas)

**GPN** (score 80, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (93.88) por encima de SMA50 (87.47).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.0%.
  - RSI 50: zona neutral.
**BRO** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (72.94) por encima de SMA50 (68.05).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.1%.
  - RSI 70: sobrecompra, riesgo de corrección.
**SYK** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (318.88) por encima de SMA50 (299.07).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.0%.
  - RSI 57: zona neutral.
**TSCO** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (37.25) por encima de SMA50 (34.33).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.9%.
  - RSI 71: sobrecompra, riesgo de corrección.
**DHI** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (149.14) por encima de SMA50 (142.97).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.5%.
  - RSI 57: zona neutral.
**PHM** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (129.30) por encima de SMA50 (121.60).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.0%.
  - RSI 53: zona neutral.
**WTW** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (334.87) por encima de SMA50 (316.43).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.5%.
  - RSI 75: sobrecompra, riesgo de corrección.
**TSN** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (61.15) por encima de SMA50 (56.45).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.6%.
  - RSI 64: zona neutral.
**PNR** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (69.53) por encima de SMA50 (60.45).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.7%.
  - RSI 71: sobrecompra, riesgo de corrección.
**DIS** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (118.91) por encima de SMA50 (111.95).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.6%.
  - RSI 70: sobrecompra, riesgo de corrección.
**ZBH** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (104.36) por encima de SMA50 (97.45).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.6%.
  - RSI 60: zona neutral.
**AJG** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (282.39) por encima de SMA50 (258.19).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.5%.
  - RSI 61: zona neutral.
**DRI** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (230.40) por encima de SMA50 (216.23).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.7%.
  - RSI 68: zona neutral.
**CMG** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (35.52) por encima de SMA50 (32.68).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.1%.
  - RSI 66: zona neutral.
**DPZ** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (341.29) por encima de SMA50 (318.56).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.5%.
  - RSI 73: sobrecompra, riesgo de corrección.
**CRL** (score 47, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (336.71) por encima de SMA50 (320.81).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -1.0%.
  - RSI 50: zona neutral.
**MAR** (score 45, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (418.33) por encima de SMA50 (389.35).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.7%.
  - RSI 54: zona neutral.
**ALL** (score 39, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (265.41) por encima de SMA50 (248.67).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.2%.
  - RSI 79: sobrecompra, riesgo de corrección.
**ISRG** (score 29, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (438.01) por encima de SMA50 (427.25).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.2%.
  - RSI 41: zona neutral.
**J** (score 29, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (155.06) por encima de SMA50 (146.88).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -7.6%.
  - RSI 47: zona neutral.
**TMO** (score 20, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (694.72) por encima de SMA50 (682.30).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -2.3%.
  - RSI 46: zona neutral.
**BE** (score -78, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (180.50) por debajo de SMA50 (225.49).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.3%.
  - RSI 47: zona neutral.
**HPE** (score -78, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (46.96) por debajo de SMA50 (56.52).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.8%.
  - RSI 47: zona neutral.
**LRCX** (score -78, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (212.37) por debajo de SMA50 (261.26).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -17.6%.
  - RSI 47: zona neutral.
**MU** (score -78, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (728.44) por debajo de SMA50 (888.80).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.0%.
  - RSI 47: zona neutral.
**AMAT** (score -79, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (352.35) por debajo de SMA50 (417.58).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.3%.
  - RSI 48: zona neutral.
**DELL** (score -79, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (340.23) por debajo de SMA50 (451.06).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.6%.
  - RSI 48: zona neutral.
**LITE** (score -79, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (580.34) por debajo de SMA50 (796.77).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -17.6%.
  - RSI 48: zona neutral.
**VRT** (score -79, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (195.30) por debajo de SMA50 (218.09).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.7%.
  - RSI 48: zona neutral.
**GLW** (score -80, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (110.95) por debajo de SMA50 (132.03).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.9%.
  - RSI 49: zona neutral.
**FLEX** (score -80, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (74.97) por debajo de SMA50 (92.20).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.7%.
  - RSI 50: zona neutral.
**MRVL** (score -80, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (151.07) por debajo de SMA50 (212.99).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.5%.
  - RSI 50: zona neutral.
**KLAC** (score -81, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (145.71) por debajo de SMA50 (166.13).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.3%.
  - RSI 51: zona neutral.
**TER** (score -81, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (238.50) por debajo de SMA50 (318.34).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.4%.
  - RSI 51: zona neutral.
**CIEN** (score -82, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (267.64) por debajo de SMA50 (328.58).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -12.7%.
  - RSI 53: zona neutral.
**ON** (score -82, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (67.77) por debajo de SMA50 (72.94).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.2%.
  - RSI 54: zona neutral.

---
_Generado automáticamente el 2026-11-27T20:07:15.548Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

Las búsquedas web no devolvieron una crónica confiable del cierre del 2026-11-27 (S&P 500 / Nasdaq): los resultados eran de otras fechas, así que no se atribuye una causa al movimiento del día. Contexto propio del bot: régimen BAJISTA (SPY vs SMA200), VIX 23.81 (elevado), el core subió +0.2% sobre el cierre anterior y el satellite +0.5%.

### Core (largo plazo)

- **JNJ**: no se encontró noticia fechada de hoy. Lo único disponible (Q3 2026 con guía anual elevada, según Trefis) es consistente con el caso alcista de research-notes; el gatillo de venta vigente sigue siendo el payout ratio >100%, que ninguna fuente encontrada contradice ni confirma.
- **XOM / CVX**: la última noticia fechada hallada es del 30-oct-2026 (máximos históricos tras resultados del Q3 mejores a lo esperado), lo que refuerza el caso alcista; no hay noticia específica de hoy que explique su precio actual (ambas por debajo del costo promedio).

### Satellite (técnico)

Sin noticias relevantes encontradas para las posiciones abiertas ni para las señales destacadas.

### Fuentes

- [Exxon Mobil, Chevron tap record highs after earnings](https://finviz.com/news/412689/oil-giants-chevron-exxonmobil-tap-record-highs-after-earnings)
- [Johnson & Johnson (JNJ) — Trefis](https://www.trefis.com/data/companies/JNJ?from=section_ticker)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
