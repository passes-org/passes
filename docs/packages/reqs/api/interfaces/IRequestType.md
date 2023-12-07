[@passes/reqs](../README.md) / [Exports](../modules.md) / IRequestType

# Interface: IRequestType\<TRequestBody, TResultBody\>

## Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

## Table of contents

### Properties

- [decodeRequest](IRequestType.md#decoderequest)
- [decodeResult](IRequestType.md#decoderesult)
- [encodeRequest](IRequestType.md#encoderequest)
- [encodeResult](IRequestType.md#encoderesult)
- [requestTag](IRequestType.md#requesttag)
- [sendRequest](IRequestType.md#sendrequest)

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

[request-type.jsdoc.mjs:7](https://github.com/passes-org/passes/blob/9dd091e/packages/reqs/src/request-type.jsdoc.mjs#L7)

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

[request-type.jsdoc.mjs:9](https://github.com/passes-org/passes/blob/9dd091e/packages/reqs/src/request-type.jsdoc.mjs#L9)

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

[request-type.jsdoc.mjs:6](https://github.com/passes-org/passes/blob/9dd091e/packages/reqs/src/request-type.jsdoc.mjs#L6)

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

[request-type.jsdoc.mjs:8](https://github.com/passes-org/passes/blob/9dd091e/packages/reqs/src/request-type.jsdoc.mjs#L8)

___

### requestTag

• **requestTag**: `string`

#### Defined in

[request-type.jsdoc.mjs:5](https://github.com/passes-org/passes/blob/9dd091e/packages/reqs/src/request-type.jsdoc.mjs#L5)

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

[request-type.jsdoc.mjs:10](https://github.com/passes-org/passes/blob/9dd091e/packages/reqs/src/request-type.jsdoc.mjs#L10)
