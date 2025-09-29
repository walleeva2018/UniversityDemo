<template>
  <div class="cards-container">
    <Card class="card-item" @click="gotoThere('virtual')">
      <template #header>
        <img alt="user header" src="../assets/male_wide.jpg" style="width: 100%" />
      </template>
      <template #title>See Our Student Cultures</template>
      <template #subtitle
        >Prieston University is Full of Diversity. Here we host several competitive , cultural and sports
        events. Join us to explore all of them</template
      >

      <template #footer>
        <div class="flex justify-end items-center">
          <i class="pi pi-arrow-right p-button-icon p-button" style="cursor: pointer"></i>
        </div>
      </template>
    </Card>

    <Card class="card-item" @click="gotoThere('masters')">
      <template #header>
        <img alt="user header" src="../assets//master.jpg" style="width: 100%" />
      </template>
      <template #title>Pre-Masters</template>
      <template #subtitle
        >Build upon the skills of your existing undergraduate degree in order to study a postgraduate degree
        in the UK. Our programme helps you bridge the gap between your studies..</template
      >

      <template #footer>
        <div class="flex justify-end items-center">
          <i class="pi pi-arrow-right p-button-icon p-button" style="cursor: pointer"></i>
        </div>
      </template>
    </Card>

    <Card class="card-item" @click="gotoThere('entry')">
      <template #header>
        <img alt="user header" src="../assets/black_wide.jpg" style="width: 100%" />
      </template>
      <template #title>Entry preparation</template>
      <template #subtitle
        >Our Online Entry Preparation courses develop your skills in order for you to succeed on both your
        chosen pathway programme and your university degree.</template
      >

      <template #footer>
        <div class="flex justify-end items-center">
          <i class="pi pi-arrow-right p-button-icon p-button" style="cursor: pointer"></i>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import { useRouter } from 'vue-router';

function gotoThere(dest: string) {
  router.push(dest);
}
const router = useRouter();
</script>

<style scoped>
/* Add gap between cards and align them in the middle */
.cards-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  margin: 2rem auto;
  padding: 0 1rem;
  max-width: 1400px;
}

.card-item {
  flex: 1;
  min-width: 0;
  max-width: 25rem;
}

/* Add hover effect */
.p-card:hover {
  box-shadow: 0 0 10px rgba(16, 6, 155, 0.5);
}

/* Add arrow icon style */
.p-button-icon {
  color: inherit;
  border-radius: 50%;
  background-color: transparent;
  padding: 8px;
}
.p-button-icon:hover {
  background-color: rgb(33, 112, 231);
  color: white;
}

/* Media query for small screens */
@media (max-width: 1200px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
  }

  .card-item {
    width: 100%;
    max-width: 500px;
  }
}
</style>
