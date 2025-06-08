import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="app-wrapper flex flex-col">
      <Header />
      <main className="main-section">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
