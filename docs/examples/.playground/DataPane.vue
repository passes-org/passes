<script setup lang="ts">
import { computed, ref, watchEffect } from 'vue';
import Button from './Button.vue';
import PaneTabs from './PaneTabs.vue';
import { useStore } from './store';
import { SignedAcceptedResult, SignedRequestTopic } from '../../../packages/reqs/main';
import { calculateJwkThumbprint, base64url, JWK } from 'jose';
import makeBlockie from 'ethereum-blockies-base64';

const store = useStore();

const decodedRequestBody = store.value.requestBody;
const decodedResult = computed(() => store.value.result);

const signatureBase64 = computed(() => {
  if (store.value.requestTopic instanceof SignedRequestTopic && decodedResult.value?.status === 'accepted') {
    return base64url.encode((decodedResult.value as SignedAcceptedResult<any>).signed.signature);
  }
});
const publicKeyThumbprint = ref();
watchEffect(async () => {
  if (store.value.requestTopic instanceof SignedRequestTopic && decodedResult.value?.status === 'accepted') {
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
        <span>Topic</span>
        <div :class="$style.code">{{ store.requestTopic.id }}</div>
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
      <details v-if="signatureBase64 && publicKeyThumbprint">
        <summary>✅ Valid Result Signature</summary>
        <label>
          <span>Signature (base64url)</span>
          <div :class="$style.key">
            <img
              :src="makeBlockie(signatureBase64)"
              :alt="signatureBase64"
              :title="signatureBase64"
              :class="$style.thumb"
            />
            <div :class="$style.code">{{ signatureBase64 }}</div>
          </div>
        </label>
        <label>
          <span>User's Public Key (JWK Thumbprint)</span>
          <div :class="$style.key">
            <img
              :src="makeBlockie(publicKeyThumbprint)"
              :alt="publicKeyThumbprint"
              :title="publicKeyThumbprint"
              :class="$style.thumb"
            />
            <div :class="$style.code">{{ publicKeyThumbprint }}</div>
          </div>
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
  flex-shrink: 0;
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

summary {
  cursor: pointer;
}

.key {
  align-items: stretch;
  display: flex;
  gap: 0.5rem;
}

.thumb {
  float: left;
  height: 2.5rem;
  width: 2.5rem;
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
  user-select: all;
}
</style>