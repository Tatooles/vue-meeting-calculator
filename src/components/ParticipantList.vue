<script setup lang="ts">
import { ref } from 'vue';

const roles = ref([
  { name: 'Software Engineer', salary: '100,000', count: 1 }
]);

roles.value.push({ name: 'Manager', salary: '120,000', count: 1 });

const increaseCount = (role: any) => {
  console.log(`Increasing count of ${role.name}`);
}

const decreaseCount = (role: any) => {
  console.log(`Decreasing count of ${role.name}`);
}

</script>

<template>
  <ul>
    <template v-for="role in roles">
      <!-- TODO: Also need a way to remove a role from the list -->
      <li class="border-2 border-white mb-2 flex justify-between p-2">
        <div>
          {{ role.name }}
        </div>
        <div>
          ${{ role.salary }}
        </div>
        <div>
          <button @click="decreaseCount(role)">-</button>
          {{ role.count }}
          <!-- TODO: Also want to be able to directly enter a value for this -->
          <button @click="increaseCount(role)">+</button>
        </div>
      </li>

    </template>
    <button class="mb-2">+ Add Role</button>
  </ul>
</template>