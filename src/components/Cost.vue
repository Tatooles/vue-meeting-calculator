<script setup lang="ts">
import { ref } from "vue";

const cost = ref(1000);
</script>

<template>
  <div class="mt-6 mb-4 flex flex-col align-middle">
    <h3 class="mb-4 text-2xl">Total Cost</h3>
    <h1 class="text-6xl text-red-500">
      ${{ new Intl.NumberFormat().format(cost) }}
    </h1>
  </div>
</template>
