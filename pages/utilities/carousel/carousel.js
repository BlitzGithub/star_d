import React, { Component } from "react";
import "../../../styles/componentStyles/planets/Planets.module.css";
import Slider from "react-slick";
import planets from "../planets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  console.log(planets[0].description);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <h3>{planets[0].description}</h3>
        </div>
        <div>
          <h3>{planets[1].description}</h3>
        </div>
        <div>
          <h3>{planets[2].description}</h3>
        </div>
        <div>
          <h3>{planets[3].description}</h3>
        </div>
        <div>
          <h3>{planets[4].description}</h3>
        </div>
        <div>
          <h3>{planets[5].description}</h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
