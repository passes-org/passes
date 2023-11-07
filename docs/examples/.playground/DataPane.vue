<script setup lang="ts">
import { computed } from 'vue';
import { EnvelopeV0x00 } from '../../../packages/reqs/src/main';
import Button from './Button.vue';
import PaneTabs from './PaneTabs.vue';
import { useStore } from './store';

const store = useStore();

const { tag: requestTag } = EnvelopeV0x00.parseRequest(store.value.request);
const decodedRequestBody = store.value.builder.requestCodec.decode(store.value.request);

const resultStatus = computed(() => store.value.result
  ? EnvelopeV0x00.parseResult(store.value.result).status
  : store.value.requestPending ? '(pending)' : '(awaiting request)');
const decodedResultBody = computed(() => store.value.result
  ? store.value.builder.resultCodec.decode(store.value.result)
  : undefined);
</script>

<template>
  <div :class="$style.pane">
    <PaneTabs
      :tabs="['request', 'result']"
      v-model="store.dataPaneActiveTab"
    />
    <!-- Request View -->
    <div v-if="store.dataPaneActiveTab === 'request'" :class="$style.content">
      <label>
        <span>Tag</span>
        <div :class="$style.code">{{ requestTag }}</div>
      </label>
      <label>
        <span>Body</span>
        <pre :class="$style.code">{{ decodedRequestBody ? JSON.stringify(decodedRequestBody, null, 2) : '(empty)' }}</pre>
      </label>
    </div>
    <!-- Result View -->
    <div v-else :class="$style.content">
      <label>
        <span>Status</span>
        <div :class="$style.code">{{ resultStatus }}</div>
      </label>
      <label v-if="store.result">
        <span>Body</span>
        <pre :class="$style.code">{{ decodedResultBody ? JSON.stringify(decodedResultBody, null, 2) : '(empty)' }}</pre>
      </label>
    </div>
    <div :class="$style.actions">
      <Button @click="store.makeRequest()">Send Request</Button>
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

label > pre {
  margin: 0;
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