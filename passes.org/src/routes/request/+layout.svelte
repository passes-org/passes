<div class="flex flex-col items-center justify-center min-h-screen font-rounded">
  <!-- Logo -->
  <svg width="42" height="30" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg" class="absolute top-5 left-5">
    <rect width="42" height="30" rx="3" class="fill-black dark:fill-white" />
    <rect x="16" y="7" width="3" height="8" rx="1.5" class="fill-white dark:fill-black" />
    <rect x="23" y="7" width="3" height="8" rx="1.5" class="fill-white dark:fill-black" />
    <path d="M27 19C25.1926 20.2802 23.1553 21 21 21C18.8447 21 16.8074 20.2802 15 19" class="stroke-white dark:stroke-black" stroke-width="3" stroke-linecap="round"/>
  </svg>

  <div class="container">
    <slot />
  </div>
</div>