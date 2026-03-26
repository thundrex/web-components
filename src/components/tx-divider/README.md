# tx-divider

Separator with optional label. Supports vertical orientation and configurable spacing.

## Usage

```html
<tx-divider></tx-divider>
<tx-divider spacing="md"></tx-divider>
<tx-divider spacing="md" label="or continue with"></tx-divider>
<tx-divider vertical></tx-divider>
```

## Properties

| Property   | Type                                  | Default  | Description              |
| ---------- | ------------------------------------- | -------- | ------------------------ |
| `label`    | `string`                              | `''`     | Optional center label    |
| `vertical` | `boolean`                             | `false`  | Vertical orientation     |
| `spacing`  | `'none' \| 'sm' \| 'md' \| 'lg'`      | `'none'` | Vertical margin around divider |
