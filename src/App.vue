<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from './components/PageHeader.vue';
import Footer from './components/PageFooter.vue';
</script>

<template>
  <main>
    <Header />
    <div class="flex flex-col flex-grow">
      <router-view class="flex-grow" />
    </div>
    <Footer />
  </main>
</template>
