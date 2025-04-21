import React from "react";
import "./Extra.css";
import { Carousel } from "antd";
import DescriptionModal from "../../Reuse/DescriptionModal";
import ExtraInfo from "./ExtraInfo";
const ExtraView = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className="containerExtra">
      <Carousel afterChange={onChange}>
        <div>
          <ExtraInfo />
        </div>
      </Carousel>
    </div>
  );
};

export default ExtraView;
