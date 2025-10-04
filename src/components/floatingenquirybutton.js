// FloatingEnquiryButton.jsx - Create this as a new component
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelope, FaTimes } from 'react-icons/fa';
import './floatingenquirybutton.css';

function FloatingEnquiryButton() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Hide tooltip after 5 seconds
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    navigate('/contact');
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="floating-enquiry-container"
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                className="enquiry-tooltip"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <span>Need help? Contact us!</span>
                <button 
                  className="tooltip-close"
                  onClick={() => setShowTooltip(false)}
                  aria-label="Close tooltip"
                >
                  <FaTimes />
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Button */}
          <motion.button
            className="floating-enquiry-btn"
            onClick={handleClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Enquiry Now"
          >
            <FaEnvelope className="btn-icon" />
            <span className="btn-text">Enquiry Now</span>
          </motion.button>

          {/* Pulse Animation Ring */}
          <div className="pulse-ring"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default FloatingEnquiryButton;