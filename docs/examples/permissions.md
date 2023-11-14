# Requesting Permissions

This example demonstrates how applications might request information associated with the user, such as email, avatar image, name, etc.

Let's define a request type called `{{ requestTag }}` with the following interface:

```typescript
// The types of permissions that can be requested
type PermissionType = 'avatar-uri' | 'email' | 'full-name';

// Array of requested permissions
type RequestBody = PermissionType[];
// Record from permission type to value
type ResultBody = Record<PermissionType, string>;
``` 

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