<script setup lang="ts">
import { ref } from "vue";
import { store } from "../store.js";

const hours = ref("");
const minutes = ref("");
const validationError = ref(false);

const validateNumber = () => {
  // Limit length of input
  if (hours.value.length > 2) {
    hours.value = hours.value.slice(0, 2);
  } else if (minutes.value.length > 2) {
    minutes.value = minutes.value.slice(0, 2);
  }

  // Validate that input
  const hoursValue = parseInt(hours.value);
  const minutesValue = parseInt(minutes.value);
  if (
    (hours.value.length !== 0 && isNaN(hoursValue)) ||
    (minutes.value.length !== 0 && isNaN(minutesValue))
  ) {
    // Invalid number
    validationError.value = true;
  } else if (hours.value.length === 0 && minutes.value.length === 0) {
    // User has emptied the input fields
    store.setTime(0);
    validationError.value = false;
  } else {
    if (hours.value.length === 0) {
      store.setTime(minutesValue / 60);
    } else if (minutes.value.length === 0) {
      store.setTime(hoursValue);
    } else {
      store.setTime(hoursValue + minutesValue / 60);
    }
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
  <!-- TODO: Stop this from shifting the whole thing -->
  <p v-show="validationError" class="mt-3 text-red-500">
    Please enter a valid number
  </p>
</template>
