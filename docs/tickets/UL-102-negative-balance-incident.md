# UL-102 - Incidente de saldo negativo

## Tipo

Incidente de producción.

## Descripción

Se ha reportado que algunos usuarios pueden completar transferencias que provocan que el saldo del estudiante emisor quede en negativo.

Este comportamiento no es el esperado.

## Resultado esperado

Investigar y resolver el incidente respetando las reglas y convenciones existentes del proyecto.

La solución debe:

- identificar la causa raíz;
- respetar la arquitectura existente;
- respetar las reglas de negocio documentadas;
- incorporar un test que reproduzca el defecto;
- demostrar que una transferencia rechazada no modifica el balance del emisor;
- demostrar que una transferencia rechazada no modifica el balance del receptor;
- demostrar que una transferencia rechazada no se registra como completada;
- mantener compatible el comportamiento existente no relacionado con el incidente.

## Evidencia requerida

Al finalizar, reportar:

1. Contexto consultado.
2. Causa raíz identificada.
3. Plan de implementación.
4. Archivos modificados.
5. Tests añadidos o modificados.
6. Tests ejecutados.
7. Resultado de los tests.
8. Riesgos o comportamientos relacionados que hayan quedado fuera del alcance.

## Restricciones

No asumir reglas de negocio que no estén documentadas.

No modificar componentes no relacionados sin justificación.

No considerar resuelto el incidente sin evidencia obtenida mediante tests.