<template>
  <a
    class="animate-bounce text-12 absolute bottom-6 cursor-pointer w-10 h-10 left-[50%]"
    :href="`#${sectionId || ''}`"
  >
    <img src="icons/drag-down.svg" /> {{ label }}
  </a>
</template>

<script setup lang="ts">
interface Props {
  sectionId: string;
  label?: string;
}

const props = defineProps<Props>();
</script>
