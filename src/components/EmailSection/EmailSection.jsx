import React from 'react'
import { FaCheckCircle } from "react-icons/fa";

import './EmailSection.css'
const EmailSection = () => {
  return (
    <div className='email-section'>
      <p className='email-section-heading'>1% OF THE INDUSTRY</p>
      <h3 className='email-section-subheading'>Welcome to your new digital reality. Now.</h3>
      <div className='email-input-container'>
      <input className='email-input' placeholder='Enter Your Email'/>
      <p className='submit-button'>Submit</p>

      </div>
      <div className='email-benefits'>
          <p className='benefit-point'><FaCheckCircle /> Instant results
          </p>
          <p className='benefit-point'><FaCheckCircle /> User-friendly interface
          </p>
          <p className='benefit-point'><FaCheckCircle /> Personalized customization
          </p>
      </div>
    </div>
  )
}

export default EmailSection