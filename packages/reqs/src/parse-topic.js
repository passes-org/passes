import { EnvelopeV0 } from './envelope-v0.js';

/**
 * Parse and return the topic from a raw request.
 * @param {Uint8Array} rawRequest
 * @returns {string}
 */
export function parseTopic(rawRequest) {
  const { topic } = EnvelopeV0.parseRequest(rawRequest);
  return topic;
}
