// Assuming that the relative imports will be the same in JS
import { EnvelopeV0x00 } from "../envelope-v0x00.js";
import { RequestBuilder } from "../request-builder.js";

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
const requestCodec = {
  encode: (body) => new Uint8Array([
    ...EnvelopeV0x00.encodeRequestHeader(requestTag),
    ...new TextEncoder().encode(JSON.stringify(body)),
  ]),
  decode: (bytes) => {
    const { tag, body } = EnvelopeV0x00.parseRequest(bytes);
    // FIXME: Verify tag === requestTag
    const bodyText = new TextDecoder().decode(body);
    return JSON.parse(bodyText);
  }
};

/**
 * Codec for encoding and decoding result as boolean.
 * @type {import('../main').Codec<boolean>}
 */
const resultCodec = {
  encode: () => new Uint8Array([
    EnvelopeV0x00.encodeResultStatusByte('accepted'),
  ]),
  decode: (bytes) => {
    const { status } = EnvelopeV0x00.parseResult(bytes);
    return status === 'accepted';
  }
};

/** 
 * RequestBuilder for SetPassEngine requests.
 * @type {RequestBuilder<SetPassEngineRequestBody, boolean>}
 */
export const setPassEngine = new RequestBuilder(requestCodec, resultCodec);
