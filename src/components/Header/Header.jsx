import React from 'react';
import { IoMdMail } from "react-icons/io";
import { MdCall } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header-content'>
                <div className='icon'>
                    <IoMdMail style={{ color: '#fff' }} size={17} />
                </div>
                <a className='mail-link' href='http://www.registarkaro.in/'>www.registarkaro.in</a>
            </div>
            <div className='header-content'>
                <div className='icon'>
                    <MdCall size={17} style={{ transform: 'rotate(250deg)', color: '#fff' }} />
                </div>
                <span>+918447746183</span>
            </div>
            <div className='header-social-icons'>
                <FaInstagram style={{ color: '#fff', cursor: 'pointer' }} size={17} />
                <FaFacebook style={{ color: '#fff', cursor: 'pointer' }} size={17} />
                <FaTwitter style={{ color: '#fff', cursor: 'pointer' }} size={17} />
                <FaPinterest style={{ color: '#fff', cursor: 'pointer' }} size={17} />
            </div>
        </div>
    );
}

export default Header;
