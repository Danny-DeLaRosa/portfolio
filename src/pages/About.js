import React from "react";
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
        <p>I'm Danny, a full-stack junior software engineer with an emphasis on backend development.<br/> <br/> I enjoy collaborating on fun projects; if you are interested in working together, please feel free to reach out! I hail from San Diego, CA, and have a special love for beer, coffee, and food! Let's grab a drink if you're in my neighborhood! </p>
      </div>
    </main>
  );
};

export default About;
