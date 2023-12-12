# Recognizing Users

Signing in is one of the most basic uses of a pass request. In this example, we'll demonstrate a pass request that allows an app to request some basic user info.

Let's define a request topic called `{{ id }}` with the type:

```typescript
// The profile info fields that can be requested
type ProfileInfoType = 'email' | 'profile.name' | 'profile.picture';

// Array of requested profile info fields
type UserProfileRequest = ProfileInfoType[];
// Record from permission type to value
type UserProfileResult = Record<ProfileInfoType, string>;

const requestUserProfile = new RequestTopic<UserProfileRequest, UserProfileResult>({
  id: 'org.passes.example.request-user-profile',
  requestBodyCodec: Codecs.Json,
  resultBodyCodec: Codecs.Json,
});

const result = await requestUserProfile.sendRequest([
  'email',
  'profile.name',
  'profile.picture',
]);

if (result.status === 'accepted') {
  const userProfileInfo = result.body;
}
``` 

<script setup lang="ts">
import Button from './.playground/Button.vue'
import Playground from './.playground/Playground.vue'
import { Codecs, RequestTopic } from '../../packages/reqs/src/main'

type ProfileInfoType = 'email' | 'profile.name' | 'profile.picture';
type UserProfileRequest = ProfileInfoType[];
type UserProfileResult = Record<ProfileInfoType, string>;

const id = 'org.passes.example.request-user-profile';
const requestTopic = new RequestTopic<UserProfileRequest, UserProfileResult>({
  id,
  requestBodyCodec: Codecs.Json,
  resultBodyCodec: Codecs.Json,
});
</script>

<Playground
  title="Interactive Example"
  description="This demo requests basic user profile info."
  :requestTopic="requestTopic"
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
