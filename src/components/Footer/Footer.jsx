import React from "react";
import "./Footer.css";
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const Footer = () => {
    const socialIcons = [
        { icon: <FaInstagram size={24} />, alt: "Instagram" },
        { icon: <FaFacebook size={24} />, alt: "Facebook" },
        { icon: <FaTwitter size={24} />, alt: "Twitter" },
        { icon: <FaPinterest size={24} />, alt: "Pinterest" },
    ];
    const footerConfig = [
        {
            heading: "START A BUSINESS",
            items: ["Features", "Resources", "Pricing", "Blog", "Contact Us"],
        },
        {
            heading: "RESOURCES",
            items: ["Documentation", "API Reference", "Community", "Tutorials", "Support"],
        },
        {
            heading: "COMPANY",
            items: ["About Us", "Careers", "Press", "Partners", "Privacy Policy"],
        },
        {
            heading: "LEGAL",
            items: ["Terms of Service", "Privacy Policy", "Security", "GDPR", "Accessibility"],
        },
    ];


    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-main-content">
                    <p className="footer-description">
                        Design outstanding interfaces with advanced Figma features in a matter of minutes.
                    </p>
                    <div className="footer-social">
                        {socialIcons.map((social, index) => (
                            <div
                                key={index}
                                className="social-icon"
                                style={{ color: "#fff", cursor: "pointer" }}
                                title={social.alt}
                            >
                                {social.icon}
                            </div>
                        ))}
                    </div>
                </div>

              
                <div className="footer-links">
                    {footerConfig.map((section, index) => (
                        <div key={index} className="footer-column">
                            <h3 className="footer-heading">{section.heading}</h3>
                            <ul className="footer-items">
                                {section.items.map((item, itemIndex) => (
                                    <li key={itemIndex}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-year">© 2024 Registerkaro. All Rights Reserved.</div>
        </div>
    );
};

export default Footer;
