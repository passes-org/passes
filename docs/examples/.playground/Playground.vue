<template>
  <div :class="$style.container">
    <!-- Row: Header -->
    <div :class="$style.header">
      <!-- Col: Title -->
      <h1 :class="$style.title">
        Request Playground
      </h1>
      <!-- Col: Header Menu -->
      <div :class="$style.menu">
        <div>emulator | document.passes</div>
        <div>structured | raw</div>
      </div>
    </div>
    <!-- Row: Content -->
    <div :class="$style.content">
      <div :class="$style.pane">Req/Res/Reset Pane</div>
      <div :class="[$style.pane, $style.disabled]">Pass Engine Emulator Pane</div>
    </div>
  </div>
</template>

<style module>
.container {
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  width: 100%;
}

.header {
  align-items: baseline;
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex;
  gap: 1rem;
  padding: 1rem;
}

.header .title {
  color: var(--vp-c-text-1);
  flex: 1;
  font-size: 1.125rem;
  font-weight: bold;
}

.header .menu {
  display: flex;
  gap: 1rem;
}

.content {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}

.pane {
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.25rem;
  flex: 1;
  padding: 0.5rem;
  min-height: 16rem;
}

.pane.disabled {
  background-color: var(--vp-c-divider);
}
</style>