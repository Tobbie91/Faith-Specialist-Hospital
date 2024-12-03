import React from "react";
import { Link } from "gatsby";
   //   @ts-ignore
const Carousel = ({ items }) => {
  return (
    <>
    <div className="mt-[115em] mb-6">
    <p className="text-[33px] font-semibold px-[5em]">More Patient Stories</p>
    </div>
    <div className="w-full overflow-x-auto flex justify-start px-[20em] ">
      {/* Carousel container */}
      <div className="flex gap-6">
       {/* @ts-ignore */}
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full max-w-[350px] p-4 bg-white rounded-lg shadow-lg justify-center items-center "
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-[200px] object-cover rounded-md"
            />

            {/* Title */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">
              {item.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-gray-600 line-clamp-3">
              {item.description}
            </p>

            {/* Read More Button */}
            <Link
              to={`/details/${item.slug}`} // Assumes "slug" exists in items
              className="mt-4 inline-block text-sm font-medium text-[#017B64]"
            >
       Read Full Story
            </Link>
          </div>
        ))}
      </div>
    </div>
</>  );
};

export default Carousel;
