<script setup lang="ts">
import { ref } from 'vue';

const hours = ref('');
const minutes = ref('');

</script>

<template>
  <h3 class="mb-6 text-lg">Enter Meeting Length:</h3>
  <div class="flex h-2/5 justify-center">
    <input v-model="hours" type="text" placeholder="HH"
      class="text-center text-4xl border-2 border-white w-1/3 bg-inherit mr-6">
    <input v-model="minutes" type="text" placeholder="MM"
      class="text-center text-4xl border-2 border-white w-1/3 bg-inherit">
  </div>
</template>