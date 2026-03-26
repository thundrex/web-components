# Theming

thundrex ships with three built-in themes and full support for custom themes.

## Built-in Themes

| Theme   | Description                |
| ------- | -------------------------- |
| `light` | Default — soft gray bg     |
| `dark`  | True black surface         |
| `ocean` | Cool blue tones            |

## Switching Themes

```ts
import { setTheme, resetTheme } from '@thundrex/web-components';

setTheme('dark');
setTheme('ocean');
resetTheme(); // back to light
```

## Custom Themes

Pass a partial theme object to override specific tokens:

```ts
setTheme({
  accent: '#E040FB',
  primary: '#00BCD4',
  bg: '#FAFAFA',
});
```

## CSS Custom Properties

You can also override tokens directly in CSS:

```css
:root {
  --tx-primary: #e040fb;
  --tx-accent: #00bcd4;
  --tx-bg: #fafafa;
}
```

## Available Tokens

| Token                 | Description            |
| --------------------- | ---------------------- |
| `--tx-bg`             | Page background        |
| `--tx-surface`        | Card/component surface |
| `--tx-surface-alt`    | Alternate surface      |
| `--tx-accent`         | Accent color           |
| `--tx-primary`        | Primary color          |
| `--tx-success`        | Success color          |
| `--tx-danger`         | Danger color           |
| `--tx-text`           | Primary text           |
| `--tx-text-secondary` | Secondary text         |
| `--tx-text-muted`     | Muted text             |
| `--tx-border`         | Border color           |
