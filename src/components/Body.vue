<script setup lang="ts">
import ParticipantList from "./ParticipantList.vue";
import Time from "./Time.vue";
import Cost from "./Cost.vue";
</script>

<template>
  <main class="p-5 md:flex md:flex-row md:justify-between md:p-0">
    <!-- List of meeting participants -->
    <div class="md:mr-4 md:w-1/2">
      <ParticipantList />
    </div>
    <!-- Time value, wheter it's using the stopwatch or direct entry -->
    <div class="md:flex md:w-1/2 md:flex-col">
      <Time />
      <!-- Final cost value -->
      <Cost />
    </div>
  </main>
</template>
