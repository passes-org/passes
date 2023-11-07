<script setup lang="ts">
import Button from './Button.vue';
import PaneTabs from './PaneTabs.vue';
import { useStore } from './store';

const store = useStore();
</script>

<template>
  <div :class="$style.pane">
    <PaneTabs
      :tabs="['emulator', 'document.passes']"
      v-model="store.emulatorPaneDriver"
    />
    <div v-if="store.emulatorPaneDriver === 'emulator'" :class="$style.content">
      <div v-if="store.requestPending">
        <slot></slot>
      </div>
      <div v-else-if="store.result">
        Request already completed
      </div>
      <div v-else="store.result">
        Click "Send Request"
      </div>
    </div>
    <div v-else :class="$style.content">
      Using document.passes...
    </div>
  </div>
</template>

<style module>
.pane {
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 16rem;
  overflow-x: hidden;
  overflow-y: scroll;
}

.pane .content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
}

label {
  display: flex;
  flex-direction: column;
}

label > span {
  color: var(--vp-c-text-2);
  font-size: 0.6rem;
  font-weight: medium;
}

.actions {
  background-color: var(--vp-c-bg-alt);
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}

.code {
  background-color: var(--vp-c-default-soft);
  border-radius: 0.3rem;
  color: var(--vp-code-color);
  display: inline-block;
  font-family: var(--vp-font-family-mono);
  font-size: var(--vp-code-font-size);
  line-height: var(--vp-code-line-height);
  padding: 0.1rem;
}
</style>