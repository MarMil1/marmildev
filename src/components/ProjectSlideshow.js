import React, { useState } from "react";
import "../styles/projectSlideshow.scss";

export const ProjectSlideshow = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = (e) => {
    e.preventDefault();

    let index = activeIndex;
    let slidesLength = Object.keys(props.media).length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    setActiveIndex(index);
  };

  const goToNextSlide = (e) => {
    e.preventDefault();

    let index = activeIndex;
    let slidesLength = Object.keys(props.media).length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    setActiveIndex(index);
  };

  return (
    <div className="carousel">
      <CarouselLeftArrow onClick={(e) => goToPrevSlide(e)} />

      <ul className="carousel__slides">
        <div className="carousel__slides__browser">
          <i class="fa-solid fa-ellipsis fa-xl"></i>
          <div className="computer-header-url-box"></div>
          <div className="computer-header-avatar"></div>
        </div>
        {Object.values(props.media).map((slide, index) => (
          <CarouselSlide
            key={index}
            index={index}
            activeIndex={activeIndex}
            slide={slide}
            name={props.name}
            sourceURL={props.sourceURL}
          />
        ))}
      </ul>

      <CarouselRightArrow onClick={(e) => goToNextSlide(e)} />

      <ul className="carousel__indicators">
        {Object.values(props.media).map((_, index) => (
          <CarouselIndicator
            key={index}
            index={index}
            activeIndex={activeIndex}
            isActive={activeIndex === index}
            onClick={(e) => goToSlide(index)}
          />
        ))}
      </ul>
    </div>
  );
};

const CarouselLeftArrow = (props) => {
  return (
    <div
      href="#"
      className="carousel__arrow carousel__arrow--left"
      onClick={props.onClick}
    >
      <span className="fa fa-2x fa-angle-left" />
    </div>
  );
};

const CarouselRightArrow = (props) => {
  return (
    <div
      href="#"
      className="carousel__arrow carousel__arrow--right"
      onClick={props.onClick}
    >
      <span className="fa fa-2x fa-angle-right" />
    </div>
  );
};

const CarouselIndicator = (props) => {
  return (
    <li>
      <div
        className={
          props.index === props.activeIndex
            ? "carousel__indicator carousel__indicator--active"
            : "carousel__indicator"
        }
        onClick={props.onClick}
      ></div>
    </li>
  );
};

const CarouselSlide = (props) => {
  return (
    <>
      {props.slide.split(".").slice(-1).join() === "gif" ? (
        <li
          className={
            props.index === props.activeIndex
              ? "carousel__slide carousel__slide--active"
              : "carousel__slide"
          }
          style={{
            background: `url(${props.slide}) no-repeat`,
          }}
        >
          <div className="carousel-slide-gif-tag">GIF</div>
        </li>
      ) : (
        <li
          className={
            props.index === props.activeIndex
              ? "carousel__slide carousel__slide--active"
              : "carousel__slide"
          }
          style={{
            background: `url(${props.slide}) no-repeat`,
          }}
        ></li>
      )}
    </>
  );
};
