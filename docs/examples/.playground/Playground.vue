<script setup lang="ts">
import { IRequestTopic } from '../../../packages/reqs';
import DataPane from './DataPane.vue';
import EmulatorPane from './EmulatorPane.vue';
import PlaygroundHeader from './PlaygroundHeader.vue';
import { provideStore } from './store';

const { requestBody, requestTopic, resultBody } = defineProps<{
  title?: string;
  description?: string;
  requestBody: any;
  requestTopic: IRequestTopic<any, any>;
  resultBody?: any;
  acceptButtonTitle?: string;
  rejectButtonTitle?: string;
  emulatorOnly?: boolean;
}>();

const store = provideStore({
  requestBody,
  requestTopic,
});

async function handleAccept(body) {
  store.value.setEmulatorResult(await store.value.requestTopic.encodeResult({ status: 'accepted', body }));
}

async function handleReject() {
  store.value.setEmulatorResult(await store.value.requestTopic.encodeResult({ status: 'rejected' }));
}
</script>

<template>
  <div :class="$style.container">
    <PlaygroundHeader>
      <template #title>{{ title ?? 'Request Playground' }}</template>
      <template #description>{{ description }}</template>
    </PlaygroundHeader>

    <!-- Row: Content -->
    <div :class="$style.content">
      <Suspense>
        <DataPane :class="{ [$style.dimmed]: store.requestPending }" />
        <template #fallback>
          <p>loading...</p>
        </template>
      </Suspense>
      <Suspense>
        <EmulatorPane
          @accept="handleAccept(resultBody)"
          @reject="handleReject()"
          :emulatorOnly="emulatorOnly"
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

.dimmed {
  opacity: 0.4;
  transition: opacity 0.2s ease-out;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column-reverse;
  }
}
</style>