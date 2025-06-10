import { NavLink } from "react-router-dom";

type MenuProps = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ menu, setMenu }: MenuProps) {
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
          <NavLink to="">About Me</NavLink>
        </li>
        <li>
          <NavLink to="">Resume</NavLink>
        </li>
        <li>
          <NavLink to="">Projects</NavLink>
        </li>
        <li>
          <NavLink to="">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
