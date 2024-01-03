import * as Codecs from "../codecs";
import { RequestTopic } from "../request-topic";
import { formatRLE, parseRLE } from "../private/rle";

/**
 * A codec for a request with a string header representing the fallback provider URI (up to 256 bytes long).
 * @type {import("../request-topic.jsdoc.mjs").Codec<{ fallbackProvider: string; request: Uint8Array }>} - A tuple of the raw request and the fallback provider URI.
 */
export const RequestWithFallbackProviderCodec = {
  encode: ({ fallbackProvider, request}) => {
    const header = formatRLE(Codecs.String.encode(fallbackProvider), { length: 1 });
    return new Uint8Array([...header, ...request]);
  },

  decode: (bytes) => {
    const { range, remainder } = parseRLE(bytes, 0, { length: 1 });
    const fallbackProvider = Codecs.String.decode(range);
    return { fallbackProvider, request: remainder };
  },
};

/**
 * A request topic that can send a request with a fallback provider URI. If the user has no provider for the inner request topic, the fallback provider will be used.
 */
export const requestFallbackProvider = new RequestTopic({
  id: 'org.passes.request-fallback-provider',
  requestBodyCodec: RequestWithFallbackProviderCodec,
  resultBodyCodec: Codecs.Bytes,
});
