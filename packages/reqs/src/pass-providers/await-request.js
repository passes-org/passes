/**
 * Sends a connect message to the requesting app window and returns a promise that resolves with the request when it's received.
 * @returns {Promise<Uint8Array>}
 */
export async function awaitRequest() {
  if (typeof window === 'undefined') throw new Error('receiveRequest is only available in the browser');
  const requestingAppWindow = window.opener ?? window.parent;
  if (!requestingAppWindow) throw new Error('receiveRequest must be called from a popup or iframe');

  // Send connect message
  /** @type {import("../browser-types.jsdoc.mjs").ConnectMessage} */
  const resultMessage = { type: 'org.passes.messages.connect' };
  requestingAppWindow.postMessage(resultMessage, '*');

  // Create a promise and resolver fn which will be used to return a promise that gets resolved from handleRequestMessage once there's a result
  /** @type {(result: Uint8Array) => void} */
  let resolveRequestPromise;
  /** @type {Promise<Uint8Array>} */
  const requestPromise = new Promise((resolve) => { resolveRequestPromise = resolve; });

  /**
   * Handles request messages from the Pass Provider window.
   * 
   * @param {MessageEvent<import("../browser-types.jsdoc.mjs").RequestMessage>} event 
   * @returns {void}
   */
  function handleRequestMessage(event) {
    const message = event.data;

    // Ignore messages that aren't from the requesting app window opened in this call
    if (event.source !== requestingAppWindow) return;

    // Ignore messages that aren't request results
    if (message.type !== 'org.passes.messages.request') return;

    // Resolve the result promise returned by this function
    resolveRequestPromise(message.request);

    // Remove this event listener
    window.removeEventListener('message', handleRequestMessage);
  }

  // Handle messages from the passEngineWindow
  window.addEventListener('message', handleRequestMessage);

  // Return the request promise
  return requestPromise;
}