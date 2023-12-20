import { Json, Void } from "../../codecs/index.js";
import { RequestTopic } from "../../request-topic.js";

/**
 * Represents the body of a ProvideTopics request.
 * @typedef {string[]} ProvideTopicsRequestBody - An array of topic IDs that the Topics Provider supports.
 */

/** 
 * Topic Providers should call `provideTopics.sendRequest` to announce the topics they support to the user's Pass Provider.
 * @type {RequestTopic<ProvideTopicsRequestBody, void>}
 * @memberof TopicProviders
 */
export const provideTopics = new RequestTopic({
  id: 'org.passes.provide-topics',
  requestBodyCodec: /** @type {import('../../index.js').Codec<ProvideTopicsRequestBody>} */ (Json),
  resultBodyCodec: Void,
});
