<template>
  <div class="info-cards-container">
    <Card class="card info-card-item">
      <template #title>A world top 100 university</template>
      <template #subtitle>QS World University Rankings 2024</template>
    </Card>
    <Card class="bard info-card-item">
      <template #title>Ranked 7th in the UK</template>
      <template #subtitle>The Times and The Sunday Times Good University Guide 2024</template>
    </Card>
    <Card class="tard info-card-item">
      <template #title>Over 90% of subjects ranked in the UK top 10</template>
      <template #subtitle>Complete University Guide 2023</template>
    </Card>
  </div>
</template>
<script setup lang="ts">
import Card from 'primevue/card';
</script>
<style scoped>
.info-cards-container {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: stretch;
  margin: 2rem auto;
  padding: 0 1rem;
  max-width: 1400px;
}

.info-card-item {
  flex: 1;
  min-width: 0;
  max-width: 26rem;
  overflow: hidden;
}

.card {
  background-color: #ebe6b0;
}

.bard {
  background-color: #dcdcdc;
}

.tard {
  background-color: #cdb5cb;
}

@media (max-width: 1200px) {
  .info-cards-container {
    flex-direction: column;
    align-items: center;
  }

  .info-card-item {
    width: 100%;
    max-width: 500px;
  }
}
</style>
