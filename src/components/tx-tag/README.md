# tx-tag

Chip component for labels and filters. Optional remove button fires a dismiss event.

## Usage

```html
<tx-tag>Default</tx-tag>
<tx-tag color="primary">Design</tx-tag>
<tx-tag color="accent">Frontend</tx-tag>
<tx-tag removable color="primary">React</tx-tag>
```

## Properties

| Property    | Type                                                        | Default     | Description             |
| ----------- | ----------------------------------------------------------- | ----------- | ----------------------- |
| `color`     | `'default' \| 'primary' \| 'accent' \| 'success' \| 'danger'` | `'default'` | Color variant           |
| `removable` | `boolean`                                                   | `false`     | Show remove (×) button  |
| `size`      | `'sm' \| 'md'`                                               | `'md'`      | Tag size                |

## Events

| Event       | Detail | Description              |
| ----------- | ------ | ------------------------ |
| `tx-remove` | —      | Fires when × is clicked  |

## Slots

| Slot      | Description |
| --------- | ----------- |
| (default) | Tag label   |
