# tx-badge

Status label with soft color background and optional dot indicator.

## Usage

```html
<tx-badge>Default</tx-badge>
<tx-badge color="primary">Primary</tx-badge>
<tx-badge color="success">Complete</tx-badge>
<tx-badge color="danger" dot>Critical</tx-badge>
```

## Properties

| Property | Type                                                        | Default     | Description            |
| -------- | ----------------------------------------------------------- | ----------- | ---------------------- |
| `color`  | `'default' \| 'primary' \| 'accent' \| 'success' \| 'danger'` | `'default'` | Color variant          |
| `dot`    | `boolean`                                                   | `false`     | Show status dot        |
| `size`   | `'md' \| 'lg'`                                               | `'md'`      | Badge size             |

## Slots

| Slot      | Description  |
| --------- | ------------ |
| (default) | Badge label  |
