/// <reference lib="dom" />
import { RequestTopic } from '@passes/reqs';
import * as Codecs from '@passes/reqs/codecs';
import { requestWithDefaultProvider } from '@passes/reqs/wrappers';
import { describe, expect, it, mock } from 'bun:test';
import './main.js';

describe('polyfill', () => {
  it('opens org.passes.request-with-default-provider requests to https://passes.org/request with a defaultProvider query param', async () => {
    // Create a mock for window.open
    window.open = mock(() => new Window());

    // Send a request-with-default-provider request
    requestWithDefaultProvider.sendRequest({
      defaultProvider: 'https://test-pass-provider.com',
      request: await TEST_TOPIC.encodeRequest('hello'),
    });

    // Expect window.open to open to passes.org/request in a new tab
    await moment(); // Wait a moment for window.open to be called
    expect(window.open).toHaveBeenCalledWith('https://passes.org/request?defaultProvider=https%3A%2F%2Ftest-pass-provider.com', '_blank');
  });
});

const moment = () => new Promise(resolve => setTimeout(resolve, 0));

const TEST_TOPIC = new RequestTopic({
  id: 'org.passes.test',
  requestBodyCodec: Codecs.String,
  resultBodyCodec: Codecs.String,
});