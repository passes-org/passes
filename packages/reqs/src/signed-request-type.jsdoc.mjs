/**
 * @template T
 * @typedef {Object} SignedAcceptedResult<T>
 * @property {'accepted'} status - The status of the result when accepted.
 * @property {T} body - The body of the result.
 * @property {import("./signed-request-type").SignedBodyWrapperHeader} signed - The signature and public key of the signed result.
 */

/**
 * @template TResultBody
 * @typedef {import('./envelope-v0.jsdoc.mjs').RequestResult<TResultBody> | SignedAcceptedResult<TResultBody>} SignedRequestResult
 */