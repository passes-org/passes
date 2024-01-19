[@passes/reqs](../README.md) / [Exports](../modules.md) / RequestTopic

# Class: RequestTopic\<TRequestBody, TResultBody\>

Builds an Envelope-v0x00 request topic interface.

**`Implements`**

## Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

## Hierarchy

- **`RequestTopic`**

  ↳ [`SignedRequestTopic`](SignedRequestTopic.md)

## Table of contents

### Constructors

- [constructor](RequestTopic.md#constructor)

### Properties

- [abi](RequestTopic.md#abi)
- [id](RequestTopic.md#id)
- [requestBodyCodec](RequestTopic.md#requestbodycodec)
- [resultBodyCodec](RequestTopic.md#resultbodycodec)
- [Errors](RequestTopic.md#errors)

### Methods

- [decodeRequest](RequestTopic.md#decoderequest)
- [decodeResult](RequestTopic.md#decoderesult)
- [encodeRequest](RequestTopic.md#encoderequest)
- [encodeResult](RequestTopic.md#encoderesult)
- [resolveABI](RequestTopic.md#resolveabi)
- [sendRequest](RequestTopic.md#sendrequest)
- [toString](RequestTopic.md#tostring)
- [withABI](RequestTopic.md#withabi)

## Constructors

### constructor

• **new RequestTopic**\<`TRequestBody`, `TResultBody`\>(`params`): [`RequestTopic`](RequestTopic.md)\<`TRequestBody`, `TResultBody`\>

#### Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | `RequestTopicParams`\<`TRequestBody`, `TResultBody`\> |

#### Returns

[`RequestTopic`](RequestTopic.md)\<`TRequestBody`, `TResultBody`\>

#### Defined in

[request-topic.js:33](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L33)

## Properties

### abi

• **abi**: [`PassesABI`](../interfaces/PassesABI.md)

#### Defined in

[request-topic.js:37](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L37)

___

### id

• **id**: `string`

#### Defined in

[request-topic.js:34](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L34)

___

### requestBodyCodec

• **requestBodyCodec**: `Codec`\<`TRequestBody`\>

#### Defined in

[request-topic.js:35](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L35)

___

### resultBodyCodec

• **resultBodyCodec**: `Codec`\<`TResultBody`\>

#### Defined in

[request-topic.js:36](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L36)

___

### Errors

▪ `Static` **Errors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ABI_NOT_AVAILABLE` | typeof `RequestTopicABINotAvailable` |
| `INCORRECT_TOPIC` | typeof `RequestTopicIncorrectTopicError` |

#### Defined in

[request-topic.js:112](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L112)

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

[request-topic.js:59](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L59)

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

[request-topic.js:86](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L86)

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

[request-topic.js:46](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L46)

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

[request-topic.js:71](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L71)

___

### resolveABI

▸ **resolveABI**(): [`PassesABI`](../interfaces/PassesABI.md)

A helper for resolving the PassesABI. If the instance has no abi property, it returns document.passes if it's available.

#### Returns

[`PassesABI`](../interfaces/PassesABI.md)

**`Throws`**

- document.passes must be available if `abi` is not passed.

#### Defined in

[request-topic.js:150](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L150)

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

[request-topic.js:105](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L105)

___

### toString

▸ **toString**(): `string`

Returns a string representation of the request topic.

#### Returns

`string`

#### Defined in

[request-topic.js:175](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L175)

___

### withABI

▸ **withABI**(`abi`): [`RequestTopic`](RequestTopic.md)\<`TRequestBody`, `TResultBody`\>

Returns a new RequestTopic instance with the same id and codecs, but with a new ABI.

#### Parameters

| Name | Type |
| :------ | :------ |
| `abi` | [`PassesABI`](../interfaces/PassesABI.md) |

#### Returns

[`RequestTopic`](RequestTopic.md)\<`TRequestBody`, `TResultBody`\>

#### Defined in

[request-topic.js:162](https://github.com/passes-org/passes/blob/949042d/packages/reqs/src/request-topic.js#L162)
