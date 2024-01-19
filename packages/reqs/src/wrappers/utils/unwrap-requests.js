import { parseTopic } from "../../parse-topic.js";
import { requestBatch } from "../request-batch.js";
import { requestWithDefaultProvider } from "../request-with-default-provider.js";

/**
 * @typedef {Object} UnwrappedRequests
 * @property {string} [defaultProvider] - The default provider, if one was specified.
 * @property {Uint8Array[]} requests - An array containing the unwrapped requests
 */

/**
 * Convenience function to unwrap requests if they are wrapped in a request batch or request with a default provider.
 * @param {Uint8Array} rawRequest
 * @returns {Promise<UnwrappedRequests>}
 */
export async function unwrapRequests(rawRequest) {
  // Parse the outer request topic
  const requestTopic = parseTopic(rawRequest);

  // If the request is not wrapped, return it
  if (!isWrapperTopic(requestTopic)) {
    return { requests: [rawRequest] };
  }

  // The request is wrapped...
  // If the request is wrapped in a request-with-default-provider, unwrap it
  if (requestTopic === requestWithDefaultProvider.id) {
    const decodedRequestWithDefaultProvider = await requestWithDefaultProvider.decodeRequest(rawRequest);
    const defaultProvider = requestTopic === requestWithDefaultProvider.id
      ? decodedRequestWithDefaultProvider.defaultProvider
      : undefined;

    const { requests: unwrappedRequests } = await unwrapRequests(decodedRequestWithDefaultProvider.request);

    return {
      defaultProvider,
      requests: unwrappedRequests,
    };
  }

  // If the wrapped request is a request batch, unwrap its requests
  if (requestTopic === requestBatch.id) {
    const batchRequests = await requestBatch.decodeRequest(rawRequest);
    return { requests: batchRequests };
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
