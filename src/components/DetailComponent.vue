<template>
  <div class="flex flex-col md:flex-row h-screen bg-gray-100">
    <!-- Sidebar -->
    <div class="md:w-64 w-full md:h-auto text-white sidebar">

      <div class="p-4 md:flex md:flex-col md:justify-start">
        <ul class="space-y-2">
          <li v-for="item in sidebarItems" :key="item.id" @click="setActiveItem(item)"
            :class="{ 'bg-blue-600': item.id === activeItem?.id }"
            class="flex items-center p-2 rounded-md cursor-pointer hover:bg-gray-700 transition-colors duration-200">
            <span class="mr-2">→</span>
            {{ item.title }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Main Content -->
    <div class="flex-1 p-8 overflow-auto md:ml-16">
      <h2 class="text-3xl font-bold mb-6 text-gray-800">{{ activeItem?.title }}</h2>
      <MasterIR :activeItemId="activeItem?.id" v-if="queryParam === 'masterIR'" />
      <MasterBM :activeItemId="activeItem?.id" v-if="queryParam === 'masterBM'" />
      <BachelorIT :activeItemId="activeItem?.id" v-if="queryParam === 'bachelorIT'" />
      <BachelorAPR :activeItemId="activeItem?.id" v-if="queryParam === 'bachelorAPR'" />
      <BachelorBME :activeItemId="activeItem?.id" v-if="queryParam === 'bachelorBME'" />
      <BachelorDA :activeItemId="activeItem?.id" v-if="queryParam === 'bachelorDA'" />
      <BachelorHRM :activeItemId="activeItem?.id" v-if="queryParam === 'bachelorHRM'" />
      <BachelorIB :activeItemId="activeItem?.id" v-if="queryParam === 'bachelorIB'" />
      <BachelorMS :activeItemId="activeItem?.id" v-if="queryParam === 'bachelorMS'" />
    </div>
  </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import MasterIR from './Couses/MasterIR.vue'
import MasterBM from './Couses/MasterBM.vue'
import BachelorIT from './Couses/BachelorIT.vue'
import BachelorAPR from './Couses/BachelorAPR.vue';
import BachelorBME from './Couses/BachelorBME.vue';
import BachelorDA from './Couses/BachelorDA.vue';
import BachelorHRM from './Couses/BachelorHRM.vue';
import BachelorIB from './Couses/BachelorIB.vue';
import BachelorMS from './Couses/BachelorMS.vue';

import { useRoute } from 'vue-router';

const sidebarItems = ref([
  { id: 1, title: 'About the Course', content: '' },
  { id: 2, title: 'What you will study', content: '' },
  { id: 3, title: 'Entry Requirements', content: '' },
  { id: 4, title: 'Fees & Funding', content: '.' },
  { id: 5, title: 'Carees & Employability', content: '.' },
  { id: 6, title: 'How To Apply', content: '.' },
]);

const route = useRoute()
const activeItem = ref(null);

const queryParam = ref(route.query.programme)
const setActiveItem = (item) => {
  activeItem.value = item;
};

onMounted(() => {
  // Set the first item as active by default
  setActiveItem(sidebarItems.value[0]);
});
</script>

<style scoped>
/* Add any additional styles here if needed */
.sidebar {
  background-color: #761E67;
}
</style>