<template>
  <section class="rockets text-gray-400 bg-gray-900 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-20">
        <h1 class="text-2xl font-medium title-font mb-4 text-white uppercase">
          {{ title }}
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
          {{ description }}
        </p>
      </div>

      <div class="flex flex-wrap -m-4">
        <template
          v-for="(item, i) in rockets"
          :key="`item-${i}`"
          class="partner__item mx-auto mb-4 max-w-17 px-2 lg:max-w-32 lg:mb-0"
        >
          <Rocket v-bind="item" />
        </template>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Rocket from "../../molecules/Rocket/index.vue";
import { Props as IRocket } from "../../molecules/Rocket/index.vue";

interface Props {
  title: string;
  description: string;
  rockets: IRocket[];
}

const props = defineProps<Props>();
</script>
