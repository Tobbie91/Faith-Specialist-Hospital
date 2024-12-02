import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Carousel from "./Stories/storyCarousel";
//@ts-ignore
const StoryTemplate = ({ title, sections, images, otherStories }) => (
  <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 bg-white max-w-5xl w-full rounded-lg z-10 px-[5em] py-10">
    <h1 className="font-semibold text-[48px] mt-[2em]">{title}</h1>
    {sections.map((section: { heading: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
      <div key={index} className="text-left mt-7">
        <h3 className="font-semibold text-[23px]">{section.heading}</h3>
        <p className="text-[16px] text-[#444A5B] mt-4">{section.content}</p>
      </div>
    ))}
    <div className="flex gap-6 mt-[2em]">
      {images.map((img: { caption: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; src: string; alt: string; }, index: React.Key | null | undefined) => (
        <div key={index}>
          <p className="text-[16px] text-[#444A5B]">{img.caption}</p>
          <StaticImage src={img.src} alt={img.alt} />
        </div>
      ))}
    </div>
    {otherStories && otherStories.length > 0 && (
      <Carousel items={otherStories} />
    )}
  </div>
);

export default StoryTemplate;
