"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: "-30% 0px -55% 0px",
      threshold: 0,
    }
  );

  navItems.forEach((item) => {
    const section = document.getElementById(item.id);
    if (section) observer.observe(section);
  });

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 60);
    setIsOpen(false);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();

    setIsOpen(false);

    const section = document.getElementById(id);

    if (!section) return;

    const offset = 90;

    const top =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      offset;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setActiveSection(id);
  };

  return (
    <motion.header
      className="navbar-header"
      animate={{
        height: isScrolled ? 68 : 88,
        backgroundColor: isScrolled
          ? "rgba(7,10,19,.95)"
          : "rgba(7,10,19,.85)",
        boxShadow: isScrolled
          ? "0 4px 20px rgba(0,0,0,.25)"
          : "0 0 0 rgba(0,0,0,0)",
        borderBottomColor: isScrolled
          ? "rgba(255,255,255,.08)"
          : "rgba(255,255,255,.04)",
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={{
        borderBottomWidth: "1px",
        borderBottomStyle: "solid",
      }}
    >
      <div className="navbar-container">
        <a
          href="#hero"
          className="navbar-logo"
          onClick={(e) => handleNavClick(e, "hero")}
        >
          <motion.img
            src="/mgm_logo.png"
            alt="MGM University Logo"
            className="navbar-logo-img"
            animate={{
              height: isScrolled ? 34 : 44,
            }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
          />

          SANKALP <span>2027</span>
        </a>

        <nav className="navbar-desktop">
          <ul className="navbar-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`navbar-link ${
                    activeSection === item.id ? "active" : ""
                  }`}
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

          <button
            className="navbar-toggle-btn"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="navbar-toggle-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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

      <div className={`navbar-mobile ${isOpen ? "open" : ""}`}>
        <ul className="navbar-mobile-list">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`navbar-mobile-link ${
                  activeSection === item.id ? "active" : ""
                }`}
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