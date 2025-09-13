import React from "react";
import "./tutoring.css";
import { Link } from "react-router-dom";

export default function Tutoring() {
  // Arrays for dynamic rendering
  const features = [
    {
      title: "Expert Tutors",
      desc: "Learn from highly qualified teachers with years of experience.",
      icon: "👨‍🏫",
      color: "#3b82f6"
    },
    {
      title: "Flexible Learning",
      desc: "Online and offline classes that suit your schedule.",
      icon: "⏰",
      color: "#10b981"
    },
    {
      title: "Small Batches",
      desc: "Get individual attention with personalized learning plans.",
      icon: "👥",
      color: "#f59e0b"
    },
    {
      title: "Proven Success",
      desc: "Our students achieve 90%+ results consistently.",
      icon: "🏆",
      color: "#8b5cf6"
    },
  ];

  const subjects = [
    {
      name: "Mathematics",
      desc: "Master problem-solving, algebra, geometry, and advanced calculus.",
      icon: "🔢",
      level: "All Levels",
      duration: "60 mins"
    },
    {
      name: "Physics",
      desc: "Understand core concepts with real-life examples and experiments.",
      icon: "⚡",
      level: "High School+",
      duration: "60 mins"
    },
    {
      name: "Chemistry",
      desc: "Learn organic, inorganic, and physical chemistry with clarity.",
      icon: "🧪",
      level: "High School+",
      duration: "60 mins"
    },
    {
      name: "Biology",
      desc: "Explore genetics, ecology, and human physiology with ease.",
      icon: "🧬",
      level: "All Levels",
      duration: "60 mins"
    },
    {
      name: "English",
      desc: "Improve grammar, vocabulary, writing, and literature skills.",
      icon: "📚",
      level: "All Levels",
      duration: "45 mins"
    },
    {
      name: "Computer Science",
      desc: "Learn coding, algorithms, data structures, and programming.",
      icon: "💻",
      level: "Beginner+",
      duration: "90 mins"
    },
    
  ];

  const examPrep = [
    { 
      name: "SAT", 
      desc: "Achieve top scores with proven test strategies.",
      icon: "📝",
      duration: "8-12 weeks",
      scoreImprovement: "200+ points",
      link: "/sat"
    },
    { 
      name: "ACT", 
      desc: "Boost your composite score with focused prep.",
      icon: "✍️",
      duration: "6-10 weeks",
      scoreImprovement: "4+ points",
      link:"/act"

    },
    { 
      name: "GMAT", 
      desc: "Master quant & verbal for MBA admissions.",
      icon: "💼",
      duration: "12-16 weeks",
      scoreImprovement: "100+ points",
      link: "/gmat"
    },
    { 
      name: "GRE", 
      desc: "Crack graduate entrance tests with expert guidance.",
      icon: "🎓",
      duration: "10-14 weeks",
      scoreImprovement: "15+ points",
      link: "/gre"
    },
    { 
      name: "IGCSE", 
      desc: "Score high in English proficiency exams.",
      icon: "🌍",
      duration: "6-8 weeks",
      scoreImprovement: "1.5+ bands",
      link: "/igcse"
    },
    { 
      name: "AP", 
      desc: "India's toughest exams made simple.",
      icon: "🏥",
      duration: "1-2 years",
      scoreImprovement: "Top 1%",
      link: "ap"
    },
    { 
        name: "MYP", 
        desc: "India's toughest exams made simple.",
        icon: "🏥",
        duration: "1-2 years",
        scoreImprovement: "Top 1%",
        link:"myp"
    },
    { 
        name: "ALEVEL", 
        desc: "India's toughest exams made simple.",
        icon: "🏥",
        duration: "1-2 years",
        scoreImprovement: "Top 1%",
        link:"/alevel"
    },
    { 
        name: "AMC", 
        desc: "India's toughest exams made simple.",
        icon: "🏥",
        duration: "1-2 years",
        scoreImprovement: "Top 1%",
        link:"/amc"
      },
  ];

  /*const testimonials = [
    {
      text: "The tutors explain concepts so clearly. I scored my best marks ever! The personalized approach really made a difference.",
      name: "Riya Sharma",
      grade: "Grade 10",
      subject: "Mathematics",
      improvement: "85% → 96%",
      avatar: "👧"
    },
    {
      text: "Thanks to their SAT prep, I got into my dream college abroad. The practice tests were exactly like the real exam.",
      name: "Arjun Patel",
      grade: "Grade 12",
      subject: "SAT Prep",
      improvement: "1200 → 1480",
      avatar: "👦"
    },
    {
      text: "Personalized mentoring and motivation really boosted my confidence. Now I love studying physics!",
      name: "Meera Khan",
      grade: "Class 12",
      subject: "Physics",
      improvement: "72% → 91%",
      avatar: "👩"
    },
    {
      text: "The chemistry sessions were amazing! Complex reactions became so easy to understand with their teaching method.",
      name: "Rohit Singh",
      grade: "Grade 11",
      subject: "Chemistry",
      improvement: "68% → 89%",
      avatar: "👨"
    }
  ]; 

  const faqs = [
    {
      q: "Do you provide online classes?",
      a: "Yes, we provide both online and offline classes with flexible schedules. Our online platform includes interactive whiteboards, screen sharing, and recorded sessions for review."
    },
    {
      q: "How are tutors selected?",
      a: "All tutors go through a rigorous selection process including subject expertise tests, teaching demonstrations, and background verification. Only the top 5% of applicants are selected."
    },
    {
      q: "Can I book a free trial?",
      a: "Yes, you can book a free trial class before enrolling. This includes a diagnostic assessment and personalized learning plan recommendation."
    },
    {
      q: "What is your refund policy?",
      a: "We offer a 100% satisfaction guarantee. If you're not happy within the first week, we provide a full refund, no questions asked."
    },
    {
      q: "How do you track student progress?",
      a: "We use advanced analytics to track progress, provide regular assessments, detailed reports for parents, and adjust teaching methods based on individual learning patterns."
    },
    {
      q: "What are the class timings?",
      a: "We offer flexible timings from 6 AM to 11 PM (UAE time) to accommodate students from different time zones and schedules."
    }
  ];

 /* const stats = [
    {
      number: "5000+",
      label: "Happy Students",
      description: "Across 25+ countries",
      icon: "🎓"
    },
    {
      number: "95%",
      label: "Success Rate",
      description: "Students achieve their goals",
      icon: "📊"
    },
    {
      number: "200+",
      label: "Expert Tutors",
      description: "PhD & Master's qualified",
      icon: "👨‍🏫"
    },
    {
      number: "4.9/5",
      label: "Student Rating",
      description: "Based on 2000+ reviews",
      icon: "⭐"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "AED 150",
      period: "per session",
      features: [
        "1-on-1 tutoring",
        "Flexible scheduling",
        "Progress tracking",
        "Study materials"
      ],
      popular: false
    },
    {
      name: "Premium",
      price: "AED 500",
      period: "per month",
      features: [
        "4 sessions per month",
        "Priority scheduling",
        "Exam prep materials",
        "Parent reports",
        "24/7 doubt support"
      ],
      popular: true
    },
    {
      name: "Elite",
      price: "AED 900",
      period: "per month",
      features: [
        "8 sessions per month",
        "Dedicated tutor",
        "Custom study plan",
        "Mock tests",
        "College counseling",
        "Guaranteed results"
      ],
      popular: false
    }
  ]; */

  return (
    <div className="tutoring-wrapper">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Unlock Your <span className="highlight">Academic Potential</span> 🚀
          </h1>
          <p className="hero-subtitle">
            Interactive lessons, personalized mentoring, and expert tutors – all in one place.
            Join thousands of students who transformed their grades with our proven teaching methods.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Students</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">95%</span>
              <span className="stat-label">Success Rate</span>
            </div>
            <div className="hero-stat">
              <span className="stat-number">4.9★</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
          <a href="/contact">
          <button className="cta-btn primary">Schedule Consultancy</button>
          </a>
        </div>
      </section>

      {/* Statistics Section }
      <section className="tutoring-section stats-section">
        <div className="section-header">
          <h2 className="section-title">Our Impact by Numbers</h2>
          <p className="section-subtitle">
            See how we've transformed academic journeys worldwide
          </p>
        </div>

        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="tutoring-section why-choose">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            Discover what makes our tutoring program exceptional
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" style={{'--feature-color': feature.color}}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Subjects Section */}
      <section className="tutoring-section subjects">
        <div className="section-header">
          <h2 className="section-title">Subjects We Cover</h2>
          <p className="section-subtitle">
            Comprehensive tutoring across all major academic subjects
          </p>
        </div>

        <div className="subject-grid">
          {subjects.map((subject, index) => (
            <div key={index} className="subject-card">
              <div className="subject-header">
                <div className="subject-icon">{subject.icon}</div>
                <div className="subject-info">
                  <h3 className="subject-name">{subject.name}</h3>
                  <div className="subject-meta">
                    <span className="subject-level">{subject.level}</span>
                    <span className="subject-duration">{subject.duration}</span>
                  </div>
                </div>
              </div>
              <p className="subject-desc">{subject.desc}</p>
              <button className="subject-btn">Start Learning</button>
            </div>
          ))}
        </div>
      </section>

      {/* Exam Prep Section */}
      <section className="tutoring-section exam-prep">
        <div className="section-header">
          <h2 className="section-title">Exam Preparation Programs</h2>
          <p className="section-subtitle">
            Specialized coaching for standardized tests and competitive exams
          </p>
        </div>

        <div className="exam-grid">
          {examPrep.map((exam, index) => (
            <div key={index} className="exam-card">
              <div className="exam-icon">{exam.icon}</div>
              <h3 className="exam-name">{exam.name}</h3>
              <p className="exam-desc">{exam.desc}</p>
              <div className="exam-details">
                <div className="exam-detail">
                  <span className="detail-label">Duration:</span>
                  <span className="detail-value">{exam.duration}</span>
                </div>
                <div className="exam-detail">
                  <span className="detail-label">Avg. Improvement:</span>
                  <span className="detail-value">{exam.scoreImprovement}</span>
                </div>
              </div>
              
                <Link to={exam.link} className="exam-btn">Enroll Now</Link>
            </div>
          ))}
        </div>
      </section>

      {/* How it works Section */}
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
              <h3 className="step-title">Book Free Trial</h3>
              <p className="step-desc">
                Register and book your first free class with our expert tutor.
                Get a personalized assessment of your current level.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <div className="step-content">
              <h3 className="step-title">Get Learning Plan</h3>
              <p className="step-desc">
                We create a personalized plan based on your learning goals, pace,
                and areas that need improvement.
              </p>
            </div>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <div className="step-content">
              <h3 className="step-title">Track Progress</h3>
              <p className="step-desc">
                Regular tests, detailed feedback, and parent updates to track
                performance and celebrate achievements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section }
      <section className="tutoring-section testimonials">
        <div className="section-header">
          <h2 className="section-title">What Students Say</h2>
          <p className="section-subtitle">
            Real success stories from our amazing students
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-details">
                    {testimonial.grade} • {testimonial.subject}
                  </div>
                  <div className="testimonial-improvement">
                    📈 {testimonial.improvement}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section }
      <section className="tutoring-section pricing">
        <div className="section-header">
          <h2 className="section-title">Choose Your Plan</h2>
          <p className="section-subtitle">
            Flexible pricing options to fit your learning needs
          </p>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              <div className="pricing-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">
                  <span className="price">{plan.price}</span>
                  <span className="period">/{plan.period}</span>
                </div>
              </div>
              <div className="pricing-features">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <span className="feature-check">✓</span>
                    <span className="feature-text">{feature}</span>
                  </div>
                ))}
              </div>
              <button className={`pricing-btn ${plan.popular ? 'primary' : 'secondary'}`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section }
      <section className="tutoring-section faqs">
        <div className="section-header">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Get answers to common questions about our tutoring services
          </p>
        </div>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h4 className="faq-question">{faq.q}</h4>
              <p className="faq-answer">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Start Your Learning Journey Today ✨</h2>
          <p className="cta-description">
            Join 5000+ students who improved their grades with us. 
            Get your free trial class and see the difference expert tutoring makes.
          </p>
          <div className="cta-buttons">
           <a href="/contact"> <button className="cta-btn primary">Get Started Now</button></a>
            {/*<button className="cta-btn secondary">Schedule Consultation</button>*/}
          </div>
         {/*} <div className="contact-info">
            <p className="contact-text">Need help choosing? Call us at</p>
            <a href="tel:+971552728339" className="contact-link">+971 55 272 8339</a>
          </div> */}
        </div>
      </section>
    </div>
  );
}