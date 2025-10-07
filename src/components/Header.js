import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Path array to keep track of open menu chain, e.g. ['Services','Exam Preparation','SAT']
  const [openPath, setOpenPath] = useState([]);

  // Mobile accordion open keys (strings like "Services" or "Services>Exam Preparation")
  const [mobileOpenKeys, setMobileOpenKeys] = useState([]);

  // Track current path for active links
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.nav-item') && !e.target.closest('.dropdown')) {
        setOpenPath([]);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
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
        { name: "A Level", path: "/alevel" },
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

  // Desktop: toggle dropdown on click
  const handleNavClick = (e, name, hasChildren) => {
    if (hasChildren) {
      e.preventDefault();
      setOpenPath((prev) => (prev[0] === name ? [] : [name]));
    }
  };

  // When clicking a dropdown item with children, update the path
  const handleDropdownClick = (e, pathArray, hasChildren) => {
    if (hasChildren) {
      e.preventDefault();
      setOpenPath(pathArray);
    } else {
      setOpenPath([]);
    }
  };

  // Mobile open toggle (keys like "Services" or "Services>Exam Preparation")
  const toggleMobileKey = (key) => {
    setMobileOpenKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileOpenKeys([]);
  };

  // Simple SVG icons
  const BarsIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );

  const TimesIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );

  const EnvelopeIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );

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
          const currentPathArray = [...parentPath, child.name];
          const hasChildren = !!child.children?.length;
          return (
            <div key={child.name} className="dropdown-item">
              <a
                href={child.path}
                className={`dropdown-link ${currentPath === child.path ? "active" : ""}`}
                onClick={(e) => handleDropdownClick(e, currentPathArray, hasChildren)}
              >
                {child.name}
                {hasChildren && <span style={{ marginLeft: '8px' }}>›</span>}
              </a>
              {/* If this child has children, show nested dropdown when openPath matches */}
              {child.children && openPath[level] === child.name && (
                <AnimatePresence>
                  {renderDropdown(child.children, level + 1, currentPathArray)}
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
          className={`mobile-link ${(currentPath === link.path) ? "active" : ""} ${link.isHighlighted ? "highlighted" : ""}`}
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
          {navLinks.map((link) => {
            const hasChildren = !!link.children?.length;
            return (
              <motion.div
                key={link.name}
                className="nav-item"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href={link.path}
                  className={`${currentPath === link.path ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.name, hasChildren)}
                >
                  {link.name}
                  {hasChildren && <span style={{ marginLeft: '4px' }}>▾</span>}
                </a>

                {/* render dropdown when top-level name matches openPath[0] */}
                {link.children && openPath[0] === link.name && (
                  <AnimatePresence>{renderDropdown(link.children, 1, [link.name])}</AnimatePresence>
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
            className={`enquire-now-desktop highlighted ${currentPath === "/contact" ? "active" : ""}`}
          >
            Enquire Now
          </motion.a>
        </div>

        {/* Mobile button */}
        <button className="mobile-menu-btn" onClick={() => { setIsMobileMenuOpen((s) => !s); setOpenPath([]); }}>
          {isMobileMenuOpen ? <TimesIcon /> : <BarsIcon />}
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
                  <PhoneIcon />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="contact-item">
                  <EnvelopeIcon />
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
