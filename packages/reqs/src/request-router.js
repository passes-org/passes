import { EnvelopeV0 } from './envelope-v0';

/**
 * @template TSupport
 * @typedef {Record<string, (rawRequest: Uint8Array) => TSupport>} SupportMap
 */

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