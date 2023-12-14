# The Passes Protocol

:::info This is an early release of Passes.
We invite you to read the documentation and [source code](https://github.com/passes-org/passes), experiment by adding [Pass Requests](#what-is-a-pass-request) in your apps, and contribute to [discussions](https://github.com/passes-org/passes/discussions) to help shape the future of Passes.

These docs are under active development, and we'll be continuously publishing updates. We welcome your feedback – please [reach out](https://github.com/passes-org/passes/discussions).
:::


## The Request ABI Protocol

```typescript
interface PassesABI {
    request: (raw: Uint8Array) => Promise<Uint8Array>;
}
```

`PassesABI` is the protocol used to send raw Pass Requests to the user. On the web (via the Polyfill) it's available at `document.passes`.

    
## Envelope Transport Format
    
```typescript
// Request message structure
type RequestEnvelopeV0 = {
    // Version is always 0 for this envelope version
    version: 0;
    // The request topic's identifier. This field is run-length encoded and can be up to 256 bytes long
    topic: string;
    // The raw request body, encoded via the request topic's request body codec
    body: Uint8Array;
}

// Result message structure
type ResultEnvelopeV0 =
    // The user accepted the request. Body contains the raw result body, encoded via the request topic's result body codec
    | { status: 'accepted'; body: Uint8Array }
    // The user rejected the request (no additional information is available)
    | { status: 'rejected' }
    // The Pass Provider doesn't support the requested topic
    | { status: 'unsupported' }
    // An exception occurred when presenting or accepting the request
    | { status: 'exception'; message: string }
```

This is the standard format for Pass Requests and their results.

A "topic" is a string using reverse-dns notation to uniquely identify a request topic.

This format includes a 1-byte version specifier to provide future-compatibility for changes to the transport encoding.

    
## Request Topic Specs

For apps and Pass Providers to implement support for common Pass Request topics, they need specifications to refer to.

Pass Request specifications will specify:
- Envelope Format (generally, v0 – [see above](#envelope-v0-request-format))
- Request Topic ID
- Request Body Codec
- Result Body Codec
- Request Interpretation and Presentation Details

:::info Discussing RFCs
To propose and participate in discussions around Pass Request Topic RFCs, please go to [Passes Discussions](https://github.com/passes-org/passes/discussions/categories/pass-request-topics). 
:::


## `@passes/reqs` `RequestTopic`

As [Request Topic Specs](#request-topic-specs) become standard, `@passes/reqs` and other community packages will implement `RequestTopic` to provide high-level APIs for use in apps.


## ABI Implementations

An implementation of the [request ABI](#the-request-abi-protocol) is needed to present Pass Requests to the user. The request ABI is responsible for routing pass requests to a Pass Provider for presentation to the user.

Some examples of how Pass Requests flow to Pass Providers given different ABI implementations include:

#### `@passes/polyfill` ABI Implementation
<img src="/diagram_02_light.gif" alt="Diagram of Polyfill support for Pass Requests" class="light-mode-only" />
<img src="/diagram_02_dark.gif" alt="Diagram of Polyfill support for Pass Requests" class="dark-mode-only" />

#### Web Extension ABI Implementation
<img src="/diagram_03_light.gif" alt="Diagram of web extension support for Pass Requests" class="light-mode-only" />
<img src="/diagram_03_dark.gif" alt="Diagram of web extension support for Pass Requests" class="dark-mode-only" />

#### Native Browser ABI Implementation
<img src="/diagram_04_light.gif" alt="Diagram of native browser support for Pass Requests" class="light-mode-only" />
<img src="/diagram_04_dark.gif" alt="Diagram of native browser support for Pass Requests" class="dark-mode-only" />


## Request Handlers

[Request Handlers](/request-handlers.md) are responsible for presenting a rich interpretation of a Pass Request to the user so they can review and then approve or reject it.


### Pass Providers

All Pass Requests are sent directly to the user's Pass Provider over the client.

A Pass Provider can be a web or native mobile app. It could even be built into a user's browser or operating system.

If a Pass Provider supports the topic of a Pass Request, it will present it to the user. If not, it can delegate it to a [Topic Provider](/request-handlers.md#topic-providers) that does support it.


### Web Request Handlers

Building a Request Handler on the web that works with the `@passes/polyfill` script and the upcoming Passes web extension is simple.

You just need a page served over HTTPS at an arbitrary URI.
- Your page will be opened when a requesting app sends it a Pass Request.
- When your page loads, send a "connect" message to the requesting app in order to await the Pass Request.
- Once you receive the Pass Request, present it to the user for review.
- Finally, send the result back to the requesting app when the user approves or rejects the request.

Communication between the requesting app and your page will happen on the client side via `window.postMessage`.

```typescript
import { Messaging } from '@passes/reqs';

const passRequest = await Messaging.awaitRequest();
const { requestTopic, result } = await presentRequestToUserAndAwaitResult(passRequest); // < your custom presentation logic
await Messaging.sendResult(requestTopic, result);
```
