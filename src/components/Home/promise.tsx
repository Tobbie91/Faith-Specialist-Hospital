import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PromiseText from "./promiseText";

const PromiseSection = () => {
  return (
    <div className="mt-[9em] items-center px-[4em]">
      <div className="bg-white shadow-lg rounded-lg border border-[#f4f5f7] px-[1em] py-[2em]">
        <div className="px-[4.1%] py-6 lg:px-[4.2%] lg:pt-[40px] lg:pb-0 max-w-screen-xxl xxl:mx-auto">
          <div className="lg:flex justify-between items-center">
            <div className="hidden lg:block lg:w-[45%] mt-[-15em]">
              <StaticImage src="../../images/Image.webp" alt="Doctor" />
            </div>
            <div className="lg:hidden mt-[2em]">
              <StaticImage src="../../images/Image.webp" alt="Doctor" />
            </div>
            <PromiseText />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromiseSection;
