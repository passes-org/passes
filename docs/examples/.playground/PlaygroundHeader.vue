<template>
  <div :class="$style.header">
    <div :class="$style.title">
      Request Playground
    </div>
  </div>
</template>

<style module>
.header {
  border-bottom: 1px solid var(--vp-c-divider);
  padding: 1rem;
}

.title {
  color: var(--vp-c-text-1);
  flex: 1;
  font-size: 1.125rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  .title {
    font-size: 1rem;
  }
}
</style>