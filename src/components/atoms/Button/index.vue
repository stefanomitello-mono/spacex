<template>
  <a
    :href="to"
    class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
  >
    {{ text }}
  </a>
</template>

<script setup lang="ts">
interface Props {
  to: string;
  text: string;
}

defineProps<Props>();
</script>
