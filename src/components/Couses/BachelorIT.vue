<template>

    <div class="section2" v-if="activeItemId === 1">
        <h1>About the BSc (Hons) Computer Science Degree Programme</h1>
        <p>Ever wondered how Amazon uses artificial intelligence to ship things before you even think about buying? Or
            how Uber has harnessed data analytics to become the world’s biggest taxi company? If you are fascinated by
            questions like these and more, our BSc in Computer Science is the perfect degree for you.</p>

        <p>This degree programme will provide you with a strong foundation in the critical areas of computer science,
            with core modules in such areas as programming, cyber security, and artificial intelligence, while also
            giving you the opportunity to tailor the degree to your own strengths, interests, and career aspirations
            through specialised electives covering areas like data mining, human-computer interaction, and games
            technology. All of which are highly attractive to potential employers. You will conduct your own senior
            research project supervised by a member of our academic staff, giving you the opportunity to specialise in a
            particular area of interest.</p>

        <p>Computer Science graduates with up-to-the-minute skills and abilities are in high demand across a diverse
            range of industries. You will have many career options available to you after this degree, such as
            programming, software engineering, user interface design, data analysis, and general IT-related employment
            in the private or public sector. This programme is also a pathway into Masters-level study in a variety of
            computing disciplines.</p>

        <p>Most of the programme is taught using popular in-demand programming languages like Java, Python, and C#, with
            HTML/CSS used for web design and Javascript (e.g. P5.js and Node.js) taught for problem solving and web
            design.</p>

        <p>The tools and software on this programme include use of shell terminals such as Bash, code editors (such as
            VS Code), IDEs (such as IntelliJ), MongoDB, MySQL, GIT, and Adobe XD (for HCI).</p>

        <h2>Why Study BSc (Hons) Computer Science?</h2>
        <ul>
            <li>Learn within the flexible Liberal Arts framework. Choose your own path – find out more about the Liberal
                Arts.</li>
            <li>Get ahead in the graduate jobs market and increase your earning potential. Graduate roles in computer
                science often have relatively high starting salaries.</li>
            <li>Our strong focus on the sustainable and ethical implications of computer science will help you make
                informed choices about innovation and development as a future computer scientist.</li>
            <li>Gain invaluable knowledge in highly current, industry topics from artificial intelligence to cyber
                security.</li>
            <li>Combine Computer Science as your major with a minor in a subject of your choice, which could be
                International Business, Marketing, or Psychology, opening up multiple career choices when you graduate.
            </li>
            <li>Capitalise on internship opportunities created by our excellent industry contacts, making our students
                highly employable.</li>
            <li>Gain a global education by studying abroad through Prieston's international partner organisations –
                choose from a wide range of destinations from the US to Australia, Thailand to Spain.</li>
        </ul>

        <p>At Prieston, we aim to provide a unique experience. Studying the Computer Science degree with us, in a
            well-equipped IT lab at our campus building in Chiswick Park, you will gain cutting-edge technical skills
            and transferable knowledge that are in high demand from industry.</p>

        <p>With emerging tech that influences everything from healthcare to agriculture, you could be at the heart of
            the latest innovations. By the time you graduate as a skilled computer scientist, you’ll have had the
            opportunity to develop the skills that employers want, as well as the connections and experience to stand
            out in the jobs market.</p>

        <h2>Distinctive Features</h2>
        <ul>
            <li>Sustainable and ethical computing is an increasingly hot topic and this programme will develop your
                knowledge and skills so you can play a key role in developing sustainable and ethical Information and
                Communications Technology (ICT) strategies. You will assess the environmental impact of computer science
                and investigate green technologies, while researching and designing practical alternative strategies to
                implement sustainable computing within a legal and ethical framework.</li>
            <li>Our strong emphasis on the liberal arts tradition means that you will gain an excellent foundation of
                knowledge across the humanities, arts, and sciences as part of your degree in Computer Science. These
                courses are designed to give you work and study skills, support your critical thinking, problem-solving,
                communications, and citizenship. Employers and graduate schools are actively seeking interdisciplinary
                knowledge, and this is built into your programme of study.</li>
            <li>We also offer diversity as you study a global curriculum in London taught by international faculty with
                students from across the world. Our relatively small class sizes combined with a personal academic
                advisor for every student mean we offer a more personal approach to teaching with plenty of pastoral
                care.</li>
            <li>Widen your skills and knowledge with an internship that counts towards your degree and creates more
                career opportunities.</li>
        </ul>

    </div>

    <div v-if="activeItemId === 2">

        <div class="course-details">
            <h2>What you will study</h2>
            <p>Prieston is the only university in the UK where the degree programmes are based on the US educational
                approach which is a four year pathway. Every undergraduate degree student will study our Liberal Arts
                programme alongside their Major.</p>

            <p>The entry requirements for all undergraduate programmes at Prieston are the same, regardless of your
                chosen Major.</p>

            <p><a href="#">Find out more about the Core Curriculum &gt;&gt;</a></p>

            <h3>YEAR 1</h3>
            <h4>Courses</h4>
            <ul>
                <li>DGT 3100 Fundamentals of Programming</li>
                <li>DGT 3101 Foundations of Computer Science</li>
                <li>MTH 3111 Functions with Applications</li>
                <li>GEP 3105 Tools for Change</li>
                <li>GEP 3180 Research & Writing I</li>
                <li>Plus one of the following:</li>
                <ul>
                    <li>GEP 3150 Visual Thinking</li>
                    <li>GEP 3170 Narratives of Change</li>
                </ul>
            </ul>

            <h3>YEAR 2</h3>
            <h4>Courses</h4>
            <ul>
                <li>DGT 4101 Introduction to Programming</li>
                <li>DGT 4102 Operating Systems</li>
                <li>DGT 4103 Data & Algorithms</li>
                <li>DGT 4104 Front End Web Design</li>
                <li>GEP 4105 Social Change in Practice</li>
                <li>GEP 4180 Research & Writing II</li>
                <li>MTH 4120 Probability & Statistics I</li>
                <li>MTH 4140 Maths of Argument and Reasoning</li>
                <li>Plus two electives</li>
            </ul>

            <h3>YEAR 3</h3>
            <h4>Courses</h4>
            <ul>
                <li>DGT 5101 Programming for Applications</li>
                <li>DGT 5102 Sustainable & Ethical Computing</li>
                <li>DGT 5103 Computer Networks</li>
                <li>DGT 5210 Cyber Security</li>
                <li>DGT 5104 Systems Analysis & Design</li>
                <li>Plus one of the following:</li>
                <ul>
                    <li>DGT 5105 Advanced Computer Applications for Business</li>
                    <li>DGT 5106 Data Science</li>
                    <li>DGT 5107 Database Systems</li>
                </ul>
                <li>Plus one of the following:</li>
                <ul>
                    <li>GEP 5101 Service Learning: Digital Collaboration</li>
                    <li>GEP 5102 Service Learning: Leadership in a Changing World</li>
                    <li>GEP 5103 Service Learning: Environment and Society</li>
                    <li>GEP 5104 Service Learning: Global Citizenship and Migration</li>
                </ul>
            </ul>

            <h3>YEAR 4</h3>
            <h4>Courses</h4>
            <ul>
                <li>DGT 6101 Project Management for IT</li>
                <li>DGT 6296 Senior Project 1</li>
                <li>DGT 6297 Senior Project 2</li>
                <li>And 4 of the following:</li>
                <ul>
                    <li>DGT 6103 Artificial Intelligence</li>
                    <li>DGT 6102 Data Mining</li>
                    <li>DGT 6104 Computer Graphics</li>
                    <li>DGT 6105 Games Technology</li>
                    <li>DGT 6106 Human Computer Interaction</li>
                    <li>PSY 6103 Brain & Cognition</li>
                </ul>
                <li>Integrated Internship</li>
                <ul>
                    <li>DGT 6962 World Internship in Computer Science</li>
                    <li>DGT 6972 Internship in Computer Science</li>
                </ul>
                <li>Plus one elective</li>
            </ul>

            <p>Computer Science with Combined Studies, BSc (Hons) 2024-25 Specification Document (PDF)</p>

            <p>The information above is intended as an example only, featuring course details for the current year of
                study. In addition to the courses outlined above, there are open electives in each year. Course content
                and delivery can be subject to change. The number of courses taken by each student may also vary,
                depending on a range of factors such as transfer credits and academic performance.</p>
        </div>



    </div>
    <div v-if="activeItemId === 3">

        <div class="entry-requirements">
            <h2>Academic Entry Requirements</h2>
            <p>Below is information on our entry requirements for both 4 years and 4 years with foundation programmes.
            </p>

            <h3>4 YEARS</h3>
            <ul>
                <li>A Levels: 96 UCAS points</li>
                <li>US High School Diploma (or equivalent): 2.5 GPA minimum (on 4.0 scale)</li>
                <li>International Baccalaureate: 24 IB points (year 1)</li>
                <li>BTEC National Diploma: MMM</li>
            </ul>

            <h3>4 YEARS including summer semester(s) (Extended Degree) (Full-time)</h3>
            <ul>
                <li>GCSEs: 5 at grade C or above / grade 4-9 (or equivalent)</li>

            </ul>

            <h3>English Language Entry Requirements</h3>
            <p>For more information on English Language Requirements for your country visit our <a href="#">How to
                    Apply</a> webpage.</p>

            <h3>BSc (Hons) Computer Science including summer semester(s) (Extended Degree)</h3>
            <p>There are many reasons why taking this programme with extended programme option could be the ideal
                choice; you may not have the exact subjects or grades at A level to meet the entry requirements, you may
                have tried other options such as apprenticeship and want to change direction or have been living abroad.
            </p>

            <p>Whatever your starting point, studying this programme with extended programme option offers you a great
                opportunity to gain both a UK and US degree and start the adventure of a lifetime, studying with us in
                the world’s top student city.</p>

            <h4>This is what our extended programme option can offer you:</h4>
            <ul>
                <li>Start this programme with lower entry qualifications, see below</li>
                <li>A four year, full-time degree programme with an extra summer semester in Year 1 included for free,
                    so you can study at your own pace</li>
                <li>Timetabled English and study skills classes to enhance your knowledge and skills</li>
                <li>Great student support including a Personal Academic Advisor, with help on housing, health and
                    wellbeing, financial guidance and careers advice from our award-winning Student Affairs team</li>
            </ul>
        </div>


    </div>
    <div v-if="activeItemId === 4">
        <table class="programs-table">
            <tr>
                <th>Programme</th>
                <th>UK</th>
                <th>EU/INT/US</th>
            </tr>
            <tr>
                <td>Master In International Relationship(per year)</td>
                <td>£9,250</td>
                <td>£15,645</td>
            </tr>

        </table>

    </div>
    <div v-if="activeItemId === 5">
        <div class="career-opportunities">
            <h2>Personal Development and Career Opportunities</h2>
            <p>The University offers personal development seminars, leadership opportunities and access to work
                experience, volunteering, and internships. There is also a dedicated, personalised service for
                assistance with CV writing, interview preparation tips, and much more.</p>

            <p>Throughout your studies, you will have the opportunity to build links with industry experts and Prieston
                alumni, connecting you to a vast and influential worldwide network.</p>

            <h3>Internships</h3>
            <p>We offer career support and advice through our Careers & Internships Office that will assist and guide
                you in your study choices to make sure you stand out from the crowd when you graduate. Whether you are
                interested in gaining work experience in London or internationally, we will be here to help you find the
                best possible opportunities.</p>

            <p>Through internships, you will gain business acumen, beneficial work experiences, and transferable skills
                which will give you a competitive advantage in a fast-paced working environment.</p>

            <p>Work while you study across 5 continents through our partners <strong>Connect123</strong> and
                <strong>CRCC Asia</strong> with destinations in Spain, Argentina, South Africa, China, Japan, Vietnam,
                and Australia.
            </p>

            <h3>BSc (Hons) Computer Science Graduate Destinations</h3>
            <p>Below is a list of where some of the BSc (Hons) Computer Science graduates of this degree programme have
                gone on to work:</p>

            <ul>
                <li>Barons Court Theatre</li>
                <li>Boston Ballet</li>
                <li>Christies</li>
                <li>Vogue Magazine Graduate School</li>
                <li>V&A Museum</li>
            </ul>
        </div>


    </div>
    <div v-if="activeItemId === 6" class="postgraduate-application-info">
        <div class="how-to-apply">
            <h2>How to Apply for BSc (Hons) Computer Science</h2>
            <p>You can apply for the BSc (Hons) Computer Science Degree in one of three ways:</p>
            <ul>
                <li>Apply directly through us</li>
                <li>Apply through UCAS</li>
                <li>For US students, apply via the Common Application ($50.00)</li>
            </ul>

            <h3>Required Information for Application</h3>
            <p>In order to submit your application, you will need the following:</p>
            <ul>
                <li>Details of your education history, including the dates of all exams/assessments</li>
                <li>The email address of your referee, or an electronic copy of your academic reference</li>
                <li>A personal statement (can be emailed as a Word or PDF document, or completed online)</li>
                <li>An electronic copy of your in-process or completed high school transcript and graduation certificate
                </li>
            </ul>

            <section class="call-to-action">
                <p>Ready to take the next step in your academic journey? <a href="/apply?level=bachelor"
                        class="cta-button">Start Your Application Now</a></p>
            </section>

            <h3>When to Apply</h3>
            <p>We encourage you to complete your application as early as possible, even if you are still completing your
                undergraduate studies. If you're awaiting final results, you may be offered a conditional place based on
                successful completion of qualifications.</p>

            <p>If you would like your application to be considered for a Prieston bursary, early application is strongly
                recommended.</p>
        </div>

    </div>
</template>

<script setup lang="ts">

defineProps<{
    activeItemId?: number
}>()

</script>

<style scoped>
.section2 {
    width: calc(70% - 40px);
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f7fafc;
}

.section2 h2 {
    font-size: 24px;
    margin-bottom: 10px;
}

.section2 p {
    margin-bottom: 10px;
}

.reasons-list {
    list-style-type: disc;
    padding-left: 20px;
}

.reasons-list li {
    margin-bottom: 10px;
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

@media screen and (max-width: 767px) {
    .section2 {
        width: 100%;
    }
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    margin: 20px;
}

h2 {
    color: #333;
    font-size: 24px;
}

h3 {
    color: #666;
    font-size: 20px;
}

p {
    color: #444;
    margin-bottom: 10px;
}

ul {
    margin-left: 20px;
    margin-bottom: 20px;
}

ul li {
    margin-bottom: 8px;
}

.courses,
.electives {
    margin-bottom: 20px;
}

.note {
    font-size: 14px;
    color: #555;
}

.pdf-link {
    font-weight: bold;
    color: #007BFF;
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

.postgraduate-application-info {

    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    line-height: 1.6;
    color: #333;
}

h2 {
    color: #761E67;
    border-bottom: 2px solid #003366;
    padding-bottom: 10px;
    margin-bottom: 20px;
}

h3 {
    color: #761E67;
    margin-top: 20px;
}

.application-steps,
.important-notes {
    margin-bottom: 30px;
}

ul,
ol {
    padding-left: 20px;
}

li {
    margin-bottom: 10px;
}

.info-link,
.cta-button {
    color: #761E67;
    text-decoration: none;
    font-weight: bold;
}

.info-link:hover,
.cta-button:hover {
    text-decoration: underline;
}

.cta-button {
    display: inline-block;
    background-color: #761E67;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.cta-button:hover {
    background-color: #003366;
    text-decoration: none;
}

.call-to-action {
    background-color: #f0f5ff;
    padding: 20px;
    border-radius: 5px;
    text-align: center;
}
</style>