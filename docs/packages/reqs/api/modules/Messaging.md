[@passes/reqs](../README.md) / [Exports](../modules.md) / Messaging

# Namespace: Messaging

## Table of contents

### Interfaces

- [RequestMessage](../interfaces/Messaging.RequestMessage.md)

### Functions

- [awaitRequest](Messaging.md#awaitrequest)
- [sendResult](Messaging.md#sendresult)

## Functions

### awaitRequest

▸ **awaitRequest**(): `Promise`\<[`RequestMessage`](../interfaces/Messaging.RequestMessage.md)\>

Topic and Pass Providers should call `awaitRequest` when opened by a requesting app to receive the Pass Request.
Under the hood, it sends a connect message to the requesting app window and returns a promise that resolves with the request when it's received.

#### Returns

`Promise`\<[`RequestMessage`](../interfaces/Messaging.RequestMessage.md)\>

**`Memberof`**

Messaging

#### Defined in

[messaging/await-request.js:14](https://github.com/passes-org/passes/blob/6f5f306/packages/reqs/src/messaging/await-request.js#L14)

___

### sendResult

▸ **sendResult**\<`TRequestBody`, `TResultBody`\>(`requestTopic`, `result`, `origin?`): `Promise`\<`void`\>

Topic and Pass Providers should call `sendResult` when they have a result to send back to the requesting app.

#### Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `requestTopic` | [`RequestTopic`](../classes/RequestTopic.md)\<`TRequestBody`, `TResultBody`\> | `undefined` |  |
| `result` | `RequestResult`\<`TResultBody`\> | `undefined` |  |
| `origin?` | `string` | `'*'` | The origin to send the result to. Defaults to '*'. |

#### Returns

`Promise`\<`void`\>

**`Memberof`**

Messaging

#### Defined in

[messaging/send-result.js:10](https://github.com/passes-org/passes/blob/6f5f306/packages/reqs/src/messaging/send-result.js#L10)
