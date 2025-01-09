import React, { useState } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";

//@ts-ignore
const BlogCarousel = ({ items, filterBy = "all" }) => {
  const [filter, setFilter] = useState("all");
  const filteredItems =
    filter === "all"
      ? items // Show all items
      : items.filter((item: { group: string }) => item.group === filter); // Filter based on `filter`

  return (
    <>
      {/* desktop */}
      <div className="mb-[3em] hidden md:block">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded ${
              filter === "all"
                ? "hover:bg-[linear-gradient(292.99deg,#0BBE95_-1.96%,#EE1433_100%)] text-white bg-[#017B64]"
                : "bg-gray-200 text-[#666F89]"
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter("Orthopedic Care")}
            className={`px-4 py-2 rounded ${
              filter === "Orthopedic Care"
                ? "hover:bg-[linear-gradient(292.99deg,#0BBE95_-1.96%,#EE1433_100%)] text-white bg-[#017B64]   "
                : "bg-gray-200 text-[#666F89]"
            }`}
          >
            Orthopedic Care
          </button>
          <button
            onClick={() => setFilter("Surgical Procedures")}
            className={`px-4 py-2 rounded ${
              filter === "Surgical Procedures"
                ? "hover:bg-[linear-gradient(292.99deg,#0BBE95_-1.96%,#EE1433_100%)] text-white bg-[#017B64]"
                : "bg-gray-200 text-[#666F89]"
            }`}
          >
            Surgical Procedures
          </button>
        </div>
        <div className="w-full overflow-x-auto flex justify-start px-[20em] gap-6">
          {filteredItems.map((item: any, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-full max-w-[350px] p-4 bg-white rounded-lg "
            >
              {item.img.includes("treatment") && (
                <StaticImage
                  src="../../images/treatment.png"
                  alt={item.title}
                  className=" h-[200px] rounded-md"
                />
              )}
              {item.img.includes("surgery") && (
                <StaticImage
                  src="../../images/surgery.png"
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-md"
                />
              )}
              <div className="border border-gray-300 rounded-full px-4 py-1 mt-2 w-[185px] whitespace-nowrap">
                <p>{item.group}</p>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {item.description}
              </p>
              <Link
                to={item.link}
                className="mt-4 inline-block text-sm font-medium text-[#017B64] cursor-pointer hover:underline hover:decoration-[#017B64] underline-offset-2"
              >
                Read Full Story
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/blog">
            <div className="flex w-[153px] h-[56px] text-[18px] border border-teal-700  text-teal-700 items-center  text-center font-semibold justify-center rounded-md hover:bg-green-100">
              See All Blogs
            </div>
          </Link>
        </div>
      </div>

      {/* mobile */}

      <div className="mb-[3em] md:hidden lg:hidden">
        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-6 px-2">
          <button
            onClick={() => setFilter("all")}
            className={`px-1 py-2 rounded text-[14px ] ${
              filter === "all"
                ? "bg-[#017B64] text-white"
                : "bg-gray-200 text-[#666F89]"
            }`}
          >
            Show All
          </button>
          <button
            onClick={() => setFilter("Orthopedic Care")}
            className={`px-4 py-2 rounded ${
              filter === "Orthopedic Care"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-[#666F89]"
            }`}
          >
            Orthopedic Care
          </button>
          <button
            onClick={() => setFilter("Surgical Procedures")}
            className={`px-4 py-2 rounded ${
              filter === "Surgical Procedures"
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-[#666F89]"
            }`}
          >
            Surgical Procedures
          </button>
        </div>
        <div className="w-full overflow-x-auto flex flex-col justify-start px-[em] gap-6">
          {filteredItems.map((item: any, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-full max-w-[450px] p-4 bg-white rounded-lg "
            >
              {item.img.includes("treatment") && (
                <StaticImage
                  src="../../images/treatment.png"
                  alt={item.title}
                  className=" h-[200px] rounded-md"
                />
              )}
              {item.img.includes("surgery") && (
                <StaticImage
                  src="../../images/surgery.png"
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-md"
                />
              )}
              <div className="border border-gray-300 rounded-full px-2 py-1 mt-2 w-[170px]">
                <p>{item.group}</p>
              </div>
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {item.description}
              </p>
              <Link
                to={item.link}
                className="mt-4 inline-block text-sm font-medium text-[#017B64] cursor-pointer "
              >
                Read Full Story
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <Link to="/blog">
            <div className="flex w-[153px] h-[56px] text-[18px] border border-teal-700  text-teal-700 items-center  text-center font-semibold justify-center rounded-md hover:bg-green-100">
              See All Blogs
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCarousel;
