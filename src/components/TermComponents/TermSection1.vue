<template>
  <div class="section1">
    <table class="programs-table">
      <tr>
        <th style="background-color: #761e67">Program</th>
        <th style="background-color: #761e67">Duration</th>
        <th style="background-color: #761e67">Term Dates</th>
      </tr>
      <tr>
        <td>Master of Science in Computer Science</td>
        <td>2 years</td>
        <td>Fall: Sep - Dec<br />Spring: Jan - Apr<br />Summer: May - Aug</td>
      </tr>
      <tr>
        <td>Master of Business Administration (MBA)</td>
        <td>18 months</td>
        <td>Fall: Sep - Dec<br />Spring: Jan - Apr</td>
      </tr>
      <tr>
        <td>Bachelor in CSE</td>
        <td>4 years</td>
        <td>Fall: Sep - Dec<br />Spring: Jan - Apr<br />Summer: May - Aug</td>
      </tr>
      <tr>
        <td>Bachelor in EEE</td>
        <td>3 years</td>
        <td>Fall: Sep - Dec<br />Spring: Jan - Apr</td>
      </tr>
      <tr>
        <td>Master of Business Administration (MBA)</td>
        <td>18 months</td>
        <td>Fall: Sep - Dec<br />Spring: Jan - Apr</td>
      </tr>
      <tr>
        <td>Master of Commerce</td>
        <td>2 years</td>
        <td>Fall: Sep - Dec<br />Spring: Jan - Apr<br />Summer: May - Aug</td>
      </tr>
    </table>
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

.header {
  background-color: #7b4993;
  color: white;
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
  .programs-table {
    width: max-content; /* Adjust width for horizontal scrolling */
    border-collapse: collapse;
    white-space: nowrap; /* Prevent text wrapping */
  }
  .section1 {
    width: calc(100% - 40px);
    overflow-x: auto;
  }
}
</style>
