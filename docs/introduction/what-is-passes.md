# What is Passes?

**Passes** is a free, open-source web API that enables apps to make arbitrary (but generally identity and authentication-related) requests directly to the user on the client side, enabling the user to be represented by a common portable identity across the various apps they visit.

**Pass Requests** are sent from an app via a client-side API, which presents a UI with a rich interpretation of the request, allowing the user to review and approve or reject the request.

::: warning Missing Diagram
We should add a diagram illustrating how a pass request works.
:::

## Why?

::: warning Missing Diagram
We should add a diagram illustrating identity on the web today, where end users are downstream of their own identities, to identity on the web with passes, where end users bring their same identity to the various apps they visit.
:::

**The web platform lacks a notion of a portable user identity.**

Historically, user identity has been a separate bespoke implementation for *every app you use*. 

Newer web APIs like WebAuthn (including Passkeys) create user identifiers that are specific to the domain they were created on.

Virtually every end-user experience is affected by this, it greatly contributes the massive-hubs/tiny-spokes form the web of today has matured into, and it constrains the kinds of apps that can be built.

It's plausible that entire categories of valuable apps are blocked by the web's lack of portable user identity.

::: details More on the impact of bespoke identity on the web
  **This needs editing. It's just a first-pass.**
- End users have different accounts for every app they use
- Passwords beget security breaches and lost access, call for password managers
- The inconvenience of having yet another account incentivizes users to sign in via OAuth using one of their massive hubs as their identity provider -> end users and the apps they use are downstream of the user's identity provider, and to to request additional information associated with the user's identity on their identity provider or authenticate via their identity provider, apps need to make API requests to the identity provider
- Massive-hub identity providers attract a bombardment of threats like data breaches/exfiltration and are incentivized to defend data they possess from being used to train ML models. As a result, they tend change their API terms, and can at any time render infeasible categories of downstream applications they once enabled.
- APIs need to be designed defensively, for example with rate limiting and usage-based pricing. This constrains new types of applications like AI agents.
- The kinds of things you can do on behalf of a user's identity using an upstream API are constrained by the API. If you're a tiny spoke, and the upstream API is a massive hub, you may not be able to do anything about it.
- Adding each new "Sign in with ..." identity provider means doing and maintaining a separate bespoke implementation each time. To a downstream app, the cost compounds with each additional provider.
- End users can use different "Sign in with ..." identity providers in the various apps they visit. In turn, apps are designed generally not to expect or use valuable properties of portable identity.
:::

## Pass requests are flexible
Pass requests are represented using an opaque binary format. At the time of this writing, there is one simple standard for pass request and result serialization – envelope version zero. This format prefixes the request body with a <=256 byte identifier, conventionally the URI of the request type specification, which documents how to interpret the request body.

Pass requests can be used to build a wide variety of features including sign-in, permissions, payments, client-side delegation, and much more.

[Check out some interactive examples.](../examples/identity.md)

::: warning Incomplete Section
This needs to specify where developers can create RFCs.
:::

Developers can also create their own types of pass requests – you just need specification that apps can use to format the request, and that pass providers can use to interpret them. The best way to do this is create an RFC.

## Pass requests are easy to support
Passes.org publishes a TypeScript package `@passes/reqs` which provides friendly and type-safe APIs for creating common types of pass requests, as well create defining your own pass request types.

Learn more about `@passes/reqs`: [Reqs Docs](../packages/reqs/quickstart.md)

## Pass requests work today
Passes.org hosts a polyfill script that implements the `document.passes.request` ABI. Using the polyfill script, your app can make pass requests regardless of whether the user has a browser or extension that implements the pass request ABI.

Learn more and try the polyfill: [Polyfill Docs](../packages/polyfill/quickstart.md)
## Pass requests work on the web
On the web, the pass request ABI is available at `document.passes.request`. The ABI is really simple, and designed for backwards and forwards compatibility as the adoption and usage of pass requests matures. The ABI is:

```typescript
interface PassesABI {
  /** Request the user to complete a pass request */
  request(
    raw: Uint8Array // raw request bytes
  ): Promise<Uint8Array>; // raw result bytes
}
```

## Pass requests work "on native"
Part of the vision of Passes is the view that "the web" is inclusive of apps that are powered by web technologies (like HTTP), so that means native mobile and desktop apps too.

The binary format of pass requests makes them incredibly flexible and simplifies their support across various platforms. For native apps, all that changes is the pass request ABI called `document.passes.request` on the web is called something else.

::: warning Missing Link/Video
Once we have a demo video, add it below.
:::

See a demo: [ [Native Pass Request Demo] ]