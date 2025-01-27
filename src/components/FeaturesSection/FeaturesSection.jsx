import React from 'react';
import './FeaturesSection.css';
import { AiFillSafetyCertificate } from "react-icons/ai";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaSmile } from "react-icons/fa";
import { FcBusinessman } from "react-icons/fc";

const FeaturesSection = () => {
  const firstRowfeatures = [
    {
      id: 1,
      icon: <AiFillSafetyCertificate color="#F45C20" size={50} />,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-orange",
    },
    {
      id: 2,
      icon: <IoIosCheckmarkCircle color="#3DCD5C" size={50} />,
      title: "No Hidden Fee",
      description: "Everything is put before you with no hidden charges or conditions",
      bgColor: "bg-green",
    },

  ];
  const secondRowFeatures = [
    {
      id: 1,
      icon: <AiFillSafetyCertificate color="#F45C20" size={50} />,
      title: "Confidential & Safe",
      description: "All your private information is safe with us",
      bgColor: "bg-light-green",
    },

    {
      id: 2,
      icon: <FcBusinessman color="#D5414F" size={50} />,
      title: "Expert CA/CS Assistance",
      description: "Prompt support from our in-house expert professionals",
      bgColor: "bg-pink",
    },
    {
      id: 3,
      icon: <FaSmile color="#2F6AE1" size={50} />,
      title: "Guaranteed Satisfaction",
      description: "We ensure that you stay 100% satisfied with our offered services",
      bgColor: "bg-blue",
    },
  ]
  return (
    <div className='features-section'>
      <div className="features">
        <div className="features-content">
          <div className="features-text">
            <h3>WHY REGISTERKARO.IN</h3>
            <p className="features-subheading">Why Choose Register Karo</p>
            <p className="features-description">
              It is with consistent services and results that build trust with the people and that in
              turn help us to serve the business better.
            </p>
          </div>

        </div>
        <div className="features-cards">
          {firstRowfeatures.map((feature, index) => (
            <div key={index} className={`feature-card ${feature.bgColor}`}>
              {feature.icon}
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div className="features-second-cards">
          {secondRowFeatures.map((feature, index) => (
            <div key={index} className={`feature-card ${feature.bgColor}`}>
              {feature.icon}
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
