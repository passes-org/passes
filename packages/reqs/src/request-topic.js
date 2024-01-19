import { EnvelopeV0 } from './envelope-v0.js';

// JSDoc Type Imports
/** @template TRequestBody @template TResultBody @typedef {import('./request-topic.jsdoc.mjs').IRequestTopic<TRequestBody, TResultBody>} IRequestTopic */
/** @template TResultBody @typedef {import('./envelope-v0.jsdoc.mjs').RequestResult<TResultBody>} RequestResult */
/** @template T @typedef {import('./request-topic.jsdoc.mjs').Codec<T>} Codec */

/**
 * @template TRequestBody
 * @template TResultBody
 * @typedef RequestTopicParams
 * @property {string} id
 * @property {Codec<TRequestBody>} requestBodyCodec
 * @property {Codec<TResultBody>} resultBodyCodec
 * @property {import("./browser-types.jsdoc.mjs").PassesABI} [abi]
 */

/**
 * Builds an Envelope-v0x00 request topic interface.
 * 
 * @template TRequestBody
 * @template TResultBody
 * @implements {IRequestTopic<TRequestBody, TResultBody>}
 * @property {string} id
 * @property {Codec<TRequestBody>} requestBodyCodec
 * @property {Codec<TResultBody>} resultBodyCodec
 * @property {import("./browser-types.jsdoc.mjs").PassesABI} [abi]
 */
export class RequestTopic {
  /**
   * @param {RequestTopicParams<TRequestBody, TResultBody>} params
  */
  constructor({ id, requestBodyCodec, resultBodyCodec, abi }) {
    this.id = id;
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
      ...EnvelopeV0.encodeRequestHeader(this.id),
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
    const { topic, body } = EnvelopeV0.parseRequest(bytes);
    if (topic !== this.id) throw new RequestTopic.Errors.INCORRECT_TOPIC(this.id, topic);
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
    INCORRECT_TOPIC: class RequestTopicIncorrectTopicError extends Error {
      /**
       * @param {string} expected
       * @param {string} actual
       */
      constructor(expected, actual) {
        super();
        this.id = "Incorrect Request Topic";
        this.message = `Expected request topic: "${expected}". Actual: "${actual}"`;
        this.expected = expected;
        this.actual = actual;
      }
    },

    /**
     * @property {string} expected
     * @property {string} actual
     */
    ABI_NOT_AVAILABLE: class RequestTopicABINotAvailable extends Error {
      constructor() {
        super();
        this.id = 'Passes ABI not available';
        this.message = 'A value for `abi` must be passed to RequestBuilder if `document.passes` is not set';
      }
    },
  };

  /**
   * A helper for resolving the PassesABI. If the instance has no abi property, it returns document.passes if it's available.
   * 
   * @returns {import("./browser-types.jsdoc.mjs").PassesABI}
   * @throws {RequestTopic.Errors.ABI_NOT_AVAILABLE} - document.passes must be available if `abi` is not passed.
   */
  resolveABI() {
    if (this.abi) return this.abi;
    /** @type {import("./browser-types.jsdoc.mjs").DocumentWithPasses} */
    const _document = typeof document !== 'undefined' ? document : null;
    if (!_document?.passes) throw new RequestTopic.Errors.ABI_NOT_AVAILABLE();
    return _document.passes;
  }

  /**
   * Returns a new RequestTopic instance with the same id and codecs, but with a new ABI.
   * @param {import("./browser-types.jsdoc.mjs").PassesABI} abi
   */
  withABI(abi) {
    return new RequestTopic({
      id: this.id,
      requestBodyCodec: this.requestBodyCodec,
      resultBodyCodec: this.resultBodyCodec,
      abi,
    });
  }

  /**
   * Returns a string representation of the request topic.
   * @returns {string}
   */
  toString() {
    return `RequestTopic(${this.id})`;
  }
};
