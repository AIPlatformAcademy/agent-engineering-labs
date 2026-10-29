# 03 — Desafío: crea las Instructions de UniPay

## 🎯 Tu misión

Completa:

```text
.github/copilot-instructions.md
```

con las reglas generales que quieres que Copilot siga cuando trabaje en UniPay.

# 🧩 ¿Qué debes crear?

Escribe entre:

```text
5 y 8 Instructions
```

Tus Instructions deben cubrir estos cinco aspectos:

```text
🏗 Arquitectura
¿Cómo debe respetar la estructura existente?


🧪 Testing
¿Qué debe ocurrir cuando cambia un comportamiento?


📦 Dependencias
¿Qué debe hacer antes de incorporar una nueva?


📋 Planificación
¿Qué debe hacer antes de modificar código?


⚙️ Reglas de negocio
¿Qué debe hacer si necesita una regla que no conoce?
```

# 💡 Regla para decidir

Antes de escribir una Instruction, pregunta:

> **¿Quiero que Copilot siga esta regla también en futuras tareas?**

```text
SÍ
↓
Puede ser una Instruction ✅


NO
↓
Probablemente pertenece al prompt ❌
```

# 🚧 Evita instrucciones específicas

### ❌ No hagas esto

```text
Crea GET /api/transfers/:transferId.
```

```text
Corrige UL-102.
```

```text
Modifica transfer.service.js.
```

Son instrucciones específicas de una tarea.

# 🛠 Construye el archivo

Utiliza esta estructura:

```markdown
# UniPay Copilot Instructions

## Arquitectura

- ...

## Testing

- ...

## Dependencias

- ...

## Planificación

- ...

## Reglas de negocio

- ...
```

No copies las cuatro Instructions utilizadas en la demo.

Ahora debes definir las reglas que consideres apropiadas para UniPay.

# 🧪 Comprueba tus Instructions

Abre una conversación nueva con Copilot.

Ejecuta:

```text
Necesitamos añadir un endpoint GET /api/students/:studentId/summary que devuelva el id, nombre y saldo actual del estudiante.

Analiza el cambio y propón cómo lo implementarías.

No realices cambios todavía.
```

# 🔎 Busca evidencia

Comprueba si tu respuesta refleja las reglas que escribiste:

```text
[ ] Arquitectura

[ ] Testing

[ ] Dependencias

[ ] Planificación

[ ] Reglas de negocio
```

Si una Instruction no produce un comportamiento claro, revísala.

# ✅ Reto completado

Tu archivo está listo cuando:

```text
✅ Tiene entre 5 y 8 Instructions.

✅ Las reglas pueden reutilizarse en futuras tareas.

✅ Describe CÓMO debe trabajar Copilot.

✅ No contiene la solución de una tarea concreta.

✅ Puedes observar sus efectos en la respuesta de Copilot.
```

# ⭐ Qué debes recordar

```text
PROMPT
↓
Define la tarea


INSTRUCTIONS
↓
Definen cómo queremos trabajar
```

> **Una buena Instruction no resuelve una tarea. Define una regla reutilizable para trabajar en el proyecto.**

# 🚀 Siguiente nivel

Ahora Copilot conoce:

```text
CÓMO queremos trabajar.
```

Pero el conocimiento de UniPay está distribuido en:

```text
docs/
```

La siguiente pregunta será:

> **¿Cómo puede Copilot encontrar solo el conocimiento que necesita para cada tarea?**

Continúa con:

```text
02-agents-md/
```
