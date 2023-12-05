<script>
  import { Codecs, PassProviders, RequestType, parseRequestTag } from '../../../../../packages/reqs/types/main';
  import { bodyTextToBodyType } from "./bodyTextToBodyType.js";
  import { requestBodyToDisplayString } from "./bodyToDisplayString.js";
  import { fetchFaviconUrl } from "./fetchFaviconUrl.js";

  /** @type {{ rawRequest: Uint8Array; referrer: string }}*/
  let { rawRequest, referrer } = $props();

  let faviconUrlPromise = $derived(fetchFaviconUrl(referrer));

  /** @type {keyof typeof Codecs} */
  let requestBodyCodec = $state('String');
  /** @type {keyof typeof Codecs} */
  let resultBodyCodec = $state('String');
  let resultBodyText = $state('');

  let requestTag = $derived(parseRequestTag(rawRequest));
  let requestBodyStringPromise = $derived(requestBodyToDisplayString(rawRequest, Codecs[requestBodyCodec]));

  let requestType = $derived(new RequestType({
    requestTag,
    requestBodyCodec: Codecs[requestBodyCodec],
    resultBodyCodec: Codecs[resultBodyCodec],
  }));

  /**
   * @param {import('../../../../../packages/reqs/types/main').ResultStatus} status
   */
  async function onResult(status) {
    const bodyText = resultBodyText;
    const body = status === 'accepted' && await bodyTextToBodyType(bodyText, Codecs[resultBodyCodec]);
    /** @type {import('../../../../../packages/reqs/types/main').RequestResult<any>} */
    const result = (() => {
      switch (status) {
        case 'accepted': return { status, body };
        case 'rejected': return { status };
        case 'exception': return { status, message: 'An exception occurred' };
        case 'unsupported': return { status };
      }
    })();

    PassProviders.sendResult(requestType, result);
  }
</script>

<div class="flex flex-col space-y-20">
  <!-- Header -->
  <div class="flex flex-col items-center self-center space-y-2">
    <!-- Favicon -->
    <div class="p-[3px] border border-black rounded-xl w-14 h-14 dark:border-white">
      <div class="w-full bg-black rounded-lg aspect-square dark:bg-white">
        {#await faviconUrlPromise then faviconUrl}
          <img src={faviconUrl} class="w-full h-full rounded-lg" alt={referrer} />
        {/await}
      </div>
    </div>
    <!-- Title -->
    <div class="leading-tight text-center">
      Request from<br />
      <b>{referrer}</b>
    </div>
  </div>

  <!-- Main -->
  <main class="grid grid-cols-1 gap-5 lg:grid-cols-2">
    <!-- Request -->
    <div class="flex flex-col px-4 py-8 space-y-4 border border-black rounded dark:border-white">
      <!-- Tag -->
      <div class="p-3 space-y-4 border border-black/10 dark:border-white/10">
        <div class="font-semibold opacity-50 font-sm">Request Tag</div>
        <div>{requestTag}</div>
      </div>
      <!-- Body -->
      <div class="flex-1 p-3 space-y-4 border border-black/10 dark:border-white/10">
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
        <!-- Body -->
        <div class="flex-1 h-44">
          {#await requestBodyStringPromise}
            <span>(Decoding request body...)</span>
          {:then requestBodyString} 
            <pre>{requestBodyString}</pre>
          {:catch error}
            <span>(Error decoding request body: {error.message})</span>
          {/await}
        </div>
      </div>
    </div>
  
    <!-- Result -->
    <div class="flex flex-col p-4 space-y-4 border border-black rounded dark:border-white">
      <div class="flex flex-col flex-1 p-3 space-y-4 border border-black/10 dark:border-white/10">
        <!-- Title Row -->
        <div class="flex justify-between">
          <div class="font-semibold opacity-50 font-sm">Result Body</div>
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
        <!-- Body -->
        <textarea 
          bind:value={resultBodyText}
          class="rounded-sm outline-none resize-none h-44 focus:ring-2 ring-white/30"
          placeholder="Result Body"
        />
      </div>
      <!-- Actions -->
      <div class="flex space-x-4">
        <button onclick={() => onResult('accepted')} class="flex-1 px-4 py-2 font-semibold text-white bg-black rounded dark:bg-white dark:text-black">Accept</button>
        <button onclick={() => onResult('rejected')} class="flex-1 px-4 py-2 font-semibold border border-black rounded dark:border-white">Reject</button>
      </div>
    </div>
  </main>
</div>
