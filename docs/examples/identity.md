# Pubkey Identity Example

Let's assume there's a pass request type called `{{ requestTag }}` whose interface is as follows:
- Request: void
- Result: The user's P256K public key bytes

If the user approves this pass request, the application that made the request will receive the public key associated with the pass they used to approve it.

<script setup lang="ts">
import Button from './.playground/Button.vue'
import Playground from './.playground/Playground.vue'
import { provideStore } from './.playground/store.ts'
import { EnvelopeV0x00, RequestBuilder } from '../../packages/reqs/src/main'

const requestTag = 'org.passes.example.get-pubkey';

// The request is void, so the encoder returns merely a request header, and the decoder is void
const requestCodec = {
  encode: () => new Uint8Array(EnvelopeV0x00.encodeRequestHeader(requestTag)),
  decode: () => undefined,
};

// The result is the user's public key bytes
const resultCodec = {
  encode: (pubkey: string) => new Uint8Array([
    EnvelopeV0x00.encodeResultStatusByte('accepted'),
    ...new TextEncoder().encode(pubkey),
  ]),
  decode: (bytes) => {
    const { body } = EnvelopeV0x00.parseResult(bytes);
    return new TextDecoder().decode(body);
  }
};

const builder = new RequestBuilder<void, string>(
  requestCodec,
  resultCodec,
);
const request = builder.requestCodec.encode();

const store = provideStore({ builder, request });
</script>

<Playground>
  <div>Sign into <code>docs.passes.org</code>?</div>
  <p>The site will have access to your:</p>
  <ul>
    <li>Pass public key</li>
  </ul>
  <div>
    <Button @click="store.setResult('example-public-key')">Sign In</Button>
    <Button>Cancel</Button>
  </div>
</Playground>
