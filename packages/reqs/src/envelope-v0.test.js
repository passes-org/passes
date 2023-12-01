import { EnvelopeV0 } from "./envelope-v0.js";
import { describe, expect, test } from "bun:test";

// JSDoc Type Imports
/** @template T @typedef {import('./envelope-v0.jsdoc.mjs').RequestResult<T>} RequestResult */
/** @typedef {import('./envelope-v0.jsdoc.mjs').ResultStatus} ResultStatus */

describe("encodeRequestHeader", () => {
  test("encodes a request header correctly", () => {
    const tag = "com.example.test";
    const encoded = EnvelopeV0.encodeRequestHeader(tag);

    expect(encoded).toBeInstanceOf(Uint8Array);
    expect(encoded).toHaveLength(18);
    expect(encoded).toEqual(
      new Uint8Array([
        0x00, // Version
        15, // Tag length
        ...new TextEncoder().encode(tag),
      ])
    );
  });
});

describe("parseRequest", () => {
  test("parses valid request bytes", () => {
    const tag = "com.example.test";

    const encoded = EnvelopeV0.encodeRequestHeader(tag);
    const parsed = EnvelopeV0.parseRequest(encoded);

    expect(parsed.tag).toEqual(tag);
    expect(parsed.body).toBeInstanceOf(Uint8Array);
  });

  test("throws error for incorrect version", () => {
    expect(() => EnvelopeV0.parseRequest(new Uint8Array([0x01]))).toThrow(
      new EnvelopeV0.errors.REQUEST_INCORRECT_VERSION(1)
    );
  });

  test("throws error for missing tag length", () => {
    expect(() => EnvelopeV0.parseRequest(new Uint8Array([0x00]))).toThrow(
      new EnvelopeV0.errors.REQUEST_MISSING_TAG_LENGTH()
    );
  });
});

describe("parseResultStatusByte", () => {
  test("parses 0x00 byte as accepted", () => {
    expect(EnvelopeV0.parseResultStatusByte(0x00)).toBe("accepted");
  });

  test("parses 0x01 byte as rejected", () => {
    expect(EnvelopeV0.parseResultStatusByte(0x01)).toBe("rejected");
  });

  test("parses 0x02 byte as unsupported", () => {
    expect(EnvelopeV0.parseResultStatusByte(0x02)).toBe("unsupported");
  });

  test("parses 0x03 byte as exception", () => {
    expect(EnvelopeV0.parseResultStatusByte(0x03)).toBe("exception");
  });
});

describe("encodeResultStatusByte", () => {
  test("encodes 'accepted' status", () => {
    expect(EnvelopeV0.encodeResultStatusByte("accepted")).toBe(0x00);
  });

  test("encodes 'rejected' status", () => {
    expect(EnvelopeV0.encodeResultStatusByte("rejected")).toBe(0x01);
  });

  test("encodes 'unsupported' status", () => {
    expect(EnvelopeV0.encodeResultStatusByte("unsupported")).toBe(0x02);
  });

  test("encodes 'exception' status", () => {
    expect(EnvelopeV0.encodeResultStatusByte("exception")).toBe(0x03);
  });
});

describe("encodeResult", () => {
  test("encodes an accepted result", () => {
    /** @type {RequestResult<Uint8Array>} */
    const requestResult = {
      status: "accepted",
      body: new Uint8Array(Array.from({ length: 5 }, (_, i) => i % 256)),
    };

    expect(EnvelopeV0.encodeResult(requestResult)).toEqual(
      new Uint8Array([
        0x00, // Status
        0x00, // Body
        0x01, // Body
        0x02, // Body
        0x03, // Body
        0x04, // Body
      ])
    );
  });

  test("encodes a rejected result", () => {
    /** @type {RequestResult<Uint8Array>} */
    const requestResult = { status: "rejected" };

    expect(EnvelopeV0.encodeResult(requestResult)).toEqual(
      new Uint8Array([0x01])
    );
  });

  test("encodes an unsupported result", () => {
    /** @type {RequestResult<Uint8Array>} */
    const requestResult = { status: "unsupported" };

    expect(EnvelopeV0.encodeResult(requestResult)).toEqual(
      new Uint8Array([0x02])
    );
  });

  test("encodes an exception result", () => {
    /** @type {RequestResult<Uint8Array>} */
    const requestResult = {
      status: "exception",
      message: "This is an exception message",
    };

    expect(EnvelopeV0.encodeResult(requestResult)).toEqual(
      new Uint8Array([
        0x03, // Status
        ...new TextEncoder().encode(requestResult.message),
      ])
    );
  });
});

describe("parseResult", () => {
  function encodeAndParseResult(result) {
    const encoded = EnvelopeV0.encodeResult(result);
    return EnvelopeV0.parseResult(encoded);
  }

  test("parses an accepted result", () => {
    /** @type {RequestResult<Uint8Array>} */
    const requestResult = {
      status: "accepted",
      body: new Uint8Array(Array.from({ length: 5 }, (_, i) => i % 256)),
    };

    expect(encodeAndParseResult(requestResult)).toEqual(requestResult);
  });

  test("parses a rejected result", () => {
    /** @type {RequestResult<Uint8Array>} */
    const requestResult = { status: "rejected" };

    expect(encodeAndParseResult(requestResult)).toEqual(requestResult);
  });

  test("parses an unsupported result", () => {
    /** @type {RequestResult<Uint8Array>} */
    const requestResult = { status: "unsupported" };

    expect(encodeAndParseResult(requestResult)).toEqual(requestResult);
  });

  test("parses an exception result", () => {
    /** @type {RequestResult<Uint8Array>} */
    const requestResult = {
      status: "exception",
      message: "This is an exception message",
    };

    expect(encodeAndParseResult(requestResult)).toEqual(requestResult);
  });
});
