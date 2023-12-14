[@passes/reqs](../README.md) / [Exports](../modules.md) / Messaging

# Namespace: Messaging

Namespace containing APIs for messaging between a requesting app and a Topic or Pass Provider.
 Messaging

## Table of contents

### Functions

- [awaitRequest](Messaging.md#awaitrequest)
- [sendResult](Messaging.md#sendresult)

## Functions

### awaitRequest

▸ **awaitRequest**(): `Promise`\<`Uint8Array`\>

Topic and Pass Providers should call `awaitRequest` when opened by a requesting app to receive the Pass Request.
Under the hood, it sends a connect message to the requesting app window and returns a promise that resolves with the request when it's received.

#### Returns

`Promise`\<`Uint8Array`\>

**`Memberof`**

Messaging

#### Defined in

[messaging/await-request.js:7](https://github.com/passes-org/passes/blob/a56270b/packages/reqs/src/messaging/await-request.js#L7)

___

### sendResult

▸ **sendResult**\<`TRequestBody`, `TResultBody`\>(`requestTopic`, `result`): `Promise`\<`void`\>

Topic and Pass Providers should call `sendResult` when they have a result to send back to the requesting app.

#### Type parameters

| Name |
| :------ |
| `TRequestBody` |
| `TResultBody` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `requestTopic` | [`RequestTopic`](../classes/RequestTopic.md)\<`TRequestBody`, `TResultBody`\> |
| `result` | `RequestResult`\<`TResultBody`\> |

#### Returns

`Promise`\<`void`\>

**`Memberof`**

Messaging

#### Defined in

[messaging/send-result.js:9](https://github.com/passes-org/passes/blob/a56270b/packages/reqs/src/messaging/send-result.js#L9)
