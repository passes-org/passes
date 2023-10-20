<script lang="ts">
  import { passEngineURI, passEngineUserkey } from '../lib/storage';
</script>

<div>
  <div class="space-y-10">
    <label class="block">
      <span class="font-bold">Pass Engine URI</span>
      <input type="text" placeholder="Pass Engine URI" bind:value={$passEngineURI} />
    </label>
    <label class="block">
      <span class="font-bold">Pass Engine User ID (JWT)</span>
      <textarea placeholder="Pass Engine User ID" bind:value={$passEngineUserkey} />
    </label>
  </div>
</div>
