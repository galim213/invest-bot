# Criterios de "graduación" a plata real

Esto define, en frío y antes de que haya presión de "quiero invertir ya", qué tiene que
pasar para que valga la pena considerar plata real en vez de simulada. Mientras no se
cumplan estos puntos, la respuesta por defecto es no.

## Por qué existe este documento

Es mucho más fácil decidir con la cabeza fría ahora que decidir el día que el portfolio
simulado lleve 3 meses subiendo y las ganas de que sea plata real empiecen a nublar el
juicio. Esta lista se escribió **antes** de tener ningún resultado lindo que defender.

## Estado actual (2026-10-20): NO CUMPLE — por mucho

La primera corrida de validación fuera de muestra (`reports/validation-multi-regime.json`)
dio un resultado claro: la estrategia, ajustada sobre el período 2025-2026, **pierde contra
comprar-y-mantener el benchmark en 3 de 4 regímenes históricos que nunca vio durante el
ajuste**, y en el peor de ellos (selloff de fines de 2018) amplifica la pérdida en vez de
protegerla (-26.9% vs -13.8% del benchmark). Solo le gana al benchmark en el período que
ya se usó para tunear los parámetros — el patrón clásico de overfitting.

Conclusión honesta: **lo que tenemos hoy no es un sistema con edge validado, es una
hipótesis que falló su primera prueba seria fuera de muestra.** Eso no significa que el
proyecto esté mal encaminado — significa que recién estamos en el punto donde el proceso
de validación empieza a ser útil (antes, sin esto, no había forma de saberlo).

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
