import React, { useState } from "react";
import Slider from "react-slick";
import Modal from "react-modal";
import ReactPlayer from "react-player";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VideoCarousel.css";
import { ArrowRightCircle, ArrowLeftCircle } from "lucide-react";

const CustomNextArrow2 = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow2 next-arrow2" onClick={onClick}>
      <ArrowRightCircle className="right-arrow2" />
    </div>
  );
};

const CustomPrevArrow2 = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow2 prev-arrow2" onClick={onClick}>
      <ArrowLeftCircle className="left-arrow2" />
    </div>
  );
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "80%",
    height: "80%",
  },
  overlay: {
    zIndex: 1000,
  },
};

function VideoCarousel({ data2 }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);

  const openModal = (videoUrl) => {
    setCurrentVideo(videoUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setCurrentVideo(null);
    setModalIsOpen(false);
  };

  const settings2 = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow2 />,
    prevArrow: <CustomPrevArrow2 />,
  };

  return (
    <div className="new-products2">
      <div className="new-kids2">
        <main>
          <div class="wrapper12 invert12">
            <span data-text="Your all-time favorites"></span>
            <span data-text="Your all-time favorites"></span>
          </div>
        </main>
      </div>
      <div className="carousel-container2">
        <Slider {...settings2} className="error-check2">
          {data2.map((d, index) => (
            <div
              key={index}
              className="carousel-item2"
              onClick={() => openModal(d.video)}
            >
              <div className="carousel-image2">
                <img src={d.img} alt="" />
                <img className="play-button" src={d.player} alt="Play Button" />
              </div>
              <div className="carousel-content2">
                <p className="carousel-title2">{d.name}</p>
                <p className="carousel-review2">{d.review}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <ReactPlayer
          url={currentVideo}
          playing
          controls
          width="100%"
          height="100%"
        />
      </Modal>
    </div>
  );
}

export default VideoCarousel;
