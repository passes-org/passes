[@passes/reqs](../README.md) / [Exports](../modules.md) / SignedRequestType

# Class: SignedRequestType\<TRequestBody, TResultBody\>

Wraps a RequestType to implement result signing and verification.

**`Implements`**

## Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

## Hierarchy

- [`RequestType`](RequestType.md)

  ↳ **`SignedRequestType`**

## Table of contents

### Constructors

- [constructor](SignedRequestType.md#constructor)

### Properties

- [abi](SignedRequestType.md#abi)
- [requestBodyCodec](SignedRequestType.md#requestbodycodec)
- [requestTag](SignedRequestType.md#requesttag)
- [resultBodyCodec](SignedRequestType.md#resultbodycodec)
- [signResult](SignedRequestType.md#signresult)
- [verifyResult](SignedRequestType.md#verifyresult)
- [Errors](SignedRequestType.md#errors)

### Methods

- [decodeRequest](SignedRequestType.md#decoderequest)
- [decodeResult](SignedRequestType.md#decoderesult)
- [encodeRequest](SignedRequestType.md#encoderequest)
- [encodeResult](SignedRequestType.md#encoderesult)
- [resolveABI](SignedRequestType.md#resolveabi)
- [sendRequest](SignedRequestType.md#sendrequest)

## Constructors

### constructor

• **new SignedRequestType**\<`TRequestBody`, `TResultBody`\>(`params`): [`SignedRequestType`](SignedRequestType.md)\<`TRequestBody`, `TResultBody`\>

#### Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `SignedRequestTypeParams`\<`TRequestBody`, `TResultBody`\> |

#### Returns

[`SignedRequestType`](SignedRequestType.md)\<`TRequestBody`, `TResultBody`\>

#### Overrides

[RequestType](RequestType.md).[constructor](RequestType.md#constructor)

#### Defined in

[signed-request-type.js:34](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/signed-request-type.js#L34)

## Properties

### abi

• **abi**: `PassesABI`

#### Inherited from

[RequestType](RequestType.md).[abi](RequestType.md#abi)

#### Defined in

[request-type.js:37](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/request-type.js#L37)

___

### requestBodyCodec

• **requestBodyCodec**: `Codec`\<`any`\>

#### Inherited from

[RequestType](RequestType.md).[requestBodyCodec](RequestType.md#requestbodycodec)

#### Defined in

[request-type.js:35](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/request-type.js#L35)

___

### requestTag

• **requestTag**: `string`

#### Inherited from

[RequestType](RequestType.md).[requestTag](RequestType.md#requesttag)

#### Defined in

[request-type.js:34](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/request-type.js#L34)

___

### resultBodyCodec

• **resultBodyCodec**: `Codec`\<`any`\>

#### Inherited from

[RequestType](RequestType.md).[resultBodyCodec](RequestType.md#resultbodycodec)

#### Defined in

[request-type.js:36](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/request-type.js#L36)

___

### signResult

• **signResult**: (`body`: `TResultBody`) => `Promise`\<[`SignedBodyWrapperHeader`](../interfaces/SignedBodyWrapperHeader.md)\>

#### Type declaration

▸ (`body`): `Promise`\<[`SignedBodyWrapperHeader`](../interfaces/SignedBodyWrapperHeader.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `TResultBody` |

##### Returns

`Promise`\<[`SignedBodyWrapperHeader`](../interfaces/SignedBodyWrapperHeader.md)\>

#### Defined in

[signed-request-type.js:36](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/signed-request-type.js#L36)

___

### verifyResult

• **verifyResult**: (`signed`: `SignedBodyWrapper`\<`TResultBody`\>) => `Promise`\<`boolean`\>

#### Type declaration

▸ (`signed`): `Promise`\<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `signed` | `SignedBodyWrapper`\<`TResultBody`\> |

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[signed-request-type.js:37](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/signed-request-type.js#L37)

___

### Errors

▪ `Static` **Errors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ABI_NOT_AVAILABLE` | typeof `RequestTypeABINotAvailable` |
| `CANNOT_SIGN` | typeof `SignedRequestTypeCannotSign` |
| `CANNOT_VERIFY` | typeof `SignedRequestTypeCannotVerify` |
| `INCORRECT_TAG` | typeof `RequestTypeIncorrectTagError` |
| `INVALID_SIGNATURE` | typeof `SignedRequestTypeInvalidSignature` |

#### Overrides

[RequestType](RequestType.md).[Errors](RequestType.md#errors)

#### Defined in

[signed-request-type.js:101](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/signed-request-type.js#L101)

## Methods

### decodeRequest

▸ **decodeRequest**(`bytes`): `Promise`\<`any`\>

Decodes an envelope-v0x00 request into a structured request body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`\<`any`\>

#### Inherited from

[RequestType](RequestType.md).[decodeRequest](RequestType.md#decoderequest)

#### Defined in

[request-type.js:59](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/request-type.js#L59)

___

### decodeResult

▸ **decodeResult**(`bytes`): `Promise`\<`SignedRequestResult`\<`TResultBody`\>\>

Returns the signed result's body if the result signature is valid. Throws if the signature is invalid.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`\<`SignedRequestResult`\<`TResultBody`\>\>

**`Throws`**

- Throws an INVALID_SIGNATURE error if the signature does not represent match the body and public key

**`Throws`**

- Throws a CANNOT_VERIFY error if no verifyResult implementation was provided at construction

#### Overrides

[RequestType](RequestType.md).[decodeResult](RequestType.md#decoderesult)

#### Defined in

[signed-request-type.js:73](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/signed-request-type.js#L73)

___

### encodeRequest

▸ **encodeRequest**(`body`): `Promise`\<`Uint8Array`\>

Encodes a structured request body into an envelope-v0x00 request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `any` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Inherited from

[RequestType](RequestType.md).[encodeRequest](RequestType.md#encoderequest)

#### Defined in

[request-type.js:46](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/request-type.js#L46)

___

### encodeResult

▸ **encodeResult**(`result`): `Promise`\<`Uint8Array`\>

Encodes a structured result body into a signed result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `SignedRequestResult`\<`TResultBody`\> |

#### Returns

`Promise`\<`Uint8Array`\>

**`Throws`**

- Throws a CANNOT_SIGN error if no signResult implementation was provided at construction

#### Overrides

[RequestType](RequestType.md).[encodeResult](RequestType.md#encoderesult)

#### Defined in

[signed-request-type.js:47](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/signed-request-type.js#L47)

___

### resolveABI

▸ **resolveABI**(): `PassesABI`

A helper for resolving the PassesABI. If the instance has no abi property, it returns document.passes if it's available.

#### Returns

`PassesABI`

**`Throws`**

- document.passes must be available if `abi` is not passed.

#### Inherited from

[RequestType](RequestType.md).[resolveABI](RequestType.md#resolveabi)

#### Defined in

[request-type.js:150](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/request-type.js#L150)

___

### sendRequest

▸ **sendRequest**(`reqBody`): `Promise`\<`RequestResult`\<`TResultBody`\>\>

Sends a request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `reqBody` | `TRequestBody` |

#### Returns

`Promise`\<`RequestResult`\<`TResultBody`\>\>

#### Overrides

[RequestType](RequestType.md).[sendRequest](RequestType.md#sendrequest)

#### Defined in

[signed-request-type.js:94](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/signed-request-type.js#L94)
