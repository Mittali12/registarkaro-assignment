import React from 'react';
import { BiRightArrowCircle } from "react-icons/bi";
import './AboutSection.css';

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="about-text">
                <p className="about-heading">WELCOME TO REGISTERKARO.IN</p>
                <div className="about-subheading">
                    <span>About </span>
                    <span className="highlight-text">Register Karo</span>
                </div>
                <p className="about-description">
                    We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                    their performance, ability to execute, and willingness to adapt in our ever-changing environment. Perry is an outstanding leader who is fanatical about
                    customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.
                </p>
                <p className="about-description">
                    I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.
                </p>
                <button className='themeButton'>Learn More <BiRightArrowCircle size={20} /></button>
            </div>
            <img 
                src="images/About.png" 
                alt="About Us" 
                className="about-image" 
            />
        </div>
    );
};

export default AboutSection;
