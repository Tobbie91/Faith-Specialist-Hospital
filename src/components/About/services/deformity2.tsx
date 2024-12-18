import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import { Deformity1 } from "../../../assets/icons/Deformity1";
import { Deformity2 } from "../../../assets/icons/Deformity2";
import { Deformity3 } from "../../../assets/icons/Deformity3";
import { Deformity4 } from "../../../assets/icons/Deformity4";
import { Deformity5 } from "../../../assets/icons/Deformity5";
import { Deformity6 } from "../../../assets/icons/Deformity6";

type LinkProps<IconComponentProps = {}> = {
  linkId: string;
  route: string;
  IconComponent: React.ComponentType<IconComponentProps>;
  text: string;
  isActive: boolean;
};

const ServiceLinks2 = () => {
  const [activeLink, setActiveLink] = useState<string | null>("services2");

  // Function to handle active link click
  const handleLinkClick = (link: React.SetStateAction<string | null>) => {
    setActiveLink(link);
  };

  const renderLink = <IconComponentProps extends {}>({
    linkId,
    route,
    IconComponent,
    text,
    isActive,
  }: LinkProps<IconComponentProps>) => {
    return (
      <Link
        to={route}
        className={`flex gap-6 border border-[#C3C6D2] rounded-md lg:w-[400px] w-[100%] py-2 mb-6 ${
          activeLink === linkId ? "text-transparent" : "text-black"
        }`}
        onClick={() => handleLinkClick(linkId)}
        style={
          activeLink === linkId
            ? {
                border: "2px solid transparent",
                borderImage:
                  "linear-gradient(292.99deg, #0BBE95 -1.96%, #EE1433 100%) 1",
                backgroundClip: "text",
                backgroundImage:
                  "linear-gradient(292.99deg, #0BBE95 -1.96%, #EE1433 100%)",
              }
            : {}
        }
      >
        <span className="pl-3">
          {/* @ts-ignore */}
          <IconComponent isActive={isActive} /> {/* Pass isActive here */}
        </span>
        <p
          className={`lg:text-[15px] ${
            activeLink === linkId ? "bg-clip-text text-transparent" : ""
          }`}
          style={
            activeLink === linkId
              ? {
                  backgroundImage:
                    "linear-gradient(292.99deg, #0BBE95 -1.96%, #EE1433 100%)",
                  backgroundClip: "text",
                }
              : {}
          }
        >
          {text}
        </p>
      </Link>
    );
  };
  return (
    <>
   
     {/* desktop */}
     <div className="mt-[4em] mb-[2em] hidden lg:block md:block">
      <div className="grid grid-cols-[auto_1px_auto] items-start gap-8">
      <div className="flex flex-col pl-8 sticky top-[4em]"> 
          {renderLink({
            linkId: "services",
            route: "/services",
            IconComponent: Deformity1,
            text: "Deformity Correction and Pediatric \nOrthopedic Services",
            isActive: activeLink === "services", // Pass the correct value here
          })}
          {renderLink({
            linkId: "services1",
            route: "/services1",
            IconComponent: Deformity2,
            text: "Management of Fracture and Complication of \nFractures",
            isActive: activeLink === "services1",
          })}
          {renderLink({
            linkId: "services2",
            route: "/services2",
            IconComponent: Deformity3,
            text: "Orthopedic and Plastic Surgical Services",
            isActive: activeLink === "services2",
          })}
          {renderLink({
            linkId: "services3",
            route: "/services3",
            IconComponent: Deformity4,
            text: "Full Laboratory and General Medical \nServices",
            isActive: activeLink === "services3",
          })}
          {renderLink({
            linkId: "services4",
            route: "/services4",
            IconComponent: Deformity5,
            text: "Management of Accident Victims and \nAmbulance Services",
            isActive: activeLink === "services4",
          })}
          {renderLink({
            linkId: "services5",
            route: "/services5",
            IconComponent: Deformity6,
            text: "Medical Imaging, Physiotherapy and Medical \nRehabilitation",
            isActive: activeLink === "services5",
          })}
        </div>
        <div className="w-[1px] bg-gray-300 h-full mx-auto"></div>
        <div className="pl-[2em] w-[100%] pr-[1em]">
          <h3 className="lg:text-[30px] font-semibold">
            Orthopedic and Plastic Surgical Services
          </h3>
          <div className="pr-[em] mt-[1em]">
            <StaticImage
              src="../../../images/serviceLink1.webp"
              alt="Hero Image 1"
              layout="fullWidth"
              className=""
            />
          </div>

          <p className="mt-4 text-[#444A5B] lg:text-[15px]">
            At Faith Specialist Hospital, we specialize in a wide range of
            orthopedic and plastic surgical procedures, focusing on restoring
            function, mobility, and aesthetics. Our team of skilled surgeons
            employs the latest techniques and technologies to ensure safety and
            optimal outcomes for our patients. We are dedicated to providing
            comprehensive care that addresses both the functional and cosmetic
            aspects of orthopedic conditions and injuries.
          </p>
          <h3 className="font-semibold lg:text-[26px] mt-4 mb-4">
            Orthopedic Surgery Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Joint Replacement Surgery:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                We perform total and partial joint replacement surgeries,
                including hip, knee, and shoulder replacements. Our advanced
                techniques and prosthetic options ensure improved mobility and
                reduced pain for patients with severe arthritis or joint damage.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Spine Surgery:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                Our spine surgery services include procedures for degenerative
                disc disease, spinal stenosis, herniated discs, and spinal
                fractures. We utilize minimally invasive techniques whenever
                possible to reduce recovery time and enhance outcomes.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Arthroscopic Surgery:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                We offer arthroscopic procedures for the diagnosis and treatment
                of joint issues such as ligament tears, cartilage damage, and
                joint instability. These minimally invasive surgeries involve
                small incisions and specialized instruments, leading to faster
                recovery and less postoperative pain.
              </span>
            </p>
          </div>
          <h3 className="font-semibold lg:text-[26px] mt-4 mb-4">
            Plastic Surgical Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Reconstructive Surgery:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                We offer reconstructive procedures to restore function and
                appearance following orthopedic trauma or surgery. This includes
                soft tissue reconstruction, tendon transfers, and flap surgeries
                to repair and enhance the affected areas.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Hand Surgery:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                Our plastic and orthopedic surgeons collaborate to provide
                comprehensive hand surgery services. We treat conditions such as
                carpal tunnel syndrome, tendon injuries, fractures, and
                congenital deformities, aiming to restore hand function and
                aesthetics.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Limb Salvage and Reconstruction:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                For patients with severe limb injuries or tumors, we offer limb
                salvage surgeries and reconstruction. Our multidisciplinary team
                works together to preserve as much function and appearance as
                possible, utilizing advanced techniques and prosthetic options.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Scar Revision and Soft Tissue Repair:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                Post-surgical and post-traumatic scars can be addressed through
                our scar revision services. We use a variety of techniques to
                improve the appearance of scars, enhance skin texture, and
                restore the natural look of the affected area.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Microsurgery:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                We utilize advanced microsurgical techniques for complex
                reconstructive procedures, such as free tissue transfer and
                nerve repair. These techniques allow for precise and effective
                restoration of function and form, particularly in cases of
                severe trauma or intricate anatomical structures.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

{/* mobile */}

<div className="mt-[4em] mb-[2em] lg:hidden md:hidden">
      <div className="grid grid-cols-1 items-start ">
      <div className="flex flex-col px-2 sticky top-[4em] ">
          {renderLink({
            linkId: "services",
            route: "/services",
            IconComponent: Deformity1,
            text: "Deformity Correction and Pediatric \nOrthopedic Services",
            isActive: activeLink === "services", // Pass the correct value here
          })}
          {renderLink({
            linkId: "services1",
            route: "/services1",
            IconComponent: Deformity2,
            text: "Management of Fracture and Complication of \nFractures",
            isActive: activeLink === "services1",
          })}
          {renderLink({
            linkId: "services2",
            route: "/services2",
            IconComponent: Deformity3,
            text: "Orthopedic and Plastic Surgical Services",
            isActive: activeLink === "services2",
          })}
          {renderLink({
            linkId: "services3",
            route: "/services3",
            IconComponent: Deformity4,
            text: "Full Laboratory and General Medical \nServices",
            isActive: activeLink === "services3",
          })}
          {renderLink({
            linkId: "services4",
            route: "/services4",
            IconComponent: Deformity5,
            text: "Management of Accident Victims and \nAmbulance Services",
            isActive: activeLink === "services4",
          })}
          {renderLink({
            linkId: "services5",
            route: "/services5",
            IconComponent: Deformity6,
            text: "Medical Imaging, Physiotherapy and Medical \nRehabilitation",
            isActive: activeLink === "services5",
          })}
        </div>
        <div className="w-[1px] bg-gray-300 h-full mx-auto"></div>
        <div className="pl-[1em] w-[100%] pr-[1em]">
          <h3 className="text-[28px] font-semibold">
            Orthopedic and Plastic Surgical Services
          </h3>
          <div className="pr-[em] mt-[1em]">
            <StaticImage
              src="../../../images/serviceLink1.webp"
              alt="Hero Image 1"
              layout="fullWidth"
              className="w-[100%]"
            />
          </div>

          <p className="mt-4 text-[#444A5B] text-[14px]">
            At Faith Specialist Hospital, we specialize in a wide range of
            orthopedic and plastic surgical procedures, focusing on restoring
            function, mobility, and aesthetics. Our team of skilled surgeons
            employs the latest techniques and technologies to ensure safety and
            optimal outcomes for our patients. We are dedicated to providing
            comprehensive care that addresses both the functional and cosmetic
            aspects of orthopedic conditions and injuries.
          </p>
          <h3 className="font-semibold text-[28px] mt-4 mb-4">
            Orthopedic Surgery Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Joint Replacement Surgery:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We perform total and partial joint replacement surgeries,
                including hip, knee, and shoulder replacements. Our advanced
                techniques and prosthetic options ensure improved mobility and
                reduced pain for patients with severe arthritis or joint damage.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Spine Surgery:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our spine surgery services include procedures for degenerative
                disc disease, spinal stenosis, herniated discs, and spinal
                fractures. We utilize minimally invasive techniques whenever
                possible to reduce recovery time and enhance outcomes.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Arthroscopic Surgery:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We offer arthroscopic procedures for the diagnosis and treatment
                of joint issues such as ligament tears, cartilage damage, and
                joint instability. These minimally invasive surgeries involve
                small incisions and specialized instruments, leading to faster
                recovery and less postoperative pain.
              </span>
            </p>
          </div>
          <h3 className="font-semibold lg:text-[26px] mt-4 mb-4">
            Plastic Surgical Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Reconstructive Surgery:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We offer reconstructive procedures to restore function and
                appearance following orthopedic trauma or surgery. This includes
                soft tissue reconstruction, tendon transfers, and flap surgeries
                to repair and enhance the affected areas.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Hand Surgery:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our plastic and orthopedic surgeons collaborate to provide
                comprehensive hand surgery services. We treat conditions such as
                carpal tunnel syndrome, tendon injuries, fractures, and
                congenital deformities, aiming to restore hand function and
                aesthetics.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Limb Salvage and Reconstruction:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                For patients with severe limb injuries or tumors, we offer limb
                salvage surgeries and reconstruction. Our multidisciplinary team
                works together to preserve as much function and appearance as
                possible, utilizing advanced techniques and prosthetic options.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Scar Revision and Soft Tissue Repair:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Post-surgical and post-traumatic scars can be addressed through
                our scar revision services. We use a variety of techniques to
                improve the appearance of scars, enhance skin texture, and
                restore the natural look of the affected area.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Microsurgery:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We utilize advanced microsurgical techniques for complex
                reconstructive procedures, such as free tissue transfer and
                nerve repair. These techniques allow for precise and effective
                restoration of function and form, particularly in cases of
                severe trauma or intricate anatomical structures.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default ServiceLinks2;
