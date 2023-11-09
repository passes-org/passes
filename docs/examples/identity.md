# Pubkey Identity Example

Let's assume there's a pass request type called `{{ requestTag }}` whose interface is as follows:
- Request: void
- Result: The user's P256K public key bytes

If the user approves this pass request, the application that made the request will receive the public key associated with the pass they used to approve it.

<script setup lang="ts">
import Button from './.playground/Button.vue'
import Playground from './.playground/Playground.vue'
import { RequestTypeBuilder } from '../../packages/reqs/src/main'

const requestTag = 'org.passes.example.get-pubkey';

const builder = new RequestTypeBuilder<void, string>(
  requestTag,
  // Request body codec (void)
  {
    encode: () => new Uint8Array(),
    decode: () => undefined,
  },
  // Result body codec (utf8)
  {
    encode: (pubkey: string) => new TextEncoder().encode(pubkey),
    decode: (bytes) => new TextDecoder().decode(bytes),
  },
);
</script>

<Playground
  :builder="builder"
  :requestBody="undefined"
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
import { RequestTypeBuilder } from '@passes/reqs'

const getPubkey = new RequestTypeBuilder<void, string>(
  'org.passes.example.get-pubkey',
  // Request body codec (void)
  {
    encode: () => new Uint8Array(),
    decode: () => undefined,
  },
  // Result body codec (utf8)
  {
    encode: (pubkey: string) => new TextEncoder().encode(pubkey),
    decode: (bytes) => new TextDecoder().decode(bytes),
  },
);
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
import { EnvelopeV0x00 } from '@passes/reqs';

const { tag: requestTag } = EnvelopeV0x00.parseRequest(rawRequest);

switch (requestTag) {
  // ...
  case 'org.passes.example.get-pubkey':
	  // render UI for handling getPubkey
}
```