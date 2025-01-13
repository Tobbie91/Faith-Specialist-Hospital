import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const StoriesLink = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block p-[5em]">
        <div className="flex gap-[3em]">
          <StaticImage
            src="../../images/Grace3.png"
            alt="Grace"
            className="xl:w-[290%] xxl:w-[150%] lg:w-[800%] p-[2em]"
          />
          <div className="w-[1200px]">
            <h2 className="text-[33px] font-normal mb-[1em]">
              11-Year-Old Grace Overcomes Blount’s Disease
            </h2>
            <p className="text-[16px] font-light text-[#444A5B] mb-[2em]">
              Grace struggled with severe bowlegs due to Blount's disease for
              years, visiting many hospitals without success. After surgery at
              Faith Specialist Hospital, her transformation was remarkable—she
              now stands tall and walks confidently. Faith Specialist Hospital
              gave Grace a new lease on life!
            </p>
            <Link to="/patientstory" className="mt-[4em]">
              <span className="text-teal-600 lg:text-[18px] font-semibold mt-[4em]">
                Read Full Story
              </span>
            </Link>
          </div>
        </div>

      
      
      </div>
      {/* Mobile */}

      <div className="lg:hidden md:hidden">

      <div className="flex flex-col ">
        <div className="p-[2em] rounded-lg">
          <StaticImage
           src="../../images/Grace3.png"
            alt="Grace"
            className=""
          />
          </div>
          <div className="">
            <h2 className="text-[28px] font-normal mb-[1em] px-2">
              11-Year-Old Grace Overcomes Blount’s Disease
            </h2>
            <p className="text-[16px] font-light text-[#444A5B] mb-[2em] px-2">
              Grace struggled with severe bowlegs due to Blount's disease for
              years, visiting many hospitals without success. After surgery at
              Faith Specialist Hospital, her transformation was remarkable—she
              now stands tall and walks confidently. Faith Specialist Hospital
              gave Grace a new lease on life!
            </p>
            <Link to="/patientstory" className="mt-[4em] px-2">
              <span className="text-teal-600 lg:text-[18px] font-semibold mt-[4em] px-2">
                Read Full Story
              </span>
            </Link>
          </div>
        </div>

      </div>
    </>
  );
};

export default StoriesLink;
