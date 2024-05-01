<template>
  <div class="section2">
    <div class="buttons-container">
      <button class="button" style="background-color: #008dce">Apply Now</button>
      <button class="button" style="background-color: #761e67">Ask A Question</button>
    </div>
    <div class="pass-rate-box mt-8">
      <h2 class="pass-rate-title">97% Pass Rate</h2>
    </div>
    <div class="pass-rate-box">
      <h2 class="pass-rate-title">4.7 out of 5 Rated By Students</h2>
    </div>
  </div>
</template>
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
