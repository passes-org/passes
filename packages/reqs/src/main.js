/**
 * @template T
 * @typedef {Object} Codec
 * @property {(value: T) => Uint8Array} encode
 * @property {(bytes: Uint8Array) => T} decode
 */

/**
 * @template TResult
 * @typedef {Object} RequestResult
 * @property {'accepted' | 'rejected' | 'unsupported' | 'exception'} status
 * @property {TResult} [result]
 * @property {string} [message]
 */

/**
 * @type {Codec<any>}
 */
export const identityCodec = {
  encode: (v) => v,
  decode: (v) => v,
}

/**
 * Represents a request builder.
 * @template TRequest
 * @template TResult
 */
export class RequestBuilder {
  /**
   * @param {Codec<TRequest>} requestCodec
   * @param {Codec<TResult>} resultCodec
   * @param {PassesABI} [abi]
   */
  constructor(requestCodec, resultCodec, abi) {
    /** @type {globalThis.Document & { passes?: PassesABI }} */
    const _document = document;
    const _abi = abi ?? _document.passes;
    if (!_abi) throw new ErrorPassesABINotAvailable();
    /** @type {PassesABI} */
    this.abi = _abi;
    /** @type {Codec<TRequest>} */
    this.requestCodec = requestCodec;
    /** @type {Codec<TResult>} */
    this.resultCodec = resultCodec;
  }

  /**
   * Makes a request.
   * @param {TRequest} req
   * @returns {Promise<RequestResult<TResult>>}
   */
  async request(req) {
    const requestBytes = this.requestCodec.encode(req);
    if (requestBytes.at(0) !== 0x00) throw new ErrorRequestEnvelopeVersionUnsupported();
    const resultBytes = await this.abi.request(requestBytes);
    const resultStatusByte = resultBytes.at(0);
    switch (resultStatusByte) {
      case 0x00:
        const result = this.resultCodec.decode(resultBytes);
        return { status: 'accepted', result };
      case 0x01:
        return { status: 'rejected' };
      case 0x02:
        return { status: 'unsupported' };
      case 0x03:
        const message = new TextDecoder().decode(resultBytes.slice(1));
        return { status: 'exception', message };
      default:
        return { status: 'exception', message: `Unexpected result status byte value: ${resultStatusByte}` };
    }
  }
}

/**
 * Represents an error when the request envelope version is unsupported.
 */
export class ErrorRequestEnvelopeVersionUnsupported extends Error {
  constructor() {
    super();
    this.name = 'Pass Request Envelope Version Unsupported';
    this.message = 'Only request envelope version 0x00 is supported';
  }
}

/**
 * Represents an error when the Passes ABI is not available.
 */
export class ErrorPassesABINotAvailable extends Error {
  constructor() {
    super();
    this.name = 'Passes ABI not available';
    this.message = 'A value for `abi` must be passed to RequestBuilder if `document.passes` is not set';
  }
}

/**
 * Extends the Document interface with potential PassesABI support.
 * @typedef {Object} DocumentWithPasses
 * @property {PassesABI} [passes] - Defined if supported (i.e. if extension is installed or fallback JS script has run).
 */

/**
 * Interface representing the PassesABI.
 * @typedef {Object} PassesABI
 * @property {(raw: Uint8Array) => Promise<Uint8Array>} request - Request the user to complete a pass request.
 */

/**
 * Extends the global Document interface to potentially support PassesABI.
 * @typedef {Object} Document
 * @property {PassesABI} [passes]
 */
