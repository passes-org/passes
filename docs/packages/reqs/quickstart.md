# Reqs Quickstart

Reqs (pronounced "rex" – /rɛks/) provides a high-level interface for using Pass Requests in your app. 

:::info Reqs is under active development.
The current release is an alpha, and breaking changes should be expected. Now is a great time to use it to experiment by adding Pass Requests to your app or building a Pass Provider.

We will be reading your feedback and continuously shipping improvements, so please [share your feedback](https://github.com/passes-org/passes/discussions). 
:::

## Installation

::: code-group

```[npm]
npm add @passes/reqs
```

```[yarn]
yarn add @passes/reqs
```

```[bun]
bun add @passes/reqs
```

:::

## Defining a Pass Request Type

To create a pass request type, you need 3 things:

1. **A Request Tag**. A string to identify your pass request. This is what Pass Providers will use to interpret your pass request, so it should _uniquely_ identify your pass request type. A good way to make your request tag unique is to make it the URI of the pass request type's specification on your website. Another good option is a Passes Protocol RFC number (when we launch the RFCs tracker).

2. **A Request Body Codec**. This translates the rich representation of the request body data your pass request type uses to binary and back.

3. **A Result Body Codec**. This is just like the _request_ body codec, but for your pass request's result body data.


### Codecs

The `Codecs` namespace includes many common codecs for your convenience. It's available as a named export of `@passes/reqs`.

| Name                  | Rich Type          |
| --------------------- | ------------------ |
| `Codecs.BigInt`       | `bigint`           |
| `Codecs.Boolean`      | `boolean`          |
| `Codecs.Bytes`        | `Uint8Array`       |
| `Codecs.Json`         | `TJson` (generic)  |
| `Codecs.Number`       | `number`           |
| `Codecs.String`       | `string`           |
| `Codecs.Void`         | `undefined`        |

You can also write your own codec to support any data type you'd like! The interface for a codec is:

```typescript
type Codec<T> = {
  encode(value: T) => Uint8Array;
  decode(raw: Uint8Array) => T;
}
```

### RequestType

Let's make a request type that allows us to ask the user a yes-or-no question, and they can accept the request with a boolean representing their answer.

```typescript
import { Codecs, RequestType } from '@passes/reqs';

const yesOrNoQuestion = new RequestType({
  requestTag: 'org.passes.example.yes-or-no-question',
  requestBodyCodec: Codecs.String,
  resultBodyCodec: Codecs.Boolean,
});
```

Now, we can send our request like so:

```typescript
const userAnswer = await yesOrNoQuestion.sendRequest('Have you ever been to Olive Garden?');
//    ^ { status: 'accepted', body: true }
```

### SignedRequestType

It's generally recommended to use signed pass requests, since they use asymmetric key cryptography to assert and verify that pass request results have been approved by the user.

To make a `RequestType` signed, we simply create a `SignedRequestType` to wrap it, and provide a `signResult` or `verifyResult` implementation...

```typescript
import { Codecs, RequestType, SignedRequestType, SignedBodyWrapper, SignedBodyWrapperHeader } from '@passes/reqs';

// For this demo implementation, we'll use the SubtleCrypto API
const keypair = await crypto.subtle.generateKey(keyParams, true, ['sign', 'verify']);

const yesOrNoQuestion = new SignedRequestType({
  // We're wrapping the same request type we defined above
  requestType: new RequestType({
    requestTag: 'org.passes.example.yes-or-no-question',
    requestBodyCodec: Codecs.String,
    resultBodyCodec: Codecs.Boolean,
  }),
  signResult: async (body: boolean): Promise<SignedBodyWrapperHeader> => ({
    publicKey: await crypto.subtle.exportKey(
      keyFormat,
      keyPair.value.publicKey
    ),
    signature: new Uint8Array(await crypto.subtle.sign(
      keyParams,
      keyPair.value.privateKey,
      Codecs.Boolean.encode(body)
    )),
  }),
  verifyResult: async (signed: SignedBodyWrapper<Boolean>): Promise<boolean> =>
    crypto.subtle.verify(
      keyParams,
      publicKey: await crypto.subtle.importKey(keyFormat, signed.header.publicKey, keyParams, true, ['verify']),
      signed.header.signature,
      Codecs.Boolean.encode(signed.body)
    ),
});
```

## Building a Pass Provider

For building a [Pass Provider](/#what-is-a-pass-provider), `reqs` exports a `PassProviders` namespace with relevent APIs, and some of the common APIs will be useful as well.

#### PassProviders.setPassProvider

When your user signs up or re-authenticates with your Pass Provider, you can send a `setPassProvider` Pass Request to ask them if they want to direct future Pass Requests to your Pass Provider.

```typescript
import { PassProviders } from '@passes/reqs';

const { status } = await PassProviders.setPassProvider('https://my-pass-provider.com', 'optional-user-id');

if (status === 'accepted') {
  // Future Pass Requests to this user will be sent to your Pass Provider for handling
}
```

#### parseRequestTag

To get the tag of a Pass Request before you know its `RequestType`, you can use `parseRequestTag` on the raw request bytes.

```typescript
import { parseRequestTag } from '@passes/reqs';

const requestTag = parseRequestTag(
  // Replace this with a raw request
  new Uint8Array([/* ... */]),
);
```