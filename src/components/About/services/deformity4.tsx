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

const ServiceLinks4 = () => {
  const [activeLink, setActiveLink] = useState<string | null>("services4");

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
        className={`flex gap-6 border border-[#C3C6D2] rounded-md lg:w-[400px] w-[100%] lg:py-5 py-2 mb-6 ${
          activeLink === linkId ? "text-transparent" : "text-black"
        }`}
        onClick={() => handleLinkClick(linkId)}
        style={
          activeLink === linkId
            ? {
                border: "2px solid transparent", 
                borderRadius: "12px",
                backgroundImage:
                  "linear-gradient(white, white), linear-gradient(292.99deg, #0BBE95 -1.96%, #EE1433 100%)",
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box", 
                padding:"1rem",
              }
            : {
                border: "2px solid #C3C6D2", 
              }
        }
      >
        <span className="pl-3">
          {/* @ts-ignore */}
          <IconComponent isActive={isActive} />
        </span>
        <p
          className={`lg:text-[15px] rounded-md ${
            activeLink === linkId ? "bg-clip-text text-transparent" : ""
          }`}
          style={
            activeLink === linkId
            ? {
              backgroundImage:
                "linear-gradient(292.99deg, #0BBE95 -1.96%, #EE1433 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent", 
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
   <div className="grid grid-cols-[auto_1px_auto] items-start gap-8 h-screen">
    <div className="flex flex-col pl-8 sticky top-[4em] h-[calc(100vh-4em)] overflow-auto">
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
        <div className="pl-[2em] w-[100%] pr-[2em] overflow-auto h-[calc(100vh-4em)]">
          <h3 className="lg:text-[30px] font-semibold">
            Management of Accident Victims and Ambulance <br />
            Services
          </h3>
          <div className="pr-[em] mt-[1em]">
            <StaticImage
              src="../../../images/serviceLink4.webp"
              alt="Hero Image 1"
              layout="fullWidth"
              className=""
            />
          </div>

          <p className="mt-[2em] text-[#444A5B] lg:text-[15px] font-light">
            We are fully equipped to handle emergency cases, including the
            management of accident victims and multiple injured patients. Our
            comprehensive emergency services ensure rapid stabilization,
            treatment, and rehabilitation for patients who have sustained
            injuries in accidents. Additionally, we offer reliable ambulance
            partnership services to provide swift transportation and emergency
            medical care when every second counts.
          </p>
          <h3 className="font-semibold lg:text-[26px] mt-[2em] mb-4">
            Management of Accident Victims
          </h3>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              24/7 Emergency Care:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                Our emergency department operates around the clock, staffed by
                highly trained emergency physicians, nurses, and support staff.
                We are prepared to handle all types of accident-related
                injuries, from minor cuts and bruises to severe trauma and the
                multiple injured victims. We offer a high dependency emergency
                unit that prioritizes patients' intensive care needs.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Rapid Stabilization:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                Upon arrival, accident victims receive immediate medical
                attention. Our priority is to stabilize patients quickly,
                addressing life-threatening conditions and managing pain. We
                quickly deploy our skills of Advanced Trauma Life Support (ATLS)
                protocol to ensure adequate patient resuscitation. We use
                advanced diagnostic tools, including X-rays, CT scans, and
                ultrasound, to assess injuries accurately.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Trauma Surgery:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                Our team includes experienced trauma surgeons who specialize in
                surgical interventions for accident-related injuries. Whether
                it's emergency surgery to control bleeding, repair fractures, or
                treat internal injuries, our surgeons work swiftly and
                efficiently to save lives and restore function. To date about
                2000 of such trauma surgeries have been effectively performed
                with minimal morbidity and mortality.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Orthopedic Trauma Care:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px]">
                We provide specialized orthopedic trauma care for fractures,
                dislocations, and other musculoskeletal injuries resulting from
                accidents. Our orthopedic surgeons (led by the MD himself) use
                advanced techniques to ensure proper alignment, healing, and
                rehabilitation of injured bones and joints.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Neurological and Spinal Injury Management:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                For patients with head, neck, or spinal injuries, our
                neurosurgeons and spine specialists offer expert care. We
                provide both surgical and non-surgical treatments to address
                traumatic brain injuries, spinal cord injuries, and other
                neurological conditions.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Rehabilitation and Physical Therapy:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                Post-acute care is critical for recovery. Our rehabilitation
                services include physical therapy, occupational therapy, and
                pain management programs designed to help accident victims
                regain mobility, strength, and independence.
              </span>
            </p>
          </div>
          <h3 className="font-semibold lg:text-[26px] mt-4 mb-4">
            Ambulance Services
          </h3>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Emergency Response:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                Our ambulance service partnerships are designed for rapid
                response to emergency situations. We are in partnerships with a
                fleet of providers with well-equipped ambulances staffed by
                trained paramedics and emergency medical technicians (EMTs) who
                provide pre-hospital care en route to our facility.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Advanced Life Support (ALS):{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px]">
                These ambulances are equipped with advanced life support
                systems, including cardiac monitors, defibrillators,
                ventilators, and intravenous (IV) therapy equipment. This
                ensures that critically injured patients receive the highest
                level of care during transportation. life.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Trauma Care in Transit:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                Our paramedics are skilled in providing trauma care, including
                wound management, fracture stabilization, and pain relief. They
                are trained to perform life-saving procedures such as CPR, and
                administration of emergency medications.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Inter-Hospital Transfers:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                We also offer inter-hospital transfer services for patients who
                require specialized care not available at the initial treatment
                facility. Our ambulances are equipped to ensure safe and
                comfortable transfers for patients in critical condition.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

{/* mobile */}

<div className="mt-[4em] mb-[2em] lg:hidden md:hidden">
      <div className="grid grid-cols-1 items-start ">
      <div className="flex flex-col px-2 ">
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
            Management of Accident Victims and Ambulance
            Services
          </h3>
          <div className="pr-[em] mt-[1em]">
            <StaticImage
              src="../../../images/serviceLink4.webp"
              alt="Hero Image 1"
              layout="fullWidth"
              className="w-[100%]"
            />
          </div>

          <p className="mt-4 text-[#444A5B] text-[14px]">
            We are fully equipped to handle emergency cases, including the
            management of accident victims and multiple injured patients. Our
            comprehensive emergency services ensure rapid stabilization,
            treatment, and rehabilitation for patients who have sustained
            injuries in accidents. Additionally, we offer reliable ambulance
            partnership services to provide swift transportation and emergency
            medical care when every second counts.
          </p>
          <h3 className="font-semibold text-[28px] mt-4 mb-4">
            Management of Accident Victims
          </h3>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              24/7 Emergency Care:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our emergency department operates around the clock, staffed by
                highly trained emergency physicians, nurses, and support staff.
                We are prepared to handle all types of accident-related
                injuries, from minor cuts and bruises to severe trauma and the
                multiple injured victims. We offer a high dependency emergency
                unit that prioritizes patients' intensive care needs.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Rapid Stabilization:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Upon arrival, accident victims receive immediate medical
                attention. Our priority is to stabilize patients quickly,
                addressing life-threatening conditions and managing pain. We
                quickly deploy our skills of Advanced Trauma Life Support (ATLS)
                protocol to ensure adequate patient resuscitation. We use
                advanced diagnostic tools, including X-rays, CT scans, and
                ultrasound, to assess injuries accurately.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Trauma Surgery:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our team includes experienced trauma surgeons who specialize in
                surgical interventions for accident-related injuries. Whether
                it's emergency surgery to control bleeding, repair fractures, or
                treat internal injuries, our surgeons work swiftly and
                efficiently to save lives and restore function. To date about
                2000 of such trauma surgeries have been effectively performed
                with minimal morbidity and mortality.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Orthopedic Trauma Care:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                We provide specialized orthopedic trauma care for fractures,
                dislocations, and other musculoskeletal injuries resulting from
                accidents. Our orthopedic surgeons (led by the MD himself) use
                advanced techniques to ensure proper alignment, healing, and
                rehabilitation of injured bones and joints.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Neurological and Spinal Injury Management:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                For patients with head, neck, or spinal injuries, our
                neurosurgeons and spine specialists offer expert care. We
                provide both surgical and non-surgical treatments to address
                traumatic brain injuries, spinal cord injuries, and other
                neurological conditions.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Rehabilitation and Physical Therapy:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Post-acute care is critical for recovery. Our rehabilitation
                services include physical therapy, occupational therapy, and
                pain management programs designed to help accident victims
                regain mobility, strength, and independence.
              </span>
            </p>
          </div>
          <h3 className="font-semibold text-[28px] mt-4 mb-4">
            Ambulance Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Emergency Response:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our ambulance service partnerships are designed for rapid
                response to emergency situations. We are in partnerships with a
                fleet of providers with well-equipped ambulances staffed by
                trained paramedics and emergency medical technicians (EMTs) who
                provide pre-hospital care en route to our facility.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Advanced Life Support (ALS):{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                These ambulances are equipped with advanced life support
                systems, including cardiac monitors, defibrillators,
                ventilators, and intravenous (IV) therapy equipment. This
                ensures that critically injured patients receive the highest
                level of care during transportation. life.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Trauma Care in Transit:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our paramedics are skilled in providing trauma care, including
                wound management, fracture stabilization, and pain relief. They
                are trained to perform life-saving procedures such as CPR, and
                administration of emergency medications.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Inter-Hospital Transfers:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We also offer inter-hospital transfer services for patients who
                require specialized care not available at the initial treatment
                facility. Our ambulances are equipped to ensure safe and
                comfortable transfers for patients in critical condition.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceLinks4;
