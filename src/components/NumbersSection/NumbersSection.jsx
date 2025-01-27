import React from 'react';
import './NumbersSection.css';

const NumbersSection = () => {
    const numbersData = [
        { number: "1M+", title: "Customers" },
        { number: "12+", title: "Years of Excellence" },
        { number: "41+", title: "R&D Engineers" },
        { number: "78+", title: "Countries" },
        { number: "3287+", title: "Partners" },
        { number: "41+", title: "Awards Received" },
    ];
    return (
        <div className='numbers'>
            <h3 className='numbers-heading'>Why Register karo</h3>
            <p className='numbers-subheading'>Some Numbers are important</p>
            <div className='numbers-list'>
                {numbersData.map((item, index) => (
                    <div key={index} className='numbers-item'>
                        <p className='main-number'>{item.number}</p>
                        <p className='number-title'>{item.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NumbersSection;
