<p align="center">
  <img src="https://img.shields.io/badge/built%20with-Lit-324FFF?style=flat-square&logo=lit" alt="Built with Lit" />
  <img src="https://img.shields.io/badge/style-neumorphism-E8ECF0?style=flat-square" alt="Neumorphic" />
  <img src="https://img.shields.io/badge/font-Red%20Hat%20Text-EE0000?style=flat-square" alt="Red Hat Text" />
  <img src="https://img.shields.io/badge/tailwind-preset-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind Preset" />
  <img src="https://img.shields.io/badge/a11y-WCAG%20AA-34C759?style=flat-square" alt="Accessible" />
  <img src="https://img.shields.io/badge/license-MIT-blue?style=flat-square" alt="MIT License" />
</p>

<h1 align="center">thundre<b>X</b></h1>
<p align="center"><strong>Neumorphic design system and web component library</strong></p>
<p align="center">
  Soft UI components with clean neumorphic shadows, Red Hat Text typography, full theming, a Tailwind CSS preset, and WCAG AA accessibility — ready to drop into any framework or plain HTML.
</p>

---

## Features

- **Clean Neumorphism** — Subtle dual light/dark shadows on every element. Buttons extrude, inputs recess, interactive elements press in on click.
- **Red Hat Text** — Primary font: Red Hat Text. Mono: Red Hat Mono. Clean, modern, open-source.
- **Tailwind CSS Preset** — Drop-in Tailwind preset that maps all design tokens to utility classes. Theme-aware via CSS variables.
- **3 Built-in Themes** — Light (`#E8ECF0`), Dark (pure black `#141414`), and Ocean. Switch with `setTheme()`.
- **11 Components** — Button, Input, Toggle, Checkbox, Slider, Card, Badge, Avatar, Progress, Tag, Divider.
- **Accessible** — WCAG AA contrast ratios, keyboard navigation, ARIA roles, and focus-visible outlines.
- **Framework-agnostic** — Standard web components. Works with React, Vue, Angular, Svelte, or vanilla HTML.
- **Zero runtime dependencies** beyond Lit. Tree-shakeable ES module output.

---

## Quick Start

### Install

```bash
npm install @thundrex/web-components
```

### Use

```html
<script type="module">
  import '@thundrex/web-components';
</script>

<tx-button variant="primary">Get Started</tx-button>
<tx-input label="Email" placeholder="you@example.com"></tx-input>
<tx-toggle label="Dark Mode" checked></tx-toggle>
```

### CDN

```html
<script type="module" src="https://unpkg.com/@thundrex/web-components"></script>
```

---

## Tailwind CSS Integration

thundrex ships a Tailwind preset that extends your config with all design tokens. All values reference CSS custom properties, so they respond to runtime theme switches.

### Setup

```js
// tailwind.config.js
import thundrex from '@thundrex/web-components/tailwind-preset';

export default {
  presets: [thundrex],
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
};
```

### Available Classes

#### Colors

| Class | Token | Light value |
|---|---|---|
| `bg-tx-bg` | `--tx-bg` | `#E8ECF0` |
| `bg-tx-surface` | `--tx-surface` | `#E8ECF0` |
| `bg-tx-primary` | `--tx-primary` | `#4A7CFF` |
| `bg-tx-accent` | `--tx-accent` | `#F3B23A` |
| `bg-tx-success` | `--tx-success` | `#34C759` |
| `bg-tx-danger` | `--tx-danger` | `#FF3B30` |
| `text-tx-text` | `--tx-text` | `#1A2138` |
| `text-tx-text-secondary` | `--tx-text-secondary` | `#4D5B6A` |
| `text-tx-text-muted` | `--tx-text-muted` | `#6B7886` |

#### Neumorphic Shadows

| Class | Effect |
|---|---|
| `shadow-tx-sm` | Subtle extruded |
| `shadow-tx-md` | Standard extruded |
| `shadow-tx-lg` | Prominent extruded |
| `shadow-tx-inset` | Standard recessed |
| `shadow-tx-inset-sm` | Subtle recessed |

#### Border Radius

| Class | Value |
|---|---|
| `rounded-tx-sm` | 8px |
| `rounded-tx` | 12px |
| `rounded-tx-lg` | 16px |
| `rounded-tx-xl` | 20px |
| `rounded-tx-pill` | 999px |

#### Spacing

`p-tx-1` through `p-tx-16`, `m-tx-1` through `m-tx-16`, `gap-tx-1` through `gap-tx-16` — based on a 4px grid (4, 8, 12, 16, 20, 24, 32, 40, 48, 64px).

#### Typography

| Class | Value |
|---|---|
| `font-tx` | Red Hat Text |
| `font-tx-mono` | Red Hat Mono |
| `text-tx-xs` … `text-tx-4xl` | 0.75rem … 2.25rem |

### Usage Example

```html
<!-- Neumorphic card using only Tailwind classes -->
<div class="bg-tx-bg rounded-tx-lg shadow-tx-md p-tx-6 font-tx">
  <h2 class="text-tx-text text-tx-xl font-bold">Card Title</h2>
  <p class="text-tx-text-secondary text-tx-sm mt-tx-2">
    Build neumorphic layouts with familiar Tailwind utilities.
  </p>
  <input
    class="bg-tx-bg rounded-tx shadow-tx-inset-sm p-tx-3 mt-tx-4 w-full"
    placeholder="Recessed input..."
  />
  <button class="bg-tx-bg rounded-tx shadow-tx-sm p-tx-3 mt-tx-3 font-semibold
                  active:shadow-tx-inset-sm transition-all duration-tx">
    Extruded Button
  </button>
</div>
```

---

## Theming

Every component reads CSS custom properties from `:root`. Switch themes at runtime:

```js
import { setTheme, resetTheme } from '@thundrex/web-components';

setTheme('dark');
setTheme('ocean');
resetTheme();

// Custom tokens
setTheme({
  bg: '#1E1E2E',
  accent: '#CBA6F7',
  primary: '#89B4FA',
  text: '#CDD6F4',
  neuDark: 'rgba(0,0,0,0.5)',
  neuLight: 'rgba(50,50,60,0.3)',
});
```

Or override with CSS:

```css
:root {
  --tx-bg: #E8ECF0;
  --tx-accent: #F3B23A;
  --tx-primary: #4A7CFF;
  --tx-neu-dark: rgba(174,182,196,0.18);
  --tx-neu-light: rgba(255,255,255,0.65);
}
```

### Design Tokens

| Token | Light | Dark | Purpose |
|---|---|---|---|
| `--tx-bg` | `#E8ECF0` | `#141414` | Base surface |
| `--tx-accent` | `#F3B23A` | `#F3B23A` | Accent / gold |
| `--tx-primary` | `#4A7CFF` | `#6B9AFF` | Primary action |
| `--tx-text` | `#1A2138` | `#E8ECF4` | Primary text |
| `--tx-neu-dark` | `rgba(174,182,196,0.18)` | `rgba(0,0,0,0.5)` | Dark shadow |
| `--tx-neu-light` | `rgba(255,255,255,0.65)` | `rgba(255,255,255,0.04)` | Light shadow |
| `--tx-font` | Red Hat Text | Red Hat Text | Primary font |
| `--tx-font-mono` | Red Hat Mono | Red Hat Mono | Code font |

---

## Components

### `<tx-button>`

Extruded button that recesses on press. Variants: default, primary, accent, ghost.

```html
<tx-button>Default</tx-button>
<tx-button variant="primary">Primary</tx-button>
<tx-button variant="accent" pill>Accent Pill</tx-button>
<tx-button variant="ghost">Ghost</tx-button>
```

### `<tx-input>`

Recessed text field with inset shadow. Focus ring uses primary color.

```html
<tx-input label="Name" placeholder="John Doe"></tx-input>
<tx-input search placeholder="Search..."></tx-input>
```

### `<tx-toggle>`

Switch with recessed track and extruded thumb.

```html
<tx-toggle label="Dark Mode" checked></tx-toggle>
```

### `<tx-checkbox>`

Extruded checkbox that recesses with checkmark on check.

```html
<tx-checkbox label="Accept terms"></tx-checkbox>
```

### `<tx-slider>`

Recessed track with extruded draggable thumb.

```html
<tx-slider label="Volume" show-value value="65"></tx-slider>
```

### `<tx-card>`

Extruded content container. Interactive cards recess on press. Supports accent bars and header/footer slots.

```html
<tx-card accent="primary" interactive>
  <h3 slot="header">Title</h3>
  <p>Content</p>
</tx-card>
```

### `<tx-badge>` `<tx-avatar>` `<tx-progress>` `<tx-tag>` `<tx-divider>`

Additional UI components — see the [design system documentation](https://thundrex.github.io/web-components/) for full API reference and live demos.

---

## How Neumorphism Works

Each component uses the same base surface color (`--tx-bg`) as its background. Depth comes from two opposing shadows:

```
               Light source ↘
  ┌──────────────────────────┐
  │  highlight (-shadow)     │
  │                          │
  │      EXTRUDED            │
  │                          │
  │       dark shadow (+)  ↙ │
  └──────────────────────────┘

  ┌──────────────────────────┐
  │ ↘ dark inset             │
  │                          │
  │      RECESSED            │
  │                          │
  │         highlight inset  │
  └──────────────────────────┘
```

Shadow colors adapt per theme via `--tx-neu-dark` and `--tx-neu-light`.

---

## Development

```bash
git clone https://github.com/thundrex/web-components.git
cd web-components
npm install
npm run dev        # dev server at localhost:5173
npm run build      # build docs site
npm run build:lib  # build library (ES modules)
```

## Project Structure

```
src/
├── components/          # 11 web components
│   ├── tx-button.ts
│   ├── tx-input.ts
│   ├── tx-toggle.ts
│   ├── tx-checkbox.ts
│   ├── tx-slider.ts
│   ├── tx-card.ts
│   ├── tx-badge.ts
│   ├── tx-avatar.ts
│   ├── tx-progress.ts
│   ├── tx-tag.ts
│   └── tx-divider.ts
├── styles/
│   └── tx-tokens.ts     # Design tokens + neumorphic shadows
├── theme.ts             # setTheme / resetTheme / presets
└── index.ts             # Barrel export
tailwind-preset.js       # Tailwind CSS preset
index.html               # Design system docs
```

## Browser Support

Chrome/Edge 79+ · Firefox 63+ · Safari 13.1+

## License

MIT — [thundrex](https://github.com/thundrex)
