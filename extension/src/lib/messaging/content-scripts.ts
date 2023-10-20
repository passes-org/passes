
type ProtocolFunction<TReq, TRes extends Promise<any>> = (req: TReq) => TRes;
interface ProtocolMap {
  request: ProtocolFunction<{ request: Uint8Array }, Promise<Uint8Array>>;
}

type MessageEnvelope<TRequestMethod extends string, TMessage> = {
  envelope:
    | { type: 'request'; id: string; method: TRequestMethod }
    | { type: 'result'; id: string };
  message: TMessage;
};

export function onRequestFromWindow<
  TRequestMethod extends keyof ProtocolMap,
  TRequestBody extends Parameters<ProtocolMap[TRequestMethod]>[0],
  TResultBody extends ReturnType<ProtocolMap[TRequestMethod]>,
>(method: TRequestMethod, handler: ProtocolFunction<TRequestBody, TResultBody>) {
  async function wrappedHandler(event: MessageEvent<MessageEnvelope<TRequestMethod, TRequestBody>>) {
    // Verify the sender
    if (event.source !== window) return;
    // Verify the origin
    if (event.origin !== window.location.origin) return;

    const { envelope, message } = event.data;
    // Check envelope type
    if (envelope?.type !== 'request') return;
    // Check envelope method
    if (envelope.method !== method) return;

    // Call the wrapped handler
    const result = await handler(message) as TResultBody;
    
    // Post a result message to the window
    window.postMessage({
      envelope: { type: 'result', id: envelope.id },
      message: result,
    } satisfies MessageEnvelope<TRequestMethod, TResultBody>, window.location.origin);
  }

  // Add the wrapped handler message listener to the window
  window.addEventListener('message', wrappedHandler);
}

export async function sendRequestToWindow<
  TRequestMethod extends keyof ProtocolMap,
  TRequestBody extends Parameters<ProtocolMap[TRequestMethod]>[0],
  TResultBody extends ReturnType<ProtocolMap[TRequestMethod]>,
>(method: TRequestMethod, req: TRequestBody): Promise<TResultBody>  {
  const id = crypto.randomUUID();

  let resolve: (res: TResultBody) => void;
  const promise = new Promise<TResultBody>((res) => { resolve = res });

  function handleResult(event: MessageEvent<MessageEnvelope<TRequestMethod, TRequestBody>>) {
    // Verify the sender
    if (event.source !== window) return;
    // Verify the origin
    if (event.origin !== window.location.origin) return;

    const { envelope, message } = event.data;
    // Check envelope type
    if (envelope?.type !== 'result') return;
    // Check envelope id
    if (envelope.id !== id) return;

    // Resolve the promise returned by sendRequest
    resolve(message as unknown as TResultBody);

    // Clean up... remove the listener for this message now that it's been handled
    window.removeEventListener('message', handleResult);
  }

  // Add an event listener for result messages for this request
  window.addEventListener('message', handleResult);

  // Post a request message to the window
  window.postMessage({
    envelope: { type: 'request', id, method },
    message: req,
  } satisfies MessageEnvelope<TRequestMethod, TRequestBody>, window.location.origin);

  // Return the promise that will be resolved in handleResult
  return promise;
}