import { describe, expect, test } from "bun:test";
import { BytesBatchCodec } from "./request-batch.js";

describe("BytesBatchCodec", () => {
  test("BytesBatchCodec.encode", async () => {
    const encoded = BytesBatchCodec.encode([
      new Uint8Array([1, 2, 3]),
      new Uint8Array([4, 5, 6, 7]),
    ]);
    expect(encoded).toEqual(new Uint8Array([
      0, 0, 0, 3, // Length of first entry
      1, 2, 3,    // First entry
      0, 0, 0, 4, // Length of second entry
      4, 5, 6, 7, // Second entry
    ]));
  });

  test("BytesBatchCodec.decode", async () => {
    const requests = BytesBatchCodec.decode(new Uint8Array([
      0, 0, 0, 3, // Length of first entry
      1, 2, 3,    // First entry
      0, 0, 0, 4, // Length of second entry
      4, 5, 6, 7, // Second entry
    ]));
    expect(requests).toEqual([
      new Uint8Array([1, 2, 3]),
      new Uint8Array([4, 5, 6, 7]),
    ]);
  });
});