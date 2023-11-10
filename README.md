**Passes** is a free, open-source web API that enables apps to make arbitrary requests directly to the user on the client side, enabling the user to use a common identity across the various apps they visit.

**Pass Requests** are sent from an app via a client-side API, which presents a UI with a rich interpretation of the request, allowing the user to review and approve or reject the request.

[Visit the documentation](https://docs.passes.org) to learn more.

## Why?

**The web platform lacks a notion of a portable user identity.**

Historically, user identity has been a separate bespoke implementation for *every app you use*. 

Newer web APIs like WebAuthn (including Passkeys) create user identifiers that are specific to the domain they were created on.

Virtually every end-user experience is affected by this, it greatly contributes the massive-hubs/tiny-spokes form the web of today has matured into, and it constrains the kinds of apps that can be built.

It's plausible that entire categories of valuable apps are blocked by the web's lack of portable user identity.

## Usage

Most developers will interface with Passes using the `@passes/reqs` package, which provides friendly and typesafe APIs for making pass requests,
building a pass engine, or creating your own types of pass requests.

It's also possible to use the lower-level interface provided by the Passes protocol, the `document.passes.request` ABI.
This is what `@passes/reqs` uses under the hood.

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

---

## Contributing

Here's an overview of the structure of this repo:

- `docs/` – The site at [docs.passes.org](https://docs.passes.org)
- `extension/` – The Passes web extension
- `packages/` – Packages published by the `@passes` org on npm
  - `polyfill/` – A polyfill that provides the `document.passes` ABI
  - `reqs/` – A friendly and typesafe API for making common pass requests, and creating your own request types
  - `types/` – Type declarations related to the Passes Protocol APIs
- `passes.org/` – The web application at [passes.org](https://passes.org), which consists of a splash screen, and routes used by the `@passes/polyfill` package

