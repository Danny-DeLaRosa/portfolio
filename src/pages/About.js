import React from "react";
import Images from "../components/About/Image";
import { useNavigate } from "react-router-dom";

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
      <div className="footer-container">
        <div className="footer">
          <h1>Contact Me</h1>
          <p>
            <a href="mailto:<danny.devlarosa@gmail.com>">danny.devlarosa@gmail.com</a>
          </p>
        </div>
        <div className="footer">
          <h1>Follow Me</h1>
          <a
            href="https://www.linkedin.com/in/danny-de-la-rosa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dannydela"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.instagram.com/dannydela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/dannydela/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Youtube
          </a>
        </div>
        <div className="footer">
          <h1>Work experience</h1>
          <a href="http://" target="_blank">Resume</a>
          <a href="http://" target="_blank">History</a>
        </div>
      </div>
    </main>
  );
};

export default About;
