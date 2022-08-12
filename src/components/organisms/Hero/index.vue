<template>
  <section class="relative h-screen bg-black flex justify-center">
    <div id="splash-bg-fallback" class="absolute inset-0 opacity-40">
      <!-- <HeroImage /> -->
      <VideoWrapper
        src="media/space_background.mp4"
        customClass="w-full h-full object-cover"
        muted
        autoplay
        loop
      />
    </div>

    <div class="container relative mx-auto flex items-center justify-center">
      <ImageWrapper
        class="absolute -z-1 max-w-lg hidden md:block"
        :image="astro"
      />

      <div class="flex flex-col max-w-xs md:max-w-lg">
        <Logo white />
      </div>

      <ScrollButton sectionId="#about" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ImageWrapper from "../../atoms/ImageWrapper/index.vue";
import VideoWrapper from "../../atoms/VideoWrapper/index.vue";
import Logo from "../../atoms/Logo/index.vue";
import ScrollButton from "../../atoms/ScrollButton/index.vue";

const astro = {
  src: "https://astro-moon-landing.netlify.app/assets/images/astronaut/yLnzHhqALK-800.avif",
  alt: "A floating astronaut in a space suit",
  customClass: "object-cover w-full h-full",
};
</script>

<style scoped></style>
