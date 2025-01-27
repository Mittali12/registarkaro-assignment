import React, { useState } from 'react';
import { FaAngleRight, FaAngleDown, FaArrowRight } from "react-icons/fa";
import './Accordian.css';

const Accordian = () => {
    const [openId, setOpenId] = useState(null); 

    const AccordianQuestions = [
        {
            id: 1,
            question: 'Can I recover deleted files from desktop with this software?',
            answer: 'Yes, this software allows you to recover deleted files from the desktop and other locations.'
        },
        {
            id: 2,
            question: 'What operating systems are supported?',
            answer: 'Our software supports Windows and macOS operating systems.'
        },
        {
            id: 3,
            question: 'Is there a free trial available?',
            answer: 'Yes, a 7-day free trial is available with limited features.'
        },
        {
            id: 4,
            question: 'How do I contact customer support?',
            answer: 'You can contact customer support via email or chat on our website.'
        },
        {
            id: 5,
            question: 'Can I recover files from an external hard drive?',
            answer: 'Yes, you can recover files from external drives as long as they are connected to your computer.'
        }
    ];

    const toggleAccordion = (id) => {
        setOpenId(prevId => (prevId === id ? null : id)); // Toggle the open/close state
    };

    return (
        <div className='accordian'>
            <h3 className='accordian-heading'>FAQ</h3>
            <h5 className='accordian-sunHeading'>Frequent Ask Questions</h5>

            <div className='acccordian-content'>
                {AccordianQuestions.map((question) => (
                    <div key={question.id} className='accordian-item'>
                        <div 
                            className='accordian-question' 
                            onClick={() => toggleAccordion(question.id)}
                        >
                            <p>{question.question}</p>
                            {openId === question.id ? <FaAngleDown /> : <FaAngleRight />}
                        </div>
                        
            
                        {openId === question.id && (
                            <div className='accordian-answer'>
                                <p>{question.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <button className='themeButton'>Show more <FaArrowRight /></button>
        </div>
    );
};

export default Accordian;
