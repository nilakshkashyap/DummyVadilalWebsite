import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./NewCarousel.css";
import { ArrowRightCircle, ArrowLeftCircle } from "lucide-react";

const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <ArrowRightCircle className="right-arrow" />
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <ArrowLeftCircle className="left-arrow" />
    </div>
  );
};

function NewCarousel({ data }) {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="new-products">
      <div className="new-kids">
        <h1>The cool,</h1>
        <main>
          <div class="wrapper1 invert1">
            <span data-text="new kids on the block"></span>
            <span data-text="new kids on the block"></span>
          </div>
        </main>
      </div>
      <div className="carousel-container">
        <Slider {...settings} className="error-check">
          {data.map((d, index) => (
            <div key={index} className="carousel-item">
              <div className="new-tag">
                <p className="new">New</p>
              </div>
              <div className="carousel-image">
                <img src={d.img} alt="" />
              </div>

              <div className="carousel-content">
                <p className="carousel-title">{d.name}</p>
                <p className="carousel-review">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default NewCarousel;
