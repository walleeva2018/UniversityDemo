<template>
  <div class="section1">
    <div class="masters-program">
      <h2 class="program-title" style="color: #761e67">What is the masters programme?</h2>
      <p class="program-description">
        Our masters is a two- or three-term programme that provides the specialist academic and English
        language preparation you need to succeed as a postgraduate student at Durham University. Once you
        successfully complete this masters programme and achieve the required grades, you can start your
        chosen Masters degree at Durham University.
      </p>

      <h2 class="why-study-title" style="color: #761e67">Why study a masters?</h2>
      <ul class="why-study-list">
        <li>Improve your career opportunities and salary potential</li>
        <li>Change your career direction and study a different field to your undergraduate studies</li>
        <li>Progress to study at a prestigious university with top researchers in your field</li>
        <li>Strive for a challenging degree at a top-ranking university</li>
        <li>
          Develop your academic skills or English language ability before starting your postgraduate degree
        </li>
        <li>Receive specialist support from tutors experienced in teaching international students</li>
      </ul>

      <h2 class="pathways-title" style="color: #761e67">Pathways to a postgraduate degree</h2>
      <p class="pathways-description">
        We offer a choice of subject routes depending on the degree you want to study. Visit the subject
        pathway pages below to find out what you will study and grades required for you to progress to your
        chosen degree.
      </p>

      <p class="additional-support">
        If you need additional English language support to get you to the level required for the masters, you
        can study one term of English language preparation.
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
</style>
