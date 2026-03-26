# @thundrex/web-components

[![npm version](https://img.shields.io/npm/v/@thundrex/web-components?color=4A7CFF&label=npm)](https://www.npmjs.com/package/@thundrex/web-components)
[![GitHub Actions](https://img.shields.io/github/actions/workflow/status/thundrex/web-components/deploy.yml?branch=main&label=deploy&color=22C55E)](https://github.com/thundrex/web-components/actions)
[![License](https://img.shields.io/github/license/thundrex/web-components?color=F3B23A)](https://github.com/thundrex/web-components/blob/main/LICENSE)
[![Lit](https://img.shields.io/badge/built_with-Lit-324FFF?logo=lit)](https://lit.dev)
[![Tailwind CSS](https://img.shields.io/badge/preset-Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Docs](https://img.shields.io/badge/docs-GitHub_Pages-4A7CFF)](https://thundrex.github.io/web-components/)

A clean, accessible design system and web component library built with [Lit](https://lit.dev). Themeable, framework-agnostic, and ships with a Tailwind CSS preset.

[Documentation](https://thundrex.github.io/web-components/) · [GitHub](https://github.com/thundrex/web-components)

---

## Features

- **11 components** — Button, Input, Toggle, Checkbox, Slider, Card, Badge, Avatar, Progress, Tag, Divider
- **Accessible** — WCAG AA contrast, ARIA roles, keyboard navigation, focus management
- **Themeable** — CSS custom properties power the entire system; three built-in themes (light, dark, ocean) plus custom themes via `setTheme()`
- **Tailwind CSS preset** — Maps all design tokens to utility classes, theme-aware via CSS variables
- **Framework-agnostic** — Works in React, Vue, Angular, Svelte, or plain HTML
- **Red Hat Text / Mono** — Clean typography with eight size tokens

## Installation

```bash
npm install @thundrex/web-components
```

## Quick Start

```ts
import '@thundrex/web-components';
```

```html
<tx-button variant="primary">Click me</tx-button>
<tx-input label="Name" placeholder="Enter your name"></tx-input>
<tx-card>
  <h3 slot="header">Hello</h3>
  <p>This is a thundrex card.</p>
</tx-card>
```

## Theming

```ts
import { setTheme, resetTheme } from '@thundrex/web-components';

setTheme('dark');
setTheme('ocean');
setTheme({ accent: '#E040FB', primary: '#00BCD4' });
resetTheme();
```

Or override tokens directly in CSS:

```css
:root {
  --tx-primary: #e040fb;
  --tx-accent: #00bcd4;
}
```

## Tailwind CSS

```js
// tailwind.config.js
import thundrex from '@thundrex/web-components/tailwind-preset';

export default {
  presets: [thundrex],
  content: ['./src/**/*.{html,js,ts}'],
};
```

```html
<div class="bg-tx-surface rounded-tx-lg shadow-tx-sm p-tx-6 font-tx">
  <h2 class="text-tx-text text-tx-xl font-bold">Title</h2>
  <p class="text-tx-text-secondary text-tx-sm mt-tx-2">Body</p>
</div>
```

## Components

| Component       | Description                              |
| --------------- | ---------------------------------------- |
| `<tx-button>`   | Button with four variants and sizes      |
| `<tx-input>`    | Text field with label and search variant |
| `<tx-toggle>`   | Switch toggle with ARIA support          |
| `<tx-checkbox>` | Checkbox with animated checkmark         |
| `<tx-slider>`   | Range input with live value readout      |
| `<tx-card>`     | Content card with accent bar and slots   |
| `<tx-badge>`    | Status label with color variants         |
| `<tx-avatar>`   | User avatar with initials and status     |
| `<tx-progress>` | Animated progress bar                    |
| `<tx-tag>`      | Chip with optional remove button         |
| `<tx-divider>`  | Separator with optional label            |

Each component has its own README in `src/components/<name>/README.md` with full API docs.

---

## Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
git clone https://github.com/thundrex/web-components.git
cd web-components
npm install
```

### Dev Server (component playground)

```bash
npm run dev
```

### Documentation Site

```bash
npm run docs:dev       # Start dev server
npm run docs:build     # Build for production
npm run docs:preview   # Preview production build
```

### Build Library

```bash
npm run build:lib
```

---

## Adding New Components

> **Always use the generator.** Both humans and AI assistants must use this command to create new components. Do not manually create component files.

```bash
npm run generate <component-name>
```

The generator automatically:

1. Creates `src/components/<name>/<name>.ts` with base Lit component and design tokens
2. Creates `src/components/<name>/README.md` with API documentation template
3. Creates `docs/components/<name>.md` with a VitePress docs page
4. Updates `src/index.ts` with the barrel export
5. Updates the VitePress sidebar

Example:

```bash
npm run generate tx-tooltip
```

Then edit `src/components/tx-tooltip/tx-tooltip.ts` to build your component.

---

## Publishing to npm

### First-time Setup

```bash
npm login
```

### Releasing

Use the version scripts to bump, build, and prepare for publish:

```bash
npm run release:patch   # 1.0.0 → 1.0.1 (bug fixes)
npm run release:minor   # 1.0.0 → 1.1.0 (new features)
npm run release:major   # 1.0.0 → 2.0.0 (breaking changes)
```

Then publish:

```bash
npm publish --access public
```

### What Gets Published

Only these files ship to npm (configured in `package.json` `files` field):

- `dist-lib/` — compiled components
- `tailwind-preset.js` — Tailwind CSS preset
- `README.md`
- `LICENSE`

---

## Design Tokens

| Category   | Tokens                                           |
| ---------- | ------------------------------------------------ |
| Colors     | `--tx-bg`, `--tx-surface`, `--tx-primary`, `--tx-accent`, `--tx-success`, `--tx-danger` |
| Text       | `--tx-text`, `--tx-text-secondary`, `--tx-text-muted` |
| Shadows    | `--tx-shadow-xs` through `--tx-shadow-xl`        |
| Spacing    | `--tx-space-1` (4px) through `--tx-space-16` (64px) |
| Radius     | `--tx-radius-sm` (6px) through `--tx-radius-pill` |
| Typography | `--tx-text-xs` through `--tx-text-4xl`           |
| Fonts      | `--tx-font` (Red Hat Text), `--tx-font-mono` (Red Hat Mono) |

---

## Project Structure

```
web-components/
├── src/
│   ├── components/
│   │   ├── tx-button/
│   │   │   ├── tx-button.ts    # Component source
│   │   │   └── README.md       # Component API docs
│   │   ├── tx-input/
│   │   └── ...
│   ├── styles/
│   │   └── tx-tokens.ts        # Design tokens
│   ├── theme.ts                # Theme engine
│   └── index.ts                # Barrel exports
├── docs/                       # VitePress documentation
│   ├── .vitepress/
│   │   ├── config.ts           # Site config & sidebar
│   │   └── theme/              # Custom theme
│   ├── guide/                  # Foundation docs
│   └── components/             # Component docs (auto-includes README)
├── scripts/
│   └── generate-component.mjs  # Component generator
├── tailwind-preset.js          # Tailwind CSS preset
└── package.json
```

## License

MIT
