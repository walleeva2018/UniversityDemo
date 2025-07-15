<template>
  <div class="application-form">
    <ToastifyContainer />
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
              <input type="tel" id="mobile" v-model="studentDetails.mobile" required />
            </div>
            <div class="form-group">
              <label for="alternateNumber">Alternate Number</label>
              <input type="tel" id="alternateNumber" v-model="studentDetails.alternateNumber" />
            </div>
          </div>




        </section>

        <section v-show="currentStep === 1" class="mb-8">
          <h2 class="text-2xl font-bold text-primary mb-4">Subject Details</h2>
          <p class="text-gray-600 mb-6">Please select your subject preferences.</p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="form-group">
              <label for="subjectMajor">Category</label>
              <select id="subjectMajor" v-model="studentDetails.programme" required>
                <option disabled value="">Select Programme</option>
                <option value="Bachelor">Bachelor</option>
                <option value="Master">Master</option>
              </select>
            </div>

            <div class="form-group">
              <label for="subjectMinor">Subject</label>
              <select id="subjectMinor" v-model="studentDetails.subject" required>
                <option disabled value="">Select a Subject</option>
                <option v-for="subject in filteredSubjects" :key="subject" :value="subject">
                  {{ subject }}
                </option>
              </select>
            </div>
          </div>
        </section>

        <!-- Add sections for other steps here -->

        <section v-show="currentStep === 2" class="mb-8">
          <h2 class="text-2xl font-bold text-primary mb-4">Review Your Details</h2>
          <p class="text-gray-600 mb-6">Please review all the information you have entered before submitting.</p>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Display each student detail -->
            <div class="form-group">
              <label>First Name:</label>
              <p>{{ studentDetails.firstName }}</p>
            </div>

            <div class="form-group">
              <label>Family Name:</label>
              <p>{{ studentDetails.familyName }}</p>
            </div>

            <div class="form-group">
              <label>Birthday:</label>
              <p>{{ studentDetails.birthday }}</p>
            </div>

            <div class="form-group">
              <label>Gender:</label>
              <p>{{ studentDetails.gender }}</p>
            </div>

            <div class="form-group">
              <label>Nationality:</label>
              <p>{{ studentDetails.nationality }}</p>
            </div>

            <div class="form-group">
              <label>Place of Birth:</label>
              <p>{{ studentDetails.birthplace }}</p>
            </div>

            <div class="form-group">
              <label>Mobile Number:</label>
              <p>{{ studentDetails.mobile }}</p>
            </div>

            <div class="form-group">
              <label>Alternate Number:</label>
              <p>{{ studentDetails.alternateNumber }}</p>
            </div>

            <div class="form-group">
              <label>Programme:</label>
              <p>{{ studentDetails.programme }}</p>
            </div>

            <div class="form-group">
              <label>Subject:</label>
              <p>{{ studentDetails.subject }}</p>
            </div>
          </div>
        </section>


      </form>
    </main>

    <footer class="mt-8 p-4">
      <div class="container mx-auto flex justify-between">
        <button @click="previous" class="btn btn-outline" :disabled="currentStep === 0">Previous</button>
        <button @click="nextStep" :disabled="isLoading" class="btn btn-primary">
          {{ currentStep === steps - 1 ? isLoading ? 'Loading...' : 'Submit' : 'Next' }}
        </button>
        <button @click="cancel" class="btn btn-outline btn-error">Cancel</button>
      </div>
    </footer>
  </div>

</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useRouter } from 'vue-router';
import { toast, ToastifyContainer } from 'vue3-toastify';

const router = useRouter();

const steps = 3;
const currentStep = ref(0);
const isLoading = ref(false)
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
  programme: '',
  subject: ''

});

const getStepClass = (index) => {

  if (currentStep.value === index) return 'text-primary';
  if (currentStep.value > index) return 'text-success';
  return 'text-gray-400';
};

const bachelorSubjects = ['Data Analytics', 'Enterpreneurship', 'International Business', 'Advertising & Public Relations', 'Media Studies', 'Computer Science'];
const masterSubjects = ['Msc in Business Management', 'MA in International Relationship'];

const filteredSubjects = computed(() => {
  return studentDetails.programme === 'Bachelor' ? bachelorSubjects : masterSubjects;
});

const nextStep = async () => {

  if (!studentDetails.firstName || !studentDetails.familyName || !studentDetails.birthday || !studentDetails.gender || !studentDetails.nationality || !studentDetails.birthplace) {
    toast.error('Please fill all fields!');
    return;
  }


  if (currentStep.value === 1 && (studentDetails.programme === '' || studentDetails.subject === '')) {
    toast.error('Please fill all fields!');
    return;

  }

  if (currentStep.value < steps - 1) {
    currentStep.value++;
  } else {
    isLoading.value = true
    try {
      const response = await fetch('https://email-server-gray.vercel.app/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'tawhid2072@gmail.com',
          subject: 'New Student Application',
          html: `
            <h1>New Student Application</h1>
            <p>A new student has submitted an application:</p>
            <ul>
              <li>Name: ${studentDetails.firstName} ${studentDetails.familyName}</li>
              <li>Birthday: ${studentDetails.birthday}</li>
              <li>Gender: ${studentDetails.gender}</li>
              <li>Nationality: ${studentDetails.nationality}</li>
              <li>Place of Birth: ${studentDetails.birthplace}</li>
              <li>Mobile: ${studentDetails.mobile}</li>
              <li>Alternate Number: ${studentDetails.alternateNumber}</li>
              <li>Programme: ${studentDetails.programme}</li>
              <li>Subject: ${studentDetails.subject}</li>
            </ul>
          `
        })
      });

      if (response?.status === 200) {
        toast.success('Form Submitted Successfully. You will be contacted soon.');
        router.push('/thank-you');
      } else {

        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Form submitted, but there was an error sending the confirmation email. We will contact you soon.');
    }
    isLoading.value = false
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
