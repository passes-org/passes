# Signed Results

When using Pass Requests for load-bearing identity and authentication, it's critical to verify the user is who they say they are.

One way we can do this is to make our pass request type use a signed codec. Let's update our example from [Signing In](./signing-in) to use a signed bytes codec as its result.

Let's define a request type called `{{ requestTag }}` with the following interface:

```typescript
type RequestBody = void;
type ResultBody = void;
```

If the user approves this pass request, the application that made the request will receive the public key associated with the pass they used to approve it.

<script setup lang="ts">
import { ref } from 'vue';
import Button from './.playground/Button.vue'
import Playground from './.playground/Playground.vue'
import { Codecs, RequestType, SignedBodyWrapper, SignedRequestType } from '../../packages/reqs/src/main'

const requestTag = 'org.passes.example.signed-get-pubkey';
const requestType = new SignedRequestType<void, string>({
  requestType: new RequestType(
    requestTag,
    Codecs.Void,
    Codecs.Void,
  ),
  signResult,
  verifyResult
});

let keyPair = ref();
let resultBody = ref({ _error: 'Not Ready' });

const keyFormat = 'jwk';
const keyParams = { name: 'ECDSA', namedCurve: 'P-256', hash: 'SHA-384' };
async function signResult(body: string): Promise<SignedBodyWrapper<TResultBody>> {
  if (!keyPair.value) throw new Error('Keypair not ready');
  return {
    header: {
      signature: new Uint8Array(await crypto.subtle.sign(
        keyParams,
        keyPair.value.privateKey,
        Codecs.String.encode(body)
      )),
      publicKey: await crypto.subtle.exportKey(keyFormat, keyPair.value.publicKey),
    },
    body,
  };
}
async function verifyResult(signed: SignedBodyWrapper): Promise<boolean> {
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

<Playground
  :requestBody="undefined"
  :requestType="requestType"
  :resultBody="undefined"
  acceptButtonTitle="Sign In"
  rejectButtonTitle="Cancel"
>
  <template #pass-emulator-ui>
    <div :class="$style.content">
      <div>Sign into <code>docs.passes.org</code>?</div>
    </div>
  </template>
</Playground>

<style module>
.content {
  flex: 1;
  padding: 0.5rem;
}
</style>
