import { requestBatch } from "../request-batch.js";
import { requestWithDefaultProvider } from '../request-with-default-provider.js';

// Type Imports
/** @template TRequestBody @template TResultBody @typedef {import("../../request-topic").RequestTopic<TRequestBody, TResultBody>} RequestTopic  */
/** @template TResultBody @typedef {import("../../request-topic").RequestResult<TResultBody>} RequestResult  */
/** @typedef {import("../..").PassesABI} PassesABI  */

/**
 * @template TRequestBody, TResultBody
 * @typedef {Object} RequestBatchEntry
 * @property {RequestTopic<TRequestBody, TResultBody>} topic
 * @property {TRequestBody} body
 */

/**
 * @template {RequestBatchEntry<any, any>[]} TRequests
 * @typedef {Object} SendRequestBatchConfig
 * @property {[...TRequests]} requests
 * @property {PassesABI} [abi]
 */

/**
 * @template {RequestBatchEntry<any, any>[]} TRequests
 * @typedef {Object} SendBatchRequestWithDefaultProviderConfig
 * @property {[...TRequests]} requests
 * @property {string} defaultProvider
 * @property {PassesABI} [abi]
 */

/**
 * A convenience function for sending a batch of requests wrapped in a request with a default provider.
 * This returns an array of result bodies in the same order as the requests.
 * @template {RequestBatchEntry<any, any>[]} TRequests
 * @param {SendBatchRequestWithDefaultProviderConfig<TRequests>} config
 * @returns {Promise<RequestResult<{
 *   [K in keyof TRequests]: TRequests[K] extends RequestBatchEntry<any, infer TResultBody> ? TResultBody : never
 * }>>}
 */
export async function sendRequestBatchWithDefaultProvider({ requests, defaultProvider, abi }) {
  // Encode each request body using its topic
  const encodedRequests = [];
  for (const { topic, body } of requests) {
    encodedRequests.push(await topic.encodeRequest(body));
  }


  // Send the wrapped batch request
  const requestWithDefaultProviderTopic = abi
    ? requestWithDefaultProvider.withABI(abi)
    : requestWithDefaultProvider;
  const wrappedResult = await requestWithDefaultProviderTopic.sendRequest({
    defaultProvider,
    request: await requestBatch.encodeRequest(encodedRequests),
  });

  // If the wrapped result is not accepted, return it
  if (wrappedResult.status !== 'accepted') {
    return wrappedResult;
  }

  // Decode the inner batch request
  const batchResult = await requestBatch.decodeResult(wrappedResult.body);

  // If the wrapped result is not accepted, return it
  if (batchResult.status !== 'accepted') {
    return batchResult;
  }

  // Decode each result body using its topic
  const decodedResultBodies =
    /** @type {{ [K in keyof TRequests]: TRequests[K] extends RequestBatchEntry<any, infer TResultBody> ? TResultBody : never }} */
    ([]);
  for (const [index, rawResult] of batchResult.body.entries()) {
    // Decode the wrapped result
    const decodedWrappedResult = await requests[index].topic.decodeResult(rawResult);

    // If the wrapped result is not accepted, return an exception result...
    // IMPORTANT: Request batches are all-or-nothing. An outer result of 'accepted' with any inner results of 'rejected' is an invariant violation.
    if (decodedWrappedResult.status !== 'accepted') {
      return {
        status: 'exception',
        message: 'Invariant violation: request batch with status "accepted" contained an inner result with status !== "accepted"',
      };
    }

    // ...otherwise, add the decoded result body to the array
    decodedResultBodies.push(decodedWrappedResult.body);
  }

  return {
    status: 'accepted',
    body: decodedResultBodies,
  };
}
