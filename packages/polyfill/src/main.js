/// <reference lib="dom" />

(function polyfill() {
  /**
   * Returns whether the document.passes ABI is already available. If this returns false, the ABI will be polyfilled.
   * 
   * @returns {boolean}
   */
  function isPassesSupported() {
    /** @type {import("./browser-types.jsdoc.mjs").DocumentWithPasses} */
    const _document = document;
    return typeof _document.passes !== 'undefined'
      && typeof _document.passes.request === 'function';
  }

  // If the document.passes ABI is already available, don't polyfill
  if (!isPassesSupported()) {
    // Polyfill the document.passes ABI
    /** @type {import("./browser-types.jsdoc.mjs").DocumentWithPasses} */
    (document).passes = { request: polyfillRequest };
  }

  // The passes.org base URL
  const PASSES_BASE_URL = 'https://passes.org';

  /**
   * Provides a polyfill implementation of the document.passes.request ABI using a POST request to passes.org in a new window which forwards the end user to their Pass Provider to handle the request.
   * 
   * @param {Uint8Array} raw 
   * @returns {Promise<Uint8Array>}
   */
  async function polyfillRequest(raw) {
    // If the request is to set the Pass Provider, redirect to the passes.org set-pass-provider page
    if (getRequestTopic(raw) === 'org.passes.provide-pass') {
      const { uri } = JSON.parse(new TextDecoder().decode(getRequestBody(raw)));
      window.location.href = `${PASSES_BASE_URL}/set-pass-provider?provider=${encodeURIComponent(uri)}&return=${encodeURIComponent(window.location.href)}`;
      return;
    }

    // Open a window to passes.org to redirect to the user's Pass Provider
    const passProviderWindow = window.open(`${PASSES_BASE_URL}/request`, '_blank');

    /**
     * Handles connect messages from the Pass Provider window.
     * 
     * @param {MessageEvent<import("./browser-types.jsdoc.mjs").ConnectMessage>} event 
     * @returns {void}
     */
    function handleConnectMessage(event) {
      const message = event.data;

      // Ignore messages that aren't from the Pass Provider window opened in this call
      if (event.source !== passProviderWindow) return;

      // Ignore messages that aren't connect messages
      if (message.type !== 'org.passes.messaging.connect') return;

      // Send the request to the Pass Provider window
      const requestMessage = { type: 'org.passes.messaging.request', request: raw };
      passProviderWindow.postMessage(requestMessage, '*');

      // Remove this event listener
      window.removeEventListener('message', handleConnectMessage);
    }

    // Handle connect messages from the passProviderWindow
    window.addEventListener('message', handleConnectMessage);

    // Create a promise and resolver fn which will be used to return a promise that gets resolved from handleResultMessage once there's a result
    /** @type {(result: Uint8Array) => void} */
    let resolveResultPromise;
    /** @type {Promise<Uint8Array>} */
    const resultPromise = new Promise((resolve) => { resolveResultPromise = resolve; });

    /**
     * Handles result messages from the Pass Provider window.
     * 
     * @param {MessageEvent<import("./browser-types.jsdoc.mjs").ResultMessage>} event 
     * @returns {void}
     */
    function handleResultMessage(event) {
      const message = event.data;

      // Ignore messages that aren't from the Pass Provider window opened in this call
      if (event.source !== passProviderWindow) return;

      // Ignore messages that aren't request results
      if (message.type !== 'org.passes.messaging.result') return;

      // Resolve the result promise returned by this function
      resolveResultPromise(message.result);
      // Close the window
      passProviderWindow.close();
    }

    // Handle result messages from the passProviderWindow
    window.addEventListener('message', handleResultMessage);

    // When the passProviderWindow closes, remove the message handler from this window
    passProviderWindow.addEventListener('close', () => window.removeEventListener('message', handleResultMessage));

    // Return the promise for the request result, which will be resolved in handleResultMessage above
    return resultPromise;
  }

  /**
   * Returns a string view of topic of a Uint8Array-encoded pass request.
   * 
   * @param {Uint8Array} request 
   * @returns {string}
   */
  function getRequestTopic(request) {
    const topicBegin = 2;
    const topicLength = (request.at(1) ?? 0) + 1;
    const topicEnd = topicBegin + topicLength;
    const topicBytes = request.slice(2, topicEnd);
    return new TextDecoder().decode(topicBytes);
  }

  /**
   * Selects and returns the body segment of a Uint8Array-encoded pass request.
   * 
   * @param {Uint8Array} request 
   * @returns {Uint8Array}
   */
  function getRequestBody(request) {
    const topicBegin = 2;
    const topicLength = (request.at(1) ?? 0) + 1;
    const topicEnd = topicBegin + topicLength;
    const bodyBytes = request.slice(topicEnd);
    return bodyBytes;
  }
})();
