<template>
  <div class="section1">
    <h2 class="program-select-title" style="color: #761e67">Select Program Level</h2>
    <div class="program-selection">
      <button @click="selectProgram('bachelor')" :class="{ active: selectedProgram === 'bachelor' }">Bachelor's</button>
      <button @click="selectProgram('master')" :class="{ active: selectedProgram === 'master' }">Master's</button>
    </div>

    <div class="program-entry">
      <h2 class="entry-requirements-title" style="color: #761e67">Entry Requirements for {{ selectedProgram ===
        'bachelor' ? "Bachelor's" : "Master's" }} Programs</h2>
      <ul class="entry-requirements-list">
        <li v-if="selectedProgram === 'bachelor'">High school diploma or equivalent</li>
        <li v-if="selectedProgram === 'bachelor'">Minimum GPA of 3.0 (on a 4.0 scale) in undergraduate studies</li>
        <li v-if="selectedProgram === 'bachelor'">Satisfactory scores on standardized tests (e.g., SAT, ACT)</li>
        <li v-if="selectedProgram === 'bachelor'">Proficiency in English language (TOEFL, IELTS scores, or equivalent)
        </li>
        <li v-if="selectedProgram === 'bachelor'">Submission of required application materials</li>

        <li v-if="selectedProgram === 'master'">Bachelor's degree or equivalent</li>
        <li v-if="selectedProgram === 'master'">Minimum GPA of 3.0 (on a 4.0 scale) in undergraduate studies</li>
        <li v-if="selectedProgram === 'master'">Relevant work experience (if applicable)</li>
        <li v-if="selectedProgram === 'master'">Proficiency in English language (TOEFL, IELTS scores, or equivalent)
        </li>
        <li v-if="selectedProgram === 'master'">Submission of required application materials, including personal
          statement</li>
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

<script>
export default {
  data() {
    return {
      selectedProgram: 'bachelor', // Default selection
    };
  },
  methods: {
    selectProgram(program) {
      this.selectedProgram = program;
    },
  },
};
</script>

<style scoped>
.section1 {
  width: calc(70% - 40px);
  /* Adjust width for responsiveness */
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

.program-select-title {
  margin-bottom: 20px;
}

.program-selection {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.program-selection button {
  padding: 10px 20px;
  margin: 0 10px;
  border: 1px solid #761e67;
  border-radius: 5px;
  background: white;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.program-selection button.active {
  background: #761e67;
  color: white;
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
