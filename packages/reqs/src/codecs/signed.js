/**
 * @template T
 * @typedef Signed
 * @property {T} body 
 * @property {JsonWebKey} publicKey
 * @property {Uint8Array} signature
 */

import { formatRLE, parseRLE } from "../utils/rle";
import { Json as JsonCodec } from "./json";

/**
 * @template T
 * A wrapper codec for signed request/result bodies.
 * @param {import("../request-type").Codec<T>} codec
 * @returns {import("../request-type").Codec<Signed<T>>}
 */
export const Signed = (codec) => ({
  encode: ({ body, publicKey, signature }) => {
    /** @type {import("../request-type").Codec<JsonWebKey>} */
    const PubkeyCodec = JsonCodec;
    const encodedPubKey = formatRLE(PubkeyCodec.encode(publicKey), { length: 2 });
    const encodedSignature = formatRLE(signature, { length: 2 });
    const encodedBody = codec.encode(body);

    return new Uint8Array([
      ...encodedPubKey,
      ...encodedSignature,
      // body
      ...encodedBody,
    ]);
  },
  decode: (bytes) => {
    const { range: encodedPubkey, remainder: parsePubkeyRemainder } = parseRLE(bytes, 0, { length: 2 });
    const { range: signature, remainder: encodedBody } = parseRLE(parsePubkeyRemainder, 0, { length: 2 });

    /** @type {import("../request-type").Codec<JsonWebKey>} */
    const PubkeyCodec = JsonCodec;
    const publicKey = PubkeyCodec.decode(encodedPubkey);
    
    return {
      body: codec.decode(encodedBody),
      publicKey,
      signature,
    };
  },
});
