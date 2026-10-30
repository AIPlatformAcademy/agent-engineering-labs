# UniPay Agent Guide

## Propósito

Utiliza este archivo para descubrir dónde se encuentra el conocimiento dentro del repositorio.

Aplica Progressive Disclosure:

1. Comprende la tarea.
2. Identifica qué conocimiento necesitas.
3. Consulta primero la fuente más específica.
4. Amplía el contexto solo cuando sea necesario.
5. Evita cargar documentación que no esté relacionada con la tarea.

---

## Mapa de contexto

### Arquitectura

Consulta:

- `docs/architecture.md`

Cuando necesites comprender:

- La estructura de la aplicación.
- Las responsabilidades entre capas.
- El flujo general del sistema.
- La ubicación adecuada de un cambio.

---

### Reglas de negocio

Consulta:

- `docs/business-rules.md`

Cuando la tarea implique:

- Transferencias.
- Saldos.
- Límites.
- Validaciones.
- Restricciones funcionales.
- Comportamiento esperado del sistema.

---

### Errores

Consulta:

- `docs/error-catalog.md`

Cuando necesites:

- Seleccionar códigos de error.
- Identificar respuestas de error.
- Conocer los códigos HTTP asociados.
- Mantener consistencia en el manejo de errores.

---

### API

Consulta:

- `docs/api-guidelines.md`
- `openapi.yaml`

Cuando la tarea implique:

- Crear o modificar endpoints.
- Definir solicitudes y respuestas.
- Revisar contratos HTTP.
- Validar la estructura pública de la API.

---

### Pruebas

Consulta:

- `docs/testing-guidelines.md`

Cuando la tarea implique:

- Crear pruebas.
- Modificar pruebas.
- Validar comportamientos.
- Corregir defectos.
- Comprobar el impacto de un cambio.

---

### Tickets e incidentes

Consulta:

- `docs/tickets/`

Cuando la tarea haga referencia a un ticket o incidente específico.

Comienza por el archivo correspondiente al identificador mencionado en la tarea.

Por ejemplo:

- `docs/tickets/UL-102-negative-balance-incident.md`

Después, amplía el contexto únicamente con la documentación necesaria para comprender o resolver el incidente.

---

## Estrategia de divulgación progresiva

Sigue este orden:

1. Identifica la intención principal de la tarea.
2. Consulta el documento más específico para esa intención.
3. Determina si la información obtenida es suficiente.
4. Si falta contexto, consulta documentos relacionados.
5. Revisa el código relevante después de comprender la documentación aplicable.
6. Evita consultar archivos que no aporten información a la tarea actual.

Cuando una tarea combine varias áreas, incorpora el contexto de forma progresiva.

Ejemplos:

- Un cambio funcional puede requerir primero `docs/business-rules.md` y después `docs/api-guidelines.md`.
- Una modificación de endpoint puede requerir `docs/api-guidelines.md` y `openapi.yaml`.
- Un defecto puede requerir el ticket correspondiente, seguido de `docs/error-catalog.md` y `docs/testing-guidelines.md`.

Prioriza siempre el contexto mínimo necesario para comprender y completar la tarea.
