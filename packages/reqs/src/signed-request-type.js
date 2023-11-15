import { Json as JsonCodec } from './codecs/json';
import { EnvelopeV0 } from './envelope-v0';
import { RequestType } from './request-type';
import { formatRLE, parseRLE } from './utils/rle';

// JSDoc Type Imports
/** @template TRequestBody @template TResultBody @typedef {import('./request-type.jsdoc.mjs').IRequestType<TRequestBody, TResultBody>} IRequestType */
/** @template TResultBody @typedef {import('./signed-request-type.jsdoc.mjs').SignedRequestResult<TResultBody>} SignedRequestResult */

/**
 * @template TRequestBody
 * @template TResultBody
 * @typedef SignedRequestTypeParams
 * @property {import('./request-type').RequestType<TRequestBody, TResultBody>} requestType - The RequestType to sign/verify results for
 * @property {(body: TResultBody) => Promise<SignedBodyWrapper<TResultBody>>} [signResult]
 * @property {(signed: SignedBodyWrapper<TResultBody>) => Promise<boolean>} [verifyResult]
 */

/**
 * Wraps a RequestType to implement result signing and verification.
 * 
 * @template TRequestBody
 * @template TResultBody
 * @implements {IRequestType<TRequestBody, TResultBody>}
 * @property {(body: Uint8Array) => Promise<SignedBodyWrapper<Uint8Array>>} [signResult]
 * @property {(signed: SignedBodyWrapper<TResultBody>) => Promise<boolean>} [verifyResult]
 */
export class SignedRequestType extends RequestType {
  /**
   * @param {SignedRequestTypeParams<TRequestBody, TResultBody>} params
  */
  constructor({ requestType, signResult, verifyResult }) {
    super(requestType.requestTag, requestType.requestBodyCodec, requestType.resultBodyCodec);
    this.signResult = signResult;
    this.verifyResult = verifyResult;
  }

  /**
   * Encodes a structured result body into a signed result.
   * 
   * @param {SignedRequestResult<TResultBody>} result
   * @returns {Promise<Uint8Array>}
   */
  async encodeResult(result) {
    // Don't sign result if it's not accepted
    if (result.status !== 'accepted') {
      return super.encodeResult(result);
    }

    return EnvelopeV0.encodeResult({
      status: 'accepted',
      body: SignedCodec(this.resultBodyCodec)
        .encode(await this.signResult(result.body)),
    });
  }

  /**
   * Returns the signed result's body if the result signature is valid. Throws if the signature is invalid.
   * 
   * @param {Uint8Array} bytes 
   * @returns {Promise<SignedRequestResult<TResultBody>>}
   * @throws {SignedRequestType.Errors.INVALID_SIGNATURE}
   */
  async decodeResult(bytes) {
    const parsedResult = EnvelopeV0.parseResult(bytes);

    // Don't verify result if it's not accepted
    if (parsedResult.status !== 'accepted') {
      return parsedResult;
    }

    const signedResult = SignedCodec(this.resultBodyCodec).decode(parsedResult.body);
    const valid = await this.verifyResult(signedResult);
    if (!valid) throw new SignedRequestType.Errors.INVALID_SIGNATURE(signedResult);
    return { status: 'accepted', body: signedResult.body, signed: signedResult.header };
  }

  /**
   * Sends a request.
   * @param {TRequestBody} reqBody
   * @returns {Promise<import('./request-type').RequestResult<TResultBody>>}
   */
  async sendRequest(reqBody) {
    const abi = this.resolveABI();
    const requestBytes = await this.encodeRequest(reqBody);
    const resultBytes = await abi.request(requestBytes);
    return this.decodeResult(resultBytes);
  }

  static Errors = {
    ...RequestType.Errors,

    /**
     * @property {SignedBodyWrapper<any>} signed
     */
    INVALID_SIGNATURE: class SignedRequestTypeInvalidSignature extends Error {
      /**
       * @param {SignedBodyWrapper<any>} signed
       */
      constructor(signed) {
        super();
        this.name = "Invalid Signature";
        this.message = 'SignedRequestType result had invalid signature';
        this.signed = signed;
      }
    },
  };
};

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

/**
 * @template T
 * A codec wrapper for signed request/result bodies.
 * @param {import("./request-type").Codec<T>} codec
 * @returns {import("./request-type").Codec<SignedBodyWrapper<T>>}
 */
const SignedCodec = (codec) => ({
  encode: ({ body, header }) => {
    /** @type {import("./request-type").Codec<JsonWebKey>} */
    const PubkeyCodec = JsonCodec;
    const encodedPubKey = formatRLE(PubkeyCodec.encode(header.publicKey), { length: 2 });
    const encodedSignature = formatRLE(header.signature, { length: 2 });
    const encodedBody = codec.encode(body);

    return new Uint8Array([
      ...encodedPubKey,
      ...encodedSignature,
      // body
      ...encodedBody,
    ]);
  },
  decode: (bytes) => {
    const { range: encodedPubkey, remainder: parsePubkeyRemainder } = parseRLE(bytes, 0, { length: 2 });
    const { range: signature, remainder: encodedBody } = parseRLE(parsePubkeyRemainder, 0, { length: 2 });

    /** @type {import("./request-type").Codec<JsonWebKey>} */
    const PubkeyCodec = JsonCodec;
    const publicKey = PubkeyCodec.decode(encodedPubkey);
    
    return {
      header: { publicKey, signature },
      body: codec.decode(encodedBody),
    };
  },
});
