import React from "react";
import { IoSearch } from "react-icons/io5";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar-container">
            <img
                src="images/logo.jpg"
                alt="Registar Karo Logo"
                className="logo-image"
                width={200}
            />
            <div className='navbar-items'>
                <ul className="navbar-list">
                    <li><a href="./" aria-label="Home" className='list-item'>Home</a></li>
                    <li><a href="./" aria-label="Our Services" className='list-item'>Our Services</a>  &#11167;</li>
                    <li><a href="./" aria-label="Blog" className='list-item'>Blog</a></li>
                    <li><a href="./" aria-label="Contact Us" className='list-item'>Contact Us</a></li>
                    <li><a href="./" aria-label="About Us" className='list-item'>About Us</a></li>
                </ul>
                <IoSearch size={17} />
                <button className='navbar-button'>Talk to Expert</button>
            </div>

        </nav>
    );
};

export default Navbar;


