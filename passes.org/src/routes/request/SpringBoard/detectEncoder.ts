import type { Codec } from '../../../../../packages/reqs';
import { Codecs } from '../../../../../packages/reqs';

export function detectEncoder(body: Uint8Array): keyof typeof Codecs {
  if (encodeSucceeds(body, Codecs.Json)) return 'Json';
  if (encodeSucceeds(body, Codecs.BigInt)) return 'BigInt';
  if (encodeSucceeds(body, Codecs.Number)) return 'Number';
  return 'String';
}

function encodeSucceeds<T>(value: T, codec: Codec<any>): boolean {
  try {
    codec.encode(value);
    return true;
  } catch {
    return false;
  }
}