# Getting Started

## Installation

```bash
npm install @thundrex/web-components
```

## Quick Start

Import the components you need:

```ts
import '@thundrex/web-components';
```

Then use them in your HTML:

```html
<tx-button variant="primary">Click me</tx-button>
<tx-input label="Name" placeholder="Enter your name"></tx-input>
<tx-card>
  <h3 slot="header">Hello</h3>
  <p>This is a thundrex card.</p>
</tx-card>
```

## Framework Usage

### Vanilla HTML

```html
<script type="module">
  import 'https://unpkg.com/@thundrex/web-components';
</script>

<tx-button variant="accent">Hello</tx-button>
```

### React

```tsx
import '@thundrex/web-components';

export function App() {
  return <tx-button variant="primary">Click me</tx-button>;
}
```

### Vue

```vue
<script setup>
import '@thundrex/web-components';
</script>

<template>
  <tx-button variant="primary">Click me</tx-button>
</template>
```

### Angular

Add the `CUSTOM_ELEMENTS_SCHEMA` to your module:

```ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import '@thundrex/web-components';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
```

## Fonts

thundrex uses **Red Hat Text** and **Red Hat Mono**. Add them to your HTML head:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Red+Hat+Text:ital,wght@0,300..700;1,300..700&family=Red+Hat+Mono:wght@300..700&display=swap"
  rel="stylesheet"
/>
```
