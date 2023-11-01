# Pubkey Identity Example

Let's assume there's a pass request type called `org.passes.example.get-pubkey` whose interface is as follows:
- Request: void
- Result: The user's P256K public key

If the user approves this pass request, the application that made the request will receive the public key associated with the pass they used to approve it.

<script setup>
import Playground from './.playground/Playground.vue'
</script>

<Playground />
