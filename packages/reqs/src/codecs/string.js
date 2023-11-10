/**
 * A codec for string request/result bodies.
 * @type {import("../request-type").Codec<string>}
 */
const StringCodec = {
  encode: (value) => new TextEncoder().encode(value),
  decode: (bytes) => new TextDecoder().decode(bytes),
};

export { StringCodec as String };