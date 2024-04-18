import React, { useState, useEffect } from "react";
import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
import "./Carousel.css";

type ImageSliderProps = {
  images: {
    url: string;
    alt: string;
  }[];
};

export function Carousel({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      showNextImage();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [imageIndex, images.length]);

  function showNextImage() {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function showPrevImage() {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }

  return (
    <section
      aria-label="Image Slider"
      style={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <a href="#after-image-slider-controls" className="skip-link">
        Skip Image Slider Controls
      </a>
      <div
        style={{
          width: `${images.length * 100}%`,
          height: "100%",
          display: "flex",
          transform: `translateX(-${imageIndex * (100 / images.length)}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {images.map(({ url, alt }) => (
          <img
            key={url}
            src={url}
            alt={alt}
            style={{ width: `${100 / images.length}%` }}
          />
        ))}
      </div>
      <button
        onClick={showPrevImage}
        className="img-slider-btn"
        style={{ left: 0 }}
        aria-label="View Previous Image"
      >
        <ArrowBigLeft aria-hidden />
      </button>
      <button
        onClick={showNextImage}
        className="img-slider-btn"
        style={{ right: 0 }}
        aria-label="View Next Image"
      >
        <ArrowBigRight aria-hidden />
      </button>
      <div
        style={{
          position: "absolute",
          bottom: ".5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: ".25rem",
        }}
      >
        {images.map((_, index) => (
          <button
            key={index}
            className="img-slider-dot-btn"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <CircleDot aria-hidden />
            ) : (
              <Circle aria-hidden />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
