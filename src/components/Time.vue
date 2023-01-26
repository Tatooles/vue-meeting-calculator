<script setup lang="ts">
import Timer from './Timer.vue'

// Need a bit of boolean state to hold which tab to display, these functions will toggle that
const setTimer = () => {
  console.log("Clicked button to switch to timer")
}

const setInput = () => {
  console.log("Clicked button to switch to time input")
}
</script>

<template>
  <!-- This div will contain the top tab navigation -->
  <div class="flex justify-around">
    <button @click="setTimer" class="border-white border-x-2 border-t-2 w-full">Timer</button>
    <button @click="setInput" class="border-white border-2 w-full">Time input</button>
  </div>

  <!-- This div contains just the time stuff -->
  <div class="flex flex-col h-60 justify-center border-white border-2 border-t-0">
    <Timer />
  </div>
</template>