import React from "react";
import { TbX } from "react-icons/tb";
import { Link } from "react-scroll";
import avatar from "../assest/avatar.png";

const NavbarPopup = ({ visible, onClose }) => {
  const handleOnClose = (e) => {
    if (e.target.id === "menuContainer") onClose();
  };
  if (!visible) return null;

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "services" },
    { id: 5, link: "contact" },
  ];

  return (
    <div
      id="menuContainer"
      onClick={handleOnClose}
      className="backdrop-blur-sm bg-opacity-70 fixed inset-0 flex items-center justify-center w-full h-screen bg-gray-500"
    >
      <div className="-top-16 dark:bg-slate-800 relative flex flex-col justify-center w-2/3 gap-5 px-6 py-5 duration-100 bg-white rounded-lg">
        <div className="flex items-center justify-between">
          <img
            src={avatar}
            alt="logo"
            className="md:w-14 w-11 dark:bg-slate-700 duration-100 bg-white rounded-full shadow-lg"
          />
          <TbX className="text-lg" onClick={onClose} />
        </div>
        <ul className="text-md flex flex-col gap-3 capitalize">
          {links.map(({ id, link }) => (
            <li key={id}>
              <Link to={link} smooth duration={500} onClick={onClose}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarPopup;
