/// <reference lib="dom" />
import { providePass } from '@passes/reqs/topics/pass-providers';
import { beforeAll, describe, expect, it, mock } from 'bun:test';
import './main.js';

describe('polyfill', () => {
  it('redirects to passes.org with a return url in the same window when document.passes.request is called with a org.passes.provide-pass pass request', async () => {
    // Create a mock for window.open
    window.open = mock(() => new Window());

    // Send a provide-pass request
    providePass.sendRequest({
      uri: 'https://test-pass-provider.com',
      principal: 'test-principal',
    });

    // Expect the window to redirect to passes.org/request with provider and return query params
    await moment(); // Wait a moment for window.open to be called
    expect(window.open).toHaveBeenCalledWith('https://passes.org/set-pass-provider?provider=https%3A%2F%2Ftest-pass-provider.com&return=about%3Ablank', '_self');
  });
});

const moment = () => new Promise(resolve => setTimeout(resolve, 0));