[@passes/reqs](../README.md) / [Exports](../modules.md) / SignedRequestTopic

# Class: SignedRequestTopic\<TRequestBody, TResultBody\>

Wraps a RequestTopic to implement result signing and verification.

**`Implements`**

## Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

## Hierarchy

- [`RequestTopic`](RequestTopic.md)

  ↳ **`SignedRequestTopic`**

## Table of contents

### Constructors

- [constructor](SignedRequestTopic.md#constructor)

### Properties

- [abi](SignedRequestTopic.md#abi)
- [id](SignedRequestTopic.md#id)
- [requestBodyCodec](SignedRequestTopic.md#requestbodycodec)
- [resultBodyCodec](SignedRequestTopic.md#resultbodycodec)
- [signResult](SignedRequestTopic.md#signresult)
- [verifyResult](SignedRequestTopic.md#verifyresult)
- [Errors](SignedRequestTopic.md#errors)

### Methods

- [decodeRequest](SignedRequestTopic.md#decoderequest)
- [decodeResult](SignedRequestTopic.md#decoderesult)
- [encodeRequest](SignedRequestTopic.md#encoderequest)
- [encodeResult](SignedRequestTopic.md#encoderesult)
- [resolveABI](SignedRequestTopic.md#resolveabi)
- [sendRequest](SignedRequestTopic.md#sendrequest)
- [toString](SignedRequestTopic.md#tostring)
- [withABI](SignedRequestTopic.md#withabi)

## Constructors

### constructor

• **new SignedRequestTopic**\<`TRequestBody`, `TResultBody`\>(`params`): [`SignedRequestTopic`](SignedRequestTopic.md)\<`TRequestBody`, `TResultBody`\>

#### Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `SignedRequestTopicParams`\<`TRequestBody`, `TResultBody`\> |

#### Returns

[`SignedRequestTopic`](SignedRequestTopic.md)\<`TRequestBody`, `TResultBody`\>

#### Overrides

[RequestTopic](RequestTopic.md).[constructor](RequestTopic.md#constructor)

#### Defined in

[signed-request-topic.js:34](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/signed-request-topic.js#L34)

## Properties

### abi

• **abi**: [`PassesABI`](../interfaces/PassesABI.md)

#### Inherited from

[RequestTopic](RequestTopic.md).[abi](RequestTopic.md#abi)

#### Defined in

[request-topic.js:37](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/request-topic.js#L37)

___

### id

• **id**: `string`

#### Inherited from

[RequestTopic](RequestTopic.md).[id](RequestTopic.md#id)

#### Defined in

[request-topic.js:34](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/request-topic.js#L34)

___

### requestBodyCodec

• **requestBodyCodec**: `Codec`\<`any`\>

#### Inherited from

[RequestTopic](RequestTopic.md).[requestBodyCodec](RequestTopic.md#requestbodycodec)

#### Defined in

[request-topic.js:35](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/request-topic.js#L35)

___

### resultBodyCodec

• **resultBodyCodec**: `Codec`\<`any`\>

#### Inherited from

[RequestTopic](RequestTopic.md).[resultBodyCodec](RequestTopic.md#resultbodycodec)

#### Defined in

[request-topic.js:36](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/request-topic.js#L36)

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

[signed-request-topic.js:36](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/signed-request-topic.js#L36)

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

[signed-request-topic.js:37](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/signed-request-topic.js#L37)

___

### Errors

▪ `Static` **Errors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ABI_NOT_AVAILABLE` | typeof `RequestTopicABINotAvailable` |
| `CANNOT_SIGN` | typeof `SignedRequestTopicCannotSign` |
| `CANNOT_VERIFY` | typeof `SignedRequestTopicCannotVerify` |
| `INCORRECT_TOPIC` | typeof `RequestTopicIncorrectTopicError` |
| `INVALID_SIGNATURE` | typeof `SignedRequestTopicInvalidSignature` |

#### Overrides

[RequestTopic](RequestTopic.md).[Errors](RequestTopic.md#errors)

#### Defined in

[signed-request-topic.js:101](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/signed-request-topic.js#L101)

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

[RequestTopic](RequestTopic.md).[decodeRequest](RequestTopic.md#decoderequest)

#### Defined in

[request-topic.js:59](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/request-topic.js#L59)

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

[RequestTopic](RequestTopic.md).[decodeResult](RequestTopic.md#decoderesult)

#### Defined in

[signed-request-topic.js:73](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/signed-request-topic.js#L73)

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

[RequestTopic](RequestTopic.md).[encodeRequest](RequestTopic.md#encoderequest)

#### Defined in

[request-topic.js:46](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/request-topic.js#L46)

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

[RequestTopic](RequestTopic.md).[encodeResult](RequestTopic.md#encoderesult)

#### Defined in

[signed-request-topic.js:47](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/signed-request-topic.js#L47)

___

### resolveABI

▸ **resolveABI**(): [`PassesABI`](../interfaces/PassesABI.md)

A helper for resolving the PassesABI. If the instance has no abi property, it returns document.passes if it's available.

#### Returns

[`PassesABI`](../interfaces/PassesABI.md)

**`Throws`**

- document.passes must be available if `abi` is not passed.

#### Inherited from

[RequestTopic](RequestTopic.md).[resolveABI](RequestTopic.md#resolveabi)

#### Defined in

[request-topic.js:150](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/request-topic.js#L150)

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

[RequestTopic](RequestTopic.md).[sendRequest](RequestTopic.md#sendrequest)

#### Defined in

[signed-request-topic.js:94](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/signed-request-topic.js#L94)

___

### toString

▸ **toString**(): `string`

Returns a string representation of the request topic.

#### Returns

`string`

#### Inherited from

[RequestTopic](RequestTopic.md).[toString](RequestTopic.md#tostring)

#### Defined in

[request-topic.js:175](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/request-topic.js#L175)

___

### withABI

▸ **withABI**(`abi`): [`RequestTopic`](RequestTopic.md)\<`any`, `any`\>

Returns a new RequestTopic instance with the same id and codecs, but with a new ABI.

#### Parameters

| Name | Type |
| :------ | :------ |
| `abi` | [`PassesABI`](../interfaces/PassesABI.md) |

#### Returns

[`RequestTopic`](RequestTopic.md)\<`any`, `any`\>

#### Inherited from

[RequestTopic](RequestTopic.md).[withABI](RequestTopic.md#withabi)

#### Defined in

[request-topic.js:162](https://github.com/passes-org/passes/blob/2d660fa/packages/reqs/src/request-topic.js#L162)
