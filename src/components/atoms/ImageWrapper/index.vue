<template>
  <picture class="image-wrapper">
    <!--         <source v-if="mobile" media="(max-width: 599px)" :srcset="transformUrl(mobile.url)" />
        <source media="(min-width: 600px)" :srcset="transformUrl(data?.url)" /> -->

    <img :class="[customClass]" :src="src" :alt="alt" />
  </picture>
</template>

<script lang="ts" setup>
export interface Props {
  customClass?: string;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;

  src: string;
}
defineProps<Props>();
</script>
