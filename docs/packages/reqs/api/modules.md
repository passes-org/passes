[@passes/reqs](README.md) / Exports

# @passes/reqs

## Table of contents

### Namespaces

- [Codecs](modules/Codecs.md)

### Classes

- [RequestType](classes/RequestType.md)
- [SignedRequestType](classes/SignedRequestType.md)

### Interfaces

- [AcceptedResult](interfaces/AcceptedResult.md)
- [Codec](interfaces/Codec.md)
- [ConnectMessage](interfaces/ConnectMessage.md)
- [ExceptionResult](interfaces/ExceptionResult.md)
- [IRequestType](interfaces/IRequestType.md)
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

### Variables

- [PassProviders](modules.md#passproviders)

### Functions

- [parseRequestTag](modules.md#parserequesttag)

## Type Aliases

### DocumentWithPasses

Ƭ **DocumentWithPasses**\<\>: `Document` & \{ `passes?`: [`PassesABI`](interfaces/PassesABI.md)  }

#### Defined in

[browser-types.jsdoc.mjs:3](https://github.com/passes-org/passes/blob/55014ff/packages/reqs/src/browser-types.jsdoc.mjs#L3)

___

### GlobalDocument

Ƭ **GlobalDocument**\<\>: `Document`

#### Defined in

[browser-types.jsdoc.mjs:35](https://github.com/passes-org/passes/blob/55014ff/packages/reqs/src/browser-types.jsdoc.mjs#L35)

___

### RequestResult

Ƭ **RequestResult**\<`TResult`\>: [`AcceptedResult`](interfaces/AcceptedResult.md)\<`TResult`\> \| [`RejectedResult`](interfaces/RejectedResult.md) \| [`UnsupportedResult`](interfaces/UnsupportedResult.md) \| [`ExceptionResult`](interfaces/ExceptionResult.md)

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Defined in

[envelope-v0.jsdoc.mjs:26](https://github.com/passes-org/passes/blob/55014ff/packages/reqs/src/envelope-v0.jsdoc.mjs#L26)

___

### ResultStatus

Ƭ **ResultStatus**\<\>: ``"accepted"`` \| ``"rejected"`` \| ``"unsupported"`` \| ``"exception"``

#### Defined in

[envelope-v0.jsdoc.mjs:30](https://github.com/passes-org/passes/blob/55014ff/packages/reqs/src/envelope-v0.jsdoc.mjs#L30)

___

### SignedRequestResult

Ƭ **SignedRequestResult**\<`TResultBody`\>: `RequestResult` \| [`SignedAcceptedResult`](interfaces/SignedAcceptedResult.md)\<`TResultBody`\>

#### Type parameters

| Name |
| :------ |
| `TResultBody` |

#### Defined in

[signed-request-type.jsdoc.mjs:11](https://github.com/passes-org/passes/blob/55014ff/packages/reqs/src/signed-request-type.jsdoc.mjs#L11)

## Variables

### PassProviders

• `Const` **PassProviders**: `Object`

PassProviders API namespace

#### Type declaration

| Name | Type |
| :------ | :------ |
| `awaitRequest` | () => `Promise`\<`Uint8Array`\> |
| `sendResult` | \<TRequestBody, TResultBody\>(`requestType`: [`RequestType`](classes/RequestType.md)\<`TRequestBody`, `TResultBody`\>, `result`: `RequestResult`\<`TResultBody`\>) => `Promise`\<`void`\> |
| `setPassProvider` | [`RequestType`](classes/RequestType.md)\<`SetPassProviderRequestBody`, `void`\> |

#### Defined in

[pass-providers/index.js:6](https://github.com/passes-org/passes/blob/55014ff/packages/reqs/src/pass-providers/index.js#L6)

## Functions

### parseRequestTag

▸ **parseRequestTag**(`rawRequest`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawRequest` | `Uint8Array` |

#### Returns

`string`

#### Defined in

[parse-request-tag.js:4](https://github.com/passes-org/passes/blob/55014ff/packages/reqs/src/parse-request-tag.js#L4)
