import React, { useState } from "react";
import "../styles/carrousel.scss";

const Carrousel = ({ pictures }) => {
  const [index, setIndex] = useState(0);

  const nextImage = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prevImage = () => {
    setIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  return (
    <div className="carrousel">
      {pictures.length > 1 ? (
        <div className="carrousel-container">
          <img src={pictures[index]} alt={`Image ${index + 1}`} />
          <div className="controls">
            <button onClick={prevImage}>
              <i className="fa-solid fa-chevron-left fa-6x"></i>
            </button>
            
            <button onClick={nextImage}>
              <i className="fa-solid fa-chevron-right fa-6x"></i>
            </button>
          </div>
          <div className="counter">{index + 1}/{pictures.length}</div>
        </div>
      ) : (
        <img className="picture_alone" src={pictures[0]} alt="Image 1" />
      )}
    </div>
  );
};

export default Carrousel;
