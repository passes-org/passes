[@passes/reqs](../README.md) / [Modules](../modules.md) / [main](../modules/main.md) / SignedAcceptedResult

# Interface: SignedAcceptedResult\<T\>

[main](../modules/main.md).SignedAcceptedResult

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [body](main.SignedAcceptedResult.md#body)
- [signed](main.SignedAcceptedResult.md#signed)
- [status](main.SignedAcceptedResult.md#status)

## Properties

### body

• **body**: `T`

The body of the result.

#### Defined in

[main/signed-request-topic.jsdoc.mjs:5](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/signed-request-topic.jsdoc.mjs#L5)

___

### signed

• **signed**: [`SignedBodyWrapperHeader`](main.SignedBodyWrapperHeader.md)

The signature and public key of the signed result.

#### Defined in

[main/signed-request-topic.jsdoc.mjs:6](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/signed-request-topic.jsdoc.mjs#L6)

___

### status

• **status**: ``"accepted"``

The status of the result when accepted.

#### Defined in

[main/signed-request-topic.jsdoc.mjs:4](https://github.com/passes-org/passes/blob/4a9c88f/packages/reqs/main/signed-request-topic.jsdoc.mjs#L4)
