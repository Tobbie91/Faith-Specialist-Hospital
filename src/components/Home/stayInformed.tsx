import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Choose1Icon } from "../../assets/icons/Choose1";
import { Choose2Icon } from "../../assets/icons/Choose2";
import { Choose3Icon } from "../../assets/icons/Choose3";
import { Choose4Icon } from "../../assets/icons/Choose4";

const Informed = () => {
  return (
    <>
      {/* Desktop */}
    <div className="bg-white mt-[-14em] mb-[2em] hidden lg:block">
    

      <div className="px-[4.1%] pt-30 pb-[13px] lg:pt-0  fellix max-w-screen-xxl xxl:mx-auto mt-[2em] ">
        <div className="pl-4 mt-[2em]" >
        <h1 className="lg:text-[48px] font-semibold mt-[2em]">Stay Informed, Stay Healthy</h1>
        <p className="lg:text-[20px] font-normal">Expert Insights and Health Tips from Faith Specialist Hospital</p>
        </div>
        <div className="hidden lg:grid grid-cols-2 lg:gap-[21px] xl:gap-[60px] lg:items-start ">
          
          <div className="flex flex-col justify-start pl-[1em] mt-[4em]">
           
            <StaticImage
              src="../../images/InformedImage.webp"
              alt="Hero Background"
              layout="fullWidth"
              className="object-cover w-full h-[60vh] mb-4 rounded-lg"
            />
            <div className="flex space-x-4">
              <div className="border border-gray-300 rounded-full px-4 py-1">
                <p>Orthopedics</p>
              </div>
              <div className="border border-gray-300 rounded-full px-4 py-1">
                <p>Surgery</p>
              </div>
            </div>

            <p className="lg:text-[33px] font-semibold text-[#444A5B] mt-[1em] ">
              Understanding Joint Replacement Surgery
            </p>
            <p className="text: [#646A69]  line-clamp-2 lg:text-[18px]">
              Joint replacement surgery can be a life-changing procedure for
              those suffering from chronic joint pain. In this article, we
              explain the process, benefits, and recovery expectations of joint
              replacement surgery. Learn how our advanced techniques at Faith
              Specialist Hospital can help you regain your mobility and improve
              your quality of life.
            </p>
          </div>
          <div className="mt-[3em] ">
            <div className="mt-5 space-y-5">
              <div className="flex gap-[26px]">
                
 <StaticImage
              src="../../images/InformedImage1.webp"
              alt="Hero Background"
              layout="fullWidth"
              className="object-cover w-[217px] h-[177px] mb-4 rounded-lg"
            />
                <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
                <div className="flex space-x-4">
              <div className="border border-gray-300 rounded-full px-4 py-1">
                <p>Pediatrics</p>
              </div>
              <div className="border border-gray-300 rounded-full px-4 py-1">
                <p>Child Health</p>
              </div>
            </div>
                 <p className="lg:text-[17px]   xl:text-[23px] xxl:text-[23px] font-semibold mt-[2em]">
                <span className="whitespace-nowrap">The Importance of Pediatric </span> <br/> Orthopedic Care
                  </p>
                </div>
              </div>
              <div className="flex gap-[26px]">
                
 <StaticImage
              src="../../images/InformedImage2.webp"
              alt="Hero Background"
              layout="fullWidth"
              className="object-cover w-[217px] h-[177px] mb-4 rounded-lg"
            />
                <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
                <div className="flex space-x-4">
              <div className="border border-gray-300 rounded-full px-4 py-1">
                <p className="">Sports Medicine</p>
              </div>
              <div className="border border-gray-300 rounded-full px-4 py-1">
                <p>Health Tips</p>
              </div>
            </div>
                 <p className="lg:text-[17px]   xl:text-[23px] xxl:text-[23px] font-semibold mt-[2em]">
                 How to Prevent Sports <br/> Injuries: Tips from Our <br/> Experts
                  </p>
                </div>
              </div>
              <div className="flex gap-[26px]">
                
 <StaticImage
              src="../../images/InformedImage3.webp"
              alt="Hero Background"
              layout="fullWidth"
              className="object-cover w-[217px] h-[177px] mb-4 rounded-lg"
            />
                <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
                <div className="flex space-x-4">
              <div className="border border-gray-300 rounded-full px-4 py-1">
                <p>Patient Care</p>
              </div>
              <div className="border border-gray-300 rounded-full px-4 py-1">
                <p>Diagnostics</p>
              </div>
            </div>
                 <p className="lg:text-[17px]   xl:text-[23px] xxl:text-[23px] font-semibold mt-[2em]">
                 The Role of Medical Imaging <br/> in Modern Healthcare
                  </p>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>

{/* Mobile */}
<div className="bg-white mt-[4em] mb-[2em] lg:hidden">


<div className="px-[4.1%] pt-30 pb-[13px] lg:pt-0  fellix max-w-screen-xxl xxl:mx-auto mt-[2em] ">
  <div className="pl-4 mt-[2em]" >
  <h1 className="text-[34px] font-semibold mt-[2em]">Stay Informed, Stay Healthy</h1>
  <p className="text-[16px] font-normal text-[#444A5B]">Expert Insights and Health Tips from Faith Specialist Hospital</p>
  </div>
  <div className=" ">
    
    <div className="flex flex-col justify-start mt-[3em]">
     
      <StaticImage
        src="../../images/InformedImage.webp"
        alt="Hero Background"
        layout="fullWidth"
        className="object-cover w-full h-[25vh] mb-4 rounded-lg"
      />
      <div className="flex space-x-4">
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
        explain the process, benefits, and recovery expectations of joint
        replacement surgery. Learn how our advanced techniques at Faith
        Specialist Hospital can help you regain your mobility and improve
        your quality of life.
      </p>
    </div>
    <div className="mt-[3em] ">
      <div className="mt-5 space-y-5">
        <div className="flex flex-col">
          
<StaticImage
        src="../../images/InformedImage1.webp"
        alt="Hero Background"
        layout="fullWidth"
        className="object-cover w-full  h-[25vh] mb-4 rounded-lg"
      />
          <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
          <div className="flex space-x-4">
        <div className="border border-gray-300 rounded-full px-4 py-1">
          <p>Pediatrics</p>
        </div>
        <div className="border border-gray-300 rounded-full px-4 py-1">
          <p>Child Health</p>
        </div>
      </div>
           <p className="text-[23px] font-semibold mt-[2em]">
           The Importance of Pediatric <br/> Orthopedic Care
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          
<StaticImage
        src="../../images/InformedImage2.webp"
        alt="Hero Background"
        layout="fullWidth"
        className="object-cover w-full  h-[25vh]  mb-4 rounded-lg"
      />
          <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
          <div className="flex space-x-4">
        <div className="border border-gray-300 rounded-full px-4 py-1">
          <p>Sports Medicine</p>
        </div>
        <div className="border border-gray-300 rounded-full px-4 py-1">
          <p>Health Tips</p>
        </div>
      </div>
           <p className="text-[23px] font-semibold mt-[2em]">
           How to Prevent Sports <br/> Injuries: Tips from Our Experts
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          
<StaticImage
        src="../../images/InformedImage3.webp"
        alt="Hero Background"
        layout="fullWidth"
        className="object-cover w-full  h-[25vh]  mb-4 rounded-lg"
      />
          <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
          <div className="flex space-x-4">
        <div className="border border-gray-300 rounded-full px-4 py-1">
          <p>Patient Care</p>
        </div>
        <div className="border border-gray-300 rounded-full px-4 py-1">
          <p>Diagnostics</p>
        </div>
      </div>
           <p className="text-[23px] font-semibold mt-[2em]">
           The Role of Medical Imaging <br/> in Modern Healthcare
            </p>
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
