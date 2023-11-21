# What is Passes?

**Passes** is a client-side API any app can request to recognize users or act on their behalf.

<script setup>import IndexExample from './IndexExample.vue';</script>
<IndexExample />


## Why Passes?

Passes is founded on the belief that software should work together seamlessly, and a web that recognizes you is better than one where you have different accounts for every app, as long as it respects and puts you in control of your privacy. 

The key design goals of Passes are:

### A privacy-preserving, portable client-side identity
Users allow apps to recognize them exactly how they prefer– by a public key, name, pseudonym, or not at all –depending on the app.


### Cross-app integration, mediated by the user
Apps make requests for one-off information, or to request permission to establish direct integration with another app, via the client.


### Interoperability
If two parties support the same pass request type, they're compatible. Since integration happens on the client, there's no need for canonical addresses or authorities.

### ABI stability
The core ABI for making pass requests is designed in order to remain stable as use cases for pass requests change and adoption progresses.

At its core, the protocol merely assumes a client-side interface for sending request bytes and asynchronously returning result bytes. This way, versioning can happen on a per-request-type basis.

::: warning Writing In Progress
The content below this message is incomplete or needs editing.
:::


## Use Cases

Passes allows apps to make "pass requests" directly to users on the client, which get presented out-of-band by their browser for them to review, and if they accept, a result is sent back to the requesting app.

Use cases for pass requests include:
- Sign in, account creation, accountless user recognition
- Permissions and data requests
- Cryptographic attestations
- Features backed by blockchains and other systems requiring client-side signatures


## How are pass requests presented and handled? 

Passes is designed to work across platforms. To use pass requests on the web today, developers can use the `@passes/polyfill` package. The polyfill implements client-side support for pass requests by making a top-level HTTP POST request to `passes.org/request` containing the request body. `passes.org/request` then redirects the user to their "Pass Provider".

A Pass Provider is a web application the user chooses to use to handle pass requests. Anyone can create a Pass Provider, and sites that make pass requests are agnostic to which one a user uses.

Passes specifies a client-side interface for making a request and asynchronously returning a result. _What_ actually receives, presents and handles a request and _how_ a result is returned is up to the implementation of the client.




## Related Technologies

| Technology               | Portable Identity | Interoperable | Versatile Requests |
|--------------------------|:-----------------:|:-------------:|:------------------:|
| **Passes**               | ✅                | ✅            | ✅                 |
| WebAuthn, Passkeys       | ❌                | ✅            | ❌                 |
| OAuth, FedCM             | ✅                | ❌            | ❌                 |

Contrasted to related technologies:
- **WebAuthn, Passkeys:** Passes enable users to have a common identity across many apps. WebAuthn credentials are domain-specific.
- **OAuth, FedCM:** Apps integrate passes directly on the client, so any pass provider is supported by any app. Each OAuth integration is and specific to a single identity provider, and when it comes to acting on users' behalf, each identity provider's API is bespoke.


## The Passes Protocol

Passes is built upon the following layers:

1. The Request ABI protocol
    
    ```tsx
    interface PassesABI {
    	request: (raw: Bytes) => Promise<Bytes>;
    }
    ```

    PassesABI is the protocol used to send raw pass requests to the user. On the web (via the Polyfill) it's available at `document.passes`.
    
2. Envelope V0 request format
    
    ```tsx
    type RequestEnvelopeV0 = {
    	version: 0; // Version is always 0 for this envelope version
    	tag: string; // The request type's identifier
    	body: Bytes; // The raw request body
    }
    
    type ResultEnvelopeV0 =
    	| { status: 'accepted'; body: Bytes } // The user accepted the request. Body contains the raw result body
    	| { status: 'rejected' } // The user rejected the request (no additional information is available)
    	| { status: 'unsupported' } // The pass provider doesn't support the requested tag
    	| { status: 'exception'; message: string } // An exception occurred when presenting or accepting the request
    ```

    This is the standard format for pass requests and their results. A "Tag" is a string that uniquely identifies a request type, conventionally using reverse-domain notation, or a URI to the request type's specification.
    
3. Request Type Specs
    - RFCs, Drafts, or in-development specifications of request types, including:
        - Envelope Format (assuming v0)
        - Request Tag
        - Request Body Codec
        - Result Body Codec
        - Request Interpretation and Presentation Details

4. `@passes/reqs` `RequestTypes`

5. Pass Providers
    - Implements `PassesABI['request']`
    - Responsible for presenting approval ABI and sending results back to requesting party
    - Web Pass Providers must:
        - Be an HTTPS server that accepts `POST` requests with `FormData` containing a `'request'` field which is a `Blob` of the pass request’s raw bytes.
        - `window.postMessage` a `@passes/types.Result`