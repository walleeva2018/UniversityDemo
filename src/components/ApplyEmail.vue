<template>
  <div class="university-info">
    <h1>{{ universityName }}</h1>
    <p class="description">{{ universityDescription }}</p>

    <div class="apply-section">
      <h2>Apply Now</h2>
      <p class="apply-info">
        Applications are now open for the upcoming academic year. If you're interested in joining
        {{ universityName }}, please submit your application to the following email address:
      </p>
      <a href="mailto:apply@university.edu" class="apply-email">apply@university.edu</a>
    </div>

    <div class="contact-section">
      <h2>Contact Information</h2>
      <p class="contact-info">
        For any inquiries or further information, feel free to reach out to us using the contact details
        below:
      </p>
      <p><strong>Email:</strong> info@university.edu</p>
      <p><strong>Phone:</strong> +123 456 7890</p>
      <p><strong>Address:</strong> 123 University Street, City, Country</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const universityName = 'Preston University';
const universityDescription = `
  Welcome to Preston University, a premier institution dedicated to academic excellence, innovation, and holistic development. At [University Name], we foster a vibrant and inclusive learning community where students are empowered to explore their passions, challenge assumptions, and make meaningful contributions to society. Our diverse range of programs, world-class faculty, state-of-the-art facilities, and vibrant campus life create an enriching environment for intellectual growth and personal transformation. Whether you are pursuing undergraduate, graduate, or professional studies, Preston University is committed to nurturing your potential and preparing you to thrive in a rapidly evolving world
`;
</script>

<style scoped>
.university-info {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}

h1 {
  font-size: 3em;
  margin-bottom: 20px;
}

.description {
  font-size: 1.2em;
  margin-bottom: 30px;
}

.apply-section,
.contact-section {
  margin-bottom: 40px;
}

.apply-section h2,
.contact-section h2 {
  font-size: 2em;
  margin-bottom: 10px;
}

.apply-info,
.contact-info {
  font-size: 1.1em;
  margin-bottom: 20px;
}

.apply-email {
  font-size: 1.2em;
  color: #007bff;
  text-decoration: none;
}

.apply-email:hover {
  text-decoration: underline;
}
</style>
