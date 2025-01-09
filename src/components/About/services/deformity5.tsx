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

const ServiceLinks5 = () => {
  const [activeLink, setActiveLink] = useState<string | null>("services5");

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
            Medical Imaging, Physiotherapy, and Medical <br />
            Rehabilitation
          </h3>
          <div className="pr-[em] mt-[1em]">
            <StaticImage
              src="../../../images/serviceLink5.webp"
              alt="Hero Image 1"
              layout="fullWidth"
              className=""
            />
          </div>

          <p className="mt-[2em] text-[#444A5B] lg:text-[15px] font-light">
            Faith Specialist Hospital is equipped with advanced medical imaging
            technology to facilitate accurate diagnosis and treatment planning.
            Our physiotherapy and medical rehabilitation services play a crucial
            role in recovery, offering customized therapy programs to improve
            mobility, strength, and overall well-being. We emphasize a
            multidisciplinary approach to rehabilitation, incorporating physical
            therapy, occupational therapy, and specialized rehabilitation
            techniques.
          </p>
          <h3 className="font-semibold lg:text-[26px] mt-4 mb-4">
            Medical Imaging Services
          </h3>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              MRI (Magnetic Resonance Imaging):{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                We partner with outfits that provide MRI services. They provide
                detailed images of soft tissues, organs, and structures within
                the body. MRI is particularly useful for diagnosing conditions
                related to the brain, spine, joints, and muscles. This
                non-invasive imaging technique helps in accurate diagnosis and
                treatment planning.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              X-rays:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                X-rays are a fundamental diagnostic tool for evaluating bone
                injuries, fractures, and joint conditions. Our digital X-ray
                equipment provides clear and precise images, aiding in the
                prompt diagnosis and treatment of orthopedic issues. We ensure
                minimal radiation exposure while maintaining image quality.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Fluoroscopy:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px] font-light">
                Fluoroscopy allows real-time imaging of the body’s internal
                structures using continuous X-ray technology. This technique is
                particularly useful for guiding orthopedic procedures, such as
                joint injections and fracture reductions, ensuring precision and
                safety.
              </span>
            </p>
          </div>
          <h3 className="font-semibold lg:text-[26px] mt-[2em] mb-4">
            Physiotherapy Services
          </h3>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Physical Therapy:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                Our physical therapy services focus on restoring movement,
                strength, and function following injury, surgery, or illness. We
                create individualized treatment plans that include exercises,
                manual therapy, and modalities such as heat, cold, and
                electrical stimulation to promote healing and improve mobility.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Occupational Therapy:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                Occupational therapy helps patients regain the ability to
                perform daily activities and achieve independence. Our
                occupational therapists work with patients to develop customized
                rehabilitation programs that address specific needs, such as
                hand therapy, adaptive techniques, and cognitive rehabilitation.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Neurological Rehabilitation:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                Our neurological rehabilitation services cater to patients with
                conditions such as stroke, traumatic brain injury, and spinal
                cord injury. We provide comprehensive therapy to improve motor
                skills, balance, coordination, and cognitive function, helping
                patients achieve the highest level of independence.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Pediatric Rehabilitation:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                We offer pediatric rehabilitation services for children with
                developmental delays, congenital conditions, and injuries. Our
                therapists use child-friendly techniques to promote physical
                development, enhance motor skills, and support overall growth
                and well-being.
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
            Medical Imaging, Physiotherapy, and Medical
            Rehabilitation
          </h3>
          <div className="pr-[em] mt-[1em]">
            <StaticImage
              src="../../../images/serviceLink5.webp"
              alt="Hero Image 1"
              layout="fullWidth"
              className="w-[100%]"
            />
          </div>

          <p className="mt-4 text-[#444A5B] text-[14px]">
            Faith Specialist Hospital is equipped with advanced medical imaging
            technology to facilitate accurate diagnosis and treatment planning.
            Our physiotherapy and medical rehabilitation services play a crucial
            role in recovery, offering customized therapy programs to improve
            mobility, strength, and overall well-being. We emphasize a
            multidisciplinary approach to rehabilitation, incorporating physical
            therapy, occupational therapy, and specialized rehabilitation
            techniques.
          </p>
          <h3 className="font-semibold text-[28px] mt-4 mb-4">
            Medical Imaging Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              MRI (Magnetic Resonance Imaging):{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We partner with outfits that provide MRI services. They provide
                detailed images of soft tissues, organs, and structures within
                the body. MRI is particularly useful for diagnosing conditions
                related to the brain, spine, joints, and muscles. This
                non-invasive imaging technique helps in accurate diagnosis and
                treatment planning.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              X-rays:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                X-rays are a fundamental diagnostic tool for evaluating bone
                injuries, fractures, and joint conditions. Our digital X-ray
                equipment provides clear and precise images, aiding in the
                prompt diagnosis and treatment of orthopedic issues. We ensure
                minimal radiation exposure while maintaining image quality.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Fluoroscopy:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Fluoroscopy allows real-time imaging of the body’s internal
                structures using continuous X-ray technology. This technique is
                particularly useful for guiding orthopedic procedures, such as
                joint injections and fracture reductions, ensuring precision and
                safety.
              </span>
            </p>
          </div>
          <h3 className="font-semibold text-[28px] mt-4 mb-4">
            Physiotherapy Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Physical Therapy:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our physical therapy services focus on restoring movement,
                strength, and function following injury, surgery, or illness. We
                create individualized treatment plans that include exercises,
                manual therapy, and modalities such as heat, cold, and
                electrical stimulation to promote healing and improve mobility.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Occupational Therapy:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Occupational therapy helps patients regain the ability to
                perform daily activities and achieve independence. Our
                occupational therapists work with patients to develop customized
                rehabilitation programs that address specific needs, such as
                hand therapy, adaptive techniques, and cognitive rehabilitation.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Neurological Rehabilitation:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our neurological rehabilitation services cater to patients with
                conditions such as stroke, traumatic brain injury, and spinal
                cord injury. We provide comprehensive therapy to improve motor
                skills, balance, coordination, and cognitive function, helping
                patients achieve the highest level of independence.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Pediatric Rehabilitation:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We offer pediatric rehabilitation services for children with
                developmental delays, congenital conditions, and injuries. Our
                therapists use child-friendly techniques to promote physical
                development, enhance motor skills, and support overall growth
                and well-being.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default ServiceLinks5;
