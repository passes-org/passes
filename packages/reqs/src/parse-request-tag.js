import { EnvelopeV0 } from './envelope-v0.js';

/** @param {Uint8Array} rawRequest */
export function parseRequestTag(rawRequest) {
  const { tag: requestTag } = EnvelopeV0.parseRequest(rawRequest);
  return requestTag;
}
