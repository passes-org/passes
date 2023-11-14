/**
 * An identity codec for Uint8Array request/result bodies.
 * @type {import("../request-type").Codec<Uint8Array>}
 */
const BytesCodec = {
  encode: (value) => value,
  decode: (bytes) => bytes,
};

export { BytesCodec as Bytes };