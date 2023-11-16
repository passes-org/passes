/**
 * @template T
 * @typedef {Object} SignedAcceptedResult
 * @property {'accepted'} status - The status of the result when accepted.
 * @property {T} body - The body of the result.
 * @property {SignedBodyWrapperHeader} signed - The signature and public key of the signed result.
 */

/**
 * @template TResultBody
 * @typedef {import('./envelope-v0.jsdoc.mjs').RequestResult<TResultBody> | SignedAcceptedResult<TResultBody>} SignedRequestResult
 */

/**
 * @typedef SignedBodyWrapperHeader
 * @property {JsonWebKey} publicKey
 * @property {Uint8Array} signature
 */

/**
 * @template TBody
 * @typedef SignedBodyWrapper
 * @property {SignedBodyWrapperHeader} header
 * @property {TBody} body 
 */