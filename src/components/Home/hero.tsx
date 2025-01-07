import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalImages]);

  const handleIndicatorClick = (index: React.SetStateAction<number>) => {
    setCurrentIndex(index);
  };

  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block relative w-full h-[720px] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            height: "100%",
          }}
        >
          <div className="min-w-full h-full relative font-sans ">
            <StaticImage
              src="../../images/HeroImages2.png"
              alt="Hero Image 1"
              layout="fullWidth"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h1 className="text-white text-[60px] font-medium text-center">
                COMPREHENSIVE GENERAL <br /> MEDICINE
              </h1>
            </div>
          </div>
          <div className="min-w-full h-full  relative">
            <StaticImage
              src="../../images/HeroImages1.png"
              alt="Hero Image 2"
              layout="fullWidth"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h1 className="text-white text-[60px] font-semibold text-center">
                ADVANCED SURGICAL SOLUTIONS
              </h1>
            </div>
          </div>
          <div className="min-w-full h-full  relative">
            <StaticImage
              src="../../images/HeroImages3.png"
              alt="Hero Image 3"
              layout="fullWidth"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h1 className="text-white text-[60px] font-semibold text-center">
                EXCEPTIONAL PEDIATRIC <br />
                ORTHOPEDICS
              </h1>
            </div>
          </div>
          <div className="min-w-full h-full relative">
            <StaticImage
              src="../../images/HeroImages4.png"
              alt="Hero Image 4"
              layout="fullWidth"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h1 className="text-white text-[60px] font-semibold text-center">
                ADVANCED SPINE <br />
                SURGICAL SERVICES
              </h1>
            </div>
          </div>
          <div className="min-w-full h-full relative">
            <StaticImage
              src="../../images/HeroImages5.png"
              alt="Hero Image 5"
              layout="fullWidth"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h1 className="text-white text-[60px] font-semibold text-center">
                TOTAL JOINT REPLACEMENT <br />
                PROCEDURES
              </h1>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-6 h-6 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              } transition-colors duration-300`}
            ></button>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden relative w-full h-[700px] overflow-hidden">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            height: "100%",
          }}
        >
          <div className="min-w-full h-full relative">
            <StaticImage
              src="../../images/MobileHero1.png"
              alt="Hero Image 1"
              layout="fullWidth"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h1 className="text-white text-[34px] font-medium text-center">
                COMPREHENSIVE <br /> GENERAL MEDICINE
              </h1>
            </div>
          </div>
          <div className="min-w-full h-full relative">
            <StaticImage
              src="../../images/MobileHero2.png"
              alt="Hero Image 2"
              layout="fullWidth"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h1 className="text-white text-[34px] font-semibold text-center">
                ADVANCED SURGICAL <br />
                SOLUTIONS
              </h1>
            </div>
          </div>
          <div className="min-w-full h-full relative">
            <StaticImage
              src="../../images/MobileHero3.png"
              alt="Hero Image 3"
              layout="fullWidth"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h1 className="text-white text-[34px] font-semibold text-center">
                EXCEPTIONAL PEDIATRIC <br />
                ORTHOPEDICS
              </h1>
            </div>
          </div>
          <div className="min-w-full h-full relative">
            <StaticImage
              src="../../images/MobileHero4.png"
              alt="Hero Image 4"
              layout="fullWidth"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h1 className="text-white text-[34px] font-semibold text-center">
                ADVANCED SPINE <br />
                SURGICAL SERVICES
              </h1>
            </div>
          </div>
          <div className="min-w-full h-full relative">
            <StaticImage
              src="../../images/MobileHero5.png"
              alt="Hero Image 5"
              layout="fullWidth"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center ">
              <h1 className="text-white text-[34px] font-semibold text-center">
                TOTAL JOINT <br /> REPLACEMENT <br />
                PROCEDURES
              </h1>
            </div>
          </div>
        
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-6 h-6 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-500"
                } transition-colors duration-300`}
              ></button>
            ))}
          </div>
      </div>
    </>
  );
};

export default HeroSection;
