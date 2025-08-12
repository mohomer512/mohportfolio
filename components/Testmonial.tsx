"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const testimonials = [
    {
      text: "This product has completely transformed my workflow. !",
      name: "client",
    },
    {
      text: "Working with this team was an amazing experience. They were professional, .",
      name: "client",
    },
    {
      text: "I was initially skeptical, but this service proved to be  exactly what I needed.!",
      name: "client",
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 md:p-6 text-white">
      <h3 className="text-3xl font-bold text-left text-accent mb-6">
        What My Clients Say
      </h3>
      <Slider {...sliderSettings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-4 py-6">
            <div className="flex flex-col items-start text-left space-y-4 pr-6">
              {/* النص الرئيسي */}
              <p className="text-left font-light text-gray-300 leading-relaxed italic">
                {testimonial.text}
              </p>
              {/* اسم الكاتب */}
              <p className="text-sm font-bold text-blue-500">
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