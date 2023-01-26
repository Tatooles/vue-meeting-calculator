<script setup lang="ts">

</script>

<template>
  <div class="">
    <!-- This div will contain the top tab navigation -->
    <div class="flex justify-around">
      <button class="border-white border-x-2 border-t-2 w-full">Timer</button>
      <button class="border-white border-2 w-full">Time input</button>
    </div>
    <!-- This div contains just the time stuff -->
    <div class="flex flex-col h-60 justify-center border-white border-2 border-t-0">
      <h1 class="text-7xl">00:00.00</h1>
      <div class="flex flex-row justify-center mt-4">
        <button class="mr-4 border-white border-2 rounded-md p-2">Start</button>
        <button class="border-white border-2 rounded-md p-2">Stop</button>
      </div>
    </div>
  </div>
</template>