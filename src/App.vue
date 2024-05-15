<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/PageHeader.vue';
import Footer from './components/PageFooter.vue';
</script>

<template>
  <main>
    <Header class="fixed-header" />
    <div class="flex flex-col flex-grow">
      <router-view class="flex-grow" />
    </div>
    <Footer />
  </main>
</template>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
main {
  padding-top: 60px; /* Adjust this value based on the height of your header */
}
</style>
