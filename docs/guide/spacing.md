# Spacing

4px base grid. Use `--tx-space-*` tokens or Tailwind `p-tx-*` / `m-tx-*` classes.

## Scale

| Token           | Value | Tailwind        |
| --------------- | ----- | --------------- |
| `--tx-space-1`  | 4px   | `p-tx-1`        |
| `--tx-space-2`  | 8px   | `p-tx-2`        |
| `--tx-space-3`  | 12px  | `p-tx-3`        |
| `--tx-space-4`  | 16px  | `p-tx-4`        |
| `--tx-space-5`  | 20px  | `p-tx-5`        |
| `--tx-space-6`  | 24px  | `p-tx-6`        |
| `--tx-space-8`  | 32px  | `p-tx-8`        |
| `--tx-space-10` | 40px  | `p-tx-10`       |
| `--tx-space-12` | 48px  | `p-tx-12`       |
| `--tx-space-16` | 64px  | `p-tx-16`       |

## Border Radius

| Token              | Value | Tailwind           |
| ------------------ | ----- | ------------------ |
| `--tx-radius-sm`   | 6px   | `rounded-tx-sm`    |
| `--tx-radius`      | 8px   | `rounded-tx`       |
| `--tx-radius-lg`   | 12px  | `rounded-tx-lg`    |
| `--tx-radius-xl`   | 16px  | `rounded-tx-xl`    |
| `--tx-radius-pill` | 999px | `rounded-tx-pill`  |

## Usage

```css
.card {
  padding: var(--tx-space-6);
  border-radius: var(--tx-radius-lg);
  gap: var(--tx-space-3);
}
```
