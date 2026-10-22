import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import Page from "./pages/Page";
import ProjectsPage from "./pages/ProjectsPage";
import "./App.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/page" element={<Page />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  );
}