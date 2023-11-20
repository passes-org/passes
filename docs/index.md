# What is Passes?

**Passes** is a web API that gives users a common client-side identity that any app can request to recognize them or act on their behalf.

Key design goals are:

- **A privacy-preserving, common client-side identity.** Users allow apps to recognize them exactly how they prefer– by a public key, name, pseudonym, or not at all –depending on the app.
- **Cross-app integration, mediated by the user.** Apps make requests for one-off information, or to request permission to establish direct integration with another app, via the client.
- **Interoperability.** If two parties support the same pass request type, they're compatible. Since integration happens on the client, there's no need for canonical addresses or authorities.

Contrasted to related technologies:
- **WebAuthn, Passkeys:** Passes enable users to have a common identity across many apps. WebAuthn credentials are domain-specific.
- **OAuth, FedCM:** Apps integrate passes directly on the client, so any pass provider is supported by any app. Each OAuth integration is and specific to a single identity provider, and when it comes to acting on users' behalf, each identity provider's API is bespoke.
