# tx-toggle

Switch toggle with smooth animation. ARIA switch role and keyboard accessible.

## Usage

```html
<tx-toggle label="Wi-Fi"></tx-toggle>
<tx-toggle label="Bluetooth" checked></tx-toggle>
```

## Properties

| Property  | Type      | Default | Description        |
| --------- | --------- | ------- | ------------------ |
| `checked` | `boolean` | `false` | Toggle state       |
| `label`   | `string`  | `''`    | Label text         |

## Events

| Event       | Detail              | Description          |
| ----------- | ------------------- | -------------------- |
| `tx-change` | `{ checked: boolean }` | Fires on toggle   |
