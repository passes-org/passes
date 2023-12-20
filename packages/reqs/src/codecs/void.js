/**
 * A codec for empty request/result bodies.
 * @type {import("../request-topic").Codec<void>}
 * @memberof Codecs
 */
export const Void = {
  encode: () => new Uint8Array(),
  decode: () => undefined,
};
