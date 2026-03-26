# tx-progress

Animated progress bar with label, percentage, and color variants.

## Usage

```html
<tx-progress label="Upload" show-value value="73"></tx-progress>
<tx-progress label="Completed" show-value value="100" color="success"></tx-progress>
<tx-progress label="Storage" show-value value="89" color="danger"></tx-progress>
```

## Properties

| Property    | Type                                                        | Default     | Description               |
| ----------- | ----------------------------------------------------------- | ----------- | ------------------------- |
| `value`     | `number`                                                    | `0`         | Current progress value    |
| `max`       | `number`                                                    | `100`       | Maximum value             |
| `label`     | `string`                                                    | `''`        | Label text                |
| `showValue` | `boolean`                                                   | `false`     | Show percentage readout   |
| `color`     | `'primary' \| 'accent' \| 'success' \| 'danger'`             | `'primary'` | Bar color variant         |
| `size`      | `'sm' \| 'md' \| 'lg'`                                      | `'md'`      | Bar height                |
