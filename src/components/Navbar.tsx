type MenuProps = {
  menu: boolean;
  setMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ menu, setMenu }: MenuProps) {
  function closeMenu() {
    setMenu(false);
  }
  return (
    <nav className={`header-navbar ${menu ? "menu-open" : ""}`}>
      <button onClick={closeMenu}>X</button>
      <p>test</p>
    </nav>
  );
}
