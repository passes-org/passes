import { Codecs } from "../codecs/index.js";
import { RequestTopic } from "../request-topic.js";

/**
 * Represents the body of a ProvidePass request.
 * @typedef {Object} ProvidePassRequestBody
 * @property {string} uri - The value to be used as the user's Pass Provider URI.
 * @property {string} [principal] - A string used to identify the user to their Pass Provider (their ID, JWT, etc). This is ignored by the Polyfill flow, which instead relies on first-party cookies, but may be used by other implementations like web extensions.
 */

/** 
 * Pass Providers should call `providePass.sendRequest` to request to become the user's Pass Provider.
 * Best practice is to send this request when the user signs into the Pass Provider's website.
 * @type {RequestTopic<ProvidePassRequestBody, void>}
 * @memberof PassProviders
 */
export const providePass = new RequestTopic({
  id: 'org.passes.provide-pass',
  requestBodyCodec: /** @type {import('../main.js').Codec<ProvidePassRequestBody>} */ (Codecs.Json),
  resultBodyCodec: Codecs.Void,
});
