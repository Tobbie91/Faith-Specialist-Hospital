import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Pictures = () => {
  return (
    <>
    {/* desktop */}
    <div className="hidden lg:block">
      <div className="flex gap-6 px-[6em] pt-[3em]">
        <StaticImage
          src="../../images/gallery1.webp"
          alt="LinkedIn"
          className="w-[714px] h-[450px]  "
        />
        <StaticImage
          src="../../images/gallery2.webp"
          alt="LinkedIn"
          className="w-[491px] h-[450px]"
        />
      </div>
      <div className="flex gap-6 px-[6em] pt-[3em]">
        <StaticImage
          src="../../images/gallery3.webp"
          alt="LinkedIn"
          className="w-[752px] h-[356px]  "
        />
        <StaticImage
          src="../../images/gallery4.webp"
          alt="LinkedIn"
          className="w-[451px] h-[356px]"
        />
      </div>
      <div className="flex gap-6 px-[6em] pt-[3em]">
        <StaticImage
          src="../../images/gallery5.webp"
          alt="LinkedIn"
          className="w-[491px] h-[450px]  "
        />
        <StaticImage
          src="../../images/gallery7.webp"
          alt="LinkedIn"
          className="w-[714px] h-[450px]"
        />
      </div>
      <div className="flex gap-6 px-[6em] pt-[3em]">
        <StaticImage
          src="../../images/gallery6.webp"
          alt="LinkedIn"
          className="w-[714px] h-[356px]  "
        />
        <StaticImage
          src="../../images/gallery8.webp"
          alt="LinkedIn"
          className="w-[491px] h-[356px]"
        />
      </div>
      <div className="flex gap-6 px-[6em] pt-[3em]">
        <StaticImage
          src="../../images/gallery9.webp"
          alt="LinkedIn"
          className="w-[491px] h-[450px]  "
        />
        <StaticImage
          src="../../images/gallery11.webp"
          alt="LinkedIn"
          className="w-[714px] h-[450px]"
        />
      </div>
      <div className="flex gap-6 px-[6em] py-[3em] ">
        <StaticImage
          src="../../images/gallery12.webp"
          alt="LinkedIn"
          className="w-[613px] h-[356px]  "
        />
        <StaticImage
          src="../../images/gallery10.webp"
          alt="LinkedIn"
          className="w-[590px] h-[356px]"
        />
      </div>
    </div>

    {/* mobile */}
    <div className="lg:hidden">
      <div className="flex flex-col pt-[3em]">
        <StaticImage
          src="../../images/gallery1.webp"
          alt="LinkedIn"
          className="w-[714px] h-[450px]  "
        />
        <StaticImage
          src="../../images/gallery2.webp"
          alt="LinkedIn"
          className="w-[491px] h-[450px] mt-[3em]"
        />
      </div>
      <div className="flex flex-col pt-[3em]">
        <StaticImage
          src="../../images/gallery3.webp"
          alt="LinkedIn"
          className="w-[752px] h-[356px]  "
        />
        <StaticImage
          src="../../images/gallery4.webp"
          alt="LinkedIn"
          className="w-[451px] h-[356px] mt-[3em]"
        />
      </div>
      <div className="flex flex-col pt-[3em]">
        <StaticImage
          src="../../images/gallery5.webp"
          alt="LinkedIn"
          className="w-[491px] h-[450px]  "
        />
        <StaticImage
          src="../../images/gallery7.webp"
          alt="LinkedIn"
          className="w-[714px] h-[450px] mt-[3em]"
        />
      </div>
      <div className="flex flex-col pt-[3em]">
        <StaticImage
          src="../../images/gallery6.webp"
          alt="LinkedIn"
          className="w-[714px] h-[356px]  "
        />
        <StaticImage
          src="../../images/gallery8.webp"
          alt="LinkedIn"
          className="w-[491px] h-[356px] mt-[3em]"
        />
      </div>
      <div className="flex flex-col pt-[3em]">
        <StaticImage
          src="../../images/gallery9.webp"
          alt="LinkedIn"
          className="w-[491px] h-[450px]  "
        />
        <StaticImage
          src="../../images/gallery11.webp"
          alt="LinkedIn"
          className="w-[714px] h-[450px] mt-[3em]"
        />
      </div>
      <div className="flex flex-col py-[3em] ">
        <StaticImage
          src="../../images/gallery12.webp"
          alt="LinkedIn"
          className="w-[613px] h-[356px]  "
        />
        <StaticImage
          src="../../images/gallery10.webp"
          alt="LinkedIn"
          className="w-[590px] h-[356px] mt-[3em]"
        />
      </div>
    </div>
    </>
  );
};

export default Pictures;
