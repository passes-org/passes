<script>
	import { openWindowWithPost } from "$lib/openWindowWithPost.js";
	import { Codecs, RequestType } from "../../../../../packages/reqs";
	import { bodyTextToBodyType } from "../SpringBoard/bodyTextToBodyType";
	import { resultBodyToDisplayString } from "../SpringBoard/bodyToDisplayString";

  let requestTag = $state('org.passes.example.my-request');
  /** @type {keyof typeof Codecs} */
  let requestBodyCodec = $state('String');
  /** @type {keyof typeof Codecs} */
  let resultBodyCodec = $state('String');
  let requestBodyText = $state('');
  /** @type {string | undefined} */
  let resultStatus = $state();
  /** @type {string | null} */
  let resultBodyText = $state(null);

  async function sendRequest() {
    const reqType = new RequestType({
      requestTag,
      requestBodyCodec: Codecs[requestBodyCodec],
      resultBodyCodec: Codecs[resultBodyCodec]
    });
    const richRequestBody = await bodyTextToBodyType(requestBodyText, Codecs[requestBodyCodec])
    const rawRequestBody = await reqType.encodeRequest(richRequestBody);

    const formData = new FormData();
    formData.set('request', new Blob([rawRequestBody]));
    const passEngineWindow = openWindowWithPost(`../request`, formData);

    /**
     * Handles request-result messages from the pass engine window.
     * 
     * @param {MessageEvent<import("../../../../../packages/reqs").TransportEncodedRequestResult>} event 
     * @returns {Promise<void>}
     */
    async function handleMessage(event) {
      const message = event.data;
      // Ignore messages that aren't from the pass engine window opened in this call
      if (event.source !== passEngineWindow) return;
      // Ignore messages that aren't request results
      if (message.type !== 'request-result') return;

      const decodedResult = await reqType.decodeResult(message.result);
      resultStatus = decodedResult.status;
      resultBodyText = decodedResult.status === 'accepted'
        ? await resultBodyToDisplayString(message.result, Codecs[resultBodyCodec])
        : null;
      // Close the window
      passEngineWindow.close();
    }

    // Handle messages from the passEngineWindow
    window.addEventListener('message', handleMessage);

    // When the passEngineWindow closes, remove the message handler from this window
    passEngineWindow.addEventListener('close', () => window.removeEventListener('message', handleMessage));
  }
</script>

<div class="flex flex-col space-y-20">
  <!-- Title -->
  <h1 class="text-3xl text-center opacity-50">Request Composer</h1>

  <!-- Main -->
  <main class="grid grid-cols-1 gap-5 lg:grid-cols-2">

    <!-- Request -->
    <div class="flex flex-col px-4 py-8 space-y-4 border border-black rounded dark:border-white">
      <!-- Tag -->
      <div class="flex flex-col items-stretch p-3 space-y-4 border border-black/10 dark:border-white/10">
        <div class="font-semibold opacity-50 font-sm">Request Tag</div>
        <input bind:value={requestTag} placeholder="com.my-site.my-new-request-tag">
      </div>
      <!-- Request Body -->
      <div class="flex flex-col flex-1 p-3 space-y-4 border border-black/10 dark:border-white/10">
        <!-- Title Row -->
        <div class="flex justify-between">
          <div class="font-semibold opacity-50 font-sm">Request Body</div>
          <select bind:value={requestBodyCodec} class="px-1 border border-black rounded-full dark:border-white font-sm">
            <option value="BigInt">BigInt</option>
            <option value="Boolean">Boolean</option>
            <option value="Bytes">Bytes</option>
            <option value="Json">JSON</option>
            <option value="Number">Number</option>
            <option value="String">String</option>
            <option value="Void">Void</option>
          </select>
        </div>
        <!-- Content -->
        <textarea 
          bind:value={requestBodyText}
          class="rounded-sm outline-none resize-none h-44 focus:ring-2 ring-white/30"
          placeholder="Result Body"
        />
      </div>
      <!-- Result Body Codec -->
      <div class="flex justify-between p-3 border border-black/10 dark:border-white/10">
        <div class="font-semibold opacity-50 font-sm">Result Body Codec</div>
          <select bind:value={resultBodyCodec} class="px-1 border border-black rounded-full dark:border-white font-sm">
            <option value="BigInt">BigInt</option>
            <option value="Boolean">Boolean</option>
            <option value="Bytes">Bytes</option>
            <option value="Json">JSON</option>
            <option value="Number">Number</option>
            <option value="String">String</option>
            <option value="Void">Void</option>
          </select>
      </div>
      <!-- Actions -->
      <div class="flex space-x-4">
        <button class="flex-1 px-4 py-2 font-semibold border border-black rounded dark:border-white" on:click={sendRequest}>
          Send Request
        </button>
      </div>
    </div>
  
    <!-- Result -->
    <div class="flex flex-col px-4 py-8 space-y-4 border border-black rounded dark:border-white">
      {#if resultStatus}
        <!-- Status -->
        <div class="flex flex-col items-stretch p-3 space-y-4 border border-black/10 dark:border-white/10">
          <div class="font-semibold opacity-50 font-sm">Result Status</div>
          <pre class="flex-1 h-44">{resultStatus}</pre>
        </div>
        <!-- Body -->
        {#if resultStatus === 'accepted'}
          <div class="flex flex-col items-stretch flex-1 p-3 space-y-4 border border-black/10 dark:border-white/10">
            <div class="font-semibold opacity-50 font-sm">Result Body</div>
            <pre class="flex-1 h-44">{resultBodyText}</pre>
          </div>
        {/if}
      {:else}
        <div class="flex flex-col items-center justify-center flex-1 p-3 space-y-4 border border-black/10 dark:border-white/10">
          <div class="font-semibold opacity-50 font-sm">Click "Send Request"</div>
        </div>
      {/if}
    </div>

  </main>
</div>
