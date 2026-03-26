# tx-checkbox

Clean checkbox with animated checkmark. ARIA checkbox role and keyboard accessible.

## Usage

```html
<tx-checkbox label="Accept terms"></tx-checkbox>
<tx-checkbox label="Newsletter" checked></tx-checkbox>
```

## Properties

| Property  | Type      | Default | Description        |
| --------- | --------- | ------- | ------------------ |
| `checked` | `boolean` | `false` | Checked state      |
| `label`   | `string`  | `''`    | Label text         |

## Events

| Event       | Detail              | Description            |
| ----------- | ------------------- | ---------------------- |
| `tx-change` | `{ checked: boolean }` | Fires on state change |
