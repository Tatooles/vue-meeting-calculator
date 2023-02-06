<script setup lang="ts">
import { useStopwatch } from "vue-timer-hook";
// const autoStart = false;
const stopwatch = useStopwatch(0, false);
</script>

<template>
  <h1 class="text-5xl">
    {{ stopwatch.hours }}:{{ stopwatch.minutes }}:{{ stopwatch.seconds }}
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
