/**
 * A codec for string request/result bodies.
 * @type {import("../main/request-topic").Codec<string>}
 * @memberof Codecs
 */
const StringCodec = {
  encode: (value) => new TextEncoder().encode(value),
  decode: (bytes) => new TextDecoder().decode(bytes),
};

export { StringCodec as String };