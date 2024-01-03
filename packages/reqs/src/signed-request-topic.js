import { Json as JsonCodec } from './codecs/json.js';
import { EnvelopeV0 } from './envelope-v0.js';
import { formatRLE, parseRLE } from './private/rle.js';
import { RequestTopic } from './request-topic.js';

// JSDoc Type Imports
/** @template TRequestBody @template TResultBody @typedef {import('./request-topic.jsdoc.mjs').IRequestTopic<TRequestBody, TResultBody>} IRequestTopic */
/** @template TResultBody @typedef {import('./signed-request-topic.jsdoc.mjs').SignedRequestResult<TResultBody>} SignedRequestResult */
/** @template TResultBody @typedef {import('./signed-request-topic.jsdoc.mjs').SignedBodyWrapper<TResultBody>} SignedBodyWrapper */
/** @typedef {import('./signed-request-topic.jsdoc.mjs').SignedBodyWrapperHeader} SignedBodyWrapperHeader */

/**
 * @template TRequestBody
 * @template TResultBody
 * @typedef SignedRequestTopicParams
 * @property {import('./request-topic.js').RequestTopic<TRequestBody, TResultBody>} requestTopic - The RequestTopic to sign/verify results for
 * @property {(body: TResultBody) => Promise<SignedBodyWrapperHeader>} [signResult]
 * @property {(signed: SignedBodyWrapper<TResultBody>) => Promise<boolean>} [verifyResult]
 */

/**
 * Wraps a RequestTopic to implement result signing and verification.
 * 
 * @template TRequestBody
 * @template TResultBody
 * @implements {IRequestTopic<TRequestBody, TResultBody>}
 * @property {(body: Uint8Array) => Promise<SignedBodyWrapperHeader>} [signResult]
 * @property {(signed: SignedBodyWrapper<TResultBody>) => Promise<boolean>} [verifyResult]
 */
export class SignedRequestTopic extends RequestTopic {
  /**
   * @param {SignedRequestTopicParams<TRequestBody, TResultBody>} params
  */
  constructor({ requestTopic, signResult, verifyResult }) {
    super(requestTopic);
    this.signResult = signResult;
    this.verifyResult = verifyResult;
  }

  /**
   * Encodes a structured result body into a signed result.
   * 
   * @param {SignedRequestResult<TResultBody>} result
   * @returns {Promise<Uint8Array>}
   * @throws {SignedRequestTopic.Errors.CANNOT_SIGN} - Throws a CANNOT_SIGN error if no signResult implementation was provided at construction
   */
  async encodeResult(result) {
    if (!this.signResult) throw new SignedRequestTopic.Errors.CANNOT_SIGN(this.id);

    // Don't sign result if it's not accepted
    if (result.status !== 'accepted') {
      return super.encodeResult(result);
    }

    return EnvelopeV0.encodeResult({
      status: 'accepted',
      body: SignedCodec(this.resultBodyCodec)
        .encode({
          header: await this.signResult(result.body),
          body: result.body,
        }),
    });
  }

  /**
   * Returns the signed result's body if the result signature is valid. Throws if the signature is invalid.
   * 
   * @param {Uint8Array} bytes 
   * @returns {Promise<SignedRequestResult<TResultBody>>}
   * @throws {SignedRequestTopic.Errors.INVALID_SIGNATURE} - Throws an INVALID_SIGNATURE error if the signature does not represent match the body and public key
   * @throws {SignedRequestTopic.Errors.CANNOT_VERIFY} - Throws a CANNOT_VERIFY error if no verifyResult implementation was provided at construction
   */
  async decodeResult(bytes) {
    if (!this.verifyResult) throw new SignedRequestTopic.Errors.CANNOT_VERIFY(this.id);

    const parsedResult = EnvelopeV0.parseResult(bytes);

    // Don't verify result if it's not accepted
    if (parsedResult.status !== 'accepted') {
      return parsedResult;
    }

    const signedResult = SignedCodec(this.resultBodyCodec).decode(parsedResult.body);
    const valid = await this.verifyResult(signedResult);
    if (!valid) throw new SignedRequestTopic.Errors.INVALID_SIGNATURE(signedResult);
    return { status: 'accepted', body: signedResult.body, signed: signedResult.header };
  }

  /**
   * Sends a request.
   * @param {TRequestBody} reqBody
   * @returns {Promise<import('./request-topic.js').RequestResult<TResultBody>>}
   */
  async sendRequest(reqBody) {
    const abi = this.resolveABI();
    const requestBytes = await this.encodeRequest(reqBody);
    const resultBytes = await abi.request(requestBytes);
    return this.decodeResult(resultBytes);
  }

  static Errors = {
    ...RequestTopic.Errors,

    /**
     * @property {SignedBodyWrapper<any>} signed
     */
    INVALID_SIGNATURE: class SignedRequestTopicInvalidSignature extends Error {
      /**
       * @param {SignedBodyWrapper<any>} signed
       */
      constructor(signed) {
        super();
        this.id = "Invalid Signature";
        this.message = 'SignedRequestTopic result had invalid signature';
        this.signed = signed;
      }
    },

    CANNOT_SIGN: class SignedRequestTopicCannotSign extends Error {
      /**
       * @param {string} id
       */
      constructor(id) {
        super();
        this.id = "SignedRequestTopic Cannot Sign";
        this.message = `SignedRequestTopic "${id}" has no signResult implementation. Ensure one is provided during construction if encodeResult is called`;
      }
    },

    CANNOT_VERIFY: class SignedRequestTopicCannotVerify extends Error {
      /**
       * @param {string} id
       */
      constructor(id) {
        super();
        this.id = "SignedRequestTopic Cannot Verify";
        this.message = `SignedRequestTopic "${id}" has no verifyResult implementation. Ensure one is provided during construction if decodeResult is called`;
      }
    },
  };
};

/**
 * @template T
 * A codec wrapper for signed request/result bodies.
 * @param {import("./request-topic.js").Codec<T>} codec
 * @returns {import("./request-topic.js").Codec<SignedBodyWrapper<T>>}
 */
const SignedCodec = (codec) => ({
  encode: ({ body, header }) => {
    /** @type {import("./request-topic.js").Codec<JsonWebKey>} */
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

    /** @type {import("./request-topic.js").Codec<JsonWebKey>} */
    const PubkeyCodec = JsonCodec;
    const publicKey = PubkeyCodec.decode(encodedPubkey);
    
    return {
      header: { publicKey, signature },
      body: codec.decode(encodedBody),
    };
  },
});
