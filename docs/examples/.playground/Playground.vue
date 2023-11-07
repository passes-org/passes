<script setup lang="ts">
import DataPane from './DataPane.vue';
import EmulatorPane from './EmulatorPane.vue';
import PlaygroundHeader from './PlaygroundHeader.vue';
</script>

<template>
  <div :class="$style.container">
    <PlaygroundHeader />

    <!-- Row: Content -->
    <div :class="$style.content">
      <DataPane />
      <EmulatorPane>
        <slot></slot>
      </EmulatorPane>
    </div>
  </div>
</template>

<style module>
.container {
  border: 1px solid var(--vp-c-border);
  border-radius: 0.5rem;
  width: 100%;
}

.container > .content {
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column-reverse;
  }
}
</style>