/**
 * Topic and Pass Providers should call `sendResult` when they have a result to send back to the requesting app.
 * @template TRequestBody
 * @template TResultBody
 * @param {import("../request-topic").RequestTopic<TRequestBody, TResultBody>} requestTopic
 * @param {import("../request-topic").RequestResult<TResultBody>} result
 * @param {string} [origin='*'] - The origin to send the result to. Defaults to '*'.
 * @memberof Messaging
 */
export async function sendResult(requestTopic, result, origin = '*') {
  if (typeof window === 'undefined') throw new Error('sendResult is only available in the browser');
  const requester = window.opener ?? window.parent;
  if (!requester) throw new Error('sendResult must be called from a popup or iframe');

  /** @type {import("../browser-types.jsdoc.mjs").ResultMessage} */
  const resultMessage = {
    type: 'org.passes.messaging.result',
    result: await requestTopic.encodeResult(result),
  };

  requester.postMessage(resultMessage, origin);
}