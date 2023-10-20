<script lang="ts">
  import { passEngineURI, passEngineUserkey } from "../../../../lib/storage";
  import type { Toast } from "../../../../lib/toast";
  import _toast from "../../../../lib/toast";
  import "../../_common/styles.css";

  export let toast: Toast;
	export let callback: (successful: boolean) => void;
	export let uri: string;
	export let userkey: string | undefined;

  async function handleApprove() {
    _toast.dismiss(toast.id);
    if (!userkey) {
      _toast.error('Cannot set pass engine without userkey');
    }
    await passEngineURI.set(uri);
    await passEngineUserkey.set(userkey ?? null);
    _toast.success('Pass engine updated');
    callback(true);
  }

  function handleReject() {
    _toast.dismiss(toast.id);
    callback(false);
  }
</script>

<main class="space-y-2">
  <!-- Message -->
  <div class="text-lg">
    Do you want to use <span class="font-mono bg-gray-100 rounded dark:bg-gray-800">{uri}</span> as your pass engine?
  </div>

  <!-- Actions -->
  <div class="flex space-x-2">
    <button class="px-3 py-2 font-bold text-white bg-blue-500 rounded-md dark:bg-blue-600 dark:text-white" on:click={handleApprove}>Yes</button>
    <button class="px-3 py-2 font-bold text-gray-600 bg-gray-300 rounded-md dark:bg-gray-700 dark:text-gray-400" on:click={handleReject}>No</button>
  </div>
</main>