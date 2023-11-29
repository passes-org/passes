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
    <div v-if="store.abi === 'emulator' && store.requestPending" :class="$style.content">
      <slot>
        <div :class="$style.status">
          <div>(missing emulator UI)</div>
        </div>
      </slot>
      <div :class="$style.actions">
        <slot name="actions">
          <Button @click="$emit('accept')">{{ acceptButtonTitle ?? 'Accept' }}</Button>
          <Button @click="$emit('reject')">{{ rejectButtonTitle ?? 'Reject' }}</Button>
        </slot>
      </div>
    </div>
    <div v-else-if="store.abi === 'document.passes' && store.requestPending" :class="$style.content">
      <div :class="$style.status">
        <div>(Request pending via document.passes)</div>
      </div>
    </div>
    <div v-else-if="store.result" :class="$style.status">
      Request Completed
    </div>
    <div v-else :class="$style.status">
      Click "Send Request"
      <div v-if="store.abi === 'document.passes'">The Pass Request will be sent via `document.passes` and open in a new window</div>
      <div v-else>The Pass Request will appear here</div>
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

.content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 0.25rem;
}

.actions {
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
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
  text-align: center;
}
</style>