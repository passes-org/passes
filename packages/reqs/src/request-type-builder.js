import { EnvelopeV0x00 } from './envelope-v0x00';

/**
 * @template TResult
 * @typedef {import('./envelope-v0x00').RequestResult<TResult>} RequestResult
 */

/**
 * @template T
 * @typedef {Object} Codec
 * @property {(value: T) => Uint8Array} encode
 * @property {(bytes: Uint8Array) => T} decode
 */

/**
 * Builds an Envelope-v0x00 request type interface.
 * 
 * @template TRequestBody
 * @template TResultBody
 * @property {string} requestTag
 * @property {Codec<TRequestBody>} requestBodyCodec
 * @property {Codec<TResultBody>} resultBodyCodec
 * @property {import("@passes/types").PassesABI} [abi]
 */
export class RequestTypeBuilder {
  /**
   * @param {string} requestTag
   * @param {Codec<TRequestBody>} requestBodyCodec
   * @param {Codec<TResultBody>} resultBodyCodec
   * @param {import("@passes/types").PassesABI} [abi]
  */
  constructor(requestTag, requestBodyCodec, resultBodyCodec, abi) {
    this.requestTag = requestTag;
    this.requestBodyCodec = requestBodyCodec;
    this.resultBodyCodec = resultBodyCodec;
    this.abi = abi;
  }

  /**
   * Encodes a structured request body into an envelope-v0x00 request.
   * 
   * @param {TRequestBody} body 
   * @returns {Uint8Array}
   */
  encodeRequest(body) {
    return new Uint8Array([
      ...EnvelopeV0x00.encodeRequestHeader(this.requestTag),
      ...this.requestBodyCodec.encode(body),
    ]);
  }

  /**
   * Decodes an envelope-v0x00 request into a structured request body.
   * 
   * @param {Uint8Array} bytes 
   * @returns {TRequestBody}
   */
  decodeRequest(bytes) {
    const { tag, body } = EnvelopeV0x00.parseRequest(bytes);
    if (tag !== this.requestTag) throw new RequestTypeBuilder.Errors.INCORRECT_TAG(this.requestTag, tag);
    return this.requestBodyCodec.decode(body);
  }

  /**
   * Encodes a structured result body into an envelope-v0x00 result.
   * 
   * @param {RequestResult<TResultBody>} result
   * @returns {Uint8Array}
   */
  encodeResult(result) {
    return EnvelopeV0x00.encodeResult(
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
   * @returns {RequestResult<TResultBody>}
   */
  decodeResult(bytes) {
    const parsedResult = EnvelopeV0x00.parseResult(bytes);

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
    const requestBytes = this.encodeRequest(reqBody);
    const resultBytes = await abi.request(requestBytes);
    return this.decodeResult(resultBytes);
  }

  static Errors = {
    /**
     * @property {string} expected
     * @property {string} actual
     */
    INCORRECT_TAG: class RequestTypeBuilderIncorrectTagError extends Error {
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
    ABI_NOT_AVAILABLE: class RequestTypeBuilderABINotAvailable extends Error {
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
   * @throws {RequestTypeBuilder.Errors.ABI_NOT_AVAILABLE} - document.passes must be available if `abi` is not passed.
   */
  resolveABI() {
    if (this.abi) return this.abi;
    /** @type {import("@passes/types").DocumentWithPasses} */
    const _document = typeof document !== 'undefined' ? document : null;
    if (!_document?.passes) throw new RequestTypeBuilder.Errors.ABI_NOT_AVAILABLE();
    return _document.passes;
  }
};
