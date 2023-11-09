# Getting Started

::: warning Writing In Progress
This content is just a sketch and needs to be rewritten and edited.
:::

### Installing `@passes/reqs`

`@passes/reqs` is a convenient SDK for making pass requests from apps, and building support for them in pass engines.

::: code-group

```[npm]
npm add @passes/reqs
```

```[yarn]
yarn add @passes/reqs
```

```[bun]
bun add @passes/reqs
```

:::

### Including the polyfill script

Add the polyfill script to your page. This will make the `document.passes` ABI available to all users, even if their environment lacks native support for Passes.

```html
<script type="module" src="https://unpkg.com/@passes/polyfill@0.0.1-alpha.16/src/main.js"></script>
```

### Making your first pass request

::: warning WARNING - Filler Content
This code doesn't work.
:::

```typescript
import { ethereumJsonRpc } from '@passes/reqs';

const result = await ethereumJsonRpc.request({
  jsonrpc: '2.0',
  method: 'eth_sign',
  params: ['sign-me'],
  id: 1,
})
```