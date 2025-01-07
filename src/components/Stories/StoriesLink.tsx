import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const StoriesLink = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="flex">
          <StaticImage
            src="../../images/image1.png"
            alt="Grace"
            className="xl:w-[290%] xxl:w-[390%] lg:w-[800%]"
          />
          <div>
            <h2 className="text-[33px] font-normal">
              11-Year-Old Grace Overcomes Blount’s Disease
            </h2>
            <p className="text-[16px] font-light text-[#444A5B]">
              Grace struggled with severe bowlegs due to Blount's disease for
              years, visiting many hospitals without success. After surgery at
              Faith Specialist Hospital, her transformation was remarkable—she
              now stands tall and walks confidently. Faith Specialist Hospital
              gave Grace a new lease on life!
            </p>
            <Link to="">
              <span className="text-teal-600 lg:text-[18px] font-semibold mt-4 ">
                Read More
              </span>
            </Link>
          </div>
        </div>

      
      
      </div>
      {/* Mobile */}

      <div className=""></div>
    </>
  );
};

export default StoriesLink;
