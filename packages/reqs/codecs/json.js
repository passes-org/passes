import { String as StringCodec } from './string.js';

/**
 * @template TJson
 * A codec for json request/result bodies.
 * @type {import("../main/request-topic.js").Codec<TJson>}
 * @memberof Codecs
 */
export const Json = {
  encode: (value) => StringCodec.encode(JSON.stringify(value)),
  decode: (bytes) => JSON.parse(StringCodec.decode(bytes)),
};
