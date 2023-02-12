<script setup lang="ts">
import Body from "./components/Body.vue";
</script>

<template>
  <div
    class="relative mx-auto flex min-h-screen w-full flex-col bg-zinc-900 p-5 text-center text-white md:w-3/4"
  >
    <header>
      <h1 class="mb-5 text-2xl font-bold md:text-4xl">
        Meeting Cost Calculator
      </h1>
    </header>

    <Body />

    <footer class="absolute bottom-3 left-1/2 translate-x-[-50%] text-xs">
      Created by Kevin Tatooles
    </footer>
  </div>
</template>
