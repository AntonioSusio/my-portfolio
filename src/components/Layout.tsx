import React from "react";
import { Link, Outlet } from "react-router-dom";
import type { JSX } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";

export default function Layout(): JSX.Element {
  const [cv, setCv] = React.useState<boolean>(false);

  function showCv(): void {
    setCv((prevState: boolean): boolean => !prevState);
  }

  function copyEmail(): void {
    navigator.clipboard.writeText("antoniosusio@gmail.com");
    alert("Email copied successfully");
  }

  return (
    <div className="app-wrapper flex flex-col">
      <Header />
      <main className="main-section flex flex-col">
        <div className="info-card flex flex-col">
          <img
            className="card-image"
            src="Antonio.jpg"
            alt="Image of Antonio smiling and looking at the camera"
          />

          <h1 className="about-name">
            <span>Antonio</span> <span>Susio</span>
          </h1>

          <div className="social-container flex">
            <Link to="https://github.com/AntonioSusio" target="_blank">
              <FaGithub className="social-icon github-icon" />
            </Link>

            <Link
              to="https://www.linkedin.com/in/antonio-susio-9b2089226/"
              target="_blank"
            >
              <FaLinkedinIn className="social-icon linkedin-icon" />
            </Link>

            <a href={`mailto:antoniosusio@gmail.com`} onClick={copyEmail}>
              <SiGmail className="social-icon gmail-icon" />
            </a>

            <IoDocumentText className="social-icon cv-icon" onClick={showCv} />
          </div>

          {cv && (
            <a
              href="/Antonio Susio's CV EN.pdf"
              className="cv-paragraph"
              download
            >
              Click here to download my resume
            </a>
          )}
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
