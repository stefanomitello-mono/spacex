<template>
  <picture class="image-wrapper">
    <!--         <source v-if="mobile" media="(max-width: 599px)" :srcset="transformUrl(mobile.url)" />
        <source media="(min-width: 600px)" :srcset="transformUrl(data?.url)" /> -->

    <img :class="[image.customClass]" :src="image.src" :alt="image.alt" />
  </picture>
</template>

<script lang="ts" setup>
import { IImage } from "./types";
export interface Props {
  image: IImage;
}
defineProps<Props>();
</script>
