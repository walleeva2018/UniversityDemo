<template>
  <div class="section1">
    <div class="program-entry">
      <h2 class="entry-requirements-title" style="color: #761e67">Entry Requirements for Programs</h2>
      <ul class="entry-requirements-list">
        <li>High school diploma or equivalent</li>
        <li>Minimum GPA of 3.0 (on a 4.0 scale) in undergraduate studies</li>
        <li>Satisfactory scores on standardized tests (e.g., SAT, ACT)</li>
        <li>Proficiency in English language (TOEFL, IELTS scores, or equivalent)</li>
        <li>Submission of required application materials</li>
      </ul>

      <h2 class="why-choose-title" style="color: #761e67">Why Choose Our Programs?</h2>
      <ul class="why-choose-list">
        <li>Academic excellence and rigorous curriculum</li>
        <li>Opportunities for hands-on learning and research</li>
        <li>Experienced faculty and supportive learning environment</li>
        <li>Networking opportunities and career development support</li>
        <li>Flexible study options to fit your schedule</li>
        <li>Diverse range of programs tailored to different career paths</li>
      </ul>
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

.program-entry {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.entry-requirements-title,
.why-choose-title {
  color: #333;
  font-size: 24px;
  margin-top: 20px;
}

.entry-requirements-list,
.why-choose-list {
  list-style-type: disc;
  padding-left: 20px;
}

.entry-requirements-list li,
.why-choose-list li {
  margin-bottom: 10px;
}
</style>
