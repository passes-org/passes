[@passes/reqs](../README.md) / [Modules](../modules.md) / [main](../modules/main.md) / SignedRequestTopic

# Class: SignedRequestTopic\<TRequestBody, TResultBody\>

[main](../modules/main.md).SignedRequestTopic

Wraps a RequestTopic to implement result signing and verification.

**`Implements`**

## Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

## Hierarchy

- [`RequestTopic`](main.RequestTopic.md)

  ↳ **`SignedRequestTopic`**

## Table of contents

### Constructors

- [constructor](main.SignedRequestTopic.md#constructor)

### Properties

- [abi](main.SignedRequestTopic.md#abi)
- [id](main.SignedRequestTopic.md#id)
- [requestBodyCodec](main.SignedRequestTopic.md#requestbodycodec)
- [resultBodyCodec](main.SignedRequestTopic.md#resultbodycodec)
- [signResult](main.SignedRequestTopic.md#signresult)
- [verifyResult](main.SignedRequestTopic.md#verifyresult)
- [Errors](main.SignedRequestTopic.md#errors)

### Methods

- [decodeRequest](main.SignedRequestTopic.md#decoderequest)
- [decodeResult](main.SignedRequestTopic.md#decoderesult)
- [encodeRequest](main.SignedRequestTopic.md#encoderequest)
- [encodeResult](main.SignedRequestTopic.md#encoderesult)
- [resolveABI](main.SignedRequestTopic.md#resolveabi)
- [sendRequest](main.SignedRequestTopic.md#sendrequest)
- [toString](main.SignedRequestTopic.md#tostring)

## Constructors

### constructor

• **new SignedRequestTopic**\<`TRequestBody`, `TResultBody`\>(`params`): [`SignedRequestTopic`](main.SignedRequestTopic.md)\<`TRequestBody`, `TResultBody`\>

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

[`SignedRequestTopic`](main.SignedRequestTopic.md)\<`TRequestBody`, `TResultBody`\>

#### Overrides

[RequestTopic](main.RequestTopic.md).[constructor](main.RequestTopic.md#constructor)

#### Defined in

[main/signed-request-topic.js:34](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/signed-request-topic.js#L34)

## Properties

### abi

• **abi**: [`PassesABI`](../interfaces/main.PassesABI.md)

#### Inherited from

[RequestTopic](main.RequestTopic.md).[abi](main.RequestTopic.md#abi)

#### Defined in

[main/request-topic.js:37](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L37)

___

### id

• **id**: `string`

#### Inherited from

[RequestTopic](main.RequestTopic.md).[id](main.RequestTopic.md#id)

#### Defined in

[main/request-topic.js:34](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L34)

___

### requestBodyCodec

• **requestBodyCodec**: `Codec`\<`any`\>

#### Inherited from

[RequestTopic](main.RequestTopic.md).[requestBodyCodec](main.RequestTopic.md#requestbodycodec)

#### Defined in

[main/request-topic.js:35](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L35)

___

### resultBodyCodec

• **resultBodyCodec**: `Codec`\<`any`\>

#### Inherited from

[RequestTopic](main.RequestTopic.md).[resultBodyCodec](main.RequestTopic.md#resultbodycodec)

#### Defined in

[main/request-topic.js:36](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L36)

___

### signResult

• **signResult**: (`body`: `TResultBody`) => `Promise`\<[`SignedBodyWrapperHeader`](../interfaces/main.SignedBodyWrapperHeader.md)\>

#### Type declaration

▸ (`body`): `Promise`\<[`SignedBodyWrapperHeader`](../interfaces/main.SignedBodyWrapperHeader.md)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `TResultBody` |

##### Returns

`Promise`\<[`SignedBodyWrapperHeader`](../interfaces/main.SignedBodyWrapperHeader.md)\>

#### Defined in

[main/signed-request-topic.js:36](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/signed-request-topic.js#L36)

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

[main/signed-request-topic.js:37](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/signed-request-topic.js#L37)

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

[RequestTopic](main.RequestTopic.md).[Errors](main.RequestTopic.md#errors)

#### Defined in

[main/signed-request-topic.js:101](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/signed-request-topic.js#L101)

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

[RequestTopic](main.RequestTopic.md).[decodeRequest](main.RequestTopic.md#decoderequest)

#### Defined in

[main/request-topic.js:59](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L59)

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

[RequestTopic](main.RequestTopic.md).[decodeResult](main.RequestTopic.md#decoderesult)

#### Defined in

[main/signed-request-topic.js:73](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/signed-request-topic.js#L73)

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

[RequestTopic](main.RequestTopic.md).[encodeRequest](main.RequestTopic.md#encoderequest)

#### Defined in

[main/request-topic.js:46](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L46)

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

[RequestTopic](main.RequestTopic.md).[encodeResult](main.RequestTopic.md#encoderesult)

#### Defined in

[main/signed-request-topic.js:47](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/signed-request-topic.js#L47)

___

### resolveABI

▸ **resolveABI**(): [`PassesABI`](../interfaces/main.PassesABI.md)

A helper for resolving the PassesABI. If the instance has no abi property, it returns document.passes if it's available.

#### Returns

[`PassesABI`](../interfaces/main.PassesABI.md)

**`Throws`**

- document.passes must be available if `abi` is not passed.

#### Inherited from

[RequestTopic](main.RequestTopic.md).[resolveABI](main.RequestTopic.md#resolveabi)

#### Defined in

[main/request-topic.js:150](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L150)

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

[RequestTopic](main.RequestTopic.md).[sendRequest](main.RequestTopic.md#sendrequest)

#### Defined in

[main/signed-request-topic.js:94](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/signed-request-topic.js#L94)

___

### toString

▸ **toString**(): `string`

Returns a string representation of the request topic.

#### Returns

`string`

#### Inherited from

[RequestTopic](main.RequestTopic.md).[toString](main.RequestTopic.md#tostring)

#### Defined in

[main/request-topic.js:162](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L162)
