[@passes/reqs](../README.md) / [Exports](../modules.md) / RequestType

# Class: RequestType\<TRequestBody, TResultBody\>

Builds an Envelope-v0x00 request type interface.

**`Implements`**

## Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

## Hierarchy

- **`RequestType`**

  ↳ [`SignedRequestType`](SignedRequestType.md)

## Table of contents

### Constructors

- [constructor](RequestType.md#constructor)

### Properties

- [abi](RequestType.md#abi)
- [requestBodyCodec](RequestType.md#requestbodycodec)
- [requestTag](RequestType.md#requesttag)
- [resultBodyCodec](RequestType.md#resultbodycodec)
- [Errors](RequestType.md#errors)

### Methods

- [decodeRequest](RequestType.md#decoderequest)
- [decodeResult](RequestType.md#decoderesult)
- [encodeRequest](RequestType.md#encoderequest)
- [encodeResult](RequestType.md#encoderesult)
- [resolveABI](RequestType.md#resolveabi)
- [sendRequest](RequestType.md#sendrequest)

## Constructors

### constructor

• **new RequestType**\<`TRequestBody`, `TResultBody`\>(`requestTag`, `requestBodyCodec`, `resultBodyCodec`, `abi?`): [`RequestType`](RequestType.md)\<`TRequestBody`, `TResultBody`\>

#### Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestTag` | `string` |
| `requestBodyCodec` | `Codec`\<`TRequestBody`\> |
| `resultBodyCodec` | `Codec`\<`TResultBody`\> |
| `abi?` | `PassesABI` |

#### Returns

[`RequestType`](RequestType.md)\<`TRequestBody`, `TResultBody`\>

#### Defined in

[request-type.js:26](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L26)

## Properties

### abi

• **abi**: `PassesABI`

#### Defined in

[request-type.js:30](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L30)

___

### requestBodyCodec

• **requestBodyCodec**: `Codec`\<`TRequestBody`\>

#### Defined in

[request-type.js:28](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L28)

___

### requestTag

• **requestTag**: `string`

#### Defined in

[request-type.js:27](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L27)

___

### resultBodyCodec

• **resultBodyCodec**: `Codec`\<`TResultBody`\>

#### Defined in

[request-type.js:29](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L29)

___

### Errors

▪ `Static` **Errors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ABI_NOT_AVAILABLE` | typeof `RequestTypeABINotAvailable` |
| `INCORRECT_TAG` | typeof `RequestTypeIncorrectTagError` |

#### Defined in

[request-type.js:105](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L105)

## Methods

### decodeRequest

▸ **decodeRequest**(`bytes`): `Promise`\<`TRequestBody`\>

Decodes an envelope-v0x00 request into a structured request body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`\<`TRequestBody`\>

#### Defined in

[request-type.js:52](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L52)

___

### decodeResult

▸ **decodeResult**(`bytes`): `Promise`\<`RequestResult`\<`TResultBody`\>\>

Decodes an envelope-v0x00 request into a structured request body.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

`Promise`\<`RequestResult`\<`TResultBody`\>\>

#### Defined in

[request-type.js:79](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L79)

___

### encodeRequest

▸ **encodeRequest**(`body`): `Promise`\<`Uint8Array`\>

Encodes a structured request body into an envelope-v0x00 request.

#### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `TRequestBody` |

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[request-type.js:39](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L39)

___

### encodeResult

▸ **encodeResult**(`result`): `Promise`\<`Uint8Array`\>

Encodes a structured result body into an envelope-v0x00 result.

#### Parameters

| Name | Type |
| :------ | :------ |
| `result` | `RequestResult`\<`TResultBody`\> |

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[request-type.js:64](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L64)

___

### resolveABI

▸ **resolveABI**(): `PassesABI`

A helper for resolving the PassesABI. If the instance has no abi property, it returns document.passes if it's available.

#### Returns

`PassesABI`

**`Throws`**

- document.passes must be available if `abi` is not passed.

#### Defined in

[request-type.js:143](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L143)

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

#### Defined in

[request-type.js:98](https://github.com/passes-org/passes/blob/3a6a81a/packages/reqs/src/request-type.js#L98)
