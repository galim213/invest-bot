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
