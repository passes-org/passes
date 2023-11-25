<script lang="ts">
    import { base64url } from "jose";
    import type { ActionData } from "./$types";
    import SpringBoard from "./SpringBoard/SpringBoard.svelte";

  export let form: ActionData;
  if (!form) throw new Error('No form data');

  const opener: Window | undefined = typeof window !== 'undefined'
    ? window.opener ?? window.parent
    : undefined;
</script>

{#if form?.request.body}
  <SpringBoard
    request={{ tag: form.request.tag, body: base64url.decode(form.request.body) }}
    referrer={form.referrer ?? opener?.location.host ?? 'unknown referrer'}
  />
{/if}
