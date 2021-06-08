import React from "react";
import Carousel from "react-bootstrap/Carousel";
import style from "./Carousel.module.css";
import tiki1 from "../../static/image/slide1.jpeg";
import tiki2 from "../../static/image/slide2.jpeg";

const CarouselBox = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className={style.crsImg} src={tiki1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className={style.crsImg} src={tiki2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBox;
