import React from "react";
import "./SlidingText.css";
import { Link, Outlet } from "react-router-dom";

const SlidingText = ({ items }) => {
  return (
    <div className="logos">
      <div className="marquee-w">
        <div className="button-container">
          <Link className="linker1" to="/product">
            <button className="button1">Impulse</button>
          </Link>
        </div>
        <div className="marquee">
          {items.map((item, index) => (
            <div className="ice-name" key={index}>
              <span>{item.text}</span>
              <img src={item.image} className="centered-image" alt="" />
            </div>
          ))}
        </div>

        <div className="marquee marquee2">
          {items.map((item, index) => (
            <div className="ice-name" key={index}>
              <span>{item.text}</span>
              <img src={item.image} className="centered-image" alt="" />
            </div>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default SlidingText;
