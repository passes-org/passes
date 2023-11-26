<script lang="ts">
  import { base64url } from "jose";
  import type { RequestResult, ResultStatus } from '../../../../../packages/reqs';
  import { Codecs, RequestType } from '../../../../../packages/reqs';
  import type * as PassesTypes from '../../../../../packages/types';
  import { detectDecoders } from "./detectDecoders";

  export let referrer: string;
  export let request: { tag: string; body: Uint8Array };

  const requestBodyDecoders = detectDecoders(request.body);
  let requestBodyCodec: keyof typeof Codecs = requestBodyDecoders[0];
  let resultBodyCodec: keyof typeof Codecs = 'Json';
  let resultBodyText = '';

  let decodedRequestBody: any;
  $: {
    // Try decoding the request body with each codec
    decodedRequestBody = (() => {
      switch (requestBodyCodec) {
        case 'BigInt': return BigInt(`0x${base64url.encode(request.body)}`);
        case 'Boolean': return request.body[0] === 1;
        case 'Bytes': return base64url.encode(request.body);
        case 'Json': return JSON.stringify(JSON.parse(base64url.encode(request.body)), null, 2);
        case 'Number': return Number(`0x${base64url.encode(request.body)}`);
        case 'String': return new TextDecoder().decode(request.body);
        case 'Void': return undefined;
      }
    })();
  }

  let requestType: RequestType<any, any>;
  $: requestType = new RequestType(request.tag ?? 'unknown-request', Codecs[requestBodyCodec], Codecs[resultBodyCodec]);

  async function onResult(status: ResultStatus) {
    const opener = window.opener ?? window.parent;
    const bodyText = resultBodyText;
    const body = status === 'accepted' && (() => {
      switch (resultBodyCodec) {
        case 'BigInt': return BigInt(bodyText);
        case 'Boolean': return bodyText === 'true';
        case 'Bytes': return base64url.decode(bodyText); // TODO: Use hex instead
        case 'Json': return JSON.parse(bodyText);
        case 'Number': return Number(resultBodyText)
        case 'String': return resultBodyText;
        case 'Void': return undefined;
      }
    })();
    const result = ((): RequestResult<any> => {
      switch (status) {
        case 'accepted': return { status, body };
        case 'rejected': return { status };
        case 'exception': return { status, message: 'An exception occurred' };
        case 'unsupported': return { status };
      }
    })()

    opener.postMessage({
      type: 'request-result',
      result: await requestType.encodeResult(result),
    } satisfies PassesTypes.RequestResult, '*');
  }
</script>

<div class="flex flex-col space-y-20">
  <!-- Header -->
  <div class="flex flex-col items-center self-center space-y-2">
    <!-- Favicon -->
    <div class="p-[3px] border border-black rounded-xl w-14 h-14 dark:border-white">
      <div class="w-full bg-black rounded-lg aspect-square dark:bg-white"></div>
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
        <div>{request.tag}</div>
      </div>
      <!-- Body -->
      <div class="flex-1 p-3 space-y-4 border border-black/10 dark:border-white/10">
        <!-- Title Row -->
        <div class="flex justify-between">
          <div class="font-semibold opacity-50 font-sm">Request Body</div>
          <select bind:value={requestBodyCodec} class="px-1 border border-black rounded-full dark:border-white font-sm">
            <option disabled={!requestBodyDecoders.includes('BigInt')} value="BigInt">BigInt</option>
            <option disabled={!requestBodyDecoders.includes('Boolean')} value="Boolean">Boolean</option>
            <option disabled={!requestBodyDecoders.includes('Bytes')} value="Bytes">Bytes</option>
            <option disabled={!requestBodyDecoders.includes('Json')} value="Json">JSON</option>
            <option disabled={!requestBodyDecoders.includes('Number')} value="Number">Number</option>
            <option disabled={!requestBodyDecoders.includes('String')} value="String">String</option>
            <option disabled={!requestBodyDecoders.includes('Void')} value="Void">Void</option>
          </select>
        </div>
        <!-- Body -->
        <pre class="flex-1 h-44">{decodedRequestBody}</pre>
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
          class="flex-1 resize-none"
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
