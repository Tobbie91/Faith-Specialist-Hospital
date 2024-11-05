// import React, { useEffect, useState } from "react";
// import { StaticImage } from "gatsby-plugin-image"; 

// const HeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const images = [
//     { src: "../../../images/HeroImages1.webp", alt: "Hero Image 1" },
//     { src: "../../../images/HeroImages2.webp", alt: "Hero Image 2" },
//     { src: "../../../images/HeroImages3.webp", alt: "Hero Image 3" },
//     { src: "../../../images/HeroImages4.webp", alt: "Hero Image 4" },
//     { src: "../../../images/HeroImages5.webp", alt: "Hero Image 5" },
//   ];

//   const totalImages = images.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, [totalImages]);

//   return (
//     <div className="relative w-full h-screen overflow-hidden">
//       <div
//         className="flex transition-transform duration-1000 ease-in-out"
//         style={{ transform: `translateX(-${currentIndex * 100}%)`, height: '100%' }}
//       >
//         {images.map((image, index) => (
//           <div key={index} className="min-w-full h-full">
//             <StaticImage
//               src={image.src}
//               alt={image.alt}
//               layout="fullWidth"
//               className="object-cover h-full w-full" // Using Tailwind classes for styling
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useEffect, useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalImages = 5; // Number of images

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(interval);
  }, [totalImages]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)`, height: '100%' }}
      >
        <div className="min-w-full h-full">
          <StaticImage
            src="../../images/HeroImages2.webp" 
            alt="Hero Image 1"
            layout="fullWidth"
            className="object-cover h-full w-full" 
          />
        </div>
        <div className="min-w-full h-full">
          <StaticImage
            src="../../images/HeroImages1.webp"
            alt="Hero Image 2"
            layout="fullWidth"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="min-w-full h-full">
          <StaticImage
            src="../../images/HeroImages3.webp"
            alt="Hero Image 3"
            layout="fullWidth"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="min-w-full h-full">
          <StaticImage
            src="../../images/HeroImages4.webp"
            alt="Hero Image 4"
            layout="fullWidth"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="min-w-full h-full">
          <StaticImage
            src="../../images/HeroImages5.webp"
            alt="Hero Image 5"
            layout="fullWidth"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
