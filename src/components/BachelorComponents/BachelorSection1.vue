<template>
  <div class="section1">
    <div class="bachelor-program">
      <h2 class="program-title" style="color: #761e67">What is the Bachelor's Programme?</h2>
      <p class="program-description">
        Our Bachelor's programme is a comprehensive curriculum spanning two or three terms, meticulously
        crafted to provide specialized academic and Computer Science preparation for undergraduate success.
        Upon successful completion of the Bachelor's programme and meeting the requisite academic criteria,
        you can embark on your chosen Bachelor's degree in Computer Science.
      </p>

      <h2 class="why-study-title" style="color: #761e67">Why Choose a Bachelor's?</h2>
      <p class="why-study-reason">
        Enhance your career prospects and earning potential by gaining expertise in Computer Science. A
        Bachelor's degree offers the opportunity to explore diverse career paths, access esteemed faculty and
        cutting-edge research opportunities, and experience a challenging academic journey at a prestigious
        institution. Additionally, refine your academic skills and receive tailored support designed to meet
        the needs of international students.
      </p>

      <h2 class="pathways-title" style="color: #761e67">Pathways to Computer Science Success</h2>
      <p class="pathways-description">
        We offer a range of subject-specific pathways aligned with your desired Bachelor's degree in Computer
        Science. Explore our pathway pages to discover the curriculum and grade prerequisites essential for
        advancing to your chosen Computer Science programme.
      </p>

      <p class="additional-support" style="color: #761e67">
        For those requiring additional preparation in Computer Science, we provide specialized courses to
        ensure readiness for our undergraduate programmes.
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
