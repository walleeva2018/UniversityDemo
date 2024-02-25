<template>
  <div class="bg-video-wrap">
    <video src="../assets/rain.mp4" loop muted autoplay></video>
    <div class="overlay"></div>
    <div class="over-video">
      <div class="carousel">
        <div
          v-for="(item, index) in carouselItems"
          :key="index"
          class="carousel-item"
          v-bind:class="{ active: index === activeIndex }"
        >
          <h1 style="font-size: 28px; color: #761e67">
            {{ item.content }}
          </h1>
          <button class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold right-item">
            {{ item.buttonText }}
          </button>
        </div>
        <div class="dots">
          <span
            v-for="(item, index) in carouselItems"
            :key="index"
            class="dot"
            v-bind:class="{ active: index === activeIndex }"
            @click="goToSlide(index)"
          ></span>
        </div>
        <button class="prev" @click="prevSlide">&#10094;</button>
        <button class="next" @click="nextSlide">&#10095;</button>
      </div>
    </div>
  </div>
  <div class="flex">
    <Card style="width: 25rem; overflow: hidden" class="card">
      <template #title>A world top 100 university</template>
      <template #subtitle>QS World University Rankings 2024</template>
    </Card>
    <Card style="width: 25rem; overflow: hidden" class="card">
      <template #title>Ranked 7th in the UK</template>
      <template #subtitle>The Times and The Sunday Times Good University Guide 2024</template>
    </Card>
    <Card style="width: 25rem; overflow: hidden" class="card">
      <template #title>Over 90% of subjects ranked in the UK top 10</template>
      <template #subtitle>Complete University Guide 2023</template>
    </Card>
  </div>
  <div class="box">
    <div class="first hero">
      <img class="hero-profile-img" src="../assets/cool.jpeg" alt="" />
      <div class="hero-description-bk"></div>
      <div class="hero-logo">
        <img src="../assets/sust.png" style="background: black" alt="" />
      </div>
      <div class="hero-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="hero-date">
        <p>20.02.2019</p>
      </div>
      <div class="hero-btn">
        <a href="#">Learn More</a>
      </div>
    </div>
    <div class="first hero">
      <img class="hero-profile-img" src="../assets/download.jpeg" alt="" />
      <div class="hero-description-bk"></div>
      <div class="hero-logo">
        <img src="../assets/sust.png" style="background: black" alt="" />
      </div>
      <div class="hero-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="hero-date">
        <p>20.02.2019</p>
      </div>
      <div class="hero-btn">
        <a href="#">Learn More</a>
      </div>
    </div>
    <div class="first hero">
      <img class="hero-profile-img" src="../assets/download.jpeg" alt="" />
      <div class="hero-description-bk"></div>
      <div class="hero-logo">
        <img src="../assets/sust.png" style="background: black" alt="" />
      </div>
      <div class="hero-description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="hero-date">
        <p>20.02.2019</p>
      </div>
      <div class="hero-btn">
        <a href="#">Learn More</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Card from 'primevue/card';
const carouselItems = ref([
  { content: 'CONFIRM YOUR PLACE NOW TO PAY 2023/24 TUITION FEES', buttonText: 'Find Out More' },
  { content: 'PREPARE FOR SUCCESS WITH OUR FREE ONLINE PREPARATION COURSE', buttonText: 'More Details' },
  { content: 'YOUR PATHWAY TO A TOP RANKING UNIVERSITY', buttonText: 'Apply Now' }
]);

let activeIndex = ref(0);

const nextSlide = () => {
  activeIndex.value = (activeIndex.value + 1) % carouselItems.value.length;
};

const prevSlide = () => {
  activeIndex.value = (activeIndex.value - 1 + carouselItems.value.length) % carouselItems.value.length;
};
const goToSlide = (index) => {
  activeIndex.value = index;
};
</script>
<style scoped>
.bg-video-wrap {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 60vh;
}

video {
  min-width: 100%;
  min-height: 100vh;
}

.overlay {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-size: 3px 3px;
}

.over-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel {
  position: relative;
  width: 80%; /* Adjust carousel width */
}

.carousel-item {
  display: none;
  text-align: center;
}

.carousel-item.active {
  display: block;
}

.carousel img {
  max-width: 100%;
  height: auto;
}
.dots {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.dot {
  width: 20px;
  height: 20px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #333;
}
.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  color: black;
  font-size: 24px;
  cursor: pointer;
  padding: 10px;
  z-index: 1;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
.flex {
  display: flex;
}

.card {
  margin-left: 140px; /* Center the card */
  background-color: #ebe6b0; /* Default background color */
}

.card:nth-child(2) {
  background-color: #dcdcdc; /* Different background color for the second card */
}

.card:last-child {
  background-color: #cdb5cb; /* Different background color for the third card */
}

.button {
  background-color: #007bff; /* Default button color */
  color: white;
}

.button:hover {
  background-color: #0056b3; /* Button color on hover */
}
.box {
  background-color: #eeeeee;
  display: flex;
}
/* BEGIN CARD DESIGN */
.hero {
  display: flex;
  position: relative;
  width: 400px;
  min-width: 400px;
  height: 400px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.3);
  margin-left: 140px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.hero-profile-img {
  height: 70%;
}

.hero-description-bk {
  background-image: linear-gradient(0deg, #3f5efb, #fc466b);
  border-radius: 30px;
  position: absolute;
  top: 55%;
  left: -5px;
  height: 65%;
  width: 108%;
  transform: skew(19deg, -9deg);
}

.hero-logo {
  height: 80px;
  width: 80px;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  bottom: 30%;
  left: 30px;
  overflow: hidden;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.7);
}

.hero-logo img {
  height: 100%;
}

.hero-description {
  position: absolute;
  color: #fff;
  font-weight: 900;
  left: 150px;
  bottom: 26%;
}

.hero-btn {
  position: absolute;
  color: #fff;
  right: 30px;
  bottom: 10%;
  padding: 10px 20px;
  border: 1px solid #fff;
}

.hero-btn a {
  color: #fff;
}

.hero-date {
  position: absolute;
  color: #fff;
  left: 30px;
  bottom: 10%;
}
/* END CARD DESIGN */

.btn i:before {
  width: 14px;
  height: 14px;
  position: fixed;
  color: #fff;
  background: #0077b5;
  padding: 10px;
  border-radius: 50%;
  top: 5px;
  right: 5px;
}
@media (max-width: 768px) {
  .flex {
    flex-direction: column;
  }

  .card {
    margin: 0 auto; /* Center the card */
    margin-bottom: 20px; /* Add some space between cards */
    width: 90%; /* Adjust card width */
  }

  .box {
    flex-direction: column; /* Stack the hero cards vertically */
    align-items: center; /* Center hero cards horizontally */
  }

  .hero {
    margin-left: 0; /* Remove margin for hero cards */
    width: 90%; /* Adjust hero card width */
    min-width: auto; /* Reset min-width */
  }
}
</style>
