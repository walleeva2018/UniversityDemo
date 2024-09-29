<template>
  <div class="section1">
    <div class="masters-program">
      <h2 class="program-title">What is the Master's Programme?</h2>
      <p class="program-description">
        Our Master's programme is a two- or three-term curriculum designed to provide specialized academic and
        English language preparation for postgraduate success. Upon successful completion of the Master's
        programme and meeting the required academic standards, you can commence your chosen Master's degree.
      </p>

      <h2 class="why-study-title">Why Choose a Master's?</h2>
      <ul class="why-study-list">
        <li>Enhance your career prospects and earning potential</li>
        <li>Transition to a new career path or explore a different field from your undergraduate studies</li>
        <li>Access top-notch faculty and cutting-edge research opportunities</li>
        <li>Pursue a rigorous academic experience at a prestigious institution</li>
        <li>Refine your academic and English language skills prior to starting your postgraduate degree</li>
        <li>Benefit from personalized support tailored to international students' needs</li>
      </ul>

      <h2 class="pathways-title">Available Courses</h2>
      <ul class="courses-list">
        <li><a href="/course-details?programme=masterIR" target="_blank" rel="noopener noreferrer">MA International
            Relations degree programme</a>
        </li>
        <li><a href="/course-details?programme=masterBM" target="_blank" rel="noopener noreferrer">MSc International
            Business Management programme</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MastersProgram'
}
</script>

<style scoped>
.section1 {
  width: 70%;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.section1 h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #761e67;
}

.section1 p {
  margin-bottom: 10px;
}

.masters-program {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.program-title,
.why-study-title,
.pathways-title {
  font-size: 24px;
  margin-top: 20px;
  color: #333;
}

.program-description,
.pathways-description,
.additional-support {
  margin-bottom: 20px;
}

.why-study-list {
  list-style-type: disc;
  padding-left: 20px;
}

.why-study-list li {
  margin-bottom: 10px;
}

.courses-list {
  list-style-type: none;
  padding-left: 0;
}

.courses-list li {
  margin-bottom: 10px;
}

.courses-list a {
  color: #761e67;
  text-decoration: none;
}

.courses-list a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media screen and (max-width: 1024px) {
  .section1 {
    width: 80%;
  }
}

@media screen and (max-width: 768px) {
  .section1 {
    width: 90%;
    padding: 15px;
    margin: 10px auto;
  }

  .masters-program {
    padding: 10px;
  }

  .program-title,
  .why-study-title,
  .pathways-title {
    font-size: 22px;
  }

  .section1 h2 {
    font-size: 22px;
  }

  .section1 p,
  .why-study-list li,
  .courses-list a {
    font-size: 16px;
  }
}

@media screen and (max-width: 480px) {
  .section1 {
    width: 95%;
    padding: 10px;
  }

  .program-title,
  .why-study-title,
  .pathways-title {
    font-size: 20px;
  }

  .section1 h2 {
    font-size: 20px;
  }

  .section1 p,
  .why-study-list li,
  .courses-list a {
    font-size: 14px;
  }
}
</style>