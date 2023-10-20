import { request } from "./polyfill-request";
import './declarations.d';

function isPassesSupported(): boolean {
  return typeof document.passes !== 'undefined'
  && typeof document.passes.request === 'function';
}

if (!isPassesSupported()) {
  document.passes = { request };
}
