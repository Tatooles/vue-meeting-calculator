<script setup lang="ts">
import { ref } from 'vue';

const roles = ref([
  { name: 'Software Engineer', salary: 100000, count: 1 }
]);

const modalOpen = ref(false);

const newRoleName = ref('');
const newRoleSalary = ref('');
const salaryValidationError = ref(false);

roles.value.push({ name: 'Manager', salary: 120000, count: 1 });

const increaseCount = (role: any) => {
  const found = roles.value.find(element => element === role);
  if (found) found.count++;
}

const decreaseCount = (role: any) => {
  const found = roles.value.find(element => element === role);
  if (found) found.count--;
  // Remove role if none left (TODO: Would be it's own event if user has the option for text entry)
  if (found?.count === 0) {
    roles.value = roles.value.filter(element => element !== role);
  }
}

const closeModal = (save: boolean) => {
  if (save) {
    if (newRoleName.value.length === 0 || newRoleSalary.value.length === 0) {
      // TODO: Could add more validation here
      return;
    }
    // Save the data
    roles.value.push({ name: newRoleName.value, salary: parseInt(newRoleSalary.value), count: 1 });
  }
  modalOpen.value = false;
  newRoleName.value = '';
  newRoleSalary.value = '';
  // Clear the fields
}

const validateSalary = () => {
  if (newRoleSalary.value.length !== 0 && isNaN(parseInt(newRoleSalary.value))) {
    salaryValidationError.value = true;
  } else {
    salaryValidationError.value = false;
  }
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
          ${{ new Intl.NumberFormat().format(role.salary) }}
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
      <form action="">
        <input v-model="newRoleName" type="text" placeholder="Role Name" class="mb-2 p-1 border-2">
        <input v-model="newRoleSalary" @input="validateSalary" type="text" placeholder="Role Salary"
          class="p-1 border-2">
        <p v-if="salaryValidationError" class="text-sm text-red-500">Please enter a valid number</p>
      </form>
      <div class="mt-2">
        <button @click="closeModal(false)" class="p-2 border-black rounded-lg">Cancel</button>
        <button @click="closeModal(true)"
          class="p-2 border-black bg-blue-600 rounded-lg text-white ml-4">Submit</button>
      </div>
    </div>
    <div v-if="modalOpen" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-70"></div>
  </teleport>
</template>