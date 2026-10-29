# Reglas de negocio de UniPay

## Propósito

Este documento contiene las reglas de negocio que determinan cuándo una transferencia entre estudiantes es válida.

Estas reglas representan el comportamiento esperado del sistema.

La implementación actual puede no cubrir todas las reglas documentadas.

Cuando exista una diferencia entre una regla de negocio documentada y el comportamiento actual de la aplicación, debe considerarse la regla documentada como el comportamiento esperado.

# Transferencias entre estudiantes

Una transferencia representa el movimiento de saldo desde un estudiante emisor hacia un estudiante receptor.

Una operación contiene:

```text
senderId
receiverId
amount
description
```

## BR-001 - Existencia de estudiantes

Tanto el estudiante emisor como el estudiante receptor deben existir.

Una operación no puede continuar si alguno de los dos estudiantes no existe.

Error esperado:

```text
STUDENT_NOT_FOUND
```

## BR-002 - Transferencia al mismo estudiante

Un estudiante no puede realizar una transferencia hacia sí mismo.

Por lo tanto:

```text
senderId != receiverId
```

Si ambos identificadores representan al mismo estudiante, la operación debe rechazarse.

Error esperado:

```text
SAME_STUDENT_TRANSFER
```

## BR-003 - Importe válido

El importe de una transferencia debe ser un valor numérico mayor que cero.

Son inválidos, entre otros:

```text
0
-10
-25.50
"25"
null
undefined
```

La aplicación no debe convertir silenciosamente strings u otros tipos a valores numéricos.

Error esperado:

```text
INVALID_AMOUNT
```

## BR-004 - Precisión del importe

El importe puede contener como máximo dos posiciones decimales.

Ejemplos válidos:

```text
10
10.5
10.50
99.99
```

Ejemplo inválido:

```text
10.555
```

Error esperado:

```text
INVALID_AMOUNT
```

---

## BR-005 - Saldo suficiente

El estudiante emisor debe disponer de saldo suficiente para completar la transferencia.

Antes de modificar cualquier saldo debe cumplirse:

```text
sender.balance >= amount
```

Si el saldo es insuficiente, la operación completa debe rechazarse.

Error esperado:

```text
INSUFFICIENT_BALANCE
```

## BR-006 - Balance no negativo

Una transferencia nunca puede provocar que el balance del estudiante emisor quede en negativo.

Debe mantenerse siempre la siguiente condición después de una transferencia completada correctamente:

```text
sender.balance >= 0
```

Una operación que pueda provocar un saldo negativo debe rechazarse antes de modificar datos.

Error esperado:

```text
INSUFFICIENT_BALANCE
```

## BR-007 - Límite máximo por transferencia

Una transferencia individual puede ser como máximo de:

```text
PEN 100
```

Por lo tanto, para completar la operación debe cumplirse:

```text
amount <= 100
```

Ejemplo válido:

```text
PEN 100
```

Ejemplo inválido:

```text
PEN 100.01
```

Error esperado:

```text
AMOUNT_LIMIT_EXCEEDED
```

## BR-008 - Descripción

La descripción de una transferencia es opcional.

Cuando exista, puede contener como máximo:

```text
100 caracteres
```

Si supera este límite, la transferencia debe rechazarse.

Error esperado:

```text
INVALID_DESCRIPTION
```

## BR-009 - Registro de transferencias

Toda transferencia completada correctamente debe quedar registrada.

El registro debe contener:

```text
id
senderId
receiverId
amount
description
status
createdAt
```

El status de una transferencia completada será:

```text
COMPLETED
```

Una transferencia rechazada no debe registrarse como transferencia completada.

## BR-010 - Consistencia de la operación

Todas las validaciones deben completarse antes de modificar los balances.

El orden conceptual de una transferencia debe ser:

```text
Recibir solicitud
       ↓
Buscar estudiantes
       ↓
Validar operación
       ↓
¿Todas las reglas son válidas?
       │
   ┌───┴───┐
   │       │
   NO      SÍ
   │       │
   ▼       ▼
Error    Actualizar balances
           ↓
        Registrar transferencia
           ↓
        COMPLETED
```

Si alguna validación falla:

- el balance del emisor debe permanecer sin cambios;
- el balance del receptor debe permanecer sin cambios;
- no debe registrarse una transferencia completada.

# Invariantes

Independientemente del tipo de transferencia, deben mantenerse los siguientes invariantes:

```text
Balance del emisor nunca negativo.

Una operación inválida nunca modifica balances.

Una operación inválida nunca genera una transferencia COMPLETED.

Una transferencia válida modifica ambos balances.

Una transferencia válida queda registrada.
```

# Regla de implementación

Las reglas contenidas en este documento son reglas de negocio.

Según la arquitectura de UniPay, su implementación corresponde a:

```text
Service Layer
```

No deben implementarse en:

```text
Routes
Controllers
Repositories
Middleware
```