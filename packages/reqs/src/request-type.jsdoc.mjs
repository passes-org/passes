/**
 * @template TRequestBody
 * @template TResultBody
 * @typedef IRequestType
 * @property {string} requestTag
 * @property {(body: TRequestBody) => Promise<Uint8Array>} encodeRequest
 * @property {(bytes: Uint8Array) => Promise<TRequestBody>} decodeRequest
 * @property {(body: import("./envelope-v0.jsdoc.mjs").RequestResult<TResultBody>) => Promise<Uint8Array>} encodeResult
 * @property {(bytes: Uint8Array) => Promise<import("./envelope-v0.jsdoc.mjs").RequestResult<TResultBody>>} decodeResult
 * @property {(requestBody: TRequestBody) => Promise<import("./envelope-v0.jsdoc.mjs").RequestResult<TResultBody>>} sendRequest
 */

/**
 * @template T
 * @typedef {Object} Codec
 * @property {(value: T) => Uint8Array} encode
 * @property {(bytes: Uint8Array) => T} decode
 */
