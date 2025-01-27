import React from 'react';
import { FaApple } from "react-icons/fa";
import './AppSection.css';

const AppSection = () => {
    return (
        <div className='app-container'>
            <div className='app-content'>
                <h3 className='app-heading'>Manage Your Services by your
                    Mobile Phone</h3>
                <p className='app-desc'>Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress. </p>
                <p className='app-info'>Get the App</p>
                <div className='apps-logo'>
                    <div className='app-store-logo'>
                    <FaApple color='#A5C937' size={32} />
                        <div className='app-details'>
                            <p className='app-desc-info'>Get it On</p>
                            <p className='app-name'>App Store</p>
                        </div>
                    </div>
                    <div className='app-store-logo'>
                    <FaApple color='#A5C937' size={32} />
                        <div className='app-details'>
                            <p className='app-desc-info'>Get it On</p>
                            <p className='app-name'>App Store</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='app-phones'>
                <img src='images/phone.png' alt='small phone' className='small-phone-img' />
                <img src='images/phone.png' alt='large phone' className='phone-img' />
            </div>

        </div>
    );
};

export default AppSection;
