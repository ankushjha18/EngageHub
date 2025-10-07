// Updated Footer.jsx - With linked services and exam preparations section
import React, { useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  FaFacebook, FaTwitter, FaInstagram, FaLinkedin,
  FaPhone, FaEnvelope, FaArrowUp,
  FaGraduationCap, FaBook, FaUsers, FaCalendar, FaPencilAlt
} from 'react-icons/fa';
import './Footer.css';

function Footer() {
  const [isScrollVisible, setIsScrollVisible] = useState(false);
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true });

  useEffect(() => {
    const handleScroll = () => setIsScrollVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Event & Workshops', path: '/workshops' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Newsletter', path: '/newsletter' },
    { name: 'Contact', path: '/contact' }
  ];

  // Updated services with paths
  const services = [
    { name: 'Admission Consulting', icon: <FaGraduationCap />, path: '/consultancy' },
    { name: 'Internship', icon: <FaBook />, path: '/internship' },
    { name: 'Research', icon: <FaUsers />, path: '/research' },
    { name: 'Essay Editing Services', icon: <FaCalendar />, path: '/essay' }
  ];

  // New exam preparations section
  const examPreparations = [
    { name: 'SAT Preparation', icon: <FaPencilAlt />, path: '/sat-prep' },
    { name: 'ACT Preparation', icon: <FaPencilAlt />, path: '/act-prep' },
    { name: 'AP Preparation', icon: <FaPencilAlt />, path: '/ap-prep' },
    { name: 'MYP Preparation', icon: <FaPencilAlt />, path: '/myp-prep' },
    { name: 'AMC Preparation', icon: <FaPencilAlt />, path: '/amc-prep' },
    { name: 'IGCSE Preparation', icon: <FaPencilAlt />, path: '/igcse-prep' },
    { name: 'A LEVEL Preparation', icon: <FaPencilAlt />, path: '/alevel-prep' },
    { name: 'GMAT Preparation', icon: <FaPencilAlt />, path: '/gmat-prep' },
    { name: 'GRE Preparation', icon: <FaPencilAlt />, path: '/gre-prep' },
    { name: 'IB Preparation', icon: <FaPencilAlt />, path: '/ib-prep' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook />, url: 'https://facebook.com' },
    { name: 'Twitter', icon: <FaTwitter />, url: 'https://twitter.com' },
    { name: 'Instagram', icon: <FaInstagram />, url: 'https://www.instagram.com/engagehub_llc/' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://linkedin.com' }
  ];

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        {/* Company information section */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="company-info">
            <div className="footer-logo">
              <img src="/logo.png" alt="EngageHub Logo" />
            </div>
            <p className="company-description">
              Empowering students through quality education and comprehensive learning experiences. 
              We are committed to academic excellence and personal growth.
            </p>
            <div className="social-links">
              {sections.social.map(({ name, icon: Icon, url }) => (
                <motion.a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-link"
                  aria-label={name}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick links section */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3>Quick Links</h3>
          <ul className="footer-links">
            {sections.quickLinks.map(({ name, path }) => (
              <li key={name}>
                <a href={path}>{name}</a>
              </li>
            ))}
          </ul>
        </FooterSection>

        {/* Our Services section - NOW WITH LINKS */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Our Services</h3>
          <div className="footer-info">
            {sections.exams.map(({ name, path }) => (
              <a key={name} href={path} className="footer-item footer-exam-link">
                <span className="exam-icon-wrapper"><FaPencilAlt /></span>
                <span className="exam-text">{name}</span>
              </a>
            ))}
          </div>
        </FooterSection>

        {/* NEW: Exam Preparations section */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Exam Preparations</h3>
          <div className="footer-info">
            {examPreparations.map((exam) => (
              <a 
                key={exam.name}
                href={exam.path}
                className="footer-item footer-exam-link"
              >
                <span className="exam-icon-wrapper">
                  {exam.icon}
                </span>
                <span className="exam-text">{exam.name}</span>
              </a>
            ))}
          </div>
        </FooterSection>

        {/* Contact information section */}
        <motion.div 
          className="footer-section"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Contact Info</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon-phone" />
              <div>
                <span className="contact-label">Phone</span>
                <span className="contact-value">+971 55 272 8339</span>
              </div>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon-email" />
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">divya@engagehub.me</span>
              </div>
            </div>
          </div>
        </FooterSection>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <div className="copyright">
            <p>&copy; 2025 EngageHub. All rights reserved.</p>
          </div>
          <AnimatePresence>
            {isScrollVisible && (
              <motion.button
                className="scroll-to-top"
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Scroll to top"
              >
                <FaArrowUp />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
