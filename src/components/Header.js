import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaPhone, FaEnvelope } from "react-icons/fa";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // NEW: path array to keep track of open menu chain, e.g. ['Services','Exam Preparation','SAT']
  const [openPath, setOpenPath] = useState([]);

  // Mobile accordion open keys (strings like "Services" or "Services>Exam Preparation")
  const [mobileOpenKeys, setMobileOpenKeys] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "/services",
      children: [
        {
          name: "Exam Preparation",
          path: "#",
          children: [
            { name: "SAT", path: "/sat" },
            { name: "ACT", path: "/act" },
            { name: "AP", path: "/ap" },
            { name: "MYP/IB", path: "/myp" },
            { name: "AMC", path: "/amc" },
            { name: "IGCSE", path: "/igcse" },
            { name: "A LEVEL", path: "/alevel" },
            { name: "GMAT", path: "gmat" },
            { name: "GRE", path: "/gre" }
          ]
        },
        { name: "Admission Consultancy", path: "/consultancy" },
        { name: "Tutoring Center", path: "/tutoring" },
        { name: "Research", path: "/research" }
      ]
    },
    { name: "Events & Workshops", path: "/events" },
    { name: "Blogs", path: "/blogs" },
    { name: "Newsletter", path: "/newsletter" },
    { name: "Internship", path: "/internship" }
  ];

  const mobileNavLinks = [...navLinks, { name: "Enquire Now", path: "/contact", isHighlighted: true }];

  // Desktop: when mouse enters a top-level nav item, set openPath to [name]
  const handleNavMouseEnter = (name) => setOpenPath([name]);
  const handleNavMouseLeave = () => setOpenPath([]);

  // When entering a dropdown item at any depth, set full path
  const handleDropdownEnter = (pathArray) => setOpenPath(pathArray);

  // Mobile open toggle (keys like "Services" or "Services>Exam Preparation")
  const toggleMobileKey = (key) => {
    setMobileOpenKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenKeys([]);
  };

  // Recursive renderer for desktop dropdowns
  const renderDropdown = (links, level = 1, parentPath = []) => {
    // level 1 = first dropdown under a top-level nav
    return (
      <motion.div
        className="dropdown"
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.14 }}
        // add data-level for CSS targeting if you want
        data-level={level}
      >
        {links.map((child) => {
          const currentPath = [...parentPath, child.name]; // e.g. ['Services','Exam Preparation']
          return (
            <div
              key={child.name}
              className="dropdown-item"
              onMouseEnter={() => handleDropdownEnter(currentPath)}
              onMouseLeave={() => {}}
            >
              <a
                href={child.path}
                className={`dropdown-link ${location.pathname === child.path ? "active" : ""}`}
              >
                {child.name}
              </a>

              {/* If this child has children, show nested dropdown when openPath[level] === child.name */}
              {child.children && openPath[level] === child.name && (
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

  // Recursive renderer for mobile menu (accordion)
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

      // simple link (no children)
      return (
        <a
          key={key}
          href={link.path}
          className={`mobile-link ${(location.pathname === link.path) ? "active" : ""} ${link.isHighlighted ? "highlighted" : ""}`}
          onClick={closeMobileMenu}
        >
          {link.name}
        </a>
      );
    });
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <div className="logo">
          <img src="/logoengage.png" alt="EngageHub Logo" />
        </div>

        {/* Desktop nav */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              className="nav-item"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onMouseEnter={() => handleNavMouseEnter(link.name)}
              onMouseLeave={handleNavMouseLeave}
            >
              <a href={link.path} className={`${location.pathname === link.path ? "active" : ""}`}>
                {link.name}
              </a>

              {/* render dropdown when top-level name matches openPath[0] */}
              {link.children && openPath[0] === link.name && (
                <AnimatePresence>{renderDropdown(link.children, 1, [link.name])}</AnimatePresence>
              )}
            </motion.div>
          ))}
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
        <button className="mobile-menu-btn" onClick={() => { setIsMobileMenuOpen((s) => !s); setOpenPath([]); }}>
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
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <span>info@engagehub.com</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
