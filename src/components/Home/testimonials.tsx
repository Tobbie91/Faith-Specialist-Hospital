import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { LeftSlide } from "../../assets/icons/leftSlide";
import { RightSlide } from "../../assets/icons/RightSlide";
import { testimonials } from "../constants";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // 5000ms = 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

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
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center ">
          <h2 className="text-[39px] font-semibold text-white mb-8 ">
            Patients Tell Their Stories
          </h2>

          <div className="relative flex items-center justify-center w-full max-w-[1240px] lg:max-h-[526px] xxl:h-[526px] p-3 bg-[#F4F5F7] rounded-[28px] shadow-lg">
            {/* Left arrow */}
            <button
              onClick={handlePrevious}
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 ml-[-0.9em]"
            >
              <LeftSlide />
            </button>

            {/* Testimonial content */}
            <div className="flex items-center">
              <div className="w-2/3 pl-[1.5em]">
                <h3 className="lg:text-[28px] font-bold text-gray-800  mt-[1em] pr-4">
                  {title}
                </h3>
                <p className="text-gray-600 mb-[0.5em] lg:text-[20px]  mt-[1em] font-light pr-7">
                  {description}
                </p>
                {/* <a
                  href="#"
                  className="text-teal-600 lg:text-[18px] font-semibold mt-4 inline-block  mb-[2em]"
                >
                  Read More
                </a> */}
                {/* <a
                  href="#"
                  className="text-teal-600 lg:text-[18px] font-semibold mt-4 inline-block mb-[2em] relative hover:underline hover:decoration-green-800 hover:underline-offset-4 focus:underline focus:decoration-green-800 focus:underline-offset-4"
                >
                  Read More
                </a> */}
                <Link
  to={testimonials[currentIndex].link}
  className="text-teal-600 lg:text-[18px] font-semibold mt-4 inline-block mb-[2em] relative hover:underline hover:decoration-green-800 hover:underline-offset-4 focus:underline focus:decoration-green-800 focus:underline-offset-4"
>
  Read More
</Link>
              </div>
              <img
                src={img.url}
                alt={img.alt}
                className=" w-[50%] h-[500px] rounded-lg"
              />
            </div>

            {/* Right arrow */}
            <button
              onClick={handlePrevious}
              className="absolute -right-4 top-1/2 transform -translate-y-1/2 mr-[-1em] "
            >
              <RightSlide />
            </button>
          </div>

          {/* Indicators */}
          <div className="flex space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`w-6 h-6 rounded-full cursor-pointer ${
                  currentIndex === index ? "bg-teal-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <Link to="/stories">
            <button className="mt-8 px-[4em] py-2 bg-transparent border border-white text-white rounded-md hover:bg-green-100 hover:text-teal-600 transition w-[323px] h-[56px] font-semibold">
              See All Stories
            </button>
          </Link>
        </div>
      </div>
      {/* Mobile */}

      <div className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-center lg:hidden w-full">
        <h2 className="text-[33px] mt-[1em] font-semibold text-white mb-8 text-center">
          <span className="whitespace-nowrap">Patients Tell Their</span> <br />
          Stories
        </h2>

        <div className="relative flex flex-col rounded-[28px] shadow-lg">
          <img
            src={img.url}
            alt={img.alt}
            className=" h-auto rounded-[10px] w-[100%]"
          />
          {/* Testimonial content */}
          <div className="flex bg-[#F4F5F7] rounded-b-[28px] px-2">
            <div className="">
              <h3 className="text-[23px] font-semibold text-gray-800  mt-[1em] px-[em]">
                {title}
              </h3>
              <p className="text-gray-600 mb-[0.5em] text-[16px]  mt-[1em] font- normal px-[em]">
                {description}
              </p>
              {/* <a
                href="#"
                className="text-teal-600 text-[18px] font-semibold mt-4 inline-block  mb-[2em] px-[em]"
              >
                Read More
              </a> */}
              <Link
  to={testimonials[currentIndex].link}
  className="text-teal-600 text-[16px] sm:text-[18px] font-semibold mt-4 inline-block mb-8 px-4 hover:underline hover:decoration-green-800 hover:underline-offset-4 focus:underline focus:decoration-green-800 focus:underline-offset-4"
>
  Read More
</Link>

            </div>
          </div>
        </div>

        {/* Indicators */}
        <div className="flex space-x-2 mt-[2em]">
          {testimonials.map((_, index) => (
            <span
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-teal-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* See All Stories button */}
        <Link to="/stories">
          <button className="mt-8 px-[4em] h-[56px] py-2 bg-transparent border border-white text-white rounded-md hover:bg-white hover:text-teal-600 transition font-semibold">
            See All Stories
          </button>
        </Link>
      </div>
    </>
  );
};

export default TestimonialCarousel;
