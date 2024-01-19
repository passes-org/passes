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
    const { defaultProvider, requests } = await unwrapRequests(REQUEST);

    expect(defaultProvider).toBeUndefined();
    expect(requests.length).toBe(1);
    expect(requests[0]).toEqual(REQUEST);
  });

  it('returns a request-batch wrapped request', async() => {
    const TOPIC_INNER = new RequestTopic({
      id: 'request-batch-wrapped-test',
      requestBodyCodec: Codecs.Void,
      resultBodyCodec: Codecs.Void,
    });

    const REQUEST_INNER = await TOPIC_INNER.encodeRequest();
    const REQUEST_BATCH = await requestBatch.encodeRequest([REQUEST_INNER, REQUEST_INNER]);
    const { defaultProvider, requests } = await unwrapRequests(REQUEST_BATCH);

    expect(defaultProvider).toBeUndefined();
    expect(requests.length).toBe(2);
    expect(requests[0]).toEqual(REQUEST_INNER);
    expect(requests[1]).toEqual(REQUEST_INNER);
  });

  it('returns a request-with-default-provider wrapped request', async () => {
    const TOPIC_INNER = new RequestTopic({
      id: 'request-with-default-provider-wrapped-test',
      requestBodyCodec: Codecs.Void,
      resultBodyCodec: Codecs.Void,
    });

    const REQUEST_INNER = await TOPIC_INNER.encodeRequest();
    const REQUEST_WITH_DEFAULT_PROVIDER = await requestWithDefaultProvider.encodeRequest({
      defaultProvider: 'test-provider',
      request: REQUEST_INNER,
    });
    const { defaultProvider, requests } = await unwrapRequests(REQUEST_WITH_DEFAULT_PROVIDER);

    expect(defaultProvider).toBe('test-provider');
    expect(requests.length).toBe(1);
    expect(requests[0]).toEqual(REQUEST_INNER);
  });

  it('returns a request-with-default-provider + request-batch wrapped request', async () => {
    const TOPIC_INNER = new RequestTopic({
      id: 'request-batch-with-default-provider-wrapped-test',
      requestBodyCodec: Codecs.Void,
      resultBodyCodec: Codecs.Void,
    });

    const REQUEST_INNER = await TOPIC_INNER.encodeRequest();
    const REQUEST_BATCH = await requestBatch.encodeRequest([REQUEST_INNER, REQUEST_INNER]);
    const REQUEST_WITH_DEFAULT_PROVIDER = await requestWithDefaultProvider.encodeRequest({
      defaultProvider: 'test-provider',
      request: REQUEST_BATCH,
    });
    const { defaultProvider, requests } = await unwrapRequests(REQUEST_WITH_DEFAULT_PROVIDER);

    expect(defaultProvider).toBe('test-provider');
    expect(requests.length).toBe(2);
    expect(requests[0]).toEqual(REQUEST_INNER);
    expect(requests[1]).toEqual(REQUEST_INNER);
  });
});