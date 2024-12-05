import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { blog1 } from "../constants";
import Carousel from "../Stories/storyCarousel";

const Blog2 = () => {
  return (
    <>
      {/* desktop */}
      <div>
        <h1 className="font-semibold text-[48px]">
          What to Expect During a Joint Replacement Surgery
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="border border-gray-300 rounded-full px-4 py-1">
              <p>Surgical Procedures</p>
              <p>4 min read</p>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] font-semibold">Share</p>
            <div className="flex gap-3">
              <StaticImage
                src="../../images/facebookContact.png"
                alt="Facebook"
              />
              <StaticImage
                src="../../images/linkeInContact.png"
                alt="LinkedIn"
              />
              <StaticImage src="../../images/IgContact.png" alt="Instagram" />
              <StaticImage src="../../images/XContact.png" alt="Twitter" />
              <StaticImage src="../../images/PhoneContact.png" alt="Phone" />
            </div>
          </div>
        </div>

        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Joint replacement surgery can be life-changing for individuals with
          severe arthritis or injury-related joint damage. This guide walks you
          through every stage of the process, from preparation to recovery,
          helping you understand what to expect.
        </p>
        <StaticImage
          src="../../images/stories3.webp"
          alt=""
          className="w-full h-[200px] object-cover rounded-md"
        />
        <h3 className="text-[28px] font-semibold mt-4">
          The Purpose of Joint Replacement Surgery
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Joint replacement surgery involves removing a damaged joint and
          replacing it with a prosthetic made of metal, ceramic, or plastic.
          It’s commonly performed for conditions like osteoarthritis, rheumatoid
          arthritis, or trauma-induced joint damage.
        </p>

        <h3 className="text-[23px] font-semibold mt-4">
          Common Joints Replaced
        </h3>
        <ul>
          <li>Knees</li>
          <li>Hips</li>
          <li>Shoulders</li>
        </ul>

        <h3 className="text-[28px] font-semibold mt-4">
          Pre-Surgery Preparation
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Understanding what leads to OA can help with both prevention and
          management.
        </p>

        <h3 className="text-[23px] font-semibold mt-4">
          1. Medical Evaluation:
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          A thorough examination ensures you’re healthy enough for surgery. This
          includes blood tests, imaging scans, and heart evaluations.
        </p>
        <h3 className="text-[23px] font-semibold mt-4">
          2. Lifestyle Adjustments:
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          <ul>
            <li>Quit Smoking: Smoking can impede wound healing.</li>
            <li>
              Dietary Changes: A balanced diet boosts immunity and energy for
              recovery.
            </li>
          </ul>
        </p>
        <h3 className="text-[23px] font-semibold mt-4">3. Mental Readiness:</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Learn about the procedure to ease anxiety. Joining patient support
          groups can also help.
        </p>

        <h3 className="text-[28px] font-semibold mt-4">
          The Surgical Procedure
        </h3>

        <h3 className="text-[23px] font-semibold mt-4">Hospital Stay:</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Expect to stay for 2–3 days. Nurses monitor pain and mobility
          progress.
        </p>
        <h3 className="text-[23px] font-semibold mt-4">Physical Therapy:</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Rehabilitation begins almost immediately to strengthen muscles and
          improve joint movement.
        </p>
        <h3 className="text-[23px] font-semibold mt-4">Home Care:</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Follow your surgeon’s advice on wound care and avoid high-impact
          activities for several weeks.
        </p>

        <h3 className="text-[28px] font-semibold mt-4">Conclusion</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Joint replacement surgery is a proven solution for chronic joint pain
          and limited mobility. With proper preparation and dedicated
          rehabilitation, patients can return to pain-free, active lives. If
          you’re considering joint replacement, consult our experienced surgeons
          today.
        </p>

        <div className="mt-[118em]">
          <p className="text-[33px] font-semibold px-[5em]">Related Articles</p>
          <Carousel items={blog1} />
        </div>
      </div>

      {/* Mobile */}
    </>
  );
};

export default Blog2;
