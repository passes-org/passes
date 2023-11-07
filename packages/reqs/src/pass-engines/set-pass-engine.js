import { RequestTypeBuilder } from "../request-type-builder.js";

/**
 * Represents the body of a SetPassEngine request.
 * @typedef {Object} SetPassEngineRequestBody
 * @property {string} uri - The value to be used as the user's pass engine URI.
 * @property {string} [userkey] - A string used to identify the user (their ID, JWT, etc).
 */

const requestTag = 'https://passes.org/v1/set-pass-engine';

/**
 * Codec for encoding and decoding SetPassEngineRequestBody.
 * @type {import('../main').Codec<SetPassEngineRequestBody>}
 */
const requestBodyCodec = {
  encode: (body) => new TextEncoder().encode(JSON.stringify(body)),
  decode: (bytes) => JSON.parse(new TextDecoder().decode(bytes)),
};

/**
 * Codec for encoding and decoding result as boolean.
 * @type {import('../main').Codec<true>}
 */
const resultBodyCodec = {
  encode: () => undefined,
  decode: () => true,
};

/** 
 * RequestBuilder for SetPassEngine requests.
 * @type {RequestTypeBuilder<SetPassEngineRequestBody, boolean>}
 */
export const setPassEngine = new RequestTypeBuilder(requestTag, requestBodyCodec, resultBodyCodec);
