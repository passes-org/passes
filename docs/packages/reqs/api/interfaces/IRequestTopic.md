[@passes/reqs](../README.md) / [Exports](../modules.md) / IRequestTopic

# Interface: IRequestTopic\<TRequestBody, TResultBody\>

## Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

## Table of contents

### Properties

- [decodeRequest](IRequestTopic.md#decoderequest)
- [decodeResult](IRequestTopic.md#decoderesult)
- [encodeRequest](IRequestTopic.md#encoderequest)
- [encodeResult](IRequestTopic.md#encoderesult)
- [id](IRequestTopic.md#id)
- [sendRequest](IRequestTopic.md#sendrequest)

## Properties

### decodeRequest

• **decodeRequest**: (`bytes`: `Uint8Array`) => `Promise`\<`TRequestBody`\>

#### Type declaration

▸ (`bytes`): `Promise`\<`TRequestBody`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

##### Returns

`Promise`\<`TRequestBody`\>

#### Defined in

[request-topic.jsdoc.mjs:7](https://github.com/passes-org/passes/blob/6f5f306/packages/reqs/src/request-topic.jsdoc.mjs#L7)

___

### decodeResult

• **decodeResult**: (`bytes`: `Uint8Array`) => `Promise`\<[`RequestResult`](../modules.md#requestresult)\<`TResultBody`\>\>

#### Type declaration

▸ (`bytes`): `Promise`\<[`RequestResult`](../modules.md#requestresult)\<`TResultBody`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

##### Returns

`Promise`\<[`RequestResult`](../modules.md#requestresult)\<`TResultBody`\>\>

#### Defined in

[request-topic.jsdoc.mjs:9](https://github.com/passes-org/passes/blob/6f5f306/packages/reqs/src/request-topic.jsdoc.mjs#L9)

___

### encodeRequest

• **encodeRequest**: (`body`: `TRequestBody`) => `Promise`\<`Uint8Array`\>

#### Type declaration

▸ (`body`): `Promise`\<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | `TRequestBody` |

##### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[request-topic.jsdoc.mjs:6](https://github.com/passes-org/passes/blob/6f5f306/packages/reqs/src/request-topic.jsdoc.mjs#L6)

___

### encodeResult

• **encodeResult**: (`body`: [`RequestResult`](../modules.md#requestresult)\<`TResultBody`\>) => `Promise`\<`Uint8Array`\>

#### Type declaration

▸ (`body`): `Promise`\<`Uint8Array`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `body` | [`RequestResult`](../modules.md#requestresult)\<`TResultBody`\> |

##### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[request-topic.jsdoc.mjs:8](https://github.com/passes-org/passes/blob/6f5f306/packages/reqs/src/request-topic.jsdoc.mjs#L8)

___

### id

• **id**: `string`

#### Defined in

[request-topic.jsdoc.mjs:5](https://github.com/passes-org/passes/blob/6f5f306/packages/reqs/src/request-topic.jsdoc.mjs#L5)

___

### sendRequest

• **sendRequest**: (`requestBody`: `TRequestBody`) => `Promise`\<[`RequestResult`](../modules.md#requestresult)\<`TResultBody`\>\>

#### Type declaration

▸ (`requestBody`): `Promise`\<[`RequestResult`](../modules.md#requestresult)\<`TResultBody`\>\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `requestBody` | `TRequestBody` |

##### Returns

`Promise`\<[`RequestResult`](../modules.md#requestresult)\<`TResultBody`\>\>

#### Defined in

[request-topic.jsdoc.mjs:10](https://github.com/passes-org/passes/blob/6f5f306/packages/reqs/src/request-topic.jsdoc.mjs#L10)
