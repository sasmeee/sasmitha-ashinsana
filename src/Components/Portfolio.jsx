import React, { useState } from "react";
import PackageStoreImage from "../assest/package-store.jpg";
import TravamakerBlogImage from "../assest/tmblog.jpg";
import ChatHereImage from "../assest/chat-here.jpg";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Portfolio = () => {
  const works = [
    {
      id: 1,
      name: "ChatHere",
      src: ChatHereImage,
      demo_link: "https://your-chat-here.vercel.app/",
    },
    {
      id: 2,
      name: "Package Store",
      src: PackageStoreImage,
      demo_link: "https://package-store.vercel.app/",
    },
    {
      id: 3,
      name: "TM Blog",
      src: TravamakerBlogImage,
      demo_link: "https://travamaker-blog.vercel.app/",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? works.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === works.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div name="portfolio" className="w-full h-screen mx-auto">
      <div className="dark:text-gray-200 flex flex-col items-center justify-center h-full gap-5 px-4 duration-100">
        <p className="dark:border-gray-200 sm:my-7 py-3 text-2xl duration-100 border-b-2 border-gray-800">
          Portfolio
        </p>
        <caption>
          Check out some of my work right here. Click on the cards to watch the
          demos.
        </caption>
        <div className="flex items-center justify-center w-full mt-3">
          <MdOutlineKeyboardArrowLeft
            onClick={handlePrevClick}
            className="dark:text-gray-400 dark:bg-slate-800 h-6 text-2xl text-gray-500 duration-100 bg-gray-100 rounded-l-full cursor-pointer"
          />
          <a
            href={works[activeIndex].demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center"
          >
            <div
              key={works[activeIndex].id}
              className="dark:bg-slate-800 dark:border-gray-600 duration-100 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <img
                src={works[activeIndex].src}
                className="md:rounded-lg md:h-40 h-32 rounded-sm"
                alt="card"
              />
              <p className="dark:text-gray-100 py-2 text-gray-900 duration-100">
                {works[activeIndex].name}
              </p>
            </div>
          </a>
          <MdOutlineKeyboardArrowRight
            onClick={handleNextClick}
            className="dark:text-gray-400 dark:bg-slate-800 h-6 text-2xl text-gray-500 duration-100 bg-gray-100 rounded-r-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
