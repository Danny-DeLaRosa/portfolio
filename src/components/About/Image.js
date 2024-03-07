import React, { useState } from "react";
import "/Users/delarosadn/Desktop/code.nosync/portfolio/src/components/Components.css"

const Images = () =>{
  const [images, setImages] = useState([
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/id/237/200/300",
    "https://picsum.photos/200/300?grayscale?random=3",
    "https://picsum.photos/200/300/?blur?random=4",
    "https://picsum.photos/id/870/200/300?grayscale&blur=2random=5",
  ]);

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className="about-images">
      {images.map((image, index) => (
        <img className="about-image" key={index} src={image} alt="random image" />
      ))}
    </div>
  );
}

export default Images;
