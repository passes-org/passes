import type { RequestResult } from "passes-protocol";
import * as storage from "../../../lib/storage";
import { SUPPORTED_REQUEST_TAGS } from "../request-tag-support";
import RequestFrame from "./RequestFrame.svelte";
import { getRequestTag, postToIframe } from "./utils";

export async function request(
  raw: Uint8Array,
) {
  // Get the request tag to check if it has built-in support
  const requestTag = getRequestTag(raw);

  // Match and handle any request tags with built-in support
  const builtinSupportFn = SUPPORTED_REQUEST_TAGS[requestTag];
  if (builtinSupportFn) {
    return builtinSupportFn(raw);
  }
  
  const passEngineURI = await storage.passEngineURI.get();
  const userkey = await storage.passEngineUserkey.get();

  const formData = new FormData();
  formData.set('userkey', userkey!);
  formData.set('request', new File([new Blob([raw])], 'request'));
  postToIframe('pass-engine', passEngineURI!, formData);

  // Create a promise and resolver fn which will be used to return a promise that gets resolved from handleMessage once there's a result
  let requestFrame: RequestFrame;
  let resolveResultPromise: (result: Uint8Array) => void;
  const resultPromise = new Promise<Uint8Array>((resolve) => { resolveResultPromise = resolve; });

  function handleMessage(event: MessageEvent<RequestResult>) {
    const message = event.data;

    // Ignore messages that aren't from the pass engine window opened in this call
    // if (event.origin !== requestContextURL) return;

    // Ignore messages that aren't request results
    if (message.type !== 'request-result') return;

    // Resolve the result promise returned by this function
    resolveResultPromise(message.result);
    // Close the window
    requestFrame.$destroy();
    // Remove the message event listener
    window.removeEventListener('message', handleMessage);
  }

  // Listen for messages
  window.addEventListener('message', handleMessage);

  // Create requestFrame
  requestFrame = new RequestFrame({ target: document.body });
  
  return resultPromise;
}