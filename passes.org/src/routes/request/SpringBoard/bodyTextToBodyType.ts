import { hexToBytes, isHex } from 'viem';
import { Codecs, type Codec } from "../../../../../packages/reqs";

export async function bodyTextToBodyType(bodyText: string, codec: Codec<any>): Promise<unknown> {
  switch (codec) {
    case Codecs.BigInt:
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
