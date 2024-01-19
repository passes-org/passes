/// <reference lib="dom" />
import { describe, expect, it } from 'bun:test';

/** @type {import("./browser-types.jsdoc.mjs").DocumentWithPasses} */
const _document = document;

describe('polyfill', () => {
  it('does NOT apply if document.passes is already set', () => {
    // Save the existing document.passes ABI so we can restore it after the test
    const oldPassesABI = _document.passes;

    // Set an existing document.passes ABI
    const existingSupport = { request: async () => new Uint8Array([0]) };
    _document.passes = existingSupport;

    // Load the polyfill
    require('./main.js');

    // Assert that the polyfill did NOT apply
    expect(_document.passes).toBe(existingSupport);

    // Restore the original document.passes ABI
    _document.passes = oldPassesABI;
  });
});
