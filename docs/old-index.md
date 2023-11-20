# What is Passes?

**Passes** is a client-side web API that enables apps to make arbitrary requests directly to the user, enabling the user to use a common identity across the various apps they visit.

At the core of Passes are **Pass Requests**. Apps use pass requests to access representations of the user, such as identity-related information or intents to perform some action like making a purchase or creating a file.

When an app sends the user a Pass Request, the user's **Pass Provider** presents a UI with a friendly interpretation of the reqest, allowing the user to review and approve or reject it.

:::info Overcomplicated
"**Representations of the user**" is a kinda intellectual way of drawing a box that includes both attributes of user identity (like profile info) and user intent (the user represents that they want to do X).

Is this too much?
:::

Generally, the user chooses which Pass Provider they use. It could be a web app, native app, hardware device, or built into the browser or operating system they use.

::: warning Need a section on Pass Providers
TODO: Put a link here for "More on Pass Providers" and have it link to a more in-depth discussion about them, protocols for web Pass Providers, and how anyone can create a Pass Provider / how any Pass Provider works with any site (provided it implements the Request Types made by the site).
:::

## Why? The web is missing an identity layer.

::: warning Missing Diagram
We should add a diagram illustrating identity on the web today, where end users are downstream of their own identities, to identity on the web with passes, where end users bring their same identity to the various apps they visit.
:::

### User identity is not portable

You need a separate account for every app you use.

The closest modern solution to this is OAuth, which lets you "Sign in with" an existing account you have elsewhere. However in practice as a user, only household names are commonly supported across as identity providers across the various apps you use.

On the bright side, this lack of portable identity slightly complicates things for anyone who may try to spy on you, but not quite effectively (todo: link to resource about third-party cookies?).

### API soup constrains apps and users

In most modern software. your interactions will cause requests to the app's API, or the APIs of other apps it integrates with. If you chose to "Sign in with" an existing account from another app, some API requests will be made on your behalf to that app's API.

API requests are generally considered authentic on the basis of trust. When my user signs in with Booble, I get a secret token I can use to request more of their information. My app can request their name and email, and Booble's API will give me a result because I have the secret token they entrusted to me. My app will consider the result the be correct because it's from Booble (of course!)

If my app wants to do create a Slaylist on behalf of the user via a third party called _Bopify_'s API, and they integrate with Booble, I can make a request to Booble's API with the user's secret token, and Booble will give me another secret token that I can send to Bopify with the Create Slaylist request, and Bopify can independtly verify it with Booble to make sure it's legit.

For Booble this is great, because– as a household name –most apps support signing in with Booble, and most users have a Booble account. Effectively, a good portion of apps and their users are downstream of Booble. 

On the web today, users exist downstream of their own identities.

The effects of this model are:
- Each OAuth identity provider an app supports has a separate, explicit implementation, often accompanied by more bespoke API integrations
- Household names are the only viable OAuth identity providers worth implementing support for in apps
- Users and the apps they use exist downstream of the ability to access identity information and authenticate actions on behalf of users. They must either accept upstream constraints, or implement their own bespoke user identity system
- The kinds of things users can do on behalf of their identities across the entire web are constrained by a small set of household names

It's plausible that entire categories of valuable apps are blocked by the web's lack of portable user identity.

### Passwords and their accopanying issues are ubiquitous

Phishing, Phorgetting, Password Managers...

Virtually every end-user experience is affected by this, it greatly contributes the massive-hubs/tiny-spokes form the web of today has matured into, and it constrains the kinds of apps that can be built.

<!-- ### Apps aren't interoperable -->

* * *


## Pass requests are flexible
Pass requests are represented using an opaque binary format. At the time of this writing, there is one simple standard for pass request and result serialization – envelope version zero. This format prefixes the request body with a <=256 byte identifier, conventionally the URI of the request type specification, which documents how to interpret the request body.

Pass requests can be used to build a wide variety of features including sign-in, permissions, payments, client-side delegation, and much more.

[Check out some interactive examples.](./examples/signing-in.md)

::: warning Incomplete Section
This needs to specify where developers can create RFCs.
:::

Developers can also create their own types of pass requests – you just need specification that apps can use to format the request, and that pass providers can use to interpret them. The best way to do this is create an RFC.

## Pass requests are easy to support
Passes.org publishes a TypeScript package [`@passes/reqs`](https://npmjs.com/package/@passes/reqs) which provides friendly and type-safe APIs for creating common types of pass requests, as well create defining your own pass request types.

Learn more about `@passes/reqs`: [Reqs Docs](./packages/reqs/quickstart.md)

## Pass requests work today
Passes.org hosts a polyfill script that implements the `document.passes.request` ABI. Using the polyfill script, your app can make pass requests regardless of whether the user has a browser or extension that implements the pass request ABI.

Learn more and try the polyfill: [Polyfill Docs](./packages/polyfill/quickstart.md)
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
