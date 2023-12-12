# What Is Passes?

**Passes** is a client-side API for making requests directly to users.

<img src="/diagram_01_light.gif" alt="Diagram of a Pass Request" class="light-mode-only" />
<img src="/diagram_01_dark.gif" alt="Diagram of a Pass Request" class="dark-mode-only" />

Passes enables apps to send **Pass Requests**, which are presented to the user for review and handling via their **Pass Provider**.

:::info This is an early release of Passes.
We invite you to read the documentation and [source code](https://github.com/passes-org/passes), experiment by adding [Pass Requests](#what-is-a-pass-request) in your apps, and contribute to [discussions](https://github.com/passes-org/passes/discussions) to help shape the future of Passes.

These docs are under active development, and we'll be continuously publishing updates. We welcome your feedback – please [reach out](https://github.com/passes-org/passes/discussions).
:::

## What Is a Pass Request?

A Pass Request can represent anything, and can be defined by anyone. They are identified by a unique topic, for example `org.passes.get-user-email`, and have specific request and result body [Codecs](/packages/reqs/api/modules/Codecs).

```typescript
import { RequestTopic } from '@passes/reqs';

const getEmail = new RequestTopic({
  id: 'com.example.get-email', // This is a get-email request
  requestBodyCodec: Codecs.Void, // The request body type is empty
  resultBodyCodec: Codecs.String // The result body type is a string of the user's email
});
```

To send a Pass Request, apps will use the high-level API of the [`RequestTopic`](/packages/reqs/api/classes/RequestTopic).

```typescript
import { RequestTopic } from '@passes/reqs';

const getEmail = new RequestTopic({
  id: 'com.example.get-email', // This is a get-email request
  requestBodyCodec: Codecs.Void, // The request body type is empty
  resultBodyCodec: Codecs.String // The result body type is a string of the user's email
});

const getEmailResult = await getEmail.sendRequest();// [!code focus]
                                                    // [!code focus]
if (getEmailResult.status === 'accepted') {         // [!code focus]
  const userEmail = result.body;                    // [!code focus]
}                                                   // [!code focus]
```

<script setup>import IndexExample from './IndexExample.vue';</script>
<IndexExample />

Some ideas to build with Pass Requests:
- Sign in with the same account everywhere
- Fast checkout and payments
- Data and permissions requests between arbitrary apps
- Features requiring client-side signatures, like blockchain transactions

:::info Experiment With Pass Requests
To get started implementing support for Pass Requests in your app today, check out the docs for the Reqs package.

[**View Reqs Docs**](/packages/reqs/quickstart.md)
:::

## What Is a Pass Provider?

A Pass Provider is an app chosen by the user to handle their Pass Requests. Anyone can make a Pass Provider, and sites that make requests work regardless of the user's chosen Pass Provider.


## Design Goals

We believe that the web should recognize you, on your terms, without compromising on privacy, security, or simplicity.

- **Privacy-Preserving, Portable Identity**. Users decide what identity data to share with apps. For example, they can allow each app to recognize them exactly how they prefer – by name, pseudonym, public key, or not at all.

- **Explicit User Control**. Pass requests are reviewed, and approved or rejected by the user via their device.

- **Interoperability**. Data requests and other integrations between apps is simplified. Rather than each app having its own bespoke API others have to integrate, with Passes apps that support common request topics can automatically interact.

- **ABI Stability**. The core ABI for making Pass Requests is designed in order to remain stable as usage of Pass Requests evolves during adoption.

:::info How We Achieve ABI Stability
The protocol specifies a client-side interface for sending request bytes and returning result bytes.

Minimal assumptions regarding request and result structure are made at the protocol level. This way, if usage of Pass Requests matures to put pressure on the transport encoding, the protocol won't need to be versioned – only those Pass Requests whose needs are unmet by the old transport encoding.
:::


## Who Is This For?
Any developer interested in improving the state of authentication, identity, and cross-app interoperability.

The modern web is effectively organized around the HTTP APIs of a few massive hubs that have harmed its composable, fractal nature. If this has stifled the kind of apps you wish to build, Passes is for you.

We are publishing this early release of the documentation to involve you and get your [feedback](https://github.com/passes-org/passes/discussions) early to shape the future of Passes.

**Let's free the web.**


## What Can I Do With Passes Today?
- Read the documentation and [source code](https://github.com/passes-org/passes)
- Download and use the [`reqs`](/packages/reqs/quickstart) and [`polyfill`](/packages/polyfill/quickstart) packages to make Pass Requests
- Build a Pass Provider
- Engage in [discussions](https://github.com/passes-org/passes/discussions) on our repo


## Compared To Other Technologies

Passes is fundamentially different from technologies like [OAuth](https://oauth.net/2/), [Federated Credential Management](https://developer.mozilla.org/en-US/docs/Web/API/FedCM_API), and [WebAuthn/Passkeys](https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API) because it enables apps to make requests directly to users. No other web API enables this.

Contrasted to other technologies:
- **WebAuthn:** Whereas WebAuthn credentials such as Passkeys are linked to a specific domain name, Passes enables users to share a common identity across many apps.
- **OAuth:** Each OAuth integration is specific to a single identity provider, and when acting on users' behalf, each identity provider's API is bespoke. Apps integrate Passes directly on the client, so any Pass Provider is supported by any app. 
