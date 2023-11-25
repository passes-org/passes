import type { Codec } from '../../../../../packages/reqs';
import { Codecs } from '../../../../../packages/reqs';

export function detectDecoders(body: Uint8Array) {
  const decoders: (keyof typeof Codecs)[] = [];
  if (decodeSucceeds(body, Codecs.BigInt)) decoders.push('BigInt');
  if (decodeSucceeds(body, Codecs.String)) decoders.push('String');
  if (decodeSucceeds(body, Codecs.Json)) decoders.push('Json');
  if (decodeSucceeds(body, Codecs.Number)) decoders.push('Number');
  decoders.push('Bytes');
  return decoders;
}

function decodeSucceeds(raw: Uint8Array, codec: Codec<any>): boolean {
  try {
    codec.decode(raw);
    return true;
  } catch {
    return false;
  }
}