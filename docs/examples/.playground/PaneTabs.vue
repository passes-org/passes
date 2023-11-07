<script setup lang="ts">
import Button from './Button.vue';

const props = defineProps<{
  modelValue: string;
  tabs: string[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div :class="$style.tabs">
    <button
      v-for="tab in tabs"
      :class="{ [$style.active]: tab === modelValue }"
      @click="emit('update:modelValue', tab)"
    >
      {{ tab }}
    </button>
  </div>
</template>

<style module>
.tabs {
  background-color: var(--vp-c-bg-alt);
  display: flex;
}

.tabs > button {
  font-weight: bold;
  opacity: 40%;
  text-transform: capitalize;
  padding: 0.5rem;
}

.tabs > button.active {
  opacity: 100%;
}
</style>