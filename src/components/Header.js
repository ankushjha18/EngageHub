import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openPath, setOpenPath] = useState([]);
  const [mobileOpenKeys, setMobileOpenKeys] = useState([]);
  
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setOpenPath([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Exam Preparation",
      path: "#",
      children: [
        { name: "SAT", path: "/sat" },
        { name: "ACT", path: "/act" },
        { name: "GMAT", path: "/gmat" },
        { name: "GRE", path: "/gre" },
      ]
    },
    {
      name: "Academics",
      path: "#",
      children: [
        { name: "AP Courses", path: "/ap" },
        { name: "MYP", path: "/myp" },
        { name: "AMC", path: "/amc" },
        { name: "IGCSE", path: "/igcse" },
        { name: "A LEVEL", path: "/alevel" },
        { name: "IB", path: "/ib" },
      ]
    },
    {
      name: "Services",
      path: "#",
      children: [
        { name: "Admission Counselling", path: "/consultancy" },
        { name: "Internship", path: "/internship" },
        { name: "Research", path: "/research" },
        { name: "Essay Editing Services", path: "/essay" }
      ]
    },
    { name: "Events & Workshops", path: "/events" },
    { name: "Blogs", path: "/blogs" },
    { name: "Newsletter", path: "/newsletter" }
  ];

  const mobileNavLinks = [...navLinks, { name: "Enquire Now", path: "/contact", isHighlighted: true }];

  // Desktop: Toggle dropdown on click
  const handleNavClick = (e, name, hasChildren) => {
    if (hasChildren) {
      e.preventDefault();
      setOpenPath((prev) => (prev[0] === name ? [] : [name]));
    }
  };

  // Handle nested dropdown clicks
  const handleDropdownClick = (e, pathArray, hasChildren) => {
    if (hasChildren) {
      e.preventDefault();
      e.stopPropagation();
      setOpenPath(pathArray);
    } else {
      setOpenPath([]);
    }
  };

  // Mobile toggle
  const toggleMobileKey = (key) => {
    setMobileOpenKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenKeys([]);
  };

  // Recursive renderer for desktop dropdowns
  const renderDropdown = (links, level = 1, parentPath = []) => {
    return (
      <motion.div
        className="dropdown"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.14 }}
        data-level={level}
      >
        {links.map((child) => {
          const currentPath = [...parentPath, child.name];
          const hasChildren = !!child.children?.length;
          const isOpen = openPath[level] === child.name;

          return (
            <div key={child.name} className="dropdown-item">
              <a
                href={child.path}
                className={`dropdown-link ${location.pathname === child.path ? "active" : ""}`}
                onClick={(e) => handleDropdownClick(e, currentPath, hasChildren)}
              >
                {child.name}
                {hasChildren && <span className="dropdown-arrow">›</span>}
              </a>

              {hasChildren && isOpen && (
                <AnimatePresence>
                  {renderDropdown(child.children, level + 1, currentPath)}
                </AnimatePresence>
              )}
            </div>
          );
        })}
      </motion.div>
    );
  };

  // Recursive renderer for mobile menu
  const renderMobileLinks = (links, parentKey = "") => {
    return links.map((link) => {
      const key = parentKey ? `${parentKey}>${link.name}` : link.name;
      const hasChildren = !!link.children?.length;
      const isOpen = mobileOpenKeys.includes(key);

      if (hasChildren) {
        return (
          <div key={key} className="mobile-link-group">
            <button
              type="button"
              className="mobile-link-toggle"
              onClick={() => toggleMobileKey(key)}
            >
              <span>{link.name}</span>
              <span className="mobile-toggle-icon">{isOpen ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="mobile-submenu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {renderMobileLinks(link.children, key)}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      }

      return (
        <a
          key={key}
          href={link.path}
          className={`mobile-link ${location.pathname === link.path ? "active" : ""} ${link.isHighlighted ? "highlighted" : ""}`}
          onClick={closeMobileMenu}
        >
          {link.name}
        </a>
      );
    });
  };

  return (
    <header ref={headerRef} className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/logoengage.png" alt="EngageHub Logo" />
        </div>

        {/* Desktop nav */}
        <nav className="nav-desktop">
          {navLinks.map((link) => {
            const hasChildren = !!link.children?.length;
            const isOpen = openPath[0] === link.name;

            return (
              <motion.div
                key={link.name}
                className="nav-item"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href={link.path}
                  className={`${location.pathname === link.path ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.name, hasChildren)}
                >
                  {link.name}
                  {hasChildren && <span className="nav-arrow">▾</span>}
                </a>

                {hasChildren && isOpen && (
                  <AnimatePresence>
                    {renderDropdown(link.children, 1, [link.name])}
                  </AnimatePresence>
                )}
              </motion.div>
            );
          })}
        </nav>

        <div className="enquire-now-desktop">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`enquire-now-desktop highlighted ${location.pathname === "/contact" ? "active" : ""}`}
          >
            Enquire Now
          </motion.a>
        </div>

        {/* Mobile button */}
        <button
          className="mobile-menu-btn"
          onClick={() => {
            setIsMobileMenuOpen((s) => !s);
            setOpenPath([]);
          }}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22 }}
            >
              {renderMobileLinks(mobileNavLinks)}

              <div className="mobile-contact">
                <div className="contact-item">
                  <FaPhone className="contact-icon" />
                  <span>+971 55 272 8339</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>divya@engagehub.me</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}