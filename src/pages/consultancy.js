import React from "react";
import "./consultancy.css";

const Consultancy = () => {
  const services = [
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
  ];

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
            Academic <span className="highlight">Consulting</span>
          </h1>
          <p className="hero-subtitle">
            Empowering students with expert guidance for admissions, career
            planning, and global opportunities.
          </p>
         <a href="/contact"> <button className="cta-btn">Book a Free Consultation</button> </a>
        </div>
      </section>

      {/* Services */}
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
