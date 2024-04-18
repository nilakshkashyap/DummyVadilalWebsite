import React from "react";
import "./SlidingText2.css";
import { Link, Outlet } from "react-router-dom";

const SlidingText2 = ({ items2 }) => {
  return (
    <div className="logos2">
      <div className="marquee-w2">
        <div class="button-container2">
          <Link to="/product" className="linker2">
            <button class="button12">Take Home</button>
          </Link>
        </div>
        <div className="marquee12">
          {items2.map((item, index) => (
            <div className="ice-name2" key={index}>
              <span>{item.text}</span>
              <img src={item.image} className="centered-image2" alt="" />
            </div>
          ))}
        </div>
        <div className="marquee12 marquee22">
          {items2.map((item, index) => (
            <div className="ice-name2" key={index}>
              <span>{item.text}</span>
              <img src={item.image} className="centered-image2" alt="" />
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SlidingText2;
