import React from "react";
import "./ProductDisplay.css";

const ProductDisplay = ({ waahVadilal, mainImage }) => {
  return (
    <div className="top-display-container">
      <div className="top-content">
        <p className="top-display-text">
          Ice Creams that will make your heart say
        </p>
        <img src={waahVadilal} className="top-display-tagline" alt="12" />
      </div>
      <div className="main-image-container">
        <img src={mainImage} className="top-display-Image" alt="12" />
      </div>
      <p className="top-display-description">
        There are so many ways to eat your favourite Vadilal Ice Cream. You can
        have it directly from the Ice Cream tub, cup, cone, or stick, you can
        lick, bite or just allow it to melt in your mouth. Either way, you will
        love our creamy, milky, mouth-watering Ice Creams.
      </p>
    </div>
  );
};

export default ProductDisplay;
