<script lang="ts">
	import { enhance } from "$app/forms";
	import type { RequestResult } from "passes-protocol";
	import type { PageData } from "./$types";

  export let data: PageData;

  let submitting = false;
  function postResultMessage(approved: boolean) {
    window.opener?.postMessage({
      type: 'request-result',
      result: new Uint8Array([approved ? 0x00 : 0x01]),
    } as RequestResult, '*');
  }
</script>

<main class="max-w-2xl p-4 space-y-4 font-sans bg-white rounded-xl dark:bg-gray-950">
  <div class="space-y-2 text-gray-800 dark:text-gray-200">
    <h1 class="text-3xl font-semibold">Use <span class="font-mono bg-gray-100 rounded dark:bg-gray-800">{data.url}</span> to manage your passes?</h1>
    <p class="text-md">Future pass requests on this device will be redirected to <span class="font-mono bg-gray-100 rounded dark:bg-gray-800">{data.url}</span></p>
  </div>

  <form
    method="post"
    use:enhance={() => {
      submitting = true;
      return async ({ update, result }) => {
        await update();
        submitting = false;
        postResultMessage(result.type === 'success');
      };
    }}
  >
    <input type="hidden" name="url" value={data.url} />
    <div class="flex space-x-3">
      <button disabled={submitting} class="px-4 py-2 text-white bg-blue-500 rounded-lg disabled:opacity-30 dark:bg-blue-600 dark:text-white" type="submit">Approve</button>
      <button disabled={submitting} class="px-4 py-2 text-gray-600 bg-gray-300 rounded-lg disabled:opacity-30 dark:bg-gray-700 dark:text-gray-400" on:click={() => postResultMessage(false)} type="button">Cancel</button>
    </div>
  </form>
</main>
