import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const DanielsStruggle = () => {
    // const { story, otherStories } = pageContext;
  return (
    <>
         {/* <div className="absolute bg-white px-[12em] items-center flex flex-col justify-center shadow-lg -mt-[6em] z-50"> */}
         <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 bg-white max-w-5xl w-full rounded-lg z-10 px-[5em] py-10">
        <h1 className="font-semibold text-[48px] mt-[2em] ">
          From Struggles to Strength: Daniel’s <br />
          Journey to Recovery
        </h1>
        <p className="text-[16px] font-normal px-[m] text-[#444A5B] mt-4">
          At just five years old, Daniel’s life was marked by struggles no child
          should face. Born with a windswept deformity caused by rickets, his
          legs curved outward in opposite directions, making walking a painful
          challenge. Simple joys like running or playing with friends were out
          of reach. Instead of carefree laughter, Daniel faced stares and
          whispers, leaving him shy and withdrawn.
        </p>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            Initial Struggles
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4">
            Daniel’s parents tried everything within their reach. They visited
            multiple hospitals, hoping for a solution to their son’s condition.
            But each visit ended in disappointment, with no clear path to
            recovery. Their search felt endless until a trusted friend
            recommended Faith Specialist Hospital, renowned for its expertise in
            managing complex orthopedic conditions.
          </p>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            Diagnosis and Treatment Plan
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4">
            At Faith Specialist Hospital, Daniel’s family found not just hope
            but a clear plan. During their first consultation, the orthopedic
            team, led by the Medical Director, carefully assessed Daniel’s
            condition. The team explained the challenges and outlined a
            multi-phase plan to correct the deformity. The plan included precise
            corrective surgery followed by a structured rehabilitation program,
            designed to restore both function and strength.
          </p>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            Transformation and Outcome
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4">
            The day of surgery marked a turning point for Daniel. The hospital’s
            skilled surgeons employed advanced techniques to realign his legs.
            The procedure was a success, but the journey was far from over.
            Post-surgery, Daniel embarked on a personalized recovery plan. This
            included physiotherapy sessions to improve mobility, nutritional
            guidance to strengthen his bones, and regular follow-ups to monitor
            progress.
          </p>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            The Transformation
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4">
            Three months later, the results were astonishing. Daniel’s legs were
            straight, his gait was steady, and his once-shy demeanor was
            replaced by a beaming smile. For the first time, Daniel could run,
            jump, and play like other children his age. His transformation was
            not just physical—it was emotional. The newfound confidence in his
            steps mirrored the joy in his heart.
          </p>
        </div>
        <div className="flex px-[em] gap-6 mt-[2em]">
          <div>
            <p className="text-[16px] font-normal px-[em] text-[#444A5B]">
              Before Surgery
            </p>
            <StaticImage
              src="../../images/stories4.webp"
              alt="LinkedIn"
              className="w-[]"
            />
          </div>
          <div>
            <p className="text-[16px] font-normal px-[em] text-[#444A5B]">
              Three Months After Surgery
            </p>
            <StaticImage
              src="../../images/stories5.webp"
              alt="LinkedIn"
              className="w-[]"
            />
          </div>
        </div>
        <div className="px-[em] text-left">
          <h3 className="font-semibold text-[23px] mt-7 text-left">
            Gratitude and Inspiration
          </h3>
          <p className="text-[16px] font-normal px-[em] text-[#444A5B] mt-4">
            Daniel’s parents are overwhelmed with gratitude. “Faith Specialist
            Hospital didn’t just heal our son’s legs; they gave him a new life,”
            his father shared. Today, Daniel’s story stands as a testament to
            the power of expert care, compassion, and resilience. Faith
            Specialist Hospital continues to inspire hope, proving that with the
            right care, even the most challenging conditions can be overcome.
          </p>
        </div>
      </div>
      {/* {otherStories.length > 0 && (
        <Carousel
          items={otherStories.map((otherStory) => ({
            title: otherStory.title,
            description: otherStory.description,
            image: otherStory.image,
            slug: otherStory.slug,
          }))}
        />
      )} */}
    </>
  );
};

export default DanielsStruggle;
