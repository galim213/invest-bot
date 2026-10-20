# Criterios de "graduación" a plata real

Esto define, en frío y antes de que haya presión de "quiero invertir ya", qué tiene que
pasar para que valga la pena considerar plata real en vez de simulada. Mientras no se
cumplan estos puntos, la respuesta por defecto es no.

## Estructura actual: core-satellite (desde 2026-10-20)

El portfolio ya no es uno solo — son dos sub-portfolios con lógica y objetivo distintos:

- **Core (70%, $700)**: compra única y diversificada en 10 empresas de calidad con
  dividendo real (JNJ, PG, KO, XOM, CVX, JPM, MSFT, V, LMT, TXN), repartida en partes
  iguales. No se tradea con señales técnicas — es la porción de "ser dueño y aguantar"
  (ver la explicación de por qué esto es lo más confiable en el historial de la
  conversación). Acredita dividendos reales cuando se pagan.
- **Satellite (30%, $300)**: el motor técnico multi-factor de siempre, sobre el S&P 500
  completo. Es la porción donde se busca ganancia de corto/mediano plazo — y es la que
  está sujeta a TODOS los criterios de este documento, porque es la que todavía no tiene
  edge comprobado.

**El core no necesita "graduarse"** en el mismo sentido — su lógica (diversificación +
tiempo + dividendos) es la aproximación más respaldada estadísticamente que existe para
inversión de largo plazo, no una hipótesis a validar con backtests como el satellite.

## Por qué existe este documento

Es mucho más fácil decidir con la cabeza fría ahora que decidir el día que el portfolio
simulado lleve 3 meses subiendo y las ganas de que sea plata real empiecen a nublar el
juicio. Esta lista se escribió **antes** de tener ningún resultado lindo que defender.

## Estado actual (2026-10-20): NO CUMPLE — por mucho

La validación fuera de muestra (`reports/validation-multi-regime.json`), corrida con el
universo **point-in-time real** del S&P 500 (no la lista de hoy aplicada hacia atrás — ver
`lib/pointInTime.js`), da un resultado mixto pero igual de claro en la conclusión de fondo:

| Régimen | Retorno | Benchmark | Diferencia |
|---|---|---|---|
| Selloff Q4 2018 | -17.6% | -13.8% | -3.8pts |
| Crash COVID 2020 | -4.0% | -11.5% | **+7.5pts** |
| Bajista 2022 | -20.9% | -14.3% | -6.6pts |
| Recuperación 2023 | +16.6% | +24.8% | -8.2pts |
| Reciente (ajustado acá) | +58.7% | +31.1% | +27.6pts |

Le gana al benchmark en **2 de 5 regímenes**, uno de ellos (COVID) de forma genuina y
buena. El otro "gana" es el período reciente, que es el que se usó para ajustar los
parámetros — no cuenta como validación real. En el régimen más duro para probar gestión de
riesgo (un bajista prolongado, 2022), pierde por casi 7 puntos.

Conclusión honesta: **sigue sin ser un sistema con edge validado.** Mejoró respecto a la
primera corrida (el universo point-in-time sacó el sesgo de "comprar cosas antes de que
fueran investables"), pero 2 de 5 no es un resultado para confiar plata real — ni cerca.
Eso no significa que el proyecto esté mal encaminado — significa que recién estamos en el
punto donde el proceso de validación empieza a ser útil (antes, sin esto, no había forma
de saberlo).

## Experimentos descartados (y por qué quedan documentados)

Cada vez que se prueba una mejora, se re-testea contra los regímenes históricos antes de
aceptarla. Dos ya fallaron esa prueba — quedan acá para no repetir el error:

1. **Filtro de régimen de mercado** (no comprar si el benchmark está bajo su SMA200):
   mejoraba el período reciente (+75% vs +48%) pero empeoraba 3 de los 4 regímenes
   genuinamente fuera de muestra. Descartado de producción.
2. **Tilt fundamental** (ROE/márgenes/crecimiento/deuda/P/E sumando hasta ±15 al score
   técnico, ver `lib/fundamentalScore.js`): en backtest con `--fundamentals`, **empeoró**
   en ventanas de 60 días (0.20% → -2.80%) y 120 días (6.55% → -3.27%), y solo "mejoró"
   en la ventana de 250 días (61.7% → 108.2%) — que es justo la más contaminada por
   look-ahead bias, porque el cache de fundamentales es una foto de HOY aplicada
   retroactivamente a todo un año de trading (los márgenes/ROE reales de esas empresas
   hace un año no eran los de hoy). Mismo patrón que el punto 1: no confiar en una mejora
   que solo aparece en la ventana ya conocida. **Queda apagado en producción**
   (`USE_FUNDAMENTAL_TILT_IN_PRODUCTION = false` en `config.js`) hasta tener fundamentales
   point-in-time reales — algo que no está disponible gratis (ver investigación de fuentes
   en el README).
3. **Shorting (venta en corto) en el satellite** (2026-10-20, `lib/decide.js`/`lib/portfolio.js`,
   `node validate.js --shorts`): la primera corrida sin tope agregado de exposición
   **explotó** en COVID 2020 (-2214% de retorno — múltiples shorts correlacionados
   abiertos simultáneamente durante el crash, todos reventados por el rebote violento
   posterior). Se agregó `STRATEGY.maxAggregateShortExposurePct` (30% del portfolio como
   tope sobre TODOS los shorts simultáneos, no solo por posición) y se volvió a correr:
   ya no explota, pero sigue **empeorando** en 3 de los 4 regímenes genuinamente fuera de
   muestra — Q4 2018 (-17.6% → -19.7%), COVID 2020 (-4.0% → -14.9%), Bajista 2022
   (-20.9% → -26.4%) — y no mejora en ninguno (en Recuperación 2023 y el período reciente
   el score casi nunca llega al umbral de corto, así que casi no shortea y el resultado
   queda prácticamente igual). Mismo patrón que los dos experimentos anteriores: no
   sobrevive la validación. **Queda apagado en producción**
   (`ALLOW_SHORTING_IN_PRODUCTION = false` en `config.js`); la mecánica queda disponible
   para seguir experimentando (`node backtest.js <días> --shorts`, `node validate.js --shorts`)
   pero no se prende sin una regla de entrada distinta — shortear por "score técnico muy
   negativo" tiende a capturar justo las acciones más sobrevendidas en un pánico, que son
   las que más rebotan después.

## Los criterios (TODOS tienen que cumplirse, no alcanza con uno o dos)

### 1. Validación estadística
- [ ] Le gana al benchmark (ajustado por riesgo, no solo retorno bruto) en **al menos 3 de
      4 regímenes de mercado distintos** probados fuera de muestra (no en el período usado
      para ajustar parámetros).
- [ ] Sharpe ratio > 1.0 sostenido en al menos 2 de esos regímenes.
- [ ] Ningún cambio de parámetros se valida solo porque "se ve mejor en el período
      reciente" — toda mejora propuesta se re-testea contra los mismos regímenes
      históricos antes de aceptarla (ver `validate.js`).

### 2. Track record en papel
- [ ] Mínimo **6 meses continuos** de trading simulado real (no backtest — las corridas
      diarias de verdad, con los datos que realmente hubo ese día).
- [ ] Sobrevivió al menos **una caída del mercado general de >10%** durante esos 6 meses
      sin romper los límites de riesgo definidos (stop-loss, reserva de cash).
- [ ] El comportamiento en vivo no se desvía de forma inexplicable de lo que el backtest
      predecía para ese mismo período (si se desvía mucho, hay algo mal modelado).

### 3. Gestión de riesgo
- [ ] Drawdown máximo histórico (en papel, los 6+ meses) se mantuvo dentro de un rango que
      la persona que va a invertir plata real puede tolerar emocionalmente sin romper el
      plan a mitad de camino. Esto es subjetivo a propósito — ponele un número concreto
      antes de llegar a este punto, no después.
- [ ] Los límites de riesgo (stop-loss, % máx. por posición, reserva de cash) nunca se
      ajustaron "en caliente" para evitar una pérdida que ya estaba pasando.

### 4. Infraestructura para plata real (todavía no evaluada, no bloqueante hoy)
- [ ] Definir qué broker/API se usaría (ej. Alpaca, Interactive Brokers) y sus costos reales
      de comisión/spread — el backtest asume 5 bps, hay que confirmar que es realista.
- [ ] Entender implicancias impositivas (ganancias de capital, frecuencia de trading).
- [ ] Si se opera con una cuenta chica, revisar reglas de "pattern day trader" en EEUU si
      aplica (margen y <$25k con >3 day-trades en 5 días hábiles).

## Qué hacer si no se cumple (que es el caso hoy)

Seguir iterando el proceso de validación, no la cantidad de dinero que se le pone al lado.
Próximos pasos razonables, en orden de prioridad:
1. Entender POR QUÉ falla en bajistas/crashes (¿vende demasiado tarde? ¿el score no
   captura el cambio de régimen a tiempo? ¿el stop-loss es muy ancho?).
2. Probar hipótesis puntuales, una a la vez, cada una re-testeada contra los 4+ regímenes
   históricos — no contra el período reciente nomás (eso fue el error de esta noche con el
   filtro de régimen: mejoraba el período conocido y empeoraba todo el resto).
3. Recién después de un par de iteraciones que efectivamente mejoren el desempeño
   fuera de muestra, volver a correr `validate.js` completo y revisar esta lista de nuevo.

## Revisar este documento

Esta lista es un punto de partida razonable, no una verdad revelada — si algo acá no tiene
sentido para vos, cambialo. Pero cambialo ahora, en frío, no el día que estés tentado a
saltarte un criterio porque "total esta vez es diferente".
