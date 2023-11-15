<script setup lang="ts">
import { IRequestType, SignedRequestType } from '../../../packages/reqs/src/main';
import DataPane from './DataPane.vue';
import EmulatorPane from './EmulatorPane.vue';
import PlaygroundHeader from './PlaygroundHeader.vue';
import { provideStore } from './store';

const { requestBody, requestType, resultBody } = defineProps<{
  requestBody: any;
  requestType: IRequestType<any, any>;
  resultBody?: any;
  acceptButtonTitle?: string;
  rejectButtonTitle?: string;
}>();

const store = provideStore({
  requestBody,
  requestType,
});

async function handleAccept () {
  store.value.setResult(await store.value.requestType.encodeResult({ status: 'accepted', body: resultBody }));
}

async function handleReject() {
  store.value.setResult(await store.value.requestType.encodeResult({ status: 'rejected' }));
}
</script>

<template>
  <div :class="$style.container">
    <PlaygroundHeader />

    <!-- Row: Content -->
    <div :class="$style.content">
      <Suspense>
        <DataPane />
        <template #fallback>
          <p>loading...</p>
        </template>
      </Suspense>
      <Suspense>
        <EmulatorPane
          @accept="handleAccept"
          @reject="handleReject"
          :acceptButtonTitle="acceptButtonTitle"
          :rejectButtonTitle="rejectButtonTitle"
        >
          <slot name="pass-emulator-ui"></slot>
        </EmulatorPane>
        <template #fallback>
          <p>loading...</p>
        </template>
      </Suspense>
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