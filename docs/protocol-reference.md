# The Passes Protocol

:::info This is an early preview release of Passes.
We invite you to read the documentation and [source code](https://github.com/passes-org/passes), experiment by adding [Pass Requests](#what-is-a-pass-request) in your apps, and contribute to [discussions](https://github.com/passes-org/passes/discussions) to help shape the future of Passes.

These docs are under active development, and we'll be continuously publishing updates. We welcome your feedback – please [reach out](https://github.com/passes-org/passes/discussions).
:::

Passes is built upon the following layers:

## The Request ABI Protocol

```typescript
interface PassesABI {
    request: (raw: Uint8Array) => Promise<Uint8Array>;
}
```

PassesABI is the protocol used to send raw Pass Requests to the user. On the web (via the Polyfill) it's available at `document.passes`.

    
## Envelope V0 Transport Format
    
```typescript
// Request message structure
type RequestEnvelopeV0 = {
    version: 0; // Version is always 0 for this envelope version
    tag: string; // The request type's identifier. This field is run-length encoded and can be up to 256 bytes long
    body: Uint8Array; // The raw request body
}

// Result message structure
type ResultEnvelopeV0 =
    | { status: 'accepted'; body: Uint8Array } // The user accepted the request. Body contains the raw result body
    | { status: 'rejected' } // The user rejected the request (no additional information is available)
    | { status: 'unsupported' } // The Pass Provider doesn't support the requested tag
    | { status: 'exception'; message: string } // An exception occurred when presenting or accepting the request
```

This is the standard format for Pass Requests and their results. A "Tag" is a string that uniquely identifies a request type, conventionally using reverse-domain notation, or a URI to the request type's specification.
    
## Request Type Specs

For apps and Pass Providers to implement support for common Pass Request types, they need specifications to refer to.

Pass Request specifications will specify:
- Envelope Format (generally, v0 – [see above](#envelope-v0-request-format))
- Request Tag
- Request Body Codec
- Result Body Codec
- Request Interpretation and Presentation Details

## `@passes/reqs` `RequestTypes`

As [Request Type Specs](#request-type-specs) develop and get adoption, `@passes/reqs` and other community packages will implement `RequestTypes` to provide high-level APIs for use in apps.

## ABI Implementations

An implementation of the [request ABI](#the-request-abi-protocol) is needed to present Pass Requests to the user. The request ABI is responsible for routing pass requests to a Pass Provider for presentation to the user.

Some examples of how Pass Requests flow to Pass Providers given different ABI implementations include:

#### @passes/polyfill ABI Implementation
<img src="/diagram_02_light.gif" alt="Diagram of Polyfill support for Pass Requests" class="light-mode-only" />
<img src="/diagram_02_dark.gif" alt="Diagram of Polyfill support for Pass Requests" class="dark-mode-only" />

#### Web Extension ABI Implementation
<img src="/diagram_03_light.gif" alt="Diagram of web extension support for Pass Requests" class="light-mode-only" />
<img src="/diagram_03_dark.gif" alt="Diagram of web extension support for Pass Requests" class="dark-mode-only" />

#### Native Browser ABI Implementation
<img src="/diagram_04_light.gif" alt="Diagram of native browser support for Pass Requests" class="light-mode-only" />
<img src="/diagram_04_dark.gif" alt="Diagram of native browser support for Pass Requests" class="dark-mode-only" />

## Pass Providers

Pass Providers are responsible for presenting a rich interpretation of a Pass Request to the user so they can review and then approve or reject it.

A Pass Provider can be a web or native mobile app, or a Pass Provider could be built into a user's browser or even operating system.

### Web Pass Providers

To implement a Pass Provider on the web that works with the `@passes/polyfill` script and the upcoming Passes web extension, what you need is:

#### HTTPS Server
A HTTPS server at an arbitrary URI that accepts `POST` requests with `FormData` containing a `'request'` field which is a `Blob` of the Pass Request’s raw bytes.

#### Request Handling Page
The response to the `POST` request should be a page including a rich representation of the request, implemented according to its [Request Type Spec](#request-type-specs). When the user approves or rejects, the page should [`postMessage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) to `window.opener ?? window.parent` with the message type:

```typescript
export type RequestResult = {
	type: 'request-result';
	result: Uint8Array;
};
```

