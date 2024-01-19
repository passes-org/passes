/// <reference lib="dom" />
import { RequestTopic } from '@passes/reqs';
import * as Codecs from '@passes/reqs/codecs';
import { afterAll, describe, expect, it, mock } from 'bun:test';
import { Window } from 'happy-dom';

/** @type {import("./browser-types.jsdoc.mjs").DocumentWithPasses} */
const _document = document;

describe('polyfill', () => {
  // Effectful!! This sets document.passes
  it('applies if document.passes is NOT already set', () => {
    require('./main.js');
    expect(_document.passes).toHaveProperty('request');
  });

  it('opens passes.org in a new window when document.passes.request is called with a normal pass request', async () => {
    // Create a mock for window.open and the pass provider window's postMessage
    const passProviderWindow = new Window();
    passProviderWindow.close = mock(() => {});
    passProviderWindow.postMessage = mock(() => undefined);
    // @ts-ignore
    window.open = mock(() => passProviderWindow);

    // Send a pass request
    const sendRequestPromise = TEST_TOPIC.sendRequest('hello');

    // Expect window.open to open to passes.org/request in a new tab
    await moment(); // Wait a moment for window.open to be called
    expect(window.open).toHaveBeenCalledWith('https://passes.org/request', '_blank');

    // Simulate the Pass Provider window posting a connect message
    window.dispatchEvent(new MessageEvent('message', { 
      data: { type: 'org.passes.messaging.connect' },
      origin: 'https://passes.org',
      // @ts-ignore
      source: passProviderWindow,
      lastEventId: '',
    }));

    // Expect a request message to be posted to the Pass Provider window
    await moment(); // Wait a moment for the message to be posted
    expect(passProviderWindow.postMessage).toHaveBeenCalledWith({ type: 'org.passes.messaging.request', request: await TEST_TOPIC.encodeRequest('hello') }, '*');

    // Simulate the Pass Provider window posting a result message
    window.dispatchEvent(new MessageEvent('message', { 
      data: { type: 'org.passes.messaging.result', result: await TEST_TOPIC.encodeResult({ status: 'accepted', body: 'hello yourself!' }) },
      origin: 'https://test-pass-provider.com',
      // @ts-ignore
      source: passProviderWindow,
      lastEventId: '',
    }));

    const result = await sendRequestPromise;
    expect(result).toEqual({ status: 'accepted', body: 'hello yourself!' });
    expect(passProviderWindow.close).toHaveBeenCalled();
  }, 1000);
});

const moment = () => new Promise(resolve => setTimeout(resolve, 0));

const TEST_TOPIC = new RequestTopic({
  id: 'org.passes.test',
  requestBodyCodec: Codecs.String,
  resultBodyCodec: Codecs.String,
});