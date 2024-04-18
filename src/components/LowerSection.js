import React from "react";
import "./LowerSection.css";

function LowerSection({ gifs, text }) {
  return (
    <div className="lower-section">
      <h1>
        Ice Creams that are <br />
        lip-smackingly delicious!
      </h1>
      <div className="points">
        {gifs.map((gif, index) => (
          <div key={index} className="list-item">
            <img src={gif} alt={`Gif ${index + 1}`} className="gif" />
            <p>{text[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LowerSection;
