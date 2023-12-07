<script>
	import { page } from "$app/stores";
	import { fetchFaviconUrl } from "$lib/SpringBoard/fetchFaviconUrl";

  let providerUri = $page.url.searchParams.get('provider');
  let returnUri = $page.url.searchParams.get('return');

  if (!providerUri || !returnUri) {
    throw new Error('Missing providerUri or returnUri search param');
  }

  let faviconUrlPromise = fetchFaviconUrl(providerUri);

  async function onAccept() {    
    await fetch('/set-pass-provider', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uri: providerUri }),
    });

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

<div class="flex flex-col space-y-20">
  <!-- Header -->
  <div class="flex flex-col items-center self-center space-y-2">
    <!-- Favicon -->
    <div class="p-[3px] border border-black rounded-xl w-14 h-14 dark:border-white">
      <div class="w-full bg-black rounded-lg aspect-square dark:bg-white">
        {#await faviconUrlPromise then faviconUrl}
          <img src={faviconUrl} class="w-full h-full rounded-lg" alt="Pass Provider Icon" />
        {/await}
      </div>
    </div>
    <!-- Title -->
    <div class="leading-tight text-center">
      <h1>Do you want to set <b>{providerUri}</b> as your pass provider?</h1>
      <h2>Future pass requests will be sent there.</h2>
    </div> 

    <!-- Main -->
    <div class="flex space-x-4">
      <button on:click={onAccept} class="flex-1 px-4 py-2 font-semibold text-white bg-black rounded dark:bg-white dark:text-black">Yes</button>
      <button on:click={onReject} class="flex-1 px-4 py-2 font-semibold border border-black rounded dark:border-white">No</button>
    </div>
  </div>
</div>
