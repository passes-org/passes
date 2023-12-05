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
 * The transport-encoded result of a request call, sent from a pass engine to a relying party via `postMessage`.
 * @typedef {Object} TransportEncodedRequestResult
 * @property {string} type - The type of the result, should be 'request-result'.
 * @property {Uint8Array} result - The result in the form of a Uint8Array.
 */

/**
 * Extends the global Document object with an optional passes property.
 * @global
 * @typedef {Document} GlobalDocument
 * @property {PassesABI} [passes] - Optional PassesABI implementation.
 */
