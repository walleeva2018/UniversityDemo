<template>
  <Toast />

  <div style="background-color: #1f2937; width: 100%;height: 30px; margin-bottom;: 5px" class="flex">
    <h1 class="ml-10 text-white">
      <a href="/"><u>Home ></u></a>
    </h1>

    <h1 class="ml-5 text-white">Apply</h1>
  </div>
  <div class="container">
    <div class="flex justify-between gap-10">
      <div v-for="(step, index) in stepsName" :key="index" class="text-center">
        <i
          :class="stepIcons[index]"
          style="font-size: 28px; margin-top: 10px"
          :style="{
            color: currentStep == index ? '#761e67' : currentStep > index ? 'red' : 'grey'
          }"
        ></i>
        <h1
          style="font-size: 28px"
          :style="{
            color: currentStep == index ? '#761e67' : currentStep > index ? 'red' : 'grey'
          }"
        >
          {{ index + 1 }}. {{ step }}
        </h1>
      </div>
    </div>
    <div class="form">
      <div v-show="currentStep === 0">
        <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          Student details
        </h1>
        <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          Tell us about yourself. We need some details from you so we can process your application. All fields
          are mandatory unless stated as 'optional'.
        </h1>
        <h1 style="font-size: 20px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          Do you work with an Agent?
          <span class="tooltip">
            <i class="fas fa-question-circle"></i>
            <span class="tooltiptext">Tooltip text here</span>
          </span>
        </h1>
        <div class="flex flex-wrap gap-3">
          <div class="flex align-items-center">
            <RadioButton v-model="agent" inputId="ingredient1" name="agent" value="Working" />
            <label for="ingredient1" class="ml-2">Yes</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton v-model="agent" inputId="ingredient2" name="agent" value="NotWorking" />
            <label for="ingredient2" class="ml-2">No</label>
          </div>
        </div>
        <h1 style="font-size: 20px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          Please Tell us How you intend to fund your study?
          <span class="tooltip">
            <i class="fas fa-question-circle"></i>
            <span class="tooltiptext">Tooltip text here</span>
          </span>
        </h1>
        <div class="flex flex-wrap gap-3">
          <div class="flex align-items-center">
            <RadioButton v-model="agent" inputId="ingredient1" name="agent" value="Working" />
            <label for="ingredient1" class="ml-2">Self and Family Funded</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton v-model="agent" inputId="ingredient2" name="agent" value="NotWorking" />
            <label for="ingredient2" class="ml-2">No funding Require full scholarship</label>
          </div>
          <div class="flex align-items-center">
            <RadioButton v-model="agent" inputId="ingredient2" name="agent" value="Other" />
            <label for="ingredient2" class="ml-2">Partially Funded</label>
          </div>
        </div>

        <div>
          <label
            for="fieldName"
            style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
            >First Name</label
          >
          <div style="position: relative; margin-bottom: 20px">
            <input
              type="text"
              id="fieldName"
              v-model="inputValue"
              style="width: 100%; border: none; border-bottom: 1px solid #333; font-size: 16px; padding: 8px"
              placeholder="Type here..."
            />
          </div>
        </div>
        <div>
          <label
            for="fieldName"
            style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
            >Family Name</label
          >
          <div style="position: relative; margin-bottom: 20px">
            <input
              type="text"
              id="fieldName"
              v-model="inputValue"
              style="width: 100%; border: none; border-bottom: 1px solid #333; font-size: 16px; padding: 8px"
              placeholder="Type here..."
            />
          </div>
          <label
            for="birthday"
            style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
            >Birthday:
          </label>
          <input type="date" id="birthday" name="birthday" class="custom-date-input" />
        </div>
        <label
          class="input-label"
          style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
          >Gender:</label
        >
        <div class="gender-buttons">
          <button :class="{ selected: gender === 'male' }" @click="gender = 'male'">Male</button>
          <button :class="{ selected: gender === 'female' }" @click="gender = 'female'">Female</button>
        </div>
        <label
          class="input-label"
          style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
          >Nationality</label
        >
        <div style="position: relative; margin-bottom: 20px">
          <input
            type="text"
            id="fieldName"
            v-model="inputValue"
            style="width: 100%; border: none; border-bottom: 1px solid #333; font-size: 16px; padding: 8px"
            placeholder="Type here..."
          />
        </div>
        <label
          class="input-label"
          style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
          >Where you are born</label
        >
        <div style="position: relative; margin-bottom: 20px">
          <input
            type="text"
            id="fieldName"
            v-model="inputValue"
            style="width: 100%; border: none; border-bottom: 1px solid #333; font-size: 16px; padding: 8px"
            placeholder="Type here..."
          />
        </div>
        <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          Student Address
        </h1>
        <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          Select your country to start looking for your address. Enter address manually.
        </h1>
        <label
          class="input-label"
          style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
          >Mobile</label
        >
        <div style="position: relative; margin-bottom: 20px">
          <input
            type="number"
            id="fieldName"
            v-model="inputValue"
            style="width: 100%; border: none; border-bottom: 1px solid #333; font-size: 16px; padding: 8px"
            placeholder="+880....."
          />
        </div>
        <label
          class="input-label"
          style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
          >Alternate Number</label
        >
        <div style="position: relative; margin-bottom: 20px">
          <input
            type="number"
            id="fieldName"
            v-model="inputValue"
            style="width: 100%; border: none; border-bottom: 1px solid #333; font-size: 16px; padding: 8px"
            placeholder="+880....."
          />
        </div>
        <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          Get Notified
        </h1>
        <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          I would like to receive information on Study Group products, services and promotional offers that
          may be of interest to me through the following modes of communication. For more information about
          how your data is used and stored view our <a><u>Privacy Policy</u> </a>.
        </h1>

        <div class="flex">
          <Checkbox v-model="email" binary variant="filled" />

          <label class="ml-5">Email</label>
        </div>
        <div class="flex">
          <Checkbox v-model="sms" binary variant="filled" />

          <label class="ml-5">SMS</label>
        </div>
        <div class="flex">
          <Checkbox v-model="wp" binary variant="filled" />

          <label class="ml-5">Whatsapp</label>
        </div>

        <div style="display: flex; justify-content: flex-end; margin-top: 20px" class="justify-between gap-6">
          <button @click="cancel" class="custom-button cancel-button">Cancel</button>
          <button @click="nextStep" class="custom-button next-button">Next</button>
        </div>
      </div>
      <div v-show="currentStep === 1">
        <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          Subject details
          <span class="tooltip">
            <i class="fas fa-question-circle"></i>
            <span class="tooltiptext">Tooltip text here</span>
          </span>
        </h1>
        <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          This is where you tell us which subject you would like to study with us and give us an indication of
          programme level and programme most applicable to your study goals. Find more information on our
          programme pages.
        </h1>

        <TreeSelect
          v-model="selectedSubject"
          :options="subjectOptions"
          placeholder="Which Subject would you like to study"
          class="md:w-20rem w-full"
          style="margin-right: 10px"
        />
        <TreeSelect
          v-model="selectedTimeRange"
          :options="timeRangeOptions"
          placeholder="Select Time Range"
          class="md:w-20rem w-full"
        />
        <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center">
          <button @click="previous" class="custom-button previous-button">Previous</button>
          <div style="display: flex">
            <button @click="cancel" class="custom-button cancel-button">Cancel</button>
            <button @click="nextStep" class="custom-button next-button">Next</button>
          </div>
        </div>
      </div>
      <div v-show="currentStep === 2">
        <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          Other details
        </h1>
        <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          We need some additional information from you to support your application. All fields are mandatory
          unless stated 'optional'.
        </h1>
        <label
          class="input-label"
          style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
          >Have you previously studied in the UK?</label
        >
        <div class="gender-buttons">
          <button :class="{ selected: uk === 'yes' }" @click="uk = 'yes'">YES</button>
          <button :class="{ selected: uk === 'no' }" @click="uk = 'no'">NO</button>
        </div>
        <label
          v-if="uk == 'yes'"
          class="input-label"
          style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
          >Did you require a visa to study?
        </label>
        <div class="gender-buttons" v-if="uk == 'yes'">
          <button :class="{ selected: visa === 'yes' }" @click="visa = 'yes'">YES</button>
          <button :class="{ selected: visa === 'no' }" @click="visa = 'no'">NO</button>
        </div>
        <label
          v-if="uk == 'no'"
          class="input-label"
          style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
          >Is your visa rejected for any of the following reason
        </label>
        <TreeSelect
          v-if="uk == 'no'"
          v-model="reason"
          :options="rejectedReason"
          placeholder="Reason for rejection"
          class="md:w-20rem w-full"
        />
        <label
          class="input-label"
          style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
          >Do you want to add StudyCare insurance cover while studying abroad?
          <span class="tooltip">
            <i class="fas fa-question-circle"></i>
            <span class="tooltiptext">Tooltip text here</span>
          </span>
        </label>
        <div class="gender-buttons">
          <button :class="{ selected: insurance === 'yes' }" @click="insurance = 'yes'">YES</button>
          <button :class="{ selected: insurance === 'no' }" @click="insurance = 'no'">NO</button>
        </div>
        <div class="gender-buttons" v-if="insurance == 'yes'" style="margin-top: 5px">
          <button :class="{ selected: period === '12' }" @click="period = '12'">Get for 12 Months</button>
          <button :class="{ selected: period === '24' }" @click="period = '24'">Get for 2 Years</button>
        </div>
        <div class="zebra-border" v-if="insurance == 'yes'" style="margin-top: 5px">
          StudyCare Insurance-UK (up to 12 months) - a per week policy to cover your stay at the International
          Study Centre only. StudyCare Insurance-UK (24 months) - for the duration of the pathway programme
          and one year university study. If you choose to purchase StudyCare Insurance-UK, the full cost of
          your preferred insurance will be added to your invoice. StudyCare Insurance-UK (24 months) costs
          £6.93 per week (total £720). StudyCare Insurance-UK (12 months) costs £8.65 per week (total £450).
          These prices include Insurance Premium Tax. Please read the full policy terms and conditions here.
        </div>
        <label
          class="input-label"
          style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
          >Do you have any medical disability or special educational needs which may affect your studies?
          <span class="tooltip">
            <i class="fas fa-question-circle"></i>
            <span class="tooltiptext">Tooltip text here</span>
          </span></label
        >
        <div class="gender-buttons">
          <button :class="{ selected: disability === 'yes' }" @click="disability = 'yes'">YES</button>
          <button :class="{ selected: disability === 'no' }" @click="disability = 'no'">NO</button>
        </div>
        <label
          class="input-label"
          style="font-size: 20px; color: #333; margin-bottom: 5px; display: block; margin-top: 10px"
          >Do you have any criminal convictions?
          <span class="tooltip">
            <i class="fas fa-question-circle"></i>
            <span class="tooltiptext">Tooltip text here</span>
          </span></label
        >
        <div class="gender-buttons">
          <button :class="{ selected: criminal === 'yes' }" @click="criminal = 'yes'">YES</button>
          <button :class="{ selected: criminal === 'no' }" @click="criminal = 'no'">NO</button>
        </div>
        <div class="zebra-border" v-if="criminal == 'yes'" style="margin-top: 5px">
          The Student Enrolment Advisor who processes your application will ask you to send a full description
          of events.
        </div>
        <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center">
          <button @click="previous" class="custom-button previous-button">Previous</button>
          <div style="display: flex">
            <button @click="cancel" class="custom-button cancel-button">Cancel</button>
            <button @click="nextStep" class="custom-button next-button">Next</button>
          </div>
        </div>
      </div>
      <div v-show="currentStep === 3">
        <h1 style="font-size: 28px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          Document upload
        </h1>
        <h1 style="font-size: 15px; color: #761e67; margin-bottom: 20px; margin-left: 5px; margin-top: 5px">
          Accelerate your application - Submit your documents now to speed up your offer of study. If you
          don't have your documents ready, you can still apply online and provide these at a later time. You
          can upload some or all of the following:
        </h1>
        <ul type="circle">
          <li>Academic transcripts</li>
          <li>English tests</li>
          <li>Passport</li>
          <li>Visas</li>
          <li>Other, including sponsorship letter or statement of interest</li>
        </ul>
        <div class="gender-buttons">
          <button :class="{ selected: upload === 'yes' }" @click="upload = 'yes'">
            Yes, Upload the documents
          </button>
          <button :class="{ selected: upload === 'no' }" @click="upload = 'no'">
            NO, Apply now without documents
          </button>
        </div>
        <div v-if="upload == 'yes'">
          <h1
            style="
              font-size: 20px;
              color: #761e67;
              margin-bottom: 20px;
              margin-left: 5px;
              margin-top: 5px;
              text-align: center;
            "
          >
            Academic transcripts
          </h1>
          <div class="upload-box" @dragover.prevent @drop="handleDrop" @click="openFileInput">
            <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" />
            <p v-if="!successMessage">Drag & Drop files here or click to upload</p>
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
          </div>
          <h1
            style="
              font-size: 20px;
              color: #761e67;
              margin-bottom: 20px;
              margin-left: 5px;
              margin-top: 5px;
              text-align: center;
            "
          >
            IELTS
          </h1>
          <div class="upload-box" @dragover.prevent @drop="handleDrop" @click="openFileInput">
            <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" />
            <p v-if="!successMessage">Drag & Drop files here or click to upload</p>
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
          </div>
          <h1
            style="
              font-size: 20px;
              color: #761e67;
              margin-bottom: 20px;
              margin-left: 5px;
              margin-top: 5px;
              text-align: center;
            "
          >
            Visa
          </h1>
          <div class="upload-box" @dragover.prevent @drop="handleDrop" @click="openFileInput">
            <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" />
            <p v-if="!successMessage">Drag & Drop files here or click to upload</p>
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
          </div>
          <h1
            style="
              font-size: 20px;
              color: #761e67;
              margin-bottom: 20px;
              margin-left: 5px;
              margin-top: 5px;
              text-align: center;
            "
          >
            Passport
          </h1>
          <div class="upload-box" @dragover.prevent @drop="handleDrop" @click="openFileInput">
            <input type="file" ref="fileInput" style="display: none" @change="handleFileChange" />
            <p v-if="!successMessage">Drag & Drop files here or click to upload</p>
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
          </div>
        </div>
        <div style="margin-top: 20px; display: flex; justify-content: space-between; align-items: center">
          <button @click="previous" class="custom-button previous-button">Previous</button>
          <div style="display: flex">
            <button @click="cancel" class="custom-button cancel-button">Cancel</button>
            <button @click="submitForm" class="custom-button next-button">Submit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="progress">
      <span>Step {{ currentStep + 1 }}</span>
      <span>/</span>
      <span>{{ steps.length }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import RadioButton from 'primevue/radiobutton';
import { useRouter } from 'vue-router';

import Checkbox from 'primevue/checkbox';
import TreeSelect from 'primevue/treeselect';
const gender = ref('');

const agent = ref('');
const email = ref(false);
const sms = ref(false);
const wp = ref(false);
const uk = ref('');
const criminal = ref('');
const disability = ref('');
const insurance = ref('');
const visa = ref('');
const period = ref('');
const upload = ref('');

const selectedSubject = ref(null);
const selectedTimeRange = ref(null);
const reason = ref(null);
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const subjectOptions = ref([
  { label: 'Mathematics', value: 'math' },
  { label: 'Science', value: 'science' },
  { label: 'History', value: 'history' }
]);

const timeRangeOptions = ref([
  { label: 'Morning', value: 'morning' },
  { label: 'Afternoon', value: 'afternoon' },
  { label: 'Evening', value: 'evening' }
]);

const rejectedReason = ref([
  { label: 'Financial', value: 'finance' },
  { label: 'Financial', value: 'finance' },
  { label: 'Financial', value: 'finance' }
]);

const currentStep = ref(0);
const steps = [1, 2, 3, 4];
const router = useRouter();
const stepsName = ['Student Details', 'Subject Details', 'Other Details', 'Documents'];
const stepIcons = [
  'fas fa-user', // Example Font Awesome icon class for step 1
  'fas fa-book', // Example Font Awesome icon class for step 2
  'fas fa-info', // Example Font Awesome icon class for step 3
  'fas fa-file' // Example Font Awesome icon class for step 4
];
const fileInput = ref(null);
const successMessage = ref('');

const openFileInput = () => {
  fileInput.value.click();
};

const handleFileChange = (event) => {
  const files = event.target.files;
  handleFiles(files);
};

const handleDrop = (event) => {
  event.preventDefault();
  const files = event.dataTransfer.files;
  handleFiles(files);
};

const handleFiles = (files) => {
  // Handle uploaded files here
  // For demonstration purposes, you can log the files to the console
  console.log(files);
  successMessage.value = 'Files uploaded successfully!';
  toast('Uploaded Succeesfully', {
    theme: 'auto',
    type: 'success',
    dangerouslyHTMLString: true
  });
};

const nextStep = () => {
  if (currentStep.value < steps.length - 1) {
    currentStep.value++;
  }
};
const previous = () => {
  currentStep.value--;
};

const cancel = () => {
  router.push('/');
};

const submitForm = () => {
  toast('Form Submitted', {
    theme: 'auto',
    type: 'success',
    dangerouslyHTMLString: true
  });
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  width: 80%;
}

.form > div {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.form > div > input {
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ccc;
}

.form > div > button {
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
}

.progress {
  margin-top: 20px;
}

.tooltip {
  position: relative;
  display: inline-block;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidd;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -60px;
  opacity: 0;
  transition: opacity 0.3s;
}

/* Tooltip text visibility on hover */
.tooltip:hover .tooltiptext {
  visibility: visible;
  opacity: 1;
}
.custom-button {
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  border-radius: 5px;
}

.previous-button {
  background-color: #6c757d; /* Grey color */
  color: white;
}

.cancel-button {
  background-color: #dc3545; /* Red color */
  color: white;
  margin-right: 10px; /* Adjust margin as needed */
}

.next-button {
  background-color: #007bff; /* Blue color */
  color: white;
}

.custom-button:hover {
  filter: brightness(90%);
}
.custom-date-input {
  width: 200px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 5px;
}

.custom-date-input:focus {
  outline: none;
  border-color: #007bff; /* Blue color */
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}
.gender-buttons {
  display: flex;
}

.gender-buttons button {
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

.gender-buttons button.selected {
  background-color: #007bff;
  color: #fff;
}

.gender-buttons button:not(:last-child) {
  margin-right: 10px;
}

.zebra-border {
  border: 3px solid black;
  border-radius: 10px;
  padding: 10px;
}
.upload-box {
  width: 800px;
  height: 300px;
  border: 2px dashed #aaa;
  margin-top: 20px;
  margin-left: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.upload-box p {
  margin: 0;
}
</style>
