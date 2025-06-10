import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  const [menu, setMenu] = React.useState<boolean>(false);

  function openMenu() {
    setMenu(true);
  }

  return (
    <header className="header flex">
      <div className="left-container">
        <h1 className="heading-name flex">Antonio Susio</h1>
        <h2 className="heading-role">Frontend developer</h2>
      </div>

      <button onClick={openMenu} className="open-menu-button flex flex-col">
        <span className="hamburger-menu-string-1"></span>
        <span className="hamburger-menu-string-2"></span>
        <span className="hamburger-menu-string-3"></span>
      </button>

      <Navbar menu={menu} setMenu={setMenu} />
    </header>
  );
}
