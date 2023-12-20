[@passes/reqs](../README.md) / [Modules](../modules.md) / topics/pass-providers

# Module: topics/pass-providers

## Table of contents

### Variables

- [providePass](topics_pass_providers.md#providepass)

## Variables

### providePass

• `Const` **providePass**: [`RequestTopic`](../classes/main.RequestTopic.md)\<`ProvidePassRequestBody`, `void`\>

Pass Providers should call `providePass.sendRequest` to request to become the user's Pass Provider.
Best practice is to send this request when the user signs into the Pass Provider's website.

**`Memberof`**

PassProviders

#### Defined in

[topics/pass-providers/provide-pass.js:17](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/topics/pass-providers/provide-pass.js#L17)
