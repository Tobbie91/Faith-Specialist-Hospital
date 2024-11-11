import React from "react";

const AboutHero = () => {
  return (
    <div className="bg-hero-gradient pt-[7em] pl-[3em] text-left text-white h-[350px] w-full flex justify-start flex-col ">
      <div className="flex items-center justify-between w-[570px] mt-[1em]">
        <div className="border-t-2 border-white flex-grow"></div>
        <p className="lg:text-[20px] font-normal text-white tracking-wider mx-4">
          ABOUT FAITH SPECIALIST HOSPITAL
        </p>
        <div className="border-t-2 border-white flex-grow"></div>
      </div>

      <h2 className="lg:text-[39px] font-semibold text-white mt-4 leading-tight">
        Your Trusted Partner in Quality Healthcare and <br />
        Orthopedic Excellence
      </h2>
    </div>
  );
};

export default AboutHero;
