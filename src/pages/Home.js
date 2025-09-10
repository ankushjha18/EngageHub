// Home.jsx - Fixed testimonials carousel (without testimonial images)
import React from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaChartLine, 
  FaAward,
  FaStar,
  FaQuoteLeft,
  FaArrowRight
} from 'react-icons/fa';
import './Home.css';

function Home() {
  const heroRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const statsRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  const ctaRef = React.useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const itemsPerSlide = 3;

  const features = [
    { icon: <FaGraduationCap />, title: 'Exceptional Faculty', description: 'Personalized learning with certified educators and subject matter experts.' },
    { icon: <FaUsers />, title: '100+ Teaching Hours', description: 'Interactive learning in small groups for better engagement and support.' },
    { icon: <FaChartLine />, title: 'Past Paper Practice & Exam', description: 'Monitor academic progress with detailed reports and analytics.' },
    { icon: <FaAward />, title: 'Proven Results', description: 'Consistent improvement in grades and test scores for our students.' }
  ];

  /*const stats = [
  //  { number: '10,000+', label: 'Students Enrolled' },
    { number: '18+', label: 'Years Experienced' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Expert Tutors' },
    { number: '1000+', label: 'Hours of Learning' }
  ];*/

  const testimonials = [
    { name: 'Sarah Johnson', role: 'Parent', rating: 5, text: "EngageHub has transformed my daughter's academic performance. The personalized approach and dedicated tutors have made all the difference." },
    { name: 'Michael Chen', role: 'Student', rating: 5, text: "The small group classes are amazing! I've improved my grades significantly and gained confidence in my studies." },
    { name: 'Emily Rodriguez', role: 'Parent', rating: 5, text: "Excellent service and results. My son went from struggling to excelling in just a few months." },
    { name: 'Aisha Khan', role: 'Parent', rating: 5, text: "Highly recommend — thoughtful tutors and clear progress tracking." },
    { name: 'Ravi Patel', role: 'Student', rating: 5, text: "Clear explanations and lots of practice. My scores went up!" },
    { name: 'Sarah Johnson', role: 'Parent', rating: 5, text: "EngageHub has transformed my daughter's academic performance. The personalized approach and dedicated tutors have made all the difference." },
    { name: 'Sarah Johnson', role: 'Parent', rating: 5, text: "EngageHub has transformed my daughter's academic performance. The personalized approach and dedicated tutors have made all the difference." },
    { name: 'Sarah Johnson', role: 'Parent', rating: 5, text: "EngageHub has transformed my daughter's academic performance. The personalized approach and dedicated tutors have made all the difference." },
    { name: 'Sarah Johnson', role: 'Parent', rating: 5, text: "EngageHub has transformed my daughter's academic performance. The personalized approach and dedicated tutors have made all the difference." }
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

  return (
    <div className="home">
      {/* Hero Section */}
      <section ref={heroRef} className="hero">
        <div className="hero-background">
          <img src="./ClasroomStudents.jpg" alt="Hero Background" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Empowering Students Through
              <span className="highlight"> Quality Education</span>
            </h1>
            <p className="hero-subtitle">
              Transform your academic journey with personalized tutoring, expert guidance, 
              and proven learning strategies designed for your success.
            </p>
            <div className="hero-buttons">
              <motion.button className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="./contact">Get Started Today</a>
                <FaArrowRight />
             </motion.button>
             {/*} <motion.button className="btn btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Learn More 
              </motion.button> */}
            </div> 
          </motion.div> 
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="features section">
        <div className="container">
          <motion.div className="section-header" initial={{ opacity: 0, y: 30 }} animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="section-title">Why Choose EngageHub?</h2>
            <p className="section-subtitle">
              We provide comprehensive educational services designed to help students 
              achieve their academic goals and unlock their full potential.
            </p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div key={feature.title} className="feature-card" initial={{ opacity: 0, y: 30 }} animate={isFeaturesInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -10 }}>
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Statistics Section 
      
     <section ref={statsRef} className="stats section">
       <div className="container">
          <motion.div className="stats-grid" initial={{ opacity: 0, y: 30 }} animate={isStatsInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            {stats.map((stat, index) => (
              <motion.div key={stat.label} className="stat-item" initial={{ opacity: 0, scale: 0.8 }} animate={isStatsInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }}>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
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

      {/* CTA Section */}
      <section ref={ctaRef} className="cta section">
        <div className="container">
          <motion.div className="cta-content" initial={{ opacity: 0, y: 30 }} animate={isCtaInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <h2 className="cta-title">Ready to Transform Your Academic Journey?</h2>
            <p className="cta-subtitle">
              Join hundreds of successful students who have achieved their goals with EngageHub.
            </p>
            <div className="hero-buttons">
              <motion.button className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="./contact">Start Your Success Story</a>
                <FaArrowRight />
             </motion.button>
             {/*} <motion.button className="btn btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Learn More 
              </motion.button> */}
            </div> 
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;