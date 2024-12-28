import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { stories, stories2 } from "../constants";
import Carousel from "./storyCarousel";

const BlountDisease = () => {
  return (
    <>
      {/* desktop */}
      <div className="absolute top-[550px] left-1/2 transform -translate-x-1/2 bg-white max-w-5xl w-full rounded-lg z-10 px-[5em] py-10 hidden md:block">
        <h1 className="font-semibold text-[48px] mt-[2em] ">
          A New Beginning: 11-Year-Old Grace <br />
          Overcomes Blount’s Disease
        </h1>
        <p className="text-[16px] font-light px-[m] text-[#444A5B] mt-4">
          Grace, an energetic and spirited 11-year-old, faced a challenging
          journey due to Blount's disease, a condition that caused severe genu
          varum (bowleggedness). Her condition not only impacted her physical
          mobility but also her confidence and emotional well-being. After
          visiting multiple hospitals without a successful resolution, Grace and
          her family were finally referred to Faith Specialist Hospital.
        </p>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            The Challenge
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4 font-light">
            From an early age, Grace’s family noticed the progressive bowing of
            her legs, which worsened as she grew older. Her condition limited
            her ability to participate in activities with her peers, causing her
            to feel isolated and self-conscious. Despite numerous consultations
            and treatments at other hospitals, the severity of her condition
            remained unchanged. The family was losing hope—until they arrived at
            Faith Specialist Hospital.
          </p>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            Pre-Surgery Preparation
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4 font-light">
            Upon arrival, Grace’s case was thoroughly evaluated by our team of
            orthopedic specialists. Clinical examinations and medical imaging
            confirmed severe bilateral genu varum resulting from advanced
            Blount’s disease. Given her age and the progression of her
            condition, surgical intervention was deemed necessary to correct the
            deformity and restore proper alignment.
          </p>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            The Procedure
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4 font-light">
            Grace underwent a carefully planned corrective surgery at Faith
            Specialist Hospital. Our experienced team employed cutting-edge
            techniques, including osteotomy (bone realignment) and internal
            fixation, to gradually straighten her legs. The procedure was
            executed with precision to ensure minimal discomfort and an optimal
            recovery outcome.{" "}
          </p>

          <p className="mt-4 font-light">
            {" "}
            Our team also provided post-operative support, including
            physiotherapy sessions and detailed guidance for at-home care. This
            holistic approach was designed to aid Grace’s recovery, improve her
            mobility, and ensure the surgical corrections were maintained.
          </p>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            The Transformation
          </h3>
        </div>
        <div className="flex px-[em] gap-6 mt-[2em]">
          <div>
            <p className="text-[16px] font-normal px-[em] text-[#444A5B]">
              Before Surgery
            </p>
            <StaticImage
              src="../../images/grace1.png"
              alt="LinkedIn"
              className="w-[]"
            />
            <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4 font-light">
              Before Surgery: Grace’s legs showed significant outward bowing in
              both the front and back views, a hallmark of Blount’s disease.
              These deformities greatly hindered her walking ability and
              posture.
            </p>
          </div>
          <div>
            <p className="text-[16px] font-normal px-[em] text-[#444A5B]">
              Three Months After Surgery
            </p>
            <StaticImage
              src="../../images/grace2.png"
              alt="LinkedIn"
              className="w-[]"
            />
            <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-6 font-light">
              Three Months After Surgery: The transformation was remarkable. The
              front-view image revealed straightened legs with proper alignment,
              allowing Grace to stand tall and walk with confidence.
            </p>
          </div>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            A New Chapter
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4 font-light">
            Grace’s story is a testament to the expertise and dedication of the
            Faith Specialist Hospital team. Today, she moves with ease,
            participates in her favorite activities, and embraces life with a
            renewed sense of confidence. Her family, once overwhelmed with
            worry, now celebrates her vibrant spirit and bright future.
          </p>
        </div>
      </div>
      <div className="mt-[118em] hidden md:block">
        <p className="text-[33px] font-semibold px-[5em] hidden lg:block md:block">
          More Patient Stories
        </p>
        <Carousel items={stories2} />
      </div>

      {/* mobile */}

      <div className="absolute top-[500px] left-1/2 transform -translate-x-1/2  max-w-3xl w-full rounded-lg z-10 px-[1em] py-10 lg:hidden md:hidden">
        <h1 className="font-semibold text-[34px] mt-[2em] text-center bg-white pt-[2em]">
          A New Beginning: 11-Year-Old Grace <br />
          Overcomes Blount’s Disease
        </h1>
        <p className="text-[16px] font-normal px-[m] text-[#444A5B] mt-4">
          Grace, an energetic and spirited 11-year-old, faced a challenging
          journey due to Blount's disease, a condition that caused severe genu
          varum (bowleggedness). Her condition not only impacted her physical
          mobility but also her confidence and emotional well-being. After
          visiting multiple hospitals without a successful resolution, Grace and
          her family were finally referred to Faith Specialist Hospital.
        </p>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            The Challenge
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4">
            From an early age, Grace’s family noticed the progressive bowing of
            her legs, which worsened as she grew older. Her condition limited
            her ability to participate in activities with her peers, causing her
            to feel isolated and self-conscious. Despite numerous consultations
            and treatments at other hospitals, the severity of her condition
            remained unchanged. The family was losing hope—until they arrived at
            Faith Specialist Hospital.
          </p>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            Pre-Surgery Preparation
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4">
            Upon arrival, Grace’s case was thoroughly evaluated by our team of
            orthopedic specialists. Clinical examinations and medical imaging
            confirmed severe bilateral genu varum resulting from advanced
            Blount’s disease. Given her age and the progression of her
            condition, surgical intervention was deemed necessary to correct the
            deformity and restore proper alignment.
          </p>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            The Procedure
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4">
            Grace underwent a carefully planned corrective surgery at Faith
            Specialist Hospital. Our experienced team employed cutting-edge
            techniques, including osteotomy (bone realignment) and internal
            fixation, to gradually straighten her legs. The procedure was
            executed with precision to ensure minimal discomfort and an optimal
            recovery outcome.{" "}
          </p>

          <p className="mt-4">
            {" "}
            Our team also provided post-operative support, including
            physiotherapy sessions and detailed guidance for at-home care. This
            holistic approach was designed to aid Grace’s recovery, improve her
            mobility, and ensure the surgical corrections were maintained.
          </p>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            The Transformation
          </h3>
        </div>
        <div className="flex flex-col px-[em] gap-6 mt-[2em]">
          <div>
            <p className="text-[16px] font-normal px-[em] text-[#444A5B]">
              Before Surgery
            </p>
            <StaticImage
              src="../../images/grace1.png"
              alt="LinkedIn"
              className="w-[] mt-2"
            />
            <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4">
              Before Surgery: Grace’s legs showed significant outward bowing in
              both the front and back views, a hallmark of Blount’s disease.
              These deformities greatly hindered her walking ability and
              posture.
            </p>
          </div>
          <div>
            <p className="text-[16px] font-normal px-[em] text-[#444A5B]">
              Three Months After Surgery
            </p>
            <StaticImage
              src="../../images/grace2.png"
              alt="LinkedIn"
              className="w-[] mt-2"
            />
            <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-6">
              Three Months After Surgery: The transformation was remarkable. The
              front-view image revealed straightened legs with proper alignment,
              allowing Grace to stand tall and walk with confidence.
            </p>
          </div>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            A New Chapter
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4">
            Grace’s story is a testament to the expertise and dedication of the
            Faith Specialist Hospital team. Today, she moves with ease,
            participates in her favorite activities, and embraces life with a
            renewed sense of confidence. Her family, once overwhelmed with
            worry, now celebrates her vibrant spirit and bright future.
          </p>
        </div>
      </div>
      <div className="mt-[178em] lg:hidden md:hidden">
        <p className="text-[33px] font-semibold px-[1em]">
          More Patient Stories
        </p>
        <Carousel items={stories2} />
      </div>
    </>
  );
};

export default BlountDisease;
