import { PASSES_BASE_URL } from "./constants";
import { SUPPORTED_REQUEST_TAGS } from "./request-tag-support";
import { getRequestTag, openWindowWithPost } from "./utils";

/**
 * Provides a polyfill implementation of the document.passes.request ABI using a POST request to passes.org in a new window which forwards the end user to their pass engine to handle the request.
 * 
 * @param {Uint8Array} raw 
 * @returns {Promise<Uint8Array>}
 */
export async function request(raw) {
  // Get the request tag to check if it has built-in support
  const requestTag = getRequestTag(raw);

  // Match and handle any request tags with built-in support
  const builtinSupportFn = SUPPORTED_REQUEST_TAGS[requestTag];
  if (builtinSupportFn) {
    return builtinSupportFn(raw);
  }

  // Create request context params
  const formData = new FormData();
  formData.set('request', new Blob([raw]));
  const passEngineWindow = openWindowWithPost(`${PASSES_BASE_URL}/request`, formData);

  // Create a promise and resolver fn which will be used to return a promise that gets resolved from handleMessage once there's a result
  /** @type {(result: Uint8Array) => void} */
  let resolveResultPromise;
  /** @type {Promise<Uint8Array>} */
  const resultPromise = new Promise((resolve) => { resolveResultPromise = resolve; });

  /**
   * Handles request-result messages from the pass engine window.
   * 
   * @param {MessageEvent<import("@passes/types").RequestResult>} event 
   * @returns {void}
   */
  function handleMessage(event) {
    const message = event.data;

    // Ignore messages that aren't from the pass engine window opened in this call
    if (event.source !== passEngineWindow) return;

    // Ignore messages that aren't request results
    if (message.type !== 'request-result') return;

    // Resolve the result promise returned by this function
    resolveResultPromise(message.result);
    // Close the window
    passEngineWindow.close();
  }

  // Handle messages from the passEngineWindow
  window.addEventListener('message', handleMessage);

  // When the passEngineWindow closes, remove the message handler from this window
  passEngineWindow.addEventListener('close', () => window.removeEventListener('message', handleMessage));

  // Return the promise for the request result, which will be resolved in handleMessage above
  return resultPromise;
}
