import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Choose1Icon } from "../../assets/icons/Choose1";
import { Choose2Icon } from "../../assets/icons/Choose2";
import { Choose3Icon } from "../../assets/icons/Choose3";
import { Choose4Icon } from "../../assets/icons/Choose4";

const WhyChoose = () => {
  return (
    <div className="bg-white mt-[4em]">
      {/* Desktop */}

      <div className="px-[4.1%] pt-10 pb-[13px] lg:pt-0 lg:pb-[45px] fellix max-w-screen-xxl xxl:mx-auto ">
        {/* Desktop */}
        <div className="hidden lg:grid grid-cols-2 lg:gap-[21px] xl:gap-[60px] lg:items-start ">
          <div className="flex flex-col justify-start mt-[2em] ml-[4em] pl-[1em]">
            <h1 className="lg:text-[39px] font-semibold ">
              Why Choose Faith <br/> Specialist?
            </h1>
            <p className="lg:text-[20px] font-normal text-[#444A5B] ">
              Experience unparalleled expertise,<br/> compassionate care, and
              advanced <br/> Orthopedic treatments at Faith Specialist <br/> Hospital
            </p>
          </div>
          <div className="mt-[2em] ml-[-3em]">
            <div className="mt-5 space-y-5">
              <div className="flex gap-[6px]">
                <div className="-mt-[-4px]">
                  <Choose1Icon />
                </div>
                <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px] ">
                  <span className="font-semibold text-[14px] xs:text-[17px] 390:text-[18px] xl:text-[20px] xxl:text-[24px] mb-6">
                    Expert Team of Specialists
                  </span>
                  <p className="lg:text-[14px] xl:text-[18px] xxl:text-[19px] 1380:text-[18px] text-[#444A5B] font-normal mb-[1em] ">
                    Our hospital is home to a team of board-certified orthopedic <br/>
                    surgeons, general practitioners, internal medicine doctors,<br/>
                    pediatricians, and more. With extensive training and
                    experience, our <br/> specialists are leaders in their fields,
                    dedicated to delivering the <br/> highest standard of care.
                  </p>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <div className="-mt-[-4px]">
                  <Choose2Icon />
                </div>
                <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px]">
                  <span className="font-semibold text-[14px] xs:text-[17px] 390:text-[18px] xl:text-[20px] xxl:text-[24px]">
                    State-of-the-Art Facilities
                  </span>
                  <p className="lg:text-[14px] xl:text-[18px] xxl:text-[19px] 1380:text-[18px] text-[#444A5B] font-normal mb-[1em]">
                    We utilize the latest medical technology and advanced
                    surgical <br/>techniques to ensure optimal outcomes for our
                    patients. Our state-<br/>of-the-art facilities are designed to
                    provide a comfortable and<br/> efficient environment for both
                    diagnosis and treatment.
                  </p>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <div className="-mt-[-4px]">
                  <Choose3Icon />
                </div>
                <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px]">
                  <span className="font-semibold text-[14px] xs:text-[17px] 390:text-[18px] xl:text-[20px] xxl:text-[24px]">
                    Compassionate Care
                  </span>
                  <p className="lg:text-[14px] xl:text-[18px] xxl:text-[19px] 1380:text-[18px] text-[#444A5B] font-normal mb-[1em]">
                    At Faith Specialist Hospital, we believe in treating our
                    patients with <br/>compassion, respect, and empathy. We are
                    committed to supporting<br/> you through every step of your
                    healthcare journey, providing the <br/>care and attention you
                    deserve.
                  </p>
                </div>
              </div>
              <div className="flex gap-[6px]">
                <div className="-mt-[-4px]">
                  <Choose4Icon />
                </div>
                <div className="text-[12px] 390:text-[14px] lg:text-[14px] xl:text-[18px]">
                  <span className="text-[14px] xs:text-[17px] 390:text-[18px] xl:text-[20px] xxl:text-[24px] font-semibold">
                    Personalized Treatment Plans
                  </span>
                  <p className="lg:text-[14px] xl:text-[18px] xxl:text-[19px] 1380:text-[18px] text-[#444A5B] font-normal mb-[1em]">
                    We understand that every patient is unique. That’s why we
                    create<br/> customized treatment plans tailored to your specific
                    health needs <br/>and goals. Our personalized approach ensures
                    the best possible<br/> outcomes for your health and well-being.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
