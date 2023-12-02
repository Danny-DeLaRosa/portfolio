import React from "react";
import "./Home.css";
import logo from "./logo.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <h2 className="name">Danny De La Rosa</h2>
          <h2 className="SubTitle">Back-End Focused Full Stack Developer</h2>
          <h2 className="SubTitle">Fill in latest project here</h2>
        </div>
      </div>
      <div className="about">
        <h1 className="font">About</h1>
        <p> This is my about me</p>
      </div>
      <div className="project">
      <h1 className="font item1">Projects</h1>
      <p className="item2">Project1</p> 
      <p>Treasure Hunt</p>
      <p></p>
      <p>projects2</p>
      <p>This is a board game where you try to find a hidden treasure. dont lose</p>
      </div>
      <div className="ProjectBox">projects</div>
      <div>
        <h1>Work Experience</h1>
        <ul>
          <li>USMC</li>
          <li>Realtor</li>
          <li>Full Stack Dev</li>
        </ul>
      </div>
      <div>
        <h1 className="Title">Contact</h1>
        <h2 className="Contact">619-394-8908 | danny.devlarosa@gmail.com</h2>
      </div>
    </>
  );
};

export default Home;
