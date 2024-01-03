import { RequestTopic } from "../request-topic";

/**
 * A codec for encoding and decoding a batch of bytes (Uint8Arrays).
 * @type {import("../request-topic.jsdoc.mjs").Codec<Uint8Array[]>}
 */
export const BytesBatchCodec = {
  encode: (entries) => {
    // Calculate total size
    const totalSize = entries.reduce((acc, bytes) => {
      const length = bytes.length;
      if (length > 0xFFFFFFFF) throw new Error(`BytesBatchCodec cannot encode Uint8Array of length ${length} (length limit is 0xFFFFFFFF)`);
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
  requestBodyCodec: BytesBatchCodec,
  resultBodyCodec: BytesBatchCodec,
});
