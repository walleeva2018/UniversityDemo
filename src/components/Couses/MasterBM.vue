<template>

    <div class="section2" v-if="activeItemId === 1">
        <section>
            <h2>About the MSc International Business Management Programme</h2>
            <p>
                Across the globe, organisations are seeking dynamic managers with the skills to work anywhere in the
                world. Kick-start a career in business with our new MSc International Business Management, aimed at
                students who want to gain specialist skills, in-depth business knowledge, and a global mindset to
                succeed.
            </p>
            <p>
                The main emphasis of this 16-month programme is on the development of leadership and management skills
                through critical awareness and strategic thinking about the dynamic world of business.
            </p>
            <p>
                It’s also a highly topical programme. Our MSc will give you an understanding of contemporary management
                issues in an ever-changing business environment and the chance to apply your knowledge to real-life
                management challenges, through opportunities like an internship to extend your practical skills and
                experience.
            </p>
            <p>
                This programme prepares you for a variety of business roles in a global context, whether you’re
                interested in entrepreneurship, global innovation, corporate strategy, consultancy, or multinational
                management. Not only that, you will also gain both a UK and US degree, creating more opportunities upon
                graduation.
            </p>

            <h3>Programme Overview</h3>
            <p>
                The MSc International Business Management programme will equip you with an understanding of
                international business organisations, their cultures, and the changing global environment in which they
                operate. Our faculty and students come from diverse global backgrounds, making this MSc a truly
                international experience.
            </p>
            <p>
                The programme begins with the study of contemporary management ideas and practices, covering topics like
                Business Communication Skills, crucial for personal development and career progression. Advanced English
                for Business Studies will further extend communication skills for both English and non-English speakers.
            </p>

            <h3>Programme Structure</h3>
            <ul>
                <li>
                    <strong>Semester 1 (Fall starters):</strong> Courses such as Business Communication Skills, Managing
                    Across Cultures, and Quantitative Analysis for Decision Makers enhance critical thinking and
                    teamwork skills.
                </li>
                <li>
                    <strong>Semester 2 (Fall starters):</strong> Courses include International Business, Leadership
                    Development, Sustainable Business Strategies, and two finance courses exploring international trade,
                    global financial markets, and the psychology of financial decision-making.
                </li>
                <li>
                    <strong>Semester 3:</strong> Focuses on research, operations management, and marketing international
                    products and services.
                </li>
                <li>
                    <strong>Semester 4:</strong> Offers a choice between an internship with a dissertation or an
                    extended research project.
                </li>
            </ul>

            <h3>Why Study MSc International Business Management?</h3>
            <ul>
                <li>Gain a thorough grounding in strategic business management with real-life applications.</li>
                <li>
                    Ideal for non-native English speakers with a course in Advanced English for Business Studies, also
                    beneficial for native English speakers.
                </li>
                <li>
                    Supportive learning environment with a high-contact, interactive teaching approach.
                </li>
                <li>
                    Learn from faculty with global industry experience and guest speakers providing business insights.
                </li>
                <li>
                    Full-time programme over 16 months, offering an extended learning experience.
                </li>
                <li>Optional internships provide practical industry experience to enhance career opportunities upon
                    graduation.</li>
            </ul>
        </section>

    </div>

    <div v-if="activeItemId === 2">

        <p>
            The structure of the MA gives you the flexibility to design your own degree. Taught modules are completed in
            the first two semesters of the degree. Within the four electives listed below you will study such themes as
            Contemporary Theories of Global Politics, Politics of The Global South, Issues in Global Development,
            Diplomacy and US Foreign Policy. The topics may change in a given semester. In your third semester, you will
            complete your research dissertation and, should you choose to do one, also your internship.
        </p>

        <h3>Themes</h3>
        <p>As part of your MA programme, you will study a broad array of themes and topics in International Relations
            and Global Politics including:</p>

        <ul>
            <li>Global development and development practices</li>
            <li>Global structures of inequality</li>
            <li>International conflict and war</li>
            <li>The management of conflict and security issues</li>
            <li>Environmental sustainability</li>
            <li>Concepts and practical skills of foreign policy decision-making</li>
            <li>Risk and change in diplomacy</li>
            <li>The causes of insurgency and strategies for counter-insurgency</li>
            <li>The promotion and enforcement of human rights</li>
        </ul>

        <p>Students enroll in four core modules and select two electives. In your third semester, you will complete your
            research dissertation and, should you choose to do one, also your internship.</p>

        <div class="courses">
            <h3>Courses</h3>
            <ul>
                <li>INR 7100 Research Methodology</li>
                <li>INR 7101 International Relations Theory & Concepts</li>
                <li>INR 7107 Sustainable Development & Global Political Economy</li>
                <li>INR 7109 International Conflict, War and Peace</li>
            </ul>
        </div>

        <div class="electives">
            <h3>Electives</h3>
            <ul>
                <li>INR 7306 Insurgency, Terrorism and Civil War</li>
                <li>INR 7108 Media, Digital Diplomacy & International Organisation</li>
                <li>INR 7428 Human Rights and Global Politics</li>
                <li>INR 7113 Diplomacy, Decision-Making and Foreign Policy</li>
            </ul>
            <p>Plus EITHER:</p>
            <ul>
                <li>INR 7902 Internship</li>
                <li>INR 7500 Thesis Research</li>
            </ul>
            <p>OR:</p>
            <ul>
                <li>INR 7550 Extended Thesis Research (Students not completing the internship complete an extended
                    thesis of 12/60 credits)</li>
            </ul>
        </div>

        <p class="note">
            International Relations, (MA) 2024-25 Specification Document (PDF)<br>
            The information above is intended as an example only, featuring course details for the current year of
            study. In addition to the courses outlined above, there may be open electives. Course content and delivery
            can be subject to change.
        </p>


    </div>
    <div v-if="activeItemId === 3">

        <ul class="entry-requirements-list">
            <li> IELTS (Academic) – 6.0 overall with minimum of 5.5 in Reading, Listening, Speaking and Writing</li>
            <li>TOEFL iBT (we do not accept Home Edition) – 79 overall with 17 in Listening, 18 in Reading, 17 in
                Writing, 20 in Speaking</li>
            <li>Pearson PTE – 55 overall with a minimum of 51 in each component</li>
            <li>Oxford ELLT – B2+ overall with a minimum of B2 in each component</li>

        </ul>

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
                <td>£11,280</td>
                <td>£16,275</td>
            </tr>

        </table>

    </div>
    <div v-if="activeItemId === 5">
        <div>
            <h2>Career Support and Internships</h2>
            <p>We offer career support and advice through our Careers & Internships Office that will assist and guide
                you in your study choices to make sure you stand out from the crowd when you graduate. Through
                internships, you will gain business acumen, beneficial work experiences, and transferable skills that
                will give you a competitive advantage in a fast-paced working environment.</p>
            <p>Work while you study across 5 continents through our partners <strong>Connect123</strong> and
                <strong>CRCC Asia</strong> with destinations in Spain, Argentina, South Africa, China, Japan, Vietnam,
                and Australia.
            </p>

            <h3>MSc International Business Management Career Paths</h3>
            <p>Our graduates have joined prestigious organizations such as:</p>
            <ul>
                <li>American Express</li>
                <li>BP</li>
                <li>Citroen Algeria</li>
                <li>Coca-Cola Servicios de Colombia</li>
                <li>Credit Suisse</li>
                <li>Glencore India Pvt Ltd</li>
                <li>Laura Ashley Foundation</li>
                <li>Merrill Lynch</li>
                <li>Royal Bank of Scotland</li>
                <li>Standard Chartered Bank</li>
                <li>UBS</li>
                <li>United Nations</li>
            </ul>

            <h3>Further Education</h3>
            <p>Many of our graduates pursue further education at leading institutions, including:</p>
            <ul>
                <li>PhD, Parsons School of Design – New York</li>
                <li>Central St Martins -UAL</li>
                <li>London Business School</li>
                <li>London School of Economics (LSE)</li>
            </ul>

            <h3>Optional Accredited Internships</h3>
            <p>Available in London or internationally, the Internship Programme at Prieston integrates industry
                knowledge with real working experience. Students will be challenged to relate course projects to the
                workplace, make valuable contacts, and gain confidence in their capabilities, creativity, and
                communication skills.</p>
            <p>Internships are designed to be both demanding and rewarding, offering an opportunity to better understand
                the marketplace while applying learned skills in a real-world setting. Students will produce an assessed
                record of their experiences.</p>

            <h3>USA Internship (additional cost)</h3>
            <p>Students interested in gaining work experience in the USA during their last semester and seeking help to
                secure a placement can connect with Prieston’s partner <strong>GCC (Global Career Center)</strong>.</p>
            <p>This organization provides comprehensive career training, placement with a hosting company related to the
                student’s field of study, and full support with the J1 visa application. The optional USA internship
                incurs an additional cost of $3,500 (£2,600), covering:</p>
            <ul>
                <li>J1 visa application, site visit, and insurance costs ($1,820)</li>
                <li>GCC’s continuous training and placement assistance</li>
            </ul>
            <p>The initial cost to start the coaching and training part of the program is $1,000, with the remaining fee
                payable only after the internship is confirmed and validated by Prieston’s International Internship
                Coordinator.</p>
            <p>Upon successful completion of the programme, students will receive an official certificate.</p>

            <p>Visit our <a href="https://www.example.com">Careers & Internships webpage</a> for more details on host
                organisations and examples of work projects.</p>
        </div>

    </div>
    <div v-if="activeItemId === 6" class="postgraduate-application-info">
        <h2>Postgraduate Application Process</h2>

        <section class="application-steps">
            <h3>How to Apply</h3>
            <p>To begin your journey towards postgraduate study, please follow these steps:</p>
            <ol>

                <ul>
                    <li>Entry Requirements</li>
                    <li>Admissions Processes</li>
                    <li>Required Documentation</li>
                </ul>
                <li>Complete our online application form, accessible through the How to Apply page.</li>
            </ol>
        </section>

        <section class="important-notes">
            <h3>Important Information</h3>
            <ul>
                <li>While most of our postgraduate programs do not have strict application deadlines, we strongly
                    recommend applying early to:</li>
                <ul>
                    <li>Secure your place in your desired program</li>
                    <li>Allow ample time for visa processing (for international students)</li>
                    <li>Organize any necessary sponsorship or funding</li>
                </ul>
                <li>Applications are reviewed on a rolling basis, and popular programs may fill up quickly.</li>
            </ul>
        </section>

        <section class="call-to-action">
            <p>Ready to take the next step in your academic journey? <a href="/apply?level=master"
                    class="cta-button">Start Your Application Now</a></p>
        </section>
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