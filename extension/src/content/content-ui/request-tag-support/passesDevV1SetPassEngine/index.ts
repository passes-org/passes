import toast from "../../../../lib/toast";
import { mountToaster } from "../../_common/toaster";
import { getRequestBody } from "../../request/utils";
import ConfirmToast from "./ConfirmToast.svelte";

export const REQUEST_TAG = 'https://passes.dev/v1/set-pass-engine';

export function support(request: Uint8Array): Promise<Uint8Array> {
  const { uri, userkey } = JSON.parse(decoder.decode(getRequestBody(request)));

  return (async () => {
    mountToaster();
    const approved = await new Promise<boolean>((resolve) => {
      toast(ConfirmToast, {
        duration: Infinity,
        props: {
          callback: resolve,
          uri,
          userkey,
        }
      });
    });

    return new Uint8Array([approved ? 0x00 : 0x01]);
  })();
}

const decoder = new TextDecoder();
