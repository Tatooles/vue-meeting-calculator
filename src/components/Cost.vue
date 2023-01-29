<script setup lang="ts">
import { ref } from 'vue';

const cost = ref(1000);

</script>

<template>
  <div class="flex flex-col align-middle mt-6">
    <h3 class="text-2xl mb-4">Total Cost</h3>
    <h1 class="text-6xl text-red-500">${{ new Intl.NumberFormat().format(cost) }}</h1>
  </div>

</template>