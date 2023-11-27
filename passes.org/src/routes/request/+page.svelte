<script lang="ts">
    import type { ActionData } from "./$types";
    import { ServerTransportCodec } from "./SpringBoard/ServerTransportCodec";
    import SpringBoard from "./SpringBoard/SpringBoard.svelte";

  export let form: ActionData;
  if (!form) throw new Error('No form data');

  const opener: Window | undefined = typeof window !== 'undefined'
    ? window.opener ?? window.parent
    : undefined;
</script>

{#if form?.requestBase64Url}
  <SpringBoard
    rawRequest={ServerTransportCodec.decode(form.requestBase64Url)}
    referrer={form.referrer ?? opener?.location.host ?? 'unknown referrer'}
  />
{/if}
