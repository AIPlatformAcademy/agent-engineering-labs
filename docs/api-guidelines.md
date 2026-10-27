# Guía de API de UniPay

## Propósito

Este documento define las convenciones que deben respetar los endpoints HTTP de UniPay.

Los cambios en la aplicación deben preservar estas convenciones salvo que un requerimiento indique explícitamente lo contrario.

---

# Formato

La API utiliza:

```text
HTTP
JSON
```

Los requests que contienen información en el body deben utilizar:

```text
Content-Type: application/json
```

---

# Respuestas correctas

Las respuestas que contienen datos utilizan el envelope:

```json
{
  "data": {}
}
```

Para colecciones:

```json
{
  "data": []
}
```

---

# Respuestas de error

Todos los errores conocidos deben utilizar el siguiente formato:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Descripción del error",
    "requestId": "identificador-de-request"
  }
}
```

El objetivo de `code` es proporcionar un código estable que permita identificar programáticamente el tipo de error.

`message` proporciona una descripción legible.

`requestId` permite correlacionar el error con la solicitud HTTP.

---

# Códigos HTTP

## 200 OK

Utilizar para operaciones de lectura completadas correctamente.

Ejemplos:

```text
GET /api/students
GET /api/students/:studentId
GET /api/transfers
```

---

## 201 Created

Utilizar cuando se crea correctamente una transferencia.

Ejemplo:

```text
POST /api/transfers
```

---

## 400 Bad Request

Utilizar cuando los datos recibidos son inválidos.

Ejemplos:

```text
importe inválido
transferencia al mismo estudiante
descripción inválida
```

---

## 404 Not Found

Utilizar cuando:

- un recurso requerido no existe;
- la ruta solicitada no existe.

---

## 422 Unprocessable Entity

Utilizar cuando el request es procesable pero la operación incumple una regla de negocio que impide completar la transferencia.

Ejemplos:

```text
saldo insuficiente
límite de transferencia excedido
```

---

## 500 Internal Server Error

Utilizar para errores inesperados no representados mediante un error de aplicación conocido.

No se deben exponer detalles internos del error al cliente.

---

# Endpoints

## Health

```text
GET /health
```

Respuesta:

```json
{
  "status": "UP",
  "service": "unipay-api"
}
```

---

## Listar estudiantes

```text
GET /api/students
```

Respuesta:

```json
{
  "data": [
    {
      "id": "stu-001",
      "name": "Ana Torres",
      "email": "ana.torres@unipay.edu.pe",
      "balance": 150
    }
  ]
}
```

---

## Consultar estudiante

```text
GET /api/students/:studentId
```

Ejemplo:

```text
GET /api/students/stu-001
```

Respuesta:

```json
{
  "data": {
    "id": "stu-001",
    "name": "Ana Torres",
    "email": "ana.torres@unipay.edu.pe",
    "balance": 150
  }
}
```

---

## Listar transferencias

```text
GET /api/transfers
```

Puede utilizar opcionalmente:

```text
studentId
```

como query parameter.

Ejemplo:

```text
GET /api/transfers?studentId=stu-001
```

---

## Crear transferencia

```text
POST /api/transfers
```

Body:

```json
{
  "senderId": "stu-001",
  "receiverId": "stu-002",
  "amount": 25,
  "description": "Almuerzo"
}
```

Respuesta correcta:

```json
{
  "data": {
    "id": "identificador",
    "senderId": "stu-001",
    "receiverId": "stu-002",
    "amount": 25,
    "description": "Almuerzo",
    "status": "COMPLETED",
    "createdAt": "fecha ISO-8601"
  }
}
```

---

# Compatibilidad

Los cambios realizados en UniPay deben preservar, salvo requerimiento explícito:

- paths existentes;
- métodos HTTP existentes;
- envelope `data`;
- envelope `error`;
- códigos de error documentados;
- nombres de propiedades públicas.

Un cambio destinado a corregir una regla de negocio no debe modificar innecesariamente el contrato HTTP.