import React from "react";
import { NavLink } from "react-router-dom";

type MenuProps = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ menu, setMenu }: MenuProps) {
  const activeStyles = {
    fontSize: "2rem",
    fontWeight: "bold",
    textDecoration: "underline",
    textShadow: "1px 1px 11px var(--primary-color)",
  };

  function closeMenu() {
    setMenu(false);
  }

  return (
    <nav className={`header-navbar ${menu ? "menu-open" : ""} flex flex-col`}>
      <button className="close-menu-button" onClick={closeMenu}>
        X
      </button>

      <ul className="links-list flex flex-col">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            About Me
          </NavLink>
        </li>

        <li>
          <NavLink
            to="resume"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            Resume
          </NavLink>
        </li>

        <li>
          <NavLink
            to="projects"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            Projects
          </NavLink>
        </li>

        <li>
          <NavLink
            to="certificates"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
          >
            Certificates
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
