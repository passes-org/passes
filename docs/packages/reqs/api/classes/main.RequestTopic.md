[@passes/reqs](../README.md) / [Modules](../modules.md) / [main](../modules/main.md) / RequestTopic

# Class: RequestTopic\<TRequestBody, TResultBody\>

[main](../modules/main.md).RequestTopic

Builds an Envelope-v0x00 request topic interface.

**`Implements`**

## Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

## Hierarchy

- **`RequestTopic`**

  ↳ [`SignedRequestTopic`](main.SignedRequestTopic.md)

## Table of contents

### Constructors

- [constructor](main.RequestTopic.md#constructor)

### Properties

- [abi](main.RequestTopic.md#abi)
- [id](main.RequestTopic.md#id)
- [requestBodyCodec](main.RequestTopic.md#requestbodycodec)
- [resultBodyCodec](main.RequestTopic.md#resultbodycodec)
- [Errors](main.RequestTopic.md#errors)

### Methods

- [decodeRequest](main.RequestTopic.md#decoderequest)
- [decodeResult](main.RequestTopic.md#decoderesult)
- [encodeRequest](main.RequestTopic.md#encoderequest)
- [encodeResult](main.RequestTopic.md#encoderesult)
- [resolveABI](main.RequestTopic.md#resolveabi)
- [sendRequest](main.RequestTopic.md#sendrequest)
- [toString](main.RequestTopic.md#tostring)

## Constructors

### constructor

• **new RequestTopic**\<`TRequestBody`, `TResultBody`\>(`params`): [`RequestTopic`](main.RequestTopic.md)\<`TRequestBody`, `TResultBody`\>

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

[`RequestTopic`](main.RequestTopic.md)\<`TRequestBody`, `TResultBody`\>

#### Defined in

[main/request-topic.js:33](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L33)

## Properties

### abi

• **abi**: [`PassesABI`](../interfaces/main.PassesABI.md)

#### Defined in

[main/request-topic.js:37](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L37)

___

### id

• **id**: `string`

#### Defined in

[main/request-topic.js:34](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L34)

___

### requestBodyCodec

• **requestBodyCodec**: `Codec`\<`TRequestBody`\>

#### Defined in

[main/request-topic.js:35](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L35)

___

### resultBodyCodec

• **resultBodyCodec**: `Codec`\<`TResultBody`\>

#### Defined in

[main/request-topic.js:36](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L36)

___

### Errors

▪ `Static` **Errors**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `ABI_NOT_AVAILABLE` | typeof `RequestTopicABINotAvailable` |
| `INCORRECT_TOPIC` | typeof `RequestTopicIncorrectTopicError` |

#### Defined in

[main/request-topic.js:112](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L112)

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

[main/request-topic.js:59](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L59)

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

[main/request-topic.js:86](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L86)

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

[main/request-topic.js:46](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L46)

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

[main/request-topic.js:71](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L71)

___

### resolveABI

▸ **resolveABI**(): [`PassesABI`](../interfaces/main.PassesABI.md)

A helper for resolving the PassesABI. If the instance has no abi property, it returns document.passes if it's available.

#### Returns

[`PassesABI`](../interfaces/main.PassesABI.md)

**`Throws`**

- document.passes must be available if `abi` is not passed.

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

#### Defined in

[main/request-topic.js:105](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L105)

___

### toString

▸ **toString**(): `string`

Returns a string representation of the request topic.

#### Returns

`string`

#### Defined in

[main/request-topic.js:162](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.js#L162)
