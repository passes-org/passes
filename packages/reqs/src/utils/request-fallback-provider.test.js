import { describe, expect, test } from "bun:test";
import { RequestWithFallbackProviderCodec } from "./request-fallback-provider.js";

describe("RequestWithFallbackProviderCodec", () => {
  test("RequestWithFallbackProviderCodec.encode", async () => {
    const encoded = RequestWithFallbackProviderCodec.encode({
      fallbackProvider: 'https://example.com',
      request: new Uint8Array([1, 2, 3]),
    });
    expect(encoded).toEqual(new Uint8Array([
      0x12, // Length of fallback provider (19 chars - 1 (offset))
      ...new TextEncoder().encode('https://example.com'),
      1, 2, 3, // Request
    ]));
  });

  test("RequestWithFallbackProviderCodec.decode", async () => {
    const { fallbackProvider, request } = RequestWithFallbackProviderCodec.decode(new Uint8Array([
      0x12, // Length of fallback provider (19 chars - 1 (offset))
      ...new TextEncoder().encode('https://example.com'),
      1, 2, 3, // Request
    ]));
    expect(fallbackProvider).toEqual('https://example.com');
    expect(request).toEqual(new Uint8Array([1, 2, 3]));
  });
});