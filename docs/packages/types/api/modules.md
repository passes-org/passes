[@passes/types](README.md) / Exports

# @passes/types

## Table of contents

### Interfaces

- [DocumentWithPasses](interfaces/DocumentWithPasses.md)
- [PassesABI](interfaces/PassesABI.md)

### Type Aliases

- [RequestResult](modules.md#requestresult)

## Type Aliases

### RequestResult

Ƭ **RequestResult**: `Object`

The result of a request call, sent from a pass engine to a relying party via `postMessage`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `result` | `Uint8Array` |
| `type` | ``"request-result"`` |

#### Defined in

[packages/types/index.d.ts:17](https://github.com/passes-org/passes/blob/76ab3ca/packages/types/index.d.ts#L17)
