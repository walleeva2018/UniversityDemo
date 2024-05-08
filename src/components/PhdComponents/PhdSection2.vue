<template>
  <div class="section2">
    <!-- Call to Action Buttons -->
    <div class="buttons-container">
      <button class="button apply-button" @click="router.push('apply')">Apply Now</button>
      <button class="button question-button" @click="router.push('ask')">Ask A Question</button>
    </div>

    <!-- Most Demanding Course Section -->
    <div class="pass-rate-box mt-8">
      <h2 class="pass-rate-title">Most Demanding Course</h2>
    </div>

    <!-- Program Highlights Section -->
    <div class="program-highlights mt-8">
      <h2 class="highlight-title">Program Highlights</h2>
      <ul class="highlight-list">
        <li>Cutting-Edge Research: Explore innovative ideas and contribute to advancing knowledge.</li>
        <li>Interdisciplinary Collaboration: Work across departments for rich intellectual experiences.</li>
        <li>Mentorship and Support: Receive personalized guidance for academic and professional growth.</li>
        <li>Professional Development: Access workshops and events to enhance essential skills.</li>
        <li>Global Impact: Make significant contributions to fields and communities worldwide.</li>
      </ul>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<style scoped>
.section2 {
  width: calc(100% - 40px);
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.pass-rate-box {
  width: 100%;
  margin-bottom: 20px;
  background-color: #761e67;
  padding: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
}

.pass-rate-title {
  font-size: 24px;
  color: #ffffff;
}

.buttons-container {
  display: flex;
  flex-direction: column;
}

.button {
  padding: 10px;
  margin-top: 10px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

.button:first-child {
  background-color: #008dce;
}

.button:last-child {
  background-color: #761e67;
}

.button:hover {
  background-color: #5e1652;
}

@media (min-width: 768px) {
  .section2 {
    width: calc(30% - 40px);
  }

  .pass-rate-box {
    width: 200px;
    margin-left: 80px;
  }
}
</style>
