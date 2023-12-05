import { Codecs } from "../main.js";
import { RequestType } from "../request-type.js";

/**
 * Represents the body of a SetPassProvider request.
 * @typedef {Object} SetPassProviderRequestBody
 * @property {string} uri - The value to be used as the user's pass provider URI.
 * @property {string} [principal] - A string used to identify the user to their pass provder (their ID, JWT, etc). This is ignored by the Polyfill flow, which instead relies on first-party cookies, but may be used by other implementations like web extensions.
 */

/** 
 * RequestType for SetPassProvider requests.
 * @type {RequestType<SetPassProviderRequestBody, void>}
 */
export const setPassProvider = new RequestType({
  requestTag: 'org.passes.set-pass-provider',
  requestBodyCodec: /** @type {import('../main.js').Codec<SetPassProviderRequestBody>} */ (Codecs.Json),
  resultBodyCodec: Codecs.Void,
});
