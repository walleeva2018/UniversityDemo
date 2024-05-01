<template>
  <div>
    <img src="../assets/phd.jpg" style="max-height: 500px; width: 100%" />
    <div class="breadcrumbs">
      <!-- Add your breadcrumb content here -->
      <a href="/"> HOME / </a>
      <router-link :to="`/${pathSegments[0]}`">{{ pathSegments[0].toLocaleUpperCase() }} </router-link>
    </div>
    <div class="container">
      <!-- Section 1 -->
      <PhdSection1 />
      <!-- Section 2 -->
      <PhdSection2 />
    </div>
    <div class="box">
      <LandingPageCard />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import PhdSection1 from '../components/PhdComponents/PhdSection1.vue';
import PhdSection2 from '../components/PhdComponents/PhdSection2.vue';
import LandingPageCard from '../components/LandingPageCard.vue';
const route = useRoute();
const routePath = route.path; // Get the current route path
const pathSegments = routePath.split('/').filter((segment) => segment !== ''); // Split the path by '/' and remove empty segments
</script>

<style scoped>
.box {
  background-color: #eeeeee;
  display: flex;
}
.container {
  display: flex;
  justify-content: center; /* Center horizontally */
  flex-wrap: wrap; /* Allow flex items to wrap */
}

.section {
  width: calc(70% - 40px); /* Adjust width for responsiveness */
  margin-left: 250px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center; /* Center-align text */
}

@media (max-width: 768px) {
  .section {
    width: calc(100% - 40px); /* Full width on small screens */
    margin-left: 4px;
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

.section h2 {
  font-size: 24px; /* Adjust heading font size */
  color: #761e67; /* Set heading color */
}

.section p {
  font-size: 16px; /* Adjust paragraph font size */
  margin-bottom: 1rem; /* Adjust bottom margin for paragraphs */
}
</style>
