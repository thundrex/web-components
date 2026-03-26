# Typography

thundrex uses **Red Hat Text** for UI and **Red Hat Mono** for code. Eight size tokens from `xs` to `4xl`.

## Scale

| Token           | Size      | Tailwind Class  |
| --------------- | --------- | --------------- |
| `--tx-text-xs`  | 0.75rem   | `text-tx-xs`    |
| `--tx-text-sm`  | 0.875rem  | `text-tx-sm`    |
| `--tx-text-base`| 1rem      | `text-tx-base`  |
| `--tx-text-lg`  | 1.125rem  | `text-tx-lg`    |
| `--tx-text-xl`  | 1.25rem   | `text-tx-xl`    |
| `--tx-text-2xl` | 1.5rem    | `text-tx-2xl`   |
| `--tx-text-3xl` | 1.875rem  | `text-tx-3xl`   |
| `--tx-text-4xl` | 2.25rem   | `text-tx-4xl`   |

## Font Families

| Token           | Value                               | Tailwind Class  |
| --------------- | ----------------------------------- | --------------- |
| `--tx-font`     | Red Hat Text, system-ui, sans-serif | `font-tx`       |
| `--tx-font-mono`| Red Hat Mono, JetBrains Mono, mono  | `font-tx-mono`  |

## Usage

```css
h1 {
  font-family: var(--tx-font);
  font-size: var(--tx-text-3xl);
  font-weight: 700;
}

code {
  font-family: var(--tx-font-mono);
  font-size: var(--tx-text-sm);
}
```
