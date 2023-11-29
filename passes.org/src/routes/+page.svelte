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
    <div class="flex items-center gap-5">
      <svg class="w-14 h-9" viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="140" height="90" rx="10" class="fill-black dark:fill-white"/>
        <rect x="80" y="50" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="90" y="40" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="80" y="40" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="70" y="40" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="60" y="30" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="60" y="40" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="60" y="50" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="50" y="50" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="50" y="40" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="50" y="30" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="50" y="30" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="40" y="30" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="40" y="40" width="10" height="10" class="fill-white dark:fill-black"/>
        <rect x="40" y="50" width="10" height="10" class="fill-white dark:fill-black"/>
      </svg>
      <span class="text-xl font-rounded">Passes</span>
    </div>

    <!-- Icon: Github -->
    <a href="//github.com/passes-org/passes">Github</a>
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
