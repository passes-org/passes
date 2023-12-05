<script>
  import { PassProviders } from "@passes/reqs";
  import { fetchFaviconUrl } from "../../routes/request/SpringBoard/fetchFaviconUrl.js";

  /** @type {{ rawRequest: Uint8Array }} */
  let { rawRequest } = $props();
  
  let setPassProviderRequestBodyPromise = $derived(PassProviders.setPassProvider.decodeRequest(rawRequest));
  let faviconUrlPromise = $derived(setPassProviderRequestBodyPromise.then(({ uri }) => fetchFaviconUrl(uri)));

  async function onAccept() {
    const { uri } = await setPassProviderRequestBodyPromise;
    
    await fetch('/set-pass-provider', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ uri }),
    });

    await PassProviders.sendResult(PassProviders.setPassProvider, {
      status: 'accepted',
      body: true,
    });
  }

  function onReject() {
    PassProviders.sendResult(PassProviders.setPassProvider, {
      status: 'rejected',
    });
  }
</script>

<div class="flex flex-col space-y-20">
  <!-- Header -->
  <div class="flex flex-col items-center self-center space-y-2">
    <!-- Favicon -->
    <div class="p-[3px] border border-black rounded-xl w-14 h-14 dark:border-white">
      <div class="w-full bg-black rounded-lg aspect-square dark:bg-white">
        {#await faviconUrlPromise then faviconUrl}
          <img src={faviconUrl} class="w-full h-full rounded-lg" />
        {/await}
      </div>
    </div>
    <!-- Title -->
    {#await setPassProviderRequestBodyPromise then { uri }}
      <div class="leading-tight text-center">
        <h1>Do you want to set <b>{uri}</b> as your pass provider?</h1>
        <h2>Future pass requests will be sent there.</h2>
      </div> 

      <!-- Main -->
      <div class="flex space-x-4">
        <button onclick={onAccept} class="flex-1 px-4 py-2 font-semibold text-white bg-black rounded dark:bg-white dark:text-black">Yes</button>
        <button onclick={onReject} class="flex-1 px-4 py-2 font-semibold border border-black rounded dark:border-white">No</button>
      </div>
    {/await}
  </div>
</div>
