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
   * Provides a polyfill implementation of the document.passes.request ABI using a POST request to passes.org in a new window which forwards the end user to their pass engine to handle the request.
   * 
   * @param {Uint8Array} raw 
   * @returns {Promise<Uint8Array>}
   */
  async function polyfillRequest(raw) {
    // If the request is to set the pass provider, redirect to the passes.org set-pass-provider page
    if (getRequestTag(raw) === 'org.passes.set-pass-provider') {
      const setPassProviderBody = JSON.parse(new TextDecoder().decode(getRequestBody(raw)));
      window.location.href = `${PASSES_BASE_URL}/set-pass-provider?provider=${encodeURIComponent(setPassProviderBody)}&return=${encodeURIComponent(window.location.href)}`;
      return;
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
     * @param {MessageEvent<import("./browser-types.jsdoc.mjs").TransportEncodedRequestResult>} event 
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

  /**
   * Submits a POST request with the provided form data to the provided url. 
   * Under the hood, this uses a hidden form that's temporarily added to the DOM until it's submitted.
   * 
   * @param {string} url 
   * @param {FormData} formData 
   * @returns {Window} (the opened window)
   */
  function openWindowWithPost(url, formData) {
    // Open a new window
    const target = crypto.randomUUID();
    const newWin = window.open('', target);
    if (!newWin) throw new Error('Failed to open new window for POST');

    // Create a form dynamically
    const form = document.createElement('form');
    form.action = url;
    form.method = 'POST';
    form.enctype = 'multipart/form-data';
    form.target = target;

    // Append FormData entries as form inputs
    formData.forEach((value, key) => {
      if (value instanceof File) {
        const input = document.createElement('input');
        input.type = 'file';
        input.name = key;

        // Simulate a user-selected file using a DataTransfer object
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(value);
        input.files = dataTransfer.files;

        form.appendChild(input);
      } else {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = value;
        form.appendChild(input);
      }
    });

    // Append the form to the body
    document.body.appendChild(form);

    // Submit the form
    setTimeout(() => {
      form.submit();
      // Remove the form from the body (cleanup)
      document.body.removeChild(form);
    }, 100);

    return newWin;
  }

  /**
   * Returns a string view of tag of a Uint8Array-encoded pass request.
   * 
   * @param {Uint8Array} request 
   * @returns {string}
   */
  function getRequestTag(request) {
    const tagBegin = 2;
    const tagLength = (request.at(1) ?? 0) + 1;
    const tagEnd = tagBegin + tagLength;
    const tagBytes = request.slice(2, tagEnd);
    return new TextDecoder().decode(tagBytes);
  }

  /**
   * Selects and returns the body segment of a Uint8Array-encoded pass request.
   * 
   * @param {Uint8Array} request 
   * @returns {Uint8Array}
   */
  function getRequestBody(request) {
    const tagBegin = 2;
    const tagLength = (request.at(1) ?? 0) + 1;
    const tagEnd = tagBegin + tagLength;
    const bodyBytes = request.slice(tagEnd);
    return bodyBytes;
  }
})();
