# tx-input

Text input field with label, border, and focus ring. Includes a search variant with a built-in icon.

## Usage

```html
<tx-input label="Full Name" placeholder="John Doe"></tx-input>
<tx-input label="Email" placeholder="john@example.com" type="email"></tx-input>
<tx-input search placeholder="Search anything..."></tx-input>
```

## Properties

| Property      | Type      | Default  | Description                  |
| ------------- | --------- | -------- | ---------------------------- |
| `label`       | `string`  | `''`     | Label text above the field   |
| `name`        | `string`  | `''`     | Input name attribute         |
| `placeholder` | `string`  | `''`     | Placeholder text             |
| `value`       | `string`  | `''`     | Current value                |
| `type`        | `string`  | `'text'` | Input type (text, email, etc.) |
| `search`      | `boolean` | `false`  | Search variant with icon     |

## Events

| Event      | Detail          | Description               |
| ---------- | --------------- | ------------------------- |
| `tx-input` | `{ value: string }` | Fires on input change |

## CSS Parts

| Part    | Description              |
| ------- | ------------------------ |
| `input` | The native input element |
