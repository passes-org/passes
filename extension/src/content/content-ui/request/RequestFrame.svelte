<script lang="ts">
  import { onMount } from "svelte";
  import toast from "../../../lib/toast";
  import "../_common/styles.css";
  import { mountToaster } from "../_common/toaster";

  let loaded = false;
  let resolveLoaded: () => void;
  const loadedPromise = new Promise<void>((res) => { resolveLoaded = res; });

  onMount(() => {
    mountToaster();
    toast.promise(loadedPromise, {
      loading: 'Preparing',
      success: 'Presenting',
      error: 'Failed to prepare pass request',
    }, { duration: 500 });
  });
</script>

<div class="fixed inset-0">
  <div class="relative w-screen h-screen">
    <iframe
      allowtransparency
      class="relative z-10 w-screen h-screen transition-opacity duration-200 ease-out bg-transparent"
      class:opacity-0={!loaded}
      class:opacity-100={loaded}
      name="pass-engine"
      on:load={() => {
        loaded = true;
        resolveLoaded();
      }}
      title="Pass Engine"
    />
  </div>
</div>