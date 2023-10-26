import { RequestResult } from "passes-protocol";
import { PASSES_BASE_URL } from "./constants";
import { getRequestTag, openWindowWithPost } from "./utils";
import { SUPPORTED_REQUEST_TAGS } from "./request-tag-support";

export async function request(raw: Uint8Array): Promise<Uint8Array> {
  // Get the request tag to check if it has built-in support
  const requestTag = getRequestTag(raw);

  // Match and handle any request tags with built-in support
  const builtinSupportFn = SUPPORTED_REQUEST_TAGS[requestTag];
  if (builtinSupportFn) {
    return builtinSupportFn(raw);
  }

  // Create request context params
  const formData = new FormData();
  formData.set('request', new Blob([raw]));
  const passEngineWindow = openWindowWithPost(`${PASSES_BASE_URL}/v1/request`, formData);

  // Create a promise and resolver fn which will be used to return a promise that gets resolved from handleMessage once there's a result
  let resolveResultPromise: (result: Uint8Array) => void;
  const resultPromise = new Promise<Uint8Array>((resolve) => { resolveResultPromise = resolve; });

  function handleMessage(event: MessageEvent<RequestResult>) {
    const message = event.data;

    // Ignore messages that aren't from the pass engine window opened in this call
    if (event.source !== passEngineWindow) return;

    // Ignore messages that aren't request results
    if (message.type !== 'request-result') return;

    // Resolve the result promise returned by this function
    resolveResultPromise(message.result);
    // Close the window
    passEngineWindow.close();
  }

  // Handle messages from the passEngineWindow
  window.addEventListener('message', handleMessage);

  // When the passEngineWindow closes, remove the message handler from this window
  passEngineWindow.addEventListener('close', () => window.removeEventListener('message', handleMessage));

  // Return the promise for the request result, which will be resolved in handleMessage above
  return resultPromise;
}
