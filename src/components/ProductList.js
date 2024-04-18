import React, { useState } from "react";
import "./ProductList.css";

const ProductList = ({ dataAll, dataHome, dataImpulse }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleAllClick = () => {
    setSelectedCategory("All");
  };

  const handleTakeHomeClick = () => {
    setSelectedCategory("Take Home");
  };

  const handleImpulseClick = () => {
    setSelectedCategory("Impulse");
  };
  return (
    <div className="buttonAndList">
      <div class="buttons-container">
        <div class="buttonAll" onClick={handleAllClick}>
          All
        </div>
        <div class="buttonHome" onClick={handleTakeHomeClick}>
          Take Home
        </div>
        <div class="buttonImpulse" onClick={handleImpulseClick}>
          Impulse
        </div>
      </div>
      <div className="lists">
        {selectedCategory === "All" && (
          <div>
            <h1 className="typehead">All</h1>
            <div className="all-products">
              {dataAll.map((d, index) => (
                <div key={index} className="list-item2">
                  <div className="list-image2">
                    <img src={d.img} alt="123" />
                  </div>
                  <div className="list-content2">
                    <p className="list-title2">{d.name}</p>
                    <p className="list-review2">{d.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategory === "Take Home" && (
          <div>
            <h1 className="typehead">Take Home</h1>
            <div className="all-products">
              {dataHome.map((d, index) => (
                <div key={index} className="list-item2">
                  <div className="list-image2">
                    <img src={d.img} alt="123" />
                  </div>
                  <div className="list-content2">
                    <p className="list-title2">{d.name}</p>
                    <p className="list-review2">{d.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedCategory === "Impulse" && (
          <div>
            <h1 className="typehead">Impulse</h1>
            <div className="all-products">
              {dataImpulse.map((d, index) => (
                <div key={index} className="list-item2">
                  <div className="list-image2">
                    <img src={d.img} alt="123" />
                  </div>
                  <div className="list-content2">
                    <p className="list-title2">{d.name}</p>
                    <p className="list-review2">{d.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
