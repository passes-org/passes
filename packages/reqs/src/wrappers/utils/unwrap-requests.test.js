import { describe, it, expect } from 'bun:test';
import { RequestTopic } from '../../request-topic.js';
import * as Codecs from '../../codecs/index.js';
import { unwrapRequests } from './unwrap-requests.js';
import { requestBatch } from '../request-batch.js';
import { requestWithDefaultProvider } from '../request-with-default-provider.js';

describe('unwrapRequests', () => {
  it('returns a non-wrapped request', async () => {
    const TOPIC = new RequestTopic({
      id: 'non-wrapped-test',
      requestBodyCodec: Codecs.Void,
      resultBodyCodec: Codecs.Void,
    });

    const REQUEST = await TOPIC.encodeRequest();
    const RESULT = await TOPIC.encodeResult({ status: 'accepted' });

    const unwrapped = await unwrapRequests(REQUEST);
    const wrappedResult = await unwrapped.wrapResults([RESULT]);

    expect(unwrapped.defaultProvider).toBeUndefined();
    expect(unwrapped.requests.length).toBe(1);
    expect(unwrapped.requests[0]).toEqual(REQUEST);
    expect(wrappedResult).toEqual(RESULT);
  });

  it('returns a request-batch wrapped request', async() => {
    const INNER_TOPIC = new RequestTopic({
      id: 'request-batch-wrapped-test',
      requestBodyCodec: Codecs.Void,
      resultBodyCodec: Codecs.Void,
    });

    const INNER_REQUEST = await INNER_TOPIC.encodeRequest();
    const INNER_RESULT = await INNER_TOPIC.encodeResult({ status: 'accepted' });
    const BATCH_REQUEST = await requestBatch.encodeRequest([INNER_REQUEST, INNER_REQUEST]);
    
    const unwrapped = await unwrapRequests(BATCH_REQUEST);
    const wrappedResult = await unwrapped.wrapResults([INNER_RESULT, INNER_RESULT]);

    expect(unwrapped.defaultProvider).toBeUndefined();
    expect(unwrapped.requests.length).toBe(2);
    expect(unwrapped.requests[0]).toEqual(INNER_REQUEST);
    expect(unwrapped.requests[1]).toEqual(INNER_REQUEST);
    expect(wrappedResult).toEqual(await requestBatch.encodeResult({
      status: 'accepted',
      body: [INNER_RESULT, INNER_RESULT],
    }));
  });

  it('returns a request-with-default-provider wrapped request', async () => {
    const INNER_TOPIC = new RequestTopic({
      id: 'request-with-default-provider-wrapped-test',
      requestBodyCodec: Codecs.Void,
      resultBodyCodec: Codecs.Void,
    });

    const INNER_REQUEST = await INNER_TOPIC.encodeRequest();
    const INNER_RESULT = await INNER_TOPIC.encodeResult({ status: 'accepted' });
    const WITH_DEFAULT_PROVIDER_REQUEST = await requestWithDefaultProvider.encodeRequest({
      defaultProvider: 'test-provider',
      request: INNER_REQUEST,
    });

    const unwrapped = await unwrapRequests(WITH_DEFAULT_PROVIDER_REQUEST);
    const wrappedResult = await unwrapped.wrapResults([INNER_RESULT]);

    expect(unwrapped.defaultProvider).toBe('test-provider');
    expect(unwrapped.requests.length).toBe(1);
    expect(unwrapped.requests[0]).toEqual(INNER_REQUEST);
    expect(wrappedResult).toEqual(await requestWithDefaultProvider.encodeResult({
      status: 'accepted',
      body: INNER_RESULT,
    }));
  });

  it('returns a request-with-default-provider + request-batch wrapped request', async () => {
    const INNER_TOPIC = new RequestTopic({
      id: 'request-batch-with-default-provider-wrapped-test',
      requestBodyCodec: Codecs.Void,
      resultBodyCodec: Codecs.Void,
    });

    const INNER_REQUEST = await INNER_TOPIC.encodeRequest();
    const INNER_RESULT = await INNER_TOPIC.encodeResult({ status: 'accepted'});
    const BATCH_REQUEST = await requestBatch.encodeRequest([INNER_REQUEST, INNER_REQUEST]);
    const WITH_DEFAULT_PROVIDER_REQUEST = await requestWithDefaultProvider.encodeRequest({
      defaultProvider: 'test-provider',
      request: BATCH_REQUEST,
    });

    const unwrapped = await unwrapRequests(WITH_DEFAULT_PROVIDER_REQUEST);
    const wrappedResult = await unwrapped.wrapResults([INNER_RESULT, INNER_RESULT]);

    expect(unwrapped.defaultProvider).toBe('test-provider');
    expect(unwrapped.requests.length).toBe(2);
    expect(unwrapped.requests[0]).toEqual(INNER_REQUEST);
    expect(unwrapped.requests[1]).toEqual(INNER_REQUEST);
    expect(wrappedResult).toEqual(await requestWithDefaultProvider.encodeResult({
      status: 'accepted',
      body: await requestBatch.encodeResult({
        status: 'accepted',
        body: [INNER_RESULT, INNER_RESULT],
      }),
    }));
  });
});