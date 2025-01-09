import React from "react";

const Hero = () => {
  return (
    <>
    {/* desktop */}
    <div className="hidden lg:block">
    <div className="bg-hero-gradient pt-[7em] pl-[3em] text-left text-white h-[300px] w-full flex justify-start flex-col ">
      <div className="flex items-center justify-between w-[570px] mt-[1em]">
<p className="lg:text-[39px] font-semibold text-center mt-[1em] ml-10">Contact Us</p>
      </div>
    </div>
    </div>

{/* mobile */}
    <div className="bg-hero-gradient pt-[7em] text-center text-white h-[300px] w-full flex justify-center lg:hidden">
      <div className="items-center  w-[570px] mt-[1em]">
<p className="text-[39px] font-semibold text-center mt-[1em]">Contact Us</p>
      </div>
    </div>
    </>
  );
};

export default Hero;
