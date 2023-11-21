<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import Button from './Button.vue';
import PaneTabs from './PaneTabs.vue';
import { useStore } from './store';
import { SignedAcceptedResult, SignedRequestType } from '../../../packages/reqs/src/main';
import { calculateJwkThumbprint, base64url, JWK } from 'jose';

const store = useStore();

const decodedRequestBody = store.value.requestBody;
const decodedResult = computed(() => store.value.result);

const publicKeyThumbprint = ref();
watchEffect(async () => {
  if (store.value.requestType instanceof SignedRequestType && decodedResult.value?.status === 'accepted') {
    publicKeyThumbprint.value = await calculateJwkThumbprint((decodedResult.value as SignedAcceptedResult<any>).signed.publicKey as JWK);
  }
})
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
        <div :class="$style.code">{{ store.requestType.requestTag }}</div>
      </label>
      <label>
        <span>Body</span>
        <pre :class="$style.code">{{ decodedRequestBody ? JSON.stringify(decodedRequestBody, null, 2) : '(empty)' }}</pre>
      </label>
    </div>
    <div v-if="store.dataPaneActiveTab === 'request'" :class="$style.actions">
      <Button @click="store.makeRequest()">Send Request</Button>
    </div>
    <!-- Result View -->
    <div v-else :class="$style.content">
      <label>
        <span>Status</span>
        <div :class="$style.code">{{ decodedResult?.status ?? (store.requestPending ? '(request pending)' : '(awaiting request)') }}</div>
      </label>
      <label v-if="decodedResult">
        <span>Body</span>
        <pre :class="$style.code">{{ decodedResult?.status === 'accepted' ? JSON.stringify(decodedResult.body, null, 2) || '(empty)' : '(not accepted)' }}</pre>
      </label>
      <details v-if="(store.requestType instanceof SignedRequestType && decodedResult?.status === 'accepted')">
        <summary>✅ Result Signature</summary>
        <label v-if="(store.requestType instanceof SignedRequestType && decodedResult?.status === 'accepted')">
          <span>Signature (base64url)</span>
          <code :class="$style.code">{{ base64url.encode((decodedResult as SignedAcceptedResult<any>).signed.signature) }}</code>
        </label>
        <label v-if="(store.requestType instanceof SignedRequestType && decodedResult?.status === 'accepted')">
          <span>Public Key (JWK Thumbprint)</span>
          <code :class="$style.code">{{ publicKeyThumbprint }}</code>
        </label>
      </details>
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
  overflow: scroll;
}

.content {
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
  font-family: var(--vp-font-family-mono);
  font-size: var(--vp-code-font-size);
  line-height: var(--vp-code-line-height);
  max-height: 6rem;
  overflow-wrap: break-word;
  overflow-y: scroll;
  padding: 0.1rem;
}
</style>