import { motion } from 'framer-motion';
import React from "react";
import "./consultancy.css";


const Consultancy = () => {

  return (
    <div className="consultancy-page">
      {/* Hero Section */}
      <section className="consultancy-hero" style={{backgroundImage: "url('/c.jpg')"}}>
        <div className="hero-content">
          <h1 className="hero-title">
          University Education <span className="highlight">counselling</span> for
          Top Universities
          </h1>
          <p className="hero-subtitle">
            Empowering students with expert guidance for admissions, career
            planning, and global opportunities.
          </p>
         <a href="/contact"> <button className="cta-btn">Book a Free counselling</button> </a>
        </div>
      </section>


      <section className="ceo-message section">
        <div className="container">
          <motion.div 
            className="ceo-message-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="ceo-text">
              <h2>Education Consultants</h2>
              <p className="ceo-message-text">
              Guidance from experienced professionals and expert counsellors is essential to finalize the stream to pursue or the higher education field to choose. Advises from the educational consultants will be pivotal in designing a student’s future. They will comprehend the flaws, strengths, and interests of the aspirant, and help accordingly. Instituted to enhance and prepare students to perform exceptionally well during various international competitive and entrance exams, and guide them to select the right higher education course, EngageHub Education Services has been successfully elevating the lives of students. The field of education witnesses constant changes, hence, an approach oriented to analyse the arena is vital to obtain the right insight and avoid precarious moves. EngageHub is one of the leading aggregators of education consultants providing overseas education consultancy services in the Middle East for the progress of the students and their bright future. Our handpicked professional tutors, educational counsellors, and consultants ensure that each student, who reaches out to us, succeeds in the path of life by choosing the right field of education and enrolment to the elite universities around the world.
              </p>
            </div>
            <div className="ceo-image">
              <div className="ceo-image-container">
                <img 
                  src="/founderspic.jpg" 
                  alt="CEO Speaking at Event" 
                  className="ceo-image-actual"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>




 <section className="ucas-section">
      <div className="ucas-container">

    {/* Card 1 */}
    <article className="ucas-card1">
      <h2>EngageHub Overseas Education Consultants</h2>
      <p>
        We are happy to find our students coming out with flying colours and conquering greater heights in life. To deliver the best to the students, we constantly monitor and improve upon our services with changes happening in the world of education. EngageHub has outperformed the competitors and adjudged as the best education consultants through unparalleled dedication and service. EngageHub provides admission consultation for top universities across the globe, including Stanford, Harvard, UCLA, and Cambridge, amongst others. The student-centric and result-focussed methodology adopted by EngageHub has been fruitful until today. And we have accomplished cent percent success since establishment. Our professional and experienced abroad education consultants have more than a decade of experience. They will identify the passion, ambition, and tastes of the students before advising them about the best course. Thereby, the aspirants can accomplish their long-cherished dream without much difficulty. EngageHub offers international education consultation for Bachelors, Masters, and Doctoral programs. The professional support will not only be limited to admission but also will extend during the course. The diligent and caring attitude from EngageHub will act as a guardian angel for you during the course. Contact EngageHub for education consultation in the UK, USA, Canada, Europe, and Asia. We offer a complete package commencing from the initial application to the conclusion. You can remain unconcerned about the admission and concentrate on your studies once you assign us with the task of admission. Being one of the leading education consultancy, we assure the best services for abroad education and other domestic education purposes.</p>
    </article>

    {/* Card 2 */}
    <article className="ucas-card2">
      <h2>Why EngageHub Education Consultants</h2>
      <p>
      EngageHub has an extensive experience in the field of overseas education consultation, online tutoring for subjects, and competitive exams. EngageHub plays an active role in preparing road map for students to study abroad. The major benefits of EngageHub education consultants range from the comprehensive and exclusive support services, help to select Universities, guidance is application and admission procedures, a lot more. Given below are the top reasons to choose EngageHub as your international education consultant. </p>
    </article>

    {/* Card 3 */}
    <article className="ucas-card3">
      <h2>Comprehensive Assistance </h2>
      <p>
      EngageHub extends comprehensive assistance in education consultation. When it comes to overseas education consultation, it begins with the selection of the right university and concludes in enrolment of the student in the University of his or her choice. </p>
    </article>

    {/* Card 4 */}
    <article className="ucas-card4">
      <h2>Thorough Analysis for Selection of the University </h2>
      <p>
      As an abroad education consultant, we do not just provide a list of universities. On the other hand, we will examine the student’s performance in various subjects, extracurricular activities, tastes in different fields and subjects, budget limitations, climatic options by the students, and similar aspects. A complete list of optional universities will be proposed to the student, from the best universities in the UAE, US, UK, Canada, Europe, and Asia. The apt university will be finalized post discussion with the students and parents.</p>
    </article>

    {/* Card 5 */}
    <article className="ucas-card5">
      <h2>Concerted Efforts to Obtain Admission </h2>
      <p>
      Obtaining admissions in the most sought-after universities is not an easy task. It necessitates concerted and calculated steps to narrate the eminence of the student and state why he or she deserves to be admitted. Our professionals will sit down to prepare a pen picture of the student after detailed and in-depth discussion sessions. The CVs, letters, narratives, recommendations, and interviews will illustrate the student’s unique qualities and will be instrumental in gaining admission</p>
    </article>

    {/* Card 6 */}
    <article className="ucas-card6">
      <h2>Guidance in Application Process</h2>
      <p>
        Each university and college has its specific application procedure. We will guide the students regarding the same and help the student to pursue the process without any confusion or errors. The timing of universities admission in the UK, USA, Canada, Europe, and Asia will differ. The professionals empanelled at EngageHub will aid the students to prepare a calendar with dates of tests, interviews, results etcetera, which will enable the student to monitor the progress. In addition to the above-mentioned, EngageHub will assist the students in interview preparation, CV creation, and formatting. And will provide you unlimited email access to clarify doubts at every step of the admission process. Right from home education to abroad education, EngageHub a one-stop-solution for all your educational requirements. Renowned as one of the popular education consultants and one of the most reputed international education consultants, EngageHub offers a platform that links students with universities, helping them select a right decision with minimal effort. Besides overseas educational consultation, we deliver both online and classroom coaching for UCAT, SAT, ACT, GMAT and GRE. The online and classroom tuitions for Maths, Biology, Physics, Chemistry, English, Business, Psycology and Economics, by exceptionally qualified tutors from around the world, will strengthen you to attend any exam with confidence. </p>
      </article>
  </div>
</section>


      <section className="tutoring-section how-it-works">
  <div className="section-header">
    <h2 className="section-title">How It Works</h2>
    <p className="section-subtitle">
      Your journey to academic success in three simple steps
    </p>
  </div>

  <div className="steps-container">
    {[
      {
        num: "1",
        title: "Initial counselling & Profile Evaluation",
        desc: "Register and book your first free class with our expert tutor. Get a personalized assessment of your current level.",
      },
      {
        num: "2",
        title: "Goal Setting and Personalized Roadmap",
        desc: "We create a personalized plan based on your learning goals, pace, and areas that need improvement.",
      },
      {
        num: "3",
        title: "Application and Exam Preparation Support",
        desc: "Regular tests, detailed feedback, and parent updates to track performance and celebrate achievements.",
      },
      {
        num: "4",
        title: "Submission and Follow-Up Assistance",
        desc: "We create a personalized plan based on your learning goals, pace, and areas that need improvement.",
      },
      {
        num: "5",
        title: "Pre-Departure Guidance and Career Mentorship",
        desc: "We create a personalized plan based on your learning goals, pace, and areas that need improvement.",
      },
    ].map((step, i) => (
      <motion.div
        className="step-card"
        key={i}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        viewport={{ once: true }}
      >
        <div className="step-number">{step.num}</div>
        <h3 className="step-title">{step.title}</h3>
        <p className="step-desc">{step.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


      <section className="cta-section">
        <h2>Ready to Begin Your Journey?</h2>
        <p>
          Get expert guidance tailored to your academic and career aspirations.
        </p>
        <a href="/contact">
        <button className="cta-btn">Get Started Today</button>
        </a>
      </section>
    </div>
  );
};

export default Consultancy;
