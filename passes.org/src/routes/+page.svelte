<script lang="ts">
	import type { PageData } from "./$types";

  export let data: PageData;

  export const passProvider = data.userPassProvider;
  export const passProviderHostname = passProvider
    ? new URL(passProvider).hostname
    : null;

  let clearPassProviderForm: HTMLFormElement;
  function onClearPassProvider() {
    // Confirm before submitting
    if (window.confirm(`Do you want to clear your Pass Provider?\n\nYou will need to sign back into ${passProviderHostname} to receive Pass Requests there again.`)) {
      clearPassProviderForm.submit();
    }
  }
</script>

<div class="container p-10 md:p-16 font-rounded dark:text-white">
  <!-- Header -->
  <div class="flex items-center justify-between pb-5 border-b border-black lg:pb-10 dark:border-white">
    <!-- Logo -->
    <a href="/">
      <img src="/logo_light.svg" alt="Passes Logo" class="dark:hidden" />
      <img src="/logo_dark.svg" alt="Passes Logo" class="dark:block" />
    </a>

    <!-- Menu-Right: Github / User Pass Provider -->
    <div class="space-y-1 flex flex-col items-end">
      <a class="block" href="https://github.com/passes-org/passes">Github</a>
      {#if passProvider}
        <form method="post" action="?/clearPassProvider" bind:this={clearPassProviderForm} on:submit|preventDefault={onClearPassProvider}>
          <button class="text-xs" type="submit">
            Using: <span class="font-bold">{passProviderHostname}</span>
          </button>
        </form>
      {/if}
    </div>
  </div>
  
  <!-- Main Content -->
  <main class="py-24 space-y-20 lg:px-12">
    <!-- Hero Section -->
    <div class="flex flex-col items-start space-y-10 lg:w-4/5">
      <h1 class="text-5xl leading-tight font-display lg:text-8xl text-balance">
        Build apps powered by your users.
      </h1>
      <p class="text-2xl font-text">
        Passes gives you a client-side API for requesting data and actions directly from end-users so you can build seamless authentication and cross-app interactions.
      </p>

      <a href="https://docs.passes.org" class="flex items-baseline gap-4 px-6 py-5 text-lg text-white bg-black rounded dark:bg-white dark:text-black">
        <span>Developer Docs</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="fill-white dark:fill-black"
        >
          <path d="M4 0H12V8H10V4H8V6H6V8H4V10H2V12H0V10H2V8H4V6H6V4H8V2H4V0Z" />
        </svg>
      </a>
    </div>
  </main>
</div>