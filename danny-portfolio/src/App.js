import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/Navbar.js";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home.js";
import About from "./components/Pages/About.js";
import Projects from "./components/Pages/Projects.js";
import Title from "./components/Title.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Logo from "./components/Logo.js";

const App = () => {
  const [project, useProject] = useState([
    "project 1",
    "project 2",
    "Project 3",
    "Project 4",
  ]);

  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
        <Logo />
        <Title />
        <div className="ProjectBox">
          {project.map((value, index) => {
            return <Body key={index} value={value} />;
          })}
        </div>
        <Footer />
    </div>
  );
};

export default App;
