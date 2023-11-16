# `@passes/reqs` Quickstart

`@passes/reqs` provides a high-level interface for using Pass Requests in your app. 

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

1. A "request tag" string to identify your pass request. This is what Pass Providers will use to interpret your pass request, so it should _uniquely_ identify your pass request type. A good way to make your request tag unique is to make it the URI of the pass request type's specification on your website. Another good option is a Passes Protocol RFC number (when we launch the RFCs tracker).

2. A request body codec. This translates the rich representation of the request body data your pass request type uses to binary and back.

3. A result body codec. This is just like the _request_ body codec, but for your pass request's result body data.


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

const yesOrNoQuestion = new RequestType(
  'org.passes.example.yes-or-no-question',
  Codecs.String,
  Codecs.Boolean,
);
```

Now, we can send our request like so:

```typescript
const userAnswer = await yesOrNoQuestion.sendRequest('Have you ever been to Olive Garden?');
//    ^ { status: 'accepted', body: true }
```

### SignedRequestType

It's generally recommended to use signed pass requests, since they use asymmetric key cryptography to assert and verify that pass request results have been approved by the user.

To make a `RequestType` signed, we simply create a `SignedRequestType` to wrap it, and provide a `signResult` or `verifyResult` implementation...

:::warning Incomplete Section
This section is in progress.
:::