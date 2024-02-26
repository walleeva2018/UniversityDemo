<template>
  <div style="position: relative">
    <img src="../assets/cool.jpeg" style="max-height: 500px; width: 1900px" />
    <h1
      style="
        position: absolute;
        bottom: 50px;
        margin-left: 24px;
        background-color: #374151;
        color: white;
        padding: 10px;
        font-size: 36px;
      "
    >
      Entry Requirements
    </h1>
    <div
      style="
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #1f2937;
        color: white;
        padding: 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
      "
    >
      <h1 class="ml-5 text-white">
        <a href="/"><u>Home ></u></a>
      </h1>
      <h1 class="ml-5 text-white">Entry Requirements</h1>
    </div>
  </div>
  <div class="ml-5">
    <h1 style="font-size: 48px; color: #761e67">Check the entry requirements for your programme</h1>
    <p style="color: #761e67">
      If you don't meet the English language requirements for your International Foundation Year or
      Pre-Masters programme, you can first join an Online English Programme.
    </p>
  </div>
  <div class="flex justify-between gap-8">
    <div style="width: 80%; background-color: #ffffff; padding: 20px; margin-top: 20px">
      <div class="flex">
        <i class="fas fa-info" style="font-size: 2rem" />
        <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px">Pre-Masters</h1>
      </div>

      <div
        v-for="(info, index) in programme"
        :key="index"
        :style="{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          marginBottom: '20px',
          backgroundColor: info.showText ? '#006388' : '#E5EFF3',
          transition: 'background-color 0.3s ease',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }"
      >
        <div style="flex: 1; margin-top: 20px; padding: 20px">
          <h2 style="margin-bottom: 10px; margin-left: 5px; color: #333; font-weight: bold">
            {{ info.heading }}
          </h2>
          <p
            v-if="info.showText"
            style="background-color: #ffffff; margin-left: 5px; padding: 10px; border-radius: 5px"
          >
            {{ info.text }}
          </p>
        </div>
        <button
          @click="toggleText(index, 'programme')"
          style="
            position: relative;
            right: 20px;
            top: 20px;
            transform: translateY(-50%);
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 50%;
          "
        >
          {{ info.showText ? '-' : '+' }}
        </button>
      </div>
      <div class="flex">
        <i class="fas fa-book" style="font-size: 2rem" />
        <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px">
          International Foundation Year
        </h1>
      </div>
      <div
        v-for="(info, index) in fees"
        :key="index"
        :style="{
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          marginBottom: '20px',
          backgroundColor: info.showText ? '#006388' : '#E5EFF3',
          transition: 'background-color 0.3s ease',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }"
      >
        <div style="flex: 1; margin-top: 20px; padding: 20px">
          <h2 style="margin-bottom: 10px; margin-left: 5px; color: #333; font-weight: bold">
            {{ info.heading }}
          </h2>
          <p
            v-if="info.showText"
            style="background-color: #ffffff; margin-left: 5px; padding: 10px; border-radius: 5px"
          >
            {{ info.text }}
          </p>
        </div>
        <button
          @click="toggleText(index, 'fees')"
          style="
            position: relative;
            right: 20px;
            top: 20px;
            transform: translateY(-50%);
            background-color: #4caf50;
            color: white;
            border: none;
            padding: 10px;
            cursor: pointer;
            border-radius: 50%;
          "
        >
          {{ info.showText ? '-' : '+' }}
        </button>
      </div>
    </div>
    <div class="button-container">
      <div>
        <button
          @click="gotoApplyForm"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold makeit"
        >
          Apply Now
        </button>
      </div>
      <div class="gap"></div>
      <div>
        <button
          @click="gotoAskQuestion"
          class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-bold makeit"
        >
          Ask A Question
        </button>
      </div>
      <div class="custom-card">
        <img src="../assets/sust.png" alt="Image" class="custom-card-image" />
        <div class="custom-card-content">
          <h3 class="custom-card-title">Card Title</h3>
          <p class="custom-card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pulvinar neque eu dui ultrices, ut
            viverra nulla consequat. Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="box">
    <div class="first hero">
      <img class="hero-profile-img" src="../assets/girl.jpeg" alt="" />
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
      <img class="hero-profile-img" src="../assets/blacky.jpeg" alt="" />
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
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();
function gotoAskQuestion() {
  router.push('ask');
}
function gotoApplyForm() {
  router.push('apply');
}
const visa = ref([
  {
    showText: false,
    heading: 'Question 1',
    text: 'If you would like to study at Durham University International Study Centre, you will need to meet our English language and academic entry requirements.'
  },
  {
    showText: false,
    heading: 'Question 2',
    text: 'Our expert teachers will deliver a high-quality blended learning experience making use of both face-to-face teaching and our innovative digital teaching solutions. When you study face-to-face you can expect classes of no more than 25 students, whilst our digital platform allows you to enjoy interactive classes with plenty of discussion opportunities to improve your English. Both types of learning also require self-study time to help you to learn to study independently. You will be assigned a Personal Tutor who is there to support you every step of the way to help you to stay on track to progress to the University.'
  },
  { showText: false, heading: 'Question 3', text: 'this is text 3' },
  { showText: false, heading: 'Question 4', text: 'this is text 4' },
  { showText: false, heading: 'Question 5', text: 'this is text 5' }
]);

const programme = ref([
  { showText: false, heading: 'Question 1', text: 'this is text' },
  { showText: false, heading: 'Question 2', text: 'this is text 2' }
]);

const fees = ref([
  { showText: false, heading: 'Question 1', text: 'this is text' },
  { showText: false, heading: 'Question 2', text: 'this is text 2' },
  { showText: false, heading: 'Question 3', text: 'this is text 3' }
]);

const toggleText = (index, type) => {
  if (type === 'visa') {
    visa.value[index].showText = !visa.value[index].showText;
  } else if (type === 'fees') {
    fees.value[index].showText = !fees.value[index].showText;
  } else programme.value[index].showText = !programme.value[index].showText;
};
</script>

<style scoped>
.makeit {
  width: 300px;
  margin-top: 20px;
}
.button-container {
  flex: 1;
  align-items: center;
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
.custom-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-top: 20px;
  overflow: hidden;
  width: 300px; /* Adjust width as needed */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-card-image {
  width: 100%;
  height: auto;
}

.custom-card-content {
  padding: 16px;
}

.custom-card-title {
  font-size: 1.2rem;
  margin-bottom: 8px;
}

.custom-card-text {
  font-size: 1rem;
  color: #555;
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
