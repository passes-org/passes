import { EnvelopeV0 } from './envelope-v0.js';

// JSDoc Type Imports
/** @template TRequestBody @template TResultBody @typedef {import('./request-type.jsdoc.mjs').IRequestType<TRequestBody, TResultBody>} IRequestType */
/** @template TResultBody @typedef {import('./envelope-v0.jsdoc.mjs').RequestResult<TResultBody>} RequestResult */
/** @template T @typedef {import('./request-type.jsdoc.mjs').Codec<T>} Codec */

/**
 * @template TRequestBody
 * @template TResultBody
 * @typedef RequestTypeParams
 * @property {string} requestTag
 * @property {Codec<TRequestBody>} requestBodyCodec
 * @property {Codec<TResultBody>} resultBodyCodec
 * @property {import("@passes/types").PassesABI} [abi]
 */

/**
 * Builds an Envelope-v0x00 request type interface.
 * 
 * @template TRequestBody
 * @template TResultBody
 * @implements {IRequestType<TRequestBody, TResultBody>}
 * @property {string} requestTag
 * @property {Codec<TRequestBody>} requestBodyCodec
 * @property {Codec<TResultBody>} resultBodyCodec
 * @property {import("@passes/types").PassesABI} [abi]
 */
export class RequestType {
  /**
   * @param {RequestTypeParams<TRequestBody, TResultBody>} params
  */
  constructor({ requestTag, requestBodyCodec, resultBodyCodec, abi }) {
    this.requestTag = requestTag;
    this.requestBodyCodec = requestBodyCodec;
    this.resultBodyCodec = resultBodyCodec;
    this.abi = abi;
  }

  /**
   * Encodes a structured request body into an envelope-v0x00 request.
   * 
   * @param {TRequestBody} body 
   * @returns {Promise<Uint8Array>}
   */
  async encodeRequest(body) {
    return new Uint8Array([
      ...EnvelopeV0.encodeRequestHeader(this.requestTag),
      ...this.requestBodyCodec.encode(body),
    ]);
  }

  /**
   * Decodes an envelope-v0x00 request into a structured request body.
   * 
   * @param {Uint8Array} bytes 
   * @returns {Promise<TRequestBody>}
   */
  async decodeRequest(bytes) {
    const { tag, body } = EnvelopeV0.parseRequest(bytes);
    if (tag !== this.requestTag) throw new RequestType.Errors.INCORRECT_TAG(this.requestTag, tag);
    return this.requestBodyCodec.decode(body);
  }

  /**
   * Encodes a structured result body into an envelope-v0x00 result.
   * 
   * @param {RequestResult<TResultBody>} result
   * @returns {Promise<Uint8Array>}
   */
  async encodeResult(result) {
    return EnvelopeV0.encodeResult(
      // If the result status is 'accepted', encode the result body into bytes
      result.status === 'accepted'
        ? { status: 'accepted', body: this.resultBodyCodec.encode(result.body) }
        : result
    );
  }

  /**
   * Decodes an envelope-v0x00 request into a structured request body.
   * 
   * @param {Uint8Array} bytes 
   * @returns {Promise<RequestResult<TResultBody>>}
   */
  async decodeResult(bytes) {
    const parsedResult = EnvelopeV0.parseResult(bytes);

    // If the result status is 'accepted', decode the result body into a TResultBody
    if (parsedResult.status === 'accepted') {
      return {
        status: 'accepted',
        body: this.resultBodyCodec.decode(parsedResult.body),
      };
    }

    return parsedResult;
  }

  /**
   * Sends a request.
   * @param {TRequestBody} reqBody
   * @returns {Promise<RequestResult<TResultBody>>}
   */
  async sendRequest(reqBody) {
    const abi = this.resolveABI();
    const requestBytes = await this.encodeRequest(reqBody);
    const resultBytes = await abi.request(requestBytes);
    return this.decodeResult(resultBytes);
  }

  static Errors = {
    /**
     * @property {string} expected
     * @property {string} actual
     */
    INCORRECT_TAG: class RequestTypeIncorrectTagError extends Error {
      /**
       * @param {string} expected
       * @param {string} actual
       */
      constructor(expected, actual) {
        super();
        this.name = "Incorrect Request Tag";
        this.message = `Expected request tag: "${expected}". Actual: "${actual}"`;
        this.expected = expected;
        this.actual = actual;
      }
    },

    /**
     * @property {string} expected
     * @property {string} actual
     */
    ABI_NOT_AVAILABLE: class RequestTypeABINotAvailable extends Error {
      constructor() {
        super();
        this.name = 'Passes ABI not available';
        this.message = 'A value for `abi` must be passed to RequestBuilder if `document.passes` is not set';
      }
    },
  };

  /**
   * A helper for resolving the PassesABI. If the instance has no abi property, it returns document.passes if it's available.
   * 
   * @returns {import("@passes/types").PassesABI}
   * @throws {RequestType.Errors.ABI_NOT_AVAILABLE} - document.passes must be available if `abi` is not passed.
   */
  resolveABI() {
    if (this.abi) return this.abi;
    /** @type {import("@passes/types").DocumentWithPasses} */
    const _document = typeof document !== 'undefined' ? document : null;
    if (!_document?.passes) throw new RequestType.Errors.ABI_NOT_AVAILABLE();
    return _document.passes;
  }
};
