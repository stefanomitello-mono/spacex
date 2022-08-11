<template>
  <div class="logo">
    <ImageWrapper
      src="https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png"
      alt="logo"
      :class="[{ invert: props.white }]"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import ImageWrapper from "../ImageWrapper/index.vue";

export interface Props {
  white: boolean;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
