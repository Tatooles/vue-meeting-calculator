<script setup lang="ts">
import ParticipantList from "./ParticipantList.vue";
import Time from "./Time.vue";
import Cost from "./Cost.vue";
</script>

<template>
  <main class="p-5">
    <!-- List of meeting participants -->
    <ParticipantList />
    <!-- Time value, wheter it's using the stopwatch or direct entry -->
    <Time />
    <!-- Final cost value -->
    <Cost />
  </main>
</template>
