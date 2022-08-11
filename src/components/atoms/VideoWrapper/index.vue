<template>
  <video v-bind="video" :class="[customClass]">
    <source :src="src" />
  </video>
</template>

<script lang="ts" setup>
interface Props extends Omit<HTMLVideoElement, "src"> {
  customClass?: string | undefined;
  src: string;
}
const props = defineProps<Props>();
const { src, customClass, ...video } = props;
</script>
