import * as Codecs from "../codecs/index.js";
import { parseTopic } from "../parse-topic.js";
import { formatRLE, parseRLE } from "../private/rle.js";
import { RequestTopic } from "../request-topic.js";

/**
 * An error thrown when a request with default provider contains a request with default provider.
 */
export class RequestWithDefaultProviderCannotContainRequestWithDefaultProviderError extends Error {
  name = 'RequestWithDefaultProviderCannotContainRequestWithDefaultProviderError';
  message = 'A request with default provider cannot contain a request with a default provider (topic `org.passes.request-with-default-provider`).';
};

/**
 * A codec for a request with a string header representing the default provider URI (up to 256 bytes long).
 * @type {import("../request-topic.jsdoc.mjs").Codec<{ defaultProvider: string; request: Uint8Array }>} - The raw request and the default provider URI.
 */
export const RequestWithDefaultProviderCodec = {
  encode: ({ defaultProvider, request }) => {
    const header = formatRLE(Codecs.String.encode(defaultProvider), { length: 1 });

    // A request with default provider cannot contain a request with default provider
    if (parseTopic(request) === requestWithDefaultProvider.id) throw new RequestWithDefaultProviderCannotContainRequestWithDefaultProviderError();

    return new Uint8Array([...header, ...request]);
  },

  decode: (bytes) => {
    const { range, remainder } = parseRLE(bytes, 0, { length: 1 });
    const defaultProvider = Codecs.String.decode(range);
    return { defaultProvider, request: remainder };
  },
};

/**
 * A request topic that can send a request with a default provider URI. If the user has no provider for the inner request topic, the default provider will be used.
 */
export const requestWithDefaultProvider = new RequestTopic({
  id: 'org.passes.request-with-default-provider',
  requestBodyCodec: RequestWithDefaultProviderCodec,
  resultBodyCodec: Codecs.Bytes,
});
