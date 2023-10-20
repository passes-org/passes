import * as passesDevV1SetPassEngine from './passesDevV1SetPassEngine';

export const SUPPORTED_REQUEST_TAGS: Record<string, (request: Uint8Array) => Promise<Uint8Array>> = {
  [passesDevV1SetPassEngine.REQUEST_TAG]: passesDevV1SetPassEngine.support,
};
