import React from 'react';
import './research.css';

const Research = () => {
  const researchBenefits = [
    {
      number: "1",
      title: "Shows Intellectual Curiosity",
      description: "Research demonstrates genuine interest in learning and exploring new ideas beyond standard coursework.",
      icon: "🧠"
    },
    {
      number: "2", 
      title: "Adds Originality to the Application",
      description: "It sets students apart and highlights creativity, showing admissions committees something unique.",
      icon: "✨"
    },
    {
      number: "3",
      title: "Demonstrates Academic Rigor", 
      description: "Top universities value challenging work that showcases a student's ability to handle complex projects.",
      icon: "🎯"
    },
    {
      number: "4",
      title: "Builds a Cohesive Narrative",
      description: "Research helps tie together a student's academic goals and creates a compelling story for applications.",
      icon: "📝"
    }
  ];

  const researchTypes = [
    {
      icon: "🔬",
      field: "Science",
      description: "Laboratory research, data analysis, and scientific methodology",
      color: "#3b82f6"
    },
    {
      icon: "📚", 
      field: "Humanities",
      description: "Historical analysis, literary criticism, and cultural studies",
      color: "#8b5cf6"
    },
    {
      icon: "💼",
      field: "Business", 
      description: "Market research, case studies, and economic analysis",
      color: "#10b981"
    },
    {
      icon: "🎨",
      field: "Art",
      description: "Creative projects, artistic analysis, and cultural research",
      color: "#f59e0b"
    }
  ];

  const researchSteps = [
    {
      step: 1,
      title: "Choose a Research Topic",
      description: "Identify a subject area that interests you and has scope for new insights or improvements.",
      tips: ["Pick something you're passionate about", "Ensure resources are available", "Consider real-world impact"],
      duration: "1-2 weeks"
    },
    {
      step: 2,
      title: "Literature Review",
      description: "Survey existing research works, journals, articles, and credible sources to understand the current state.",
      tips: ["Use Google Scholar and academic databases", "Summarize main findings", "Identify research gaps"],
      duration: "3-4 weeks"
    },
    {
      step: 3,
      title: "Methodology Design",
      description: "Decide on research methods: qualitative, quantitative, or mixed approaches.",
      tips: ["Pick the right method for your question", "Define clear variables", "Plan data collection carefully"],
      duration: "2-3 weeks"
    },
    {
      step: 4,
      title: "Data Collection & Analysis",
      description: "Gather the data and analyze them with statistical or thematic tools.",
      tips: ["Maintain data accuracy", "Use appropriate analysis tools", "Create meaningful visualizations"],
      duration: "6-8 weeks"
    },
    {
      step: 5,
      title: "Drafting & Publishing",
      description: "Write, peer review, revise, and aim for publication or presentation.",
      tips: ["Follow academic formatting", "Get feedback from mentors", "Consider conference presentations"],
      duration: "4-6 weeks"
    }
  ];

  const successStories = [
    {
      name: "Sarah Ahmed",
      university: "Harvard University",
      project: "Impact of Social Media on Teen Mental Health",
      outcome: "Published in Journal of Adolescent Health",
      quote: "My research project was the highlight of my application. It showed my genuine interest in psychology and my ability to conduct meaningful research."
    },
    {
      name: "Mohammed Ali",
      university: "MIT",
      project: "AI-Powered Traffic Management System",
      outcome: "Won Regional Science Fair, Filed Patent",
      quote: "The research experience taught me more than any textbook could. It prepared me for the rigorous academic environment at MIT."
    },
    {
      name: "Priya Sharma",
      university: "Oxford University",
      project: "Cultural Preservation Through Digital Archives",
      outcome: "Presented at International Heritage Conference",
      quote: "My research project on cultural preservation became my passport to Oxford. It demonstrated my passion for preserving our heritage."
    }
  ];

  const researchOpportunities = [
    {
      title: "Climate Change Impact Study",
      type: "Environmental Science",
      description: "Analyze local environmental data to understand climate change effects in the UAE region. Perfect for students interested in environmental science and data analysis.",
      duration: "8 months",
      level: "Intermediate",
      spots: "5 students"
    },
    {
      title: "Digital Learning Effectiveness",
      type: "Education Technology",
      description: "Research the effectiveness of digital learning platforms among high school students. Involves survey design, data collection, and statistical analysis.",
      duration: "6 months",
      level: "Beginner",
      spots: "8 students"
    },
    {
      title: "Cultural Heritage Preservation",
      type: "Digital Humanities",
      description: "Document and digitize local cultural practices using modern technology. Combines anthropology, technology, and creative presentation methods.",
      duration: "10 months",
      level: "Advanced",
      spots: "3 students"
    },
    {
      title: "Sustainable Urban Planning",
      type: "Architecture & Planning",
      description: "Design innovative solutions for sustainable urban development in rapidly growing cities. Focus on green infrastructure and smart city technologies.",
      duration: "12 months",
      level: "Advanced",
      spots: "4 students"
    }
  ];

  const faqItems = [
    {
      question: "How long should a research project take?",
      answer: "A quality research project typically takes 6-12 months, depending on complexity. We recommend starting early in high school to allow time for multiple iterations and improvements."
    },
    {
      question: "Do I need laboratory access for science research?",
      answer: "Not necessarily! Many successful research projects involve data analysis, literature reviews, theoretical work, or community-based studies. We help you find appropriate research methods based on available resources."
    },
    {
      question: "Can research projects be published?",
      answer: "Yes! High-quality student research can be published in student journals, presented at conferences, or submitted to science fairs. We guide students through the publication process."
    },
    {
      question: "How much does research mentorship cost?",
      answer: "Our research mentorship programs start from AED 2,500/month and vary based on project complexity and duration. We offer flexible payment plans and package deals for long-term projects."
    },
    {
      question: "What if I don't have a research background?",
      answer: "No prior research experience is required! Our mentorship program is designed to guide students from complete beginners to conducting professional-level research. We provide comprehensive training and support."
    }
  ];

 /* const statistics = [
    {
      number: "85%",
      label: "Higher Acceptance Rate",
      description: "Students with research experience",
      icon: "📊"
    },
    {
      number: "3x",
      label: "More Scholarship Offers", 
      description: "Compared to students without research",
      icon: "🏆"
    },
    {
      number: "92%",
      label: "Student Satisfaction",
      description: "Rate their research experience as valuable",
      icon: "⭐"
    },
    {
      number: "200+",
      label: "Projects Completed",
      description: "Successful research projects guided",
      icon: "🎓"
    }
  ]; */

  return (
    <div className="research-container">
      {/* Hero Section */}
      <section className="research-hero">
        <div className="research-hero-content">
          <h1 className="research-hero-title">
            <span className="research-highlight">Research Projects</span> That Transform Applications
          </h1>
          <p className="research-hero-subtitle">
            💡 Whether it's science, humanities, business, or art – research highlights your academic depth and commitment.
          </p>
          <div className="research-hero-highlight">
            <p className="research-hero-text">
              🌍 For top US & UK universities, a strong research project can make your application truly stand out!
            </p>
          </div>
          <a href='/contact'>
          <button className="research-cta-button">
            Start Your Research Journey
          </button>
          </a>
        </div>
      </section>

      {/* Research Impact Statistics }
      <section className="research-section research-statistics">
        <div className="research-section-header">
          <h2 className="research-section-title">Research Impact by Numbers</h2>
          <p className="research-section-subtitle">
            See how research transforms college applications
          </p>
        </div>

        <div className="research-stats-grid">
          {statistics.map((stat, index) => (
            <div key={index} className="research-stat-card">
              <div className="research-stat-icon">{stat.icon}</div>
              <div className="research-stat-number">{stat.number}</div>
              <div className="research-stat-label">{stat.label}</div>
              <div className="research-stat-description">{stat.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Research Matters */}
      <section className="research-section research-benefits">
        <div className="research-section-header">
          <h2 className="research-section-title">Why Research Projects Matter in College Admissions</h2>
          <p className="research-section-subtitle">
            Research tells admissions officers that you think beyond the classroom
          </p>
        </div>

        <div className="research-benefits-grid">
          {researchBenefits.map((benefit, index) => (
            <div key={index} className="research-benefit-card">
              <div className="research-benefit-icon">{benefit.icon}</div>
              <div className="research-benefit-number">{benefit.number}</div>
              <h3 className="research-benefit-title">{benefit.title}</h3>
              <p className="research-benefit-description">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Fields */}
      <section className="research-section research-fields">
        <div className="research-section-header">
          <h2 className="research-section-title">Research Across All Fields</h2>
          <p className="research-section-subtitle">
            Explore opportunities in your area of interest
          </p>
        </div>

        <div className="research-fields-grid">
          {researchTypes.map((type, index) => (
            <div key={index} className="research-field-card" style={{'--field-color': type.color}}>
              <div className="research-field-icon">{type.icon}</div>
              <h3 className="research-field-title">{type.field}</h3>
              <p className="research-field-description">{type.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Research Process */}
      <section className="research-section research-process">
        <div className="research-section-header">
          <h2 className="research-section-title">5-Step Research Process</h2>
          <p className="research-section-subtitle">
            A structured approach to conducting impactful research
          </p>
        </div>

        <div className="research-process-timeline">
          {researchSteps.map((step, index) => (
            <div key={index} className="research-step-card">
              <div className="research-step-number">{step.step}</div>
              <div className="research-step-content">
                <div className="research-step-header">
                  <h3 className="research-step-title">{step.title}</h3>
                  <span className="research-step-duration">{step.duration}</span>
                </div>
                <p className="research-step-description">{step.description}</p>
                <div className="research-step-tips">
                  <strong>Pro Tips:</strong>
                  <ul>
                    {step.tips.map((tip, idx) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Current Research Opportunities }
      <section className="research-section research-opportunities">
        <div className="research-section-header">
          <h2 className="research-section-title">Current Research Opportunities</h2>
          <p className="research-section-subtitle">
            Join ongoing research projects or start your own
          </p>
        </div>

        <div className="research-opportunities-grid">
          {researchOpportunities.map((opportunity, index) => (
            <div key={index} className="research-opportunity-card">
              <div className="research-opportunity-header">
                <h3 className="research-opportunity-title">{opportunity.title}</h3>
                <span className="research-opportunity-type">{opportunity.type}</span>
              </div>
              <p className="research-opportunity-description">
                {opportunity.description}
              </p>
              <div className="research-opportunity-details">
                <div className="research-opportunity-detail">
                  <span className="research-opportunity-label">Duration:</span>
                  <span className="research-opportunity-value">{opportunity.duration}</span>
                </div>
                <div className="research-opportunity-detail">
                  <span className="research-opportunity-label">Level:</span>
                  <span className="research-opportunity-value">{opportunity.level}</span>
                </div>
                <div className="research-opportunity-detail">
                  <span className="research-opportunity-label">Available Spots:</span>
                  <span className="research-opportunity-value">{opportunity.spots}</span>
                </div>
              </div>
              <button className="research-opportunity-button">Apply Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories }
      <section className="research-section research-success-stories">
        <div className="research-section-header">
          <h2 className="research-section-title">Student Success Stories</h2>
          <p className="research-section-subtitle">
            See how research projects transformed their academic journey
          </p>
        </div>

        <div className="research-stories-grid">
          {successStories.map((story, index) => (
            <div key={index} className="research-story-card">
              <div className="research-story-header">
                <h3 className="research-story-name">{story.name}</h3>
                <div className="research-story-university">{story.university}</div>
              </div>
              <div className="research-story-project">
                <strong>Project:</strong> {story.project}
              </div>
              <div className="research-story-outcome">
                <strong>Outcome:</strong> {story.outcome}
              </div>
              <blockquote className="research-story-quote">
                "{story.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section }
      <section className="research-section research-faq">
        <div className="research-section-header">
          <h2 className="research-section-title">Frequently Asked Questions</h2>
          <p className="research-section-subtitle">
            Get answers to common research-related questions
          </p>
        </div>

        <div className="research-faq-container">
          {faqItems.map((item, index) => (
            <div key={index} className="research-faq-item">
              <h3 className="research-faq-question">{item.question}</h3>
              <p className="research-faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="research-section research-final-cta">
        <div className="research-cta-content">
          <h2 className="research-cta-title">Ready to Start Your Research Project?</h2>
          <p className="research-cta-description">
            Don't just chase names , look for right fit.
          </p>
          
          <div className="research-cta-buttons">
          <a href='/contact'>
            <button className="research-cta-primary">Get Started Today</button>
           {/*} <button className="research-cta-secondary">Learn More</button>*/}
           </a>
          </div>
         
         
        </div>
      </section>
    </div>
  );
};

export default Research;