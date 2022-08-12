<template>
  <section class="rocket relative h-screen bg-black flex justify-center">
    <div class="absolute inset-0">
      <VideoWrapper
        :src="videoSrc"
        customClass="w-full h-full object-cover"
        muted
        autoplay
        loop
      />
    </div>

    <div
      class="container max-w-5xl relative mx-auto flex items-center justify-center text-white"
    >
      <div class="flex flex-col">
        <div class="mx-auto flex flex-wrap">
          <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 class="text-sm title-font text-gray-300 tracking-widest">
              SpaceX
            </h2>
            <h1 class="text-3xl title-font font-medium mb-4">
              {{ name }}
            </h1>
            <div class="flex mb-4">
              <a
                class="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1"
                >Description</a
              >
            </div>
            <p class="leading-relaxed mb-4">
              {{ description }}
            </p>
            <div class="flex border-t border-gray-500 py-2">
              <span class="text-gray-500">Boosters</span>
              <span class="ml-auto text-white">{{ boosters }}</span>
            </div>
            <div class="flex border-t border-gray-500 py-2">
              <span class="text-gray-500">diameter</span>
              <span class="ml-auto text-white">{{ diameter.meter }}</span>
            </div>
            <div class="flex border-t border-b mb-6 border-gray-500 py-2">
              <span class="text-gray-500">First Flight</span>
              <span class="ml-auto text-white">{{ first_flight }}</span>
            </div>
            <div class="flex justify-between">
              <span class="title-font font-medium text-2xl text-white"
                >${{ cost_per_launch }}</span
              >
              <Button :to="wikipedia" text="Discover More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Button from "../../atoms/Button/index.vue";
import VideoWrapper from "../../atoms/VideoWrapper/index.vue";
interface Props {
  id: string;
  boosters: number;
  cost_per_launch: number;
  description: string;
  name: string;
  type: string;
  wikipedia: string;
  first_flight: string;
  diameter: any;
  active: true;
}

const props = defineProps<Props>();

const videoSrc = `/media/${props.id}.webm`;
</script>
