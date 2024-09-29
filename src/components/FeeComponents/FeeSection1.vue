<template>
  <div class="section1">
    <table class="programs-table">
      <tr>
        <th>Program</th>
        <th>Duration</th>
        <th>Fees</th>
      </tr>
      <tr>
        <td>Master of Science in Computer Science</td>
        <td>2 years</td>
        <td>$20,000 per year</td>
      </tr>
      <tr>
        <td>Master of Business Administration (MBA)</td>
        <td>18 months</td>
        <td>$25,000 per year</td>
      </tr>
      <tr>
        <td>Bachelor in CSE</td>
        <td>4 years</td>
        <td>$19,0000 per year</td>
      </tr>
      <tr>
        <td>Bachelor in EEE</td>
        <td>3 years</td>
        <td>$250,000 per year</td>
      </tr>
      <tr>
        <td>Master of Business Administration (MBA)</td>
        <td>18 months</td>
        <td>$25,000 per year</td>
      </tr>
      <tr>
        <td>Master of Commerce</td>
        <td>2 years</td>
        <td>$17,000 per year</td>
      </tr>
    </table>
    <div class="accordion">
      <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="1.2rem" height="1.2rem" viewBox="0 0 24 24">
          <path fill="black" fill-rule="evenodd"
            d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464m2.96 6.056a.75.75 0 0 1 1.056-.096l.277.23c.605.504 1.12.933 1.476 1.328c.379.42.674.901.674 1.518s-.295 1.099-.674 1.518c-.356.395-.871.824-1.476 1.328l-.277.23a.75.75 0 1 1-.96-1.152l.234-.195c.659-.55 1.09-.91 1.366-1.216c.262-.29.287-.427.287-.513c0-.086-.025-.222-.287-.513c-.277-.306-.707-.667-1.366-1.216l-.234-.195a.75.75 0 0 1-.096-1.056M17.75 15a.75.75 0 0 1-.75.75h-5a.75.75 0 0 1 0-1.5h5a.75.75 0 0 1 .75.75"
            clip-rule="evenodd" />
        </svg>
        <h5 style="color: #7b4993">scholarships</h5>
      </div>
      <div class="accordion-item">
        <input type="checkbox" id="accordion1" />
        <label for="accordion1" class="accordion-item-title"><span class="icon"></span>How to get full fund?</label>
        <div class="accordion-item-desc">
          The University of Prieston offers a wide range of scholarships for merited student . Submit your
          application today
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.section1 {
  width: calc(70% - 40px);
  /* Adjust width for responsiveness */
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.programs-table {
  width: 100%;
  border-collapse: collapse;
}

.programs-table th,
.programs-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.programs-table th {
  background-color: #f2f2f2;
}

.programs-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

.accordion {
  display: flex;
  flex-direction: column;
  font-family: 'Sora', sans-serif;
  max-width: 991px;
  min-width: 320px;
  margin: 50px auto;
  padding: 0 50px;
}

.accordion h1 {
  font-size: 32px;
  text-align: center;
  background-color: red;
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
  animation: fadeIn 0.3s ease;
  /* Apply animation */
}

.accordion-item input[type='checkbox']:checked~.accordion-item-title {
  background-color: #006388;
}

.accordion-item input[type='checkbox'] {
  position: absolute;
  height: 0;
  width: 0;
  opacity: 0;
}

.accordion-item input[type='checkbox']:checked~.accordion-item-desc {
  display: block;
}

.accordion-item input[type='checkbox']:checked~.accordion-item-title .icon:after {
  content: '-';
  font-size: 20px;
}

.accordion-item input[type='checkbox']~.accordion-item-title .icon:after {
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

  .programs-table {
    width: max-content;
    /* Adjust width for horizontal scrolling */
    border-collapse: collapse;
    white-space: nowrap;
    /* Prevent text wrapping */
  }

  .section1 {
    width: calc(100% - 40px);
    overflow-x: auto;
  }
}
</style>
