
<script setup lang="ts">
import ParticipantList from '../components/ParticipantList.vue';
import Timer from '../components/Timer.vue'

</script>

<template>
  <main class="p-5">
    <!-- Tab navigation -->
    <ParticipantList />
    <Timer />
    <!-- Add another component for data entry, also need the total cost in there somewhere -->
  </main>
</template>