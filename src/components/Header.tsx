import React from "react";
import Navbar from "./Navbar";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";

export default function Header() {
  const [menu, setMenu] = React.useState<boolean>(false);

  function openMenu() {
    setMenu(true);
  }

  return (
    <header className="header flex">
      <div className="header-left-container">
        <h1 className="heading-name flex">Antonio Susio</h1>
        <h2 className="heading-role">Frontend developer</h2>
        <div className="social-container flex">
          <a href="https://github.com/AntonioSusio" target="_blank">
            <FaGithub className="social-icon github-icon" />
          </a>

          <a
            href="https://www.linkedin.com/in/antonio-susio-9b2089226/"
            target="_blank"
          >
            <FaLinkedinIn className="social-icon linkedin-icon" />
          </a>

          <a href={`mailto:antoniosusio@gmail.com`}>
            <SiGmail className="social-icon gmail-icon" />
          </a>

          <IoDocumentText className="social-icon cv-icon" />
        </div>
      </div>

      <Navbar menu={menu} setMenu={setMenu} />

      <button onClick={openMenu} className="open-menu-button flex flex-col">
        <span className="hamburger-menu-string-1"></span>
        <span className="hamburger-menu-string-2"></span>
        <span className="hamburger-menu-string-3"></span>
      </button>
    </header>
  );
}
