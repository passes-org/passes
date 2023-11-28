# Signing in with a Public Key

Signing in is one of the most basic uses of a pass request. In this example, we'll demonstrate a pass request that allows an app to request a user's public key, 
which acts as a common identifier for the user across the various apps they use.

Let's define a new pass request type called `{{ requestTag }}` with the following interface:

```typescript
type RequestBody = void;
type ResultBody = string; // The user's public key as a base64 string
```

If the user approves this pass request, the application that made the request will receive the public key associated with the pass they used to approve it.

<script setup lang="ts">
import Button from './.playground/Button.vue'
import Playground from './.playground/Playground.vue'
import { Codecs, RequestType } from '../../packages/reqs/src/main'

const requestTag = 'org.passes.example.get-pubkey';
const requestType = new RequestType<void, string>({
  requestTag,
  // Request body codec (void)
  requestBodyCodec: Codecs.Void,
  // Result body codec (utf8 string)
  resultBodyCodec: Codecs.String,
});
</script>

<Playground
  :requestBody="undefined"
  :requestType="requestType"
  :resultBody="'example-user-pubkey'"
  acceptButtonTitle="Sign In"
  rejectButtonTitle="Cancel"
>
  <template #pass-emulator-ui>
    <div :class="$style.content">
      <div>Sign into <code>docs.passes.org</code>?</div>
      <p>The site will have access to your:</p>
      <ul>
        <li>Public key</li>
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

## Request Type Code

```typescript
import { Codecs, RequestType } from '@passes/reqs'

const getPubkey = new RequestType<void, string>({
  requestTag: 'org.passes.example.get-pubkey',
  // Request body codec (void)
  requestBodyCodec: Codecs.Void,
  // Result body codec (utf8 string)
  resultBodyCodec: Codecs.String,
});
```

## Request Code

```typescript
const getPubkeyResult = await getPubkey.sendRequest();

if (getPubkeyResult.status !== 'accepted') {
  throw new Error('User rejected getPubkey request');
}

const userPubkey = getPubkeyResult.body;
```

## Pass Provider Handling Code
```typescript
import { RequestRouter } from '@passes/reqs';

// Implements support for the request tags supported by the pass provider
const router = new RequestRouter({
  'org.passes.example.get-pubkey': (rawRequest: Uint8Array) => {
    const request = getPubkey.decodeRequest(rawRequest); // void
    return /** render UI for handling get-pubkey */;
  },

  // Additional entries for other supported request types
});
```