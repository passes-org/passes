import { requestWithDefaultProvider } from '../request-with-default-provider.js';

// Type Imports
/** @template TRequestBody @template TResultBody @typedef {import("../../request-topic").RequestTopic<TRequestBody, TResultBody>} RequestTopic  */
/** @template TResultBody @typedef {import("../../request-topic").RequestResult<TResultBody>} RequestResult  */
/** @typedef {import("../..").PassesABI} PassesABI  */

/**
 * @template TRequestBody
 * @template TResultBody
 * @typedef {Object} SendRequestWithDefaultProviderConfig
 * @property {RequestTopic<TRequestBody, TResultBody>} topic
 * @property {TRequestBody} body
 * @property {string} defaultProvider
 * @property {PassesABI} [abi]
 */

/**
 * Convenience function for sending a request with a default provider.
 * @template TRequestBody
 * @template TResultBody
 * @param {SendRequestWithDefaultProviderConfig<TRequestBody, TResultBody>} config
 * @returns {Promise<RequestResult<TResultBody>>}
 */
export async function sendRequestWithDefaultProvider({ topic, body, defaultProvider, abi }) {
  // Encode the request body using the provided topic
  const encodedRequest = await topic.encodeRequest(body);

  // Send the request, wrapping it in a request with default provider
  const requestWithDefaultProviderTopic = abi
    ? requestWithDefaultProvider.withABI(abi)
    : requestWithDefaultProvider;
  const wrappedResult = await requestWithDefaultProviderTopic.sendRequest({
    defaultProvider,
    request: encodedRequest,
  });

  // If the wrapped result is not accepted, return it
  if (wrappedResult.status !== 'accepted') {
    return wrappedResult;
  }

  // Unwrap the result and decode it using the provided topic
  const unwrappedRawResult = wrappedResult.body;
  const decodedResult = await topic.decodeResult(unwrappedRawResult);
  
  return decodedResult;
}
