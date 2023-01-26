<script setup lang="ts">
import ParticipantList from './ParticipantList.vue';
import Time from './Time.vue'

</script>

<template>
  <main class="p-5">
    <!-- Tab navigation -->
    <ParticipantList />
    <Time />
    <!-- Add another component for data entry, also need the total cost in there somewhere -->
  </main>
</template>