import { HashRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Component/Navigation";
import Home from "./Component/Home";
import About from "./Component/About";
import Skills from "./Component/Skills";
import Project from "./Component/Project";
import Contact from "./Component/Contact";
import "./App.css";   // ✅ Correct way to import CSS

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
