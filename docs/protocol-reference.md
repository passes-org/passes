# The Passes Protocol

Passes is built upon the following layers:

1. The Request ABI protocol
    
    ```tsx
    interface PassesABI {
    	request: (raw: Uint8Array) => Promise<Uint8Array>;
    }
    ```

    PassesABI is the protocol used to send raw Pass Requests to the user. On the web (via the Polyfill) it's available at `document.passes`.
    
2. Envelope V0 request format
    
    ```tsx
    type RequestEnvelopeV0 = {
    	version: 0; // Version is always 0 for this envelope version
    	tag: string; // The request type's identifier
    	body: Uint8Array; // The raw request body
    }
    
    type ResultEnvelopeV0 =
    	| { status: 'accepted'; body: Uint8Array } // The user accepted the request. Body contains the raw result body
    	| { status: 'rejected' } // The user rejected the request (no additional information is available)
    	| { status: 'unsupported' } // The Pass Provider doesn't support the requested tag
    	| { status: 'exception'; message: string } // An exception occurred when presenting or accepting the request
    ```

    This is the standard format for Pass Requests and their results. A "Tag" is a string that uniquely identifies a request type, conventionally using reverse-domain notation, or a URI to the request type's specification.
    
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
        - Be an HTTPS server that accepts `POST` requests with `FormData` containing a `'request'` field which is a `Blob` of the Pass Request’s raw bytes.
        - `window.postMessage` a `@passes/types.Result`