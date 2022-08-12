<template>
  <section id="about" class="text-gray-400 bg-gray-900 body-font">
    <div
      class="container max-w-5xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center"
    >
      <div
        class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
      >
        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          We are {{ company.name }} <br class="hidden lg:inline-block" />
          MAKING HUMANITY MULTIPLANETARY
        </h1>
        <p class="mb-8 leading-relaxed">
          “{{ company.summary }}” -{{ company.founder }}
        </p>
        <div class="flex justify-center">
          <Button to="#rockets" text="Our Rockets" />
        </div>
      </div>
      <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <VideoWrapper
          src="https://www.spacex.com/media/mission_reusability.webm"
          autoplay
          muted
          loop
        />
      </div>
    </div>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-wrap -m-4 text-center">
        <Counter :to="company.employees" label="employees" />
        <Counter :to="company.launch_sites" label="launch sites" />
        <Counter :to="company.test_sites" label="test sites" />
        <Counter :to="company.vehicles" label="vehicles" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import VideoWrapper from "../../atoms/VideoWrapper/index.vue";
import Counter from "../../atoms/Counter/index.vue";
import Button from "../../atoms/Button/index.vue";

export interface ICompany {
  employees: number;
  founder: string;
  launch_sites: number;
  name: string;
  summary: string;
  test_sites: number;
  vehicles: number;
}
interface Props {
  company: ICompany;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
