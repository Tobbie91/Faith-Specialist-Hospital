import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import WhoText from "./whoText";



const WhoSection = () => {
  return (
    <div className="  mt-[-2em] items-center px-[4em]">
      <div className=" px-[1em] py-[2em]">
        <div className="px-[4.1%] py-6 lg:px-[4.2%] lg:pt-[40px] lg:pb-0 max-w-screen-xxl xxl:mx-auto">
          <div className="lg:flex justify-between items-center gap-8">
            <div className="hidden lg:block lg:w-[55%] mt-[3em]">
              <StaticImage src="../../images/whoImage.webp" alt="Doctor" />
            </div>
            <div className="lg:hidden mt-[2em] ">
              <StaticImage src="../../images/whoImage.webp" alt="Doctor" />
            </div>
            <WhoText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoSection;
