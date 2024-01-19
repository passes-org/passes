import { parseTopic } from "../parse-topic.js";
import { RequestTopic } from "../request-topic.js";
import { requestWithDefaultProvider } from "./request-with-default-provider.js";

/**
 * An error thrown when a request batch contains a request with a default provider.
 */
export class RequestBatchCannotContainRequestBatchError extends Error {
  name = 'RequestBatchCannotContainRequestBatchError';
  message = 'A request batch cannot contain a request batch (topic `org.passes.request-batch`). Instead of nesting, merge the requests into a single request batch.';
};

/**
 * An error thrown when a request batch contains a request with a default provider.
 */
export class RequestBatchCannotContainRequestWithDefaultProviderError extends Error {
  name = 'RequestBatchCannotContainRequestWithDefaultProviderError';
  message = 'A request batch cannot contain a request with a default provider (topic `org.passes.request-with-default-provider`). Instead, you may wrap the request batch in a request with default provider.';
};

/**
 * A codec for encoding and decoding a batch of raw requests.
 * @type {import("../request-topic.jsdoc.mjs").Codec<Uint8Array[]>}
 */
export const RequestBatchCodec = {
  encode: (requests) => {
    const requestTopics = requests.map((request) => parseTopic(request));

    // Request batches cannot be nested.
    if (requestTopics.includes(requestBatch.id)) throw new RequestBatchCannotContainRequestBatchError();
    // Requests with default providers are not allowed in a batch. Instead, they can wrap a batch.
    if (requestTopics.includes(requestWithDefaultProvider.id)) throw new RequestBatchCannotContainRequestWithDefaultProviderError();

    return BytesBatchCodec.encode(requests);
  },
  decode: (bytes) => BytesBatchCodec.decode(bytes),
};

/**
 * A low-level codec for encoding and decoding a batch of bytes (Uint8Arrays).
 * @type {import("../request-topic.jsdoc.mjs").Codec<Uint8Array[]>}
 * @private
 */
export const BytesBatchCodec = {
  encode: (entries) => {
    // Calculate total size
    const totalSize = entries.reduce((acc, bytes, index) => {
      const length = bytes.length;
      if (length > 0xFFFFFFFF) throw new Error(`BytesBatchCodec cannot encode entry of length ${length} at index ${index} (length limit is 0xFFFFFFFF)`);
      return acc + bytes.length + 4;
    }, 0);
    const result = new Uint8Array(totalSize);

    let offset = 0;
    entries.forEach((arr) => {
      // Write length (4 bytes)
      result[offset++] = (arr.length >> 24) & 0xFF;
      result[offset++] = (arr.length >> 16) & 0xFF;
      result[offset++] = (arr.length >> 8) & 0xFF;
      result[offset++] = arr.length & 0xFF;
      
      // Copy array
      result.set(arr, offset);
      offset += arr.length;
    });

    return result;
  },

  decode: (bytes) => {
    const arrays = [];

    let offset = 0;
    while (offset < bytes.length) {
      // Read length (4 bytes)
      let length = (bytes[offset] << 24) | (bytes[offset + 1] << 16) | (bytes[offset + 2] << 8) | bytes[offset + 3];
      offset += 4;

      // Extract array
      let arr = new Uint8Array(length);
      arr.set(bytes.subarray(offset, offset + length));
      arrays.push(arr);
      offset += length;
    }

    return arrays;
  },
};

/**
 * A request topic that can send a batch of raw requests.
 * 
 * @description A request batch is all-or-nothing: if the request is accepted, all requests in the batch are accepted. If the request is rejected, all requests in the batch are rejected.
 */
export const requestBatch = new RequestTopic({
  id: 'org.passes.request-batch',
  requestBodyCodec: RequestBatchCodec,
  resultBodyCodec: BytesBatchCodec,
});
