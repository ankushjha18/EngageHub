import React, { useState, useEffect, useRef } from 'react';
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

  const sections = {
    quickLinks: [
      { name: 'Home', path: '/' },
      { name: 'About Us', path: '/about' },
      { name: 'Event & Workshops', path: '/workshops' },
      { name: 'Blogs', path: '/blogs' },
      { name: 'Newsletter', path: '/newsletter' },
      { name: 'Contact', path: '/contact' }
    ],
    services: [
      { name: 'Admission Consulting', icon: FaGraduationCap, path: '/consultancy' },
      { name: 'Internship', icon: FaBook, path: '/internship' },
      { name: 'Research', icon: FaUsers, path: '/research' },
      { name: 'Essay Editing', icon: FaCalendar, path: '/essay' }
    ],
    exams: [
      { name: 'SAT Preparation', path: '/sat-prep' },
      { name: 'ACT Preparation', path: '/act-prep' },
      { name: 'GMAT Preparation', path: '/gmat-prep' },
      { name: 'GRE Preparation', path: '/gre-prep' }
    ],
    academics: [
      { name: 'AP Courses', path: '/ap-prep' },
      { name: 'MYP Preparation', path: '/myp-prep' },
      { name: 'AMC Preparation', path: '/amc-prep' },
      { name: 'IGCSE Preparation', path: '/igcse-prep' },
      { name: 'A Level Preparation', path: '/alevel-prep' },
      { name: 'IB Preparation', path: '/ib-prep' }
    ],
    social: [
      { name: 'Facebook', icon: FaFacebook, url: 'https://facebook.com' },
      { name: 'Twitter', icon: FaTwitter, url: 'https://twitter.com' },
      { name: 'Instagram', icon: FaInstagram, url: 'https://www.instagram.com/engagehub_llc/' },
      { name: 'LinkedIn', icon: FaLinkedin, url: 'https://linkedin.com' }
    ]
  };

  const FooterSection = ({ title, delay, children }) => (
    <motion.div 
      className="footer-section"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {title && <h3>{title}</h3>}
      {children}
    </motion.div>
  );

  return (
    <footer ref={footerRef} className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <FooterSection delay={0}>
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
        </FooterSection>

        {/* Quick Links */}
        <FooterSection title="Quick Links" delay={0.1}>
          <ul className="footer-links">
            {sections.quickLinks.map(({ name, path }) => (
              <li key={name}>
                <a href={path}>{name}</a>
              </li>
            ))}
          </ul>
        </FooterSection>

        {/* Services */}
        <FooterSection title="Our Services" delay={0.2}>
          <div className="footer-info">
            {sections.services.map(({ name, icon: Icon, path }) => (
              <a key={name} href={path} className="footer-item footer-service-link">
                <span className="service-icon-wrapper"><Icon /></span>
                <span className="service-text">{name}</span>
              </a>
            ))}
          </div>
        </FooterSection>

        {/* Exam Prep */}
        <FooterSection title="Exam Preparation" delay={0.3}>
          <div className="footer-info">
            {sections.exams.map(({ name, path }) => (
              <a key={name} href={path} className="footer-item footer-exam-link">
                <span className="exam-icon-wrapper"><FaPencilAlt /></span>
                <span className="exam-text">{name}</span>
              </a>
            ))}
          </div>
        </FooterSection>

        {/* Academics */}
        <FooterSection title="Academic Programs" delay={0.4}>
          <div className="footer-info">
            {sections.academics.map(({ name, path }) => (
              <a key={name} href={path} className="footer-item footer-exam-link">
                <span className="exam-icon-wrapper"><FaPencilAlt /></span>
                <span className="exam-text">{name}</span>
              </a>
            ))}
          </div>
        </FooterSection>

        {/* Contact Info */}
        <FooterSection title="Contact Info" delay={0.5}>
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