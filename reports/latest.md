# Reporte diario de inversión (simulado) — 2026-10-20

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$999.79**
- P&L acumulado: $-0.21 (-0.02%)
- Core (70%, largo plazo): $699.91 (-0.01%) | Satellite (30%, técnico): $299.88 (-0.04%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 18.64 — CALMA (Dentro del rango histórico normal.) Variación 10d: +3.6 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +1.03 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -0.51 pts — normal.
- **Índice dólar (DXY)**: 101.74 (variación 10d: -0.50)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor mercado | P&L no realizado |
|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.273 | $256.78 | $257.14 | $70.10 | $0.10 (+0.14%) |
| PG | Consumer Staples | 0.441 | $158.76 | $158.65 | $69.95 | $-0.05 (-0.07%) |
| KO | Consumer Staples | 0.748 | $93.57 | $93.61 | $70.03 | $0.03 (+0.04%) |
| XOM | Energy | 0.389 | $179.97 | $179.92 | $69.98 | $-0.02 (-0.03%) |
| CVX | Energy | 0.309 | $226.55 | $226.34 | $69.94 | $-0.06 (-0.09%) |
| JPM | Financials | 0.210 | $333.78 | $333.71 | $69.99 | $-0.01 (-0.02%) |
| MSFT | Information Technology | 0.131 | $532.84 | $533.78 | $70.12 | $0.12 (+0.18%) |
| V | Financials | 0.173 | $404.21 | $404.26 | $70.01 | $0.01 (+0.01%) |
| LMT | Industrials | 0.127 | $550.33 | $554.66 | $70.55 | $0.55 (+0.79%) |
| TXN | Information Technology | 0.255 | $273.58 | $272.01 | $69.25 | $-0.40 (-0.57%) |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor mercado | P&L no realizado |
|---|---|---|---|---|---|---|
| MRNA | Health Care | 0.164 | $229.09 | $227.68 | $37.27 | $-0.23 (-0.62%) |
| VEEV | Health Care | 0.226 | $318.44 | $318.76 | $72.19 | $0.07 (+0.10%) |
| TMO | Health Care | 0.128 | $682.54 | $684.47 | $87.83 | $0.25 (+0.28%) |
| PSX | Energy | 0.300 | $292.52 | $292.29 | $87.63 | $-0.07 (-0.08%) |

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| MRNA | Health Care | 72 | BUY | $227.68 | Tendencia de corto plazo alcista: SMA20 (206.13) por encima de SMA50 (161.65). |
| VEEV | Health Care | 66 | BUY | $318.76 | Tendencia de corto plazo alcista: SMA20 (290.49) por encima de SMA50 (272.22). |
| ACN | Information Technology | 62 | HOLD | $239.49 | Tendencia de corto plazo alcista: SMA20 (201.93) por encima de SMA50 (190.32). |
| MPC | Energy | 59 | HOLD | $473.71 | Tendencia de corto plazo alcista: SMA20 (437.09) por encima de SMA50 (402.28). |
| TMO | Health Care | 59 | BUY | $684.47 | Tendencia de corto plazo alcista: SMA20 (670.67) por encima de SMA50 (639.87). |
| PSX | Energy | 58 | BUY | $292.29 | Tendencia de corto plazo alcista: SMA20 (273.28) por encima de SMA50 (258.89). |
| MTD | Health Care | 55 | BUY | $1640.09 | Tendencia de corto plazo alcista: SMA20 (1553.46) por encima de SMA50 (1451.80). |
| A | Health Care | 54 | BUY | $171.54 | Tendencia de corto plazo alcista: SMA20 (171.05) por encima de SMA50 (159.65). |
| RVTY | Health Care | 52 | BUY | $155.55 | Tendencia de corto plazo alcista: SMA20 (152.42) por encima de SMA50 (137.64). |
| VTRS | Health Care | 52 | BUY | $18.45 | Tendencia de corto plazo alcista: SMA20 (17.75) por encima de SMA50 (17.04). |
| VLO | Energy | 51 | BUY | $436.36 | Tendencia de corto plazo alcista: SMA20 (418.82) por encima de SMA50 (386.76). |
| DHR | Health Care | 50 | BUY | $225.93 | Tendencia de corto plazo alcista: SMA20 (222.04) por encima de SMA50 (214.36). |
| PLTR | Information Technology | 48 | BUY | $192.80 | Tendencia de corto plazo alcista: SMA20 (194.49) por encima de SMA50 (183.36). |
| EBAY | Consumer Discretionary | 47 | HOLD | $120.80 | Tendencia de corto plazo alcista: SMA20 (111.70) por encima de SMA50 (107.99). |
| SWKS | Information Technology | 47 | BUY | $79.88 | Tendencia de corto plazo alcista: SMA20 (82.61) por encima de SMA50 (77.80). |
| MOS | Materials | -60 | SELL | $17.96 | Tendencia de corto plazo bajista: SMA20 (20.57) por debajo de SMA50 (22.63). |
| TMUS | Communication Services | -60 | SELL | $159.00 | Tendencia de corto plazo bajista: SMA20 (161.35) por debajo de SMA50 (171.75). |
| ARE | Real Estate | -61 | SELL | $40.87 | Tendencia de corto plazo bajista: SMA20 (45.53) por debajo de SMA50 (48.64). |
| CMI | Industrials | -61 | SELL | $515.07 | Tendencia de corto plazo bajista: SMA20 (523.81) por debajo de SMA50 (552.46). |
| FSLR | Information Technology | -61 | SELL | $171.85 | Tendencia de corto plazo bajista: SMA20 (177.34) por debajo de SMA50 (196.70). |
| IBKR | Financials | -61 | SELL | $80.97 | Tendencia de corto plazo bajista: SMA20 (86.78) por debajo de SMA50 (89.88). |
| VRT | Industrials | -61 | SELL | $200.74 | Tendencia de corto plazo bajista: SMA20 (237.33) por debajo de SMA50 (252.72). |
| HWM | Industrials | -62 | SELL | $215.65 | Tendencia de corto plazo bajista: SMA20 (224.95) por debajo de SMA50 (243.11). |
| JBL | Information Technology | -62 | SELL | $276.94 | Tendencia de corto plazo bajista: SMA20 (301.41) por debajo de SMA50 (310.97). |
| AXON | Industrials | -63 | SELL | $385.05 | Tendencia de corto plazo bajista: SMA20 (415.83) por debajo de SMA50 (494.72). |
| SKYD | Communication Services | -63 | SELL | $6.97 | Tendencia de corto plazo bajista: SMA20 (8.98) por debajo de SMA50 (9.86). |
| NRG | Utilities | -65 | SELL | $99.36 | Tendencia de corto plazo bajista: SMA20 (101.20) por debajo de SMA50 (108.48). |
| WDC | Information Technology | -66 | SELL | $346.41 | Tendencia de corto plazo bajista: SMA20 (409.37) por debajo de SMA50 (438.65). |
| CVNA | Consumer Discretionary | -67 | SELL | $58.55 | Tendencia de corto plazo bajista: SMA20 (61.92) por debajo de SMA50 (67.43). |
| ORCL | Information Technology | -73 | SELL | $128.47 | Tendencia de corto plazo bajista: SMA20 (137.14) por debajo de SMA50 (143.86). |

#### Detalle de razonamiento (señales destacadas)

**MRNA** (score 72, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (206.13) por encima de SMA50 (161.65).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 21.5%.
  - RSI 63: zona neutral.
**VEEV** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (290.49) por encima de SMA50 (272.22).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.4%.
  - RSI 73: sobrecompra, riesgo de corrección.
**ACN** (score 62, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (201.93) por encima de SMA50 (190.32).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 24.8%.
  - RSI 80: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 80 >= 80): se espera una corrección antes de entrar.
**MPC** (score 59, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (437.09) por encima de SMA50 (402.28).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.6%.
  - RSI 82: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 82 >= 80): se espera una corrección antes de entrar.
**TMO** (score 59, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (670.67) por encima de SMA50 (639.87).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.2%.
  - RSI 53: zona neutral.
**PSX** (score 58, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (273.28) por encima de SMA50 (258.89).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.3%.
  - RSI 78: sobrecompra, riesgo de corrección.
**MTD** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (1553.46) por encima de SMA50 (1451.80).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.0%.
  - RSI 76: sobrecompra, riesgo de corrección.
**A** (score 54, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (171.05) por encima de SMA50 (159.65).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.3%.
  - RSI 49: zona neutral.
**RVTY** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (152.42) por encima de SMA50 (137.64).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.5%.
  - RSI 54: zona neutral.
**VTRS** (score 52, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (17.75) por encima de SMA50 (17.04).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.2%.
  - RSI 61: zona neutral.
**VLO** (score 51, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (418.82) por encima de SMA50 (386.76).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.1%.
  - RSI 69: zona neutral.
**DHR** (score 50, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (222.04) por encima de SMA50 (214.36).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.8%.
  - RSI 54: zona neutral.
**PLTR** (score 48, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (194.49) por encima de SMA50 (183.36).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.4%.
  - RSI 55: zona neutral.
**EBAY** (score 47, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (111.70) por encima de SMA50 (107.99).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.8%.
  - RSI 86: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 86 >= 80): se espera una corrección antes de entrar.
**SWKS** (score 47, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (82.61) por encima de SMA50 (77.80).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -3.5%.
  - RSI 37: zona neutral.
**MOS** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (20.57) por debajo de SMA50 (22.63).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.2%.
  - RSI 14: sobreventa, posible rebote.
**TMUS** (score -60, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (161.35) por debajo de SMA50 (171.75).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.2%.
  - RSI 46: zona neutral.
**ARE** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (45.53) por debajo de SMA50 (48.64).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.0%.
  - RSI 18: sobreventa, posible rebote.
**CMI** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (523.81) por debajo de SMA50 (552.46).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -3.8%.
  - RSI 49: zona neutral.
**FSLR** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (177.34) por debajo de SMA50 (196.70).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.4%.
  - RSI 46: zona neutral.
**IBKR** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (86.78) por debajo de SMA50 (89.88).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.6%.
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
  - Tendencia de corto plazo bajista: SMA20 (301.41) por debajo de SMA50 (310.97).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.4%.
  - RSI 45: zona neutral.
**AXON** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (415.83) por debajo de SMA50 (494.72).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.0%.
  - RSI 32: zona neutral.
**SKYD** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (8.98) por debajo de SMA50 (9.86).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -26.9%.
  - RSI 22: sobreventa, posible rebote.
**NRG** (score -65, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (101.20) por debajo de SMA50 (108.48).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -4.1%.
  - RSI 55: zona neutral.
**WDC** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (409.37) por debajo de SMA50 (438.65).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -15.7%.
  - RSI 26: sobreventa, posible rebote.
**CVNA** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (61.92) por debajo de SMA50 (67.43).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.3%.
  - RSI 37: zona neutral.
**ORCL** (score -73, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (137.14) por debajo de SMA50 (143.86).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.9%.
  - RSI 43: zona neutral.

---
_Generado automáticamente el 2026-10-20T13:31:52.334Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

**Cierre general:** la búsqueda web no devolvió ninguna nota fechada del 2026-10-20 sobre el cierre del S&P 500 / Nasdaq (solo cierres de otras fechas, p. ej. 22-jul-2026), así que no se puede atribuir el movimiento de hoy a un catalizador concreto sin inventarlo. Contexto de la simulación: el portfolio quedó en $999.79 (-0.02%) — básicamente plano, porque el core se compró hoy mismo y no hubo trades en el satellite; VIX 18.64 (calma) y régimen alcista.

**Tickers destacados:**
- **MRNA** (BUY, score 72, posición satellite abierta): no se encontró noticia fechada hoy que explique el movimiento. Contexto encontrado: nombramiento de Juan Andres como COO (efectivo 5-oct-2026), inclusión reportada en el Nasdaq-100 desde el 9-oct y reporte de resultados esperado el 30-oct (consenso: pérdida de $1.38/acción). Esto es un riesgo de evento próximo para una posición que el motor ve alcista por momentum (+21.5% en 10d); los precios citados por las fuentes son inconsistentes entre sí, tomarlos con cautela.
- **ORCL** (SELL, score -73): artículos de principios de octubre describen una caída de ~17% en 30 días por gasto de capital en infraestructura de IA, flujo de caja libre negativo, apalancamiento y concentración de ingresos en OpenAI. Es coherente con la señal bajista del motor (SMA20 < SMA50), aunque no hay una noticia específica de hoy.

Sin noticia relevante encontrada para el resto de los tickers (VEEV, TMO, PSX, etc.), por lo que no se mencionan.

**Fuentes:**
- [Stock market today: S&P 500 closes above 7,000... (Yahoo Finance, fecha no confirmada)](https://finance.yahoo.com/markets/stocks/article/stock-market-today-sp-500-nasdaq-dow-futures-hover-amid-renewed-hopes-for-us-iran-talks-231104868.html)
- [Moderna pops 17%... (Barchart)](https://www.barchart.com/story/news/37158916/moderna-pops-17-is-there-life-in-mrna-down-90-from-covid-high)
- [Moderna earnings date (Earnings Whispers)](https://beta.earningswhispers.com/go/w/MRNA)
- [Oracle: is ORCL underperforming the technology sector (Barchart)](https://www.barchart.com/story/news/390507/oracle-stock-is-orcl-underperforming-the-technology-sector)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
