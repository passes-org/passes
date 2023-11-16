import { request } from "./polyfill-request";

/**
 * Returns whether the document.passes ABI is already available. If this returns false, the ABI will be polyfilled.
 * 
 * @returns {boolean}
 */
function isPassesSupported() {
  return typeof document.passes !== 'undefined'
  && typeof document.passes.request === 'function';
}

if (!isPassesSupported()) {
  document.passes = { request };
}

/**
 * If `document.passes` isn't already set, loading this module will set it to the polyfill implementation:
 * {@inheritdoc request}
 */
export {};