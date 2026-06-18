import React from "react";
import Card from "./ui/Card";

export default function Sponsors() {
  const sponsors = [
    { name: "IEEE", type: "Technical Co-Sponsor (Requested)", desc: "World's largest technical professional organization dedicated to advancing technology." },
    { name: "IETE", type: "Technical Partner (Proposed)", desc: "The Institution of Electronics and Telecommunication Engineers, India's leading professional society." },
    { name: "IEI", type: "Institutional Partner", desc: "The Institution of Engineers (India), promoting engineering standards across the nation." },
    { name: "WoS", type: "Indexing Partner (Proposed)", desc: "Leading global citation database to index accepted peer-reviewed proceedings." },
  ];

  return (
    <section id="sponsors" className="section-padding sponsors-section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Partnerships</span>
          <h2 className="section-title">Technical & Financial Sponsors</h2>
          <div className="section-divider"></div>
        </div>

        <div className="sponsors-grid">
          {sponsors.map((s, idx) => (
            <Card key={idx} className="sponsor-card">
              <div className="sponsor-logo-box">
                <h4>{s.name}</h4>
              </div>
              <span className="sponsor-type">{s.type}</span>
              <p className="sponsor-desc">{s.desc}</p>
            </Card>
          ))}
        </div>

        <div className="sponsors-footer-card">
          <Card className="sponsors-callout-card" hoverable={false}>
            <h3>Financial Sponsorship Call</h3>
            <p>
              We welcome partnerships and financial sponsorships from local and national technology industries. Connect with our committee to explore exhibition stalls, company logo branding, and session-naming opportunities.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
