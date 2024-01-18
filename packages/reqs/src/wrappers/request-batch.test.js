import { describe, expect, test } from "bun:test";
import { Void } from "../codecs/void.js";
import { RequestTopic } from "../request-topic.js";
import { BytesBatchCodec, RequestBatchCannotContainRequestWithDefaultProviderError, RequestBatchCodec } from "./request-batch.js";
import { requestWithDefaultProvider } from "./request-with-default-provider.js";

describe("BytesBatchCodec", () => {
  test("BytesBatchCodec.encode", () => {
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

  test("BytesBatchCodec.decode", () => {
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

describe("RequestBatchCodec", () => {
  test("RequestBatchCodec rejects entries with `org.passes.request-with-default-provider` topic", async () => {
    const reqWithDefaultProvider = await requestWithDefaultProvider.encodeRequest({
      defaultProvider: "test",
      request: await new RequestTopic({
        id: 'test',
        requestBodyCodec: Void,
        resultBodyCodec: Void,
      }).encodeRequest(),
    });

    expect(() => RequestBatchCodec.encode([reqWithDefaultProvider]))
      .toThrow(RequestBatchCannotContainRequestWithDefaultProviderError);
  });
});