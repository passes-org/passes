# Requesting Permissions



Let's define a new pass request type called `{{ requestTag }}` whose interface is as follows:
- Request: void
- Result: The user's P256K public key bytes

If the user approves this pass request, the application that made the request will receive the public key associated with the pass they used to approve it.

<script setup lang="ts">
import Button from './.playground/Button.vue'
import Playground from './.playground/Playground.vue'
import { Codecs, RequestType } from '../../packages/reqs/src/main'

type PermissionType = 'avatar-uri' | 'email' | 'full-name';
type PermissionsRequest = PermissionType[];

type PermissionsResult = Record<PermissionType, string>;

const requestTag = 'org.passes.example.request-user-data';
const requestType = new RequestType<PermissionsRequest, PermissionsResult>(
  requestTag,
  Codecs.Json,
  Codecs.Json,
);
</script>

<Playground
  :requestType="requestType"
  :requestBody="['avatar-uri', 'email', 'full-name']"
  :resultBody="{ 'email': 'example@passes.org', 'full-name': 'Passes User' }"
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