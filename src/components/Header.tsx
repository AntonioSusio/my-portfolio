import React from "react";
import Navbar from "./Navbar";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [menu, setMenu] = React.useState<boolean>(false);

  const { i18n } = useTranslation();

  function handleLanguageChange(e: any): void {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  }

  function toggleMenu() {
    setMenu((prevState) => !prevState);
  }

  return (
    <header className="header flex flex-col">
      <div className="header-inner-container flex">
        <div className="header-left-container">
          <h1 className="heading-name flex">Antonio Susio</h1>
          <h2 className="heading-role">Frontend developer</h2>
        </div>

        <div className="header-right-div flex">
          <select
            className="select-language-menu"
            onChange={handleLanguageChange}
          >
            <option value="en">English</option>
            <option value="it">Italian</option>
          </select>

          <button
            onClick={toggleMenu}
            className="open-menu-button"
            aria-label="Open navigation menu"
          >
            <span
              className={`hamburger-menu-bar ${
                menu ? "hamburger-menu-open-bar" : ""
              }`}
            ></span>
            <span
              className={`hamburger-menu-bar ${
                menu ? "hamburger-menu-open-bar" : ""
              }`}
            ></span>
            <span
              className={`hamburger-menu-bar ${
                menu ? "hamburger-menu-open-bar" : ""
              }`}
            ></span>
          </button>

          <Navbar menu={menu} toggleMenu={toggleMenu} />
        </div>
      </div>

      <div className="social-container flex">
        <a
          href="https://github.com/AntonioSusio"
          target="_blank"
          aria-label="GitHub"
        >
          <FaGithub className="social-icon github-icon" />
        </a>

        <a
          href="https://www.linkedin.com/in/antonio-susio-9b2089226/"
          target="_blank"
          aria-label="LinkedIn"
        >
          <FaLinkedinIn className="social-icon linkedin-icon" />
        </a>

        <a href={`mailto:antoniosusio@gmail.com`} aria-label="Send Email">
          <SiGmail className="social-icon gmail-icon" />
        </a>

        <a
          href="/Antonio Susio's CV EN.pdf"
          download
          aria-label="Download Resume"
        >
          <IoDocumentText className="social-icon cv-icon" />
        </a>
      </div>
    </header>
  );
}

{
}
