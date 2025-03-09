import React, { useRef } from "react";
import Slider from "react-slick";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi2";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ReviewSection.css";

const ReviewSection = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const testimonials = [
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Chris",
      designation: "President and CEO, PrintReach, USA",
      rating: 4.5,
      image: "./images/profileImage.png",
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Alex",
      designation: "Founder, XYZ Corp, USA",
      rating: 4.0,
      image: "./images/profileImage.png",
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Samantha",
      designation: "CTO, ABC Inc, USA",
      rating: 5.0,
      image: "./images/profileImage.png",
    },
    {
      quote: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      name: "Michael",
      designation: "Manager, TechSolutions, USA",
      rating: 4.8,
      image: "./images/profileImage.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="review-container">
      <div className="review-header">
        <h3 className="heading">What people say about us</h3>
        <div className="arrows-container">
          <button className="custom-prev" onClick={handlePrev}>
            <HiChevronLeft />
          </button>
          <button className="custom-next" onClick={handleNext}>
            <HiChevronRight />
          </button>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings} className="testimonial-section">
        {testimonials.map((testimonial, index) => (
          <div className="review-box" key={index}>
            <div className="review-rating">
              <div className="testimonial-quote">
                <img src="images/quoteIcon.png" alt="Quote" />
              </div>
              <div className="testimonial-rating">
                {"★".repeat(Math.floor(testimonial.rating))}
                {testimonial.rating % 1 !== 0 && "☆"}
              </div>
            </div>
            <p className="testimonal-text">{testimonial.quote}</p>
            <div className="testimonial-profile">
              <img src={testimonial.image} alt="profile" width={70} height={70} />
              <div>
                <h5>{testimonial.name}</h5>
                <p>{testimonial.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSection;
