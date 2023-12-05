import { request } from "./polyfill-request";

/**
 * Returns whether the document.passes ABI is already available. If this returns false, the ABI will be polyfilled.
 * 
 * @returns {boolean}
 */
function isPassesSupported() {
  /** @type {import("./browser-types.jsdoc.mjs").DocumentWithPasses} */
  const _document = document;
  return typeof _document.passes !== 'undefined'
  && typeof _document.passes.request === 'function';
}

if (!isPassesSupported()) {
  /** @type {import("./browser-types.jsdoc.mjs").DocumentWithPasses} */
  (document).passes = { request };
}

/**
 * If `document.passes` isn't already set, loading this module will set it to the polyfill implementation:
 * {@inheritdoc request}
 */
export {};