<script setup lang="ts">
import { ref } from 'vue';
import type { SignedBodyWrapper, SignedBodyWrapperHeader } from '../packages/reqs/src/main';
import { Codecs, RequestTopic, SignedRequestTopic } from '../packages/reqs/src/main';
import Playground from './examples/.playground/Playground.vue';

const id = 'com.example.get-email';
const requestTopic = new SignedRequestTopic<void, string>({
  requestTopic: new RequestTopic({
    id,
    requestBodyCodec: Codecs.Void,
    resultBodyCodec: Codecs.String,
  }),
  signResult,
  verifyResult
});

let keyPair = ref();
let resultBody = ref({ _error: 'Not Ready' });
let email = ref('you@passes.org');

const keyFormat = 'jwk';
const keyParams = { name: 'ECDSA', namedCurve: 'P-256', hash: 'SHA-384' };
async function signResult(body: string): Promise<SignedBodyWrapperHeader> {
  if (!keyPair.value) throw new Error('Keypair not ready');
  return {
    signature: new Uint8Array(await crypto.subtle.sign(
      keyParams,
      keyPair.value.privateKey,
      Codecs.String.encode(body)
    )),
    publicKey: await crypto.subtle.exportKey(keyFormat, keyPair.value.publicKey),
  };
}
async function verifyResult(signed: SignedBodyWrapper<string>): Promise<boolean> {
  const publicKey = await crypto.subtle.importKey(keyFormat, signed.header.publicKey, keyParams, true, ['verify']);

  return crypto.subtle.verify(
    keyParams,
    publicKey,
    signed.header.signature,
    Codecs.String.encode(signed.body)
  );
}

// Generate keypair
(async () => {
  if (typeof crypto === 'undefined') {
    console.warn('SubtleCrypto API not available');
    return;
  }

  keyPair.value = await crypto.subtle.generateKey(keyParams, true, ['sign', 'verify']);
})();
</script>

<template>
  <Playground
    title="Interactive Example"
    emulatorOnly
    description="This demo requests an email address."
    :requestBody="undefined"
    :requestTopic="requestTopic"
    :resultBody="email"
    acceptButtonTitle="Share Email"
    rejectButtonTitle="Cancel"
    >
    <template #pass-emulator-ui>
      <div :class="$style.content">
        <div style="font-size: 0.7rem; text-align: center; text-transform: uppercase; letter-spacing: 0.5ch; border-bottom: 1px solid #ccc;">My Pass Provider</div>
        <div><b>docs.passes.org</b> is requesting your email.</div>
        <hr />
        <div><label>Enter Result Email: <input :class="$style.input" v-model="email" placeholder="you@yoursite.com" /></label></div>
      </div>
    </template>
  </Playground>
</template>

<style module>
.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  padding: 0.5rem;
}

.input {
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