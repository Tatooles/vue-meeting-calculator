<script setup lang="ts">
import { ref } from 'vue';

const roles = ref([
  { name: 'Software Engineer', salary: '100,000', count: 1 }
]);

const modalOpen = ref(false);

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
  </ul>
  <button class="mb-2" @click="modalOpen = true">+ Add Role</button>
  <teleport to="body">
    <div v-if="modalOpen"
      class="absolute left-1/2 translate-x-[-50%] top-32 bg-white p-5 rounded-md z-10 flex flex-col items-center">
      <!-- TODO: Could pass all of this into a reusable modal component with 'slots' -->
      <!-- TODO: Would be nice to have an X button in the top right -->
      <h1 class="text-2xl mb-2">Add a New Role</h1>
      <input type="text" placeholder="Role Name" class="mb-2 p-1 border-2">
      <input type="text" placeholder="Role Salary" class="mb-2 p-1 border-2">
      <div>
        <button @click="modalOpen = false" class="p-2 border-black rounded-lg">Cancel</button>
        <button @click="modalOpen = false"
          class="p-2 border-black bg-blue-600 rounded-lg text-white ml-4">Submit</button>
      </div>
    </div>
    <div v-if="modalOpen" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70"></div>
  </teleport>
</template>