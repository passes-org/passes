[@passes/reqs](../README.md) / [Exports](../modules.md) / Codec

# Interface: Codec\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [decode](Codec.md#decode)
- [encode](Codec.md#encode)

## Properties

### decode

• **decode**: (`bytes`: `Uint8Array`) => `T`

#### Type declaration

▸ (`bytes`): `T`

##### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

##### Returns

`T`

#### Defined in

[request-topic.jsdoc.mjs:17](https://github.com/passes-org/passes/blob/19b6ca1/packages/reqs/src/request-topic.jsdoc.mjs#L17)

___

### encode

• **encode**: (`value`: `T`) => `Uint8Array`

#### Type declaration

▸ (`value`): `Uint8Array`

##### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `T` |

##### Returns

`Uint8Array`

#### Defined in

[request-topic.jsdoc.mjs:16](https://github.com/passes-org/passes/blob/19b6ca1/packages/reqs/src/request-topic.jsdoc.mjs#L16)
