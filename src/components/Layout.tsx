import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Layout() {
  return (
    <div className="app-wrapper flex flex-col">
      <Header />
      <main className="main-section flex flex-col">
        <div className="card-container flex flex-col">
          <img
            className="card-image"
            src="Antonio.jpg"
            alt="Image of Antonio smiling and looking at the camera"
          />

          <h1 className="about-name">
            <span>Antonio</span> <span>Susio</span>
          </h1>

          <div className="social-container flex">
            <FaGithub className="social-icon" />
            <FaLinkedinIn className="social-icon" />
            <SiGmail className="social-icon" />
          </div>
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
