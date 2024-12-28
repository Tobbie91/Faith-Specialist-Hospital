import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { blog1 } from "../constants";
import Carousel from "../Stories/storyCarousel";

const Blog2 = () => {
  return (
    <>
      {/* desktop */}
      <div className="mt-[6em] px-[13em] hidden md:block">
      <Link to="/blog">     <div className="text-[16px] text-[#017B64] flex mt-[3em]">
       
       <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="green"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-left-arrow"
>
  <path d="M19 12H5" />
  <polyline points="12 19 5 12 12 5" />
</svg>

     <span className="ml-[0.7em]"> Back to Blogs</span> 
   </div>   </Link>
        <h1 className="font-semibold text-[48px] mt-[2em]">
          What to Expect During a Joint Replacement <br/>Surgery
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col mt-7">
            <div className="border border-gray-300 rounded-full px-4 py-1">
              <p className="text-[#1D1F1E]">Surgical Procedures</p>
        
            </div>
            <div className="flex mt-8">
            <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="2" 
  stroke-linecap="round" 
  stroke-linejoin="round" 
  class="icon icon-clock"
>
  <circle cx="12" cy="12" r="10" />
  <polyline points="12 6 12 12 16 14" />
</svg>
<p className=" text-[#1D1F1E] ml-[0.7em]">4 min read</p>
            </div>
          
          </div>
          <div className="flex flex-col">
            <p className="text-[16px] font-semibold">Share</p>
            <div className="flex gap-3 mt-4">
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

        <p className="text-[18px] font-normal text-[#444A5B] mt-8">
          Joint replacement surgery can be life-changing for individuals with
          severe arthritis or injury-related joint damage. This guide walks you
          through every stage of the process, from preparation to recovery,
          helping you understand what to expect.
        </p>
        <StaticImage
          src="../../images/surgery.png"
          alt=""
          className="w-full h-[400px] object-cover rounded-md"
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
         <ul className="space-y-4 pl-5 text-gray-700 mt-3">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>Knees</div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
            Hips
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>Shoulders</div>
          </li>
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

        <div className="mt-[4em] mb-4">
          <p className="text-[33px] font-semibold px-[em]">Related Articles</p>
          <Carousel items={blog1} />
        </div>

        <div className="w-[167px] text-[18px] text-green-600 font-semibold items-center text-center mt-[1em] border border-green-600 rounded-md h-[56px] mb-[2em] justify-center flex ml-[19em]">
          <Link to="/blog">See All Stories</Link>
        </div>
      </div>

      {/* Mobile */}
      <div className="mt-[8em] px-[1em] lg:hidden md:hidden">
      <Link to="/blog">     
      <div className="text-[16px] text-[#017B64] flex mt-[3em] justify-start whitespace-nowrap">
       <svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="green"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
  class="icon icon-left-arrow"
>
  <path d="M19 12H5" />
  <polyline points="12 19 5 12 12 5" />
</svg>

     <span className="ml-[0.7em]"> Back to Blogs</span> 
   </div>   </Link>
  
        <h1 className="font-semibold text-[34px] mt-[2em]">
          What to Expect During a Joint Replacement <br/>Surgery
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-col ">
          <div className="border border-gray-300 rounded-full px-4 py-1 text-[21px] whitespace-nowrap w-[220px] mt-[1em]">
              <p className="text-[#1D1F1E]">Surgical Procedures</p>
        
            </div>
            <div className="flex mt-8">
            <svg 
  xmlns="http://www.w3.org/2000/svg" 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  stroke-width="2" 
  stroke-linecap="round" 
  stroke-linejoin="round" 
  class="icon icon-clock"
>
  <circle cx="12" cy="12" r="10" />
  <polyline points="12 6 12 12 16 14" />
</svg>
<p className=" text-[#1D1F1E] ml-[0.7em] text-[18px]">4 min read</p>
            </div>
          
          </div>
          <div className="flex flex-col mt-[1em]">
            <p className="text-[18px] font-semibold ">Share</p>
            <div className="flex gap-3 mt-4 w-[100%]">
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
          src="../../images/surgery.png"
          alt=""
          className="w-full h-[400px] object-cover rounded-md mt-3"
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
         <ul className="space-y-4 pl-5 text-gray-700 mt-3">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>Knees</div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
            Hips
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>Shoulders</div>
          </li>
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

        <div className="mt-[4em] mb-4">
          <p className="text-[33px] font-semibold px-[em]">Related Articles</p>
          <Carousel items={blog1} />
        </div>

        <div className="w-[167px] text-[18px] text-green-600 font-semibold items-center text-center mt-[1em] border border-green-600 rounded-md h-[56px] mb-[2em] justify-center flex ml-[1em] hover:bg-green-100">
          <Link to="/blog">See All Stories</Link>
        </div>
      </div>
    </>
  );
};

export default Blog2;
