[@passes/reqs](../README.md) / [Exports](../modules.md) / SignedAcceptedResult

# Interface: SignedAcceptedResult\<T\>

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [body](SignedAcceptedResult.md#body)
- [signed](SignedAcceptedResult.md#signed)
- [status](SignedAcceptedResult.md#status)

## Properties

### body

• **body**: `T`

The body of the result.

#### Defined in

[signed-request-topic.jsdoc.mjs:5](https://github.com/passes-org/passes/blob/d270bec/packages/reqs/src/signed-request-topic.jsdoc.mjs#L5)

___

### signed

• **signed**: [`SignedBodyWrapperHeader`](SignedBodyWrapperHeader.md)

The signature and public key of the signed result.

#### Defined in

[signed-request-topic.jsdoc.mjs:6](https://github.com/passes-org/passes/blob/d270bec/packages/reqs/src/signed-request-topic.jsdoc.mjs#L6)

___

### status

• **status**: ``"accepted"``

The status of the result when accepted.

#### Defined in

[signed-request-topic.jsdoc.mjs:4](https://github.com/passes-org/passes/blob/d270bec/packages/reqs/src/signed-request-topic.jsdoc.mjs#L4)
