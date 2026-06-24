"use client";

import React from "react";
import Card from "./ui/Card";

export default function Overview() {

  const objectives = [
    "Provide an international platform for researchers, academicians, industry leaders, and policymakers to share recent advancements in sustainability science, engineering, and intelligent technologies.",
    "Promote research and innovation supporting global sustainability goals, climate resilience, decarbonization, and resource-efficient development.",
    "Facilitate collaboration among academia, industry, government organizations, and research institutions for addressing sustainability challenges through technology-driven solutions.",
    "Encourage the application of Artificial Intelligence, Knowledge Systesm, Digital Technologies, and Industry 5.0 principles for sustainable engineering and infrastructure development.",
    "Showcase emerging technologies, best practices, and successful case studies in renewable energy, smart manufacturing, intelligent infrastructure, and environmental management.",
    "Strengthen global research networks and foster international partnerships for sustainable technological advancement and societal progress.",
  ];

  return (
    <section id="about" className="section-padding overview-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About the Conference</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-text-block">
              <div className="about-block-header">
                <svg className="overview-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                <h3>ICAEITSF Scope</h3>
              </div>
              <p>
                SANKALP-2027 provides a multidisciplinary platform covering emerging trends, scientific breakthroughs, and industrial innovations in sustainability-focused engineering and technology domains. The conference welcomes original research contributions, case studies, industrial applications, and innovative practices related to:

              </p>
              <p>
                Sustainable Energy Systems and Decarbonization Technologies
              </p>
              <p>
                Smart and Sustainable Built Environments
              </p>
              <p>
                Sustainable Manufacturing and Circular Econonomy
              </p>
            </div>
          </div>

        {/* Objectives Section */}
        <div className="objectives-container">
          <Card className="objectives-card" hoverable={false}>
            <h3>Conference Objectives</h3>
            <ul className="objectives-list">
              {objectives.map((obj, index) => (
                <li key={index} className="objectives-item">
                  <div className="objective-marker">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p>{obj}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>

         

        <div className="overview-split-layout">
          {/* Left Column: Text Information */}
          <div className="overview-text-col">
            <div className="about-text-block">
              <div className="about-block-header">
                <svg className="overview-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                <h3>MGM University</h3>
              </div>
              <p>
                The MGM Trust continues its journey of imparting value-based services and creating global technocrats
                with its self-financed private "MGM University" launched at Chhatrapati Sambhajinagar, Maharashtra with the approval
                of the Government of Maharashtra and the passing of the MGM University Act 2019.
              </p>
              <p>
                <strong>“In a gentle way, you can shake the world.”</strong> With this philosophy and ideology of Mahatma Gandhi, MGM
                established an educational trust in 1982 under the guidance of former Education Minister Shri Kamalkishor
                Kadam and a group of founder members who are hard-core academicians and visionaries. The Trust established
                its pioneering institute in the historical city of Chhatrapati Sambhajinagar, home to the heritage sites of Ajanta & Ellora
                but lacking in premiere educational institutes.
              </p>
              <p>
                For more than four decades, Mahatma Gandhi Mission has blazed a trail of academic excellence and state-of-the-art health care services. A strong dynamic institution that keeps pace with the demands of the modern world, prominent locations and excellent education facilities makes MGM worthwhile and an exciting choice for education.
              </p>
              <p>
                It has acquired the reputation of being one of the premiere educational & health services charitable trusts in India. In all, during this journey, Mahatma Gandhi Mission has established its mark over 6 campuses having over 70 colleges, Institutions, and Centers of Engineering, Architecture, Medical, Nursing, Management, Computer Science, IT, Biotechnology, Science, Commerce, Fine Arts, Ceramic and Pottery, Performing Arts, Fashion Design, Mass Communication & Journalism, Film Arts, and Photography.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
