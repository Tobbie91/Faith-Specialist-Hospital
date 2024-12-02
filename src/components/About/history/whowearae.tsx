import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import WhoText from "./whoText";



const WhoSection = () => {
  return (
    <>
    {/* Desktop */}
    <div className="  mt-[-2em] px-[4em] hidden lg:block ">
      <div className=" px-[1em] py-[2em]">
        <div className="px-[4.1%] py-6 lg:px-[4.2%] lg:pt-[40px] lg:pb-0 max-w-screen-xxl xxl:mx-auto">
          <div className="grid grid-cols-2 gap-[2em]">
            <div className="hidden lg:block lg:w-full mt-[3em]">
              <StaticImage src="../../../images/whoImage.webp" alt="Doctor" />
            </div>
            <WhoText />
          </div>
        </div>
      </div>
    </div>

    {/* <Mobile */}
      <div className="  mt-[-2em] items-center  lg:hidden">
      <div className=" px-[1em] py-[2em]">
        <div className=" py-6  max-w-screen-xxl xxl:mx-auto">
          <div className="items-center gap-8">
            <div className=" mt-[2em] w-[100%] ">
              <StaticImage src="../../../images/whoImage.webp" alt="Doctor" />
            </div>
            <WhoText />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default WhoSection;
