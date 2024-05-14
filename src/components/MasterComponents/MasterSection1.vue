<template>
  <div class="section1">
    <div class="masters-program">
      <h2 class="program-title" style="color: #761e67">What is the Master's Programme?</h2>
      <p class="program-description">
        Our Master's programme is a two- or three-term curriculum designed to provide specialized academic and
        English language preparation for postgraduate success. Upon successful completion of the Master's
        programme and meeting the required academic standards, you can commence your chosen Master's degree.
      </p>

      <h2 class="why-study-title" style="color: #761e67">Why Choose a Master's?</h2>
      <ul class="why-study-list">
        <li>Enhance your career prospects and earning potential</li>
        <li>Transition to a new career path or explore a different field from your undergraduate studies</li>
        <li>Access top-notch faculty and cutting-edge research opportunities</li>
        <li>Pursue a rigorous academic experience at a prestigious institution</li>
        <li>Refine your academic and English language skills prior to starting your postgraduate degree</li>
        <li>Benefit from personalized support tailored to international students' needs</li>
      </ul>

      <h2 class="pathways-title" style="color: #761e67">Pathways to Postgraduate Success</h2>
      <p class="pathways-description">
        We offer diverse subject routes aligned with your desired degree. Explore our subject pathway pages to
        learn about the curriculum and grade requirements necessary for progressing to your chosen degree.
      </p>

      <p class="additional-support" style="color: #761e67">
        For those requiring additional English language proficiency, we provide specialized language
        preparation courses to ensure readiness for our academic programmes.
      </p>
    </div>
  </div>
</template>
<style scoped>
.section1 {
  width: calc(70% - 40px); /* Adjust width for responsiveness */
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.section1 h2 {
  font-size: 24px;
  margin-bottom: 10px;
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
  color: #333;
  font-size: 24px;
  margin-top: 20px;
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

@media screen and (max-width: 767px) {
  .section1 {
    width: 100%;
  }
}
</style>
