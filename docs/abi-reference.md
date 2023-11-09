# Low-Level ABI

::: warning Writing In Progress
This content is just a sketch and needs to be rewritten and edited.
:::

Reference for the low-level ABI for making pass requests.

```typescript
export interface PassesABI {
	/** Request the user to complete a pass request */
	request(
		/** The raw pass request bytes */
		raw: Uint8Array
	): Promise<Uint8Array>;
}

declare global {
  interface Document {
		/** document.passes will be defined if it's supported (i.e. if the extension is installed or passes.org JS script has run) */
    passes?: PassesABI;
  }
}
```

## Envelope v0 Format

- Request Binary Format:
    - Byte 0: envelope version = 0x00
    - Byte 1: N = request tag length - 1
    - Bytes 2→N+1: request tag (up to 256 bytes long)
    - Bytes N+3→Ω: request body
    
    ```
    // rich
    00 65 ipfs://bafybeieb6tlou7uqe2rtivu2onbrlw63aghbqc5kexf3en7h2cxmrhqxba {"challenge":"bet you can't sign this!"} 
          ^ (this tag is a URI to an immutable document describing its interface)
    
    // raw hex
    00 41 69706673(...)71786261 A1696368(...)68697321
    ^  ^  ^                     ^
    |  |  |                     request body raw bytes (CBOR encoded for this example)
    |  |  request tag raw bytes (utf8-encoded by convention)
    |  request tag length (i=65 (66) bytes)
    envelope version
    ```
    
- Result Binary Format
    - Byte 0: status
        - 0x00 = accepted
            - Bytes 1→Ω: Result Body
        - 0x01 = rejected
            - Bytes 1→Ω: Rejection Reason (empty and ignored by convention)
        - 0x02 = unsupported (unhandled by pass engine)
            - Bytes 1→Ω: Undefined
        - 0x03 = exception (failed to accept or present)
            - Bytes 1→Ω: Exception Details