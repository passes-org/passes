import { String as StringCodec } from './string.js';

/**
 * A codec for bigint request/result bodies.
 * @type {import("../main/request-topic.js").Codec<bigint>}
 * @memberof Codecs
 */
const BigIntCodec = {
  encode: (value) => StringCodec.encode(value.toString(16)),
  decode: (bytes) => BigInt(`0x${StringCodec.decode(bytes)}`),
};

export { BigIntCodec as BigInt };