import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

type MenuProps = {
  menu: boolean;
  toggleMenu: () => void;
};

export default function Navbar({ menu, toggleMenu }: MenuProps) {
  const { t } = useTranslation();

  const activeStyles = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    textDecoration: "underline",
    textShadow: "1px 1px 11px var(--primary-color)",
  };

  return (
    <nav
      className={`header-navbar ${menu ? "menu-open" : ""} flex flex-col`}
      aria-label="Navigation menu"
    >
      <ul className="links-list flex flex-col">
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
            onClick={toggleMenu}
          >
            {t("about")}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="resume"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
            onClick={toggleMenu}
          >
            {t("resume")}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="projects"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
            onClick={toggleMenu}
          >
            {t("projects")}
          </NavLink>
        </li>

        <li>
          <NavLink
            to="certificates"
            style={({ isActive }) => (isActive ? activeStyles : undefined)}
            onClick={toggleMenu}
          >
            {t("certificates")}
          </NavLink>
        </li>
      </ul>

      <div aria-live="polite" className="sr-only">
        {menu ? "Menu open" : "Menu closed"}
      </div>
    </nav>
  );
}
