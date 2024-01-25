<script lang="ts">
	import type { PageData } from "../$types";

  export let data: PageData;

  function onReject() {
    window.location.assign(data.returnURL);
  }
</script>

<div class="min-h-screen flex flex-col items-center justify-center">
  <!-- Dialog -->
  <main class="border border-black dark:border-white rounded p-5 gap-6 flex flex-col text-center">
    {#if data.newProvider}
      <!-- Provider Favicon -->
      <div class="w-[60px] h-[60px] rounded-xl p-[3px] -mt-[50px] border-black dark:border-white border bg-white dark:bg-black self-center">
        <img
          src={`/api/favicon?uri=${encodeURIComponent(data.newProvider)}`}
          alt="Provider Favicon"
          class="w-full h-full object-contain rounded-[9px]"
        />
      </div>
      
      <!-- Title -->
      <div class="space-y-2">
        <div class="text-xl font-bold">
          {new URL(data.newProvider).hostname}
        </div>
        <div class="text-xl">Wants To Be Your Pass Provider</div>
      </div>
      
      <!-- Notice -->
      <div class="bg-black/5 dark:bg-white/5 py-4 px-2 text-opacity-50">
        You will receive future pass requests here.
      </div>

      <!-- Actions -->
      <div class="flex gap-5">
        <button on:click={onReject} class="p-3 border border-black dark:border-white rounded-sm flex-1" type="button">
          Don't Allow
        </button>

        <form method="post" class="flex-1">
          <input type="hidden" name="provider" value={data.newProvider} />
          <input type="hidden" name="return" value={data.returnURL} />
          <button type="submit" class="p-3 bg-black text-white dark:bg-white dark:text-black rounded-sm w-full h-full">Allow</button>
        </form>
      </div>
    {/if}
  </main>
</div>