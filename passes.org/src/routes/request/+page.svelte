<script>
	import { ServerTransportCodec } from "$lib/SpringBoard/ServerTransportCodec";
	import SpringBoard from "$lib/SpringBoard/SpringBoard.svelte";

  export let form;
  if (!form) throw new Error('No form data');

  /** @type {Window | undefined} */
  let opener = typeof window !== 'undefined'
    ? window.opener ?? window.parent
    : undefined;
</script>

<SpringBoard
  rawRequest={ServerTransportCodec.decode(form.requestBase64Url)}
  referrer={form.referrer ?? opener?.location.host ?? 'unknown referrer'}
/>
