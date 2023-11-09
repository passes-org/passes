<script setup lang="ts">
import { RequestTypeBuilder } from '../../../packages/reqs/src/request-type-builder';
import DataPane from './DataPane.vue';
import EmulatorPane from './EmulatorPane.vue';
import PlaygroundHeader from './PlaygroundHeader.vue';
import { provideStore } from './store';

const { builder, requestBody } = defineProps<{
  builder: RequestTypeBuilder<any, any>;
  requestBody: any;
  resultBody?: any;
  acceptButtonTitle?: string;
  rejectButtonTitle?: string;
}>();

const store = provideStore({
  builder,
  request: builder.encodeRequest(requestBody),
});
</script>

<template>
  <div :class="$style.container">
    <PlaygroundHeader />

    <!-- Row: Content -->
    <div :class="$style.content">
      <DataPane />
      <EmulatorPane
        @accept="store.setResult(builder.encodeResult({ status: 'accepted', body: resultBody }))"
        @reject="store.setResult(builder.encodeResult({ status: 'rejected' }))"
        :acceptButtonTitle="acceptButtonTitle"
        :rejectButtonTitle="rejectButtonTitle"
      >
        <slot name="pass-emulator-ui"></slot>
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