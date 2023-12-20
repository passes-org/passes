[@passes/reqs](../README.md) / [Modules](../modules.md) / main

# Module: main

## Table of contents

### Classes

- [RequestTopic](../classes/main.RequestTopic.md)
- [SignedRequestTopic](../classes/main.SignedRequestTopic.md)

### Interfaces

- [AcceptedResult](../interfaces/main.AcceptedResult.md)
- [Codec](../interfaces/main.Codec.md)
- [ConnectMessage](../interfaces/main.ConnectMessage.md)
- [ExceptionResult](../interfaces/main.ExceptionResult.md)
- [IRequestTopic](../interfaces/main.IRequestTopic.md)
- [PassesABI](../interfaces/main.PassesABI.md)
- [RejectedResult](../interfaces/main.RejectedResult.md)
- [RequestMessage](../interfaces/main.RequestMessage.md)
- [ResultMessage](../interfaces/main.ResultMessage.md)
- [SignedAcceptedResult](../interfaces/main.SignedAcceptedResult.md)
- [SignedBodyWrapper](../interfaces/main.SignedBodyWrapper.md)
- [SignedBodyWrapperHeader](../interfaces/main.SignedBodyWrapperHeader.md)
- [UnsupportedResult](../interfaces/main.UnsupportedResult.md)

### Type Aliases

- [DocumentWithPasses](main.md#documentwithpasses)
- [GlobalDocument](main.md#globaldocument)
- [RequestResult](main.md#requestresult)
- [ResultStatus](main.md#resultstatus)
- [SignedRequestResult](main.md#signedrequestresult)

### Functions

- [parseTopic](main.md#parsetopic)

## Type Aliases

### DocumentWithPasses

Ƭ **DocumentWithPasses**\<\>: `Document` & \{ `passes?`: [`PassesABI`](../interfaces/main.PassesABI.md)  }

#### Defined in

[main/browser-types.jsdoc.mjs:3](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/browser-types.jsdoc.mjs#L3)

___

### GlobalDocument

Ƭ **GlobalDocument**\<\>: `Document`

#### Defined in

[main/browser-types.jsdoc.mjs:35](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/browser-types.jsdoc.mjs#L35)

___

### RequestResult

Ƭ **RequestResult**\<`TResult`\>: [`AcceptedResult`](../interfaces/main.AcceptedResult.md)\<`TResult`\> \| [`RejectedResult`](../interfaces/main.RejectedResult.md) \| [`UnsupportedResult`](../interfaces/main.UnsupportedResult.md) \| [`ExceptionResult`](../interfaces/main.ExceptionResult.md)

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Defined in

[main/envelope-v0.jsdoc.mjs:26](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/envelope-v0.jsdoc.mjs#L26)

___

### ResultStatus

Ƭ **ResultStatus**\<\>: ``"accepted"`` \| ``"rejected"`` \| ``"unsupported"`` \| ``"exception"``

#### Defined in

[main/envelope-v0.jsdoc.mjs:30](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/envelope-v0.jsdoc.mjs#L30)

___

### SignedRequestResult

Ƭ **SignedRequestResult**\<`TResultBody`\>: `RequestResult` \| [`SignedAcceptedResult`](../interfaces/main.SignedAcceptedResult.md)\<`TResultBody`\>

#### Type parameters

| Name |
| :------ |
| `TResultBody` |

#### Defined in

[main/signed-request-topic.jsdoc.mjs:11](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/signed-request-topic.jsdoc.mjs#L11)

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

[main/parse-topic.js:8](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/parse-topic.js#L8)
