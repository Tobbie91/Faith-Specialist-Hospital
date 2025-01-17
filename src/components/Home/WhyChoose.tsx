import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useRef, useState } from "react";
import { Choose1Icon } from "../../assets/icons/Choose1";
import { Choose2Icon } from "../../assets/icons/Choose2";
import { Choose3Icon } from "../../assets/icons/Choose3";
import { Choose4Icon } from "../../assets/icons/Choose4";

const fadeInVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyChoose = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const gridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        });
      },
      {
        threshold: 1.0, // This ensures that the section is fully in view before triggering the scroll
      }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => {
      if (gridRef.current) {
        observer.unobserve(gridRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="bg-white mt-[4em]">
        <div className="px-[4.1%] pt-10 pb-[13px] lg:pt-8 lg:pb-[45px] fellix max-w-screen-xxl xxl:mx-auto">
          {/* Desktop */}
          <div className="hidden md:grid lg:grid grid-cols-2 lg:gap-[21px] md:gap-[38px] xl:gap-[60px] lg:items-start">
            <div
              className="flex flex-col justify-start mt-[2em] ml-[4em] pl-[1em]"
              style={{ position: "sticky", top: "0" }} // Sticky positioning
            >
              <h1 className="lg:text-[39px] font-medium leading-snug mb-2">
                Why Choose Faith <br /> Specialist?
              </h1>
              <p className="lg:text-[20px] font-light text-[#444A5B]">
                Experience unparalleled expertise,
                <br /> compassionate care, and advanced <br /> Orthopedic
                treatments at Faith Specialist <br /> Hospital
              </p>
            </div>

            <div
              ref={gridRef}
              className={`overflow-y-auto h-[calc(100vh-4em)] ml-[-3em] mt-[2em] ${
                isScrolled ? "scrolling" : ""
              }`}
              style={{ maxHeight: "calc(100vh - 14em)" }} // Dynamic height
            >
              <div className="mt-5 space-y-15">
                <div className="flex gap-[2em]">
                  <div className="-mt-[-4px]">
                    <Choose1Icon />
                  </div>
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
                    <span className="font-medium text-[14px] xs:text-[17px] 390:text-[18px] xl:text-[20px] xxl:text-[23px] mb-[4em]">
                      Expert Team of Specialists
                    </span>
                    <p className="lg:text-[14px] xl:text-[18px] xxl:text-[18px] 1380:text-[18px] text-[#444A5B] font-light mb-[1em] mt-[1em]">
                      Our hospital is home to a team of board-certified
                      orthopedic surgeons, general practitioners, internal
                      medicine doctors, pediatricians, and more. With extensive
                      training and experience, our specialists are leaders in
                      their fields, dedicated to delivering the highest standard
                      of care.
                    </p>
                  </div>
                </div>
                <div className="flex gap-[2em] mt-[4em]">
                  <div className="-mt-[-4px]">
                    <Choose2Icon />
                  </div>
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px]">
                    <span className="font-medium text-[14px] xs:text-[17px] 390:text-[18px] xl:text-[20px] xxl:text-[23px] mb-[4em]">
                      State-of-the-Art Facilities
                    </span>
                    <p className="lg:text-[14px] xl:text-[18px] xxl:text-[18px] 1380:text-[18px] text-[#444A5B] font-light mb-[1em] mt-[1em]">
                      We utilize the latest medical technology and advanced
                      surgical techniques to ensure optimal outcomes for our
                      patients. Our state-of-the-art facilities are designed to
                      provide a comfortable and efficient environment for both
                      diagnosis and treatment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-[2em] mt-[4em]">
                  <div className="-mt-[-4px]">
                    <Choose3Icon />
                  </div>
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px]">
                    <span className="font-medium text-[14px] xs:text-[17px] 390:text-[18px] xl:text-[20px] xxl:text-[23px] mb-[4em]">
                      Compassionate Care
                    </span>
                    <p className="lg:text-[14px] xl:text-[18px] xxl:text-[18px] 1380:text-[18px] text-[#444A5B] font-light mb-[1em] mt-[1em]">
                      At Faith Specialist Hospital, we believe in treating our
                      patients with compassion, respect, and empathy. We are
                      committed to supporting you through every step of your
                      healthcare journey, providing the care and attention you
                      deserve.
                    </p>
                  </div>
                </div>
                <div className="flex gap-[2em]">
                  <div className="-mt-[-4px]">
                    <Choose4Icon />
                  </div>
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px]">
                    <span className="text-[14px] xs:text-[17px] 390:text-[18px] xl:text-[20px] xxl:text-[23px] font-medium mb-[4em]">
                      Personalized Treatment Plans
                    </span>
                    <p className="lg:text-[14px] xl:text-[18px] xxl:text-[18px] 1380:text-[18px] text-[#444A5B] font-light mb-[1em] mt-[1em]">
                      We understand that every patient is unique. That’s why we
                      create customized treatment plans tailored to your
                      specific health needs and goals. Our personalized approach
                      ensures the best possible outcomes for your health and
                      well-being.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Moble */}
      <div className="bg-white mt-[em] lg:hidden md:hidden">
        <div className="px-[4.1%] pt-10 pb-[13px] lg:pt-0 lg:pb-[45px] fellix max-w-screen-xxl xxl:mx-auto ">
          <div className="">
            <div className="flex flex-col text-left mt-[-2em] ">
              <h1 className="text-[33px] font-semibold ">
                Why Choose Faith <br /> Specialist?
              </h1>
              <p
                className="text-[16px] font-normal text-[#444A5B] leading-{25px}
"
              >
                Experience unparalleled expertise,
                <br /> compassionate care, and advanced <br /> Orthopedic
                treatments at Faith Specialist <br /> Hospital
              </p>
            </div>
            <div className="mt-[2em] px-[2em]">
              <div className="mt-5 space-y-5">
                <div className="flex flex-col">
                  <div className="-mt-[-4px] mb-2">
                    <Choose1Icon />
                  </div>
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] mt-[2em] ">
                    <span className="font-semibold text-[19px] xs:text-[17px] 390:text-[18px]  mb-6">
                      Expert Team of Specialists
                    </span>
                    <p className="text-[14px]  text-[#444A5B] font-normal leading-[25px] mb-[2em]">
                      Our hospital is home to a team of board-certified
                      orthopedic surgeons, general practitioners, internal
                      medicine doctors, pediatricians, and more. With extensive
                      training and experience, ourspecialists are leaders in
                      their fields, dedicated to delivering the highest standard
                      of care.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="-mt-[-4px]">
                    <Choose2Icon />
                  </div>
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px]  mt-[2em]">
                    <span className="font-semibold text-[14px] xs:text-[17px] 390:text-[18px] xl:text-[20px] xxl:text-[24px]">
                      State-of-the-Art Facilities
                    </span>
                    <p className="text-[14px]  text-[#444A5B] font-normal leading-[25px] mb-[2em]">
                      We utilize the latest medical technology and advanced
                      surgical techniques to ensure optimal outcomes for our
                      patients. Our state-of-the-art facilities are designed to
                      provide a comfortable and efficient environment for both
                      diagnosis and treatment.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="-mt-[-4px]">
                    <Choose3Icon />
                  </div>
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px]  mt-[2em]">
                    <span className="font-semibold text-[14px] xs:text-[17px] 390:text-[18px] xl:text-[20px] xxl:text-[24px]">
                      Compassionate Care
                    </span>
                    <p className="text-[14px]  text-[#444A5B] font-normal leading-[25px] mb-[2em]">
                      At Faith Specialist Hospital, we believe in treating our
                      patients with compassion, respect, and empathy. We are
                      committed to supporting you through every step of your
                      healthcare journey, providing the care and attention you
                      deserve.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col ">
                  <div className="-mt-[-4px]">
                    <Choose4Icon />
                  </div>
                  <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px]  mt-[2em]">
                    <span className="text-[14px] xs:text-[17px] 390:text-[18px] xl:text-[20px] xxl:text-[24px] font-semibold">
                      Personalized Treatment Plans
                    </span>
                    <p className="text-[14px] xl:text-[18px] xxl:text-[19px] 1380:text-[18px] text-[#444A5B] font-normal mb-[1em]">
                      We understand that every patient is unique. That’s why we
                      create customized treatment plans tailored to your
                      specific health needs and goals. Our personalized approach
                      ensures the best possible outcomes for your health and
                      well-being.
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

export default WhyChoose;
