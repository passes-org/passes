<script lang="ts">
    import { base64url } from "jose";
    import { get, writable } from "svelte/store";
    import type { RequestResult, ResultStatus } from '../../../../packages/reqs';
    import { Codecs, RequestType } from '../../../../packages/reqs';
    import type * as PassesTypes from '../../../../packages/types';
    import type { ActionData } from "./$types";

  export let form: ActionData;
  if (!form) throw new Error('No form data');

  let requestBodyCodec = writable<keyof typeof Codecs>('Json');
  let resultBodyCodec = writable<keyof typeof Codecs>('Json');
  let resultBodyText = writable<string>('');

  const opener: Window | undefined = typeof window !== 'undefined'
    ? window.opener ?? window.parent
    : undefined;
  
  let requestType: RequestType<any, any>;
  $: requestType = new RequestType(form?.request.tag ?? 'unknown-request', Codecs[get(requestBodyCodec)], Codecs[get(resultBodyCodec)]);
  
  async function onResult(status: ResultStatus) {
    const opener = window.opener ?? window.parent;
    const bodyText = get(resultBodyText);
    const body = status === 'accepted' && (() => {
      switch (get(resultBodyCodec)) {
        case 'BigInt': return BigInt(bodyText);
        case 'Boolean': return bodyText === 'true';
        case 'Bytes': return base64url.decode(bodyText); // TODO: Use hex instead
        case 'Json': return JSON.parse(bodyText);
        case 'Number': return Number(resultBodyText);
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

<h1>Request from {form?.referrer ?? opener?.location.host}</h1>

<label>
  <span>Request Body Codec</span>
  <select bind:value={requestBodyCodec}>
    <option value="BigInt">BigInt</option>
    <option value="Boolean">Boolean</option>
    <option value="Bytes">Bytes</option>
    <option value="Json">JSON</option>
    <option value="Number">Number</option>
    <option value="String">String</option>
    <option value="Void">Void</option>
  </select>
</label>
{#if form?.request.body}
  <pre>
    {(Codecs[get(requestBodyCodec)].decode(base64url.decode(form.request.body)))}
  </pre>
{/if}

<label>
  <span>Result Body Codec</span>
  <select bind:value={resultBodyCodec}>
    <option value="BigInt">BigInt</option>
    <option value="Boolean">Boolean</option>
    <option value="Bytes">Bytes</option>
    <option value="Json">JSON</option>
    <option value="Number">Number</option>
    <option value="String">String</option>
    <option value="Void">Void</option>
  </select>
</label>
<textarea 
  bind:value={resultBodyText}
  placeholder="Result Body"
/>

<button on:click={() => onResult('accepted')}>Accept</button>
<button on:click={() => onResult('rejected')}>Reject</button>
<button on:click={() => onResult('exception')}>Exception</button>
<button on:click={() => onResult('unsupported')}>Unsupported</button>

