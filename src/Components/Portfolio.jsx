import React from "react";
import PackageStoreImage from "../assest/package-store.jpg";
import TravamakerBlogImage from "../assest/tmblog.jpg";

const Portfolio = () => {
  const works = [
    {
      id: 1,
      name: "Package Store",
      src: PackageStoreImage,
      demo_link: "https://package-store.vercel.app/",
    },
    {
      id: 2,
      name: "TM Blog",
      src: TravamakerBlogImage,
      demo_link: "https://travamaker-blog.vercel.app/",
    },
  ];
  return (
    <div name="portfolio" className="w-full h-screen mx-auto">
      <div className="dark:text-gray-200 flex flex-col items-center justify-center h-full gap-4 px-4 mx-auto duration-100">
        <p className="dark:border-gray-200 sm:my-7 py-3 text-2xl duration-100 border-b-2 border-gray-800">
          Portfolio
        </p>
        <caption class="caption-top">
          Check out some of my work right here. Click on the cards to watch the
          demos.
        </caption>
        <div className="sm:grid-cols-2 sm:gap-8 grid max-w-4xl grid-cols-1 gap-4 px-4 mx-auto">
          {works.map(({ id, name, src, demo_link }) => (
            <div
              key={id}
              className="dark:bg-gray-800 dark:border-gray-700 px-2 py-3 duration-100 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <a href={demo_link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
                  <img
                    src={src}
                    alt={name}
                    className="object-cover w-full h-full"
                  />
                </div>
              </a>
              <p className="dark:text-gray-100 w-full pt-2 -mb-2 text-center text-gray-900 duration-100">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
