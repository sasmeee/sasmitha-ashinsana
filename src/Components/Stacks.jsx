import React from "react";
import { SiExpress, SiFlutter, SiTailwindcss } from "react-icons/si";
import {
  DiCss3,
  DiHtml5,
  DiJavascript,
  DiMongodb,
  DiNodejs,
  DiReact,
} from "react-icons/di";

const Stacks = () => {
  const techStacks = [
    { id: 1, name: "HTML", icon: <DiHtml5 color="#E34F26" size={28} /> },
    { id: 2, name: "CSS", icon: <DiCss3 color="#1572B6" size={28} /> },
    { id: 3, name: "JavaScript", icon: <DiJavascript color="#ffe733" size={28} /> },
    { id: 4, name: "Node JS", icon: <DiNodejs color="#339933" size={55} /> },
    { id: 5, name: "React JS", icon: <DiReact color="#61DAFB" size={28} /> },
    { id: 6, name: "Express JS", icon: <SiExpress color="#000000" size={28} /> },
    { id: 7, name: "Mongo DB", icon: <DiMongodb color="#47A248" size={28} /> },
    { id: 8, name: "Tailwind CSS", icon: <SiTailwindcss color="#38B2AC" size={28} /> },
    { id: 9, name: "Flutter", icon: <SiFlutter color="#078fff" size={25} /> },
  ];

  return (
    <div className="sm:mt-28 mt-7 w-full h-full mx-auto">
      <div className="dark:text-gray-200 flex flex-col items-center justify-center h-full gap-4 px-4 mx-auto duration-100">
        <p className="dark:border-gray-200 sm:my-7 py-3 text-2xl duration-100 border-b-2 border-gray-800">
          Tech Stacks
        </p>
        <div className="sm:grid-cols-4 sm:gap-5 grid grid-cols-2 gap-3">
          {techStacks.map(({ id, name, icon }) => (
            <div
              key={id}
              className="dark:bg-gray-800 dark:border-gray-700 duration-100 bg-white border border-gray-200 rounded-lg shadow-lg"
            >
              <div className="dark:bg-slate-700 py-auto flex items-center justify-center h-12 px-2 duration-100 bg-gray-200">
                {icon}
              </div>
              <p className="px-2 py-2 text-center">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stacks;
