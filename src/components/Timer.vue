<script setup lang="ts">
import { useStopwatch } from "vue-timer-hook";
import { computed } from "vue";

const stopwatch = useStopwatch(0, false);

// Computed values so we always have a 2 digit number
const hourLeft = computed(() => {
  return Math.floor(stopwatch.hours.value / 10);
});
const hourRight = computed(() => {
  return stopwatch.hours.value % 10;
});

const minuteLeft = computed(() => {
  return Math.floor(stopwatch.minutes.value / 10);
});
const minuteRight = computed(() => {
  return stopwatch.minutes.value % 10;
});

const secondLeft = computed(() => {
  return Math.floor(stopwatch.seconds.value / 10);
});
const secondRight = computed(() => {
  return stopwatch.seconds.value % 10;
});
</script>

<template>
  <h1 class="text-5xl">
    {{ hourLeft }}{{ hourRight }}:{{ minuteLeft }}{{ minuteRight }}:{{
      secondLeft
    }}{{ secondRight }}
  </h1>
  <div class="mt-4 flex flex-row justify-center">
    <button
      @click="stopwatch.start"
      class="mr-4 rounded-md border-2 border-white p-2"
    >
      Start
    </button>
    <button
      @click="stopwatch.pause"
      class="rounded-md border-2 border-white p-2"
    >
      Stop
    </button>
  </div>
</template>
