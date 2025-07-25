import React from "react";
import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { FaRegCircle, FaCircle } from "react-icons/fa";

interface CarouselProps {
  certificates: React.ReactNode[];
  slideIndex: number;
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Carousel({
  certificates,
  slideIndex,
  setSlideIndex,
}: CarouselProps) {
  function moveSlide(event: React.MouseEvent<HTMLButtonElement>) {
    switch (event.currentTarget.id) {
      case "next-slide-button":
        setSlideIndex((index) => {
          if (index === certificates.length - 1) {
            return 0;
          } else {
            return index + 1;
          }
        });
        break;

      case "previous-slide-button":
        setSlideIndex((index) => {
          if (index === 0) {
            return certificates.length - 1;
          } else {
            return index - 1;
          }
        });
        break;
    }
  }

  const sliderButtonEl = certificates.map((_, index) => (
    <button
      key={index}
      onClick={() => setSlideIndex(index)}
      className={
        index === slideIndex ? "current-slide-circle" : "slider-circle-button"
      }
    >
      {index === slideIndex ? <FaCircle /> : <FaRegCircle />}
    </button>
  ));

  return (
    <div className="carousel-container flex">
      <button
        id="previous-slide-button"
        onClick={(event) => moveSlide(event)}
        className="carousel-button carousel-left-button"
      >
        <IoMdArrowDropleft />
      </button>

      {certificates}

      <button
        id="next-slide-button"
        onClick={(event) => moveSlide(event)}
        className="carousel-button carousel-right-button"
      >
        <IoMdArrowDropright />
      </button>

      <div className="slider-buttons-container flex">{sliderButtonEl}</div>
    </div>
  );
}
