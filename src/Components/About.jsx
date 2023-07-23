import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen mx-auto">
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
      <div className="dark:text-gray-200 sm:max-w-3xl flex flex-col items-center justify-center h-full max-w-md gap-4 px-4 mx-auto duration-100">
        <p className="dark:border-gray-200 sm:my-7 py-3 text-2xl duration-100 border-b-2 border-gray-800">
          About
        </p>
        <p className="sm:text-base text-lg">
          Welcome to my portfolio! I am a Frontend Web Developer who loves
          creating beautiful and easy-to-use websites. I work hard to make sure
          my projects are top-notch. My favorite tools are ReactJS and Tailwind,
          which help me build interactive and stylish websites. I am also
          skilled in UI/UX design, making sure that the websites I create look
          amazing and provide the best user experience. If you need someone to
          design your dream website, don't hesitate to contact me. Let's work
          together to bring your ideas to life!
        </p>
      </div>
    </div>
  );
};

export default About;
