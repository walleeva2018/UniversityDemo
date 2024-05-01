<template>
  <footer style="background-color: #761e67" class="text-white py-4">
    <!-- New box with buttons and text -->
    <div
      style="background-color: #006388"
      class="py-2 text-center mb-5"
      v-if="!route.fullPath.includes('/apply')"
    >
      <h2>READY TO JOIN US?</h2>
      <p class="text-gray-300 text-sm mt-2 mb-2">
        Our student enrolment advisors are here to help with your application and answer any questions you
        have about studying with us.
      </p>
      <button
        @click="gotoApplyForm"
        class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold right-item"
      >
        Apply Now
      </button>

      <button
        @click="gotoAskQuestion"
        class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-bold right-item ml-5"
      >
        Ask A question
      </button>
    </div>

    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div class="text-center md:text-left mb-4 md:mb-0">
        <p class="font-bold">Connect with Me:</p>
        <div class="flex justify-center md:justify-start mt-2">
          <a href="#" class="text-gray-400 hover:text-white mx-2">
            <i class="pi pi-facebook"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white mx-2">
            <i class="pi pi-twitter"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white mx-2">
            <i class="pi pi-instagram"></i>
          </a>
        </div>
      </div>
      <div class="text-center md:text-right">
        <p>
          <a href="#" class="text-gray-400 hover:text-white">Prospectus</a>
          <span class="text-gray-400"> | </span>
          <a href="#" class="text-gray-400 hover:text-white">Blog</a>
          <span class="text-gray-400"> | </span>
          <a href="#" class="text-gray-400 hover:text-white">Contact Us</a>
          <span class="text-gray-400"> | </span>
          <a href="#" class="text-gray-400 hover:text-white">Terms & Condition </a>
          <span class="text-gray-400"> | </span>
          <a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a>
        </p>
      </div>
    </div>
  </footer>
</template>
<script setup>
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
