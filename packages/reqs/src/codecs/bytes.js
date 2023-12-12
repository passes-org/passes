/**
 * An identity codec for Uint8Array request/result bodies.
 * @type {import("../request-topic").Codec<Uint8Array>}
 * @memberof Codecs
 */
const BytesCodec = {
  encode: (value) => value,
  decode: (bytes) => bytes,
};

export { BytesCodec as Bytes };