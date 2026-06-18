"use client";

import React from "react";
import Button from "./ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Decorative animated mesh grids */}
      <div className="hero-bg-network"></div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          International Conference on Advances of <br />
          <span>Engineering & Intelligent Technologies for a Sustainable Future</span>
        </h1>
        
        <motion.div
          className="hero-date-badge"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            22-23 January 2027
          </motion.span>
        </motion.div>
        <div className="hero-organizer">
          <svg className="hero-org-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
          Organized by MGM University, Chhatrapati Sambhajinagar
        </div>
        <div className="hero-buttons">
          <Button
            href="#submission"
            onClick={(e) => handleScrollTo(e, "submission")}
            variant="primary"
            className="hero-btn"
          >
            Submit Paper
          </Button>
          <Button
            href="#registration"
            onClick={(e) => handleScrollTo(e, "registration")}
            variant="secondary"
            className="hero-btn"
          >
            Register Now
          </Button>
        </div>
      </div>
    </section>
  );
}
