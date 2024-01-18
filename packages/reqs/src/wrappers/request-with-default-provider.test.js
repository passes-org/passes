import { describe, expect, test } from "bun:test";
import { RequestWithDefaultProviderCodec } from "./request-with-default-provider.js";

describe("RequestWithDefaultProviderCodec", () => {
  test("RequestWithDefaultProviderCodec.encode", async () => {
    const encoded = RequestWithDefaultProviderCodec.encode({
      defaultProvider: 'https://example.com',
      request: new Uint8Array([1, 2, 3]),
    });
    expect(encoded).toEqual(new Uint8Array([
      0x12, // Length of default provider (19 chars - 1 (offset))
      ...new TextEncoder().encode('https://example.com'),
      1, 2, 3, // Request
    ]));
  });

  test("RequestWithDefaultProviderCodec.decode", async () => {
    const { defaultProvider, request } = RequestWithDefaultProviderCodec.decode(new Uint8Array([
      0x12, // Length of default provider (19 chars - 1 (offset))
      ...new TextEncoder().encode('https://example.com'),
      1, 2, 3, // Request
    ]));
    expect(defaultProvider).toEqual('https://example.com');
    expect(request).toEqual(new Uint8Array([1, 2, 3]));
  });
});