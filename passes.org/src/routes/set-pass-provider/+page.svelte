<script>
	import { page } from "$app/stores";
	
  let providerUri = $page.url.searchParams.get('provider');
  let returnUri = $page.url.searchParams.get('return');

  if (!providerUri || !returnUri) {
    throw new Error('Missing providerUri or returnUri search param');
  }

  async function onAccept() {    
    const response = await fetch('/set-pass-provider', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uri: providerUri }),
    });
    await response.text();

    if (returnUri) {
      window.location.replace(returnUri);
    }
  }

  function onReject() {
    if (returnUri) {
      window.location.replace(returnUri);
    }
  }
</script>

<!-- Page Container -->
<div class="flex-1 flex flex-col items-center justify-center">

  <!-- Dialog -->
  <main class="border border-black dark:border-white rounded p-5 gap-6 flex flex-col text-center">
    {#if providerUri}
      <!-- Favicon -->
      <div class="w-[60px] h-[60px] rounded-xl p-[3px] -mt-[50px] border-black dark:border-white border bg-white dark:bg-black self-center">
        <img src={`/api/favicon?uri=${encodeURIComponent(providerUri)}`} alt="Provider Favicon" class="w-full h-full object-contain rounded-[9px]" />
      </div>
      
      <!-- Title -->
      <div class="space-y-2">
        <div class="text-xl font-bold">
          {new URL(providerUri).hostname}
        </div>
        <div class="text-xl">
          Wants To Be Your Pass Provider
        </div>
      </div>

      <!-- Notice -->
      <div class="bg-black/5 dark:bg-white/5 py-4 px-2 text-opacity-50">
        You will receive future pass requests here.
      </div>

      <!-- Actions -->
      <div class="flex gap-5">
        <button on:click={onReject} class="p-3 border border-black dark:border-white rounded-sm flex-1">
          Don't Allow
        </button>
        <button on:click={onAccept} class="p-3 bg-black text-white dark:bg-white dark:text-black rounded-sm flex-1">
          Allow
        </button>
      </div>
    {/if}
  </main>

</div>