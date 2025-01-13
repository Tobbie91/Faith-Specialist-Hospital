import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Pictures = () => {
  return (
    <>
    {/* desktop */}
    <div className="hidden lg:block">
      <div className="flex gap-6 px-[6em] pt-[3em]">
      <div className="relative w-[714px] h-[450px]">
      <StaticImage
        src="../../images/gallery1.png"
        alt="Gallery 1"
        className="w-full h-full"
      />
      <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
      Private Ward
      </p>
    </div>
    <div className="relative w-[491px] h-[450px]">
      <StaticImage
        src="../../images/gallery2.png"
        alt="Gallery 2"
        className="w-full h-full"
      />
      <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
      Waiting Area
      </p>
    </div>
      </div>
      <div className="flex gap-6 px-[6em] pt-[3em]">
      <div className="relative w-[752px] h-[356px]">
      <StaticImage
        src="../../images/gallery3.png"
        alt="Gallery 3"
        className="w-full h-full"
      />
      <p className="absolute bottom-2 left-2 text-white px-2 py-1 text-[28px] font-semibold">
      Operating Theatre
      </p>
    </div>
    <div className="relative w-[451px] h-[356px]">
      <StaticImage
        src="../../images/gallery4.png"
        alt="Gallery 4"
        className="w-full h-full"
      />
      <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
     Our Ward
      </p>
    </div>
      </div>
      <div className="flex gap-6 px-[6em] pt-[3em]">
      <div className="relative w-[491px] h-[450px] ">
      <StaticImage
          src="../../images/gallery5.png"
          alt="LinkedIn"
          className="w-[491px] h-[450px]  "
        />
      <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
      Our Building
      </p>
    </div>
    <div className="relative w-[714px] h-[450px]">
    <StaticImage
          src="../../images/gallery7.png"
          alt="LinkedIn"
          className="w-[714px] h-[450px]"
        />
      <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
      Our Ward
      </p>
    </div>
      </div>
      <div className="flex gap-6 px-[6em] pt-[3em]">
      <div className="relative w-[752px] h-[356px]">
      <StaticImage
          src="../../images/gallery6.png"
          alt="LinkedIn"
          className="w-[714px] h-[356px]  "
        />
      <p className="absolute bottom-2 left-2 text-white 0 px-2 py-1 text-[28px] font-semibold">
   Patient Examination
      </p>
    </div>
    <div className="relative w-[491px] h-[356px]">
    <StaticImage
          src="../../images/gallery8.png"
          alt="LinkedIn"
          className="w-[491px] h-[356px]"
        />
      <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 text-[28px] font-semibold">
   Our MD at work
      </p>
    </div>
      </div>
      <div className="flex gap-6 px-[6em] pt-[3em]">
      <div className="relative w-[491px] h-[450px]">
      <StaticImage
          src="../../images/gallery9.png"
          alt="LinkedIn"
          className="w-[491px] h-[450px]  "
        />
      <p className="absolute bottom-2 left-2 text-white px-2 py-1 text-[28px] font-semibold">
      Patient Receiving Care
      </p>
    </div>
    <div className="relative w-[714px] h-[450px]">
    <StaticImage
          src="../../images/gallery11.png"
          alt="LinkedIn"
          className="w-[714px] h-[450px]"
        /> 
      <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
      Our Nurses
      </p>
    </div>
       
      </div>
      <div className="flex gap-6 px-[6em] py-[3em] ">
      <div className="relative w-[613px] h-[356px] ">
      <StaticImage
          src="../../images/gallery12.png"
          alt="LinkedIn"
          className="w-[613px] h-[356px]  "
        />
      <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
      Our Team 
      </p>
    </div>
    <div className="relative w-[590px] h-[356px]">
    <StaticImage
          src="../../images/gallery10.png"
          alt="LinkedIn"
          className="w-[590px] h-[356px]"
        />
      <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
     Equipments
      </p>
    </div>
      </div>
    </div>

    {/* mobile */}
    <div className="lg:hidden">
      <div className=" relative pt-[3em]">
        <StaticImage
          src="../../images/gallery1.png"
          alt="LinkedIn"
          className="w-[714px] h-[450px]  "
        />
         <p className="absolute bottom-4 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
      Private Ward
      </p>
      </div>
      <div className="relative pt-[1em]">
        <StaticImage
          src="../../images/gallery2.png"
          alt="LinkedIn"
          className="w-[491px] h-[450px] mt-[3em]"
        />
         <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
         Waiting Area
      </p>
      </div>
      <div className="relative pt-[1em]">
        <StaticImage
          src="../../images/gallery3.png"
          alt="LinkedIn"
          className="w-[752px] h-[356px]  "
        />
         <p className="absolute bottom-2 left-2 text-white px-2 py-1 text-[28px] font-semibold">
      Operating Theatre
      </p>
        </div>
              <div className="relative pt-[1em]">
        <StaticImage
          src="../../images/gallery4.png"
          alt="LinkedIn"
          className="w-[451px] h-[356px] mt-[3em]"
        />
         <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
     Our Ward
      </p>
      </div>
      <div className="relative pt-[1em]">
        <StaticImage
          src="../../images/gallery5.png"
          alt="LinkedIn"
          className="w-[491px] h-[450px]  "
        />
         <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
      Our Building
      </p>
        </div>           
          <div className="relative pt-[1em]">
        <StaticImage
          src="../../images/gallery7.png"
          alt="LinkedIn"
          className="w-[714px] h-[450px] mt-[3em]"
        />
        <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
      Our Ward
      </p>
      </div>
      <div className="relative pt-[1em]">
        <StaticImage
          src="../../images/gallery6.png"
          alt="LinkedIn"
          className="w-[714px] h-[356px]  "
        />
         <p className="absolute bottom-2 left-2 text-white 0 px-2 py-1 text-[28px] font-semibold">
   Patient Examination
      </p>
        </div>
        <div className="relative pt-[1em]">
        <StaticImage
          src="../../images/gallery8.png"
          alt="LinkedIn"
          className="w-[491px] h-[356px] mt-[3em]"
        />
         <p className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 text-[28px] font-semibold">
   Our MD at work
      </p>
      </div>
      <div className="relative pt-[1em]">
        <StaticImage
          src="../../images/gallery9.png"
          alt="LinkedIn"
          className="w-[491px] h-[450px]  "
        />
         <p className="absolute bottom-2 left-2 text-white px-2 py-1 text-[28px] font-semibold">
      Patient Receiving Care
      </p>
        </div>
        {/* <StaticImage
          src="../../images/gallery11.webp"
          alt="LinkedIn"
          className="w-[714px] h-[450px] mt-[3em]" */}
        {/* /> */}
      </div>
      <div className="relative pt-[1em]">
        <StaticImage
          src="../../images/gallery12.png"
          alt="LinkedIn"
          className="w-[613px] h-[356px]  "
        />
         <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
      Our Nurses
      </p>
        </div>
        <div className="relative pt-[1em]">
        <StaticImage
          src="../../images/gallery10.png"
          alt="LinkedIn"
          className="w-[590px] h-[356px] mt-[3em]"
        />
         <p className="absolute bottom-2 left-2 text-white  px-2 py-1 text-[28px] font-semibold">
      Our Team 
      </p>
      </div>
    </>
  );
};

export default Pictures;
