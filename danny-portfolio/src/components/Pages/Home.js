import React from "react";
import "./Home.css";
import logo from "./logo.png";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
    
      <div className="container">
        <img src={logo} alt="logo" className="logo" />
        <div>
          <h2 className="name">Danny De La Rosa</h2>
          <h2 className="SubTitle">Back-End Focused Full Stack Developer</h2>
          <a className="SubTitle">Fill in latest project here</a>
        </div>
      </div>

      <div className="about">
        <h1 className="font">About</h1>
        <p> This is my about me</p>
      </div>
      
      <div className="project">
      <Link to="/Projects" className="font item1 a">
        Projects
      </Link>
        <p>month 2023</p>
        <a href="https://github.com/Danny-DeLaRosa" target="blank" className="a">Treasure Hunt</a>
        <p></p>
        <p></p>
        <p>
          This is a board game where you try to find a hidden treasure. dont
          lose
        </p>
        <p></p>
        <p></p>
        <p>React</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p>month 2024</p>
        <a href="" className="a">Project 2</a>
        <p></p>
        <p></p>
        <p>Project 2 description</p>
        <p></p>
      </div>

      <div className="work">
        <a href="https://www.linkedin.com/in/dannydlr" target="blank" className="font item1 a">Work Experience</a>
        <p>2015 - 2020</p>
        <a href="" className="a">USMC</a>
        <p></p>
        <p></p>
        <p>
          This is a board game where you try to find a hidden treasure. dont
          lose
        </p>
        <p></p>
        <p></p>
        <p>React</p>
        <p></p>
        <p></p>
        <p></p>
        <p></p>
        <p>month 2024</p>
        <p>Project 2</p>
        <p></p>
        <p></p>
        <p>Project 2 description</p>
        <p></p>
      </div>
      <div>
        <h1 className="Title">Contact</h1>
        <h2 className="Contact">619-394-8908 | danny.devlarosa@gmail.com</h2>
      </div>
    </>
  );
};

export default Home;
