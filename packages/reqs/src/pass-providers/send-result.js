/**
 * @template TRequestBody
 * @template TResultBody
 * @param {import("../request-type").RequestType<TRequestBody, TResultBody>} requestType
 * @param {import("../request-type").RequestResult<TResultBody>} result
 */
export async function sendResult(requestType, result) {
  if (typeof window === 'undefined') throw new Error('sendResult is only available in the browser');
  const requester = window.opener ?? window.parent;
  if (!requester) throw new Error('sendResult must be called from a popup or iframe');

  /** @type {import("../browser-types.jsdoc.mjs").TransportEncodedRequestResult} */
  const resultMessage = {
    type: 'request-result',
    result: await requestType.encodeResult(result),
  };

  requester.postMessage(resultMessage, '*');
}