[@passes/reqs](README.md) / Exports

# @passes/reqs

## Table of contents

### Namespaces

- [Codecs](modules/Codecs.md)

### Classes

- [RequestRouter](classes/RequestRouter.md)
- [RequestType](classes/RequestType.md)
- [SignedRequestType](classes/SignedRequestType.md)

### Interfaces

- [AcceptedResult](interfaces/AcceptedResult.md)
- [Codec](interfaces/Codec.md)
- [ExceptionResult](interfaces/ExceptionResult.md)
- [IRequestType](interfaces/IRequestType.md)
- [RejectedResult](interfaces/RejectedResult.md)
- [SignedAcceptedResult](interfaces/SignedAcceptedResult.md)
- [SignedBodyWrapper](interfaces/SignedBodyWrapper.md)
- [SignedBodyWrapperHeader](interfaces/SignedBodyWrapperHeader.md)
- [UnsupportedResult](interfaces/UnsupportedResult.md)

### Type Aliases

- [RequestResult](modules.md#requestresult)
- [ResultStatus](modules.md#resultstatus)
- [SignedRequestResult](modules.md#signedrequestresult)
- [SupportMap](modules.md#supportmap)

### Variables

- [PassProviders](modules.md#passproviders)

### Functions

- [parseRequestTag](modules.md#parserequesttag)

## Type Aliases

### RequestResult

Ƭ **RequestResult**\<`TResult`\>: [`AcceptedResult`](interfaces/AcceptedResult.md)\<`TResult`\> \| [`RejectedResult`](interfaces/RejectedResult.md) \| [`UnsupportedResult`](interfaces/UnsupportedResult.md) \| [`ExceptionResult`](interfaces/ExceptionResult.md)

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Defined in

[envelope-v0.jsdoc.mjs:26](https://github.com/passes-org/passes/blob/1a8acfa/packages/reqs/src/envelope-v0.jsdoc.mjs#L26)

___

### ResultStatus

Ƭ **ResultStatus**\<\>: ``"accepted"`` \| ``"rejected"`` \| ``"unsupported"`` \| ``"exception"``

#### Defined in

[envelope-v0.jsdoc.mjs:30](https://github.com/passes-org/passes/blob/1a8acfa/packages/reqs/src/envelope-v0.jsdoc.mjs#L30)

___

### SignedRequestResult

Ƭ **SignedRequestResult**\<`TResultBody`\>: `RequestResult` \| [`SignedAcceptedResult`](interfaces/SignedAcceptedResult.md)\<`TResultBody`\>

#### Type parameters

| Name |
| :------ |
| `TResultBody` |

#### Defined in

[signed-request-type.jsdoc.mjs:11](https://github.com/passes-org/passes/blob/1a8acfa/packages/reqs/src/signed-request-type.jsdoc.mjs#L11)

___

### SupportMap

Ƭ **SupportMap**\<`TSupport`\>: `Record`\<`string`, (`rawRequest`: `Uint8Array`) => `TSupport`\>

#### Type parameters

| Name |
| :------ |
| `TSupport` |

#### Defined in

[request-router.jsdoc.mjs:3](https://github.com/passes-org/passes/blob/1a8acfa/packages/reqs/src/request-router.jsdoc.mjs#L3)

## Variables

### PassProviders

• `Const` **PassProviders**: `Object`

PassProviders API namespace

#### Type declaration

| Name | Type |
| :------ | :------ |
| `sendResult` | \<TRequestBody, TResultBody\>(`requestType`: [`RequestType`](classes/RequestType.md)\<`TRequestBody`, `TResultBody`\>, `result`: `RequestResult`\<`TResultBody`\>) => `Promise`\<`void`\> |
| `setPassProvider` | [`RequestType`](classes/RequestType.md)\<`SetPassProviderRequestBody`, `boolean`\> |

#### Defined in

[pass-providers/index.js:5](https://github.com/passes-org/passes/blob/1a8acfa/packages/reqs/src/pass-providers/index.js#L5)

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

[parse-request-tag.js:4](https://github.com/passes-org/passes/blob/1a8acfa/packages/reqs/src/parse-request-tag.js#L4)
