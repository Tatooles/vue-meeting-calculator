<script setup lang="ts">
import { ref } from "vue";

const hours = ref("");
const minutes = ref("");
const validationError = ref(false);

const validateNumber = () => {
  if (
    (hours.value.length !== 0 && isNaN(parseInt(hours.value))) ||
    (minutes.value.length !== 0 && isNaN(parseInt(minutes.value)))
  ) {
    validationError.value = true;
  } else {
    validationError.value = false;
  }
};
</script>

<template>
  <h3 class="mb-6 text-lg">Enter Meeting Length:</h3>
  <div class="flex h-2/5 justify-center">
    <input
      v-model="hours"
      @input="validateNumber"
      type="text"
      placeholder="HH"
      class="mr-6 w-1/3 border-2 border-white bg-inherit text-center text-4xl"
    />
    <input
      v-model="minutes"
      @input="validateNumber"
      type="text"
      placeholder="MM"
      class="w-1/3 border-2 border-white bg-inherit text-center text-4xl"
    />
  </div>
  <p v-if="validationError" class="mt-3 text-red-500">
    Please enter a valid number
  </p>
</template>
