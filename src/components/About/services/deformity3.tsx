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

const ServiceLinks3 = () => {
  const [activeLink, setActiveLink] = useState<string | null>("services3");

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
            Full Laboratory and General Medical Services
          </h3>
          <div className="pr-[em] mt-[1em]">
            <StaticImage
              src="../../../images/serviceLink3.webp"
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
            Full Laboratory Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Advanced Diagnostic Testing:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                Our laboratory is outfitted with the latest technology, allowing
                us to perform a comprehensive array of diagnostic tests. From
                routine blood work to specialized tests, our services provide
                critical data for accurate diagnosis and effective treatment
                planning.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Hematology and Coagulation:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                Our hematology services include complete blood counts (CBC),
                coagulation studies, and other blood tests to diagnose and
                manage blood disorders and clotting conditions.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Immunology and Serology:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                Our immunology and serology tests are designed to detect and
                monitor immune system disorders, infections, and autoimmune
                diseases, providing essential information to guide treatment
                decisions.
              </span>
            </p>
          </div>
          <h3 className="font-semibold lg:text-[26px] mt-4 mb-4">
            General Medical Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Preventive Care:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                We focus on preventive healthcare to maintain overall health and
                well-being. Our services include routine check-ups,
                vaccinations, screening tests, and lifestyle counseling to help
                patients prevent illness and detect health issues early.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Chronic Disease Management:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                Our team provides comprehensive management for chronic
                conditions like diabetes, hypertension, heart disease, and
                asthma. We offer personalized treatment plans, medication
                management, and continuous monitoring to help patients
                effectively manage their conditions and improve their quality of
                life.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Comprehensive Health Assessments:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                We offer detailed health assessments to evaluate overall health
                status, identify risk factors, and create personalized health
                plans. These assessments include physical examinations,
                diagnostic tests, and patient consultations.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Women's Health Services:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                Our women's health services cover a range of needs, including
                gynecological exams, family planning, prenatal and postnatal
                care, and menopause management. We offer compassionate care
                tailored to women's unique health concerns.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Men's Health Services:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                We address the specific health needs of men through services
                such as prostate exams, testosterone evaluations, cardiovascular
                screenings, and preventive care.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Pediatric Care::{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                Our pediatric services ensure the health and well-being of
                children from infancy through adolescence. We provide routine
                check-ups, immunizations, growth and development assessments,
                and treatment for common childhood illnesses.
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
          <h3 className=":text-[28px] font-semibold">
            Full Laboratory and General Medical Services
          </h3>
          <div className="pr-[em] mt-[1em]">
            <StaticImage
              src="../../../images/serviceLink3.webp"
              alt="Hero Image 1"
              layout="fullWidth"
              className="w-[100%]"
            />
          </div>

          <p className="mt-4 text-[#444A5B] text-[14px]">
            At Faith Specialist Hospital, we provide comprehensive management of
            fractures and their complications. Our skilled orthopedic team
            employs advanced techniques to diagnose and treat fractures promptly
            and effectively. From simple fractures to complex cases requiring
            surgical intervention, our goal is to ensure optimal recovery and
            rehabilitation, restoring function and preventing long-term
            complications.
          </p>
          <h3 className="font-semibold text-[28px] mt-4 mb-4">
            Full Laboratory Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Advanced Diagnostic Testing:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our laboratory is outfitted with the latest technology, allowing
                us to perform a comprehensive array of diagnostic tests. From
                routine blood work to specialized tests, our services provide
                critical data for accurate diagnosis and effective treatment
                planning.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Hematology and Coagulation:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our hematology services include complete blood counts (CBC),
                coagulation studies, and other blood tests to diagnose and
                manage blood disorders and clotting conditions.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Immunology and Serology:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our immunology and serology tests are designed to detect and
                monitor immune system disorders, infections, and autoimmune
                diseases, providing essential information to guide treatment
                decisions.
              </span>
            </p>
          </div>
          <h3 className="font-semibold lg:text-[26px] mt-4 mb-4">
            General Medical Services
          </h3>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Preventive Care:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We focus on preventive healthcare to maintain overall health and
                well-being. Our services include routine check-ups,
                vaccinations, screening tests, and lifestyle counseling to help
                patients prevent illness and detect health issues early.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Chronic Disease Management:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our team provides comprehensive management for chronic
                conditions like diabetes, hypertension, heart disease, and
                asthma. We offer personalized treatment plans, medication
                management, and continuous monitoring to help patients
                effectively manage their conditions and improve their quality of
                life.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold lg:text-[14px]">
              Comprehensive Health Assessments:{" "}
              <span className="mt-4 text-[#444A5B] lg:text-[14px]">
                We offer detailed health assessments to evaluate overall health
                status, identify risk factors, and create personalized health
                plans. These assessments include physical examinations,
                diagnostic tests, and patient consultations.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Women's Health Services:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our women's health services cover a range of needs, including
                gynecological exams, family planning, prenatal and postnatal
                care, and menopause management. We offer compassionate care
                tailored to women's unique health concerns.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Men's Health Services:{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                We address the specific health needs of men through services
                such as prostate exams, testosterone evaluations, cardiovascular
                screenings, and preventive care.
              </span>
            </p>
          </div>
          <div className="mt-4">
            <p className="font-semibold text-[14px]">
              Pediatric Care::{" "}
              <span className="mt-4 text-[#444A5B] text-[14px] font-normal">
                Our pediatric services ensure the health and well-being of
                children from infancy through adolescence. We provide routine
                check-ups, immunizations, growth and development assessments,
                and treatment for common childhood illnesses.
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ServiceLinks3;
