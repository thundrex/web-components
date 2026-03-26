# tx-card

Content card with optional accent bar, header/footer slots, and interactive hover state.

## Usage

```html
<tx-card>
  <h3 slot="header">Title</h3>
  <p>Card body content.</p>
  <div slot="footer">
    <tx-button size="sm" variant="primary">Action</tx-button>
  </div>
</tx-card>

<tx-card accent="primary" interactive>
  <h3 slot="header">Interactive Card</h3>
  <p>Lifts on hover, presses on click.</p>
</tx-card>
```

## Properties

| Property      | Type      | Default | Description                          |
| ------------- | --------- | ------- | ------------------------------------ |
| `interactive` | `boolean` | `false` | Hover lift and active press effects  |
| `flat`        | `boolean` | `false` | Removes shadow, keeps border         |
| `compact`     | `boolean` | `false` | Reduced padding                      |
| `accent`      | `string`  | `''`    | Top accent bar color (primary, accent, success, danger) |

## Slots

| Slot      | Description         |
| --------- | ------------------- |
| (default) | Card body content   |
| `header`  | Card header section |
| `footer`  | Card footer section |

## CSS Parts

| Part   | Description       |
| ------ | ----------------- |
| `card` | The card container |
