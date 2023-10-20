# Passes

Open and portable identity and authentication for the web.

## Introduction

Passes is designed to invert the relationship between user identity and the services they use.

- Old: User is downstream of their identity, which is held by upstream servers
- New: Services are downstream of users and their identities

[Visit the documentation](https://docs.passes.dev) to learn more about building with passes.

## How it works

- The Passes protocol allows any web application to make identity and authn related requests directly to the user on the client
- Users create their passes on a web application called a "Pass Engine", which anyone can create. You can even self-host your own pass engine
- Web apps that make pass requests don't know which pass engine you use. To them, it makes no difference
- Pass requests can represent all kinds of things: signing into an app, granting access to information like your email, purchasing something, 
- Anyone can create their own type of pass requests. Pass request RFCs and standards are accessible at [TODO]

## Passes work in any web browser

Passes.dev publishes a web extension [TODO: Download link] that adds first-class support for passes to Chromium, Firefox, and Safari browsers.
There's also a JS polyfill [TODO: link to @passes/polyfill] web apps can use to ensure their pass requests work in any browser.

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
		/** document.passes will be defined if it's supported (i.e. if the extension is installed or passes.dev JS script has run) */
    passes?: PassesABI;
  }
}
```

---

## Contributing

Here's an overview of the structure of this repo:

- `docs/` – The site at [docs.passes.dev](https://docs.passes.dev)
- `extension/` – The Passes web extension
- `packages/` – Packages published by the `@passes` org on npm
  - `polyfill/` – A polyfill that provides the `document.passes` ABI
  - `reqs/` – A friendly and typesafe API for making common pass requests, and creating your own request types
  - `types/` – Type declarations related to the Passes Protocol APIs
- `passes.dev/` – The web application at [passes.dev](https://passes.dev), which consists of a splash screen, and routes used by the `@passes/polyfill` package

