import React from "react";
import Images from "../components/About/Image";
import { useNavigate } from "react-router-dom";
import puppy from "/Users/delarosadn/Desktop/code.nosync/portfolio/src/assets/puppy.jpeg"

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  const images = [
    "https://picsum.photos/id/1/200/300",
    "https://picsum.photos/id/23/200/300",
    "https://picsum.photos/id/34/200/300",
    "https://picsum.photos/id/45/200/300",
    "https://picsum.photos/id/56/200/300",
    "https://picsum.photos/id/67/200/300",
    "https://picsum.photos/id/78/200/300",
    "https://picsum.photos/id/89/200/300",
  ]

  return (
    <main className="about">
      <div className="header">
        <button onClick={handleClick}>Go Back</button>
        <h1>About Danny</h1>
      </div>
      <div className="about-text">
        <p>I'm Danny, a full-stack junior software engineer with an emphasis on backend development.<br/> <br/> I enjoy collaborating on fun projects; if you are interested in working together, please feel free to reach out!<br /><br /> I hail from San Diego, CA, and have a special love for beer, coffee, and food! Let's grab a drink if you're in my neighborhood! </p>
      </div>
      <div className="images">
        {images.map((image, index) => (
          <img key={index} src={image} alt="puppy" />
        ))}
      </div>
    </main>
  );
};

export default About;
