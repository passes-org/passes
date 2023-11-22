<script lang="ts">
    import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<pre>
  {JSON.stringify(form?.request)}
</pre>