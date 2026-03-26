# Tailwind CSS

thundrex ships a drop-in Tailwind CSS preset that maps all design tokens to utility classes.

## Setup

```bash
npm install tailwindcss @thundrex/web-components
```

```js
// tailwind.config.js
import thundrex from '@thundrex/web-components/tailwind-preset';

export default {
  presets: [thundrex],
  content: ['./src/**/*.{html,js,ts}'],
};
```

## Usage

```html
<div class="bg-tx-surface rounded-tx-lg shadow-tx-sm p-tx-6 font-tx">
  <h2 class="text-tx-text text-tx-xl font-bold">Title</h2>
  <p class="text-tx-text-secondary text-tx-sm mt-tx-2">Body</p>
</div>
```

## Color Classes

| Class             | Token              |
| ----------------- | ------------------ |
| `bg-tx-bg`        | `--tx-bg`          |
| `bg-tx-surface`   | `--tx-surface`     |
| `bg-tx-primary`   | `--tx-primary`     |
| `bg-tx-accent`    | `--tx-accent`      |
| `bg-tx-success`   | `--tx-success`     |
| `bg-tx-danger`    | `--tx-danger`      |
| `text-tx-text`    | `--tx-text`        |
| `border-tx-border`| `--tx-border`      |

## Shadow Classes

| Class          | Level     |
| -------------- | --------- |
| `shadow-tx-xs` | Minimal   |
| `shadow-tx-sm` | Subtle    |
| `shadow-tx-md` | Standard  |
| `shadow-tx-lg` | Elevated  |
| `shadow-tx-xl` | Prominent |

## Spacing & Radius

| Class Pattern                          | Values        |
| -------------------------------------- | ------------- |
| `p-tx-1` … `p-tx-16`                  | 4px … 64px    |
| `rounded-tx-sm` … `rounded-tx-pill`   | 6px … 999px   |
| `font-tx` / `font-tx-mono`            | Red Hat fonts |

All values reference CSS custom properties, so they automatically respond to runtime theme switches.
