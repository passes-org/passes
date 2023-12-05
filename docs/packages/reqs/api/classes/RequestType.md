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

• **new RequestType**\<`TRequestBody`, `TResultBody`\>(`params`): [`RequestType`](RequestType.md)\<`TRequestBody`, `TResultBody`\>

#### Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `RequestTypeParams`\<`TRequestBody`, `TResultBody`\> |

#### Returns

[`RequestType`](RequestType.md)\<`TRequestBody`, `TResultBody`\>

#### Defined in

[request-type.js:33](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L33)

## Properties

### abi

• **abi**: [`PassesABI`](../interfaces/PassesABI.md)

#### Defined in

[request-type.js:37](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L37)

___

### requestBodyCodec

• **requestBodyCodec**: `Codec`\<`TRequestBody`\>

#### Defined in

[request-type.js:35](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L35)

___

### requestTag

• **requestTag**: `string`

#### Defined in

[request-type.js:34](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L34)

___

### resultBodyCodec

• **resultBodyCodec**: `Codec`\<`TResultBody`\>

#### Defined in

[request-type.js:36](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L36)

___

### Errors

▪ `Static` **Errors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ABI_NOT_AVAILABLE` | typeof `RequestTypeABINotAvailable` |
| `INCORRECT_TAG` | typeof `RequestTypeIncorrectTagError` |

#### Defined in

[request-type.js:112](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L112)

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

[request-type.js:59](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L59)

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

[request-type.js:86](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L86)

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

[request-type.js:46](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L46)

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

[request-type.js:71](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L71)

___

### resolveABI

▸ **resolveABI**(): [`PassesABI`](../interfaces/PassesABI.md)

A helper for resolving the PassesABI. If the instance has no abi property, it returns document.passes if it's available.

#### Returns

[`PassesABI`](../interfaces/PassesABI.md)

**`Throws`**

- document.passes must be available if `abi` is not passed.

#### Defined in

[request-type.js:150](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L150)

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

[request-type.js:105](https://github.com/passes-org/passes/blob/d0f7a6f/packages/reqs/src/request-type.js#L105)
