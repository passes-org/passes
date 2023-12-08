<script>
  export let data;
  let passProviderHostname = data?.userPassProvider
    ? new URL(data.userPassProvider).hostname
    : null;

  async function onClickClearPassProvider() {
    const clear = confirm(`Do you want to clear your Pass Provider?\n\nYou will need to sign back into ${passProviderHostname} to receive Pass Requests there again.`);
    if (clear) {
      const response = await fetch('/api/clear-pass-provider', { method: 'POST' })
      if (response.ok) {
        window.location.reload();
      }
    }
  }
</script>

<svelte:head>
  <title>Passes - The Web API for Portable Identity</title>
  <meta name="description" content="Passes give users a common client-side identity that any app can request to recognize them or act on their behalf, putting them in control of their data and privacy.">
  <meta name="keywords" content="Passes, Identity, Web, Privacy, Security, Authentication" />
  <meta name="author" content="Passes" />
  <meta name="robots" content="index, follow" />
  <link rel="icon" type="image/png" href="/favicon.svg" />
  <meta property="og:image" content="https://passes.org/passes-og.png" />
</svelte:head>

<div class="container p-10 md:p-16 font-text dark:text-white">
	<!-- Header -->
  <div class="flex items-center justify-between pb-5 border-b border-black lg:pb-10 dark:border-white">
    <!-- Logo -->
    <img src="/logo_light.svg" alt="Passes Logo" class="dark:hidden" />
    <img src="/logo_dark.svg" alt="Passes Logo" class="dark:block" />

    <!-- Icon: Github -->
    <div class="space-y-1 flex flex-col items-end">
      <a class="block" href="//github.com/passes-org/passes">Github</a>
      {#if passProviderHostname}
        <button class="text-xs" on:click={onClickClearPassProvider}>
          Using: <span class="font-bold">{passProviderHostname}</span>
        </button>
      {/if}
    </div>
  </div>

  <!-- Main Content -->
  <main class="py-24 space-y-20 lg:px-12">
    <!-- Hero Section -->
    <div class="flex flex-col items-start space-y-10 lg:w-4/5">
      <h1 class="text-5xl leading-tight font-display lg:text-8xl" style="text-wrap: balance">
        One identity. No passwords.
      </h1>
      <p class="text-2xl font-text">
        Passes give users a portable client-side identity any app can request to recognize them or act on their behalf, putting them in control of their data and privacy.
      </p>
  
      <a href="//docs.passes.org" class="flex items-baseline gap-4 px-6 py-5 text-lg text-white bg-black rounded dark:bg-white dark:text-black">
        <span>Developer Docs</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="fill-white dark:fill-black">
          <path d="M4 0H12V8H10V4H8V6H6V8H4V10H2V12H0V10H2V8H4V6H6V4H8V2H4V0Z" />
        </svg>        
      </a>
    </div>
  </main>
    
</div>
