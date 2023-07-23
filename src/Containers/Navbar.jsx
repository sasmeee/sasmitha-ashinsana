import React, { useEffect, useState } from "react";
import { TbAlignCenter, TbMoonFilled, TbSunFilled } from "react-icons/tb";
import { SiGithub } from "react-icons/si";
import { Link } from "react-scroll";
import NavbarPopup from "./NavbarPopup";
import avatar from "../assest/avatar.png";

const Navbar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("prefer-color-schrmr: dark").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const [showMenu, setShowMenu] = useState(false);

  const handleOnClose = () => setShowMenu(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 4, link: "services" },
    { id: 5, link: "contact" },
  ];
  return (
    <nav className="md:h-20 justify-between md:py-5 md:px-10 backdrop-blur-xl bg-white/30 dark:bg-slate-900/80 dark:text-slate-50 duration-100 fixed z-20 flex items-center w-full h-16 px-6 py-4">
      <img
        src={avatar}
        alt="logo"
        className="md:w-14 w-11 bg-white dark:bg-slate-800 duration-100 rounded-full shadow-lg"
      />

      <ul className="md:flex-row md:gap-8 md:flex flex-col hidden text-lg capitalize cursor-pointer">
        {links.map(({ id, link }) => (
          <li key={id}>
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex justify-center text-slate-600 dark:text-slate-400 items-center relative right-12 sm:right-0 duration-100 gap-3">
        <button onClick={handleThemeSwitch} className="text-xl cursor-pointer">
          {theme === "dark" ? <TbSunFilled /> : <TbMoonFilled />}
        </button>
        <a
          href="https://github.com/sasmeee"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub className="text-xl cursor-pointer" />
        </a>
      </div>

      <TbAlignCenter
        onClick={() => setShowMenu(true)}
        className="text-slate-600 dark:text-slate-400 duration-100 md:hidden right-8 top-5 absolute text-2xl font-light"
      />

      <NavbarPopup onClose={handleOnClose} visible={showMenu} />
    </nav>
  );
};

export default Navbar;
