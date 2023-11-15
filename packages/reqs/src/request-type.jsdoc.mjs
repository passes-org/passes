/**
 * @template TRequestBody
 * @template TResultBody
 * @typedef IRequestType
 * @property {string} requestTag
 * @property {(body: TRequestBody) => Promise<Uint8Array>} encodeRequest
 * @property {(bytes: Uint8Array) => Promise<TRequestBody>} decodeRequest
 * @property {(body: RequestResult<TResultBody>) => Promise<Uint8Array>} encodeResult
 * @property {(bytes: Uint8Array) => Promise<RequestResult<TResultBody>>} decodeResult
 * @property {(requestBody: TRequestBody) => Promise<RequestResult<TResultBody>>} sendRequest
 */

/**
 * @template TResultBody
 * @typedef {import('./envelope-v0.jsdoc.mjs').RequestResult<TResultBody>} RequestResult
 */

/**
 * @template T
 * @typedef {Object} Codec
 * @property {(value: T) => Uint8Array} encode
 * @property {(bytes: Uint8Array) => T} decode
 */
