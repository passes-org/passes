/// <reference types="@passes/types" />

import { request } from "./polyfill-request";

function isPassesSupported(): boolean {
  return typeof document.passes !== 'undefined'
  && typeof document.passes.request === 'function';
}

if (!isPassesSupported()) {
  document.passes = { request };
}
