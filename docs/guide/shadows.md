---
title: Shadows
---

<script setup>
</script>

# Shadows

Subtle elevation system with five levels from `xs` to `xl`.

## Scale

| Token            | Tailwind Class  | Description |
| ---------------- | --------------- | ----------- |
| `--tx-shadow-xs` | `shadow-tx-xs`  | Minimal     |
| `--tx-shadow-sm` | `shadow-tx-sm`  | Subtle      |
| `--tx-shadow-md` | `shadow-tx-md`  | Standard    |
| `--tx-shadow-lg` | `shadow-tx-lg`  | Elevated    |
| `--tx-shadow-xl` | `shadow-tx-xl`  | Prominent   |

## Preview

<div class="shadow-grid">
  <div class="shadow-swatch" style="box-shadow: 0 1px 2px rgba(0,0,0,0.05);"><span class="name">xs</span></div>
  <div class="shadow-swatch" style="box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04);"><span class="name">sm</span></div>
  <div class="shadow-swatch" style="box-shadow: 0 4px 6px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.04);"><span class="name">md</span></div>
  <div class="shadow-swatch" style="box-shadow: 0 10px 15px rgba(0,0,0,0.06), 0 4px 6px rgba(0,0,0,0.03);"><span class="name">lg</span></div>
  <div class="shadow-swatch" style="box-shadow: 0 20px 25px rgba(0,0,0,0.07), 0 8px 10px rgba(0,0,0,0.03);"><span class="name">xl</span></div>
</div>

## Focus Ring

`--tx-ring-focus` provides a consistent focus ring: `0 0 0 3px var(--tx-primary-soft)`.

## Usage

```css
.card {
  box-shadow: var(--tx-shadow-sm);
}

.card:hover {
  box-shadow: var(--tx-shadow-md);
}

.input:focus-visible {
  box-shadow: var(--tx-ring-focus);
}
```
