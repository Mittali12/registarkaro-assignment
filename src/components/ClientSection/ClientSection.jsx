import React from 'react';
import './ClientSection.css';
import { FaArrowRight } from "react-icons/fa";

const ClientSection = () => {
    return (
        <div className='clients-section-container'>
            <div className='clients-content'>
                <h3 className='clients-section-heading'>Our Happy Clients</h3>
                <p className='clients-section-description'>
                    Professionally cultivate one-to-one customer service with robust ideas. Dynamically innovate
                    resource-leveling customer service for state-of-the-art customer service.
                </p>
            </div>
            <img src='images/bubbles.png' alt='Clients' className='clients-image' />
            <a href='./' className='clients-show-more-link'>
             <p> Show More </p> <FaArrowRight />
            </a>
        </div>
    );
};

export default ClientSection;
