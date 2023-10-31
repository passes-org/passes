/**
 * @template T
 * @typedef {Object} Codec
 * @property {(value: T) => Uint8Array} encode
 * @property {(bytes: Uint8Array) => T} decode
 */

/**
 * @template TResult
 * @typedef {Object} DecodedRequestResult
 * @property {'accepted' | 'rejected' | 'unsupported' | 'exception'} status
 * @property {TResult} [result]
 * @property {string} [message]
 */

/**
 * Represents a request builder.
 * @template TRequest
 * @template TResult
 */
export class RequestBuilder {
  /**
   * @param {Codec<TRequest>} requestCodec
   * @param {Codec<TResult>} resultCodec
   * @param {import("@passes/types").PassesABI} [abi]
   */
  constructor(requestCodec, resultCodec, abi) {
    /** @type {import("@passes/types").DocumentWithPasses} */
    const _document = document;
    const _abi = abi ?? _document.passes;
    if (!_abi) throw new ErrorPassesABINotAvailable();
    /** @type {import("@passes/types").PassesABI} */
    this.abi = _abi;
    /** @type {Codec<TRequest>} */
    this.requestCodec = requestCodec;
    /** @type {Codec<TResult>} */
    this.resultCodec = resultCodec;
  }

  /**
   * Makes a request.
   * @param {TRequest} req
   * @returns {Promise<DecodedRequestResult<TResult>>}
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
