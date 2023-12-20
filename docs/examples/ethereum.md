# Ethereum JSON-RPC

Passes allows apps to make requests directly to users. This pattern is powerful for building features backed by blockchains like Ethereum, since Pass Providers can implement signatures using the same kind of cryptography blockchains use.

In this example we'll define a request topic called `{{ id }}`, whose body can be any Ethereum JSON-RPC request:

```typescript
import { RequestTopic } from '@passes/reqs';

const ethJsonRpc = new RequestTopic<EthJsonRpc2Request, EthJsonRpc2Result>({
  id: 'org.ethereum.json-rpc-request',
  requestBodyCodec: Codecs.Json,
  resultBodyCodec: Codecs.Json,
});

// Request the user to send 0.02 ETH to samy.eth
const result = await ethJsonRpc.sendRequest({
  method: 'eth_sendTransaction',
  jsonrpc: "2.0",
  id: 1,
  params: [{
    to: '0x7Ee54D537BDF322DcEe8c986Aa12E053D41De30A',
    value: '0x2386F26FC10000',
  }],
});

if (result.status === 'accepted') {
  // `txHash` is the hash of the ethereum transaction sent by the user via their Pass Provider
  const { result: txHash } = result.body;
}
```

<script setup lang="ts">
import Button from './.playground/Button.vue'
import Playground from './.playground/Playground.vue'
import * as Codecs from '../../packages/reqs/src/codecs'
import { RequestTopic } from '../../packages/reqs'

type ProfileInfoType = 'email' | 'profile.name' | 'profile.picture';
type UserProfileRequest = ProfileInfoType[];
type UserProfileResult = Record<ProfileInfoType, string>;

const id = 'org.ethereum.json-rpc-request';
const requestTopic = new RequestTopic<UserProfileRequest, UserProfileResult>({
  id,
  requestBodyCodec: Codecs.Json,
  resultBodyCodec: Codecs.Json,
});
</script>

<Playground
  title="Interactive Example"
  description="This demo requests to send a (fake) Ethereum transaction."
  acceptButtonTitle="Send 0.02 ETH to samy.eth"
  :requestTopic="requestTopic"
  :requestBody="{ params: [{ to: '0x7Ee54D537BDF322DcEe8c986Aa12E053D41De30A', value: '0x2386F26FC10000' }], method: 'eth_sendTransaction', jsonrpc: '2.0', id: 1 }"
  :resultBody="{ result: '0xc1b6ecd25082be18956afae966f3c73d1159fc85f6fcdb254d7461814a589290', jsonrpc: '2.0', id: 1 }"
>
  <template #pass-emulator-ui>
    <div :class="$style.content">
      <div><code>docs.passes.org</code> is requesting to send 0.02 ETH ($41.10) to `samy.eth`.</div>
    </div>
  </template>
</Playground>


<style module>
.content {
  flex: 1;
  padding: 0.5rem;
}
</style>
