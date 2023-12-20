[@passes/reqs](../README.md) / [Exports](../modules.md) / PassProviders

# Namespace: PassProviders

## Table of contents

### Variables

- [providePass](PassProviders.md#providepass)

## Variables

### providePass

• `Const` **providePass**: [`RequestTopic`](../classes/RequestTopic.md)\<`ProvidePassRequestBody`, `void`\>

Pass Providers should call `providePass.sendRequest` to request to become the user's Pass Provider.
Best practice is to send this request when the user signs into the Pass Provider's website.

**`Memberof`**

PassProviders

#### Defined in

[topics/pass-providers/provide-pass.js:17](https://github.com/passes-org/passes/blob/1847fbe/packages/reqs/topics/pass-providers/provide-pass.js#L17)
