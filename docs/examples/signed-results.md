# Signed Results

When using Pass Requests for load-bearing identity and authentication, it's critical to verify the user is who they say they are.

One way we can do this is to make our pass request type use a signed codec. Let's update our example from [Signing In](./signing-in) to use a signed bytes codec as its result.

Let's define a request type called `{{ requestTag }}` with the following interface:

```typescript
type SignedBody<T> = {
  body: T;
  publicKey: JsonWebKey;
  signature: Uint8Array;
};

type RequestBody = 'hello';
type ResultBody = SignedBody<'oh, hello there'>;
```

If the user approves this pass request, the application that made the request will receive the public key associated with the pass they used to approve it.

<script setup lang="ts">
import { ref } from 'vue';
import Button from './.playground/Button.vue'
import Playground from './.playground/Playground.vue'
import { Codecs, RequestType } from '../../packages/reqs/src/main'

const requestTag = 'org.passes.example.signed-get-pubkey';
const requestType = new RequestType<void, string>(
  requestTag,
  Codecs.String,
  Codecs.Signed(Codecs.Json), // FIXME: Codecs.Signed.decode should return body... Codecs.Signed.verify should return valid/pubkey info; Codecs.Signed.sign should ...?
);

let resultBody = ref({ _error: 'Not Ready' });

(async () => {
  const keyPair = await crypto.subtle.generateKey({ name: 'ECDSA', namedCurve: 'P-256' }, true, ['sign', 'verify']);
  
  const resultBodyValue = 'oh, hello there';
  

  const sigParams = { name: 'ECDSA', hash: 'SHA-384' };
  const signedResultBody = new Uint8Array(await crypto.subtle.sign(sigParams, keyPair.privateKey, Codecs.String.encode(resultBodyValue)));

  const result = { body: resultBodyValue, signature: signedResultBody, publicKey: await crypto.subtle.exportKey('jwk', keyPair.publicKey) };
  console.log('result', result);
  resultBody.value = result
})();

</script>

<Playground
  requestBody="hello"
  :requestType="requestType"
  :resultBody="resultBody"
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
