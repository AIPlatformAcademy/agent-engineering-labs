# 03 — Desafío: construye tu especialista

## 🎯 Tu misión

Completa:

```text
.github/agents/unipay-sdlc-engineer.agent.md
```

El agente debe reconocer:

```text
🛠️ ISSUE
Tengo un objetivo.


🚨 INCIDENT
Tengo un problema.
```

y elegir una estrategia diferente para cada uno.

---

# 🧩 Empieza desde aquí

Copia esta base:

```markdown
---
name: UniPay SDLC Engineer
description: Especialista en desarrollar Issues y resolver incidentes de UniPay.
target: vscode
---

# Misión

Eres el UniPay SDLC Engineer.

Clasifica la misión como ISSUE o INCIDENT y selecciona la estrategia adecuada.

Utiliza AGENTS.md para descubrir el contexto necesario.

# ISSUE

TODO: completa la estrategia.

# INCIDENT

TODO: completa la estrategia.

# Cierre

Resume:

- misión;
- estrategia;
- resultado.
```

---

# 💡 Ejemplo para empezar

Puedes comenzar `ISSUE` así:

```markdown
# ISSUE

Cuando debas desarrollar o modificar una capacidad:

1. ENTENDER  
   Identifica qué queremos conseguir.

2. DESCUBRIR CONTEXTO  
   Utiliza AGENTS.md para encontrar el contexto necesario.

3. TODO

4. TODO

5. TODO

6. VALIDAR  
   Comprueba que conseguimos el resultado esperado.
```

Ahora completa los pasos que faltan.

Piensa:

```text
Tengo un objetivo
      ↓
Entiendo
      ↓
Busco contexto
      ↓
¿...?
      ↓
¿...?
      ↓
¿...?
      ↓
Valido
```

---

# 🚨 Diseña INCIDENT

Utiliza la misma idea:

```text
Tengo un problema
      ↓
Entiendo
      ↓
Busco contexto
      ↓
¿...?
      ↓
¿...?
      ↓
¿...?
      ↓
Valido
```

Pregúntate:

> **Si todavía no sé por qué falla, ¿qué debería hacer antes de corregirlo?**

---

# 🚧 No dupliques

```text
INSTRUCTIONS
↓
CÓMO trabajar


AGENTS.md
↓
DÓNDE buscar


CUSTOM AGENT
↓
QUÉ ESTRATEGIA ejecutar
```

Tu agente debe centrarse en la estrategia.

---

# 🧪 Pruébalo

Selecciona:

```text
UniPay SDLC Engineer
```

## 🛠️ ISSUE

```text
Necesitamos añadir un endpoint GET /api/transfers/:transferId.

Identifica la misión y la estrategia que seguirás.

No realices cambios.
```

Comprueba:

```text
ISSUE
↓
¿La estrategia convierte el objetivo
en una solución?
```

---

## 🚨 INCIDENT

Abre un chat nuevo:

```text
Se ha reportado que la consulta de una transferencia devuelve información incorrecta.

Identifica la misión y la estrategia que seguirás.

No realices cambios.
```

Comprueba:

```text
INCIDENT
↓
¿La estrategia busca descubrir
la causa antes de corregirla?
```

---

# ✅ Reto completado

```text
[ ] Reconoce ISSUE e INCIDENT.

[ ] Usa una estrategia diferente para cada uno.

[ ] Utiliza AGENTS.md para descubrir contexto.

[ ] No duplica Instructions ni documentación.
```

---

# ⭐ Qué debes recordar

```text
CUSTOM AGENT
=
ESPECIALISTA + ESTRATEGIA
```

Ahora ya tenemos:

```text
PROMPT        → QUÉ
INSTRUCTIONS  → CÓMO
AGENTS.md     → DÓNDE
CUSTOM AGENT  → ESTRATEGIA
```

🚀 Ya estamos preparados para utilizar todas las piezas juntas en una misión real de UniPay.