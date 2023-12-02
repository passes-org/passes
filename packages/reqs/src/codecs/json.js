import { String as StringCodec } from './string.js';

/**
 * @template TJson
 * A codec for json request/result bodies.
 * @type {import("../request-type").Codec<TJson>}
 */
export const Json = {
  encode: (value) => StringCodec.encode(JSON.stringify(value)),
  decode: (bytes) => JSON.parse(StringCodec.decode(bytes)),
};
