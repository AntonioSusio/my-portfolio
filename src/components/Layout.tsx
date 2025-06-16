import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoDocumentText } from "react-icons/io5";
import React from "react";

export default function Layout() {
  const [email, setEmail] = React.useState<boolean>(false);
  const [cv, setCv] = React.useState<boolean>(false);

  function showEmail() {
    setEmail((prevState) => !prevState);
  }

  function showCv() {
    setCv((prevState) => !prevState);
  }

  function copyEmail() {
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

            <SiGmail className="social-icon gmail-icon" onClick={showEmail} />

            <IoDocumentText className="social-icon cv-icon" onClick={showCv} />
          </div>

          {email && (
            <p className="email-paragraph" onClick={copyEmail}>
              antoniosusio@gmail.com
            </p>
          )}

          {cv && (
            <a
              href="/Antonio Susio's CV EN.pdf"
              className="cv-paragraph"
              download
            >
              Click here for download my CV
            </a>
          )}
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
