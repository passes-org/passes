import { parseTopic } from "../../parse-topic.js";
import { requestBatch } from "../request-batch.js";
import { requestWithDefaultProvider } from "../request-with-default-provider.js";

/**
 * @typedef {Object} UnwrappedRequest
 * @property {string} [defaultProvider] - The default provider, if one was specified.
 * @property {Uint8Array[]} requests - An array containing the unwrapped requests
 * @property {(acceptedResults: Uint8Array[]) => Promise<Uint8Array>} wrapResults - A function that wraps the accepted results in a single result to the original wrapper request.
 */

/**
 * Convenience function to unwrap a wrapper request.
 * @description There are two topics that wrap requests: org.passes.request-batch and org.passes.request-with-default-provider. This function unwraps both of them.
 * @param {Uint8Array} rawRequest
 * @returns {Promise<UnwrappedRequest>}
 */
export async function unwrap(rawRequest) {
  // Parse the outer request topic
  const requestTopic = parseTopic(rawRequest);

  // If the request is not wrapped, return it
  if (!isWrapperTopic(requestTopic)) {
    return {
      requests: [rawRequest],
      wrapResults: async ([acceptedResult]) => acceptedResult,
    };
  }

  // The request is wrapped...
  // If the request is wrapped in a request-with-default-provider, unwrap it
  if (requestTopic === requestWithDefaultProvider.id) {
    const decodedRequestWithDefaultProvider = await requestWithDefaultProvider.decodeRequest(rawRequest);
    const defaultProvider = requestTopic === requestWithDefaultProvider.id
      ? decodedRequestWithDefaultProvider.defaultProvider
      : undefined;
    const unwrapped = await unwrap(decodedRequestWithDefaultProvider.request);

    return {
      defaultProvider,
      requests: unwrapped.requests,
      wrapResults: async (acceptedResults) => requestWithDefaultProvider.encodeResult({
        status: 'accepted',
        body: await unwrapped.wrapResults(acceptedResults),
      }),
    };
  }

  // If the wrapped request is a request batch, unwrap its requests
  if (requestTopic === requestBatch.id) {
    const batchRequests = await requestBatch.decodeRequest(rawRequest);
    return {
      requests: batchRequests,
      wrapResults: async (acceptedResults) => requestBatch.encodeResult({
        status: 'accepted',
        body: acceptedResults,
      }),
    };
  }

  // If the request is wrapped in an unknown wrapper, throw an error
  throw new Error(`Unknown request wrapper: ${requestTopic}`);
}

/**
 * Utility function to determine if a topic is a wrapper topic.
 * @param {string} topic
 * @returns {boolean}
 */
function isWrapperTopic(topic) {
  return topic === requestBatch.id || topic === requestWithDefaultProvider.id;
}
