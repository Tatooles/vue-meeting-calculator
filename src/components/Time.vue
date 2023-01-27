<script setup lang="ts">
import { ref } from 'vue';
import Timer from './Timer.vue';
import TimeInput from './TimeInput.vue';

// Need a bit of boolean state to hold which tab to display, these functions will toggle that
const showTimer = ref(true);

const setTimer = () => {
  showTimer.value = true;
}

const setInput = () => {
  showTimer.value = false;
}
</script>

<template>
  <!-- This div will contain the top tab navigation -->
  <div class="flex justify-around">
    <button @click="setTimer" class="border-white border-x-2 border-t-2 w-full"
      :class="showTimer ? '' : 'border-b-2'">Timer</button>
    <button @click="setInput" class="border-white border-x-2 border-t-2 w-full"
      :class="showTimer ? 'border-b-2' : ''">Time input</button>
  </div>

  <!-- This div contains just the time stuff -->
  <div class="flex flex-col h-60 justify-center border-white border-2 border-t-0">
    <Timer v-if="showTimer" />
    <TimeInput v-if="!showTimer" />
  </div>
</template>