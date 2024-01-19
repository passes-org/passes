[@passes/reqs](README.md) / Exports

# @passes/reqs

## Table of contents

### Namespaces

- [Codecs](modules/Codecs.md)
- [Messaging](modules/Messaging.md)
- [PassProviders](modules/PassProviders.md)
- [TopicProviders](modules/TopicProviders.md)

### Classes

- [RequestTopic](classes/RequestTopic.md)
- [SignedRequestTopic](classes/SignedRequestTopic.md)

### Interfaces

- [AcceptedResult](interfaces/AcceptedResult.md)
- [Codec](interfaces/Codec.md)
- [ConnectMessage](interfaces/ConnectMessage.md)
- [ExceptionResult](interfaces/ExceptionResult.md)
- [IRequestTopic](interfaces/IRequestTopic.md)
- [PassesABI](interfaces/PassesABI.md)
- [RejectedResult](interfaces/RejectedResult.md)
- [RequestMessage](interfaces/RequestMessage.md)
- [ResultMessage](interfaces/ResultMessage.md)
- [SignedAcceptedResult](interfaces/SignedAcceptedResult.md)
- [SignedBodyWrapper](interfaces/SignedBodyWrapper.md)
- [SignedBodyWrapperHeader](interfaces/SignedBodyWrapperHeader.md)
- [UnsupportedResult](interfaces/UnsupportedResult.md)

### Type Aliases

- [DocumentWithPasses](modules.md#documentwithpasses)
- [GlobalDocument](modules.md#globaldocument)
- [RequestResult](modules.md#requestresult)
- [ResultStatus](modules.md#resultstatus)
- [SignedRequestResult](modules.md#signedrequestresult)

### Functions

- [parseTopic](modules.md#parsetopic)

## Type Aliases

### DocumentWithPasses

Ƭ **DocumentWithPasses**\<\>: `Document` & \{ `passes?`: [`PassesABI`](interfaces/PassesABI.md)  }

#### Defined in

[browser-types.jsdoc.mjs:3](https://github.com/passes-org/passes/blob/d32fb4d/packages/reqs/src/browser-types.jsdoc.mjs#L3)

___

### GlobalDocument

Ƭ **GlobalDocument**\<\>: `Document`

#### Defined in

[browser-types.jsdoc.mjs:35](https://github.com/passes-org/passes/blob/d32fb4d/packages/reqs/src/browser-types.jsdoc.mjs#L35)

___

### RequestResult

Ƭ **RequestResult**\<`TResult`\>: [`AcceptedResult`](interfaces/AcceptedResult.md)\<`TResult`\> \| [`RejectedResult`](interfaces/RejectedResult.md) \| [`UnsupportedResult`](interfaces/UnsupportedResult.md) \| [`ExceptionResult`](interfaces/ExceptionResult.md)

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Defined in

[envelope-v0.jsdoc.mjs:26](https://github.com/passes-org/passes/blob/d32fb4d/packages/reqs/src/envelope-v0.jsdoc.mjs#L26)

___

### ResultStatus

Ƭ **ResultStatus**\<\>: ``"accepted"`` \| ``"rejected"`` \| ``"unsupported"`` \| ``"exception"``

#### Defined in

[envelope-v0.jsdoc.mjs:30](https://github.com/passes-org/passes/blob/d32fb4d/packages/reqs/src/envelope-v0.jsdoc.mjs#L30)

___

### SignedRequestResult

Ƭ **SignedRequestResult**\<`TResultBody`\>: `RequestResult` \| [`SignedAcceptedResult`](interfaces/SignedAcceptedResult.md)\<`TResultBody`\>

#### Type parameters

| Name |
| :------ |
| `TResultBody` |

#### Defined in

[signed-request-topic.jsdoc.mjs:11](https://github.com/passes-org/passes/blob/d32fb4d/packages/reqs/src/signed-request-topic.jsdoc.mjs#L11)

## Functions

### parseTopic

▸ **parseTopic**(`rawRequest`): `string`

Parse and return the topic from a raw request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawRequest` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[parse-topic.js:8](https://github.com/passes-org/passes/blob/d32fb4d/packages/reqs/src/parse-topic.js#L8)
