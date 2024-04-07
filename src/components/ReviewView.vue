<template>
  <div class="flex items-center">
    <div class="relative">
      <img class="hero-profile-img" src="../assets/beauty.jpg" alt="" />
      <div class="quotation-icon"><i class="pi pi-quote p-text-secondary"></i></div>
    </div>
    <div class="description ml-5">
      <div class="comment">
        <p>
          I needed a year to actually adjust. I didn’t want to throw myself right into the course in the first
          <br />
          instance. I felt, because it was a different country, I would need time to figure myself out before
          <br />
          I finally started my degree.
        </p>
      </div>
      <div class="designation">
        <p>Sumeya from Kenya</p>
        <p>Studying International Foundation Year in Humanities, Law and Social Science</p>
        <p>Aiming to progress to LLB (Hons) Law</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  align-items: center;
}

.hero-profile-img {
  width: 200px; /* Adjust the width as needed */
  height: auto;
}

.description {
  margin-left: 20px; /* Adjust the margin as needed */
}

.quotation-icon {
  position: absolute;
  top: -20px;
  left: -20px;
  font-size: 24px;
}

.comment {
  background-color: #f0f0f0; /* Add background color to the comment */
  padding: 10px; /* Add padding to the comment */
  border-radius: 5px; /* Add border radius to the comment */
}

.designation {
  margin-top: 10px; /* Add margin between comment and designation */
}
</style>
