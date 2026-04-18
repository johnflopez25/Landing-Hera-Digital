# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** Hera Digital
**Generated:** 2026-04-15 (overridden manually — skill output did not match brief)
**Category:** Premium Marketing Agency — Personal Branding & Growth Marketing

---

## Global Rules

### Color Palette

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Background | `#121212` | `--color-background` | Onyx Black — base de todo |
| Text Primary | `#F5F5F5` | `--color-text` | Alabaster — texto principal |
| CTA / Accent | `#E13083` | `--color-cta` | Magenta — botones, énfasis, acentos |
| Surface | `#1E1E1E` | `--color-surface` | Cards, paneles |
| Border | `#2A2A2A` | `--color-border` | Separadores, bordes de cards |
| Text Muted | `#6B7280` | `--color-muted` | Texto secundario, captions |

**Color Notes:** Dark editorial. Alto contraste. Magenta como único color de acción. Sin colores adicionales.

### Typography

- **Heading Font:** Playfair Display (400, 700, 900)
- **Body Font:** Inter (300, 400, 500, 700)
- **Mood:** editorial, autoridad, lujo, claridad, profesional
- **Google Fonts:** [Playfair Display + Inter](https://fonts.google.com/share?selection.family=Playfair+Display:wght@400;700;900|Inter:wght@300;400;500;700)

**CSS Import:**
```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Inter:wght@300;400;500;700&display=swap');
```

**Typographic Scale:**
| Token | Size | Font | Weight | Usage |
|-------|------|------|--------|-------|
| `--text-hero` | `clamp(3rem, 6vw, 5rem)` | Playfair Display | 900 | Hero H1 |
| `--text-h2` | `clamp(2rem, 4vw, 3rem)` | Playfair Display | 700 | Section headlines |
| `--text-h3` | `1.5rem` | Playfair Display | 700 | Card titles |
| `--text-eyebrow` | `0.75rem` | Inter | 600 | Labels, eyebrows (tracking: 0.2em) |
| `--text-body` | `1rem` | Inter | 400 | Cuerpo de texto |
| `--text-body-lg` | `1.125rem` | Inter | 400 | Subheadlines, leads |
| `--text-small` | `0.875rem` | Inter | 400 | Captions, footnotes |

### Spacing Variables

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `4px / 0.25rem` | Tight gaps |
| `--space-sm` | `8px / 0.5rem` | Icon gaps, inline |
| `--space-md` | `16px / 1rem` | Standard padding |
| `--space-lg` | `24px / 1.5rem` | Component padding |
| `--space-xl` | `32px / 2rem` | Large gaps |
| `--space-2xl` | `48px / 3rem` | Section margins |
| `--space-3xl` | `64px / 4rem` | Hero padding |
| `--space-4xl` | `96px / 6rem` | Between sections |

**Max content width:** `max-w-7xl` (1280px)

### Shadow Depths (Dark Mode)

| Level | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` | Subtle lift |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.4)` | Cards, buttons |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.5)` | Modals, dropdowns |
| `--shadow-magenta` | `0 0 24px rgba(225,48,131,0.2)` | Accent glow on hover |

---

## Component Specs

### Buttons

```css
/* Primary Button — CTA */
.btn-primary {
  background: #E13083;
  color: #F5F5F5;
  padding: 14px 28px;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-primary:hover {
  background: #c8276f;
  box-shadow: 0 0 24px rgba(225, 48, 131, 0.35);
  transform: translateY(-1px);
}

/* Secondary Button — Ghost */
.btn-secondary {
  background: transparent;
  color: #F5F5F5;
  border: 1px solid #2A2A2A;
  padding: 14px 28px;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  transition: all 200ms ease;
  cursor: pointer;
}

.btn-secondary:hover {
  border-color: #E13083;
  color: #E13083;
}
```

### Cards (Service Cards)

```css
.card {
  background: #1E1E1E;
  border: 1px solid #2A2A2A;
  border-radius: 4px;
  padding: 32px;
  transition: all 250ms ease;
  cursor: pointer;
}

.card:hover {
  border-color: #E13083;
  transform: translateY(-4px);
  box-shadow: 0 0 24px rgba(225, 48, 131, 0.12);
}
```

### Inputs

```css
.input {
  background: #1E1E1E;
  border: 1px solid #2A2A2A;
  color: #F5F5F5;
  padding: 14px 16px;
  border-radius: 4px;
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  transition: border-color 200ms ease;
}

.input:focus {
  border-color: #E13083;
  outline: none;
  box-shadow: 0 0 0 3px rgba(225, 48, 131, 0.15);
}
```

### Eyebrow Labels

```css
.eyebrow {
  font-family: 'Inter', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #E13083;
}
```

---

## Style Guidelines

**Style:** Dark Editorial — Alto Rendimiento

**Keywords:** Minimal, high-contrast, negative space, serif authority, dark mode, precision, luxury

**Best For:** Premium agencies, personal branding, growth marketing, executive positioning

**Key Effects:**
- Fade + slide on scroll (`y: 24px → 0`, duration: 0.5s, `once: true`)
- Hover border magenta en cards (250ms)
- Magenta glow en CTAs al hover
- Frosted glass en navbar al scroll (`backdrop-filter: blur(20px)`)

### Page Pattern

**Pattern Name:** Hero-Centric + Authority Build

- **Conversion Strategy:** Impacto visual inmediato → construcción de autoridad → prueba social → conversión
- **CTA Placement:** Hero principal + repetición en sección final
- **Section Order:**
  1. Hero (propuesta de valor + CTA)
  2. Servicios (4 cards informativos)
  3. Prueba Social (métricas + testimonios)
  4. Proceso (4 pasos — reducir fricción)
  5. About (diferenciación)
  6. CTA Final (conversión directa)

---

## Photography & Media Rules

- ✅ **Solo escala de grises** — sin excepción
- ✅ Fotografía profesional, editorial, high-end
- ✅ Personas reales en contextos de trabajo/liderazgo
- ❌ Stock photos genéricas
- ❌ Imágenes en color
- ❌ Ilustraciones o avatares cartoon

---

## Anti-Patterns (Do NOT Use)

- ❌ Fondos blancos o claros
- ❌ Colores adicionales fuera de la paleta definida
- ❌ Tipografía del sistema (Arial, Times, etc.)
- ❌ Emojis como iconos — usar Lucide React (SVG)
- ❌ Animaciones > 0.5s o loops decorativos
- ❌ Copy genérico ("Somos los mejores")
- ❌ Imágenes a color
- ❌ Elementos sin propósito claro (ruido visual)
- ❌ Cards con `border-radius` exagerado (máx. 4px — estilo angular)
- ❌ CTA sin verbo de acción directo

---

## Pre-Delivery Checklist

Before delivering any UI code, verify:

- [ ] Fondo `#121212` en toda la página
- [ ] Sin emojis como iconos (Lucide React únicamente)
- [ ] `cursor-pointer` en todos los elementos clickeables
- [ ] Hover states con transiciones suaves (150–250ms)
- [ ] Contraste texto `#F5F5F5` sobre `#121212` ✅ (ratio > 10:1)
- [ ] Focus states visibles para navegación por teclado
- [ ] `prefers-reduced-motion` respetado en Framer Motion
- [ ] Responsive probado: 375px, 768px, 1024px, 1440px
- [ ] Sin scroll horizontal en mobile
- [ ] Contenido no oculto detrás de navbar fija
- [ ] Todas las imágenes en escala de grises + `alt` text
- [ ] Copy real (sin Lorem Ipsum ni placeholders)
