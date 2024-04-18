import React, { useEffect } from "react";
import "./ParallaxCom.css";
const ParallaxCom = ({ Par1, Par2, Par3, Par4, Par5, Par6, Par7, Par8 }) => {
  useEffect(() => {
    const parallax = (e) => {
      document.querySelectorAll(".object").forEach(function (move) {
        var moving_value = move.getAttribute("data-value");
        var x = (e.clientX * moving_value) / 250;
        var y = (e.clientY * moving_value) / 250;

        move.style.transform = "translate(" + x + "px, " + y + "px)";
      });
    };

    document.addEventListener("mousemove", parallax);

    return () => {
      document.removeEventListener("mousemove", parallax);
    };
  }, []);

  return (
    <div className="container">
      <h2 className="object" data-value="3">
        Unlock a world
        <br />
        full of indulgence
      </h2>
      <img src={Par1} className="object" data-value="-5" alt="" />
      <img src={Par2} className="object" data-value="6" alt="" />
      <img src={Par3} className="object" data-value="4" alt="" />
      <img src={Par4} className="object" data-value="-6" alt="" />
      <img src={Par5} className="object" data-value="8" alt="" />
      <img src={Par6} className="object" data-value="-4" alt="" />
      <img src={Par7} className="object" data-value="5" alt="" />
      <img src={Par8} className="object" data-value="-9" alt="" />
    </div>
  );
};

export default ParallaxCom;
