[@passes/reqs](../README.md) / [Modules](../modules.md) / [main](../modules/main.md) / Codec

# Interface: Codec\<T\>

[main](../modules/main.md).Codec

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [decode](main.Codec.md#decode)
- [encode](main.Codec.md#encode)

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

[main/request-topic.jsdoc.mjs:17](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.jsdoc.mjs#L17)

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

[main/request-topic.jsdoc.mjs:16](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/request-topic.jsdoc.mjs#L16)
