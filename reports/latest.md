# Reporte diario de inversión (simulado) — 2026-10-20

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1000.91**
- P&L acumulado: $0.91 (+0.09%)
- Core (70%, largo plazo): $700.58 (+0.08%) | Satellite (30%, técnico): $300.33 (+0.11%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 17.47 — CALMA (Dentro del rango histórico normal.) Variación 10d: +2.4 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +1.04 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -0.52 pts — normal.
- **Índice dólar (DXY)**: 101.71 (variación 10d: -0.53)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor mercado | P&L no realizado |
|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $259.42 | $69.95 | $-0.05 (-0.08%) |
| PG | Consumer Staples | 0.442 | $158.20 | $159.38 | $70.52 | $0.52 (+0.75%) |
| KO | Consumer Staples | 0.755 | $92.72 | $93.50 | $70.59 | $0.59 (+0.84%) |
| XOM | Energy | 0.395 | $177.30 | $177.89 | $70.23 | $0.23 (+0.33%) |
| CVX | Energy | 0.311 | $224.78 | $225.78 | $70.31 | $0.31 (+0.44%) |
| JPM | Financials | 0.209 | $335.73 | $335.45 | $69.94 | $-0.06 (-0.08%) |
| MSFT | Information Technology | 0.131 | $532.73 | $531.87 | $69.89 | $-0.11 (-0.16%) |
| V | Financials | 0.172 | $406.96 | $407.15 | $70.03 | $0.03 (+0.05%) |
| LMT | Industrials | 0.127 | $549.38 | $548.87 | $69.94 | $-0.06 (-0.09%) |
| TXN | Information Technology | 0.249 | $279.65 | $277.78 | $69.18 | $-0.47 (-0.67%) |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor mercado | P&L no realizado |
|---|---|---|---|---|---|---|
| MRNA | Health Care | 0.155 | $241.29 | $242.08 | $37.62 | $0.12 (+0.33%) |
| VEEV | Health Care | 0.226 | $315.43 | $318.59 | $72.09 | $0.71 (+1.00%) |
| ISRG | Health Care | 0.221 | $438.48 | $438.00 | $96.93 | $-0.11 (-0.11%) |
| TMO | Health Care | 0.114 | $690.08 | $687.83 | $78.73 | $-0.26 (-0.33%) |

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| MRNA | Health Care | 70 | BUY | $242.08 | Tendencia de corto plazo alcista: SMA20 (206.85) por encima de SMA50 (161.93). |
| VEEV | Health Care | 67 | BUY | $318.59 | Tendencia de corto plazo alcista: SMA20 (290.48) por encima de SMA50 (272.22). |
| ACN | Information Technology | 62 | HOLD | $239.21 | Tendencia de corto plazo alcista: SMA20 (201.92) por encima de SMA50 (190.31). |
| MPC | Energy | 60 | HOLD | $475.02 | Tendencia de corto plazo alcista: SMA20 (437.15) por encima de SMA50 (402.31). |
| TMO | Health Care | 60 | BUY | $687.83 | Tendencia de corto plazo alcista: SMA20 (670.84) por encima de SMA50 (639.93). |
| PSX | Energy | 57 | BUY | $291.02 | Tendencia de corto plazo alcista: SMA20 (273.22) por encima de SMA50 (258.87). |
| A | Health Care | 56 | BUY | $173.11 | Tendencia de corto plazo alcista: SMA20 (171.13) por encima de SMA50 (159.68). |
| MTD | Health Care | 55 | BUY | $1634.63 | Tendencia de corto plazo alcista: SMA20 (1553.18) por encima de SMA50 (1451.69). |
| VTRS | Health Care | 55 | BUY | $18.65 | Tendencia de corto plazo alcista: SMA20 (17.76) por encima de SMA50 (17.04). |
| RVTY | Health Care | 53 | BUY | $156.03 | Tendencia de corto plazo alcista: SMA20 (152.45) por encima de SMA50 (137.65). |
| BIIB | Health Care | 51 | BUY | $243.10 | Tendencia de corto plazo alcista: SMA20 (227.72) por encima de SMA50 (220.94). |
| SWKS | Information Technology | 50 | BUY | $81.30 | Tendencia de corto plazo alcista: SMA20 (82.68) por encima de SMA50 (77.83). |
| DHR | Health Care | 49 | BUY | $224.02 | Tendencia de corto plazo alcista: SMA20 (221.95) por encima de SMA50 (214.32). |
| HCA | Health Care | 49 | BUY | $465.80 | Tendencia de corto plazo alcista: SMA20 (443.84) por encima de SMA50 (427.97). |
| ULTA | Consumer Discretionary | 49 | BUY | $602.90 | Tendencia de corto plazo alcista: SMA20 (563.40) por encima de SMA50 (547.36). |
| ISRG | Health Care | 43 | BUY | $438.00 | Tendencia de corto plazo alcista: SMA20 (414.53) por encima de SMA50 (393.65). |
| ARE | Real Estate | -59 | SELL | $42.66 | Tendencia de corto plazo bajista: SMA20 (45.62) por debajo de SMA50 (48.67). |
| BKR | Energy | -60 | SELL | $55.65 | Tendencia de corto plazo bajista: SMA20 (56.26) por debajo de SMA50 (59.51). |
| MOS | Materials | -60 | SELL | $17.86 | Tendencia de corto plazo bajista: SMA20 (20.56) por debajo de SMA50 (22.63). |
| AXON | Industrials | -61 | SELL | $392.64 | Tendencia de corto plazo bajista: SMA20 (416.21) por debajo de SMA50 (494.87). |
| AKAM | Information Technology | -62 | SELL | $89.63 | Tendencia de corto plazo bajista: SMA20 (103.09) por debajo de SMA50 (107.72). |
| ALB | Materials | -62 | SELL | $95.76 | Tendencia de corto plazo bajista: SMA20 (102.84) por debajo de SMA50 (117.75). |
| JBL | Information Technology | -62 | SELL | $277.09 | Tendencia de corto plazo bajista: SMA20 (301.42) por debajo de SMA50 (310.97). |
| TMUS | Communication Services | -62 | SELL | $157.75 | Tendencia de corto plazo bajista: SMA20 (161.29) por debajo de SMA50 (171.73). |
| VRT | Industrials | -62 | SELL | $203.55 | Tendencia de corto plazo bajista: SMA20 (237.47) por debajo de SMA50 (252.77). |
| CVNA | Consumer Discretionary | -63 | SELL | $60.30 | Tendencia de corto plazo bajista: SMA20 (62.01) por debajo de SMA50 (67.46). |
| SKYD | Communication Services | -64 | SELL | $7.09 | Tendencia de corto plazo bajista: SMA20 (8.99) por debajo de SMA50 (9.86). |
| HWM | Industrials | -66 | SELL | $211.68 | Tendencia de corto plazo bajista: SMA20 (224.75) por debajo de SMA50 (243.03). |
| NRG | Utilities | -68 | SELL | $97.85 | Tendencia de corto plazo bajista: SMA20 (101.12) por debajo de SMA50 (108.45). |
| WDC | Information Technology | -68 | SELL | $364.32 | Tendencia de corto plazo bajista: SMA20 (410.26) por debajo de SMA50 (439.00). |
| ORCL | Information Technology | -71 | SELL | $131.09 | Tendencia de corto plazo bajista: SMA20 (137.28) por debajo de SMA50 (143.92). |

#### Detalle de razonamiento (señales destacadas)

**MRNA** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (206.85) por encima de SMA50 (161.93).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 29.1%.
  - RSI 67: zona neutral.
**VEEV** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (290.48) por encima de SMA50 (272.22).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.4%.
  - RSI 72: sobrecompra, riesgo de corrección.
**ACN** (score 62, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (201.92) por encima de SMA50 (190.31).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 24.7%.
  - RSI 80: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 80 >= 80): se espera una corrección antes de entrar.
**MPC** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (437.15) por encima de SMA50 (402.31).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.9%.
  - RSI 82: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 82 >= 80): se espera una corrección antes de entrar.
**TMO** (score 60, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (670.84) por encima de SMA50 (639.93).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.8%.
  - RSI 54: zona neutral.
**PSX** (score 57, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (273.22) por encima de SMA50 (258.87).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.9%.
  - RSI 78: sobrecompra, riesgo de corrección.
**A** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (171.13) por encima de SMA50 (159.68).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.2%.
  - RSI 52: zona neutral.
**MTD** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1553.18) por encima de SMA50 (1451.69).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.6%.
  - RSI 76: sobrecompra, riesgo de corrección.
**VTRS** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (17.76) por encima de SMA50 (17.04).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.3%.
  - RSI 64: zona neutral.
**RVTY** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (152.45) por encima de SMA50 (137.65).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.8%.
  - RSI 54: zona neutral.
**BIIB** (score 51, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (227.72) por encima de SMA50 (220.94).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.1%.
  - RSI 69: zona neutral.
**SWKS** (score 50, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (82.68) por encima de SMA50 (77.83).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -1.8%.
  - RSI 41: zona neutral.
**DHR** (score 49, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (221.95) por encima de SMA50 (214.32).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.9%.
  - RSI 52: zona neutral.
**HCA** (score 49, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (443.84) por encima de SMA50 (427.97).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.8%.
  - RSI 74: sobrecompra, riesgo de corrección.
**ULTA** (score 49, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (563.40) por encima de SMA50 (547.36).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.2%.
  - RSI 74: sobrecompra, riesgo de corrección.
**ISRG** (score 43, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (414.53) por encima de SMA50 (393.65).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: 8.2%.
  - RSI 69: zona neutral.
**ARE** (score -59, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (45.62) por debajo de SMA50 (48.67).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.1%.
  - RSI 30: zona neutral.
**BKR** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (56.26) por debajo de SMA50 (59.51).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -2.6%.
  - RSI 54: zona neutral.
**MOS** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (20.56) por debajo de SMA50 (22.63).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.7%.
  - RSI 13: sobreventa, posible rebote.
**AXON** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (416.21) por debajo de SMA50 (494.87).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.2%.
  - RSI 37: zona neutral.
**AKAM** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (103.09) por debajo de SMA50 (107.72).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -17.5%.
  - RSI 30: sobreventa, posible rebote.
**ALB** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (102.84) por debajo de SMA50 (117.75).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.0%.
  - RSI 21: sobreventa, posible rebote.
**JBL** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (301.42) por debajo de SMA50 (310.97).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.4%.
  - RSI 45: zona neutral.
**TMUS** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (161.29) por debajo de SMA50 (171.73).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.9%.
  - RSI 45: zona neutral.
**VRT** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (237.47) por debajo de SMA50 (252.77).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.6%.
  - RSI 20: sobreventa, posible rebote.
**CVNA** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (62.01) por debajo de SMA50 (67.46).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.6%.
  - RSI 43: zona neutral.
**SKYD** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (8.99) por debajo de SMA50 (9.86).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -25.6%.
  - RSI 23: sobreventa, posible rebote.
**HWM** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (224.75) por debajo de SMA50 (243.03).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.6%.
  - RSI 33: zona neutral.
**NRG** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (101.12) por debajo de SMA50 (108.45).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.6%.
  - RSI 53: zona neutral.
**WDC** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (410.26) por debajo de SMA50 (439.00).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.4%.
  - RSI 31: zona neutral.
**ORCL** (score -71, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (137.28) por debajo de SMA50 (143.92).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.1%.
  - RSI 45: zona neutral.

---
_Generado automáticamente el 2026-10-20T20:04:32.074Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

No se encontraron noticias verificables fechadas el 2026-10-20: las búsquedas web (cierre de índices, tickers del core y del satellite) devolvieron solo artículos de otras fechas o sin fecha, por lo que no se atribuye el movimiento del día a ninguna causa. Además, los datos de Yahoo (fundamentales/research notes) no estuvieron accesibles hoy (`fc.yahoo.com inalcanzable`), así que research-notes-latest.md quedó sin veredictos por ticker. El portfolio se movió +0.09% en el día (core +0.08%, satellite +0.11%), un día tranquilo con VIX en 17.47.

### Core (largo plazo)
Sin noticias relevantes encontradas.

### Satellite (técnico)
Sin noticias relevantes encontradas.

### Fuentes
Ninguna fuente utilizable para la fecha de hoy.

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
