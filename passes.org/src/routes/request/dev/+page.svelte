<script lang="ts">
  import { openWindowWithPost } from "../../../../../packages/polyfill/src/utils";
  import { Codecs, RequestType } from "../../../../../packages/reqs";
  import type { RequestResult } from "../../../../../packages/types";

  let result: any;

  async function onClick() {
    const req = new RequestType('this-is-a-demo', Codecs.String, Codecs.String);
    const raw =  await req.encodeRequest('test test test!!!');

    const formData = new FormData();
    formData.set('request', new Blob([raw]));
    const passEngineWindow = openWindowWithPost(`../request`, formData);

    /**
     * Handles request-result messages from the pass engine window.
     * 
     * @param {MessageEvent<import("@passes/types").RequestResult>} event 
     * @returns {void}
     */
    async function handleMessage(event: MessageEvent<RequestResult>) {
      const message = event.data;
      // Ignore messages that aren't from the pass engine window opened in this call
      if (event.source !== passEngineWindow) return;
      // Ignore messages that aren't request results
      if (message.type !== 'request-result') return;

      result = await req.decodeResult(message.result);
      // Close the window
      passEngineWindow.close();
    }

    // Handle messages from the passEngineWindow
    window.addEventListener('message', handleMessage);

    // When the passEngineWindow closes, remove the message handler from this window
    passEngineWindow.addEventListener('close', () => window.removeEventListener('message', handleMessage));
  }
</script>

<button on:click={onClick}>Send Request to Springboard</button>

{#if result}
  <h2>Result</h2>
  <pre>{JSON.stringify(result)}</pre>
{/if}