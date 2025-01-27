import React from 'react'
import './StepsSection.css'
import { SiGoogleforms } from "react-icons/si";
import { FaMoneyCheck } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md"
import { IoMailSharp } from "react-icons/io5";

const StepsSection = () => {
    return (
        <div className='steps-container'>
            <div className='step-item'>
                <div className='step-icon-container step-icon-container-red'>
                    <SiGoogleforms color='white' className='step-icon' />
                </div>
                <p>Fill up Application Form</p>
            </div>
            <div className='step-item'>
                <div className='step-icon-container step-icon-container-green'>
                    <FaMoneyCheck color='white' className='step-icon' />
                </div>
                <p>Make Online Payment</p>
            </div>
            <div className='step-item'>
                <div className='step-icon-container step-icon-container-brown'>
                    <MdOutlineSupportAgent color='white' className='step-icon' />
                </div>
                <p>Executive will Process Application</p>
            </div>
            <div className='step-item'>
                <div className='step-icon-container step-icon-container-gray'>
                    <IoMailSharp color='white' className='step-icon' />
                </div>
                <p>Get Confirm Mail</p>
            </div>
        </div>
    )
}

export default StepsSection;
