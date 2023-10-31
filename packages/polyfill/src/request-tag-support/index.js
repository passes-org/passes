import * as passesDevV1SetPassEngine from './passesDevV1SetPassEngine';

/** @type {Record<string, (request: Uint8Array) => Promise<Uint8Array>>} */
export const SUPPORTED_REQUEST_TAGS = {
  [passesDevV1SetPassEngine.REQUEST_TAG]: passesDevV1SetPassEngine.support,
};
