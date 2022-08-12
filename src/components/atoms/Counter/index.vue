<template>
  <div class="p-4 sm:w-1/4 w-1/2">
    <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
      {{ prefix }}{{ to }}{{ suffix }}
    </h2>
    <p class="leading-relaxed">{{ label }}</p>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
}
defineProps<Props>();
</script>
