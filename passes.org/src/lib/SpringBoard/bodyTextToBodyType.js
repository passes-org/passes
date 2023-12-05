import { hexToBytes, isHex } from 'viem';
import { Codecs } from "@passes/reqs";

/**
 * Returns a representation of the given body text in the given codec's type.
 * @param {string} bodyText 
 * @param {import('@passes/reqs').Codec<any>} codec 
 * @returns {Promise<unknown>}
 */
export async function bodyTextToBodyType(bodyText, codec) {
  switch (codec) {
    case Codecs.BigInt:
      // eslint-disable-next-line no-undef
      return BigInt(bodyText);
    case Codecs.Boolean:
      return bodyText === 'true';
    case Codecs.Bytes:
      if (!isHex(bodyText)) throw new Error('Bytes must be a hex string');
      return hexToBytes(bodyText);
    case Codecs.Json:
      return JSON.parse(bodyText);
    case Codecs.Number:
      if (Number.isNaN(Number(bodyText))) throw new Error('Number must be a number');
      return Number(bodyText);
    case Codecs.String:
      return bodyText;
    case Codecs.Void:
      return undefined;
  }
}
