import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { JSX } from "react";
import Layout from "./components/Layout";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Certificates from "./pages/Certificates";

export default function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="resume" element={<Resume />} />
          <Route path="projects" element={<Projects />} />
          <Route path="certificates" element={<Certificates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
