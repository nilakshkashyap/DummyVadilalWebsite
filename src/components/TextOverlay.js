import React from "react";
import "../App.css";

const TextOverlay = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: "23%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          fontFamily: "MainFont3",
        }}
      >
        Moments of Delight for Everyone
      </h1>
      <h2 style={{ fontSize: "1.7rem" }}>
        Tasteful experiences that make you go Waah!
      </h2>
    </div>
  );
};

export default TextOverlay;
