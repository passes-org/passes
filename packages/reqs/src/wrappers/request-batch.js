import { parseTopic } from "..";
import { RequestTopic } from "../request-topic";
import { requestWithDefaultProvider } from "./request-with-default-provider";

/**
 * An error thrown when a request batch contains a request with a default provider.
 */
export class RequestBatchCannotContainRequestWithDefaultProviderError extends Error {
  name = 'RequestBatchCannotContainRequestWithDefaultProviderError'
  message = 'A request batch cannot contain a request with a default provider (topic `org.passes.request-with-default-provider`). Instead, you may wrap the request batch in a request with default provider.';
}

/**
 * A codec for encoding and decoding a batch of raw requests.
 * @type {import("../request-topic.jsdoc.mjs").Codec<Uint8Array[]>}
 */
export const RequestBatchCodec = {
  encode: (requests) => {
    // Requests with default providers are not allowed in a batch. Instead, they can wrap a batch.
    const containsRequestWithDefaultProvider = requests.some((request) => parseTopic(request) === requestWithDefaultProvider.id);
    if (containsRequestWithDefaultProvider) throw new RequestBatchCannotContainRequestWithDefaultProviderError();

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
 */
export const requestBatch = new RequestTopic({
  id: 'org.passes.request-batch',
  requestBodyCodec: RequestBatchCodec,
  resultBodyCodec: RequestBatchCodec,
});
