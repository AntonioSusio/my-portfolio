import React from "react";
import { Outlet } from "react-router-dom";
import type { JSX } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(): JSX.Element {
  return (
    <div className="app-wrapper flex flex-col">
      <Header />
      <main className="main-section flex flex-col">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
