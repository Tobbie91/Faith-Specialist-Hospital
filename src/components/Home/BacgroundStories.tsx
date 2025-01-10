import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
//@ts-ignore
const BackgroundSection = ({ children, padding = 'p-8' }) => {
  return (
    <div className="relative lg:min-h-screen ">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <StaticImage
          src="../../images/PatientStories.webp"
          alt="Hero Background"
          layout="fullWidth"
          className="object-cover w-full h-[125vh] lg:h-[110vh]"
        />
      </div>
      
      {/* Content with Padding */}
      <div className={`relative z-10 w-full h-full flex items-center justify-center ${padding}`}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundSection;
