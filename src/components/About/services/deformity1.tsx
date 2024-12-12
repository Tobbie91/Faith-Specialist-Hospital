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

const ServiceLinks1 = () => {
  const [activeLink, setActiveLink] = useState<string | null>("services1");



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
        className={`flex gap-6 border border-[#C3C6D2] rounded-md w-[400px] py-2 mb-6 ${
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
    <div className="mt-[4em] mb-[2em]">
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
            text: 'Full Laboratory and General Medical \nServices',
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
        <div className="pl-[2em] w-[850px] pr-[1em]">
          <h3 className="lg:text-[30px] font-semibold">
            Management of Fracture and Complications of <br /> Fractures
          </h3>
          <div className="pr-[em] mt-[1em]">
            <StaticImage
              src="../../../images/serviceLink2.webp"
              alt="Hero Image 1"
              layout="fullWidth"
              className=""
            />
          </div>

          <p className="mt-4 text-[#444A5B] lg:text-[15px]">
            At Faith Specialist Hospital, we provide comprehensive management of
            fractures and their complications. Our skilled orthopedic team
            employs advanced techniques to diagnose and treat fractures promptly
            and effectively. From simple fractures to complex cases requiring
            surgical intervention, our goal is to ensure optimal recovery and
            rehabilitation, restoring function and preventing long-term
            complications.
          </p>
          <h3 className="font-semibold lg:text-[26px] mt-4 mb-4">
            Comprehensive Fracture Management
          </h3>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Initial Assessment and Diagnosis:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                We utilize state-of-the-art imaging technologies, including
                X-rays, CT scans, and MRI, to accurately diagnose the type and
                extent of fractures. Our detailed assessment ensures a precise
                treatment plan tailored to each patient's needs.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Non-Surgical Treatment:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                For simple fractures, we offer non-surgical treatments such as
                casting, splinting, and bracing. Our approach minimizes pain and
                promotes proper bone healing, allowing patients to return to
                their normal activities as soon as possible.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Surgical Intervention:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                In cases where fractures are complex or involve joint surfaces,
                surgical intervention may be required. Our orthopedic surgeons
                are skilled in performing a variety of procedures, including
                internal fixation with plates and screws, intramedullary
                nailing, and external fixation.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
            Reduction Techniques:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
          We employ both closed reduction (manipulating the bone without surgery) and open reduction (surgical alignment of the bone) techniques to ensure proper alignment and stabilization of the fracture.
              </span>
            </p>
          </div>
          <h3 className="font-semibold lg:text-[26px] mt-4 mb-4">
          Management of Fracture Complications
          </h3>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
            Delayed Union and Non-Union: {" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
          Some fractures may fail to heal properly, leading to delayed union or non-union. Our team addresses these complications with advanced techniques such as bone grafting, electrical bone stimulation, and revision surgeries to promote healing.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
            Malunion:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
              When a fracture heals in an incorrect position, it can lead to deformity and impaired function. We correct malunions through osteotomy procedures, realigning the bone to its proper position for improved function and appearance.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
            Infection:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
           Fractures can sometimes lead to infections, particularly in open fractures. Our comprehensive infection management includes antibiotic therapy, surgical debridement, and the use of specialized techniques to ensure the infection is controlled and the bone heals properly.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
            Complex Regional Pain Syndrome (CRPS):{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
           CRPS is a chronic pain condition that can develop after a fracture. Our multidisciplinary team provides pain management, physical therapy, and psychological support to help patients manage this condition and improve their quality of life.
              </span>
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default ServiceLinks1;
