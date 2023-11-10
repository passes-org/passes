import { String as StringCodec } from "./string";

/**
 * A codec for bigint request/result bodies.
 * @type {import("../request-type").Codec<bigint>}
 */
const BigIntCodec = {
  encode: (value) => StringCodec.encode(value.toString(16)),
  decode: (bytes) => BigInt(`0x${StringCodec.decode(bytes)}`),
};

export { BigIntCodec as BigInt };