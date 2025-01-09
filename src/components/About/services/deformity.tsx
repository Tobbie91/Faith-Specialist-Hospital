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

const ServiceLinks = () => {
  const [activeLink, setActiveLink] = useState<string | null>("services");

  useEffect(() => {
    setActiveLink("services");
  }, []);

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
        className={`flex gap-6 border border-[#C3C6D2] rounded-lg lg:w-[400px] w-[100%] lg:py-5 py-2 mb-6 ${
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
          className={`lg:text-[15px] rounded-lg ${
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
    <div className="mt-[4em] mb-[2em] hidden lg:block md:block ">
    <div className="grid grid-cols-[auto_1px_auto] items-start gap-8 h-screen">
    <div className="flex flex-col pl-8 sticky top-[4em] h-[calc(100vh-4em)] overflow-auto">
          {renderLink({
            linkId: "services",
            route: "/services",
            IconComponent: Deformity1,
            text: "Deformity Correction and Pediatric \nOrthopedic Services",
            isActive: activeLink === "services", 
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
            Deformity Correction and Pediatric Orthopedic <br /> Services
          </h3>
          <div className=" mt-[1em] pr-[1em]">
            <StaticImage
              src="../../../images/Deformity7.webp"
              alt="Hero Image 1"
              layout="fullWidth"
              className=""
            />
          </div>

          <p className="mt-[3em] text-[#444A5B] lg:text-[14px] font-light">
            At Faith Specialist Hospital, we specialize in orthopedic care,
            including the correction of deformities and comprehensive pediatric
            orthopedic services. Our dedicated team of orthopedic surgeons is
            skilled in treating a wide range of conditions affecting bones,
            joints, muscles, and ligaments in both children and adults. Our goal
            is to provide personalized care that enhances mobility and improves
            the quality of life for our patients.
          </p>
          <h3 className="font-semibold lg:text-[26px] mt-[2em] mb-4">
            Deformity Correction
          </h3>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Congenital Deformities:{" "}
              <span className="mt-[2em] text-[#444A5B] lg:text-[14px] font-light">
                We treat congenital deformities such as clubfoot, congenital hip
                dysplasia, and limb length discrepancies. Our specialists use a
                combination of surgical and non-surgical methods to correct
                these conditions, including Ilizarov external fixators, ensuring
                optimal alignment and function.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Acquired Deformities:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px] font-light">
                Our team addresses acquired deformities resulting from trauma,
                infection, degeneration, cancer or other medical conditions.
                Using advanced surgical techniques, we correct these deformities
                to restore normal function and appearance.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Minimally Invasive Techniques:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px] font-normal">
                Whenever possible, we use minimally invasive surgical techniques
                to reduce recovery time and improve outcomes. Procedures such as
                guided growth surgery and osteotomies are performed with
                precision to achieve the best results.
              </span>
            </p>
          </div>
          <h3 className="font-semibold lg:text-[26px] mt-[2em] mb-4">
            Pediatric Orthopedic Services
          </h3>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Fracture Care:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px] font-light">
                We provide specialized care for fractures in children, ensuring
                that their growing bones heal properly. Our pediatric orthopedic
                team uses child-friendly approaches and technologies to minimize
                discomfort and support rapid recovery.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Scoliosis and Spinal Disorders:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px] font-light">
                We diagnose and treat spinal disorders such as scoliosis,
                kyphosis, and other spine-related issues in children. Our
                comprehensive treatment plans include observation, bracing, and
                surgical intervention when necessary.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Sports Injuries:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px] font-light">
                Our pediatric orthopedic specialists are experienced in treating
                sports injuries in young athletes. From sprains and strains to
                more complex injuries, we offer tailored treatment plans to get
                children back to their activities safely.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Developmental Disorders:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px] font-light">
                We manage a variety of developmental orthopedic conditions,
                including cerebral palsy and spina bifida. Our multidisciplinary
                approach ensures that children receive holistic care, including
                physical therapy, bracing, and surgical interventions as needed.
              </span>
            </p>
          </div>
          <div className="mt-[2em]">
            <p className="font-semibold lg:text-[14px]">
              Growth Plate Injuries:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px] font-light">
                Injuries to the growth plates require specialized care to
                prevent long-term complications. Our pediatric orthopedic team
                is adept at treating these injuries, ensuring proper healing and
                growth.
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
            isActive: activeLink === "services", 
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
            Deformity Correction and Pediatric Orthopedic Services
          </h3>
          <div className=" mt-[1em] pr-[1em]">
            <StaticImage
              src="../../../images/Deformity7.webp"
              alt="Hero Image 1"
              layout="fullWidth"
              className="w-[100%]"
            />
          </div>

          <p className="mt-4 text-[#444A5B] text-[14px]">
            At Faith Specialist Hospital, we specialize in orthopedic care,
            including the correction of deformities and comprehensive pediatric
            orthopedic services. Our dedicated team of orthopedic surgeons is
            skilled in treating a wide range of conditions affecting bones,
            joints, muscles, and ligaments in both children and adults. Our goal
            is to provide personalized care that enhances mobility and improves
            the quality of life for our patients.
          </p>
          <h3 className="font-semibold text-[28px] mt-4 mb-4">
            Deformity Correction
          </h3>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Congenital Deformities:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We treat congenital deformities such as clubfoot, congenital hip
                dysplasia, and limb length discrepancies. Our specialists use a
                combination of surgical and non-surgical methods to correct
                these conditions, including Ilizarov external fixators, ensuring
                optimal alignment and function.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Acquired Deformities:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our team addresses acquired deformities resulting from trauma,
                infection, degeneration, cancer or other medical conditions.
                Using advanced surgical techniques, we correct these deformities
                to restore normal function and appearance.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Minimally Invasive Techniques:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Whenever possible, we use minimally invasive surgical techniques
                to reduce recovery time and improve outcomes. Procedures such as
                guided growth surgery and osteotomies are performed with
                precision to achieve the best results.
              </span>
            </p>
          </div>
          <h3 className="font-semibold text-[28px] mt-4 mb-4">
            Pediatric Orthopedic Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Fracture Care:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We provide specialized care for fractures in children, ensuring
                that their growing bones heal properly. Our pediatric orthopedic
                team uses child-friendly approaches and technologies to minimize
                discomfort and support rapid recovery.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Scoliosis and Spinal Disorders:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We diagnose and treat spinal disorders such as scoliosis,
                kyphosis, and other spine-related issues in children. Our
                comprehensive treatment plans include observation, bracing, and
                surgical intervention when necessary.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Sports Injuries:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our pediatric orthopedic specialists are experienced in treating
                sports injuries in young athletes. From sprains and strains to
                more complex injuries, we offer tailored treatment plans to get
                children back to their activities safely.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Developmental Disorders:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We manage a variety of developmental orthopedic conditions,
                including cerebral palsy and spina bifida. Our multidisciplinary
                approach ensures that children receive holistic care, including
                physical therapy, bracing, and surgical interventions as needed.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Growth Plate Injuries:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Injuries to the growth plates require specialized care to
                prevent long-term complications. Our pediatric orthopedic team
                is adept at treating these injuries, ensuring proper healing and
                growth.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceLinks;
