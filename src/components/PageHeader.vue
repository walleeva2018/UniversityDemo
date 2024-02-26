<template>
  <header class="bg-gray-800 text-white py-2 px-6">
    <div class="flex flex-row justify-between items-center h-full">
      <div class="flex items-center gap-4">
        <a href="/"><img src="../assets/sust.png" width="80" height="50" /> </a>
      </div>

      <div id="wrap">
        <ul class="navbar">
          <li>
            <a href="#">International Study Center </a>
            <ul>
              <li>
                <a href="">Student Life</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
              <li>
                <a href="">Virtual Events</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">How To Apply</a>
            <ul>
              <li>
                <a @click="gotoEntry">Entry Requirments</a>
              </li>
              <li>
                <a href="">Fees</a>
              </li>
              <li>
                <a href="">Term Dates</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Programmes</a>
            <ul>
              <li>
                <a href="">Master</a>
              </li>
              <li>
                <a href="">Bachelor Degree</a>
              </li>
              <li>
                <a href="">Angular</a>
              </li>
              <li>
                <a href="">Subjects</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="justify-between flex gap-3">
        <button
          @click="gotoApplyForm"
          class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-bold right-item"
        >
          Apply Now
        </button>

        <button
          @click="gotoAskQuestion"
          class="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded font-bold right-item"
        >
          Ask A question
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
function gotoAskQuestion() {
  router.push('ask');
}
function gotoApplyForm() {
  router.push('apply');
}
function gotoEntry() {
  router.push('entry');
}
</script>

<style scoped>
#wrap {
  width: 100%;
  height: 50px;
  flex-grow: 1; /* This will make the navbar take up the remaining space */
  display: flex;
  justify-content: flex-end; /* Align items to the right */
  margin-right: 20px;
  z-index: 2;
}
.navbar {
  height: 50px;
  padding: 0;
  margin: 0;
  position: absolute;
  z-index: 2;
}
.navbar li {
  height: auto;
  width: 200px;
  float: right;
  text-align: center;
  list-style: none;
  font:
    normal bold 13px/1em Arial,
    Verdana,
    Helvetica;
  padding: 0;
  margin: 0;
  z-index: 2;
}
.navbar a {
  padding: 18px 0;
  border-left: 1px solid #ccc9c9;
  text-decoration: none;
  color: white;
  display: block;
  z-index: 2;
}
.navbar li:hover,
a:hover {
  background-color: #444444;
  z-index: 2;
}
.navbar li ul {
  display: none;
  height: auto;
  margin: 0;
  padding: 0;
  z-index: 2;
}
.navbar li:hover ul {
  display: block;
  z-index: 2;
}
.navbar li ul li {
  background-color: #444444;
  z-index: 2;
}
.navbar li ul li a {
  border-left: 1px solid #444444;
  border-right: 1px solid #444444;
  border-top: 1px solid #c9d4d8;
  border-bottom: 1px solid #444444;
  z-index: 2;
}
.navbar li ul li a:hover {
  background-color: #a3a1a1;
  z-index: 2;
}

.right-item {
  float: none;
  width: 200px;
  z-index: 2;
}
@media (max-width: 768px) {
  .right-item {
    width: 100px; /* Adjust the width for smaller screens */
  }
}

/* Add this media query at the end of your existing CSS */
/* Add this media query at the end of your existing CSS */
@media (max-width: 768px) {
  .navbar {
    position: static; /* Change position to static for smaller screens */
    display: flex; /* Display navbar items as flexbox */
    flex-direction: column; /* Arrange items vertically */
    align-items: center; /* Center items horizontally */
  }

  .navbar li {
    width: 100%; /* Make each list item take up the full width */
    float: none;
    text-align: center; /* Center text within list items */
    background-color: #a3a1a1;
  }

  .navbar li ul {
    display: none; /* Hide dropdown menus by default */
  }

  .navbar li:hover ul {
    display: block; /* Show dropdown menus on hover */
  }

  .navbar li ul li {
    display: block; /* Display dropdown items as block */
  }

  .navbar a {
    border-left: none; /* Remove border on left side */
    border-right: none; /* Remove border on right side */
    border-top: 1px solid #c9d4d8; /* Add top border between items */
    border-bottom: none; /* Remove bottom border */
    padding: 12px 0; /* Adjust padding */
  }

  .right-item {
    float: none; /* Remove float */
    width: 100%; /* Make the buttons take up full width */
  }
}
</style>
