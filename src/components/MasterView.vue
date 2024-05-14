<template>
  <div>
    <img src="../assets/flag.jpg" style="max-height: 500px; width: 100%" />
    <div class="breadcrumbs">
      <!-- Add your breadcrumb content here -->
      <a href="/"> HOME / </a>
      <router-link :to="`/${pathSegments[0]}`">{{ pathSegments[0].toLocaleUpperCase() }} </router-link>
    </div>
    <div class="container">
      <!-- Section 1 -->
      <MasterView1 />
      <!-- Section 2 -->
      <MasterView2 />
    </div>
    <div class="box">
      <LandingPageCard />
    </div>
    <div style="background-color: #eeeeee">
      <div class="section">
        <h2>What to Expect</h2>
        <p>
          This is a two- or three-term programme comprising core modules and designated modules that have been
          tailored to suit your chosen Masters degree. All students will study our Academic English Skills
          module, designed to support you with your reading, writing, listening and speaking. You will also
          study modules designed to improve your critical writing, quantitative skills and research methods.
        </p>
        <h2>Assessing your Progress</h2>
        <p>
          You will be assessed throughout this programme so you know your studies are on track. Assessments
          will include exams, coursework, research and presentations. Your academic personal tutor will
          support you throughout your studies to keep your learning on track.
        </p>
        <h2>Focus on Your Career</h2>
        <p>
          We recognise that, as a Pre-Masters student, you are likely to already have a good idea of your
          career direction. You may be looking to change your career path or to progress in the field you are
          in. Wherever you are in your career journey, we will support your goals through our career
          development activities. This will help you write a personal development plan and identify key
          strengths you want to focus on.
        </p>
        <h2>Improve Your English Language Skills</h2>
        <p>
          We offer a specialist English language preparation course if you need extra time to boost your
          skills before starting one of our academic programmes. Find out more about our English language
          courses if you do not meet the entry requirements for our pathway programmes.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import MasterView1 from '../components/MasterComponents/MasterSection1.vue';
import MasterView2 from '../components/MasterComponents/MasterSection2.vue';
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
    width: 100%;
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
