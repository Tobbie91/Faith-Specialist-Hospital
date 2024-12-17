import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

//@ts-ignore
const Carousel = ({ items }) => {
  return (
    <>
    <div className="mb-[1em] hidden md:block">
      <div className="w-full overflow-x-auto flex justify-start px-[20em] gap-6">
        {items.map((item: any, index: number) => ( // Add index here
          <div
            key={index} // Use index as the key
            className="flex-shrink-0 w-full max-w-[350px] p-4 bg-white rounded-lg "
          >
            {/* Image */}
            <img
              src={item.image}
              className="w-full h-[200px] object-cover rounded-md"
            />
            {/* Title */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">{item.title}</h3>
            {/* Description */}
            <p className="mt-2 text-sm text-gray-600 line-clamp-3">{item.description}</p>
            {/* Link to Story */}
            <Link
              to={item.link}
              className="mt-4 inline-block text-sm font-medium text-[#017B64] cursor-pointer"
            >
              Read Full Story 
            </Link>
          </div>
        ))}
      </div>
    </div>

    {/* mobile */}
    <div className="mb-[1em]">
      <div className="w-full overflow-x-auto flex justify-start px-[em] gap-6">
        {items.map((item: any, index: number) => ( // Add index here
          <div
            key={index} // Use index as the key
            className="flex-shrink-0 w-full max-w-[450px] p-4 bg-white rounded-lg "
          >
            {/* Image */}
            <img
              src={item.image}
              className="w-full h-[200px] object-cover rounded-md"
            />
            {/* Title */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">{item.title}</h3>
            {/* Description */}
            <p className="mt-2 text-sm text-gray-600 line-clamp-3">{item.description}</p>
            {/* Link to Story */}
            <Link
              to={item.link}
              className="mt-4 inline-block text-sm font-medium text-[#017B64] cursor-pointer"
            >
              Read Full Story 
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Carousel;
