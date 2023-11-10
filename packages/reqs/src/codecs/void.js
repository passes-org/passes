/**
 * A codec for empty request/result bodies.
 * @type {import("../request-type").Codec<void>}
 */
export const Void = {
  encode: () => new Uint8Array(),
  decode: () => undefined,
};
