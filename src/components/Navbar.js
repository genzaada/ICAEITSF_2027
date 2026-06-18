"use client";

import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
  const handleScroll = () => {
    setIsOpen(false);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "submission", label: "Submission" },
    { id: "tracks", label: "Tracks" },
    { id: "timeline", label: "Dates" },
    { id: "registration", label: "Registration" },
    { id: "speakers", label: "Speakers" },
    { id: "committee", label: "Committee" },
    { id: "tourism", label: "Tourism" },
    { id: "sponsors", label: "Sponsors" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky scrolled state
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const scrollPosition = window.scrollY + 120; // offset for sticky header

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = isScrolled ? 68 : 88; // height of the navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(id);
    }
  };

  return (
    <motion.header
      className="navbar-header"
      animate={{
        height: isScrolled ? 68 : 88,
        backgroundColor: isScrolled ? "rgba(7, 10, 19, 0.95)" : "rgba(7, 10, 19, 0.85)",
        boxShadow: isScrolled 
          ? "0 4px 20px rgba(0, 0, 0, 0.25)" 
          : "0 0 0 rgba(0, 0, 0, 0)",
        borderBottomColor: isScrolled
          ? "rgba(255, 255, 255, 0.08)"
          : "rgba(255, 255, 255, 0.04)"
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        borderBottomWidth: "1px",
        borderBottomStyle: "solid"
      }}
    >
      <div className="navbar-container">
        <a href="#hero" onClick={(e) => handleNavClick(e, "hero")} className="navbar-logo">
          <motion.img
            src="/mgm_logo.png"
            alt="MGM University Logo"
            className="navbar-logo-img"
            animate={{ height: isScrolled ? 34 : 44 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          />
          ICAEITSF <span>2027</span>
        </a>

        {/* Desktop Navbar */}
        <nav className="navbar-desktop">
          <ul className="navbar-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`navbar-link ${activeSection === item.id ? "active" : ""}`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="navbar-cta-group">
          <a href="/admin" className="admin-link">
            Admin Portal
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="navbar-toggle-btn"
            aria-label="Toggle menu"
          >
            <svg
              className="navbar-toggle-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className={`navbar-mobile ${isOpen ? "open" : ""}`}>
        <ul className="navbar-mobile-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`navbar-mobile-link ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="navbar-mobile-cta">
            <a href="/admin" className="admin-link">
              Admin Portal
            </a>
          </li>
        </ul>
      </div>
    </motion.header>
  );
}
