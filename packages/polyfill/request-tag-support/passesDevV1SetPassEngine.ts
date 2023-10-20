import { RequestResult } from "passes-protocol";
import { PASSES_BASE_URL } from "../constants";
import { getRequestBody } from "../utils";

export const REQUEST_TAG = 'https://passes.dev/v1/set-pass-engine';

export function support(request: Uint8Array) {
  const { uri } = JSON.parse(decoder.decode(getRequestBody(request)));

  const confirmURL = `${PASSES_BASE_URL}/v1/set-pass-engine?${new URLSearchParams({ url: uri })}`;

  // FIXME: Use a POST request instead
  // Open the passes.dev UI to confirm the user's choice to set their pass engine
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const confirmWindow = window.open(confirmURL)!;

  // Create a promise and resolver fn which will be used to return a promise that gets resolved from handleMessage once there's a result
  let resolveResultPromise: (result: Uint8Array) => void;
  const resultPromise = new Promise<Uint8Array>((resolve) => { resolveResultPromise = resolve; });

  function handleMessage(event: MessageEvent<RequestResult>) {
    const message = event.data;

    // Ignore messages that aren't from the passes.dev window opened in this call
    if (event.source !== confirmWindow) return;

    // Ignore messages that aren't request results
    if (message.type !== 'request-result') return;

    // Resolve the result promise returned by this function
    resolveResultPromise(message.result);
    // Close the window
    confirmWindow.close();
  }

  // Handle messages from the passEngineWindow
  window.addEventListener('message', handleMessage);

  // When the passEngineWindow closes, remove the message handler from this window
  confirmWindow.addEventListener('close', () => window.removeEventListener('message', handleMessage));

  // Return the promise for the request result, which will be resolved in handleMessage above
  return resultPromise;
}

const decoder = new TextDecoder();
