<script setup lang="ts">
import Body from './components/Body.vue'

</script>

<template>
  <div class="flex flex-col text-center bg-zinc-900 h-screen text-white w-full md:w-3/4 mx-auto p-5">
    <header>
      <h1 class="text-2xl md:text-4xl font-bold">Meeting Cost Calculator</h1>
    </header>

    <Body />

    <footer class="text-xs bottom-3 absolute left-1/2 translate-x-[-50%]">
      Created by Kevin Tatooles
    </footer>
  </div>
</template>