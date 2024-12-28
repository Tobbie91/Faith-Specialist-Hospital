import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Informed = () => {
  return (
    <>
      {/* Desktop */}
      <div className=" mt-[-22em] mb-[2em] hidden lg:block bg-white ">
        <div className="px-[4.1%] pt-[2em] pb-[13px]  ">
          <div className="flex justify-between ">
            <div className="pl-4  ">
              <h1 className="lg:text-[48px] font-medium mt-[9em]">
                Stay Informed, Stay Healthy
              </h1>
              <p className="lg:text-[20px] font-light text-[#444A5B]">
                Expert Insights and Health Tips from Faith Specialist Hospital
              </p>
            </div>
            <Link to="/blog">
            <div className="flex justify-end mt-[27em] rounded-md">
              <button className="w-[195px] h-[56px] text-[#019E7D] font-semibold text-[18px] border border-[#017B64] rounded-md hover:bg-green-100">
              Sell All Blog Post
              </button>
       
            </div>
            </Link>
          </div>
          <div className="hidden lg:grid grid-cols-2 lg:gap-[21px] xl:gap-[60px] lg:items-start mb-[4em]  ">
            <div className="flex flex-col justify-start pl-[1em] mt-[4em]">
              <StaticImage
                src="../../images/Informedimage.webp"
                alt="Hero Background"
                layout="fullWidth"
                className="object-cover w-full h-[60vh] mb-4 rounded-lg"
              />
              <div className="flex space-x-4 text-[14px] font-light text-[#1D1F1E]">
                <div className="border border-gray-300 rounded-full px-4 py-1">
                  <p>Orthopedics</p>
                </div>
                <div className="border border-gray-300 rounded-full px-4 py-1">
                  <p>Surgery</p>
                </div>
              </div>

              <p className="lg:text-[33px] font-semibold text-[#444A5B] mt-[1em] leading-tight">
                Understanding Joint Replacement Surgery
              </p>
              <p className="text:[#646A69]  line-clamp-2 lg:text-[18px] font-light">
                Joint replacement surgery can be a life-changing procedure for
                those suffering from chronic joint pain. In this article, we
                explain the process, benefits, and recovery expectations of
                joint replacement surgery. Learn how our advanced techniques at
                Faith Specialist Hospital can help you regain your mobility and
                improve your quality of life.
              </p>
            </div>
            <div className="mt-[3em] p-[]">
              <div className="mt-5 space-y-5">
                <div className="flex gap-[26px]">
                  <StaticImage
                    src="../../images/Informedimage1.webp"
                    alt="Hero Background"
                    layout="fullWidth"
                    className="object-cover w-[217px] h-[177px] mb-4 rounded-lg"
                  />
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
                    <div className="flex space-x-4 text-[14px] font-light text-[#1D1F1E]">
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p>Pediatrics</p>
                      </div>
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p>Child Health</p>
                      </div>
                    </div>
                    <p className="lg:text-[17px]   xl:text-[23px] xxl:text-[23px] font-medium mt-[2em] leading-tight">
                      <span className="whitespace-nowrap">
                        The Importance of Pediatric{" "}
                      </span>{" "}
                      <br /> Orthopedic Care
                    </p>
                  </div>
                </div>
                <div className="flex gap-[26px]">
                  <StaticImage
                    src="../../images/Informedimage2.webp"
                    alt="Hero Background"
                    layout="fullWidth"
                    className="object-cover w-[217px] h-[177px] mb-4 rounded-lg"
                  />
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
                    <div className="flex space-x-4 text-[14px] font-light text-[#1D1F1E]">
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p className="">Sports Medicine</p>
                      </div>
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p>Health Tips</p>
                      </div>
                    </div>
                    <p className="lg:text-[17px]   xl:text-[23px] xxl:text-[23px] font-medium mt-[2em] leading-tight">
                      How to Prevent Sports <br /> Injuries: Tips from Our{" "}
                      <br /> Experts
                    </p>
                  </div>
                </div>
                <div className="flex gap-[26px]">
                  <StaticImage
                    src="../../images/Informedimage3.webp"
                    alt="Hero Background"
                    layout="fullWidth"
                    className="object-cover w-[217px] h-[177px] mb-4 rounded-lg"
                  />
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
                    <div className="flex space-x-4 text-[14px] font-light text-[#1D1F1E]">
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p>Patient Care</p>
                      </div>
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p>Diagnostics</p>
                      </div>
                    </div>
                    <p className="lg:text-[17px]   xl:text-[23px] xxl:text-[23px] font-medium mt-[2em] leading-tight">
                      The Role of Medical Imaging <br /> in Modern Healthcare
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="bg-white mt-[-2em] mb-[2em] lg:hidden">
        <div className="px-[4.1%] pt-[2em] pb-[13px]  ">
          <div className="pl-4 mt-[2em]">
            <h1 className="text-[34px] font-semibold mt-[2em]">
              Stay Informed, Stay Healthy
            </h1>
            <p className="text-[16px] font-normal text-[#444A5B]">
              Expert Insights and Health Tips from Faith Specialist Hospital
            </p>
          </div>
          <div className=" ">
            <div className="flex flex-col justify-start mt-[3em]">
              <StaticImage
                src="../../images/Informedimage.webp"
                alt="Hero Background"
                layout="fullWidth"
                className="object-cover w-full h-[25vh] mb-4 rounded-lg"
              />
              <div className="flex space-x-4 text-[14px] font-normal text-[#1D1F1E]">
                <div className="border border-gray-300 rounded-full px-4 py-1">
                  <p>Orthopedics</p>
                </div>
                <div className="border border-gray-300 rounded-full px-4 py-1">
                  <p>Surgery</p>
                </div>
              </div>

              <p className="text-[23px] font-semibold text-[#444A5B] mt-[1em] ">
                Understanding Joint Replacement Surgery
              </p>
              <p className="text: [#646A69]  line-clamp-2 text-[18px]">
                Joint replacement surgery can be a life-changing procedure for
                those suffering from chronic joint pain. In this article, we
                explain the process, benefits, and recovery expectations of
                joint replacement surgery. Learn how our advanced techniques at
                Faith Specialist Hospital can help you regain your mobility and
                improve your quality of life.
              </p>
            </div>
            <div className="mt-[3em] ">
              <div className="mt-5 space-y-5">
                <div className="flex flex-col">
                  <StaticImage
                    src="../../images/Informedimage1.webp"
                    alt="Hero Background"
                    layout="fullWidth"
                    className="object-cover w-full  h-[25vh] mb-4 rounded-lg"
                  />
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
                    <div className="flex space-x-4 text-[14px] font-normal text-[#1D1F1E]">
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p>Pediatrics</p>
                      </div>
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p>Child Health</p>
                      </div>
                    </div>
                    <p className="text-[23px] font-semibold mt-[2em]">
                      The Importance of Pediatric <br /> Orthopedic Care

                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <StaticImage
                    src="../../images/Informedimage2.webp"
                    alt="Hero Background"
                    layout="fullWidth"
                    className="object-cover w-full  h-[25vh]  mb-4 rounded-lg"
                  />
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
                    <div className="flex space-x-4 text-[14px] font-normal text-[#1D1F1E]">
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p>Sports Medicine</p>
                      </div>
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p>Health Tips</p>
                      </div>
                    </div>
                    <p className="text-[23px] font-semibold mt-[2em]">
                      How to Prevent Sports <br /> Injuries: Tips from Our
                      Experts
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <StaticImage
                    src="../../images/Informedimage3.webp"
                    alt="Hero Background"
                    layout="fullWidth"
                    className="object-cover w-full  h-[25vh]  mb-4 rounded-lg"
                  />
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
                    <div className="flex space-x-4 text-[14px] font-normal text-[#1D1F1E]">
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p>Patient Care</p>
                      </div>
                      <div className="border border-gray-300 rounded-full px-4 py-1">
                        <p>Diagnostics</p>
                      </div>
                    </div>
                    <p className="text-[23px] font-semibold mt-[2em]">
                      The Role of Medical Imaging <br /> in Modern Healthcare
                    </p>
                    <Link to="/blog">
            <div className="flex justify-center mt-[2em] mb-4">
              <button className="w-[195px] h-[56px] text-[#019E7D] font-semibold text-[18px] border border-[#017B64] rounded-md">
              Sell All Blog Post
              </button>
       
            </div>
            </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Informed;
