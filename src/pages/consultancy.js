import React from "react";
import "./consultancy.css";

const Consultancy = () => {
 /* const services = [
    {
      title: "University Applications",
      description:
        "Guidance on choosing the right universities, preparing strong applications, and maximizing acceptance chances.",
      icon: "🎓",
    },
    {
      title: "Study Abroad Programs",
      description:
        "End-to-end support for admissions, visas, scholarships, and adapting to new academic environments.",
      icon: "🌍",
    },
    {
      title: "Career Counseling",
      description:
        "Personalized mentorship to align academic pathways with future career goals.",
      icon: "💼",
    },
    {
      title: "Exam Preparation",
      description:
        "Training and resources for SAT, ACT, GRE, GMAT, IELTS, and TOEFL to achieve top scores.",
      icon: "📘",
    },
    {
      title: "Scholarship Assistance",
      description:
        "Expert guidance in finding and applying for scholarships, grants, and funding opportunities.",
      icon: "💰",
    },
    {
      title: "Research Guidance",
      description:
        "Help with structuring research proposals, thesis preparation, and academic writing.",
      icon: "📝",
    },
  ]; */

  /*const process = [
    "Initial Consultation & Profile Evaluation",
    "Goal Setting and Personalized Roadmap",
    "Application & Exam Preparation Support",
    "Submission and Follow-Up Assistance",
    "Pre-Departure Guidance & Career Mentorship",
  ];

/*  const testimonials = [
    {
      name: "Ananya Gupta",
      feedback:
        "The consultancy guided me step-by-step for my master's application in the US. I received 3 admits with scholarships!",
    },
    {
      name: "Rohan Mehta",
      feedback:
        "Their SAT preparation plan and mentorship were amazing. I scored 1500 and got into my dream university.",
    },
    {
      name: "Sophia Khan",
      feedback:
        "The career counseling sessions gave me so much clarity about my academic path. Highly recommend them!",
    },
  ]; */

  return (
    <div className="consultancy-page">
      {/* Hero Section */}
      <section className="consultancy-hero">
        <div className="hero-content">
          <h1 className="hero-title">
          University Education <span className="highlight">Consultants</span> for
          Top Universities
          </h1>
          <p className="hero-subtitle">
            Empowering students with expert guidance for admissions, career
            planning, and global opportunities.
          </p>
         <a href="/contact"> <button className="cta-btn">Book a Free Consultation</button> </a>
        </div>
      </section>




 <section className="ucas-section">
      <div className="ucas-container">

    {/* Card 1 */}
    <article className="ucas-card">
      <h2>Apply for Universities through UCAS</h2>
      <p>
        The UK or the United Kingdom is one of the most popular choices among
        the students for study abroad programs all over the world. The nation
        offers a plethora of universities and diverse courses, most of which
        regularly feature in prestigious QS rankings. Many brilliant
        educational institutions have a legacy of over a hundred years as far
        as education and research is concerned.
      </p>
      <p>
        When it comes to studying in the UK, UCAS is a name that automatically
        garners attention. UCAS stands for Universities and Colleges Admissions
        Service and is a centralized system catering to the application process
        for admission in the educational institutions in the UK. Almost all the
        applicants have to go through the system and apply for Universities
        through UCAS. Most of the students don’t understand the admissions
        process and UCAS Application Process. This is where Sage Education comes
        into the picture. We offer all kinds of assistance, expert guidance and
        preparation for various standard exams for admissions in UK colleges and
        universities.
      </p>
    </article>

    {/* Card 2 */}
    <article className="ucas-card">
      <h2>How to Apply for Universities through UCAS</h2>
      <p>
        UCAS Application Process is easy and almost all the steps can be
        completed online. The steps are as follows:
      </p>
      <ul>
        <li>Research the courses and universities or colleges for them.</li>
        <li>Read the entry requirements for the courses and institutions.</li>
        <li>
          Search the internet or offline resources such as admission experts
          and study abroad experts for enquiring the career prospects and
          future of the courses and colleges chosen by you.
        </li>
        <li>
          Submit the details in the online application form and verify them
          for grammatical and factual errors.
        </li>
        <li>
          Complete the fee remissions and submit the application. Save the
          registration details and sign-in information for future usage.
        </li>
      </ul>
    </article>

    {/* Card 3 */}
    <article className="ucas-card">
      <h2>Things to Check after UCAS Application Submission</h2>
      <p>
        Once the UCAS Application Process is over, the following activities are done by the applicants:
      </p>
      <ul>
        <li>Take the English Proficiency Tests</li>
        <li>Apply for Visas</li>
        <li>Complete the transcript and documentary work</li>
        <li>Prepare for the interviews</li>
        <li>Prepare the letters of recommendation</li>
        <li>Finalise the courses, colleges and universities</li>
        <li>Track conservatoire applications and audition preparations</li>
        <li>Track UCAS Undergraduate Applications</li>
      </ul>
    </article>

    {/* Card 4 */}
    <article className="ucas-card">
      <h2>How Sage Education can help in Application Procedures</h2>
      <p>
        Sage Education is one of the leading UK education consultants in Dubai
        and tutoring institution for UK university admissions. We offer expert
        guidance, tutoring, exam preparation modules and also offer end-to-end
        support to all the students that aim for international education and
        career.
      </p>
      <p>
        The experts and tutors at Sage have impeccable experience and have
        helped thousands of students in realising their career and education
        goals. Offering consistent support and right advice at all the stages
        of admissions, Sage is one name that you can trust in all pursuits!
      </p>
    </article>

    {/* Card 5 */}
    <article className="ucas-card">
      <h2>How Does UCAS Work for International Students</h2>
      <p>
        For international admissions, the process is almost similar apart from
        some additional formalities:
      </p>
      <ul>
        <li>
          Applications can be made independently or via the help of an education
          consultant.
        </li>
        <li>
          Consultants understand the admission process and job trends, making
          it less daunting to choose courses and colleges.
        </li>
        <li>
          Many agencies are registered with UCAS and are authorised UCAS centres
          for authentic and updated information.
        </li>
        <li>
          UK education consultants can help craft a strong, compelling personal
          statement.
        </li>
      </ul>
    </article>

    {/* Card 6 */}
    <article className="ucas-card">
      <h2>How to Get Admissions in UK Universities</h2>
      <p>
        UK universities require international students to pass additional tests
        and exams to be eligible for admission.
      </p>
      <ul>
        <li>
          English proficiency tests such as IELTS and TOEFL with a valid score.
        </li>
        <li>
          Other standard exams such as GRE, SAT, UCAT, GMAT etc.
        </li>
        <li>
          Paperwork includes verification of educational, residential and
          financial credentials.
        </li>
        <li>
          Study visa, sponsorships, scholarships and application process steps.
        </li>
        <li>
          UCAS application process involvement and further requirements.
        </li>
      </ul>
    </article>
        {/* Card 7 */}
        <article className="ucas-card">
      <h2>Requirements to Study in the UK</h2>
      <ul>
        <li>A valid qualifying score in TOEFL, IELTS or any recognized English proficiency test</li>
        <li>A valid qualifying score in GRE, GMAT, SAT, UCAT etc.</li>
        <li>Application confirmation from UCAS and chosen university/college</li>
        <li>Recognized transcripts</li>
        <li>Student Visa</li>
        <li>Financial Statement</li>
        <li>Letter of Recommendation</li>
        <li>Paperwork for international students in the UK</li>
      </ul>
      <p>
        Many other steps are involved in the process. We offer the best guidance and
        support for all these and every step in the entire process.
      </p>
    </article>

    {/* Card 8 */}
    <article className="ucas-card">
      <h2>Best University Courses to Study in the UK</h2>
      <p>
        Find out the most popular university courses the UK offers. These courses are
        trending and highly relevant as per recent job trends. They open fantastic
        career avenues for international students. The experts at Sage Education help
        identify your true calling and choose the best course to kick-start a
        brilliant career.
      </p>
      <p>
        Best courses to study in the UK are as follows:
      </p>
      <ul>
        <li>Accounting & Finance</li>
        <li>Art & Design</li>
        <li>Business & Management Studies</li>
        <li>Civil Engineering</li>
        <li>Computer Science</li>
        <li>Aeronautical & Manufacturing Engineering</li>
        <li>Architecture</li>
        <li>Creative Writing</li>
        <li>Food Science</li>
        <li>Dentistry</li>
        <li>Economics</li>
        <li>Electrical & Electronic Engineering</li>
        <li>English</li>
        <li>Law</li>
        <li>Marketing</li>
        <li>Education</li>
        <li>Hospitality, Leisure, Recreation & Tourism</li>
        <li>Medicine</li>
        <li>Mechanical Engineering</li>
        <li>Psychology</li>
      </ul>
      <p>
        Sage Education is the most reputed UK education consultant in Dubai for
        university admissions. Our brilliant team has helped thousands of students
        secure admissions in top UK universities.
      </p>
    </article>

    {/* Card 9 */}
    <article className="ucas-card">
      <h2>Top Universities in the UK</h2>
      <p>
        The UK is home to some of the most brilliant educational institutions in the
        world, known for their culture, academic environment, technical expertise,
        and learning methodologies. Below are some of the best universities for
        international students:
      </p>
      <ul>
        <li>University of Cambridge</li>
        <li>University of Oxford</li>
        <li>University College London (UCL)</li>
        <li>Imperial College London</li>
        <li>University of Edinburgh</li>
        <li>King’s College London (KCL)</li>
        <li>University of Manchester</li>
        <li>London School of Economics and Political Science</li>
        <li>University of Bristol</li>
        <li>University of Warwick</li>
        <li>University of Glasgow</li>
        <li>University of Essex</li>
        <li>Anglia Ruskin University</li>
        <li>University of the Arts London</li>
        <li>University of Keele</li>
        <li>Aston University</li>
        <li>University of Bath</li>
        <li>Cardiff University</li>
      </ul>
    </article>


  </div>
</section>


      {/* Services *
      <section className="services">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="tutoring-section how-it-works">
        <div className="section-header">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Your journey to academic success in three simple steps
          </p>
        </div>

        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <div className="step-content">
              <h3 className="step-title">Initial Consultation & Profile Evaluation</h3>
              <p className="step-desc">
                Register and book your first free class with our expert tutor.
                Get a personalized assessment of your current level.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">Goal Setting and Personalized Roadmap</h3>
              <p className="step-desc">
                We create a personalized plan based on your learning goals, pace,
                and areas that need improvement.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Application & Exam Preparation Support</h3>
              <p className="step-desc">
                Regular tests, detailed feedback, and parent updates to track
                performance and celebrate achievements.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <div className="step-content">
              <h3 className="step-title">Submission and Follow-Up Assistance</h3>
              <p className="step-desc">
                We create a personalized plan based on your learning goals, pace,
                and areas that need improvement.
              </p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <div className="step-content">
              <h3 className="step-title">Pre-Departure Guidance & Career Mentorship</h3>
              <p className="step-desc">
                We create a personalized plan based on your learning goals, pace,
                and areas that need improvement.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* Testimonials }
      <section className="testimonials">
        <h2 className="section-title">What Students Say</h2>
        <div className="testimonial-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p className="feedback">“{t.feedback}”</p>
              <p className="student">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
