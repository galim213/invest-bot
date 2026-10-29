# Reporte diario de inversión (simulado) — 2026-10-29

> ⚠️ **Simulación educativa con dinero ficticio.** No es asesoría financiera real ni una recomendación de inversión. No constituye asesoría financiera.

## Resumen combinado (core + satellite)

- Capital inicial total: $1000.00
- Valor total hoy: **$1031.05**
- P&L acumulado: $31.05 (+3.10%)
- Core (70%, largo plazo): $731.59 (+4.51%) | Satellite (30%, técnico): $299.45 (-0.18%)

**Régimen de mercado: ALCISTA** (benchmark vs su SMA200) — _solo informativo, no bloquea trades del satellite: lo probamos como filtro y empeoró el resultado fuera de muestra (ver validación multi-régimen)._

## Panorama de riesgo macro (contexto, no predicción)

- **VIX**: 16.46 — CALMA (Dentro del rango histórico normal.) Variación 10d: -3.5 pts.
- **Curva de rendimientos (10 años vs 3 meses)**: +0.99 pts — normal (sin inversión).
- **Spread de crédito (proxy HYG vs LQD, 20d)**: -1.28 pts — normal.
- **Índice dólar (DXY)**: 102.03 (variación 10d: +0.19)

## 🏛️ Core — largo plazo, dividendos (70% del capital)

Comprado una sola vez, en partes iguales, en empresas de calidad con dividendo real. No se tradea con señales técnicas diarias — la lógica acá es "ser dueño y aguantar", no "adivinar el próximo movimiento".

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado | Último dividendo (de la empresa) | Cobrado este año | Cobrado desde el inicio |
|---|---|---|---|---|---|---|---|---|---|---|
| JNJ | Health Care | 0.270 | $259.61 | $275.17 | $74.20 | 10.1% | $4.20 (+5.99%) | $1.3400/acción (2026-08-25) | $0.00 | $0.00 |
| PG | Consumer Staples | 0.442 | $158.20 | $160.58 | $71.05 | 9.7% | $1.05 (+1.50%) | $1.0890/acción (2026-10-23) | $0.00 | $0.00 |
| KO | Consumer Staples | 0.755 | $92.72 | $92.83 | $70.08 | 9.6% | $0.08 (+0.12%) | $0.5300/acción (2026-09-15) | $0.00 | $0.00 |
| XOM | Energy | 0.395 | $177.30 | $183.18 | $72.32 | 9.9% | $2.32 (+3.31%) | $1.0300/acción (2026-08-17) | $0.00 | $0.00 |
| CVX | Energy | 0.311 | $224.78 | $231.45 | $72.08 | 9.9% | $2.08 (+2.97%) | $1.7800/acción (2026-08-19) | $0.00 | $0.00 |
| JPM | Financials | 0.209 | $335.73 | $343.59 | $71.64 | 9.8% | $1.64 (+2.34%) | $1.6500/acción (2026-10-06) | $0.00 | $0.00 |
| MSFT | Information Technology | 0.131 | $532.73 | $530.14 | $69.66 | 9.5% | $-0.34 (-0.49%) | $0.9100/acción (2026-08-20) | $0.00 | $0.00 |
| V | Financials | 0.172 | $406.96 | $410.57 | $70.62 | 9.7% | $0.62 (+0.89%) | $0.6700/acción (2026-08-11) | $0.00 | $0.00 |
| LMT | Industrials | 0.127 | $549.38 | $643.60 | $82.01 | 11.2% | $12.01 (+17.15%) | $3.4500/acción (2026-09-01) | $0.00 | $0.00 |
| TXN | Information Technology | 0.249 | $279.65 | $312.94 | $77.94 | 10.7% | $8.29 (+11.90%) | $1.4200/acción (2026-07-31) | $0.00 | $0.00 |

**Dividendos acumulados desde el inicio: $0.00**

## 🛰️ Satellite — técnico, corto/mediano plazo (30% del capital)

El motor multi-factor sobre el S&P 500 completo (SMA, momentum, RSI). ⚠️ Esta porción **no tiene edge validado fuera de muestra** — ver `GRADUATION_CRITERIA.md`. Es la parte de aprendizaje/experimentación, con riesgo acotado al 30% del capital.

| Ticker | Sector | Shares | Costo prom. | Precio actual | Valor total | % del sleeve | P&L no realizado |
|---|---|---|---|---|---|---|---|
| VEEV | Health Care | 0.226 | $315.43 | $310.30 | $70.21 | 23.4% | $-1.16 (-1.63%) |
| ISRG | Health Care | 0.221 | $438.48 | $448.76 | $99.31 | 33.2% | $2.28 (+2.34%) |
| TMO | Health Care | 0.114 | $690.08 | $709.29 | $81.18 | 27.1% | $2.20 (+2.78%) |
| CRL | Health Care | 0.062 | $339.66 | $375.83 | $23.35 | 7.8% | $2.25 (+10.65%) |
| MAR | Consumer Discretionary | 0.027 | $396.80 | $399.65 | $10.64 | 3.6% | $0.08 (+0.72%) |

### Concentración y correlación (informativo)

- Posiciones: 5 · N efectivo por peso (1/HHI): **3.68**
- Correlación promedio entre posiciones (retornos diarios, últimas 60 ruedas): **0.18** → N efectivo ajustado por correlación: **2.46**
- Por sector: Health Care 96% · Consumer Discretionary 4%

_Solo mide el riesgo; no cambia decisiones. Un tope sectorial y otras formas de diversificar ya se probaron y empeoraron el resultado fuera de muestra (ver `GRADUATION_CRITERIA.md`)._

### Movimientos ejecutados hoy

_No se ejecutaron movimientos hoy._

### Señales destacadas (top 15 + posiciones abiertas, de 503 tickers evaluados)

| Ticker | Sector | Score | Señal | Precio | Motivo principal |
|---|---|---|---|---|---|
| CRWD | Information Technology | 75 | BUY | $261.15 | Tendencia de corto plazo alcista: SMA20 (255.93) por encima de SMA50 (239.05). |
| CDNS | Information Technology | 70 | BUY | $342.75 | Tendencia de corto plazo alcista: SMA20 (336.33) por encima de SMA50 (320.24). |
| ILMN | Health Care | 70 | BUY | $290.06 | Tendencia de corto plazo alcista: SMA20 (274.12) por encima de SMA50 (248.84). |
| RCL | Consumer Discretionary | 69 | BUY | $310.39 | Tendencia de corto plazo alcista: SMA20 (284.39) por encima de SMA50 (270.82). |
| SNPS | Information Technology | 68 | BUY | $490.19 | Tendencia de corto plazo alcista: SMA20 (475.02) por encima de SMA50 (436.08). |
| CCL | Consumer Discretionary | 67 | BUY | $28.84 | Tendencia de corto plazo alcista: SMA20 (26.68) por encima de SMA50 (24.78). |
| TXN | Information Technology | 67 | BUY | $312.94 | Tendencia de corto plazo alcista: SMA20 (289.26) por encima de SMA50 (274.96). |
| ACN | Information Technology | 66 | BUY | $247.24 | Tendencia de corto plazo alcista: SMA20 (224.28) por encima de SMA50 (200.11). |
| CCI | Real Estate | 66 | BUY | $88.85 | Tendencia de corto plazo alcista: SMA20 (78.98) por encima de SMA50 (75.17). |
| P | Information Technology | 66 | BUY | $137.18 | Tendencia de corto plazo alcista: SMA20 (138.75) por encima de SMA50 (119.37). |
| HPE | Information Technology | 65 | BUY | $58.87 | Tendencia de corto plazo alcista: SMA20 (63.09) por encima de SMA50 (59.62). |
| ADI | Information Technology | 64 | BUY | $433.28 | Tendencia de corto plazo alcista: SMA20 (408.60) por encima de SMA50 (387.42). |
| APA | Energy | 62 | BUY | $51.51 | Tendencia de corto plazo alcista: SMA20 (47.89) por encima de SMA50 (45.19). |
| NTAP | Information Technology | 62 | BUY | $218.42 | Tendencia de corto plazo alcista: SMA20 (222.65) por encima de SMA50 (204.73). |
| IT | Information Technology | 61 | BUY | $224.93 | Tendencia de corto plazo alcista: SMA20 (206.85) por encima de SMA50 (195.58). |
| CRL | Health Care | 60 | HOLD | $375.83 | Tendencia de corto plazo alcista: SMA20 (321.33) por encima de SMA50 (300.54). |
| ISRG | Health Care | 55 | BUY | $448.76 | Tendencia de corto plazo alcista: SMA20 (428.37) por encima de SMA50 (400.39). |
| MAR | Consumer Discretionary | 46 | BUY | $399.65 | Tendencia de corto plazo alcista: SMA20 (380.23) por encima de SMA50 (359.35). |
| VEEV | Health Care | 41 | BUY | $310.30 | Tendencia de corto plazo alcista: SMA20 (304.17) por encima de SMA50 (282.61). |
| TMO | Health Care | 33 | HOLD | $709.29 | Tendencia de corto plazo alcista: SMA20 (677.38) por encima de SMA50 (653.10). |
| HWM | Industrials | -61 | SELL | $205.71 | Tendencia de corto plazo bajista: SMA20 (213.26) por debajo de SMA50 (230.52). |
| PCAR | Industrials | -62 | SELL | $102.29 | Tendencia de corto plazo bajista: SMA20 (107.86) por debajo de SMA50 (115.36). |
| CBRE | Real Estate | -63 | SELL | $128.61 | Tendencia de corto plazo bajista: SMA20 (129.40) por debajo de SMA50 (136.87). |
| JBHT | Industrials | -63 | SELL | $222.06 | Tendencia de corto plazo bajista: SMA20 (228.02) por debajo de SMA50 (242.98). |
| BA | Industrials | -64 | SELL | $172.72 | Tendencia de corto plazo bajista: SMA20 (186.43) por debajo de SMA50 (197.00). |
| DASH | Consumer Discretionary | -64 | SELL | $179.00 | Tendencia de corto plazo bajista: SMA20 (186.50) por debajo de SMA50 (198.71). |
| LVS | Consumer Discretionary | -64 | SELL | $37.04 | Tendencia de corto plazo bajista: SMA20 (36.78) por debajo de SMA50 (40.12). |
| NFLX | Communication Services | -66 | SELL | $62.05 | Tendencia de corto plazo bajista: SMA20 (67.83) por debajo de SMA50 (73.03). |
| HOOD | Financials | -67 | SELL | $91.59 | Tendencia de corto plazo bajista: SMA20 (102.34) por debajo de SMA50 (108.69). |
| APP | Communication Services | -68 | SELL | $254.91 | Tendencia de corto plazo bajista: SMA20 (269.53) por debajo de SMA50 (295.80). |
| TMUS | Communication Services | -68 | SELL | $147.29 | Tendencia de corto plazo bajista: SMA20 (156.17) por debajo de SMA50 (167.50). |
| BKNG | Consumer Discretionary | -70 | SELL | $150.43 | Tendencia de corto plazo bajista: SMA20 (158.03) por debajo de SMA50 (172.35). |
| BG | Consumer Staples | -70 | SELL | $95.98 | Tendencia de corto plazo bajista: SMA20 (104.32) por debajo de SMA50 (111.01). |
| T | Communication Services | -74 | SELL | $20.92 | Tendencia de corto plazo bajista: SMA20 (22.70) por debajo de SMA50 (24.23). |
| FICO | Information Technology | -77 | SELL | $709.00 | Tendencia de corto plazo bajista: SMA20 (732.42) por debajo de SMA50 (880.58). |

#### Detalle de razonamiento (señales destacadas)

**CRWD** (score 75, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (255.93) por encima de SMA50 (239.05).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 6.8%.
  - RSI 43: zona neutral.
**CDNS** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (336.33) por encima de SMA50 (320.24).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 5.7%.
  - RSI 45: zona neutral.
**ILMN** (score 70, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (274.12) por encima de SMA50 (248.84).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.3%.
  - RSI 58: zona neutral.
**RCL** (score 69, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (284.39) por encima de SMA50 (270.82).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 10.8%.
  - RSI 69: zona neutral.
**SNPS** (score 68, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (475.02) por encima de SMA50 (436.08).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.7%.
  - RSI 44: zona neutral.
**CCL** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (26.68) por encima de SMA50 (24.78).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.0%.
  - RSI 67: zona neutral.
**TXN** (score 67, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (289.26) por encima de SMA50 (274.96).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 12.1%.
  - RSI 72: sobrecompra, riesgo de corrección.
**ACN** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (224.28) por encima de SMA50 (200.11).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.9%.
  - RSI 73: sobrecompra, riesgo de corrección.
**CCI** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (78.98) por encima de SMA50 (75.17).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 11.1%.
  - RSI 73: sobrecompra, riesgo de corrección.
**P** (score 66, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (138.75) por encima de SMA50 (119.37).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 2.8%.
  - RSI 38: zona neutral.
**HPE** (score 65, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (63.09) por encima de SMA50 (59.62).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 0.4%.
  - RSI 27: sobreventa, posible rebote.
**ADI** (score 64, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (408.60) por encima de SMA50 (387.42).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 7.3%.
  - RSI 62: zona neutral.
**APA** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (47.89) por encima de SMA50 (45.19).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 9.6%.
  - RSI 79: sobrecompra, riesgo de corrección.
**NTAP** (score 62, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (222.65) por encima de SMA50 (204.73).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.7%.
  - RSI 38: zona neutral.
**IT** (score 61, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (206.85) por encima de SMA50 (195.58).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 8.5%.
  - RSI 73: sobrecompra, riesgo de corrección.
**CRL** (score 60, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (321.33) por encima de SMA50 (300.54).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 22.7%.
  - RSI 86: sobrecompra, riesgo de corrección.
  - Compra bloqueada por sobrecompra extrema (RSI 86 >= 80): se espera una corrección antes de entrar.
**ISRG** (score 55, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (428.37) por encima de SMA50 (400.39).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 4.9%.
  - RSI 66: zona neutral.
**MAR** (score 46, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (380.23) por encima de SMA50 (359.35).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 3.6%.
  - RSI 74: sobrecompra, riesgo de corrección.
**VEEV** (score 41, señal BUY)
  - Tendencia de corto plazo alcista: SMA20 (304.17) por encima de SMA50 (282.61).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: -0.9%.
  - RSI 61: zona neutral.
**TMO** (score 33, señal HOLD)
  - Tendencia de corto plazo alcista: SMA20 (677.38) por encima de SMA50 (653.10).
  - Precio por encima de la media de 200 días: contexto de fondo alcista.
  - Momentum 10d: 1.8%.
  - RSI 70: sobrecompra, riesgo de corrección.
**HWM** (score -61, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (213.26) por debajo de SMA50 (230.52).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.4%.
  - RSI 36: zona neutral.
**PCAR** (score -62, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (107.86) por debajo de SMA50 (115.36).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.7%.
  - RSI 31: zona neutral.
**CBRE** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (129.40) por debajo de SMA50 (136.87).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.1%.
  - RSI 47: zona neutral.
**JBHT** (score -63, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (228.02) por debajo de SMA50 (242.98).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -5.6%.
  - RSI 43: zona neutral.
**BA** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (186.43) por debajo de SMA50 (197.00).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.5%.
  - RSI 31: zona neutral.
**DASH** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (186.50) por debajo de SMA50 (198.71).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.3%.
  - RSI 38: zona neutral.
**LVS** (score -64, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (36.78) por debajo de SMA50 (40.12).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -3.3%.
  - RSI 56: zona neutral.
**NFLX** (score -66, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (67.83) por debajo de SMA50 (73.03).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -14.5%.
  - RSI 26: sobreventa, posible rebote.
**HOOD** (score -67, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (102.34) por debajo de SMA50 (108.69).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.9%.
  - RSI 29: sobreventa, posible rebote.
**APP** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (269.53) por debajo de SMA50 (295.80).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -8.7%.
  - RSI 36: zona neutral.
**TMUS** (score -68, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (156.17) por debajo de SMA50 (167.50).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -6.2%.
  - RSI 48: zona neutral.
**BKNG** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (158.03) por debajo de SMA50 (172.35).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -9.3%.
  - RSI 37: zona neutral.
**BG** (score -70, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (104.32) por debajo de SMA50 (111.01).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -10.3%.
  - RSI 34: zona neutral.
**T** (score -74, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (22.70) por debajo de SMA50 (24.23).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -11.0%.
  - RSI 40: zona neutral.
**FICO** (score -77, señal SELL)
  - Tendencia de corto plazo bajista: SMA20 (732.42) por debajo de SMA50 (880.58).
  - Precio por debajo de la media de 200 días: contexto de fondo bajista.
  - Momentum 10d: -7.9%.
  - RSI 56: zona neutral.

---
_Generado automáticamente el 2026-10-29T20:10:17.280Z. Fuente de datos: Yahoo Finance (público, retrasado). No constituye asesoría financiera._
## Análisis cualitativo de cierre (agente con búsqueda web)

El mercado abrió a la baja el jueves 29/10: la decepción en los resultados de Alphabet reavivó las dudas sobre el gasto en IA y presionó a la tecnología (Nasdaq con caídas intradía de ~1,5-1,7%, S&P 500 y Dow ~-0,5%). Compensó parcialmente un PIB del 3T de 3,4% anualizado (esperado 3,1%). Las fuentes disponibles mostraban solo datos intradía, no el cierre final confirmado; el día previo (28/10) el S&P 500 cerró en 7.743,98 tras tres subas seguidas.

### Core (largo plazo)
- **MSFT**: la venta de tecnología tras Alphabet y el nerviosismo por el gasto en IA es el contexto de su leve caída (-0,49% vs costo promedio). No hay noticia propia que cambie la tesis de largo plazo. Las research notes de hoy no se generaron (sin acceso a Yahoo), así que no hay veredicto sintetizado para contrastar.
- **TXN**: sin noticia propia encontrada; se menciona solo porque figura entre las señales técnicas BUY (score 67) y es +11,9% sobre costo.

### Satellite (técnico)
No se encontró noticia específica y relevante para las señales destacadas (CRWD, CDNS, ILMN, RCL, SNPS, etc.). Sin trades hoy. Nota: el sector tech/semis estuvo bajo presión intradía, lo que añade riesgo a las señales BUY de Information Technology.

### Notas de la corrida
- Yahoo Finance no fue alcanzable desde el entorno (ENOTFOUND): research notes (0 generadas), fundamentales y 13F quedaron vacíos hoy.

### Fuentes
- [Stock market today: Dow, S&P 500, Nasdaq fall as Alphabet stock sell-off drags on tech, AI jitters return](https://finance.yahoo.com/markets/live/stock-market-today-thursday-october-29-dow-sp-500-nasdaq-alphabet-microsoft-earnings-130305714.html)
- [S&P 500, Dow rise for third consecutive day after Fed holds steady on rates](https://www.cnbc.com/2026/10/27/stock-market-today-live-updates.html)
- [S&P 500, Nasdaq Futures Dip As Weaker-Than-Expected Alphabet Earnings Reignite AI Spending Worries](https://finance.yahoo.com/markets/stocks/articles/p-500-nasdaq-futures-dip-001028850.html)

⚠️ Este análisis cualitativo es generado por un agente con búsqueda web, no está validado por backtest, y sigue siendo parte de una simulación 100% educativa — no es asesoría financiera real.
