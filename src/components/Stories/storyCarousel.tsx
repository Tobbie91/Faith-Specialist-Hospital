import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

//@ts-ignore
const Carousel = ({ items }) => {
  // Query all images in src/images
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "images" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 350, height: 200, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  // Create a map of relativePath to image data
  const imageMap = new Map();
  data.allFile.nodes.forEach((node) => {
    imageMap.set(node.relativePath, getImage(node));
  });

  return (
    <>
      {/* Desktop View */}
      <div className="mb-[1em] hidden md:block lg:block">
        <div className="w-full overflow-x-auto flex justify-start px-[20em] gap-6">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-full max-w-[350px] p-4 bg-white rounded-lg"
            >
              {/* Image */}
              {imageMap.has(item.img) ? (
                <GatsbyImage
                  image={imageMap.get(item.img)}
                  alt={item.title}
                  className="w-[350px] h-[200px] object-cover rounded-md"
                />
              ) : (
                <p>Image not found</p>
              )}

              {/* Title */}
              <h3 className="mt-4 text-lg font-semibold text-gray-800  w-[350px]">
                {item.title}
              </h3>
              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 line-clamp-3 w-[350px] font-light">
                {item.description}
              </p>
              {/* Link */}
              <Link
                to={item.link}
                className="mt-4 inline-block text-sm font-medium text-[#017B64] cursor-pointer hover:underline hover:decoration-[#017B64] underline-offset-2"
              >
                Read Full Story
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="mb-[1em] md:hidden lg:hidden">
        <div className="w-full overflow-x-auto flex justify-start px-[1em] gap-6">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className="flex-shrink-0 w-full max-w-[450px] p-4 bg-white rounded-lg"
            >
              {/* Image */}
              {imageMap.has(item.img) ? (
                <GatsbyImage
                  image={imageMap.get(item.img)}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-md"
                />
              ) : (
                <p>Image not found</p>
              )}

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold text-gray-800">
                {item.title}
              </h3>
              {/* Description */}
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {item.description}
              </p>
              {/* Link */}
              <Link
                to={item.link}
                className="mt-4 inline-block text-sm font-medium text-[#017B64] cursor-pointer hover:underline hover:decoration-[#017B64] underline-offset-2"
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
