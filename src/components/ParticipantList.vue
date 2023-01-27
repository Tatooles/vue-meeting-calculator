<script setup lang="ts">
import { ref } from 'vue';

const participants = ref([
  { role: 'Software Engineer', salary: '100,000' }
]);

participants.value.push({ role: 'Manager', salary: '120,000' });

</script>

<template>
  <ul>
    <template v-for="participant in participants">
      <li>
        {{ participant.role }}, ${{ participant.salary }}
      </li>

    </template>
    <button>+ Add User</button>
  </ul>
</template>