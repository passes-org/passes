import { formatRLE, parseRLE } from './private/rle.js';

// JSDoc Type Imports
/** @template T @typedef {import('./envelope-v0.jsdoc.mjs').RequestResult<T>} RequestResult */
/** @typedef {import('./envelope-v0.jsdoc.mjs').ResultStatus} ResultStatus */

/**
 * Pass Request Envelope Version 0x00
 */
export const EnvelopeV0 = {
  VERSION: 0x00,
  
  /**
   * Returns an encoded request header with the provided string topic.
   * 
   * @param {string} topic 
   * @returns {Uint8Array}
   */
  encodeRequestHeader(topic) {
    const topicBytes = new TextEncoder().encode(topic);
  
    return new Uint8Array([
      this.VERSION,
      ...formatRLE(topicBytes, { length: 1 }),
    ]);
  },

  /**
   * Returns a structured view of the provided request bytes.
   * 
   * @param {Uint8Array} bytes 
   * @returns {{ topic: string; body: Uint8Array }}
   */
  parseRequest(bytes) {
    const version = bytes.at(0);
    if (version !== this.VERSION) throw new this.errors.REQUEST_INCORRECT_VERSION(version);
    const topicLengthField = bytes.at(1);
    if (typeof topicLengthField === 'undefined') throw new this.errors.REQUEST_MISSING_TOPIC_LENGTH();
    const { range: topicBytes, remainder: body } = parseRLE(bytes, 1, { length: 1 });
    const topic = new TextDecoder().decode(topicBytes);
    return { topic, body };
  },

  /**
   * Returns the encoded number (1 byte) representation of the provided result status.
   * 
   * @param {import("./envelope-v0.jsdoc.mjs").ResultStatus} status 
   * @returns {number}
   */
  encodeResultStatusByte(status) {
    switch (status) {
      case 'accepted':
        return 0x00;
      case 'rejected':
        return 0x01;
      case 'unsupported':
        return 0x02;
      case 'exception':
        return 0x03;
    }
  },
  
  /**
   * Returns the string representation of the provided encoded result status number.
   * 
   * @param {number} status 
   * @returns {ResultStatus}
   */
  parseResultStatusByte(status) {
    switch (status) {
      case 0x00:
        return 'accepted';
      case 0x01:
        return 'rejected';
      case 0x02:
        return 'unsupported';
      case 0x03:
        return 'exception';
      default:
        throw new this.errors.RESULT_INVALID_STATUS_BYTE();
    }
  },

  /**
   * Returns a structured view of the provided result
   * 
   * @param {Uint8Array} bytes 
   * @returns {RequestResult<Uint8Array>}
   */
  parseResult(bytes) {
    const statusByte = bytes.at(0);
    if (typeof statusByte === 'undefined') throw new this.errors.RESULT_MISSING_STATUS_BYTE();
    const status = this.parseResultStatusByte(statusByte);
    const rawBody = bytes.slice(1);
    switch (status) {
      case 'accepted':
        return { status: 'accepted', body: rawBody };
      case 'rejected':
        return { status: 'rejected' };
      case 'unsupported':
        return { status: 'unsupported' };
      case 'exception':
        return { status: 'exception', message: new TextDecoder().decode(rawBody) };
    }
  },

  /**
   * Returns the encoded representation of the provided result
   * 
   * @param {RequestResult<Uint8Array>} result
   * @returns {Uint8Array}
   */
  encodeResult(result) {
    const statusByte = this.encodeResultStatusByte(result.status);

    let body;
    switch (result.status) {
      case 'accepted':
        body = result.body;
        break;
      case 'rejected':
      case 'unsupported':
        body = new Uint8Array(); // empty
        break;
      case 'exception':
        body = new TextEncoder().encode(result.message);
    }

    return new Uint8Array([
      statusByte,
      ...body,
    ]);
  },

  errors: {

    // –
    // Request Errors
    // –

    REQUEST_INCORRECT_VERSION: class EnvelopeV0ErrorIncorrectVersion extends Error {
      /**
       * @param {number} [version]
       */
      constructor(version) {
        super();
        this.name = "Incorrect Request Envelope Version";
        this.message = `EnvelopeV0 can only parse request envelope version 0. Received version ${version ?? 'undefined'}`;
        this.version = version;
      }
    },
    REQUEST_MISSING_TOPIC_LENGTH: class EnvelopeV0RequestMissingTopicLength extends Error {
      name = 'Missing Request Envelope Topic Length';
      message = 'EnvelopeV0 request must have its topic length at byte 1';
    },

    // –
    // Result Errors
    // –

    RESULT_INVALID_STATUS_BYTE: class EnvelopeV0ResultMissingStatusByte extends Error {
      name = 'Invalid Result Envelope Status Byte';
      message = 'EnvelopeV0 result status byte must be between 0x00 and 0x03';
    },
    RESULT_MISSING_STATUS_BYTE: class EnvelopeV0ResultMissingStatusByte extends Error {
      name = 'Missing Result Envelope Status Byte';
      message = 'EnvelopeV0 result must have its status at byte 0';
    },
  },
};
