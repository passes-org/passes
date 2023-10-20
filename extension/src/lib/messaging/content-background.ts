import browser from 'webextension-polyfill';

type ProtocolFunction<TReq, TRes extends Promise<any>> = (req: TReq) => TRes;
interface ProtocolMap {
  // TODO: Get rid of this if we don't use it
}

type RequestEnvelope<T> = {
  method: string;
  req: T;
};

export function onRequestFromIsolated<
  TRequestMethod extends keyof ProtocolMap,
  TRequestBody extends Parameters<ProtocolMap[TRequestMethod]>[0],
  TResultBody extends ReturnType<ProtocolMap[TRequestMethod]>,
>(method: TRequestMethod, handler: ProtocolFunction<TRequestBody, TResultBody>) {
  browser.runtime.onMessage.addListener(async function(message, sender) {
    // TODO: Verify the sender?
    // Check method type
    if (message.method !== method) return;
    const result = await handler(message.req);
    return result;
  });
}

export async function sendRequestToBackground<
  TRequestMethod extends keyof ProtocolMap,
  TRequestBody extends Parameters<ProtocolMap[TRequestMethod]>[0],
  TResultBody extends ReturnType<ProtocolMap[TRequestMethod]>,
>(method: TRequestMethod, req: TRequestBody): Promise<Awaited<TResultBody>> {
  const result = await browser.runtime.sendMessage({
    method,
    req,
  } as RequestEnvelope<TRequestBody>)
  return result;
}