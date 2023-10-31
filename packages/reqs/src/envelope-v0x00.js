/**
 * Pass Request Envelope Version 0x00
 */
export const EnvelopeV0x00 = {
  VERSION: 0x00,
  
  /**
   * Returns an encoded request header with the provided string tag.
   * 
   * @param {string} tag 
   * @returns {Uint8Array}
   */
  encodeRequestHeader(tag) {
    const tagBytes = new TextEncoder().encode(tag);
  
    return new Uint8Array([
      this.VERSION,
      tagBytes.length,
      ...tagBytes,
    ]);
  },

  /**
   * Returns a structured view of the provided request bytes.
   * 
   * @param {Uint8Array} bytes 
   * @returns {{ tag: string; body: Uint8Array }}
   */
  parseRequest(bytes) {
    const version = bytes.at(0);
    if (version !== this.VERSION) throw new this.errors.REQUEST_INCORRECT_VERSION(version);
    const tagLengthField = bytes.at(1);
    if (typeof tagLengthField === 'undefined') throw new this.errors.REQUEST_MISSING_TAG_LENGTH();
    const tagLength = tagLengthField + 1;
    const tagStart = 2;
    const tagEnd = 2 + tagLength;
    const tagBytes = bytes.slice(tagStart, tagEnd);
    const tag = new TextDecoder().decode(tagBytes);
    const body = bytes.slice(tagEnd + 1);
    return { tag, body };
  },

  /**
   * Returns the encoded number (1 byte) representation of the provided result status.
   * 
   * @param {'accepted' | 'rejected' | 'unsupported' | 'exception'} status 
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
   * @returns {'accepted' | 'rejected' | 'unsupported' | 'exception'}
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
   * Returns a structured view of the provided result bytes
   * 
   * @param {Uint8Array} bytes 
   * @returns {{ status: 'accepted' | 'rejected' | 'unsupported' | 'exception'; body: Uint8Array }}
   */
  parseResult(bytes) {
    const statusByte = bytes.at(0);
    if (typeof statusByte === 'undefined') throw new this.errors.RESULT_MISSING_STATUS_BYTE();
    const status = this.parseResultStatusByte(statusByte);
    const body = bytes.slice(1);
    return { status, body };
  },

  errors: {

    // –
    // Request Errors
    // –

    REQUEST_INCORRECT_VERSION: class EnvelopeV0x00ErrorIncorrectVersion extends Error {
      /**
       * @param {number} [version]
       */
      constructor(version) {
        super();
        this.name = "Incorrect Request Envelope Version";
        this.message = `EnvelopeV0x00 can only parse request envelope version 0. Received version ${version ?? 'undefined'}`;
        this.version = version;
      }
    },
    REQUEST_MISSING_TAG_LENGTH: class EnvelopeV0x00RequestMissingTagLength extends Error {
      name = 'Missing Request Envelope Tag Length';
      message = 'EnvelopeV0x00 request must have its tag length at byte 1';
    },

    // –
    // Result Errors
    // –

    RESULT_INVALID_STATUS_BYTE: class EnvelopeV0x00ResultMissingStatusByte extends Error {
      name = 'Invalid Result Envelope Status Byte';
      message = 'EnvelopeV0x00 result status byte must be between 0x00 and 0x03';
    },
    RESULT_MISSING_STATUS_BYTE: class EnvelopeV0x00ResultMissingStatusByte extends Error {
      name = 'Missing Result Envelope Status Byte';
      message = 'EnvelopeV0x00 result must have its status at byte 0';
    },
  },
};
