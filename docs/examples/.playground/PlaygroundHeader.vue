<template>
  <div :class="$style.header">
    <div :class="$style.title">
      <slot name="title"></slot>
    </div>
    <div :class="$style.description">
      <slot name="description"></slot>
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
  font-size: 1.125rem;
  font-weight: bold;
}

.description {
  color: var(--vp-c-text-1);
  font-size: 0.8rem;
}

@media (max-width: 768px) {
  .title {
    font-size: 1rem;
  }
}
</style>