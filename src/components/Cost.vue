<script setup lang="ts">
import { ref } from "vue";
import { store } from "../store.js";

const cost = ref(1000);
</script>

<template>
  <div class="mt-6 mb-4 flex flex-col align-middle">
    <h3 class="mb-4 text-2xl">Total Cost</h3>
    <h1 v-if="store.useTimer" class="text-6xl text-red-500">
      ${{
        new Intl.NumberFormat().format(
          store.hourly *
            (store.timerHours +
              store.timerMinutes / 60 +
              store.timerSeconds / 3600)
        )
      }}
    </h1>
    <h1 v-else class="text-6xl text-red-500">
      ${{ new Intl.NumberFormat().format(store.hourly * store.time) }}
    </h1>
  </div>
</template>
