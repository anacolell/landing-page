import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { slides } from "./CarouselData";

export default function Carousel() {
  const [currentImg, setCurrentImg] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrentImg(currentImg === length - 1 ? 0 : currentImg + 1);
  };

  const prevSlide = () => {
    setCurrentImg(currentImg === 0 ? length - 1 : currentImg - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="carousel">
      <BsArrowLeft className="carousel-arrow left-arrow" onClick={prevSlide} />
      <BsArrowRight
        className="carousel-arrow right-arrow"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            key={slide.id}
            className={index === currentImg ? "slide active" : "slide"}
          >
            {index === currentImg && (
              <div
                className="carousel-inner"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              >
                <p className="carousel-text">"{slide.text}"</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
