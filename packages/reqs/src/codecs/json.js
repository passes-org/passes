import { String as StringCodec } from './string.js';

/**
 * A codec for json request/result bodies.
 * @type {import("../request-topic.js").Codec<unknown>}
 * @memberof Codecs
 */
export const Json = {
  encode: (value) => StringCodec.encode(JSON.stringify(value)),
  decode: (bytes) => JSON.parse(StringCodec.decode(bytes)),
};
