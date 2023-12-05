<script>
	import { ServerTransportCodec } from "$lib/SpringBoard/ServerTransportCodec";
	import SpringBoard from "$lib/SpringBoard/SpringBoard.svelte";
	import { PassProviders } from "../../../../packages/reqs";
	import SetPassProvider from "../../lib/SetPassProvider/SetPassProvider.svelte";

  export let form;
  if (!form) throw new Error('No form data');

  /** @type {Window | undefined} */
  let opener = typeof window !== 'undefined'
    ? window.opener ?? window.parent
    : undefined;
</script>

{#if form?.requestTag === PassProviders.setPassProvider.requestTag}
  <SetPassProvider
    rawRequest={ServerTransportCodec.decode(form.requestBase64Url)}
  />
{:else if form?.requestBase64Url}
  <SpringBoard
    rawRequest={ServerTransportCodec.decode(form.requestBase64Url)}
    referrer={form.referrer ?? opener?.location.host ?? 'unknown referrer'}
  />
{/if}
