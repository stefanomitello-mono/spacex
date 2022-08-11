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
        custom-class="object-cover w-full h-full"
        src="https://astro-moon-landing.netlify.app/assets/images/astronaut/yLnzHhqALK-800.avif"
        alt="A floating astronaut in a space suit"
      />

      <div class="flex flex-col max-w-xs md:max-w-lg">
        <Logo white />
        <!--         <h2
          class="font-extrabold tracking-tighter text-center text-8xl text-white"
        >
          Build fast
          <br />
          websites, <br />
          faster.
        </h2> -->
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
</script>

<style scoped></style>
