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
});
