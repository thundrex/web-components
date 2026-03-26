# tx-slider

Range input with styled thumb, label, and optional live value readout.

## Usage

```html
<tx-slider label="Volume" show-value value="65"></tx-slider>
<tx-slider label="Brightness" show-value value="80" min="0" max="100"></tx-slider>
```

## Properties

| Property    | Type      | Default | Description             |
| ----------- | --------- | ------- | ----------------------- |
| `value`     | `number`  | `50`    | Current value           |
| `min`       | `number`  | `0`     | Minimum value           |
| `max`       | `number`  | `100`   | Maximum value           |
| `step`      | `number`  | `1`     | Step increment          |
| `label`     | `string`  | `''`    | Label text              |
| `showValue` | `boolean` | `false` | Show live value readout |

## Events

| Event      | Detail           | Description          |
| ---------- | ---------------- | -------------------- |
| `tx-input` | `{ value: number }` | Fires on drag/change |
