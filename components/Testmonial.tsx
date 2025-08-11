"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// This component contains the swiper logic and styling for the testimonials.
const TestimonialSlider = () => {
  // An array of objects to hold the testimonial data. You can replace this with your own content.
  const testimonials = [
    {
      text: "This product has completely transformed my workflow. The results were immediate and incredibly positive. I highly recommend it to anyone looking to improve their efficiency!",
      name: "Alex Johnson",
    },
    {
      text: "Working with this team was an amazing experience. They were professional, attentive, and delivered beyond my expectations. I couldn't be happier with the outcome.",
      name: "Maria Rodriguez",
    },
    {
      text: "I was initially skeptical, but this service proved to be exactly what I needed. It's user-friendly, reliable, and the support team is fantastic. I'm a customer for life!",
      name: "Jordan Lee",
    },
  ];

  // Configuration for the react-slick slider.
  const sliderSettings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop the slider
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-advance the slides
    autoplaySpeed: 5000, // Time between slides in ms
    arrows: false, // Hide the default navigation arrows
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 md:p-6 text-white">
      <h3 className="text-3xl font-bold text-center text-white mb-6">What My Clients Say</h3>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          // Each testimonial is a single slide in the carousel.
          <div key={index} className="px-4 py-6">
            <div className="flex flex-col items-center text-center space-y-4">
              {/* The main testimonial text */}
              <p className="text-lg font-light text-gray-300 leading-relaxed italic">
                {testimonial.text}
              </p>
              {/* The author's name */}
              <p className="text-lg font-bold text-blue-500">
                - {testimonial.name}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
