# Research Log

Bitácora fechada de la rutina de investigación y mejora continua: qué se investigó cada día, qué se decidió y por qué.

## 2026-10-21

**Estado revisado:** no existía este log (se crea hoy). `data/research-notes-history.json` todavía no existe (el track record se introdujo el 2026-10-20), así que no hay 30+ días para evaluar: no se corrió `track-record.js`. Re-chequear recién a fines de noviembre de 2026.

**Idea elegida:** ampliar cobertura de tests a un archivo de `lib/` sin tests — `lib/sleeves.js` (core 70%: compra inicial buy&hold y acreditación de dividendos, la parte que nunca tradea y donde un bug de doble pago de dividendos inflaría silenciosamente el retorno).

**Decisión:** implementado. `test/sleeves.test.js` (6 tests, `node:test` sin dependencias, mismo estilo que el resto): compra en partes iguales, omisión de tickers sin precio, idempotencia de `initCoreIfEmpty`, no pagar dividendos anteriores a la apertura ni duplicarlos entre corridas, ignorar dividendos con fecha futura. `npm test`: 77/77 en verde. No se tocó lógica de trading ni ningún archivo de `lib/`, por lo que no aplica el gate de `validate.js`. Sin cambios visibles en dashboard ni reportes.

**Fuentes:** cambio puramente de cobertura de tests sobre código existente; no se consultó fuente externa nueva (documentación de [node:test](https://nodejs.org/api/test.html) ya es la base de los tests del repo).

**Pendiente para próximos días:** tests para `decide.js`/`simulate.js`/`researchNote.js`/`marketIntel.js` (falta cobertura de `simulate.js`, `researchNote.js`, `marketIntel.js`, `macroRisk.js`); investigar concentración sectorial del satellite.

## 2026-10-22

**Estado revisado:** `data/research-notes-history.json` sigue sin existir (track record introducido el 2026-10-20) → no hay 30+ días; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/macroRisk.js` (panel macro: VIX, pendiente de curva 10y-3m, proxy de spread de crédito HYG vs LQD, tendencia del dólar), que no tenía tests.

**Decisión:** implementado. `test/macroRisk.test.js` (7 tests, `node:test`, sin dependencias; `marketData.fetchAll` se stubbea, sin red): umbrales de `classifyVix` (20/30/40), curva invertida vs normal, panel sin datos devuelve nulls sin inventar señales, estrés de crédito (HYG rinde >1.5% menos que LQD en 20d), caso sin estrés y caso con pocas velas, tendencia/clasificación del VIX. `npm test`: 121/121 en verde. No se tocó ningún archivo de `lib/` ni lógica de trading → no aplica el gate de `validate.js`. Sin cambios visibles en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** tests para `simulate.js`, `marketIntel.js`; investigar concentración sectorial del satellite (idea (a)), con fuente antes de implementar.

## 2026-10-23

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/simulate.js` (`runBacktest`, el motor compartido por `backtest.js` y `validate.js`, hasta hoy sin tests).

**Decisión:** implementado. `test/simulate.test.js` (4 tests, `node:test`, sin red ni dependencias): sin tickers deja el capital intacto y sin trades; período y snapshots correctos; retorno del benchmark (100→120 = 20%); benchmark null si no se pasa; consistencia cerrados = ganadores + perdedores en una serie sintética. `npm test`: 142/142 en verde. No se tocó ningún archivo de `lib/` ni lógica de trading → no aplica el gate de `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** tests para `marketIntel.js`; investigar concentración sectorial del satellite (idea (a)) con fuente antes de implementar.

## 2026-10-24

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/marketIntel.js` (rotación sectorial y generación de los markdown de informe de mercado y research notes), sin tests hasta hoy.

**Decisión:** implementado. `test/marketIntel.test.js` (4 tests, `node:test`, sin red ni dependencias; `marketData.fetchAll` se stubbea): ranking de `buildSectorRotation` por momentum 1m descendente, momentum null con pocas velas (va al final), formato de nulos (`—`) y agrupado por sector en `buildMarketIntelMarkdown`, y veredictos/aviso sin Yahoo/caso sin señales en `buildResearchNotesMarkdown`. `npm test`: 152/152 en verde. No se tocó ningún archivo de `lib/` ni lógica de trading → no aplica el gate de `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** investigar concentración/correlación sectorial del satellite (idea (a)) con fuente antes de implementar; tests para `decide.js` si faltan casos.

## 2026-10-25

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** idea (a), solo como métrica INFORMATIVA — concentración/correlación de las posiciones abiertas del satellite. Motivo: el satellite hoy está ~96% en Health Care (VEEV, ISRG, TMO, CRL + MAR) y el reporte no lo mostraba de forma resumida. No se intenta "corregirlo": tope sectorial, menor `maxPositionPct` y shorts ya se descartaron con números (GRADUATION_CRITERIA.md, puntos 4-5).

**Decisión:** implementado. `lib/concentration.js` (+ `test/concentration.test.js`, 5 tests): peso por sector, N efectivo por peso (1/HHI), correlación promedio entre pares (retornos diarios, 60 ruedas) y N efectivo ajustado por correlación `N/(1+(N−1)ρ)` (aproximación para activos equiponderados con ρ medio; ρ<0 se trunca a 0; esta fórmula es de conocimiento general, no de las fuentes citadas). Se muestra como sección "Concentración y correlación (informativo)" bajo la tabla del satellite en el reporte diario y como `satellite.concentration` en el JSON. Smoke test con `node run-daily.js`: 5 posiciones, N efectivo 3.64, correlación media 0.18, N ajustado 2.47, Health Care 96%. `npm test`: 164/164 en verde. No toca lógica de decisión → no aplica `validate.js`. Los artefactos generados por el smoke test no se comitearon (los genera la rutina de apertura/cierre).

**Dashboard/reportes:** el reporte diario (md y `latest.json`) gana la sección/campo `concentration`; el Artifact del dashboard puede leerlo opcionalmente, no es necesario para que siga funcionando.

**Fuentes:** [HHI & Effective Positions (fffinstill)](https://fffinstill.com/learning/concepts/herfindahl-hirschman-index-hhi-effective-positions) (N efectivo = 1/Σw², ejemplo 40/25/15/12/8 → 3.76, usado en el test; nota que HHI ignora correlación); [The Diversification Ratio (Portfolio Optimizer)](https://portfoliooptimizer.io/blog/the-diversification-ratio-measuring-portfolio-diversification) (la diversificación cae al subir concentración o correlación media); [Concentration is up, diversification isn't gone (SSGA)](https://www.ssga.com/us/en/individual/insights/concentration-is-up-diversification-isnt-gone) (uso de N efectivo como medida de concentración).

**Pendiente:** idea de diversificar el CORE (no el satellite) sigue sin probarse; revisar track record a fines de noviembre.

## 2026-10-26

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/fundamentalScore.js` (score de calidad por percentiles y tilt al score técnico), que alimenta la lógica de decisión y no tenía tests.

**Decisión:** implementado. `test/fundamentalScore.test.js` (5 tests, `node:test`, sin red): extremos 100/0 y orden good > mid > bad, P/E negativo = percentil 0, renormalización con factores faltantes y null sin datos, ticker único = 50, tilt lineal (`qualityScoreToTilt`). `npm test`: 177/177 en verde. No se modificó ningún archivo de `lib/` ni lógica de trading → no aplica `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** tests para `midcapWatch.js`/`pointInTime.js`; revisar track record a fines de noviembre; diversificación del CORE sin probar.

## 2026-10-27

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/pointInTime.js` (membresía histórica del S&P 500 usada por backtest/validate para evitar sesgo de look-ahead), sin tests hasta hoy.

**Decisión:** implementado. `test/pointInTime.test.js` (3 tests, `node:test`, sin red): `normalizeTicker`, universo en la primera fecha de cobertura (Set con >100 tickers) y fallback a `WATCHLIST` para fechas fuera de cobertura (antes y después). `npm test` en verde. No se tocó ningún archivo de `lib/` ni lógica de trading → no aplica `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** tests para `midcapWatch.js`; revisar track record a fines de noviembre; diversificación del CORE sin probar.

## 2026-10-28

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/midcapWatch.js` (seguimiento del S&P MidCap 400, sin operar), sin tests hasta hoy.

**Decisión:** implementado. `test/midcapWatch.test.js` (3 tests, `node:test`, sin red): orden y recorte por topN, exclusión de errores/sin precio con sector adjunto, y el markdown aclara que no opera y lista ambas tablas. `npm test`: 183/183 en verde. No se tocó ningún archivo de `lib/` ni lógica de trading → no aplica `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** revisar track record a fines de noviembre; diversificación del CORE sin probar (requiere fuente antes de implementar).

## 2026-10-29

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/loadFundamentalsCache.js` (carga del cache de fundamentales que alimenta `qualityScores`; `fundamentals.js` es solo red y no es testeable sin red).

**Decisión:** implementado. `test/loadFundamentalsCache.test.js` (4 tests, `node:test`, sin red): sin archivo → null, JSON corrupto → null, cache sin tickers → null, cache válido → `count`/`generatedAt`/`scores`. El test respalda y restaura `fundamentals-cache.json` en un `finally`. `npm test`: 187/187 en verde. No se tocó ningún archivo de `lib/` ni lógica de trading → no aplica `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** revisar track record a fines de noviembre; diversificación del CORE sin probar (requiere fuente antes de implementar).

## 2026-10-30

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/marketData.js` (fetch de velas Yahoo, base de todo el sistema), sin tests hasta hoy. Se mockea `global.fetch`, sin red.

**Decisión:** implementado. `test/marketData.test.js` (3 tests): descarte de velas sin close + adjClose + dividendos ordenados + regularMarketPrice; error ante HTTP no-ok y respuesta sin resultado; `fetchAll` tolera fallos individuales y los reporta aparte. `npm test` en verde. No se tocó `lib/` ni lógica de trading → no aplica `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** único módulo sin tests restante es `fundamentals.js` (solo red/auth); revisar track record a fines de noviembre; diversificación del CORE sin probar (requiere fuente antes de implementar).

## 2026-10-31

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no hay 30+ días de track record; no se corrió `track-record.js`. Re-chequear a fines de noviembre de 2026.

**Idea elegida:** cobertura de tests para `lib/fundamentals.js` (auth cookie+crumb de Yahoo y mapeo de quoteSummary, que alimenta el score de calidad). Se mockea `global.fetch`, sin red.

**Decisión:** implementado. `test/fundamentals.test.js` (3 tests): error diagnosticado sin Set-Cookie, causa real (`err.cause`) en fetch caído, mapeo de campos `raw` + `fetchFundamentalsAll` separando errores. Módulo recargado por test porque `cachedAuth` es estado de módulo. `npm test`: 193/193 en verde. No se tocó `lib/` ni lógica de trading → no aplica `validate.js`. Sin cambios en dashboard ni reportes.

**Fuentes:** cambio de cobertura sobre código existente; no se consultó fuente externa nueva.

**Pendiente:** ya todos los módulos de `lib/` con red/pureza testeable tienen tests; revisar track record a fines de noviembre; diversificación del CORE sin probar (requiere fuente antes de implementar).

## 2026-11-01

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Hallazgo (diagnóstico, sin cambios de código):** el track record NO está acumulando datos. Corrí `node run-daily.js` como smoke test y las research notes salen vacías ("Research notes generadas: 0", "30 tickers sin datos", causa: `fc.yahoo.com inalcanzable: ENOTFOUND`). `reports/research-notes-2026-10-30.md` también está vacío (solo cabecera y pie), o sea que el mismo fallo de auth de Yahoo (cookie+crumb) ocurre en el entorno de las rutinas diarias. Como `appendHistory` ignora notas sin precio, la bitácora nunca se crea, y el chequeo "re-mirar a fines de noviembre" no tendrá datos. Lo mismo afecta al tilt de fundamentales (503 tickers en cache, pero 33 empresas sin datos frescos) y a 13F (`fetch failed`).

**Decisión:** no se implementó nada: no hay fuente alternativa gratuita validada para reemplazar los fundamentales de Yahoo desde este entorno (la red bloquea ese host), y inventar un workaround sin fuente iría contra las reglas. Se revirtieron los cambios de estado del smoke test (`data/`, `reports/`) para no pisar a la rutina de apertura. Sin impacto en trading ni en `validate.js`.

**Pendiente (requiere decisión humana):** permitir `fc.yahoo.com`/`query2.finance.yahoo.com` en la política de red del entorno de las rutinas, o evaluar SEC EDGAR (`lib/secEdgar.js` ya existe) como fuente alternativa de fundamentales para las research notes.

## 2026-11-02

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo del hallazgo de ayer:** desde el entorno de esta rutina `fc.yahoo.com` y `data.sec.gov` siguen sin conectar (curl código 000), y `query1.finance.yahoo.com` responde 429. Por lo tanto las research notes siguen saliendo vacías y el track record no acumula datos. Tests: `npm test` en verde.

**Decisión:** sin cambios de código; no hay fuente alternativa validada accesible desde este entorno. No aplica `validate.js`. Sin impacto en dashboard.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

## 2026-11-03

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (tercer día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000); `query1.finance.yahoo.com` responde 429. `npm test` en verde.

**Decisión:** sin cambios de código. Sin fuente alternativa validada accesible, y los módulos de `lib/` ya tienen tests. No aplica `validate.js`. Sin impacto en dashboard.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas; mientras tanto el track record de research notes no acumula datos.

## 2026-11-04

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (cuarto día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000). `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; no hay fuente alternativa accesible ni validada, y no se repiten experimentos descartados. No aplica `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas; sin eso el track record de research notes no acumula datos.

## 2026-11-05

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (quinto día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000). `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin fuente alternativa accesible/validada y sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas; sin eso el track record de research notes no acumula datos.

## 2026-11-06

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (sexto día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000). `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin fuente alternativa accesible/validada y sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas; sin eso el track record de research notes no acumula datos.

## 2026-11-07

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (séptimo día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000). `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin fuente alternativa accesible/validada y sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas; sin eso el track record de research notes no acumula datos.

## 2026-11-08

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (octavo día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000); `query1.finance.yahoo.com` responde 429. `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin fuente alternativa accesible/validada y sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

## 2026-11-09

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (noveno día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000); `query1.finance.yahoo.com` responde 429. `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin fuente alternativa accesible/validada y sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

## 2026-11-10

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (décimo día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000). `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin fuente alternativa accesible/validada y sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

## 2026-11-11

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (undécimo día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000); `query1.finance.yahoo.com` responde 429. `npm test`: 193/193 en verde. Todos los archivos de `lib/` ya tienen test.

**Decisión:** sin cambios de código; sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

## 2026-11-12

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (duodécimo día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000); `query1.finance.yahoo.com` responde 429. `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

## 2026-11-13

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (decimotercer día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000); `query1.finance.yahoo.com` responde 429. `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

## 2026-11-14

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (decimocuarto día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000); `query1.finance.yahoo.com` responde 429. `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

## 2026-11-15

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (decimoquinto día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000); `query1.finance.yahoo.com` responde 429. `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

## 2026-11-16

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (decimosexto día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000); `query1.finance.yahoo.com` responde 429. `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

## 2026-11-17

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (decimoséptimo día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000); `query1.finance.yahoo.com` responde 429. `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

## 2026-11-18

**Estado revisado:** `data/research-notes-history.json` sigue sin existir → no se corrió `track-record.js`.

**Re-chequeo de conectividad (decimoctavo día consecutivo):** `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` siguen sin conectar (curl 000); `query1.finance.yahoo.com` responde 429. `npm test`: 193/193 en verde.

**Decisión:** sin cambios de código; sin experimentos nuevos que justifiquen `validate.js`. Sin impacto en dashboard ni reportes.

**Pendiente (requiere decisión humana):** habilitar `fc.yahoo.com`, `query2.finance.yahoo.com` y `data.sec.gov` en la política de red del entorno de las rutinas.

### 2026-11-18 (addendum) — red desbloqueada

- Se agregaron a la allowlist del entorno `fc.yahoo.com`, `query2.finance.yahoo.com`, `data.sec.gov` y `www.sec.gov`. `node run-daily.js` corre completo (Yahoo y SEC funcionan; 193/193 tests).
- Cambio de código (privacidad, sin impacto en trading): el User-Agent de SEC (`lib/secEdgar.js`, `lib/thirteenF.js`) tenía un email personal escrito a mano. Ahora lee `SEC_CONTACT` del entorno, con un nombre genérico por defecto. SEC pide un contacto real: si devuelve 403, definir `SEC_CONTACT` en el entorno.
- `stooq.com` no es alcanzable desde el entorno (no es alternativa por ahora).
- Los datos generados por la corrida de prueba se descartaron; la rutina oficial de apertura/cierre es la dueña de `data/` y `reports/`.

## 2026-11-19

**Estado revisado:** `data/research-notes-history.json` ahora existe pero solo tiene 15 entradas (15 tickers), todas del 2026-11-18 → `node track-record.js` confirma que ninguna tiene 30+ días. Primera lectura con sentido estadístico: no antes de ~2026-12-18 y con muestra mayor a unas pocas decenas.

**Conectividad:** Yahoo responde parcialmente (`query2` 429 en la prueba, `fc.yahoo.com` 404 a un path inexistente, o sea alcanzable); red desbloqueada desde ayer. `npm test`: 193/193 en verde. Todos los archivos de `lib/` ya tienen test.

**Decisión:** sin mejora genuina hoy que justifique tocar código (no se investigó con WebSearch una idea nueva; no se inventó nada). Sin experimentos de trading → no se corrió `validate.js`. Sin impacto en dashboard ni reportes.

## 2026-11-20

**Estado revisado:** `data/research-notes-history.json` tiene 30 entradas (16 tickers únicos), la más vieja del 2026-11-18. `node track-record.js` confirma que ninguna alcanza 30+ días → primera lectura con sentido recién ~2026-12-18.

**Chequeos:** `npm test`: 193/193 en verde. Yahoo alcanzable (track-record.js trajo precios).

**Decisión:** sin mejora genuina hoy; no se investigó una idea nueva con fuente real y no se inventó ninguna. Sin cambios de código, sin `validate.js`, sin impacto en dashboard ni reportes.

## 2026-11-21

**Idea (e): ¿sigue vigente el supuesto de costo de transacción (5 bps)?** Prueba de sensibilidad, sin cambiar código: copia del repo en un directorio temporal, `transactionCostPct` 0.0005 → 0.002 (4x), `node validate.js` (sin pasar qualityScores, sin look-ahead). El run a 5 bps reproduce el baseline (-17.59% en Q4 2018).

| Régimen | 5 bps | 20 bps |
|---|---|---|
| Selloff Q4 2018 | -17.59% | -18.11% |
| Crash COVID 2020 | -3.99% | -4.40% |
| Bajista 2022 | -20.85% | -21.79% |
| Recuperación 2023 | +16.30% | +15.43% |
| Reciente (ya visto) | +50.06% | +49.67% |

`beatBenchmark` se mantiene en 2/5 en ambos casos. Costo 4x resta ~0.4–0.9 pp por régimen: las conclusiones no dependen del supuesto de costos. No es un cambio de estrategia (el config real no se tocó), así que no aplica el gate de descarte. No se citaron fuentes externas porque no se implementó nada nuevo (no se hizo WebSearch).

**Otros chequeos:** `npm test` en verde. Track record: la entrada más vieja sigue siendo 2026-11-18 → sin 30 días, no se lee todavía (~2026-12-18). Sin impacto en dashboard ni reportes.

## 2026-11-22

**Estado revisado:** `node track-record.js`: 46 entradas, 17 tickers únicos; la más vieja es del 2026-11-18 (hace 4 días) → sin 30+ días, no hay lectura todavía (primera con sentido ~2026-12-18). `npm test` en verde (ver conteo en la corrida).

**Decisión:** sin mejora genuina hoy; ayer ya se revisó el supuesto de costos y todos los archivos de `lib/` tienen test. No se investigó una idea nueva con fuente real y no se inventó ninguna. Sin cambios de código, sin `validate.js`, sin impacto en dashboard ni reportes.

## 2026-11-23

**Estado revisado:** `node track-record.js`: 46 entradas, 17 tickers únicos; la más vieja es del 2026-11-18 (hace 5 días) → sin 30+ días, sin lectura todavía (primera con sentido ~2026-12-18). `npm test`: 193/193 en verde.

**Decisión:** sin mejora genuina hoy; no se investigó una idea nueva con fuente real y no se inventó ninguna. Sin cambios de código, sin `validate.js`, sin impacto en dashboard ni reportes.

## 2026-11-24

**Estado revisado:** `node track-record.js`: 46 entradas, 17 tickers únicos; la más vieja es del 2026-11-18 (hace 6 días) → sin 30+ días, sin lectura todavía (primera con sentido ~2026-12-18). `npm test`: 193/193 en verde.

**Decisión:** sin mejora genuina hoy; no se investigó una idea nueva con fuente real y no se inventó ninguna. Sin cambios de código, sin `validate.js`, sin impacto en dashboard ni reportes.

## 2026-11-25

**Estado revisado:** `node track-record.js`: 62 entradas, 17 tickers únicos; la más vieja es del 2026-11-18 (hace 7 días) → sin 30+ días, sin lectura todavía (primera con sentido ~2026-12-18). `npm test`: 193/193 en verde.

**Decisión:** sin mejora genuina hoy; no se investigó una idea nueva con fuente real y no se inventó ninguna. Sin cambios de código, sin `validate.js`, sin impacto en dashboard ni reportes.

## 2026-11-26

**Estado revisado:** `node track-record.js`: 78 entradas, 17 tickers únicos; la más vieja es del 2026-11-18 (hace 8 días) → sin 30+ días, sin lectura todavía (primera con sentido ~2026-12-18). `npm test`: 193/193 en verde.

**Decisión:** sin mejora genuina hoy; no se investigó una idea nueva con fuente real y no se inventó ninguna. Sin cambios de código, sin `validate.js`, sin impacto en dashboard ni reportes.

## 2026-11-27

**Estado revisado:** `node track-record.js`: 94 entradas, 17 tickers únicos; la más vieja es del 2026-11-18 (hace 9 días) → sin 30+ días, sin lectura todavía (primera con sentido ~2026-12-18). `npm test`: 193/193 en verde.

**Decisión:** sin mejora genuina hoy; no se investigó una idea nueva con fuente real y no se inventó ninguna. Sin cambios de código, sin `validate.js`, sin impacto en dashboard ni reportes.
