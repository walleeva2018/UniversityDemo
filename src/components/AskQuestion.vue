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
      Contact Us
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
      <h1 class="ml-5 text-white">FAQ</h1>
    </div>
  </div>
  <div class="ml-5">
    <h1 style="font-size: 48px; color: #761e67">We're here to help</h1>
    <p style="color: #761e67">
      Have you got questions about studying at Durham University International Study Centre? Here are some
      answers to common questions.
    </p>
  </div>
  <div class="flex justify-between gap-8">
    <div style="width: 80%; background-color: #ffffff; padding: 20px; margin-top: 20px">
      <div class="flex">
        <i class="pi pi-send" style="font-size: 2rem" />
        <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px">Visa</h1>
      </div>
      <div
        v-for="(info, index) in visa"
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
          @click="toggleText(index, 'visa')"
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
        <i class="pi pi-code" style="font-size: 2rem" />
        <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px">Programme</h1>
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
        <i class="pi pi-google" style="font-size: 2rem" />
        <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px">Fees</h1>
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
    <div>
      <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px">Where to Find Us</h1>
      <img src="../assets/map.png" class="mr-20" style="max-height: 300px" />
      <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
        International Study Centre location
      </h1>
      <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
        Durham University International Study Centre is located at Queen's Campus in Stockton-on-Tees.
      </h1>
      <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
        Durham University International Study Centre
      </h1>
      <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
        Ebsworth Building
      </h1>
      <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
        Queen’s Campus
      </h1>
      <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
        University Boulevard
      </h1>
      <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
        Stockton-on-Tees
      </h1>
      <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
        TS17 6BH
      </h1>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
