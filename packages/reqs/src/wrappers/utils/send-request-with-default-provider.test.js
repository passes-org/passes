import { describe, it, expect, mock } from 'bun:test';
import * as Codecs from '../../codecs/index.js';
import { sendRequestWithDefaultProvider } from './send-request-with-default-provider.js';
import { RequestTopic } from '../../request-topic.js';
import { requestWithDefaultProvider } from '../request-with-default-provider.js';

describe('sendRequestWithDefaultProvider', () => {
  it('sends a request wrapped in a request-with-default-provider, and unwraps its result when accepted', async () => {
    const REQUEST_BODY = 'test request';
    const RESULT_BODY = 'The request has been accepted';
    const TOPIC = new RequestTopic({
      id: 'test',
      requestBodyCodec: Codecs.String,
      resultBodyCodec: Codecs.String,
    });

    /** @type {import('../../browser-types.jsdoc.mjs').PassesABI} */
    const ABI_MOCK = {
      request: mock(async () => {
        const wrappedResult = await TOPIC.encodeResult({ status: 'accepted', body: RESULT_BODY });
        const outerResult = await requestWithDefaultProvider.encodeResult({ status: 'accepted', body: wrappedResult });

        return outerResult;
      }),
    };

    const result = await sendRequestWithDefaultProvider({
      topic: TOPIC,
      body: REQUEST_BODY,
      defaultProvider: 'https://default-provider.com',
      abi: ABI_MOCK,
    });

    expect(ABI_MOCK.request).toHaveBeenCalled();
    expect(result.status).toBe('accepted');
    expect(result.body).toBe('The request has been accepted');
  });
});
