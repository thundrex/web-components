# tx-avatar

User avatar with initials or image. Supports a status indicator and four sizes.

## Usage

```html
<tx-avatar initials="JD" status="online"></tx-avatar>
<tx-avatar initials="AB" size="lg"></tx-avatar>
<tx-avatar src="/path/to/photo.jpg" size="xl"></tx-avatar>
```

## Properties

| Property   | Type                                              | Default | Description          |
| ---------- | ------------------------------------------------- | ------- | -------------------- |
| `src`      | `string`                                          | `''`    | Image URL            |
| `initials` | `string`                                          | `''`    | Initials fallback    |
| `status`   | `'' \| 'online' \| 'busy' \| 'away' \| 'offline'` | `''`    | Status indicator dot |
| `size`     | `'sm' \| 'md' \| 'lg' \| 'xl'`                    | `'md'`  | Avatar size          |
