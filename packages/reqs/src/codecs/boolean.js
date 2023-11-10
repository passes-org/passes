/**
 * A codec for boolean request/result bodies.
 * @type {import("../request-type").Codec<boolean>}
 */
const BooleanCodec = {
  encode: (value) => new Uint8Array([value ? 1 : 0]),
  decode: (bytes) => bytes.at(0) === 1,
};

export { BooleanCodec as Boolean };