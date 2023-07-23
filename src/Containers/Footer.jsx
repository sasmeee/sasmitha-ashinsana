import React from "react";
import { FaGithub, FaInstagram, FaTelegramPlane, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const igLink = "https://instagram.com/sinhalaya_official_";
  const ytLink = "https://youtube.com/@travamaker";
  const gitLink = "https://github.com/sasmeee";
  const teleLink = "https://t.me/sasmithaaaaa";

  return (
    <div className="w-full mx-auto flex sm:flex-row flex-col-reverse dark:text-gray-200 bg-white/30 dark:bg-slate-900/80 duration-100 px-4 gap-3 py-4 sm:px-10 justify-between items-center text-slate-600">
      <p className="text-center">&copy; {new Date().getFullYear()} Sasmitha Ashinsana. All rights reserved.</p>
      <div className="flex justify-center items-center gap-3 text-lg">
        <a href={igLink}>
          <FaInstagram />
        </a>
        <a href={ytLink}>
          <FaYoutube />
        </a>
        <a href={gitLink}>
          <FaGithub />
        </a>
        <a href={teleLink}>
          <FaTelegramPlane />
        </a>
      </div>
    </div>
  );
};

export default Footer;
