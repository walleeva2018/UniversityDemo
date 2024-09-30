<template>
  <div class="application-form">
    <header class="bg-gray-800 text-white p-4">
      <nav class="container mx-auto">
        <a href="/" class="hover:underline">Home</a> &gt; Apply
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <section class="mb-8">
        <div class="flex flex-wrap justify-between items-center mb-6">
          <div v-for="(step, index) in stepsName" :key="index" class="text-center mb-4 sm:mb-0">
            <i :class="[stepIcons[index], getStepClass(index)]" aria-hidden="true"></i>
            <h2 :class="['text-lg sm:text-xl font-semibold mt-2', getStepClass(index)]">
              {{ index + 1 }}. {{ step }}
            </h2>
          </div>
        </div>
      </section>

      <form @submit.prevent="nextStep">
        <section v-show="currentStep === 0" class="mb-8">
          <h2 class="text-2xl font-bold text-primary mb-4">Student Details</h2>
          <p class="text-gray-600 mb-6">
            Please provide your personal information to process your application.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label for="firstName">First Name</label>
              <input type="text" id="firstName" v-model="studentDetails.firstName" required />
            </div>
            <div class="form-group">
              <label for="familyName">Family Name</label>
              <input type="text" id="familyName" v-model="studentDetails.familyName" required />
            </div>
            <div class="form-group">
              <label for="birthday">Birthday</label>
              <input type="date" id="birthday" v-model="studentDetails.birthday" required />
            </div>
            <div class="form-group">
              <label>Gender</label>
              <div class="flex gap-4">
                <button type="button" @click="studentDetails.gender = 'male'"
                  :class="['btn', studentDetails.gender === 'male' ? 'btn-primary' : 'btn-outline']">
                  Male
                </button>
                <button type="button" @click="studentDetails.gender = 'female'"
                  :class="['btn', studentDetails.gender === 'female' ? 'btn-primary' : 'btn-outline']">
                  Female
                </button>
              </div>
            </div>
            <div class="form-group">
              <label for="nationality">Nationality</label>
              <input type="text" id="nationality" v-model="studentDetails.nationality" required />
            </div>
            <div class="form-group">
              <label for="birthplace">Place of Birth</label>
              <input type="text" id="birthplace" v-model="studentDetails.birthplace" required />
            </div>
          </div>

          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Student Address</h2>
          <p class="text-gray-600 mb-6">
            Please provide your contact information.
          </p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label for="mobile">Mobile Number</label>
              <input type="tel" id="mobile" v-model="studentDetails.mobile" placeholder="+880....." required />
            </div>
            <div class="form-group">
              <label for="alternateNumber">Alternate Number</label>
              <input type="tel" id="alternateNumber" v-model="studentDetails.alternateNumber" placeholder="+880....." />
            </div>
          </div>

          <h2 class="text-2xl font-bold text-primary mt-8 mb-4">Get Notified</h2>
          <p class="text-gray-600 mb-6">
            Choose how you'd like to receive information on our products, services, and promotional offers.
          </p>

          <div class="flex flex-wrap gap-4">
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="studentDetails.notifications.email" class="form-checkbox" />
              <span class="ml-2">Email</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="studentDetails.notifications.sms" class="form-checkbox" />
              <span class="ml-2">SMS</span>
            </label>
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="studentDetails.notifications.whatsapp" class="form-checkbox" />
              <span class="ml-2">WhatsApp</span>
            </label>
          </div>
        </section>

        <section v-show="currentStep === 1" class="mb-8">
          <h2 class="text-2xl font-bold text-primary mb-4">Subject Details</h2>
          <p class="text-gray-600 mb-6">Please select your subject preferences.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label for="subjectMajor">Major Subject</label>
              <select id="subjectMajor" required>
                <option disabled value="">Select a Major Subject</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Business Administration">Business Administration</option>
                <option value="Engineering">Engineering</option>
                <!-- Add more subjects as needed -->
              </select>
            </div>

            <div class="form-group">
              <label for="subjectMinor">Minor Subject</label>
              <select id="subjectMinor" required>
                <option disabled value="">Select a Minor Subject</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Economics">Economics</option>
                <option value="Physics">Physics</option>
                <!-- Add more subjects as needed -->
              </select>
            </div>
          </div>
        </section>

        <!-- Add sections for other steps here -->

      </form>
    </main>

    <footer class="mt-8 p-4">
      <div class="container mx-auto flex justify-between">
        <button @click="previous" class="btn btn-outline" :disabled="currentStep === 0">Previous</button>
        <button @click="nextStep" class="btn btn-primary">
          {{ currentStep === steps - 1 ? 'Submit' : 'Next' }}
        </button>
        <button @click="cancel" class="btn btn-outline btn-error">Cancel</button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const steps = 3;
const currentStep = ref(0);
const stepsName = ['Student Details', 'Subject Details', 'Review'];
const stepIcons = ['fas fa-user', 'fas fa-book', 'fas fa-check'];

const studentDetails = reactive({
  firstName: '',
  familyName: '',
  birthday: '',
  gender: '',
  nationality: '',
  birthplace: '',
  mobile: '',
  alternateNumber: '',
  notifications: {
    email: false,
    sms: false,
    whatsapp: false
  }
});

const getStepClass = (index) => {
  if (currentStep.value === index) return 'text-primary';
  if (currentStep.value > index) return 'text-success';
  return 'text-gray-400';
};

const nextStep = () => {
  if (currentStep.value < steps - 1) {
    currentStep.value++;
  } else {
    // Submit the form
    router.push('/thank-you');
  }
};

const previous = () => {
  if (currentStep.value > 0) {
    currentStep.value--;
  }
};

const cancel = () => {
  router.push('/');
};
</script>


<style scoped>
.application-form {
  background-color: #f9fafb;
}

header {
  background-color: #1f2937;
  /* Darker gray for header */
}

nav a {
  color: #d1d5db;
  /* Lighter gray for links */
}

main {
  padding: 2rem 1rem;
}

.form-group label {
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  display: block;
  color: #4b5563;
  /* Cool gray text */
}

.form-group input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  /* Border color for inputs */
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.form-group input:focus {
  border-color: #761E67;
  /* Blue for focus state */
  outline: none;
  box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
}

.btn-primary {
  background-color: #761E67;
  color: #fff;
  border: none;
}

.btn-outline {
  background-color: transparent;
  color: #761E67;
  border: 2px solid #761E67;
}

.btn-primary:hover,
.btn-outline:hover {
  opacity: 0.9;
}

.btn-error {
  border-color: #ef4444;
  color: #ef4444;
}

.btn-error:hover {
  background-color: #ef4444;
  color: #fff;
}

footer {
  border-top: 1px solid #e5e7eb;
  background-color: #f3f4f6;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

footer button {
  min-width: 120px;
}

.text-primary {
  color: #761E67;
}

.text-success {
  color: #10b981;
}

.text-gray-400 {
  color: #9ca3af;
}

.text-gray-600 {
  color: #4b5563;
}

.text-gray-800 {
  color: #1f2937;
}

h2 {
  color: #111827;
}

@media (min-width: 640px) {
  .application-form {
    padding: 4rem;
  }

  footer {
    padding: 1.5rem;
  }
}
</style>
