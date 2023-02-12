<script setup lang="ts">
import { store } from "../store.js";

const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  currency: "USD",
});
</script>

<template>
  <div class="mt-6 mb-8 flex flex-col align-middle">
    <h3 class="mb-4 text-2xl">Total Cost</h3>
    <h1 v-if="store.useTimer" class="text-6xl text-red-500 md:text-7xl">
      {{
        formatter.format(
          store.hourly *
            (store.timerHours +
              store.timerMinutes / 60 +
              store.timerSeconds / 3600)
        )
      }}
    </h1>
    <h1 v-else class="text-6xl text-red-500 md:text-7xl">
      {{ formatter.format(store.hourly * store.time) }}
    </h1>
  </div>
</template>
