import { describe, it, expect, mock } from 'bun:test';
import * as Codecs from '../../codecs/index.js';
import { sendRequestBatch } from './send-request-batch.js';
import { RequestTopic } from '../../request-topic.js';
import { requestBatch } from '../request-batch.js';

describe('sendRequestBatch', () => {
  it('sends an array of requests wrapped in a request-batch, and unwraps its result when accepted', async () => {
    const REQUEST_1_REQUEST_BODY = 'test request 1';
    const REQUEST_1_RESULT_BODY = 'Request 1 has been accepted';
    const REQUEST_1_TOPIC = new RequestTopic({
      id: 'test1',
      requestBodyCodec: Codecs.String,
      resultBodyCodec: Codecs.String,
    });

    const REQUEST_2_REQUEST_BODY = 1234;
    const REQUEST_2_RESULT_BODY = { message: 'Request 2 has been accepted' };
    const REQUEST_2_TOPIC =
      /** @type {RequestTopic<number, { message: string }>} */
      (new RequestTopic({
        id: 'test2',
        requestBodyCodec: Codecs.Number,
        resultBodyCodec: Codecs.Json,
      }));

    /** @type {import('../../browser-types.jsdoc.mjs').PassesABI} */
    const ABI_MOCK = {
      request: mock(async () => {
        const wrappedResult1 = await REQUEST_1_TOPIC.encodeResult({ status: 'accepted', body: REQUEST_1_RESULT_BODY });
        const wrappedResult2 = await REQUEST_2_TOPIC.encodeResult({ status: 'accepted', body: REQUEST_2_RESULT_BODY });
        const outerResult = await requestBatch.encodeResult({ status: 'accepted', body: [wrappedResult1, wrappedResult2] });

        return outerResult;
      }),
    };

    const result = await sendRequestBatch({
      requests: [
        { topic: REQUEST_1_TOPIC, body: REQUEST_1_REQUEST_BODY },
        { topic: REQUEST_2_TOPIC, body: REQUEST_2_REQUEST_BODY },
      ],
      abi: ABI_MOCK,
    });

    expect(ABI_MOCK.request).toHaveBeenCalled();
    expect(result.status).toBe('accepted');
    expect(result.body).toEqual([
      'Request 1 has been accepted',
      { message: 'Request 2 has been accepted' },
    ]);
  });

  it('returns an exception result if the batch request is accepted and any of the inner requests are rejected', async () => {
    const REQUEST_1_REQUEST_BODY = 'test request 1';
    const REQUEST_1_RESULT_BODY = 'Request 1 has been accepted';
    const REQUEST_1_TOPIC = new RequestTopic({
      id: 'test1',
      requestBodyCodec: Codecs.String,
      resultBodyCodec: Codecs.String,
    });

    const REQUEST_2_REQUEST_BODY = 1234;
    const REQUEST_2_TOPIC =
      /** @type {RequestTopic<number, { message: string }>} */
      (new RequestTopic({
        id: 'test2',
        requestBodyCodec: Codecs.Number,
        resultBodyCodec: Codecs.Json,
      }));

    /** @type {import('../../browser-types.jsdoc.mjs').PassesABI} */
    const ABI_MOCK = {
      request: mock(async () => {
        const wrappedResult1 = await REQUEST_1_TOPIC.encodeResult({ status: 'accepted', body: REQUEST_1_RESULT_BODY });
        const wrappedResult2 = await REQUEST_2_TOPIC.encodeResult({ status: 'rejected' });
        const outerResult = await requestBatch.encodeResult({ status: 'accepted', body: [wrappedResult1, wrappedResult2] });

        return outerResult;
      }),
    };

    const result = await sendRequestBatch({
      requests: [
        { topic: REQUEST_1_TOPIC, body: REQUEST_1_REQUEST_BODY },
        { topic: REQUEST_2_TOPIC, body: REQUEST_2_REQUEST_BODY },
      ],
      abi: ABI_MOCK,
    });

    expect(ABI_MOCK.request).toHaveBeenCalled();
    expect(result.status).toBe('exception');
    expect(result.message).toBe('Invariant violation: request batch with status "accepted" contained an inner result with status !== "accepted"');
  });
});
