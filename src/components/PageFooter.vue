<template>
  <footer style="background-color: #761e67" class="text-white py-4">
    <!-- New box with buttons and text -->
    <div style="background-color: #006388" class="py-2 text-center mb-5" v-if="!route.fullPath.includes('/apply')">
      <h2>READY TO JOIN US?</h2>
      <p class="text-gray-300 text-sm mt-2 mb-2">
        Our student enrolment advisors are here to help with your application and answer any questions you
        have about studying with us.
      </p>
      <button @click="gotoApplyForm"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold right-item">
        Apply Now
      </button>

      <button @click="gotoAskQuestion"
        class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-bold right-item ml-5">
        Ask A question
      </button>
    </div>

    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="text-center md:text-left mb-4 md:mb-0">
        <p class="font-bold">
          <span class="text-gray-400 hover:text-white cursor-pointer" @click="router.push('contact')">Contact Us</span>
        </p>
      </div>
      <div class="text-center md:text-right">
        <p>
          <span class="text-gray-400 hover:text-white cursor-pointer" @click="router.push('virtual')">Events</span>
          <span class="text-gray-400"> | </span>
          <span class="text-gray-400 hover:text-white cursor-pointer" @click="router.push('masters')">Masters</span>
          <span class="text-gray-400"> | </span>
          <span class="text-gray-400 hover:text-white cursor-pointer" @click="router.push('entry')">Entry </span>
          <span class="text-gray-400"> | </span>
          <span class="text-gray-400 hover:text-white cursor-pointer" @click="router.push('fees')">Fees </span>
          <span class="text-gray-400"> | </span>
          <span class="text-gray-400 hover:text-white cursor-pointer" @click="router.push('apply')">Apply </span>
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();
function gotoAskQuestion() {
  router.push('ask');
}
function gotoApplyForm() {
  router.push('apply');
}
</script>
