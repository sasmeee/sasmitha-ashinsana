import React from "react";
import servicePost from "../assest/service.jpg";

const Service = () => {
  return (
    <div name="services" className="w-full h-screen mx-auto">
      <div
        className="blur-3xl transform-gpu absolute inset-x-0 overflow-hidden"
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
      <div className="dark:text-gray-200 flex flex-col items-center justify-center h-full gap-4 px-4 mx-auto duration-100">
        <p className="dark:border-gray-200 sm:my-7 py-3 text-2xl duration-100 border-b-2 border-gray-800">
          Services
        </p>
        <div className="grid sm:grid-cols-2 grid-cols-1 sm:max-w-3xl gap-4">
          <p>I offer responsive and user-friendly web development solutions to create beautiful and functional websites tailored to your specific needs.</p>
          <img src={servicePost} alt="post" />
        </div>
      </div>
    </div>
  );
};

export default Service;
