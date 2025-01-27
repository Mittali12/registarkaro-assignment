import React from "react";
import { FaBuilding, FaChartBar, FaMapMarkerAlt } from "react-icons/fa";
import { TbDeviceDesktopSearch } from "react-icons/tb";
import { BiRightArrowCircle } from "react-icons/bi";
import "./ServicesSection.css";

const ServicesSection = () => {
    const services = [
        {
            id: 1,
            title: "Company Formation",
            description: "Build web-based solutions that enhance customer experience.",
            icon: <FaBuilding size={50} color="#f5a623" />,
        },
        {
            id: 2,
            title: "Company Secretarial Services",
            description: "Make data-driven decisions and utilize technology to reach business goals.",
            icon: <TbDeviceDesktopSearch size={50} color="#f5a623" />,
        },
        {
            id: 3,
            title: "Virtual Office Address",
            description: "Foster customer relationships by effectively serving your market.",
            icon: <FaMapMarkerAlt size={50} color="#f5a623" />,
        },
        {
            id: 4,
            title: "Annual Compliance Services",
            description: "Turn your ideas into modern products with our design experts.",
            icon: <FaBuilding size={50} color="#f5a623" />,
        },
        {
            id: 5,
            title: "Payroll Services",
            description: "Expand your business across the globe with minimal effort.",
            icon: <FaChartBar size={50} color="#f5a623" />,
        },
        {
            id: 6,
            title: "Virtual Office Address",
            description: "Steering user behaviours with creative design, data insights technology.",
            icon: <FaMapMarkerAlt size={50} color="#f5a623" />,
        },
    ];

    return (
        <div className="services-section">
            <h2 className="services-section__heading">
                Welcome to RegisterKaro.in
            </h2>
            <h3 className="services-section__subheading">Explore Our Services</h3>
            <div className="services-section__grid">
                {services.map((service) => (

                    <div className="services-section__card" key={service.id}>
                        <div className="services-section__icon">{service.icon}</div>
                        <h4 className="services-section__title">{service.title}</h4>
                        <p className="services-section__description">{service.description}</p>
                        <a href="'./" className="services-section__link">
                            <p> Learn more</p> <BiRightArrowCircle size={20} />
                        </a>

                    </div>

                ))}
            </div>
            <button className="services-button">See All Services</button>
        </div>
    );
};

export default ServicesSection;
