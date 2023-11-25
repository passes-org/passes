<script>
  import SpringBoard from "../SpringBoard/SpringBoard.svelte";
</script>

<SpringBoard
  request={{
    tag: "this-is-a-demo",
    body: new TextEncoder().encode('test test test'),
  }}
  referrer="beastmode.org"
/>
