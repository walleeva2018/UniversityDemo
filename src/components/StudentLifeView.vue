<template>
  <img src="../assets/party.jpg" style="max-height: 500px; width: 1900px" />
  <div class="breadcrumbs">
    <!-- Add your breadcrumb content here -->
    <a href="/"> HOME / </a>
    <router-link :to="`/${pathSegments[0]}`">{{ pathSegments[0].toLocaleUpperCase() }} </router-link>
  </div>
  <div class="container">
    <!-- Section 1 -->
    <StudentSection1 />
    <!-- Section 2 -->
    <StudentSection2 />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import StudentSection1 from '../components/StudentlifeComponents/StudentSection1.vue';
import StudentSection2 from '../components/StudentlifeComponents/StudentSection2.vue';
const route = useRoute();
const routePath = route.path; // Get the current route path
const pathSegments = routePath.split('/').filter((segment) => segment !== ''); // Split the path by '/' and remove empty segments
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  flex-wrap: wrap; /* Allow flex items to wrap */
}

.section1 {
  width: calc(70% - 40px); /* Adjust width for responsiveness */
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .section1,
  .section2 {
    width: calc(100% - 40px); /* Full width on small screens */
  }
}

.breadcrumbs {
  height: 50px;
  background-color: #761e67;
  text-align: left;
  padding-left: 20px;
  font-size: small;
  line-height: 50px;
}

.breadcrumbs a,
.breadcrumbs router-link {
  color: white;
  text-decoration: none; /* Remove underline from links */
}
</style>
