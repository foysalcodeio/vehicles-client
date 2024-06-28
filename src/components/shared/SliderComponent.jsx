import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = ({ settings, children }) => {
    return <Slider {...settings}>{children}</Slider>;
};

export default SliderComponent;
