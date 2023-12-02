import { EnvelopeV0 } from './envelope-v0.js';

// JSDoc Type Imports
/** @template TSupport @typedef {import('./request-router.jsdoc.mjs').SupportMap<TSupport>} SupportMap */

/**
 * @template TRoute
 * @property {SupportMap<TRoute>} supportMap
 */
export class RequestRouter {
  /** @param {SupportMap<TRoute>} supportMap */
  constructor(supportMap) {
    this.supportMap = supportMap;
  }

  /**
   * @param {Uint8Array} rawRequest
   * @returns {TRoute | null}
   */
  route(rawRequest) {
    const { tag: requestTag } = EnvelopeV0.parseRequest(rawRequest);
    const supportFn = this.supportMap[requestTag];

    if (typeof supportFn === 'function') {
      return supportFn(rawRequest);
    }

    return null;
  }
}