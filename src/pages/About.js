import React from "react";
import Images from "../components/About/Image";
import { useNavigate } from "react-router-dom";
import Card from "/Users/delarosadn/Desktop/code.nosync/portfolio/src/components/About/Card.js";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <main className="about">
      <div className="header">
        <button onClick={handleClick}>Go Back</button>
        <h1>About Danny</h1>
      </div>
      <div className="about-text">
        <p>
          I'm Danny, a full-stack junior software engineer with an emphasis on
          backend development. My immediate goals are to help a lucky company
          reach their potential through software development.
          <br /> <br /> A bigger goal of mine is creating my own indie game or
          contributing to the next big title in the gaming industry. Video games
          have always been a big part of my life so I would love to give what i
          can to the gaming community.
          <br />
          <br /> I enjoy collaborating on fun projects; if you are interested in
          working together, please feel free to reach out and connect!{" "}
        </p>
      </div>
      <Images />
      <div className="about-2">
        <h1>A little more about me</h1>
        <p>
          I hail from San Diego, CA, I am absolutely absessed about nature! I
          love hiking, camping, boondocking in our RV, and the beach!! My home
          will always be San Diego but exploring new cities and contries is my
          passion. You can likely catch me at a local brewery or pizza shop.
          Some say beer is the answer to life's problems, but I'm still trying
          to figure out the question!"
        </p>
      </div>
      <div className="card container">
        <Card />
      </div>
    </main>
  );
};

export default About;
