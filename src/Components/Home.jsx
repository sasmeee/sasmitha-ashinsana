import React from "react";
import HeroImage from "../assest/portfolio-image.jpg";
import { Link } from "react-scroll";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen mx-auto">
      <div
        className="-top-40 transform-gpu blur-3xl sm:-top-80 absolute inset-x-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#62ff9e] to-[#7c99f8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="top-7 sm:top-0 sm:flex-row md:gap-14 md:px-6 relative flex flex-col items-center justify-center h-full gap-8 px-4 py-5 mx-auto">
        <div className="sm:text-left sm:ml-5 dark:text-gray-200 flex flex-col max-w-md text-center duration-100">
          <p className="md:pt-0 sm:text-2xl pt-5 text-3xl font-semibold tracking-wide">
            I'm a Frontend Web Developer
          </p>
          <p className="py-7 sm: text-lg">
            Welcome to my portfolio! I'm a dedicated frontend developer who
            loves working with React and Tailwind, creating stunning and
            responsive user interfaces.
          </p>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="group w-fit sm:left-0 sm:mx-0 bg-gradient-to-r from-cyan-500 to-blue-500 relative flex items-center justify-center px-4 py-2 mx-auto text-lg text-white rounded-lg cursor-pointer"
          >
            Portfolio{" "}
            <span className="group-hover:rotate-90 relative top-[1.2px] duration-300">
              <MdOutlineKeyboardArrowRight size={25} />
            </span>
          </Link>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="pp"
            className="md:w-64 object-cover w-2/3 mx-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
