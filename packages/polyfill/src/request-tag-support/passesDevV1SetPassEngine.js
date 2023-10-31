import { PASSES_BASE_URL } from "../constants";
import { getRequestBody } from "../utils";

export const REQUEST_TAG = 'https://passes.org/v1/set-pass-engine';

/**
 * Implements support for the 'https://passes.org/v1/set-pass-engine' request tag.
 * 
 * @param {Uint8Array} request 
 * @returns {Promise<Uint8Array>}
 */
export function support(request) {
  const { uri } = JSON.parse(decoder.decode(getRequestBody(request)));

  const confirmURL = `${PASSES_BASE_URL}/v1/set-pass-engine?${new URLSearchParams({ url: uri })}`;

  // FIXME: Use a POST request instead
  // Open the passes.org UI to confirm the user's choice to set their pass engine
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const confirmWindow = window.open(confirmURL);
  if (!confirmWindow) throw new Error('Failed to open new window for set-pass-engine confirmation');

  // Create a promise and resolver fn which will be used to return a promise that gets resolved from handleMessage once there's a result
  /** @type {(result: Uint8Array) => void} */
  let resolveResultPromise;
  /** @type {Promise<Uint8Array>} */
  const resultPromise = new Promise((resolve) => { resolveResultPromise = resolve; });

  /**
   * Handles request-result messages from the confirmWindow.
   * 
   * @param {MessageEvent<import("@passes/types").RequestResult>} event 
   * @returns {void}
   */
  function handleMessage(event) {
    const message = event.data;

    // Ignore messages that aren't from the passes.org window opened in this call
    if (event.source !== confirmWindow) return;

    // Ignore messages that aren't request results
    if (message.type !== 'request-result') return;

    // Resolve the result promise returned by this function
    resolveResultPromise(message.result);
    // Close the window
    confirmWindow.close();
  }

  // Handle messages from the passEngineWindow
  window.addEventListener('message', handleMessage);

  // When the passEngineWindow closes, remove the message handler from this window
  confirmWindow.addEventListener('close', () => window.removeEventListener('message', handleMessage));

  // Return the promise for the request result, which will be resolved in handleMessage above
  return resultPromise;
}

const decoder = new TextDecoder();
