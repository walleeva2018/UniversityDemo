<template>
    <div class="contact-form">
        <ToastifyContainer />
        <header class="bg-gray-800 text-white p-4">
            <nav class="container mx-auto">
                <a href="/" class="hover:underline">Home</a> &gt; Contact Us
            </nav>
        </header>

        <main class="container mx-auto px-4 py-8">
            <section class="mb-8">
                <h1 class="text-3xl font-bold text-primary mb-4">Contact Us</h1>
                <p class="text-gray-600 mb-6">
                    Students that are interested in applying for admission can find out more about the University by
                    completing our Undergraduate or Postgraduate Enquiry Form.
                </p>
                <p class="text-gray-600 mb-6">
                    Please contact us at <a href="mailto:contact@universitypreston.com"
                        class="text-primary hover:underline">contact@universitypreston.com</a> for your queries.
                </p>
                <p class="text-gray-600 mb-8">
                    If you have specific questions for our Admissions staff, you will be able to submit them on the form
                    and our staff will reply to your questions as soon as possible.
                </p>
            </section>

            <form @submit.prevent="submitForm" class="max-w-2xl mx-auto">
                <div class="grid grid-cols-1 gap-6">
                    <div class="form-group">
                        <label for="fullName">Full Name *</label>
                        <input type="text" id="fullName" v-model="formData.fullName" required
                            placeholder="Enter your full name" />
                    </div>

                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" v-model="formData.email" required
                            placeholder="Enter your email address" />
                    </div>

                    <div class="form-group">
                        <label for="phone">Phone *</label>
                        <input type="tel" id="phone" v-model="formData.phone" required
                            placeholder="Enter your phone number" />
                    </div>

                    <div class="form-group">
                        <label for="enquiryType">Enquiry Type</label>
                        <select id="enquiryType" v-model="formData.enquiryType">
                            <option value="">Select enquiry type</option>
                            <option value="undergraduate">Undergraduate Admission</option>
                            <option value="postgraduate">Postgraduate Admission</option>
                            <option value="general">General Inquiry</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" v-model="formData.message" required rows="6"
                            placeholder="Please enter your message or questions here..."></textarea>
                    </div>

                    <div class="form-group">
                        <button type="submit" class="btn btn-primary w-full" :disabled="isLoading">
                            {{ isLoading ? 'Sending...' : 'Send Message' }}
                        </button>
                    </div>
                </div>
            </form>
        </main>

        <footer class="mt-8 p-4 border-t border-gray-200">
            <div class="container mx-auto text-center">
                <p class="text-gray-600">
                    For immediate assistance, email us at
                    <a href="mailto:contact@universitypreston.com" class="text-primary hover:underline">
                        admin@universitypreston.com
                    </a>
                </p>
            </div>
        </footer>
    </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { toast, ToastifyContainer } from 'vue3-toastify';

const isLoading = ref(false);

const formData = reactive({
    fullName: '',
    email: '',
    phone: '',
    enquiryType: '',
    message: ''
});

const validateForm = () => {
    if (!formData.fullName.trim()) {
        toast.error('Please enter your full name');
        return false;
    }

    if (!formData.email.trim()) {
        toast.error('Please enter your email address');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        toast.error('Please enter a valid email address');
        return false;
    }

    if (!formData.phone.trim()) {
        toast.error('Please enter your phone number');
        return false;
    }

    if (!formData.message.trim()) {
        toast.error('Please enter your message');
        return false;
    }

    if (formData.message.trim().length < 10) {
        toast.error('Please enter a more detailed message (at least 10 characters)');
        return false;
    }

    return true;
};

const submitForm = async () => {
    if (!validateForm()) {
        return;
    }

    isLoading.value = true;

    try {
        const response = await fetch('https://email-server-gray.vercel.app/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: 'contact@universitypreston.com',
                subject: 'New Contact Form Submission',
                html: `
            <h1>New Contact Form Submission</h1>
            <p>A new contact inquiry has been submitted:</p>
            <ul>
              <li>Name: ${formData.fullName}</li>
              <li>Email: ${formData.email}</li>
              <li>Phone: ${formData.phone}</li>
              <li>Enquiry Type: ${formData.enquiryType || 'Not specified'}</li>
              <li>Message: ${formData.message}</li>
            </ul>
          `
            })
        });

        if (response?.status === 200) {
            toast.success('Form Submitted Successfully. You will be contacted soon.');

            // Reset form
            Object.keys(formData).forEach(key => {
                formData[key] = '';
            });
        } else {

            throw new Error('Failed to send email');
        }
    } catch (error) {
        console.error('Error sending email:', error);
        toast.error('Form submitted, but there was an error sending the confirmation email. We will contact you soon.');
    }
    isLoading.value = false;
};
</script>

<style scoped>
.contact-form {
    background-color: #f9fafb;
    min-height: 100vh;
}

header {
    background-color: #1f2937;
}

nav a {
    color: #d1d5db;
}

main {
    padding: 2rem 1rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    font-weight: 600;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    display: block;
    color: #4b5563;
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    font-size: 1rem;
    transition: all 0.2s ease;
    background-color: white;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: #761E67;
    outline: none;
    box-shadow: 0 0 0 2px rgba(118, 30, 103, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.btn {
    padding: 0.75rem 1.5rem;
    border-radius: 0.375rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background-color: #761E67;
    color: #fff;
}

.btn-primary:hover:not(:disabled) {
    background-color: #5a1750;
    transform: translateY(-1px);
}

.btn-primary:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
}

.text-primary {
    color: #761E67;
}

.text-gray-600 {
    color: #4b5563;
}

h1 {
    color: #111827;
}

footer {
    background-color: #f3f4f6;
}

@media (min-width: 640px) {
    main {
        padding: 4rem 1rem;
    }
}

@media (min-width: 768px) {
    .container {
        max-width: 1024px;
    }
}
</style>