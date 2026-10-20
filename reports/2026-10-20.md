# Reporte diario de inversión (simulado) — 2026-10-20

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$999.51**
- P&L acumulado: $-0.49 (-0.05%)
- Core (70%, largo plazo): $699.65 (-0.05%) | Satellite (30%, técnico): $299.86 (-0.05%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 18.66 — CALMA (Dentro del rango histórico normal.) Variación 10d: +3.6 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +1.03 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -0.52 pts — normal.
- **Índice dólar (DXY)**: 101.74 (variación 10d: -0.50)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor mercado | P&L no realizado |
|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.273 | $256.78 | $256.78 | $70.00 | $0.00 (0.00%) |
| PG | Consumer Staples | 0.441 | $158.76 | $158.76 | $70.00 | $0.00 (0.00%) |
| KO | Consumer Staples | 0.748 | $93.57 | $93.57 | $70.00 | $0.00 (0.00%) |
| XOM | Energy | 0.389 | $179.97 | $179.97 | $70.00 | $0.00 (0.00%) |
| CVX | Energy | 0.309 | $226.55 | $226.55 | $70.00 | $0.00 (0.00%) |
| JPM | Financials | 0.210 | $333.78 | $333.78 | $70.00 | $0.00 (0.00%) |
| MSFT | Information Technology | 0.131 | $532.84 | $532.84 | $70.00 | $0.00 (0.00%) |
| V | Financials | 0.173 | $404.21 | $404.21 | $70.00 | $0.00 (0.00%) |
| LMT | Industrials | 0.127 | $550.33 | $550.33 | $70.00 | $0.00 (0.00%) |
| TXN | Information Technology | 0.255 | $273.58 | $273.58 | $69.65 | $0.00 (0.00%) |

**Compra inicial de hoy:**
- COMPRA JNJ — 0.273 shares a $256.78 ($70.00).
- COMPRA PG — 0.441 shares a $158.76 ($70.00).
- COMPRA KO — 0.748 shares a $93.57 ($70.00).
- COMPRA XOM — 0.389 shares a $179.97 ($70.00).
- COMPRA CVX — 0.309 shares a $226.55 ($70.00).
- COMPRA JPM — 0.210 shares a $333.78 ($70.00).
- COMPRA MSFT — 0.131 shares a $532.84 ($70.00).
- COMPRA V — 0.173 shares a $404.21 ($70.00).
- COMPRA LMT — 0.127 shares a $550.33 ($70.00).
- COMPRA TXN — 0.255 shares a $273.58 ($69.65).

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor mercado | P&L no realizado |
|---|---|---|---|---|---|---|
| MRNA | Health Care | 0.164 | $229.09 | $229.09 | $37.50 | $0.00 (0.00%) |
| VEEV | Health Care | 0.226 | $318.44 | $318.44 | $72.12 | $0.00 (0.00%) |
| TMO | Health Care | 0.128 | $682.54 | $682.54 | $87.58 | $0.00 (0.00%) |
| PSX | Energy | 0.300 | $292.52 | $292.52 | $87.70 | $0.00 (0.00%) |

### Movimientos ejecutados hoy

- **COMPRA MRNA** — 0.164 shares a $229.09 ($37.50). _Señal técnica de compra (score 72): Tendencia de corto plazo alcista: SMA20 (206.20) por encima de SMA50 (161.67). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 22.2%. RSI 64: zona neutral._
- **COMPRA VEEV** — 0.226 shares a $318.44 ($72.12). _Señal técnica de compra (score 67): Tendencia de corto plazo alcista: SMA20 (290.47) por encima de SMA50 (272.22). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 12.3%. RSI 72: sobrecompra, riesgo de corrección._
- **COMPRA TMO** — 0.128 shares a $682.54 ($87.58). _Señal técnica de compra (score 59): Tendencia de corto plazo alcista: SMA20 (670.58) por encima de SMA50 (639.83). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 4.0%. RSI 53: zona neutral._
- **COMPRA PSX** — 0.300 shares a $292.52 ($87.70). _Señal técnica de compra (score 58): Tendencia de corto plazo alcista: SMA20 (273.29) por encima de SMA50 (258.90). Precio por encima de la media de 200 días: contexto de fondo alcista. Momentum 10d: 8.4%. RSI 78: sobrecompra, riesgo de corrección._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| MRNA | Health Care | 72 | BUY | $229.09 | Tendencia de corto plazo alcista: SMA20 (206.20) por encima de SMA50 (161.67). |
| VEEV | Health Care | 67 | BUY | $318.44 | Tendencia de corto plazo alcista: SMA20 (290.47) por encima de SMA50 (272.22). |
| ACN | Information Technology | 62 | HOLD | $238.31 | Tendencia de corto plazo alcista: SMA20 (201.87) por encima de SMA50 (190.30). |
| MPC | Energy | 59 | HOLD | $473.64 | Tendencia de corto plazo alcista: SMA20 (437.09) por encima de SMA50 (402.28). |
| TMO | Health Care | 59 | BUY | $682.54 | Tendencia de corto plazo alcista: SMA20 (670.58) por encima de SMA50 (639.83). |
| PSX | Energy | 58 | BUY | $292.52 | Tendencia de corto plazo alcista: SMA20 (273.29) por encima de SMA50 (258.90). |
| MTD | Health Care | 56 | BUY | $1625.73 | Tendencia de corto plazo alcista: SMA20 (1545.99) por encima de SMA50 (1447.55). |
| A | Health Care | 54 | BUY | $170.99 | Tendencia de corto plazo alcista: SMA20 (171.02) por encima de SMA50 (159.63). |
| VTRS | Health Care | 52 | BUY | $18.38 | Tendencia de corto plazo alcista: SMA20 (17.75) por encima de SMA50 (17.04). |
| RVTY | Health Care | 51 | BUY | $154.16 | Tendencia de corto plazo alcista: SMA20 (152.35) por encima de SMA50 (137.61). |
| VLO | Energy | 51 | BUY | $436.12 | Tendencia de corto plazo alcista: SMA20 (418.81) por encima de SMA50 (386.75). |
| DHR | Health Care | 50 | BUY | $225.29 | Tendencia de corto plazo alcista: SMA20 (222.01) por encima de SMA50 (214.35). |
| PLTR | Information Technology | 48 | BUY | $192.20 | Tendencia de corto plazo alcista: SMA20 (194.46) por encima de SMA50 (183.35). |
| EBAY | Consumer Discretionary | 47 | HOLD | $120.71 | Tendencia de corto plazo alcista: SMA20 (111.70) por encima de SMA50 (107.99). |
| SWKS | Information Technology | 47 | BUY | $79.74 | Tendencia de corto plazo alcista: SMA20 (82.60) por encima de SMA50 (77.80). |
| TMUS | Communication Services | -60 | SELL | $158.78 | Tendencia de corto plazo bajista: SMA20 (161.34) por debajo de SMA50 (171.75). |
| ARE | Real Estate | -61 | SELL | $40.86 | Tendencia de corto plazo bajista: SMA20 (45.53) por debajo de SMA50 (48.64). |
| AKAM | Information Technology | -61 | SELL | $88.15 | Tendencia de corto plazo bajista: SMA20 (103.02) por debajo de SMA50 (107.69). |
| CMI | Industrials | -61 | SELL | $515.34 | Tendencia de corto plazo bajista: SMA20 (523.82) por debajo de SMA50 (552.47). |
| FSLR | Information Technology | -61 | SELL | $171.83 | Tendencia de corto plazo bajista: SMA20 (177.34) por debajo de SMA50 (196.70). |
| IBKR | Financials | -61 | SELL | $81.04 | Tendencia de corto plazo bajista: SMA20 (86.79) por debajo de SMA50 (89.88). |
| VRT | Industrials | -61 | SELL | $200.80 | Tendencia de corto plazo bajista: SMA20 (237.33) por debajo de SMA50 (252.72). |
| HWM | Industrials | -62 | SELL | $215.64 | Tendencia de corto plazo bajista: SMA20 (224.95) por debajo de SMA50 (243.11). |
| JBL | Information Technology | -62 | SELL | $278.26 | Tendencia de corto plazo bajista: SMA20 (301.48) por debajo de SMA50 (311.00). |
| SKYD | Communication Services | -63 | SELL | $6.97 | Tendencia de corto plazo bajista: SMA20 (8.98) por debajo de SMA50 (9.86). |
| AXON | Industrials | -65 | SELL | $381.24 | Tendencia de corto plazo bajista: SMA20 (415.64) por debajo de SMA50 (494.64). |
| NRG | Utilities | -66 | SELL | $99.00 | Tendencia de corto plazo bajista: SMA20 (101.18) por debajo de SMA50 (108.47). |
| WDC | Information Technology | -66 | SELL | $347.09 | Tendencia de corto plazo bajista: SMA20 (409.40) por debajo de SMA50 (438.66). |
| CVNA | Consumer Discretionary | -68 | SELL | $58.39 | Tendencia de corto plazo bajista: SMA20 (61.92) por debajo de SMA50 (67.43). |
| ORCL | Information Technology | -73 | SELL | $128.10 | Tendencia de corto plazo bajista: SMA20 (137.13) por debajo de SMA50 (143.86). |

#### Detalle de razonamiento (señales destacadas)

**MRNA** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (206.20) por encima de SMA50 (161.67).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 22.2%.
  - RSI 64: zona neutral.
**VEEV** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (290.47) por encima de SMA50 (272.22).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.3%.
  - RSI 72: sobrecompra, riesgo de corrección.
**ACN** (score 62, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (201.87) por encima de SMA50 (190.30).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 24.2%.
  - RSI 80: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 80 >= 80): se espera una corrección antes de entrar.
**MPC** (score 59, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (437.09) por encima de SMA50 (402.28).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.5%.
  - RSI 82: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 82 >= 80): se espera una corrección antes de entrar.
**TMO** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (670.58) por encima de SMA50 (639.83).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.0%.
  - RSI 53: zona neutral.
**PSX** (score 58, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (273.29) por encima de SMA50 (258.90).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.4%.
  - RSI 78: sobrecompra, riesgo de corrección.
**MTD** (score 56, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1545.99) por encima de SMA50 (1447.55).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.5%.
  - RSI 67: zona neutral.
**A** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (171.02) por encima de SMA50 (159.63).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.0%.
  - RSI 48: zona neutral.
**VTRS** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (17.75) por encima de SMA50 (17.04).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.8%.
  - RSI 61: zona neutral.
**RVTY** (score 51, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (152.35) por encima de SMA50 (137.61).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.6%.
  - RSI 52: zona neutral.
**VLO** (score 51, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (418.81) por encima de SMA50 (386.75).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.0%.
  - RSI 69: zona neutral.
**DHR** (score 50, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (222.01) por encima de SMA50 (214.35).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.5%.
  - RSI 54: zona neutral.
**PLTR** (score 48, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (194.46) por encima de SMA50 (183.35).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.1%.
  - RSI 54: zona neutral.
**EBAY** (score 47, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (111.70) por encima de SMA50 (107.99).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.8%.
  - RSI 86: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 86 >= 80): se espera una corrección antes de entrar.
**SWKS** (score 47, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (82.60) por encima de SMA50 (77.80).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.7%.
  - RSI 37: zona neutral.
**TMUS** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (161.34) por debajo de SMA50 (171.75).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.3%.
  - RSI 46: zona neutral.
**ARE** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (45.53) por debajo de SMA50 (48.64).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.0%.
  - RSI 18: sobreventa, posible rebote.
**AKAM** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (103.02) por debajo de SMA50 (107.69).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -18.8%.
  - RSI 27: sobreventa, posible rebote.
**CMI** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (523.82) por debajo de SMA50 (552.47).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -3.7%.
  - RSI 49: zona neutral.
**FSLR** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (177.34) por debajo de SMA50 (196.70).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.4%.
  - RSI 45: zona neutral.
**IBKR** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (86.79) por debajo de SMA50 (89.88).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.5%.
  - RSI 40: zona neutral.
**VRT** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (237.33) por debajo de SMA50 (252.72).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -20.7%.
  - RSI 19: sobreventa, posible rebote.
**HWM** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (224.95) por debajo de SMA50 (243.11).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.9%.
  - RSI 36: zona neutral.
**JBL** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (301.48) por debajo de SMA50 (311.00).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.0%.
  - RSI 46: zona neutral.
**SKYD** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (8.98) por debajo de SMA50 (9.86).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -26.9%.
  - RSI 22: sobreventa, posible rebote.
**AXON** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (415.64) por debajo de SMA50 (494.64).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.9%.
  - RSI 31: zona neutral.
**NRG** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (101.18) por debajo de SMA50 (108.47).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.4%.
  - RSI 55: zona neutral.
**WDC** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (409.40) por debajo de SMA50 (438.66).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.6%.
  - RSI 26: sobreventa, posible rebote.
**CVNA** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (61.92) por debajo de SMA50 (67.43).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.6%.
  - RSI 37: zona neutral.
**ORCL** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (137.13) por debajo de SMA50 (143.86).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.2%.
  - RSI 43: zona neutral.

---
_Generado automáticamente el 2026-10-20T13:31:00.884Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._