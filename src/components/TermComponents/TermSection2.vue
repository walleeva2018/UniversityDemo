<template>
  <div class="section2">
    <div class="buttons-container">
      <button class="button" style="background-color: #008dce" @click="router.push('apply')">
        Apply Now
      </button>
      <button class="button" style="background-color: #761e67" @click="router.push('ask')">
        Ask A Question
      </button>
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
  padding: 20px;
  border: 1px solid #000;
  border-radius: 5px;
  text-align: center;
}

.pass-rate-title {
  font-size: 24px;
  color: #761e67;
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
