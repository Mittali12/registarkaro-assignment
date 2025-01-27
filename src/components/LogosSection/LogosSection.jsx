import React from 'react';
import './LogosSection.css';

const LogosSection = () => {
  const logos = [
    { logoImage: 'images/oracle.png' },
    { logoImage: 'images/segment.png' },
    { logoImage: 'images/monday.png' },
    { logoImage: 'images/samsung.png' },
    { logoImage: 'images/segment.png' },
    { logoImage: 'images/morpheus.png' },
  ];

  return (
    <div className="logos-section">
      <h3 className="logos-section__title">
        Trusted By Over 100+ Startups and Freelance Businesses
      </h3>
      <div className="logos-section__grid">
        {logos.map((logo, index) => (
          <img
            key={`logo_${index}`}
            src={logo.logoImage}
            alt={`logo_${index}`}
            className="logos-section__image"
          />
        ))}
      </div>
    </div>
  );
};

export default LogosSection;
