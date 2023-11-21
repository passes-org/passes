# What is Passes?

**Passes** is a client-side API any app can request to recognize users or act on their behalf.

<script setup>import IndexExample from './IndexExample.vue';</script>
<IndexExample />

## Why should I use Passes?

Passes is founded on the belief that software should work together more seamlessly, and a web that recognizes you is better than one where you have different accounts for every app, as long as it respects and puts you in control of your privacy. 

The key design goals of Passes are:

### A privacy-preserving, portable client-side identity
Users allow apps to recognize them exactly how they prefer– by a public key, name, pseudonym, or not at all –depending on the app.


### Cross-app integration, mediated by the user
Apps make requests for one-off information, or to request permission to establish direct integration with another app, via the client.


### Interoperability
If two parties support the same pass request type, they're compatible. Since integration happens on the client, there's no need for canonical addresses or authorities.

::: warning Writing In Progress
The content below this message is incomplete or needs editing.
:::


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