<template>
  <Card style="width: 26rem; overflow: hidden" class="card">
    <template #title>A world top 100 university</template>
    <template #subtitle>QS World University Rankings 2024</template>
  </Card>
  <Card style="width: 26rem; overflow: hidden" class="bard">
    <template #title>Ranked 7th in the UK</template>
    <template #subtitle>The Times and The Sunday Times Good University Guide 2024</template>
  </Card>
  <Card style="width: 26rem; overflow: hidden" class="tard">
    <template #title>Over 90% of subjects ranked in the UK top 10</template>
    <template #subtitle>Complete University Guide 2023</template>
  </Card>
</template>
<script setup lang="ts">
import Card from 'primevue/card';
</script>
<style scoped>
.card {
  /* Center the card */
  background-color: #ebe6b0; /* Default background color */
}

.bard {
  background-color: #dcdcdc; /* Different background color for the second card */
}

.tard {
  background-color: #cdb5cb; /* Different background color for the third card */
}
@media (max-width: 1200px) {
  .card {
    width: 100%;
  }
  .bard {
    width: 100%;
  }
  .tard {
    width: 100%;
  }
}
@media (min-width: 1200px) {
  .card {
    margin-left: 18rem;
  }
}
</style>
