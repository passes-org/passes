/**
 * Represents a document with passes.
 * @typedef {Document & { passes?: PassesABI }} DocumentWithPasses
 */

/**
 * Interface for PassesABI.
 * @typedef PassesABI
 * @property {(raw: Uint8Array) => Promise<Uint8Array>} request - Request the user to complete a pass request.
 */

/**
 * Sends an indication that the Pass Provider is ready to receive a request from the Requesting App.
 * @typedef {Object} ConnectMessage
 * @property {'org.passes.messages.connect'} type - The type of the result, should be 'org.passes.messages.connect'.
 */

/**
 * Sends a request from the Requesting App to the Pass Provider.
 * @typedef {Object} RequestMessage
 * @property {'org.passes.messages.request'} type - The type of the result, should be 'org.passes.messages.result'.
 * @property {Uint8Array} request - The raw request.
 */

/**
 * Sends a result from the Pass Provider to the Requesting App.
 * @typedef {Object} ResultMessage
 * @property {'org.passes.messages.result'} type - The type of the result, should be 'org.passes.messages.result'.
 * @property {Uint8Array} result - The raw result.
 */

/**
 * Extends the global Document object with an optional passes property.
 * @global
 * @typedef {Document} GlobalDocument
 * @property {PassesABI} [passes] - Optional PassesABI implementation.
 */
