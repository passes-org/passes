<script setup lang="ts">
import Button from './Button.vue';
import PaneTabs from './PaneTabs.vue';
import { useStore } from './store';

const store = useStore();

const props = defineProps<{
  acceptButtonTitle?: string;
  rejectButtonTitle?: string;
  emulatorOnly?: boolean;
}>();
</script>

<template>
  <div :class="$style.pane">
    <PaneTabs
      :tabs="['emulator', 'document.passes']"
      v-model="store.abi"
      v-if="!emulatorOnly"
    />
    <div v-if="store.abi === 'emulator'" :class="$style.content">
      <slot v-if="store.requestPending">
        <div :class="$style.status">
          <div>(missing emulator UI)</div>
        </div>
      </slot>
      <div v-else-if="store.result" :class="$style.status">
        <div>Request Completed!</div>
      </div>
      <div v-else="store.result" :class="$style.status">
        <div>Click "Send Request"</div>
      </div>
    </div>
    <div v-else :class="$style.status">
      <div>Using document.passes...</div>
    </div>
    <div v-if="store.requestPending" :class="$style.actions">
      <slot name="actions">
        <Button @click="$emit('accept')">{{ acceptButtonTitle ?? 'Accept' }}</Button>
        <Button @click="$emit('reject')">{{ rejectButtonTitle ?? 'Reject' }}</Button>
      </slot>
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
}

.pane .actions {
  background-color: var(--vp-c-bg-alt);
  display: flex;
  gap: 0.5rem;
  padding: 0.5rem;
}

.status {
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 0.8rem;
  font-weight: bold;
  justify-content: center;
  padding: 1rem;
  text-align: center;
}
</style>