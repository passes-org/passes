import { toHex } from 'viem';
import type { Codec } from '../../../../../packages/reqs';
import { Codecs, RequestType, parseRequestTag } from "../../../../../packages/reqs";

export async function requestBodyToDisplayString(rawRequest: Uint8Array, codec: Codec<any>): Promise<string> {
  const requestType = new RequestType({
    requestTag: parseRequestTag(rawRequest),
    requestBodyCodec: codec,
    resultBodyCodec: Codecs.Void,
  });
  const requestBody = await requestType.decodeRequest(rawRequest);
  return toDisplayString(requestBody, codec);
}

export async function resultBodyToDisplayString(rawRequest: Uint8Array, codec: Codec<any>): Promise<string> {
  const requestType = new RequestType({
    requestTag: parseRequestTag(rawRequest),
    requestBodyCodec: Codecs.Void,
    resultBodyCodec: codec,
  });
  const result = await requestType.decodeResult(rawRequest);
  if (result.status !== 'accepted') throw new Error('cannot resultBodyToDisplayString a result that is not accepted');
  return toDisplayString(result.body, codec);
}

function toDisplayString(body: unknown, codec: Codec<any>): string {
  console.log('codec', codec);
  console.log('body', body);
  console.log('body', String(body));
  switch (codec) {
    case Codecs.BigInt:
      return toHex(body as bigint);
    case Codecs.Boolean:
      return body ? 'true' : 'false';
    case Codecs.Bytes:
      return toHex(body as Uint8Array);
    case Codecs.Json:
      return JSON.stringify(body, null, 2);
    case Codecs.Number:
      return String(body);
    case Codecs.String:
      console.log('just return body', body);
      return body as string;
    case Codecs.Void:
      return '(empty)';
    default:
      return '(unknown)';
  }
}