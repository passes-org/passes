[@passes/reqs](../README.md) / [Exports](../modules.md) / RequestRouter

# Class: RequestRouter\<TRoute\>

## Type parameters

| Name |
| :------ |
| `TRoute` |

## Table of contents

### Constructors

- [constructor](RequestRouter.md#constructor)

### Properties

- [supportMap](RequestRouter.md#supportmap)

### Methods

- [route](RequestRouter.md#route)

## Constructors

### constructor

• **new RequestRouter**\<`TRoute`\>(`supportMap`): [`RequestRouter`](RequestRouter.md)\<`TRoute`\>

#### Type parameters

| Name |
| :------ |
| `TRoute` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `supportMap` | `SupportMap`\<`TRoute`\> |

#### Returns

[`RequestRouter`](RequestRouter.md)\<`TRoute`\>

#### Defined in

[request-router.js:12](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/request-router.js#L12)

## Properties

### supportMap

• **supportMap**: `SupportMap`\<`TRoute`\>

#### Defined in

[request-router.js:13](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/request-router.js#L13)

## Methods

### route

▸ **route**(`rawRequest`): `TRoute`

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawRequest` | `Uint8Array` |

#### Returns

`TRoute`

#### Defined in

[request-router.js:20](https://github.com/passes-org/passes/blob/9039062/packages/reqs/src/request-router.js#L20)
