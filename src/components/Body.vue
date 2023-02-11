<script setup lang="ts">
import ParticipantList from "./ParticipantList.vue";
import Time from "./Time.vue";
import Cost from "./Cost.vue";
</script>

<template>
  <main class="px-5 md:flex md:flex-row md:justify-between md:px-0 lg:px-5">
    <!-- List of meeting participants -->
    <div class="md:mr-4 md:w-1/2 lg:w-2/5">
      <ParticipantList />
    </div>
    <!-- Time value, wheter it's using the stopwatch or direct entry -->
    <div class="md:flex md:w-1/2 md:flex-col lg:w-3/5">
      <Time />
      <!-- Final cost value -->
      <Cost />
    </div>
  </main>
</template>
