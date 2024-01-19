import { describe, expect, test } from "bun:test";
import * as Codecs from "../codecs/index.js";
import { RequestTopic } from "../request-topic.js";
import { RequestWithDefaultProviderCannotContainRequestWithDefaultProviderError, RequestWithDefaultProviderCodec, requestWithDefaultProvider } from "./request-with-default-provider.js";

// Valid request topic for encoding test requests
const TEST_REQUEST_TOPIC = new RequestTopic({
  id: 'inner-inner-test',
  requestBodyCodec: Codecs.Void,
  resultBodyCodec: Codecs.Void,
});

describe("RequestWithDefaultProviderCodec", () => {
  test("RequestWithDefaultProviderCodec.encode", async () => {
    const encoded = RequestWithDefaultProviderCodec.encode({
      defaultProvider: 'https://example.com',
      request: await TEST_REQUEST_TOPIC.encodeRequest(),
    });
    expect(encoded).toEqual(new Uint8Array([
      0x12, // Length of default provider (19 chars - 1 (offset))
      ...new TextEncoder().encode('https://example.com'),
      ...(await TEST_REQUEST_TOPIC.encodeRequest()),
    ]));
  });

  test("RequestWithDefaultProviderCodec.encode cannot encode a requestWithDefaultProvider", async () => {
    const innerRequestWithDefaultProvider = await requestWithDefaultProvider.encodeRequest({
      defaultProvider: 'https://example.com/this-is-not-allowed',
      request: await TEST_REQUEST_TOPIC.encodeRequest(),
    });

    expect(async () => {
      RequestWithDefaultProviderCodec.encode({
        defaultProvider: 'https://example.com',
        request: innerRequestWithDefaultProvider,
      });
    })
      .toThrow(RequestWithDefaultProviderCannotContainRequestWithDefaultProviderError);
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