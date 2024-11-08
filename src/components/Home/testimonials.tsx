import { StaticImage } from "gatsby-plugin-image";
import React, { useState } from "react";
import { testimonials } from "../constants";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const { title, description, img } = testimonials[currentIndex];

  return (
    // <div className='flex items-center justify-center'>
    <div className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center ">
      <h2 className="text-3xl font-semibold text-white mb-8">
        Patients Tell Their Stories
      </h2>

      <div className="relative flex items-center justify-center w-full max-w-3xl p-3 bg-[#F4F5F7] rounded-lg shadow-lg">
        {/* Left arrow */}
        <button
  onClick={handlePrevious}
  className="absolute -left-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full hover:bg-gray-300 shadow-lg"
>
  &lt;
</button>


        {/* Testimonial content */}
        <div className="flex items-center">
          <div className="w-2/3 pl-[1.5em]">
            <h3 className="lg:text-[22px] font-bold text-gray-800  mt-[1em]">
              {title}
            </h3>
            <p className="text-gray-600 mb-[0.5em] lg:text-[15px]  mt-[1em] ">
              {description}
            </p>
            <a
              href="#"
              className="text-teal-600 lg:text-[18px] font-semibold mt-4 inline-block  mb-[2em]"
            >
              Read More
            </a>
          </div>
            <img src={img.url} alt={img.alt} className="w-full lg:w-80 h-auto rounded-lg" />
        
        </div>

        {/* Right arrow */}
        <button
          onClick={handlePrevious}
          className="absolute -right-4 top-1/2 transform -translate-y-1/2 p-3 bg-gray-200 rounded-full hover:bg-gray-300"
        >
          &gt;
        </button>
      </div>

      {/* Indicators */}
      <div className="flex space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-teal-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* See All Stories button */}
      <button className="mt-8 px-[4em] py-2 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-teal-600 transition">
        See All Stories
      </button>
    </div>
  );
};

export default TestimonialCarousel;
