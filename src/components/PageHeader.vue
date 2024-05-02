<template>
  <header class="bg-white py-2 px-6">
    <div class="flex flex-row justify-between items-center h-full">
      <div class="flex items-center gap-4">
        <a href="/"><img src="../assets/logotasdid.png" width="80" height="50" /> </a>
      </div>

      <div id="wrap">
        <!-- Show menu toggle icon only on small screens -->
        <div class="md:hidden relative show-icon" @click="toggleMenu">
          <i v-if="isMenu" class="pi pi-times" style="font-size: 2.5rem"></i>
          <i v-else class="pi pi-align-justify" style="font-size: 2.5rem"></i>
        </div>

        <!-- Navbar menu -->
        <ul
          v-if="isMenu || screenWidth > 1200"
          class="navbar"
          @click="toggleDropdown"
          @mouseover="toggleDropdown"
        >
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
                <a @click="gotoThere('masters')">Master</a>
              </li>
              <li>
                <a @click="gotoThere('bachelor')">Bachelor Degree</a>
              </li>
              <li>
                <a @click="gotoThere('phd')">PhD</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <!-- Buttons for large screens -->
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
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
const isMenu = ref(false);
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
function gotoThere(dest: string) {
  router.push(dest);
}

const isDropdownVisible = ref(false);
const screenWidth = ref(window.innerWidth);

const toggleDropdown = () => {
  isDropdownVisible.value = !isDropdownVisible.value;
};

function toggleMenu() {
  isMenu.value = !isMenu.value;
}

// Update screenWidth on window resize
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', updateScreenWidth);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateScreenWidth);
});
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
  color: #7a357d; /* Set text color to #7A357D */
  display: block;
  z-index: 2;
}
.navbar li:hover,
a:hover {
  background-color: grey;
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
  background-color: white;
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
@media (max-width: 1200px) {
  .right-item {
    width: 100px; /* Adjust the width for smaller screens */
  }

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

  .navbar li.active ul {
    display: block; /* Show dropdown menus when the parent li is active */
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
    color: #7a357d; /* Set text color to #7A357D */
  }

  .right-item {
    float: none; /* Remove float */
    width: 100%; /* Make the buttons take up full width */
  }
  .show-icon {
    display: block;
  }
}
</style>
