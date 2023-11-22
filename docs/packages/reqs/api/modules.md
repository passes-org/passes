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

- [EnvelopeV0](modules.md#envelopev0)
- [PassProviders](modules.md#passproviders)

## Type Aliases

### RequestResult

Ƭ **RequestResult**\<`TResult`\>: [`AcceptedResult`](interfaces/AcceptedResult.md)\<`TResult`\> \| [`RejectedResult`](interfaces/RejectedResult.md) \| [`UnsupportedResult`](interfaces/UnsupportedResult.md) \| [`ExceptionResult`](interfaces/ExceptionResult.md)

#### Type parameters

| Name |
| :------ |
| `TResult` |

#### Defined in

[envelope-v0.jsdoc.mjs:26](https://github.com/passes-org/passes/blob/76ab3ca/packages/reqs/src/envelope-v0.jsdoc.mjs#L26)

___

### ResultStatus

Ƭ **ResultStatus**\<\>: ``"accepted"`` \| ``"rejected"`` \| ``"unsupported"`` \| ``"exception"``

#### Defined in

[envelope-v0.jsdoc.mjs:30](https://github.com/passes-org/passes/blob/76ab3ca/packages/reqs/src/envelope-v0.jsdoc.mjs#L30)

___

### SignedRequestResult

Ƭ **SignedRequestResult**\<`TResultBody`\>: `RequestResult` \| [`SignedAcceptedResult`](interfaces/SignedAcceptedResult.md)\<`TResultBody`\>

#### Type parameters

| Name |
| :------ |
| `TResultBody` |

#### Defined in

[signed-request-type.jsdoc.mjs:11](https://github.com/passes-org/passes/blob/76ab3ca/packages/reqs/src/signed-request-type.jsdoc.mjs#L11)

___

### SupportMap

Ƭ **SupportMap**\<`TSupport`\>: `Record`\<`string`, (`rawRequest`: `Uint8Array`) => `TSupport`\>

#### Type parameters

| Name |
| :------ |
| `TSupport` |

#### Defined in

[request-router.jsdoc.mjs:3](https://github.com/passes-org/passes/blob/76ab3ca/packages/reqs/src/request-router.jsdoc.mjs#L3)

## Variables

### EnvelopeV0

• `Const` **EnvelopeV0**: `Object`

Pass Request Envelope Version 0x00

#### Type declaration

| Name | Type |
| :------ | :------ |
| `VERSION` | `number` |
| `errors` | \{ `REQUEST_INCORRECT_VERSION`: typeof `EnvelopeV0ErrorIncorrectVersion` ; `REQUEST_MISSING_TAG_LENGTH`: typeof `EnvelopeV0RequestMissingTagLength` ; `RESULT_INVALID_STATUS_BYTE`: typeof `EnvelopeV0ResultMissingStatusByte` ; `RESULT_MISSING_STATUS_BYTE`: typeof `EnvelopeV0ResultMissingStatusByte`  } |
| `errors.REQUEST_INCORRECT_VERSION` | typeof `EnvelopeV0ErrorIncorrectVersion` |
| `errors.REQUEST_MISSING_TAG_LENGTH` | typeof `EnvelopeV0RequestMissingTagLength` |
| `errors.RESULT_INVALID_STATUS_BYTE` | typeof `EnvelopeV0ResultMissingStatusByte` |
| `errors.RESULT_MISSING_STATUS_BYTE` | typeof `EnvelopeV0ResultMissingStatusByte` |
| `encodeRequestHeader` | (`tag`: `string`) => `Uint8Array` |
| `encodeResult` | (`result`: `RequestResult`\<`Uint8Array`\>) => `Uint8Array` |
| `encodeResultStatusByte` | (`status`: [`ResultStatus`](modules.md#resultstatus)) => `number` |
| `parseRequest` | (`bytes`: `Uint8Array`) => \{ `body`: `Uint8Array` ; `tag`: `string`  } |
| `parseResult` | (`bytes`: `Uint8Array`) => `RequestResult`\<`Uint8Array`\> |
| `parseResultStatusByte` | (`status`: `number`) => [`ResultStatus`](modules.md#resultstatus) |

#### Defined in

[envelope-v0.js:10](https://github.com/passes-org/passes/blob/76ab3ca/packages/reqs/src/envelope-v0.js#L10)

___

### PassProviders

• `Const` **PassProviders**: `Object`

PassProviders API namespace

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setPassProvider` | [`RequestType`](classes/RequestType.md)\<`SetPassProviderRequestBody`, `boolean`\> |

#### Defined in

[pass-providers/index.js:4](https://github.com/passes-org/passes/blob/76ab3ca/packages/reqs/src/pass-providers/index.js#L4)
