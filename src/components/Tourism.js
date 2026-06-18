"use client";

import React, { useState } from "react";
import Card from "./ui/Card";

export default function Tourism() {
  const [activeSlide, setActiveSlide] = useState(0);

  const spots = [
    {
      title: "Daulatabad Fort",
      desc: "Daulatabad Fort is a fortified citadel located atop a conical hill, rising 200 meters above sea level. Featuring a formidable three-layer defense system, it served as the capital of the Yadava Dynasty and secondary capital of the Ahmadnagar Sultanate.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Ajanta Caves",
      desc: "The UNESCO-listed Ajanta Caves constitute 30 ancient rock-cut Buddhist cave monuments. These caves contain magnificent mural paintings depicting the past lives of Buddha (Jataka tales) and date from the 2nd century BCE to about 480 CE.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Ellora Caves",
      desc: "One of the largest rock-cut monastery-temple cave complexes in the world, Ellora features Buddhist, Hindu, and Jain monuments. The highlight is the monolithic Kailash Temple (Cave 16), carved top-down from a single basalt rock cliff.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l-2 2m2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Panchakki (Water Mill)",
      desc: "Panchakki is an ingenious water mill designed to generate clean energy via spring water piped from hills 6km away. Attached to the Sufi dargah of Baba Shah Musafir, it stands as a testament to medieval Indian scientific thinking.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      title: "Bibi Ka Maqbara",
      desc: "Commissioned in 1660 by Mughal Emperor Aurangzeb in memory of his wife Dilras Banu Begum, the monument bears a striking resemblance to the Taj Mahal. Built of marble and plaster, it stands as the 'Taj of the Deccan'.",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? spots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === spots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="tourism" className="section-padding tourism-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Local Attractions</span>
          <h2 className="section-title">Chhatrapati Sambhajinagar Tourism</h2>
          <div className="section-divider"></div>
        </div>

        <div className="tourism-slider-container">
          <button className="slider-control-btn prev-btn" onClick={handlePrev} aria-label="Previous slide">
            &larr;
          </button>

          <div className="tourism-slide-view">
            {spots.map((spot, idx) => (
              <div key={idx} className={`tourism-slide-card-wrapper ${activeSlide === idx ? "active-slide" : "hidden-slide"}`}>
                <Card className="tourism-slide-card" hoverable={false}>
                  <div className="tourism-card-icon-frame">{spot.icon}</div>
                  <div className="tourism-card-text">
                    <h3>{spot.title}</h3>
                    <p>{spot.desc}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <button className="slider-control-btn next-btn" onClick={handleNext} aria-label="Next slide">
            &rarr;
          </button>
        </div>

        {/* Bullet Indicator dots */}
        <div className="slider-dots">
          {spots.map((_, idx) => (
            <button
              key={idx}
              className={`slider-dot ${activeSlide === idx ? "active-dot" : ""}`}
              onClick={() => setActiveTab(idx)}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
