import { toHex } from 'viem';
import { RequestTopic, parseTopic } from "../../../../packages/reqs";
import * as Codecs from "../../../../packages/reqs/src/codecs";

/**
 * Returns a string representation of the given request body.
 * @param {Uint8Array} rawRequest 
 * @param {import('@passes/reqs').Codec<any>} codec 
 * @returns {Promise<string>}
 */
export async function requestBodyToDisplayString(rawRequest, codec) {
  const requestTopic = new RequestTopic({
    id: parseTopic(rawRequest),
    requestBodyCodec: codec,
    resultBodyCodec: Codecs.Void,
  });
  const requestBody = await requestTopic.decodeRequest(rawRequest);
  return toDisplayString(requestBody, codec);
}

/**
 * Returns a string representation of the given result body.
 * @param {Uint8Array} rawResult 
 * @param {import('@passes/reqs').Codec<any>} codec 
 * @returns {Promise<string>}
 */
export async function resultBodyToDisplayString(rawResult, codec) {
  const requestTopic = new RequestTopic({
    id: '[ephemeral]',
    requestBodyCodec: Codecs.Void,
    resultBodyCodec: codec,
  });
  const result = await requestTopic.decodeResult(rawResult);
  if (result.status !== 'accepted') throw new Error('cannot resultBodyToDisplayString a result that is not accepted');
  return toDisplayString(result.body, codec);
}

/**
 * Returns a string representation of the given body for display.
 * @param {unknown} body 
 * @param {import('@passes/reqs').Codec<any>} codec 
 * @returns {string}
 */
function toDisplayString(body, codec) {
  switch (codec) {
    case Codecs.BigInt:
      return toHex(/**@type {bigint}*/ (body));
    case Codecs.Boolean:
      return body ? 'true' : 'false';
    case Codecs.Bytes:
      return toHex(/**@type {Uint8Array}*/ (body));
    case Codecs.Json:
      return JSON.stringify(body, null, 2);
    case Codecs.Number:
      return String(body);
    case Codecs.String:
      return /**@type {string}*/ (body);
    case Codecs.Void:
      return '(empty)';
    default:
      return '(unknown)';
  }
}