// Home.jsx - Fixed testimonials carousel (without testimonial images)
import React from 'react';
import  { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import emailjs from 'emailjs-com';
import { motion, transform, useInView } from 'framer-motion';

import { 
  FaGraduationCap, 
  FaPhone,
  FaUsers, 
  FaChartLine, 
  FaAward,
  FaStar,
  FaQuoteLeft,
  FaArrowRight,
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaUser,
  FaUserTie
} from 'react-icons/fa';
import './Home.css';

emailjs.init('VOf9Q1CreblzdZh0b');

function Home() {
  const heroRef = React.useRef(null);
  const featuresRef = React.useRef(null);
  const statsRef = React.useRef(null);
  const testimonialsRef = React.useRef(null);
  const ctaRef = React.useRef(null);
  const servicesRef = React.useRef(null);
  const howItWorksRef = React.useRef(null);
  const isServicesInView = useInView(servicesRef, { once: true });
  const isHowItWorksInView = useInView(howItWorksRef, { once: true });


  const isHeroInView = useInView(heroRef, { once: true });
  const isFeaturesInView = useInView(featuresRef, { once: true });
  const isStatsInView = useInView(statsRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });
  const isCtaInView = useInView(ctaRef, { once: true });

  const [itemsPerSlide, setItemsPerSlide] = useState(3); // default desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1); // mobile → show 1 testimonial
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2); // tablet → show 2 testimonials
      } else {
        setItemsPerSlide(3); // desktop → show 3 testimonials
      }
    };
  
    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const features = [
    { icon: <FaGraduationCap />,
      title: 'Comprehensive Solutions',
      description: 'from mentoring and research guidance to test preparation and career planning.' },
    { icon: <FaUsers />,
      title: 'Trusted Expertise', 
      description: 'partnerships with leading education specialists and organizations.' },
    { icon: <FaChartLine />, 
      title: 'Global Reach', 
      description: 'access to opportunities and resources that open doors worldwide' },
    { icon: <FaAward />, 
      title: 'Complete Ecosystem', 
      description: 'With EngageHub, you don’t just receive support,you gain a complete ecosystem for success.' }
  ];

  const navigate = useNavigate();

  // Check if contact section is in view for animations
  const contactRef = React.useRef(null);
  const isInView = useInView(contactRef, { once: true });

  // State management for form data and submi
  // emailError: Stores any email sending errors
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    studentPhone: '',
    studentClass: '',
    subjects: '',            // NEW
    preferredCountry: '',    // NEW
    graduationYear: '' ,
    parentName: '',
    parentPhone: '',
    address: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [emailError, setEmailError] = useState('');

  // Function to handle form field changes
  // Updates the formData state when user types in form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Function to test EmailJS connection
  // This helps debug EmailJS configuration issues
  const testEmailJS = async () => {
    try {
      const SERVICE_ID = 'service_35l4m7w';
      const TEMPLATE_ID = 'template_h2kn4mp';
      const USER_ID = 'VOf9Q1CreblzdZh0b';
      
      const testParams = {
        to_email: 'jhaayush557@gmail.com',
        from_name: 'Test User',
        from_email: 'test@example.com',
        student_name: 'Test Student',
        student_email: 'test@example.com',
        student_phone: '123-456-7890',
        student_class: 'Test Class',
        parent_name: 'Test Parent',
        parent_phone: '123-456-7890',
        address: 'Test Address',
        submission_date: new Date().toLocaleString(),
        message: 'Test email from EngageHub'
      };
      
      const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, testParams, USER_ID);
      console.log('EmailJS test successful:', response);
      return true;
    } catch (error) {
      console.error('EmailJS test failed:', error);
      return false;
    }
  };

  // Function to send email using EmailJS
  // This function sends the form data to the admin email address
  const sendEmailToAdmin = async (submissionData) => {
    try {
      // EmailJS configuration - you'll need to set these up in EmailJS dashboard
      // SERVICE_ID: Your EmailJS service ID (Gmail, Outlook, etc.)
      // TEMPLATE_ID: Your email template ID
      // USER_ID: Your EmailJS user ID
      const SERVICE_ID = 'service_35l4m7w'; // Replace with your EmailJS service ID
      const TEMPLATE_ID = 'template_h2kn4mp'; // Replace with your EmailJS template ID
      const USER_ID = 'VOf9Q1CreblzdZh0b'; // Replace with your EmailJS user ID

      // Prepare email template parameters
      // These variables will be available in your EmailJS email template
      const templateParams = {
        to_email: 'jhaayush557@gmail.com', // Admin email address
        from_name: submissionData.studentName,
        from_email: submissionData.studentEmail,
        student_name: submissionData.studentName,
        student_email: submissionData.studentEmail,
        student_phone: submissionData.studentPhone,
        student_class: submissionData.studentClass,
        parent_name: submissionData.parentName,
        parent_phone: submissionData.parentPhone,
        address: submissionData.address,
        submission_date: new Date().toLocaleString(),
        message: `New student registration from ${submissionData.studentName}`
      };

      // Send email using EmailJS with timeout
      // This will send the form data to the admin email
      const emailPromise = emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
      
      // Add timeout to prevent hanging
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Email request timed out')), 10000); // 10 second timeout
      });
      
      const response = await Promise.race([emailPromise, timeoutPromise]);
      
      console.log('Email sent successfully:', response);
      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      
      // Provide more specific error messages based on the error type
      let errorMessage = 'Failed to send email notification. Please contact us directly.';
      
      if (error.message === 'Email request timed out') {
        errorMessage = 'Email request timed out. Please check your internet connection and try again.';
      } else if (error.text) {
        // EmailJS specific error
        if (error.text.includes('Invalid template')) {
          errorMessage = 'Email template configuration error. Please check template ID.';
        } else if (error.text.includes('Invalid service')) {
          errorMessage = 'Email service configuration error. Please check service ID.';
        } else if (error.text.includes('Invalid user')) {
          errorMessage = 'EmailJS user configuration error. Please check user ID.';
        } else {
          errorMessage = `Email error: ${error.text}`;
        }
      } else if (error.message) {
        // General JavaScript error
        errorMessage = `Error: ${error.message}`;
      }
      
      setEmailError(errorMessage);
      return false;
    }
  };

  // Function to retry email sending
  // This allows users to retry when EmailJS fails
  const retryEmail = async () => {
    setEmailError(''); // Clear previous error
    setIsSubmitting(true);
    
    try {
      const emailSent = await sendEmailToAdmin(formData);
      if (emailSent) {
        setSubmitSuccess(true);
        setIsSubmitting(false);
        setTimeout(() => {
          navigate('/contact-success');
        }, 2000);
      } else {
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Retry failed:', error);
      setIsSubmitting(false);
      setEmailError('Retry failed. Please check your EmailJS configuration.');
    }
  };

  // Function to handle form submission
  // Validates form data, sends email, saves to localStorage, and redirects
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    
    // Reset any previous errors
    setEmailError('');
    
    // Set submitting state to show loading
    setIsSubmitting(true);
    
    try {
      // Step 1: Send email to admin (NEW FEATURE)
      // This sends the form data to admin email for immediate notification
      const emailSent = await sendEmailToAdmin(formData);
      
      // Step 2: Save submission to localStorage for admin dashboard
      // This allows the admin to view submissions in the web dashboard
      saveSubmissionToStorage(formData);
      
      // Step 3: Only proceed if email was sent successfully
      if (emailSent) {
        setSubmitSuccess(true);
        setIsSubmitting(false);
        
        // Redirect to success page after a short delay
        setTimeout(() => {
          navigate('/contact-success');
        }, 2000);
      } else {
        // If email failed, don't redirect and show error
        setIsSubmitting(false);
        // Error message is already set by sendEmailToAdmin function
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      setEmailError('An error occurred. Please try again or contact us directly.');
    }
  };

  // Function to save form submission to localStorage
  // This allows the admin dashboard to view submissions
  // NOTE: This data is only stored in the user's browser
  const saveSubmissionToStorage = (submissionData) => {
    // Get existing submissions from localStorage
    const existingSubmissions = localStorage.getItem('contactSubmissions');
    let submissions = [];
    
    if (existingSubmissions) {
      submissions = JSON.parse(existingSubmissions);
    }
    
    // Create new submission object with unique ID and timestamp
    const newSubmission = {
      id: Date.now(), // Use timestamp as unique ID
      timestamp: new Date().toISOString(),
      ...submissionData
    };
    
    // Add new submission to the beginning of the array
    submissions.unshift(newSubmission);
    
    // Save back to localStorage
    // IMPORTANT: This data is only stored in the current browser
    // It will not be available on other devices or after browser data is cleared
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
  };
  /*const stats = [
  //  { number: '10,000+', label: 'Students Enrolled' },
    { number: '18+', label: 'Years Experienced' },
    { number: '95%', label: 'Success Rate' },
    { number: '50+', label: 'Expert Tutors' },
    { number: '1000+', label: 'Hours of Learning' }
  ];*/

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
            At EngageHub, we are committed to delivering world-class educational guidance and support.
            Through our strategic collaborations we combine expertise, innovation, and global best practices to provide unmatched value to our students.
           <br/><p><b>Our customers benefit from: </b></p>
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

                 
      {/* Services Overview Section /}
        <section ref={servicesRef} className="services section">
          <div className="container">
            <motion.div 
              className="section-header" 
              initial={{ opacity: 0, y: 30 }} 
              animate={isServicesInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Our Services</h2>
              <p className="section-subtitle">
                Comprehensive educational solutions tailored to your needs
              </p>
            </motion.div>

            <div className="services-grid">
              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">📚</div>
                <h3>SAT/ACT Preparation</h3>
                <p>Connect with top-rated test prep providers for personalized SAT and ACT coaching</p>
              </motion.div>

              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">🎓</div>
                <h3>College Admissions Counselling</h3>
                <p>Expert guidance through every step of the university application process</p>
              </motion.div>

              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">👨‍🏫</div>
                <h3>IB & AP Tutoring</h3>
                <p>Specialized tutors for International Baccalaureate and Advanced Placement courses</p>
              </motion.div>

              <motion.div 
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ y: -10 }}
              >
                <div className="service-icon">🌍</div>
                <h3>Study Abroad Guidance</h3>
                <p>Navigate international education opportunities with confidence</p>
              </motion.div>
            </div>
          </div>
        </section> */}

        {/* How It Works Section /}
        <section ref={howItWorksRef} className="how-it-works section">
          <div className="container">
            <motion.div 
              className="section-header" 
              initial={{ opacity: 0, y: 30 }} 
              animate={isHowItWorksInView ? { opacity: 1, y: 0 } : {}} 
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">How EngageHub Works</h2>
              <p className="section-subtitle">
                Your path to success in three simple steps
              </p>
            </motion.div>

            <div className="steps-container">
              <motion.div 
                className="step-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isHowItWorksInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="step-number">1</div>
                <h3>Tell Us Your Needs</h3>
                <p>Share your academic goals, subjects of interest, and preferred learning style</p>
              </motion.div>

              <motion.div 
                className="step-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isHowItWorksInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="step-number">2</div>
                <h3>Get Matched</h3>
                <p>We connect you with vetted education partners that fit your requirements</p>
              </motion.div>

              <motion.div 
                className="step-card"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isHowItWorksInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="step-number">3</div>
                <h3>Start Learning</h3>
                <p>Begin your journey with expert guidance and personalized support</p>
              </motion.div>
            </div>
          </div>
        </section> */}
      

        <motion.div 
                   ref={contactRef}
              className="contact-form-section"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="section-title">Send us a Message</h2>
              <p className="section-subtitle">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              {/* Contact Form */}
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* Student Information Row */}
                <div className="form-row">
                  {/* Student Name Field */}
                  <div className="form-group">
                    <label htmlFor="studentName" className="form-label">
                      <FaUser className="field-icon" />
                      Student Name *
                    </label>
                    <input
                      type="text"
                      id="studentName"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter student's full name"
                    />
                  </div>

                  {/* Student Email Field */}
                  <div className="form-group">
                    <label htmlFor="studentEmail" className="form-label">
                      <FaEnvelope className="field-icon" />
                      Student Email *
                    </label>
                    <input
                      type="email"
                      id="studentEmail"
                      name="studentEmail"
                      value={formData.studentEmail}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter student's email address"
                    />
                  </div>
                </div>

                {/* Student Contact Row */}
                <div className="form-row">
                  {/* Student Phone Field */}
                  <div className="form-group">
                    <label htmlFor="studentPhone" className="form-label">
                      <FaPhone className="contact-icon-phone" />
                      Student Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="studentPhone"
                      name="studentPhone"
                      value={formData.studentPhone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter student's phone number"
                    />
                  </div>

                  {/* Student Class Field */}
                  <div className="form-group">
                      <label htmlFor="studentClass" className="form-label">
                        <FaGraduationCap className="field-icon" />
                         Current Class/Grade *
                      </label>
                      <input
                        type="text"
                        id="studentClass"
                        name="studentClass"
                        value={formData.studentClass}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="e.g. 10 / High School / College Year 2"
                      />
                    </div>
                  </div>
                 
                 {/* Subjects Field */}
                 <div className="form-row">
                  <div className="form-group ">
                    <label htmlFor="subjects" className="form-label">
                      <FaGraduationCap className="field-icon" />
                      Subjects of Interest *
                    </label>
                    <input
                      type="text"
                      id="subjects"
                      name="subjects"
                      value={formData.subjects || ""}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="e.g. Mathematics, Computer Science, Economics"
                    />
                  </div>

                  {/* Preferred Country Field */}
                  <div className="form-group ">
                    <label htmlFor="preferredCountry" className="form-label">
                      <FaMapMarkerAlt className="field-icon" />
                      Preferred Country 
                    </label>
                    <input
                      type="text"
                      id="preferredCountry"
                      name="preferredCountry"
                      value={formData.preferredCountry || ""}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. USA, UK, Canada, Germany"
                    />
                  </div>
                </div>

                


                {/* Parent Information Row */}
                <div className="form-row">
                  {/* Parent Name Field */}
                  <div className="form-group">
                    <label htmlFor="parentName" className="form-label">
                      <FaUserTie className="field-icon" />
                      Parent's Name *
                    </label>
                    <input
                      type="text"
                      id="parentName"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter parent's full name"
                    />
                  </div>

                  {/* Parent Phone Field */}
                  <div className="form-group">
                    <label htmlFor="parentPhone" className="form-label">
                      <FaPhone className="contact-icon-phone" />
                      Parent's Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="parentPhone"
                      name="parentPhone"
                      value={formData.parentPhone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                      placeholder="Enter parent's phone number"
                    />
                  </div>
                </div>
               
                  {/* Year of Graduation Field */}
               <div className="form-row">
                  <div className="form-group ">
                    <label htmlFor="graduationYear" className="form-label">
                      <FaGraduationCap className="field-icon" />
                      Year of Graduation
                    </label>
                    <input
                      type="number"
                      id="graduationYear"
                      name="graduationYear"
                      value={formData.graduationYear || ""}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="e.g. 2026"
                      min="1900"
                      max="2100"
                    />
                  </div>

                {/* Address Field */}
                <div className="form-group ">
                  <label htmlFor="address" className="form-label">
                    <FaMapMarkerAlt className="field-icon" />
                    Address *
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your full address"
                    rows="3"
                  ></textarea>
                </div>
              </div>

                {/* Error Message Display */}
                {emailError && (
                  <motion.div 
                    className="error-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p>⚠️ {emailError}</p>
                    <p>Please check your EmailJS configuration and try again.</p>
                    <p>Your form data was saved locally but email notification failed.</p>
                    
                    {/* Retry Button */}
                    <motion.button
                      type="button"
                      className="retry-btn"
                      onClick={retryEmail}
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? 'Retrying...' : '🔄 Retry Email'}
                    </motion.button>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {/* Success Message */}
                {submitSuccess && (
                  <motion.div 
                    className="success-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p>✅ Thank you! Your message has been sent successfully.</p>
                    <p>📧 An email notification has been sent to our admin team.</p>
                    <p>⏰ We'll get back to you within 24 hours.</p>
                  </motion.div>
                )}
              </form>
            </motion.div>
      

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
              <div className="hero-partners">
              <p className="partners-title">Our Partners</p>
              <div className="partners-logos">
              <img src="./alokbansal.jpg" alt="Company 2" className="partner-logo" />
                <img src="./rootways.jpg" alt="Company 1" className="partner-logo" />
                <img src="./apguru.jpg" alt="Company 3" className="partner-logo" />
              </div>
            </div>
            </div> 
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Home;