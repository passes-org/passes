# Signed Results

When using Pass Requests for load-bearing identity and authentication, it's critical to verify the user is who they say they are.

One way we can do this is to make our pass request type use a signed codec. Let's update our example from [Recognizing Users](./recognizing-users) to use a signed bytes codec as its result.

```typescript
import { RequestType, SignedRequestType } from '@passes/reqs';
import type { SignedBodyWrapper, SignedBodyWrapperHeader } from '@passes/reqs';

// The profile info fields that can be requested
type ProfileInfoType = 'email' | 'profile.name' | 'profile.picture';

// Array of requested profile info fields
type UserProfileRequest = ProfileInfoType[];
// Record from permission type to value
type UserProfileResult = Record<ProfileInfoType, string>;

// For this demo implementation, we'll use the SubtleCrypto API to sign and verify the result
const keypair = await crypto.subtle.generateKey(keyParams, true, ['sign', 'verify']);
const keyFormat = 'jwk';
const keyParams = { name: 'ECDSA', namedCurve: 'P-256', hash: 'SHA-384' };

// Wrap the RequestType from the previous example in a SignedRequestType
const requestUserProfile = new SignedRequestType<UserProfileRequest, UserProfileResult>({
  requestType: new RequestType({
    requestTag: 'org.passes.example.signed-request-user-profile',
    requestBodyCodec: Codecs.Json,
    resultBodyCodec: Codecs.Json,
  }),
  signResult: async (body: boolean): Promise<SignedBodyWrapperHeader> => ({
    publicKey: await crypto.subtle.exportKey(
      keyFormat,
      keyPair.value.publicKey
    ),
    signature: new Uint8Array(await crypto.subtle.sign(
      keyParams,
      keyPair.value.privateKey,
      Codecs.Boolean.encode(body)
    )),
  }),
  verifyResult: async (signed: SignedBodyWrapper<Boolean>): Promise<boolean> =>
    crypto.subtle.verify(
      keyParams,
      publicKey: await crypto.subtle.importKey(keyFormat, signed.header.publicKey, keyParams, true, ['verify']),
      signed.header.signature,
      Codecs.Boolean.encode(signed.body)
    ),
});

// Send the pass request
const requestUserProfileResult = await requestUserProfile.sendRequest([
  'email',
  'profile.name',
  'profile.picture'
]);

if (requestUserProfileResult.status === 'accepted') {
  // If the user accepted the request and `requestUserProfile.sendRequest` did not throw, the result signature is valid
  const userProfileInfo = requestUserProfileResult.body; 
  const userPublicKey = requestUserProfileResult.signed.publicKey; 
  const validResultSignature = requestUserProfileResult.signed.signature; 
}
```

If the user approves this pass request, the application that made the request will receive a signature of the result and the user's public key.

:::info Signature Info
In the example below, after you accept the pass request, you can click "Valid Request Signature" to show the result signature and the user's public key.
:::

<script setup lang="ts">
import { ref } from 'vue';
import Button from './.playground/Button.vue'
import Playground from './.playground/Playground.vue'
import { Codecs, RequestType, SignedBodyWrapper, SignedBodyWrapperHeader, SignedRequestType } from '../../packages/reqs/src/main'

type ProfileInfoType = 'email' | 'profile.name' | 'profile.picture';
type UserProfileRequest = ProfileInfoType[];
type UserProfileResult = Record<ProfileInfoType, string>;

const requestTag = 'org.passes.example.signed-request-user-profile';
const requestType = new SignedRequestType<UserProfileRequest, UserProfileResult>({
  requestType: new RequestType({
    requestTag,
    requestBodyCodec: Codecs.Json,
    resultBodyCodec: Codecs.Json,
  }),
  signResult,
  verifyResult
});

let keyPair = ref();
let resultBody = ref({ _error: 'Not Ready' });

const keyFormat = 'jwk';
const keyParams = { name: 'ECDSA', namedCurve: 'P-256', hash: 'SHA-384' };
async function signResult(body: string): Promise<SignedBodyWrapperHeader> {
  if (!keyPair.value) throw new Error('Keypair not ready');
  return {
    signature: new Uint8Array(await crypto.subtle.sign(
      keyParams,
      keyPair.value.privateKey,
      Codecs.Json.encode(body)
    )),
    publicKey: await crypto.subtle.exportKey(keyFormat, keyPair.value.publicKey),
  };
}
async function verifyResult(signed: SignedBodyWrapper): Promise<boolean> {
  const publicKey = await crypto.subtle.importKey(keyFormat, signed.header.publicKey, keyParams, true, ['verify']);

  return crypto.subtle.verify(
    keyParams,
    publicKey,
    signed.header.signature,
    Codecs.Json.encode(signed.body)
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
  title="Interactive Example"
  description="This demo requests basic user profile info."
  emulatorOnly
  :requestType="requestType"
  :requestBody="['email', 'profile.name', 'profile.picture']"
  :resultBody="{ 'profile.picture': 'https://i.pravatar.cc/300', 'email': 'example@passes.org', 'profile.name': 'Passes User' }"
>
  <template #pass-emulator-ui>
    <div :class="$style.content">
      <div><code>docs.passes.org</code> is requesting to access your:</div>
      <ul>
        <li>Avatar</li>
        <li>Email Address</li>
        <li>Full Name</li>
      </ul>
    </div>
  </template>
</Playground>

<style module>
.content {
  flex: 1;
  padding: 0.5rem;
}
</style>
