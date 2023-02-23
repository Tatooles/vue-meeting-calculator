<script setup lang="ts">
import { ref } from "vue";
import Timer from "./Timer.vue";
import TimeInput from "./TimeInput.vue";
import { store } from "../store.js";

// Need a bit of boolean state to hold which tab to display, these functions will toggle that
const showTimer = ref(true);

const setTimer = () => {
  showTimer.value = true;
  store.setUseTimer(true);
  // Will need to update the value from the store, or use v-show instead of v-if
};

const setInput = () => {
  showTimer.value = false;
  store.setUseTimer(false);
};
</script>

<template>
  <!-- This div will contain the top tab navigation -->
  <div class="flex justify-around">
    <button
      @click="setTimer"
      class="w-full border-x-2 border-t-2 dark:border-white"
      :class="showTimer ? '' : 'border-b-2'"
    >
      Timer
    </button>
    <button
      @click="setInput"
      class="w-full border-x-2 border-t-2 dark:border-white"
      :class="showTimer ? 'border-b-2' : ''"
    >
      Time input
    </button>
  </div>

  <!-- This div contains just the time stuff -->
  <div
    class="flex h-60 flex-col items-center justify-center border-2 border-t-0 dark:border-white"
  >
    <div v-show="showTimer">
      <Timer />
    </div>
    <div
      v-show="!showTimer"
      class="flex h-60 flex-col items-center justify-center"
    >
      <TimeInput />
    </div>
  </div>
</template>
