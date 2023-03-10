<script setup lang="ts">
import { onMounted, ref } from "vue";
import { store } from "../store.js";
import { onClickOutside } from "@vueuse/core";

const roles = ref([{ name: "Software Engineer", salary: 100000, count: 1 }]);

const modalOpen = ref(false);
const modal = ref(null);

onClickOutside(modal, () => closeModal(false));

const newRoleName = ref("");
const newRoleSalary = ref("");
const salaryValidationError = ref(false);

roles.value.push({ name: "Manager", salary: 120000, count: 1 });

const increaseCount = (role: any) => {
  const found = roles.value.find((element) => element === role);
  if (found) {
    found.count++;
    updateStore();
  }
};

const decreaseCount = (role: any) => {
  const found = roles.value.find((element) => element === role);
  if (found) found.count--;
  // Remove role if none left (TODO: Would be it's own event if user has the option for text entry)
  if (found?.count === 0) {
    roles.value = roles.value.filter((element) => element !== role);
  }
  updateStore();
};

const closeModal = (save: boolean) => {
  if (save) {
    if (newRoleName.value.length === 0 || newRoleSalary.value.length === 0) {
      return;
    }
    // Save the data
    roles.value.push({
      name: newRoleName.value,
      salary: parseInt(newRoleSalary.value),
      count: 1,
    });
    updateStore();
  }
  // Clear the fields
  modalOpen.value = false;
  newRoleName.value = "";
  newRoleSalary.value = "";
};

const validateSalary = () => {
  if (
    newRoleSalary.value.length !== 0 &&
    isNaN(parseInt(newRoleSalary.value))
  ) {
    salaryValidationError.value = true;
  } else {
    salaryValidationError.value = false;
  }
};

const updateStore = () => {
  let totalHourly = 0;
  roles.value.forEach((role) => {
    // Assuming 52 weeks per year at 40 hours per week (52 * 40 = 2080)
    totalHourly += (role.salary * role.count) / 2080;
  });
  store.setHourly(totalHourly);
};

onMounted(() => {
  updateStore();
});
</script>

<template>
  <h1 class="mb-4 text-lg underline">Participants</h1>
  <ul>
    <template v-for="role in roles">
      <li class="mb-2 flex border-2 border-black p-2 dark:border-white">
        <div
          class="w-3/5 overflow-hidden overflow-ellipsis whitespace-nowrap text-start"
        >
          {{ role.name }}
        </div>
        <div class="w-2/5 text-end">
          ${{ new Intl.NumberFormat().format(role.salary) }}
        </div>
        <div class="w-1/5 text-end">
          <button @click="decreaseCount(role)">-</button>
          {{ role.count }}
          <!-- TODO: Also want to be able to directly enter a value for this -->
          <button @click="increaseCount(role)">+</button>
        </div>
      </li>
    </template>
  </ul>
  <button class="mb-2" @click="modalOpen = true">+ Add Role</button>
  <teleport to="#modal">
    <transition name="modal">
      <div
        v-if="modalOpen"
        class="fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-70"
      >
        <div
          ref="modal"
          class="absolute left-1/2 top-32 z-10 flex translate-x-[-50%] flex-col items-center rounded-md bg-white p-5"
        >
          <div class="absolute mr-8 mb-5 w-full text-end">
            <button
              @click="closeModal(false)"
              class="rounded-md border-2 p-[2px] shadow-sm hover:bg-neutral-200"
            >
              X
            </button>
          </div>
          <h1 class="mb-2 mt-4 text-2xl">Add a New Role</h1>
          <form class="flex flex-col">
            <input
              v-model="newRoleName"
              type="text"
              placeholder="Role Name"
              class="mb-2 border-2 p-1"
            />
            <input
              v-model="newRoleSalary"
              @input="validateSalary"
              type="text"
              placeholder="Role Salary"
              class="border-2 p-1"
            />
            <p v-if="salaryValidationError" class="text-sm text-red-500">
              Please enter a valid number
            </p>
          </form>
          <div class="mt-2">
            <button
              @click="closeModal(false)"
              class="rounded-lg border-black p-2"
            >
              Cancel
            </button>
            <button
              @click="closeModal(true)"
              class="ml-4 rounded-lg border-black bg-blue-600 p-2 text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>
<style>
.modal-enter-active,
.modal-leave-active {
  transition: all 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(1.1);
}
</style>
