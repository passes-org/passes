<script setup>
const emit = defineEmits(['click'])
</script>

<template>
  <button @click="$emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    background: var(--vp-button-alt-bg);
    border-radius: 0.4rem;
    color: var(--vp-button-alt-text);
    font-weight: bold;
    font-size: 0.8rem;
    padding: 0.3rem 0.5rem;
  }

  button:hover {
    background: var(--vp-button-alt-hover-bg);
    color: var(--vp-button-alt-hover-text);
  }

  button:active {
    background: var(--vp-button-alt-active-bg);
    color: var(--vp-button-alt-active-text);
  }
</style>
