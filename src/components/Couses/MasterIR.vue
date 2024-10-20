<template>

    <div class="section2" v-if="activeItemId === 1">
        <h2 class="program-title" style="color: #761e67">About the MA International Relations Degree Programme</h2>
        <p class="program-description">
            Our MA in International Relations aims to provide students with an in-depth understanding of the forces
            which shape global politics, combining both theory and real-life applications. Students also have the
            opportunity to do an internship that puts International Relations into practice.
        </p>
        <p class="program-description">
            The programme will enable you to tackle the big issues facing global decision-makers, from war to poverty,
            from security to diplomacy, while also examining the role of the global media in these areas.
        </p>
        <p class="program-description">
            MA International Relations will help you prepare for further graduate study or for a career in government,
            public administration, humanitarian aid work, diplomacy, or policy formation. The programme’s emphasis on
            combining sharp analytical thinking with real-world applications is invaluable for any future career,
            producing graduates ready to face the key challenges of the 21st century.
        </p>

        <h2 class="international-opportunities-title" style="color: #761e67">International Opportunities</h2>
        <p class="program-description">
            Students may be invited to participate in visits to key international institutions, including the
            International Criminal Court in The Hague, the EU headquarters in Brussels, Berlin, and an important Peace
            Studies institute in Norway.
        </p>
        <p class="program-description">
            You will have the opportunity to study key issues such as foreign policy decision-making, conflict
            management, human rights enforcement, risk and change in diplomacy, environmental sustainability, global
            media politics, global inequality, and development, among many other themes.
        </p>

        <h2 class="richmond-offering-title" style="color: #761e67">The Prieston American University London Offering</h2>
        <p class="program-description">
            Prieston’s Centre for the Study of the State, Power & Globalisation is an innovative international research
            hub. It offers students the chance to conduct research alongside faculty and international experts. The
            University also supports a social enterprise, Professors Without Borders, where students can work closely
            with this exciting initiative.
        </p>
        <p class="program-description">
            We offer a rigorous curriculum encompassing theoretical and practical developments in the dynamic field of
            global politics, set in vibrant London. Our international mix of students helps graduates develop vital
            interpersonal and intercultural communication skills.
        </p>

        <h2 class="top-reasons-title" style="color: #761e67">Top Reasons to Study International Relations</h2>
        <ul class="reasons-list">
            <li>Great work experience – opportunity to do an internship as part of your degree in locations such as the
                House of Commons and US Congress</li>
            <li>Chance to become part of Prieston’s international research community, developing close working
                relationships with faculty</li>
            <li>See International Relations in practice with the opportunity to visit international institutions like
                the EU Headquarters in Brussels and The Hague in the Netherlands</li>
            <li>Be awarded a US and UK accredited degree upon successful completion of the course that will be valuable
                to future employers</li>
            <li>Smaller, more intimate classes ensuring close contact with faculty</li>
        </ul>
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
            can be subject to change. For more detailed information on the programme specification, please find more
            details <a href="#" class="pdf-link">here</a>.
        </p>


    </div>
    <div v-if="activeItemId === 3">

        <ul class="entry-requirements-list">
            <li> UK first Degree minimum second class honours (2.2)</li>
            <li>US Degree with a minimum CGPA of between 2.5 and 3.0</li>
            <li>or international equivalent</li>

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
                <td>MA International Relations Degree Programme(per year)</td>
                <td>£9,450</td>
                <td>£15,000</td>
            </tr>

        </table>

    </div>
    <div v-if="activeItemId === 5">
        <p>We offer career support and advice through our Careers & Internships Office that will assist and guide you in
            your study choices to make sure you stand out from the crowd when you graduate. Through internships you will
            gain business acumen, beneficial work experiences and transferable skills which will give you a competitive
            advantage in a fast-paced working environment. Work while you study across 5 continents through our partners
            Connect123 and CRCC Asia with destinations in Spain, Argentina, South Africa, China, Japan, Vietnam and
            Australia.
        </p>
        <h2 class="international-opportunities-title" style="color: #761e67">MA International Relations Career Paths
        </h2>
        <p>
            Recent alumni have found employment in government institutions, international charities and aid
            organisations, as well as across the private sector. Others have gone on to pursue PhD research in fields
            related to their MA. The MA equips students with the skills and profile to succeed in an increasingly global
            world.
        </p>

        <h2 class="international-opportunities-title" style="color: #761e67">Optional Accredited Internships</h2>
        <h3>London or International</h3>

        <p>The Internship Programme at Prieston integrates industry knowledge with real working experience. Students
            will be challenged to relate course projects to the workplace, make contacts which may prove valuable to
            their future employment prospects, and gain confidence in their capabilities, creativity and communication
            skills. Internships are designed to be both demanding and rewarding. The internship will provide an
            opportunity to better understand the marketplace, using the skills learned on courses in a real-world
            setting, as students produce an assessed record of their experiences.

            A broad education of this kind equips graduates for a wide range of careers internationally, while enabling
            them to develop specialist expertise in areas of particular interest.
        </p>
        <h2 class="international-opportunities-title" style="color: #761e67">USA (additional cost)</h2>

        <p>
            Students interested in gaining work experience in the USA during their last semester and wishing for help to
            secure a placement can be linked up to Prieston’s partner GCC (Global Career Center).

            This organization will offer students comprehensive career training, find them a placement with a hosting
            company related to their field of studies in the USA and provide all the necessary support to students with
            their J1 visa application.

            This optional internship will incur an additional cost of $3500 (£2600) which will cover: the J1 visa
            application, site visit and insurance costs ($1820), GCC’s continuous training as well as finding a
            placement.

            The initial cost to start the coaching and training part of the programme is $1,000 and the rest of the fee
            is only paid once the internship has been confirmed by the host organisation/company and validated by
            RAIUL’s International Internship Coordinator.

            An official certificate of completion will be awarded to every student having successfully completed the
            programme.

            Visit our Careers & Internships webpage for more details on the Host Organisations and examples of Work
            projects.
        </p>
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