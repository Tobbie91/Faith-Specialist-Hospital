import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { blog2 } from "../constants";
import Carousel from "../Stories/storyCarousel";

const Blog1 = () => {
  return (
    <>
      {/* desktop */}\{" "}
      <div className="mt-[6em] px-[13em] hidden md:block">
        <Link to="/blog">
          {" "}
          <div className="text-[16px] text-[#017B64] flex mt-[3em]">
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
          </div>{" "}
        </Link>
        <h1 className="font-semibold text-[48px] mt-[2em]">
          Understanding the Causes and Treatment of Osteoarthritis
        </h1>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <div className="border border-gray-300 rounded-full px-4 py-1">
              <p>Orthopedic Care</p>
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

        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Osteoarthritis (OA) is the most common form of arthritis, affecting
          over 500 million people worldwide. Characterized by the gradual
          breakdown of joint cartilage, it leads to pain, stiffness, and limited
          mobility. This blog delves into the underlying causes of OA and
          explores the most effective treatment options available today.
        </p>
        <StaticImage
          src="../../images/treatment.png"
          alt=""
          className="w-full h-[400px] object-cover rounded-md"
        />
        <h3 className="text-[28px] font-semibold mt-4">
          What is Osteoarthritis?
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Osteoarthritis is a degenerative joint disorder where cartilage, the
          smooth tissue that cushions the ends of bones, wears away over time.
          Without this protective layer, bones grind against each other, causing
          pain and inflammation. It most frequently affects the knees, hips,
          hands, and spine.
        </p>

        <h3 className="text-[23px] font-semibold mt-4">Key Symptoms:</h3>

        <ul className="space-y-4 pl-5 text-gray-700 mt-3">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>Joint pain during or after movement.</div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Stiffness, especially in the morning or after periods of
              inactivity.
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>Swelling or tenderness in affected joints.</div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>Decreased range of motion</div>
          </li>
        </ul>
        <h3 className="text-[28px] font-semibold mt-4">
          Causes of Osteoarthritis
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Understanding what leads to OA can help with both prevention and
          management.
        </p>

        <h3 className="text-[23px] font-semibold mt-4">
          1. Age-Related Degeneration:
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Cartilage naturally wears down as we age. Most OA cases occur in
          people aged 50 and above.
        </p>
        <h3 className="text-[23px] font-semibold mt-4">
          2. Joint Injuries and Overuse:
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Sports injuries, workplace strain, or repetitive movements can
          increase the risk of OA, even years after the initial trauma.
        </p>
        <h3 className="text-[23px] font-semibold mt-4">3. Obesity</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Excess weight places added stress on weight-bearing joints like the
          knees and hips, accelerating cartilage breakdown.
        </p>
        <h3 className="text-[23px] font-semibold mt-4">4. Genetics</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          A family history of OA can predispose individuals to developing the
          condition earlier or more severely.
        </p>
        <h3 className="text-[23px] font-semibold mt-4">5. Gender</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Women, particularly those over 50, are more likely to develop OA than
          men, possibly due to hormonal changes post-menopause.
        </p>
        <StaticImage
          src="../../images/facebookContact.png"
          alt="Facebook"
          className=""
        />
        <h3 className="text-[28px] font-semibold mt-4">Treatment Options</h3>

        <h3 className="text-[23px] font-semibold mt-4">
          Non-Surgical Treatments:
        </h3>
        <ul className="space-y-4 pl-5 text-gray-700">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Physical Therapy: Exercises tailored to strengthen muscles and
              improve flexibility can reduce joint strain.
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Medications: NSAIDs (non-steroidal anti-inflammatory drugs) and
              acetaminophen help manage pain and inflammation.
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Injections: Corticosteroid or hyaluronic acid injections can
              provide temporary relief.
            </div>
          </li>
        </ul>

        <h3 className="text-[23px] font-semibold mt-4">Lifestyle Changes:</h3>

        <ul className="space-y-4 pl-5 text-gray-700 mt-3">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              {" "}
              Weight Management: Losing even a small amount of weight can
              significantly reduce joint stress.
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Low-Impact Activities: Swimming, cycling, and yoga keep joints
              mobile without overburdening them.
            </div>
          </li>
        </ul>
        <h3 className="text-[23px] font-semibold mt-4">
          Surgical Interventions:
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          For severe cases, surgery may be the best option:
        </p>
        <ul className="space-y-4 pl-5 text-gray-700 mt-3">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              {" "}
              Arthroscopy: Minimally invasive procedure to clean out joint
              debris.
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Joint Replacement: Replacing damaged joints with prosthetics can
              restore mobility and alleviate pain.
            </div>
          </li>
        </ul>
        <h3 className="text-[28px] font-semibold mt-4">
          Living with Osteoarthritis
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          OA is a lifelong condition, but proactive management can minimize its
          impact. Regular check-ups, adherence to prescribed treatments, and
          maintaining a positive mindset are key.
        </p>
        <h3 className="text-[28px] font-semibold mt-4">Conclusion</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Osteoarthritis doesn’t have to define your life. By understanding its
          causes and exploring comprehensive treatment options, you can manage
          symptoms and maintain an active lifestyle. For personalized advice,
          consult with an orthopedic specialist today.
        </p>

        <div className="mt-[4em] mb-4">
          <p className="text-[33px] font-semibold px-[em]">Related Articles</p>
          <Carousel items={blog2} />
        </div>
      </div>
      <div className="w-[167px] text-[18px] text-green-600 font-semibold items-center text-center mt-[1em] border border-green-600 rounded-md h-[56px] mb-[2em] justify-center flex ml-[15em]">
          <Link to="/blog">See All Stories</Link>
        </div>

        {/* mobile */}
        <div className="mt-[3em] px-[1em] lg:hidden md:hidden">
        <Link to="/blog">
          {" "}
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

            <span className="ml-[] whitespace-nowrap"> Back to Blogs</span>
          </div>{" "}
        </Link>
        <h1 className="font-semibold text-[34px] mt-[2em]">
          Understanding the Causes and Treatment of Osteoarthritis
        </h1>
        <div className="flex flex-col">
          <div className="flex flex-col ">
            <div className="border border-gray-300 rounded-full px-4 py-1 text-[21px] whitespace-nowrap w-[190px] mt-[1em]">
              <p>Orthopedic Care</p>
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
            <p className="text-[18px] font-semibold">Share</p>
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

        <p className="text-[18px] font-normal text-[#444A5B] mt-[2em]">
          Osteoarthritis (OA) is the most common form of arthritis, affecting
          over 500 million people worldwide. Characterized by the gradual
          breakdown of joint cartilage, it leads to pain, stiffness, and limited
          mobility. This blog delves into the underlying causes of OA and
          explores the most effective treatment options available today.
        </p>
        <StaticImage
          src="../../images/treatment.png"
          alt=""
          className="w-full h-[400px] object-cover rounded-md mt-2"
        />
        <h3 className="text-[28px] font-semibold mt-4">
          What is Osteoarthritis?
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Osteoarthritis is a degenerative joint disorder where cartilage, the
          smooth tissue that cushions the ends of bones, wears away over time.
          Without this protective layer, bones grind against each other, causing
          pain and inflammation. It most frequently affects the knees, hips,
          hands, and spine.
        </p>

        <h3 className="text-[23px] font-semibold mt-4">Key Symptoms:</h3>

        <ul className="space-y-4 pl-5 text-gray-700 mt-3">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>Joint pain during or after movement.</div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Stiffness, especially in the morning or after periods of
              inactivity.
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>Swelling or tenderness in affected joints.</div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>Decreased range of motion</div>
          </li>
        </ul>
        <h3 className="text-[28px] font-semibold mt-4">
          Causes of Osteoarthritis
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Understanding what leads to OA can help with both prevention and
          management.
        </p>

        <h3 className="text-[23px] font-semibold mt-4">
          1. Age-Related Degeneration:
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Cartilage naturally wears down as we age. Most OA cases occur in
          people aged 50 and above.
        </p>
        <h3 className="text-[23px] font-semibold mt-4">
          2. Joint Injuries and Overuse:
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Sports injuries, workplace strain, or repetitive movements can
          increase the risk of OA, even years after the initial trauma.
        </p>
        <h3 className="text-[23px] font-semibold mt-4">3. Obesity</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Excess weight places added stress on weight-bearing joints like the
          knees and hips, accelerating cartilage breakdown.
        </p>
        <h3 className="text-[23px] font-semibold mt-4">4. Genetics</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          A family history of OA can predispose individuals to developing the
          condition earlier or more severely.
        </p>
        <h3 className="text-[23px] font-semibold mt-4">5. Gender</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Women, particularly those over 50, are more likely to develop OA than
          men, possibly due to hormonal changes post-menopause.
        </p>
        <StaticImage
          src="../../images/facebookContact.png"
          alt="Facebook"
          className=""
        />
        <h3 className="text-[28px] font-semibold mt-4">Treatment Options</h3>

        <h3 className="text-[23px] font-semibold mt-4">
          Non-Surgical Treatments:
        </h3>
        <ul className="space-y-4 pl-5 text-gray-700">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Physical Therapy: Exercises tailored to strengthen muscles and
              improve flexibility can reduce joint strain.
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Medications: NSAIDs (non-steroidal anti-inflammatory drugs) and
              acetaminophen help manage pain and inflammation.
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Injections: Corticosteroid or hyaluronic acid injections can
              provide temporary relief.
            </div>
          </li>
        </ul>

        <h3 className="text-[23px] font-semibold mt-4">Lifestyle Changes:</h3>

        <ul className="space-y-4 pl-5 text-gray-700 mt-3">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              {" "}
              Weight Management: Losing even a small amount of weight can
              significantly reduce joint stress.
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Low-Impact Activities: Swimming, cycling, and yoga keep joints
              mobile without overburdening them.
            </div>
          </li>
        </ul>
        <h3 className="text-[23px] font-semibold mt-4">
          Surgical Interventions:
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          For severe cases, surgery may be the best option:
        </p>
        <ul className="space-y-4 pl-5 text-gray-700 mt-3">
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              {" "}
              Arthroscopy: Minimally invasive procedure to clean out joint
              debris.
            </div>
          </li>
          <li className="flex items-start">
            <span className="inline-block w-2 h-2 bg-gray-600 rounded-full mt-2 mr-2"></span>
            <div>
              Joint Replacement: Replacing damaged joints with prosthetics can
              restore mobility and alleviate pain.
            </div>
          </li>
        </ul>
        <h3 className="text-[28px] font-semibold mt-4">
          Living with Osteoarthritis
        </h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          OA is a lifelong condition, but proactive management can minimize its
          impact. Regular check-ups, adherence to prescribed treatments, and
          maintaining a positive mindset are key.
        </p>
        <h3 className="text-[28px] font-semibold mt-4">Conclusion</h3>
        <p className="text-[18px] font-normal text-[#444A5B] mt-4">
          Osteoarthritis doesn’t have to define your life. By understanding its
          causes and exploring comprehensive treatment options, you can manage
          symptoms and maintain an active lifestyle. For personalized advice,
          consult with an orthopedic specialist today.
        </p>

        <div className="mt-[4em] mb-4">
          <p className="text-[33px] font-semibold px-[em]">Related Articles</p>
          <Carousel items={blog2} />
        </div>
        <div className="w-[153px] text-[18px] flex text-green-600 font-semibold items-center  mt-[1em] border border-green-600 rounded-md h-[56px] mb-[2em] justify-center ml-[1em]">
          <Link to="/blog">See All Stories</Link>
        </div>
      </div>
      
    </>
  );
};

export default Blog1;
