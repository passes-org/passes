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

[request-type.jsdoc.mjs:17](https://github.com/passes-org/passes/blob/9dd091e/packages/reqs/src/request-type.jsdoc.mjs#L17)

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

[request-type.jsdoc.mjs:16](https://github.com/passes-org/passes/blob/9dd091e/packages/reqs/src/request-type.jsdoc.mjs#L16)
