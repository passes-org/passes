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
    // The Pass Provider doesn't support the requested tag
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
- Request Tag
- Request Body Codec
- Result Body Codec
- Request Interpretation and Presentation Details

:::info Discussing RFCs
To propose and participate in discussions around Pass Request Type RFCs, please go to [Passes Discussions](https://github.com/passes-org/passes/discussions/categories/pass-request-types). 
:::

## `@passes/reqs` `RequestTopic`

As [Request Type Specs](#request-topic-specs) become standard, `@passes/reqs` and other community packages will implement `RequestTopic` to provide high-level APIs for use in apps.

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

<!-- FIXME: Update Pass Provider, Topic Provider, and Polyfill details

## Pass Providers

Pass Providers are responsible for presenting a rich interpretation of a Pass Request to the user so they can review and then approve or reject it.

A Pass Provider can be a web or native mobile app. It could even be built into a user's browser or operating system.

### Web Pass Providers

To implement a Pass Provider on the web that works with the `@passes/polyfill` script and the upcoming Passes web extension, you need two things:

1. **HTTPS Server**. An HTTPS server at an arbitrary URI that accepts `POST` requests with [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) containing a `'request'` field which is a [`Blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob) of the Pass Request’s raw bytes.
2. **Request Handling Page**. The response to the `POST` request should be a page including a rich representation of the request, implemented according to its [Request Topic Spec](#request-topic-specs).

    When the user approves or rejects, the page should [`postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to `window.opener ?? window.parent` with the message type:

    ```typescript
    type RequestResult = {
        type: 'org.passes.messaging.result';
        result: Uint8Array;
    };
    ```
 -->
