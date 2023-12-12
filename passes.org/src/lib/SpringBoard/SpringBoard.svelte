<script>
  import { Codecs, Messaging, RequestTopic, parseTopic } from '../../../../packages/reqs';
  import { bodyTextToBodyType } from "./bodyTextToBodyType.js";
  import { requestBodyToDisplayString } from "./bodyToDisplayString.js";
  import { fetchFaviconUrl } from "./fetchFaviconUrl.js";

  /** @type {Uint8Array} */
  export let rawRequest;
  /** @type {string} */
  export let referrer;

  /** @type {Promise<string | null>} */
  let faviconUrlPromise;
  $: faviconUrlPromise = fetchFaviconUrl(referrer);

  /** @type {keyof typeof Codecs} */
  let requestBodyCodec = 'String';
  /** @type {keyof typeof Codecs} */
  let resultBodyCodec = 'String';
  /** @type {string} */
  let resultBodyText;

  /** @type {string} */
  let id
  $: id = parseTopic(rawRequest);

  /** @type {Promise<string>} */
  let requestBodyStringPromise;
  $: requestBodyStringPromise = requestBodyToDisplayString(rawRequest, Codecs[requestBodyCodec]);

  /** @type {RequestTopic<any, any>} */
  let requestTopic;
  $: requestTopic = new RequestTopic({
    id,
    requestBodyCodec: Codecs[requestBodyCodec],
    resultBodyCodec: Codecs[resultBodyCodec],
  });

  /**
   * @param {import('@passes/reqs').ResultStatus} status
   */
  async function onResult(status) {
    const bodyText = resultBodyText;
    const body = status === 'accepted' && await bodyTextToBodyType(bodyText, Codecs[resultBodyCodec]);
    /** @type {import('@passes/reqs').RequestResult<any>} */
    const result = (() => {
      switch (status) {
        case 'accepted': return { status, body };
        case 'rejected': return { status };
        case 'exception': return { status, message: 'An exception occurred' };
        case 'unsupported': return { status };
      }
    })();

    Messaging.sendResult(requestTopic, result);
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
      <!-- Topic -->
      <div class="p-3 space-y-4 border border-black/10 dark:border-white/10">
        <div class="font-semibold opacity-50 font-sm">Request Topic</div>
        <div>{id}</div>
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
        <button on:click={() => onResult('accepted')} class="flex-1 px-4 py-2 font-semibold text-white bg-black rounded dark:bg-white dark:text-black">Accept</button>
        <button on:click={() => onResult('rejected')} class="flex-1 px-4 py-2 font-semibold border border-black rounded dark:border-white">Reject</button>
      </div>
    </div>
  </main>
</div>
