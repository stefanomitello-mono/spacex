<template>
  <div class="p-4 lg:w-1/4 md:w-1/2">
    <div class="h-full flex flex-col items-center text-center">
      <ImageWrapper v-if="id" :image="image" />
      <div class="w-full">
        <h2 class="title-font font-medium text-lg text-white">{{ name }}</h2>
        <p class="mb-4">
          {{ description }}
        </p>
        <span class="inline-flex">
          <Button :to="wikipedia" text="Discover" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageWrapper from "../../atoms/ImageWrapper/index.vue";
import { IImage } from "../../atoms/ImageWrapper/types";
import Button from "../../atoms/Button/index.vue";
export interface Props {
  id: string;
  first_flight: string;
  name: string;
  description: string;
  wikipedia: string;
}
const props = defineProps<Props>();

const image = {
  src: `/media/${props.id}.jpg`,
  alt: props.name,
  customClass:
    "flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4",
};
</script>

<style scoped></style>
