import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PromiseText from "./promiseText";

const PromiseSection = () => {
  return (
    <>
      {/* Desktop */}
      <div className="mt-[9em] px-[4em] hidden lg:block md:block ">
        <div className="bg-white shadow-lg rounded-lg border border-[#f4f5f7] px-[1em] py-[2em]">
          <div className="px-[4.1%] py-6 lg:px-[4.2%] lg:pt-[40px] lg:pb-0 max-w-screen-xxl xxl:mx-auto">
            <div className="flex gap-[40px]">
              <div className=" lg:w-full mt-[-6em]">
                <StaticImage src="../../images/Image.webp" alt="Doctor" />
              </div>
              <PromiseText />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="mt-[2.5em] items-center px-[1.5em] lg:hidden md:hidden">
        <div className="bg-white shadow-lg rounded-lg border border-[#f4f5f7] px-[1em] py-[2em]">
          <div className="px-[%] pb-3 lg:px-[4.2%] max-w-screen-xxl xxl:mx-auto">
            <div className="lg:flex justify-between items-center">
              <div className="lg:hidden md:hidden mt-[0.5em] w-[100%] h-[400px]">
                <StaticImage src="../../images/ImageMobile.webp" alt="Doctor" />
              </div>
              <PromiseText />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PromiseSection;
