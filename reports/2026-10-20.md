# Reporte diario de inversión (simulado) — 2026-10-20

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$999.51**
- P&L acumulado: $-0.49 (-0.05%)
- Core (70%, largo plazo): $699.65 (-0.05%) | Satellite (30%, técnico): $299.86 (-0.05%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 17.27 — CALMA (Dentro del rango histórico normal.) Variación 10d: +2.2 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +1.04 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -0.48 pts — normal.
- **Índice dólar (DXY)**: 101.72 (variación 10d: -0.52)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor mercado | P&L no realizado |
|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $259.61 | $70.00 | $0.00 (0.00%) |
| PG | Consumer Staples | 0.442 | $158.20 | $158.20 | $70.00 | $0.00 (0.00%) |
| KO | Consumer Staples | 0.755 | $92.72 | $92.72 | $70.00 | $0.00 (0.00%) |
| XOM | Energy | 0.395 | $177.30 | $177.30 | $70.00 | $0.00 (0.00%) |
| CVX | Energy | 0.311 | $224.78 | $224.78 | $70.00 | $0.00 (0.00%) |
| JPM | Financials | 0.209 | $335.73 | $335.73 | $70.00 | $0.00 (0.00%) |
| MSFT | Information Technology | 0.131 | $532.73 | $532.73 | $70.00 | $0.00 (0.00%) |
| V | Financials | 0.172 | $406.96 | $406.96 | $70.00 | $0.00 (0.00%) |
| LMT | Industrials | 0.127 | $549.38 | $549.38 | $70.00 | $0.00 (0.00%) |
| TXN | Information Technology | 0.249 | $279.65 | $279.65 | $69.65 | $0.00 (0.00%) |

**Compra inicial de hoy:**
- COMPRA JNJ — 0.270 shares a $259.61 ($70.00).
- COMPRA PG — 0.442 shares a $158.20 ($70.00).
- COMPRA KO — 0.755 shares a $92.72 ($70.00).
- COMPRA XOM — 0.395 shares a $177.30 ($70.00).
- COMPRA CVX — 0.311 shares a $224.78 ($70.00).
- COMPRA JPM — 0.209 shares a $335.73 ($70.00).
- COMPRA MSFT — 0.131 shares a $532.73 ($70.00).
- COMPRA V — 0.172 shares a $406.96 ($70.00).
- COMPRA LMT — 0.127 shares a $549.38 ($70.00).
- COMPRA TXN — 0.249 shares a $279.65 ($69.65).

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor mercado | P&L no realizado |
|---|---|---|---|---|---|---|
| MRNA | Health Care | 0.155 | $241.29 | $241.29 | $37.50 | $0.00 (0.00%) |
| VEEV | Health Care | 0.226 | $315.43 | $315.43 | $71.37 | $0.00 (0.00%) |
| ISRG | Health Care | 0.221 | $438.48 | $438.48 | $97.04 | $0.00 (0.00%) |
| TMO | Health Care | 0.114 | $690.08 | $690.08 | $78.98 | $0.00 (0.00%) |

### Movimientos ejecutados hoy

- **COMPRA MRNA** — 0.155 shares a $241.29 ($37.50). _Señal técnica de compra (score 70): Tendencia de corto plazo alcista: SMA20 (206.81) por encima de SMA50 (161.92). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 28.7%. RSI 67: zona neutral._
- **COMPRA VEEV** — 0.226 shares a $315.43 ($71.37). _Señal técnica de compra (score 68): Tendencia de corto plazo alcista: SMA20 (290.32) por encima de SMA50 (272.16). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 11.3%. RSI 70: sobrecompra, riesgo de corrección._
- **COMPRA ISRG** — 0.221 shares a $438.48 ($97.04). _Señal técnica de compra (score 63): Tendencia de corto plazo alcista: SMA20 (414.55) por encima de SMA50 (393.66). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 8.3%. RSI 69: zona neutral._
- **COMPRA TMO** — 0.114 shares a $690.08 ($78.98). _Señal técnica de compra (score 61): Tendencia de corto plazo alcista: SMA20 (670.95) por encima de SMA50 (639.98). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 5.1%. RSI 55: zona neutral._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| MRNA | Health Care | 70 | BUY | $241.29 | Tendencia de corto plazo alcista: SMA20 (206.81) por encima de SMA50 (161.92). |
| VEEV | Health Care | 68 | BUY | $315.43 | Tendencia de corto plazo alcista: SMA20 (290.32) por encima de SMA50 (272.16). |
| ISRG | Health Care | 63 | BUY | $438.48 | Tendencia de corto plazo alcista: SMA20 (414.55) por encima de SMA50 (393.66). |
| ACN | Information Technology | 62 | HOLD | $238.93 | Tendencia de corto plazo alcista: SMA20 (201.90) por encima de SMA50 (190.31). |
| TMO | Health Care | 61 | BUY | $690.08 | Tendencia de corto plazo alcista: SMA20 (670.95) por encima de SMA50 (639.98). |
| MPC | Energy | 60 | HOLD | $474.69 | Tendencia de corto plazo alcista: SMA20 (437.14) por encima de SMA50 (402.30). |
| PSX | Energy | 58 | BUY | $291.74 | Tendencia de corto plazo alcista: SMA20 (273.25) por encima de SMA50 (258.88). |
| A | Health Care | 56 | BUY | $173.82 | Tendencia de corto plazo alcista: SMA20 (171.16) por encima de SMA50 (159.69). |
| MTD | Health Care | 55 | BUY | $1634.77 | Tendencia de corto plazo alcista: SMA20 (1553.19) por encima de SMA50 (1451.69). |
| RVTY | Health Care | 54 | BUY | $156.81 | Tendencia de corto plazo alcista: SMA20 (152.48) por encima de SMA50 (137.67). |
| SWKS | Information Technology | 53 | BUY | $82.40 | Tendencia de corto plazo alcista: SMA20 (82.74) por encima de SMA50 (77.85). |
| VTRS | Health Care | 52 | BUY | $18.44 | Tendencia de corto plazo alcista: SMA20 (17.75) por encima de SMA50 (17.04). |
| PLTR | Information Technology | 51 | BUY | $195.82 | Tendencia de corto plazo alcista: SMA20 (194.64) por encima de SMA50 (183.42). |
| BIIB | Health Care | 50 | BUY | $242.72 | Tendencia de corto plazo alcista: SMA20 (227.70) por encima de SMA50 (220.93). |
| DHR | Health Care | 50 | BUY | $225.02 | Tendencia de corto plazo alcista: SMA20 (222.00) por encima de SMA50 (214.34). |
| AXON | Industrials | -58 | SELL | $398.35 | Tendencia de corto plazo bajista: SMA20 (416.49) por debajo de SMA50 (494.98). |
| BKR | Energy | -60 | SELL | $55.66 | Tendencia de corto plazo bajista: SMA20 (56.26) por debajo de SMA50 (59.51). |
| MOS | Materials | -60 | SELL | $17.92 | Tendencia de corto plazo bajista: SMA20 (20.57) por debajo de SMA50 (22.63). |
| ARE | Real Estate | -61 | SELL | $42.13 | Tendencia de corto plazo bajista: SMA20 (45.59) por debajo de SMA50 (48.66). |
| TMUS | Communication Services | -61 | SELL | $158.22 | Tendencia de corto plazo bajista: SMA20 (161.31) por debajo de SMA50 (171.74). |
| AKAM | Information Technology | -62 | SELL | $89.78 | Tendencia de corto plazo bajista: SMA20 (103.10) por debajo de SMA50 (107.73). |
| ALB | Materials | -62 | SELL | $96.70 | Tendencia de corto plazo bajista: SMA20 (102.89) por debajo de SMA50 (117.77). |
| JBL | Information Technology | -62 | SELL | $276.18 | Tendencia de corto plazo bajista: SMA20 (301.37) por debajo de SMA50 (310.96). |
| VRT | Industrials | -62 | SELL | $203.65 | Tendencia de corto plazo bajista: SMA20 (237.47) por debajo de SMA50 (252.78). |
| CVNA | Consumer Discretionary | -63 | SELL | $60.40 | Tendencia de corto plazo bajista: SMA20 (62.02) por debajo de SMA50 (67.47). |
| SKYD | Communication Services | -64 | SELL | $7.14 | Tendencia de corto plazo bajista: SMA20 (8.99) por debajo de SMA50 (9.86). |
| NRG | Utilities | -67 | SELL | $98.70 | Tendencia de corto plazo bajista: SMA20 (101.17) por debajo de SMA50 (108.47). |
| HWM | Industrials | -68 | SELL | $207.66 | Tendencia de corto plazo bajista: SMA20 (224.55) por debajo de SMA50 (242.95). |
| WDC | Information Technology | -68 | SELL | $363.52 | Tendencia de corto plazo bajista: SMA20 (410.22) por debajo de SMA50 (438.99). |
| ORCL | Information Technology | -70 | SELL | $132.00 | Tendencia de corto plazo bajista: SMA20 (137.32) por debajo de SMA50 (143.94). |

#### Detalle de razonamiento (señales destacadas)

**MRNA** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (206.81) por encima de SMA50 (161.92).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 28.7%.
  - RSI 67: zona neutral.
**VEEV** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (290.32) por encima de SMA50 (272.16).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.3%.
  - RSI 70: sobrecompra, riesgo de corrección.
**ISRG** (score 63, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (414.55) por encima de SMA50 (393.66).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.3%.
  - RSI 69: zona neutral.
**ACN** (score 62, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (201.90) por encima de SMA50 (190.31).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 24.5%.
  - RSI 80: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 80 >= 80): se espera una corrección antes de entrar.
**TMO** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (670.95) por encima de SMA50 (639.98).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.1%.
  - RSI 55: zona neutral.
**MPC** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (437.14) por encima de SMA50 (402.30).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.8%.
  - RSI 82: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 82 >= 80): se espera una corrección antes de entrar.
**PSX** (score 58, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (273.25) por encima de SMA50 (258.88).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.1%.
  - RSI 78: sobrecompra, riesgo de corrección.
**A** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (171.16) por encima de SMA50 (159.69).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.7%.
  - RSI 53: zona neutral.
**MTD** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1553.19) por encima de SMA50 (1451.69).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.6%.
  - RSI 76: sobrecompra, riesgo de corrección.
**RVTY** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (152.48) por encima de SMA50 (137.67).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.3%.
  - RSI 55: zona neutral.
**SWKS** (score 53, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (82.74) por encima de SMA50 (77.85).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.5%.
  - RSI 43: zona neutral.
**VTRS** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (17.75) por encima de SMA50 (17.04).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.2%.
  - RSI 61: zona neutral.
**PLTR** (score 51, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (194.64) por encima de SMA50 (183.42).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.0%.
  - RSI 58: zona neutral.
**BIIB** (score 50, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (227.70) por encima de SMA50 (220.93).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.9%.
  - RSI 68: zona neutral.
**DHR** (score 50, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (222.00) por encima de SMA50 (214.34).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.4%.
  - RSI 53: zona neutral.
**AXON** (score -58, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (416.49) por debajo de SMA50 (494.98).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.8%.
  - RSI 40: zona neutral.
**BKR** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (56.26) por debajo de SMA50 (59.51).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -2.6%.
  - RSI 54: zona neutral.
**MOS** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (20.57) por debajo de SMA50 (22.63).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.4%.
  - RSI 13: sobreventa, posible rebote.
**ARE** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (45.59) por debajo de SMA50 (48.66).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.3%.
  - RSI 27: sobreventa, posible rebote.
**TMUS** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (161.31) por debajo de SMA50 (171.74).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.6%.
  - RSI 45: zona neutral.
**AKAM** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (103.10) por debajo de SMA50 (107.73).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -17.3%.
  - RSI 30: sobreventa, posible rebote.
**ALB** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (102.89) por debajo de SMA50 (117.77).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.1%.
  - RSI 25: sobreventa, posible rebote.
**JBL** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (301.37) por debajo de SMA50 (310.96).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.7%.
  - RSI 45: zona neutral.
**VRT** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (237.47) por debajo de SMA50 (252.78).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -19.6%.
  - RSI 20: sobreventa, posible rebote.
**CVNA** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (62.02) por debajo de SMA50 (67.47).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.4%.
  - RSI 44: zona neutral.
**SKYD** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (8.99) por debajo de SMA50 (9.86).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -25.1%.
  - RSI 24: sobreventa, posible rebote.
**NRG** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (101.17) por debajo de SMA50 (108.47).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.7%.
  - RSI 54: zona neutral.
**HWM** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (224.55) por debajo de SMA50 (242.95).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.3%.
  - RSI 30: zona neutral.
**WDC** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (410.22) por debajo de SMA50 (438.99).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.6%.
  - RSI 30: zona neutral.
**ORCL** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (137.32) por debajo de SMA50 (143.94).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.5%.
  - RSI 46: zona neutral.

---
_Generado automáticamente el 2026-10-20T18:09:30.383Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._