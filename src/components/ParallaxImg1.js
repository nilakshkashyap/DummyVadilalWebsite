import React from "react";
import "./ParallaxImg1.css";
import { Parallax } from "react-parallax";

function ParallaxImg1({ image1, image2, logo1, logo2 }) {
  return (
    <div className="image-container">
      <Parallax strength={400} bgImage={image1}>
        <div className="about-cafe1">
          <div className="text-item1">
            <img className="item-logo1" src={logo1} alt="12" />
            <h1 className="shop-head">
              Its Waah Vadilal!
              <div />
              Now For Ever
            </h1>
            <p className="shop-text">
              Fun-filled ambience, 60+ one-of-a-kind drool-worthy dishes, and
              moments that last forever. Now that's happiness unlimited!
            </p>
          </div>
        </div>
      </Parallax>
      <Parallax strength={400} bgImage={image2}>
        <div className="about-cafe2">
          <div className="text-item2">
            <img className="item-logo2" src={logo2} alt="13" />
            <h1 className="shop-head">Scoop Up Sweet Delights</h1>
            <p className="shop-text">
              Vadilal’s Scoopshop Cafe in an all-new avatar! Where joyfulness
              comes in all forms - From Ice Cream Shakes, Freak Shakes, to even
              Ice Cream Sizzlers, you name it, and we have it.
            </p>
          </div>
        </div>
      </Parallax>
    </div>
  );
}

export default ParallaxImg1;
