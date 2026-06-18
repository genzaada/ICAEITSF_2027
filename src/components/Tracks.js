"use client";

import React, { useState } from "react";
import Card from "./ui/Card";

export default function Tracks() {
  const [activeTrack, setActiveTrack] = useState(null);

  const tracks = [
    {
      id: 1,
      title: "Sustainable Energy Systems & Decarbonization",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      topics: [
        "Renewable Energy Systems",
        "Energy Storage Technologies",
        "Smart Grids & Microgrids",
        "Hydrogen Energy Systems",
        "Carbon Capture & Emission Reduction",
        "Net-Zero Energy Solutions",
      ],
    },
    {
      id: 2,
      title: "Smart & Sustainable Built Environments",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      topics: [
        "Intelligent Buildings",
        "Green & Net-Zero Buildings",
        "Smart Cities & Smart Districts",
        "Digital Twins for Infrastructure",
        "Sustainable Urban Development",
        "Building Energy Management Systems",
      ],
    },
    {
      id: 3,
      title: "Sustainable Manufacturing & Circular Economy",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 6H16m0 0h1m-1 0v1m-1 4a2 2 0 11-4 0m2-5a2 2 0 11-4 0" />
        </svg>
      ),
      topics: [
        "Sustainable Manufacturing Technologies",
        "Industry 5.0 Applications",
        "Resource-Efficient Production",
        "Circular Economy Models",
        "Recycling & Waste Valorization",
        "Sustainable Supply Chains",
      ],
    },
    {
      id: 4,
      title: "Artificial Intelligence & Digital Technologies",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      topics: [
        "AI & Machine Learning Applications",
        "Big Data Analytics",
        "Internet of Things (IoT)",
        "Decision Support Systems",
        "Digital Transformation for Sustainability",
        "Cyber-Physical Systems",
      ],
    },
    {
      id: 5,
      title: "Climate Change & Environmental Management",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 002 2h2a2.5 2.5 0 002.5-2.5V14a2 2 0 012-2h.068M10.485 20.485C14.86 19.86 18 16 18 12c0-4.97-4.03-9-9-9-3.7 0-6.88 2.24-8.24 5.46M12 21a9 9 0 110-18 9 9 0 010 18z" />
        </svg>
      ),
      topics: [
        "Climate Change Mitigation & Adaptation",
        "Environmental Impact Assessment",
        "Air & Water Quality Management",
        "Natural Resource Conservation",
        "Sustainable Agriculture Systems",
        "Environmental Monitoring Technologies",
      ],
    },
    {
      id: 6,
      title: "Sustainable Transportation & Infrastructure",
      icon: (
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      ),
      topics: [
        "Smart Transportation Systems",
        "Electric & Autonomous Vehicles",
        "Intelligent Road Infrastructure",
        "Structural Health Monitoring",
        "Infrastructure Resilience",
        "Disaster-Resistant Engineering Systems",
      ],
    },
  ];

  return (
    <section id="tracks" className="section-padding tracks-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Scope of Work</span>
          <h2 className="section-title">Conference Tracks</h2>
          <div className="section-divider"></div>
        </div>

        <div className="tracks-grid">
          {tracks.map((track) => (
            <Card
              key={track.id}
              className={`track-card ${activeTrack === track.id ? "active-track" : ""}`}
              onClick={() => setActiveTrack(activeTrack === track.id ? null : track.id)}
            >
              <div className="track-icon-wrapper">{track.icon}</div>
              <h3>{track.title}</h3>
              <p className="track-hint">Click to expand topics</p>

              <div className={`track-topics-container ${activeTrack === track.id ? "expanded" : ""}`}>
                <ul className="track-topics-list">
                  {track.topics.map((topic, idx) => (
                    <li key={idx} className="track-topic-item">
                      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
