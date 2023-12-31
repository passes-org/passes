Reqs (pronounced "rex" – /rɛks/) provides a high-level interface for using Pass Requests in your app. 

## Installation

```bash
npm add @passes/reqs    # or bun, yarn, pnpm
```

## Defining a Pass Request Topic

To create a Pass Request topic, you need 3 things:

1. **A Topic ID**. A string to identify your Request Topic. This is what Pass Providers will use to interpret a Pass Request of your topic, so it should _uniquely_ identify your Pass Request topic. This should use [reverse-dns notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation) and be namespaced to your organization – for example `org.passes.my-example-request-topic`.

2. **A Request Body Codec**. This translates the rich representation of the request body data your Pass Request topic uses to binary and back.

3. **A Result Body Codec**. This is just like the _request_ body codec, but for your Pass Request's result body data.


### Codecs

The `Codecs` module includes many common codecs for your convenience. It's available at `@passes/reqs/codecs`.

```typescript
import * as Codecs from '@passes/reqs/codecs';
```

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

### RequestTopic

Let's make a request topic that allows us to ask the user a yes-or-no question, and they can accept the request with a boolean representing their answer.

```typescript
import { RequestTopic } from '@passes/reqs';
import * as Codecs from '@passes/reqs/codecs';

const yesOrNoQuestion = new RequestTopic({
  id: 'org.passes.example.yes-or-no-question',
  requestBodyCodec: Codecs.String,
  resultBodyCodec: Codecs.Boolean,
});
```

Now, we can send our request like so:

```typescript
const userAnswer = await yesOrNoQuestion.sendRequest('Have you ever been to Olive Garden?');
//    ^ { status: 'accepted', body: true }
```

### SignedRequestTopic

It's generally recommended to use signed Pass Requests, since they use asymmetric key cryptography to assert and verify that Pass Request results have been approved by the user.

To make a `RequestTopic` signed, we simply create a `SignedRequestTopic` to wrap it, and provide a `signResult` or `verifyResult` implementation...

```typescript
import { RequestTopic, SignedRequestTopic, SignedBodyWrapper, SignedBodyWrapperHeader } from '@passes/reqs';
import * as Codecs from '@passes/reqs/codecs';

// For this demo implementation, we'll use the SubtleCrypto API
const keypair = await crypto.subtle.generateKey(keyParams, true, ['sign', 'verify']);

const yesOrNoQuestion = new SignedRequestTopic({
  // We're wrapping the same request topic we defined above
  requestTopic: new RequestTopic({
    id: 'org.passes.example.yes-or-no-question',
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

#### parseTopic

To get the topic of a Pass Request before you know its `RequestTopic`, you can use `parseTopic` on the raw request bytes.

```typescript
import { parseTopic } from '@passes/reqs';

const id = parseTopic(
  // Replace this with a raw request
  new Uint8Array([/* ... */]),
);
```

#### PassProviders.providePass

When your user signs up or re-authenticates with your Pass Provider, you can send a `providePass` Pass Request to ask them if they want to direct future Pass Requests to your Pass Provider.

```typescript
import * as PassProviders from '@passes/reqs/topics/pass-providers';

const { status } = await PassProviders.providePass('https://my-pass-provider.com', 'optional-user-id');

if (status === 'accepted') {
  // Future Pass Requests to this user will be sent to your Pass Provider for handling
}
```

#### Messaging.sendResult

Once your user has accepted or rejected a Pass Request, you can send the result back to the requesting app via `Messaging.sendResult`.

```typescript
import * as Messaging from '@passes/reqs/messaging';

// Note: `handleRequest` is a placeholder for your handling logic for the given request topic
const result = await handleRequest(request);

await Messaging.sendResult(requestTopic, result);
```

### Putting It All Together

Here's an example of how to use the above APIs together to implement support for a set of Pass Request topics in a basic Web Pass Provider.

```typescript
import * as Messaging from '@passes/reqs/messaging';
import * as PassProviders from '@passes/reqs/topics/pass-providers';
import * as SupportedRequestTopics from './supported-request-topics'; // A map of the request topics supported by your Pass Provider

// Called when your user signs in to set your app as their Pass Provider
async function onUserAuthn(userToken) {
  await PassProviders.providePass(
    // The URI of your pass provider
    'https://your-pass-provider.com',
    // A token you can use later to identify the user when presenting a Pass Request UI to them - for example, a JWT
    userToken,
  );
}

// Presents a UI for the user to review and handle the incoming Pass Request, and sends the result to the requesting app
async function handlePassRequest(request: Uint8Array) {
  const id = parseTopic(request);

  switch (id) {
    case SupportedRequestTopics.GetUserEmail.RequestTopic: {
      const requestTopic = SupportedRequestTopics.Example1.RequestTopic;
      try {
        const requestBody = await requestTopic.decodeRequest(request);
        const result = await presentRequestReviewUIAndGetResult(requestTopic, requestBody);
        await Messaging.sendResult(result);
      } catch (error) {
        await Messaging.sendResult({ status: 'exception', message: error.message });
      }
      break;
    }

    // ... (other supported request topics)

    default:
      // Communicate to your user that the incoming request topic is not supported by your Pass Provider
      await Messaging.sendResult({ status: 'unsupported' });
  }
}
```