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
 * @property {Codec<TRequest>} requestCodec
 * @property {Codec<TResult>} resultCodec
 * @property {import("@passes/types").PassesABI} [abi]
 */
export class RequestBuilder {
  /**
   * @param {Codec<TRequest>} requestCodec
   * @param {Codec<TResult>} resultCodec
   * @param {import("@passes/types").PassesABI} [abi]
   */
  constructor(requestCodec, resultCodec, abi) {
    this.abi = abi;
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
    const abi = resolvePassesABI(this.abi);
    const requestBytes = this.requestCodec.encode(req);
    if (requestBytes.at(0) !== 0x00) throw new ErrorRequestEnvelopeVersionUnsupported();
    const resultBytes = await abi.request(requestBytes);
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

export class ErrorRequestEnvelopeVersionUnsupported extends Error {
  constructor() {
    super();
    this.name = 'Pass Request Envelope Version Unsupported';
    this.message = 'Only request envelope version 0x00 is supported';
  }
}

export class ErrorPassesABINotAvailable extends Error {
  constructor() {
    super();
    this.name = 'Passes ABI not available';
    this.message = 'A value for `abi` must be passed to RequestBuilder if `document.passes` is not set';
  }
}

/**
 * A helper for resolving the PassesABI. Given an optional PassesABI, returns it. If no abi is passed, it returns document.passes if it's available.
 * 
 * @param {import("@passes/types").PassesABI} [abi]
 * @returns {import("@passes/types").PassesABI}
 * @throws {ErrorPassesABINotAvailable} document.passes must be available if `abi` is not passed.
 */
function resolvePassesABI(abi) {
  if (abi) return abi;
  /** @type {import("@passes/types").DocumentWithPasses} */
  const _document = typeof document !== 'undefined' ? document : null;
  if (!_document?.passes) throw new ErrorPassesABINotAvailable();
  return _document.passes;
}