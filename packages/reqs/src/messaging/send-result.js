/**
 * Topic and Pass Providers should call `sendResult` when they have a result to send back to the requesting app.
 * @param {Uint8Array} result - The encoded result to send back to the requesting app.
 * @param {string} [origin='*'] - The origin to send the result to. Defaults to '*'.
 * @memberof Messaging
 */
export function sendResult(result, origin = '*') {
  if (typeof window === 'undefined') throw new Error('sendResult is only available in the browser');
  const requester = window.opener ?? window.parent;
  if (!requester) throw new Error('sendResult must be called from a popup or iframe');

  /** @type {import("../browser-types.jsdoc.mjs").ResultMessage} */
  const resultMessage = {
    type: 'org.passes.messaging.result',
    result: result,
  };

  requester.postMessage(resultMessage, origin);
}