import React from "react";
import "./HeroPage.css";
import { FaStar } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa6";
import { PiUsersThreeLight } from "react-icons/pi";
import { IoCaretBackCircle } from "react-icons/io5";

const HeroPage = () => {
  const stars = Array(5).fill(0);

  return (
    <div className="hero-page">
      <div className="hero-rating">
        <p className="hero-rating__label">
          <FaStar className="hero-rating__icon" size={20} /> Google Rating
        </p>
        <div className="hero-rating__stars">
          {stars.map((_, index) => (
            <div key={index} className="hero-rating__star">
              <FaStar className="hero-rating__star-icon" size={18} />
            </div>
          ))}
        </div>
      </div>

      <h1 className="hero-heading">Your trusted partner for compliance business needs</h1>
      <hr className="hero-divider hero-divider--red" />

      <p className="hero-description">
        An online business compliance platform that helps entrepreneurs and other individuals with various
        <b> registrations</b>, <b>tax filings</b>, and other <b>legal matters</b>.
      </p>

      <div className="hero-numbers">
        <div className="hero-numbers__item">
          <CiGrid41 className="hero-numbers__icon" size={50} />
          <div className="hero-numbers__content">
            <p className="hero-numbers__text">4.5+</p>
            <p className="hero-numbers__description">Customer Rating</p>
          </div>
        </div>

        <div className="hero-numbers__item">
          <PiUsersThreeLight className="hero-numbers__icon" size={50} />
          <div className="hero-numbers__content">
            <p className="hero-numbers__text">20,000+</p>
            <p className="hero-numbers__description">Clients</p>
          </div>
        </div>

        <div className="hero-numbers__item">
          <FaRegHandshake className="hero-numbers__icon" size={50} />
          <div className="hero-numbers__content">
            <p className="hero-numbers__text">99.8%</p>
            <p className="hero-numbers__description">Financial Stability</p>
          </div>
        </div>
      </div>

      <div className="hero-actions">
        <button className="hero-actions__button">Talk to an Expert</button>
        <div className="hero-actions__video">
          <IoCaretBackCircle className="hero-actions__video-icon" size={25} />
          <p className="hero-actions__video-label">See how it works</p>
        </div>
      </div>

    </div>
  );
};

export default HeroPage;
