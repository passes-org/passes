import { formatRLE, parseRLE } from "./rle.js";
import { describe, expect, test } from "bun:test";

// JSdoc Type Imports
/** @typedef {import('./rle.js').RLEConfig} RLEConfig */

/**
 * @param {1 | 2 | 4} length
 * @returns {RLEConfig}
 * */
function getConfig(length) {
  return { length };
}

describe("formatRLE", () => {
  test("formats bytes with 1-byte run-length", () => {
    const bytes = new Uint8Array([1, 2, 3]);
    const formatted = formatRLE(bytes, getConfig(1));

    expect(formatted).toEqual(
      new Uint8Array([
        2, // Bytes Length of 3 with offset 1 becomes 2
        1,
        2,
        3,
      ])
    );
  });

  test("formats bytes with 2-byte run-length", () => {
    const bytes = new Uint8Array([1, 2, 3, 4, 5]);
    const formatted = formatRLE(bytes, getConfig(2));
    expect(formatted).toEqual(
      new Uint8Array([
        0,
        4, // Bytes Length of 5 with offset 1 becomes 4
        1,
        2,
        3,
        4,
        5,
      ])
    );
  });

  test("formats bytes with 4-byte run-length", () => {
    const bytes = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const formatted = formatRLE(bytes, getConfig(4));
    expect(formatted).toEqual(
      new Uint8Array([
        0,
        0,
        0,
        8, // Bytes Length of 9 with offset 1 becomes 8
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
      ])
    );
  });

  test("formats bytes with a bytes length requiring more than one byte in 2-byte run-length", () => {
    // Create an bytes array of 300 elements (> 256)
    const largeBytes = new Uint8Array(300).fill(1);
    const formatted = formatRLE(largeBytes, getConfig(2));

    // The length (300) with offset 1 becomes 299
    // 299 in 2 bytes is [0x01, 0x2B] (1 * 256 + 43)
    expect(formatted.slice(0, 2)).toEqual(new Uint8Array([0x01, 0x2b]));
    expect(formatted.slice(2)).toEqual(largeBytes);
  });
});

describe("parseRLE", () => {
  test("parses bytes with 1-byte run-length", () => {
    const bytes = new Uint8Array([1, 2, 3]);
    const formatted = new Uint8Array([
      2, // Length of 3 with offset 1 becomes 2
      1,
      2,
      3,
    ]);

    const { range, remainder } = parseRLE(formatted, 0, getConfig(1));

    expect(range).toEqual(bytes);
    expect(remainder).toEqual(new Uint8Array([]));
  });

  test("parses bytes with 2-byte run-length", () => {
    const bytes = new Uint8Array([1, 2, 3, 4, 5]);
    const formatted = new Uint8Array([
      0,
      4, // Bytes Length of 5 with offset 1 becomes 4
      1,
      2,
      3,
      4,
      5,
    ]);

    const { range, remainder } = parseRLE(formatted, 0, getConfig(2));

    expect(range).toEqual(bytes);
    expect(remainder).toEqual(new Uint8Array([]));
  });

  test("parses bytes with 4-byte run-length", () => {
    const bytes = new Uint8Array([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    const formatted = new Uint8Array([
      0,
      0,
      0,
      8, // Bytes Length of 9 with offset 1 becomes 8
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
    ]);

    const { range, remainder } = parseRLE(formatted, 0, getConfig(4));

    expect(range).toEqual(bytes);
    expect(remainder).toEqual(new Uint8Array([]));
  });

  test("parses bytes with 1-byte run-length and remainder", () => {
    const bytes = new Uint8Array([1, 2, 3]);
    const formatted = new Uint8Array([
      2, // Length of 3 with offset 1 becomes 2
      1,
      2,
      3,
      4,
    ]);

    const { range, remainder } = parseRLE(formatted, 0, getConfig(1));

    expect(range).toEqual(bytes);
    expect(remainder).toEqual(new Uint8Array([4]));
  });

  test("parses bytes with a bytes length requiring more than one byte in 2-byte run-length", () => {
    // Create a bytes array with a length of 300 (> 256)
    const bytes = new Uint8Array(300).fill(1);

    // The length (300) with offset 1 becomes 299
    // 299 in 2 bytes is [0x01, 0x2B] (1 * 256 + 43)
    const lengthBytes = new Uint8Array([
      0x01, // 1 * 256 = 256
      0x2b, // 43 + 256 = 299 = 300 - 1 (offset)
    ]);

    const formatted = new Uint8Array([...lengthBytes, ...bytes]);

    const { range, remainder } = parseRLE(formatted, 0, getConfig(2));

    expect(range).toEqual(bytes);
    expect(remainder).toEqual(new Uint8Array([]));
  });
});
