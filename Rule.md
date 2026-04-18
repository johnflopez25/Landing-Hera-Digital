# 🌟 Hera Digital — Reglas del Proyecto

> Documento de referencia permanente para el diseño, desarrollo y copy de la landing page de Hera Digital.  
> Todo agente, desarrollador o colaborador debe leer este archivo antes de tocar cualquier línea de código o texto.

---

## 👤 Identidad del Proyecto

- **Nombre:** Hera Digital
- **Objetivo:** Posicionar la agencia como autoridad premium en personal branding y growth marketing
- **Meta de negocio:** Generar leads de alto valor
- **Usuario objetivo:** Profesionales, ejecutivos y especialistas que buscan posicionamiento personal, crecimiento de autoridad y resultados medibles

---

## 🧠 Principio Rector — Regla de los 5 Segundos

El usuario debe sentir en menos de 5 segundos:
1. _"Esta agencia entiende mi nivel profesional"_
2. _"Aquí puedo escalar mi marca personal"_
3. _"Esto no es marketing genérico"_

**Se evita completamente el diseño corporativo genérico y aburrido.**

---

## 🎯 UX — Directrices de Conversión

- Define el User Journey con foco en generar leads o contacto
- Cada sección tiene un objetivo claro: **informar**, **persuadir** o **convertir**
- Minimiza fricción: el usuario debe entender todo en segundos
- CTA principal siempre visible y con intención clara

---

## 🎨 Sistema de Diseño

### Paleta de Colores

| Token | Valor | Uso |
|---|---|---|
| `hera-black` | `#121212` | Fondo principal (Onyx Black) |
| `hera-white` | `#F5F5F5` | Texto principal (Alabaster) |
| `hera-magenta` | `#E13083` | CTAs, acentos, énfasis (Magenta) |
| `hera-gray` | `#2A2A2A` | Superficies de cards, separadores |

### Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Serif | **Playfair Display** (400, 700, 900) | Headlines, autoridad, lujo |
| Sans-serif | **Inter** (300, 400, 500, 700) | Body text, datos, claridad |

### Estilo Visual
- **Concepto:** Editorial Digital de Alto Rendimiento
- Minimalismo estratégico: cada elemento tiene un propósito
- Alto contraste, mucho espacio negativo
- Fotografía profesional siempre en escala de grises
- Glassmorphism oscuro para cards (`bg #1E1E1E`, borde `1px solid #2A2A2A`)

---

## 🧱 Estructura Obligatoria de la Web

En este orden exacto:

1. **Hero** — Propuesta de valor clara + CTA principal
2. **Servicios** — Branding, Personal Brand, Growth Marketing, Paid Ads (Meta Ads, Google Ads)
3. **Prueba Social** — Métricas, resultados, testimonios o casos de éxito
4. **Proceso de Trabajo** — Pasos claros y simples (máx. 4 pasos)
5. **Sobre la Agencia** — Enfoque en diferenciación y profesionalismo
6. **CTA Final** — Conversión directa (contacto / agendamiento)

---

## ✍️ Reglas de Copywriting

- Lenguaje directo, seguro y aspiracional
- Enfocado en profesionales de alto rendimiento
- **Evitar frases genéricas** (ej.: "Somos la mejor agencia...")
- Cada texto debe: comunicar valor, diferenciar y generar acción
- Tono: confiado, no arrogante; aspiracional, no pomposo

### Ejemplos de tono correcto
| ❌ Evitar | ✅ Usar |
|---|---|
| "Somos expertos en marketing" | "Convertimos expertise en autoridad de mercado" |
| "Te ayudamos a crecer" | "Crecimiento medible, no promesas vacías" |
| "Contáctanos" | "Agenda tu sesión gratuita →" |

---

## ⚙️ Stack Técnico Obligatorio

| Tecnología | Versión | Uso |
|---|---|---|
| **Next.js** | 14+ (App Router) | Framework base |
| **Tailwind CSS** | v3 | Estilos utilitarios |
| **Framer Motion** | latest | Animaciones |
| **Lucide React** | latest | Iconografía SVG |
| **next/font/google** | incluido en Next.js | Tipografía optimizada |
| **Google Stitch** | MCP conectado | Diseño visual / mockups |

---

## ⚡ Reglas de Animación — Framer Motion

> **Regla clave:** _"Animar para guiar, no para decorar"_

### Tipos permitidos
- Fade + slide sutil (`y: 24px → 0`, `opacity: 0 → 1`)
- Hover en botones (escala, brillo)
- Aparición progresiva en scroll (`whileInView` + `viewport: { once: true }`)
- Stagger entre elementos hijos (máx. `0.1s` entre cada uno)

### Restricciones
- Duración máxima por animación: **0.5s**
- Desplazamiento máximo: **24px vertical**
- Siempre usar `once: true` para no repetir en scroll (rendimiento)
- **Nunca:** animaciones de carga pesada, loops infinitos decorativos, delays > 0.5s

### Referencia de variantes base

```typescript
const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
}

// Uso correcto:
<motion.div
  variants={fadeUpVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: "-50px" }}
>
```

---

## 📱 Responsive — Mobile First

1. Diseñar primero para móvil (`< 768px`)
2. Escalar a tablet (`768px → 1024px`)
3. Desktop final (`> 1024px`)
4. Mantener proporciones y jerarquía en todas las escalas
5. Navbar: hamburger en mobile, horizontal en desktop
6. Grid de cards: 1 columna mobile → 2 tablet → 4 desktop

---

## 🚫 Prohibiciones Absolutas

- ❌ Colores genéricos planos (rojo puro, azul puro, verde puro)
- ❌ Animaciones exageradas o decorativas sin propósito
- ❌ Delays de animación > 0.5s
- ❌ Fuentes del sistema (Arial, Times New Roman, etc.)
- ❌ Fondos blancos o claros (va en contra del dark theme)
- ❌ Copy genérico ("Somos los mejores", "Calidad garantizada")
- ❌ Imágenes a color (solo escala de grises)
- ❌ Elementos sin propósito claro (ruido visual)

---

## 🏗️ Principios de Arquitectura de Componentes

- Usar **Atomic Design**: átomos → moléculas → organismos → secciones
- Tokens de diseño centralizados en `tailwind.config.ts`
- Componentes reutilizables, no código repetido
- Estructuras compatibles con **Flexbox / CSS Grid**
- Evitar soluciones complejas innecesarias

---

## 🎯 Objetivo Final

> Crear una web que transmita **autoridad inmediata**, se sienta **rápida y fluida**, genere **confianza en segundos** y convierta visitantes en clientes potenciales.

---

## 🖌️ Herramienta de Diseño Visual — Google Stitch (MCP)

> **Google Stitch es la herramienta de diseño visual del proyecto.**  
> Está conectada vía MCP y se usa para crear, revisar e iterar mockups de cada sección **antes** de escribir código.

### Pipeline de diseño obligatorio

```
[1] UI/UX Pro Max Skill    →    [2] Google Stitch (MCP)    →    [3] Next.js + Tailwind
──────────────────────          ──────────────────────────       ─────────────────────
Generar design system           Crear mockups visuales           Implementar el código
Paleta, tipo, estilos           Sección por sección              fiel al diseño de Stitch
UX rules, anti-patrones         Iterar hasta aprobar             con animaciones Framer
```

### Reglas de uso de Stitch

1. **Crear proyecto único** — Un solo proyecto Stitch para Hera Digital, reutilizable entre sesiones
2. **Una pantalla por sección** — Hero, Servicios, Prueba Social, Proceso, About, CTA Final
3. **Aplicar design system** — Antes de generar pantallas, aplicar el design system de Hera Digital (colores, tipografía)
4. **Aprobar antes de codear** — Ninguna sección se implementa en código sin haber sido revisada en Stitch
5. **Desktop first en Stitch** — Diseñar en desktop (`DESKTOP`), el código se adapta a mobile vía Tailwind

### Flujo de trabajo en Stitch (por sección)

```
1. mcp_StitchMCP_generate_screen_from_text  →  Generar pantalla con prompt detallado
2. mcp_StitchMCP_get_screen                →  Ver screenshot del resultado
3. mcp_StitchMCP_edit_screens              →  Refinar si no cumple la Regla de los 5 Segundos
4. ✅ Aprobado                             →  Proceder a implementar en Next.js
```

### Prompts de Stitch — estilo obligatorio

Cada prompt a Stitch debe incluir:
- Paleta exacta: fondo `#121212`, texto `#F5F5F5`, acento `#E13083`
- Tipografía: Playfair Display para headings, Inter para body
- Estilo: minimalista, dark mode, espacio negativo, fotografía en escala de grises
- Contenido: copy exacto de la sección (sin placeholders)

---

---

## 🧠 Skill Obligatoria — UI/UX Pro Max

> **Esta skill DEBE consultarse antes de implementar cualquier componente, sección o pantalla visual.**  
> Está instalada en `.agent/skills/ui-ux-pro-max/` y se activa automáticamente en Antigravity para solicitudes de UI/UX.

### ¿Qué contiene la skill?

| Recurso | Cantidad |
|---|---|
| Estilos UI (Glassmorphism, Dark Mode, Brutalism…) | 67 |
| Paletas de color por industria | 96 |
| Pairings tipográficos con Google Fonts | 57 |
| Reglas UX + anti-patrones | 99 |
| Tipos de charts / dashboards | 25 |
| Reglas de razonamiento por industria | 100 |

### Flujo de trabajo obligatorio

#### Paso 1 — Generar Design System (SIEMPRE primero)

Ejecutar antes de cualquier implementación visual:

```bash
python skills/ui-ux-pro-max/scripts/search.py "marketing branding dark premium agency" --design-system -p "Hera Digital"
```

Para persistir el design system como fuente de verdad del proyecto:

```bash
python skills/ui-ux-pro-max/scripts/search.py "marketing branding dark premium agency" --design-system --persist -p "Hera Digital"
```

Esto genera:
- `design-system/MASTER.md` — Design system global del proyecto
- `design-system/pages/` — Overrides por página (si aplica)

#### Paso 2 — Búsquedas complementarias (según necesidad)

```bash
# Estilos visuales adicionales
python skills/ui-ux-pro-max/scripts/search.py "dark editorial minimal high-contrast" --domain style

# Reglas UX de animación y accesibilidad
python skills/ui-ux-pro-max/scripts/search.py "animation accessibility scroll" --domain ux

# Tipografía alternativa si se requiere
python skills/ui-ux-pro-max/scripts/search.py "editorial luxury serif authority" --domain typography

# Patrones de landing page
python skills/ui-ux-pro-max/scripts/search.py "hero social-proof cta conversion" --domain landing
```

#### Paso 3 — Guidelines del stack Next.js

```bash
python skills/ui-ux-pro-max/scripts/search.py "layout responsive performance" --stack nextjs
```

### Reglas de UI profesional (de la skill — no negociables)

**Iconos y elementos visuales:**
- ❌ Nunca usar emojis como iconos — usar SVG (Lucide React)
- ✅ Sizing consistente en todos los iconos (`w-6 h-6` con viewBox 24x24)
- ✅ Hover states sin layout shift (solo color / opacity)

**Interacción y cursor:**
- ✅ `cursor-pointer` en todos los elementos clickeables
- ✅ Transiciones suaves: `transition-colors duration-200`
- ❌ Nunca cambios de estado instantáneos o con delay > 500ms

**Contraste modo oscuro (aplica a Hera Digital):**
- ✅ Texto principal: `#F5F5F5` sobre `#121212` (ratio > 10:1)
- ✅ Texto secundario: mínimo `#94A3B8`, nunca más claro
- ✅ Bordes visibles: `border-white/10` mínimo en dark mode

**Layout y espaciado:**
- ✅ Mismo `max-w` consistente en todo el proyecto (`max-w-7xl`)
- ✅ Padding superior para contenido detrás de navbar fija
- ✅ Sin scroll horizontal en mobile

### Checklist Pre-Entrega (de la skill)

Antes de entregar cualquier componente o sección, verificar:

**Visual:**
- [ ] Sin emojis como iconos
- [ ] Todos los iconos de Lucide React (set consistente)
- [ ] Hover states sin layout shift
- [ ] Colores del theme usados directamente, no via `var()`

**Interacción:**
- [ ] `cursor-pointer` en todos los elementos interactivos
- [ ] Feedback visual en hover (color, sombra, borde)
- [ ] Transiciones 150–300ms
- [ ] Focus states visibles para navegación por teclado

**Responsive:**
- [ ] Probado en 375px, 768px, 1024px, 1440px
- [ ] Sin scroll horizontal en ningún breakpoint
- [ ] Navbar colapsa correctamente en mobile

**Accesibilidad:**
- [ ] Todas las imágenes con `alt` text
- [ ] Inputs de formulario con `label`
- [ ] El color no es el único indicador visual
- [ ] `prefers-reduced-motion` respetado en animaciones Framer Motion

---

*Última actualización: Abril 2026*
