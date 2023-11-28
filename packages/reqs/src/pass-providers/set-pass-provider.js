import { RequestType } from "../request-type.js";

/**
 * Represents the body of a SetPassProvider request.
 * @typedef {Object} SetPassProviderRequestBody
 * @property {string} uri - The value to be used as the user's pass provider URI.
 * @property {string} [userkey] - A string used to identify the user (their ID, JWT, etc). This is ignored by the Polyfill flow, which instead relies on first-party cookies, but may be used by other implementations like web extensions.
 */

const requestTag = 'org.passes.set-pass-provider';

/**
 * Codec for encoding and decoding SetPassProviderRequestBody.
 * @type {import('../main.js').Codec<SetPassProviderRequestBody>}
 */
const requestBodyCodec = {
  encode: (body) => new TextEncoder().encode(JSON.stringify(body)),
  decode: (bytes) => JSON.parse(new TextDecoder().decode(bytes)),
};

/**
 * Codec for encoding and decoding result as boolean.
 * @type {import('../main.js').Codec<true>}
 */
const resultBodyCodec = {
  encode: () => undefined,
  decode: () => true,
};

/** 
 * RequestType for SetPassProvider requests.
 * @type {RequestType<SetPassProviderRequestBody, boolean>}
 */
export const setPassProvider = new RequestType({ requestTag, requestBodyCodec, resultBodyCodec });
