# tx-button

A clean button component with four variants: default, primary, accent, and ghost.

## Usage

```html
<tx-button>Default</tx-button>
<tx-button variant="primary">Primary</tx-button>
<tx-button variant="accent">Accent</tx-button>
<tx-button variant="ghost">Ghost</tx-button>

<tx-button size="sm">Small</tx-button>
<tx-button size="lg">Large</tx-button>
<tx-button pill variant="primary">Pill</tx-button>
<tx-button icon-only variant="accent">+</tx-button>
```

## Properties

| Property   | Type                                            | Default     | Description                  |
| ---------- | ----------------------------------------------- | ----------- | ---------------------------- |
| `variant`  | `'default' \| 'primary' \| 'accent' \| 'ghost'` | `'default'` | Visual style                 |
| `size`     | `'sm' \| 'md' \| 'lg'`                          | `'md'`      | Button size                  |
| `disabled` | `boolean`                                       | `false`     | Disables the button          |
| `pill`     | `boolean`                                       | `false`     | Fully rounded border radius  |
| `iconOnly` | `boolean`                                       | `false`     | Circular icon-only layout    |

## CSS Parts

| Part     | Description        |
| -------- | ------------------ |
| `button` | The native button  |

## Slots

| Slot      | Description               |
| --------- | ------------------------- |
| (default) | Button label / icon content |
