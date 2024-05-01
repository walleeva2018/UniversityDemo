<template>
  <div class="section1">
    <div class="masters-program">
      <h2 class="program-title" style="color: #761e67">
        What is the PhD Programme at the University of Prieston?
      </h2>
      <p class="program-description">
        Our PhD programme at the University of Prieston is a comprehensive research-oriented program designed
        to cultivate advanced scholarly skills and expertise in your chosen field. It offers a structured yet
        flexible curriculum that allows for in-depth exploration and original contributions to knowledge.
      </p>

      <h2 class="why-study-title" style="color: #761e67">Why Pursue a PhD at the University of Prieston?</h2>
      <ul class="why-study-list">
        <li>Advance your career prospects and academic credentials</li>
        <li>Engage in cutting-edge research under the guidance of renowned faculty</li>
        <li>Contribute to the advancement of knowledge in your field through original research</li>
        <li>Access state-of-the-art facilities and resources to support your research endeavors</li>
        <li>Join a vibrant academic community committed to excellence and innovation</li>
        <li>Receive personalized mentorship and support throughout your doctoral journey</li>
      </ul>

      <h2 class="pathways-title" style="color: #761e67">Research Areas and Specializations</h2>
      <p class="pathways-description">
        Our PhD programme offers a wide range of research areas and specializations across various
        disciplines, including but not limited to humanities, social sciences, natural sciences, engineering,
        and business. Explore our faculty profiles and research centers to discover potential areas of study.
      </p>

      <p class="additional-support" style="color: #761e67">
        For those seeking additional guidance or information about our PhD programme, our admissions office
        and academic advisors are available to assist you. Feel free to reach out to us for personalized
        support and guidance.
      </p>
    </div>
    <div class="accordion-item">
      <input type="checkbox" id="accordion1" />
      <label for="accordion1" class="accordion-item-title">
        <span class="icon"></span>What programs does the University of Prieston offer for PhD students?
      </label>
      <div class="accordion-item-desc">
        The University of Prieston offers a diverse range of PhD programs across various disciplines,
        providing opportunities for advanced research and scholarly exploration. Visit our website to explore
        our PhD offerings and research areas.
      </div>
    </div>

    <div class="accordion-item">
      <input type="checkbox" id="accordion2" />
      <label for="accordion2" class="accordion-item-title">
        <span class="icon"></span>What research opportunities are available for PhD students at the University
        of Prieston?
      </label>
      <div class="accordion-item-desc">
        At the University of Prieston, PhD students have access to a rich array of research opportunities,
        including interdisciplinary collaborations, participation in research projects, and access to
        state-of-the-art research facilities. Explore our research centers and faculty expertise to find
        research opportunities aligned with your interests and goals.
      </div>
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

.accordion-item {
  margin-top: 16px;
  border: 1px solid #fcfcfc;
  border-radius: 6px;
  background: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.accordion-item .accordion-item-title {
  position: relative;
  margin: 0;
  display: flex;
  width: 100%;
  font-size: 15px;
  cursor: pointer;
  justify-content: space-between;
  flex-direction: row-reverse;
  padding: 14px 20px;
  box-sizing: border-box;
  align-items: center;
  background-color: #e5eff3;
}

.accordion-item .accordion-item-desc {
  display: none;
  font-size: 14px;
  line-height: 22px;
  font-weight: 300;
  color: #444;
  border-top: 1px dashed #ddd;
  padding: 10px 20px 20px;
  box-sizing: border-box;
  animation: fadeIn 0.3s ease; /* Apply animation */
}

.accordion-item input[type='checkbox']:checked ~ .accordion-item-title {
  background-color: #006388;
}
.accordion-item input[type='checkbox'] {
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
}

.accordion-item input[type='checkbox']:checked ~ .accordion-item-desc {
  display: block;
}

.accordion-item input[type='checkbox']:checked ~ .accordion-item-title .icon:after {
  content: '-';
  font-size: 20px;
}

.accordion-item input[type='checkbox'] ~ .accordion-item-title .icon:after {
  content: '+';
  font-size: 20px;
}

.accordion-item:first-child {
  margin-top: 0;
}

.accordion-item .icon {
  margin-left: 14px;
}

/* Animation */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media screen and (max-width: 767px) {
  .accordion {
    padding: 0 16px;
  }
  .accordion h1 {
    font-size: 22px;
  }
}
</style>
