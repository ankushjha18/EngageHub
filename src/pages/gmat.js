// This is the SAT Prep page component - displays SAT preparation courses and information

// Import React and necessary hooks
import React from 'react';

// Import animation components from Framer Motion
import { motion, useInView } from 'framer-motion';

// Import icons from react-icons library
import { 
  FaGraduationCap, 
  FaUsers, 
  FaChartLine, 
  FaAward,
    FaQuoteLeft,
 
  FaBookOpen,
  FaBullseye,
  FaStar,
} from 'react-icons/fa';

// Import the CSS file for this component
import './sat.css';



// SAT component function
function GMAT() {
  // Check if different sections are in view for animations
  const heroRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const statsRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  const pricingRef = React.useRef(null);
  const ctaRef = React.useRef(null);

  // useInView hooks to detect when sections come into view
  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  const isPricingInView = useInView(pricingRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

const itemsPerSlide = 3;

 const testimonials = [
  { name: 'Parent of Grade 11 Student, Dubai',
      role: 'Parent',
       rating: 5, 
       text: "We were overwhelmed with the number of SAT prep options out there. Engagehub helped us connect with a trusted coaching provider within days. My daughter not only improved her SAT score by 200 points but also felt much more confident going into the exam. Engagehub made the whole process stress-free" },
   { name: 'Parent of Grade 12 Student, Abu Dhabi',
      role: 'Parent',
       rating: 5, 
       text: "Finding the right counsellor was always a challenge. Through Engagehub, we found a counsellor who perfectly understood my son’s aspirations and guided him with college selection, essays, and applications. The personal attention and expertise made a world of difference. We are very grateful to Engagehub for bridging that gap" },
   { name: 'Parent of High School Junior, Sharjah', 
     role: 'Parent',
      rating: 5,
     text: "As parents, we wanted reliable and well-reviewed services for our child. Engagehub gave us peace of mind by connecting us to vetted SAT prep companies and counsellors. Instead of spending weeks researching, we got the right match in just a couple of conversations. Truly a one-stop solution" },
   { name: 'Parent of Student ',
      role: 'Parent',
       rating: 5,
       text: "Thanks to Engagehub, my daughter not only secured an excellent SAT score but also got admission counselling that helped her craft a strong application. She has now received offers from her top-choice universities. Engagehub was the perfect partner in this journey." },
   { name: 'Parent of Grade 12 Student, Abu Dhabi',
      role: 'Parent',
      rating: 5,
      text: "Engagehub made the daunting college admissions process so much easier. The counsellor we were matched with gave clear guidance on essays, applications, and university shortlisting. My daughter has already received offers from her top-choice schools. Couldn’t have asked for a better experience." },
   { name: 'Parent of IBDP Year 1 Student, Dubai',
      role: 'Parent',
     rating: 5,
     text: "The IB Diploma can be overwhelming, especially with subjects like HL Math and Physics. Through Engagehub, we found an excellent tutor who made complex concepts clear and boosted my son’s confidence. His grades have improved significantly" },
   { name: ' Parent of Grade 11 Student, Sharjah',
     role: 'Parent', 
     rating: 5,
     text: "My daughter needed help with AP Calculus and AP Biology. Engagehub quickly connected us to specialized tutors who understood the AP curriculum thoroughly. The sessions were structured, effective, and results-driven. She now feels fully prepared for her exams." },
   { name: 'Parent of High School Junior, UAE',
     role: 'Parent', 
     rating: 5,
     text: "As parents, we were concerned about choosing the right services for our child. Engagehub gave us a list of vetted SAT prep and tutoring providers, making the decision much easier. It was reassuring to know that every recommendation was trustworthy and proven" },
   { name: 'Parent of Accepted Student, Dubai',
     role: 'Parent',
     rating: 5, 
     text: "From SAT prep to IB tutoring and finally admissions counselling, Engagehub has been with us at every step of our child’s journey. The ecosystem they provide is unmatched – reliable, efficient, and student-focused." },
     {name: "Parent of Grade 12 Student, Abu Dhabi",
       role:"Parent",
       rating: 5,
       text: "Instead of spending weeks researching tutors and counsellors, Engagehub helped us find the right match in just a couple of days. The entire process was smooth and stress-free, and our son is thriving academically and personally thanks to the support."}
  ];

  const totalSlides = Math.max(1, Math.ceil(testimonials.length / itemsPerSlide));
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = React.useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = React.useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  React.useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(id);
  }, [totalSlides]);

  React.useEffect(() => {
    if (currentSlide >= totalSlides) {
      setCurrentSlide(0);
    }
  }, [totalSlides, currentSlide]);

  const renderStars = (rating) => {
    return Array.from({ length: rating }, (_, index) => (
      <FaStar key={index} className="star" />
    ));
  };


  // Array of SAT prep features
  const features = [
    {
      icon: <FaBookOpen />,
      title: 'Comprehensive Study Materials',
      description: 'Access thousands of practice questions, detailed explanations, and study guides covering all GMAT sections.'
    },
    {
      icon: <FaBullseye />,
      title: 'Personalized Learning',
      description: 'AI-powered recommendations based on your strengths and weaknesses to optimize your study time.'
    },
    {
      icon: <FaChartLine />,
      title: 'Score Improvement',
      description: 'Average score improvement of 200+ points with our proven methods and expert guidance.'
    }
  ];


  // Array of pricing plans
/*  const pricingPlans = [
    {
      name: 'Basic',
      price: '$29',
      period: '/month',
      features: [
        '500+ Practice Questions',
        'Basic Performance Analytics',
        'Email Support',
        'Mobile Access',
        '2 Practice Tests'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '$49',
      period: '/month',
      features: [
        '2000+ Practice Questions',
        'Advanced Analytics',
        'Personalized Study Plans',
        'Video Explanations',
        'Priority Support',
        '10 Practice Tests'
      ],
      popular: true
    },
    {
      name: 'Ultimate',
      price: '$79',
      period: '/month',
      features: [
        'Unlimited Practice Questions',
        'AI Tutor',
        '1-on-1 Coaching Sessions',
        'College Counseling',
        'Score Guarantee',
        'Unlimited Practice Tests'
      ],
      popular: false
    }
  ];*/

  // Stats data
  const stats = [
    {
      number: '50K+',
      label: 'Students Served',
      icon: <FaUsers />
    },
    {
      number: '240+',
      label: 'Average Score Increase',
      icon: <FaChartLine />
    },
    {
      number: '95%',
      label: 'Success Rate',
      icon: <FaBullseye />
    },
    {
      number: '4.9',
      label: 'Average Rating',
      icon: <FaStar />
    }
  ];
  
  
  // Return the JSX (HTML-like structure) for the SAT prep page
  return (
    <div className="sat">
      <div className="sat-page">
        {/* Header */}

        {/* Hero Section */}
        <section ref={heroRef} className="sat-hero section">
          <div className="container">
            <div className="hero-grid">
              <motion.div 
                className="hero-content"
                initial={{ opacity: 0, y: 50 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h1 className="hero-title">
                  Master the GMAT with
                  <span className="highlight"> Expert Guidance</span>
                </h1>
                <p className="hero-subtitle">
                  Achieve your dream score with our comprehensive GMAT prep program. 
                  Join thousands of students who have improved their scores by 200+ points.
                </p>
                <div className="hero-actions">
                  <a href='/contact'>
                  <motion.button 
                    className="btn btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Schedule Consultation
                  </motion.button>
                  </a>
                 {/*} <motion.button 
                    className="btn btn-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaPlay />
                    Watch Demo
                  </motion.button> */}
                </div>
                <div className="hero-stats">
                  <div className="stat-item">
                    <FaUsers />
                    <span>50,000+ Students</span>
                  </div>
                  <div className="stat-item">
                    <FaAward />
                    <span>Average +240 Points</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="score-card">
                  <div className="score-number">1520</div>
                  <div className="score-label">Average Student Score</div>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <p>"Best GMAT prep program I've ever used!"</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="features section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Why Choose Our GMAT Prep?</h2>
              <p className="section-subtitle">
                Our proven methodology combines personalized learning, expert instruction, 
                and cutting-edge technology to maximize your score improvement.
              </p>
            </motion.div>

            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.title}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section }
        <section ref={statsRef} className="stats section">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="stat-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Testimonials Section */}
       <section ref={testimonialsRef} className="testimonials section">
               <div className="container">
                 <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
                   <h2 className="section-title">What Our Students & Parents Say</h2>
                   <p className="section-subtitle">
                     Real stories from real people who have experienced the EngageHub difference.
                   </p>
                 </motion.div>
       
                 <div className="testimonials-carousel">
                   <div className="carousel-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                     {Array.from({ length: totalSlides }, (_, groupIndex) => (
                       <div className="testimonial-slide" key={groupIndex}>
                         <div className="cards-grid">
                           {testimonials.slice(groupIndex * itemsPerSlide, groupIndex * itemsPerSlide + itemsPerSlide).map((testimonial, index) => (
                             <motion.div key={testimonial.name + index} className="testimonial-card" initial={{ opacity: 0, y: 20 }} animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }}>
                               <div className="author-meta">
                                 <h4 className="author-name">{testimonial.name}</h4>
                                 <p className="author-role">{testimonial.role}</p>
                               </div>
                               <div className="testimonial-content">
                                 <FaQuoteLeft className="quote-icon" />
                                 <p className="testimonial-text">{testimonial.text}</p>
                               </div>
                               <div className="testimonial-bottom">
                                 <div className="testimonial-rating">{renderStars(testimonial.rating)}</div>
                               </div>
                             </motion.div>
                           ))}
                         </div>
                       </div>
                     ))}
                   </div>
       
                   <div className="carousel-controls">
                     <button className="carousel-btn prev" onClick={prevSlide}>‹</button>
                     <button className="carousel-btn next" onClick={nextSlide}>›</button>
                   </div>
       
                   <div className="carousel-dots">
                     {Array.from({ length: totalSlides }).map((_, index) => (
                       <button key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)} />
                     ))}
                   </div>
                 </div>
               </div>
             </section>
       

        {/* Pricing Section }
        <section ref={pricingRef} className="pricing section">
          <div className="container">
            <motion.div 
              className="section-header"
              initial={{ opacity: 0, y: 30 }}
              animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Choose Your Plan</h2>
              <p className="section-subtitle">
                Select the perfect plan to achieve your SAT goals
              </p>
            </motion.div>

            <div className="pricing-grid">
              {pricingPlans.map((plan, index) => (
                <motion.div 
                  key={plan.name}
                  className={`pricing-card ${plan.popular ? 'popular' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isPricingInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  {plan.popular && (
                    <div className="popular-badge">Most Popular</div>
                  )}
                  <div className="plan-header">
                    <h3 className="plan-name">{plan.name}</h3>
                    <div className="plan-price">
                      <span className="price">{plan.price}</span>
                      <span className="period">{plan.period}</span>
                    </div>
                  </div>
                  <ul className="plan-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaCheckCircle />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <motion.button 
                    className="btn btn-primary plan-button"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Get Started
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} className="cta section">
          <div className="container">
            <motion.div 
              className="cta-content"
              initial={{ opacity: 0, y: 30 }}
              animate={isCtaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="cta-title">Ready to Boost Your GMAT Score?</h2>
              <p className="cta-subtitle">
                Join thousands of students who have achieved their dream scores. 
                Start your journey to success today with our proven GMAT prep program.
              </p>
              <div className="cta-actions">
                  <a href="/contact">
                <motion.button 
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              
                >
                  Schedule Consultation
                </motion.button>
                </a>
               {/*} <motion.button 
                  className="btn btn-secondary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.button> */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        
      </div>
    </div>
  );
}

// Export the SAT component so it can be used in other files
export default GMAT;