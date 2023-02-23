<script setup lang="ts">
import { useStopwatch } from "vue-timer-hook";
import { computed, watch, ref } from "vue";
import { store } from "../store.js";

const stopwatch = useStopwatch(0, false);

const resetStopwatch = () => {
  stopwatch.reset();
  stopwatch.pause();
};

watch(stopwatch.seconds, async () => {
  store.setTimerSeconds(stopwatch.seconds);
});

watch(stopwatch.minutes, async () => {
  store.setTimerMinutes(stopwatch.minutes);
});

watch(stopwatch.hours, async () => {
  store.setTimerHours(stopwatch.hours);
});

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
  console.log("second", stopwatch.seconds.value);
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
      v-show="!stopwatch.isRunning.value"
      @click="stopwatch.start()"
      class="mr-4 rounded-md border-2 p-2 dark:border-white"
    >
      Start
    </button>
    <button
      v-show="stopwatch.isRunning.value"
      class="border-whit mr-4 rounded-md border-2 p-2 shadow-inner shadow-white"
    >
      Start
    </button>

    <button
      v-show="stopwatch.isRunning.value"
      @click="stopwatch.pause()"
      class="rounded-md border-2 p-2 dark:border-white"
    >
      Stop
    </button>
    <button
      v-show="!stopwatch.isRunning.value"
      class="rounded-md border-2 p-2 shadow-inner shadow-white dark:border-white"
    >
      Stop
    </button>
  </div>
  <button
    @click="resetStopwatch()"
    class="mt-4 rounded-md border-2 p-2 dark:border-white"
  >
    Reset
  </button>
</template>
