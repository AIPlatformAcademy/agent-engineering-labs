# Catálogo de errores de UniPay

## Propósito

Este documento define los códigos de error conocidos utilizados por UniPay.

Los consumidores de la API pueden utilizar estos códigos para identificar programáticamente el motivo de un error.

# Formato estándar

Los errores utilizan:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Descripción del error",
    "requestId": "identificador-de-request"
  }
}
```

# Errores

## STUDENT_NOT_FOUND

HTTP:

```text
404 Not Found
```

Se produce cuando el estudiante requerido por una operación no existe.

Aplica tanto al emisor como al receptor de una transferencia.

## ROUTE_NOT_FOUND

HTTP:

```text
404 Not Found
```

Se produce cuando el cliente solicita un endpoint que no existe.

Ejemplo:

```text
GET /api/unknown
```

## SAME_STUDENT_TRANSFER

HTTP:

```text
400 Bad Request
```

Se produce cuando:

```text
senderId == receiverId
```

Un estudiante no puede transferirse saldo a sí mismo.

## INVALID_AMOUNT

HTTP:

```text
400 Bad Request
```

Se produce cuando el importe no cumple las condiciones básicas necesarias.

Ejemplos:

```text
importe ausente
importe no numérico
importe igual a cero
importe negativo
importe con más de dos decimales
```

## INVALID_DESCRIPTION

HTTP:

```text
400 Bad Request
```

Se produce cuando la descripción de una transferencia supera la longitud permitida.

Consultar:

```text
docs/business-rules.md
```

para conocer las restricciones de negocio correspondientes.

## AMOUNT_LIMIT_EXCEEDED

HTTP:

```text
422 Unprocessable Entity
```

Se produce cuando el importe solicitado supera el límite de negocio permitido para una transferencia individual.

El valor del límite debe obtenerse de:

```text
docs/business-rules.md
```

## INSUFFICIENT_BALANCE

HTTP:

```text
422 Unprocessable Entity
```

Se produce cuando el estudiante emisor no dispone de saldo suficiente para completar una transferencia.

Una operación rechazada por este motivo no debe modificar balances ni registrar una transferencia completada.

## INTERNAL_ERROR

HTTP:

```text
500 Internal Server Error
```

Se utiliza cuando ocurre un error inesperado que no corresponde a un error conocido de aplicación.

La respuesta pública no debe revelar detalles técnicos internos del error.

# Tabla resumen

| Código | HTTP | Categoría |
|---|---:|---|
| `STUDENT_NOT_FOUND` | 404 | Recurso |
| `ROUTE_NOT_FOUND` | 404 | Routing |
| `SAME_STUDENT_TRANSFER` | 400 | Validación |
| `INVALID_AMOUNT` | 400 | Validación |
| `INVALID_DESCRIPTION` | 400 | Validación |
| `AMOUNT_LIMIT_EXCEEDED` | 422 | Regla de negocio |
| `INSUFFICIENT_BALANCE` | 422 | Regla de negocio |
| `INTERNAL_ERROR` | 500 | Sistema |