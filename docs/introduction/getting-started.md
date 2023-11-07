# Introduction

**Passes** is a web API that allows pages to make authentication requests directly to the user. 

- It's designed to enable users to create portable identities that allow them to present as the same "person" to the many sites and apps they use. 
- At its core is a low-level ABI for making requests to the user.
- The `@passes/reqs` package provides high-level APIs for making common pass request types, or creating your own pass request types.
- Pass requests can be used to build a wide variety of features including sign-in, permissions, payments, and much more.
- Users review pass requests using a "Pass Engine", a web page that implements PRC-3 and supports the pass request types the user needs.
- Passes support is extensive, with a JS polyfill that works in any modern browser, as well as an official web extension that provides native support.

## Getting Started

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