import React from "react";

const ProgressBar = ({ name, value }) => {
  const progress = value;
  return (
    <div className="sm:mb-4 w-full mb-2">
      <div className="flex items-center justify-between">
        <span>{name}</span>
        <span>{`${progress}%`}</span>
      </div>
      <div className="w-full h-2 mt-2 overflow-hidden bg-gray-200 rounded-lg">
        <div
          className="h-full bg-blue-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const languages = [
    { id: 1, name: "HTML", value: 95 },
    { id: 2, name: "CSS", value: 95 },
    { id: 3, name: "JavaScript", value: 80 },
    { id: 4, name: "React", value: 80 },
    { id: 5, name: "Tailwind", value: 80 },
    { id: 6, name: "Node JS", value: 75 },
    { id: 7, name: "Express JS", value: 60 },
    { id: 8, name: "Mongo DB", value: 45 },
    { id: 9, name: "Flutter", value: 65 },
  ];

  return (
    <div className="w-full h-full mx-auto">
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
          Skills
        </p>
        <div className="sm:grid-cols-2 grid w-full max-w-screen-lg grid-cols-1 gap-4 px-4 mx-auto">
          {languages.map(({ id, name, value }) => (
            <ProgressBar key={id} name={name} value={value} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
