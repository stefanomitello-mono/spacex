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
          <a class="text-gray-700" :href="wikipedia">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              ></path>
            </svg>
          </a>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ImageWrapper from "../../atoms/ImageWrapper/index.vue";
import { IImage } from "../../atoms/ImageWrapper/types";
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
