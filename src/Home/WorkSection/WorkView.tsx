import React, { useState, useEffect } from "react";
import "./WorkInfo.css";
import { Carousel } from "antd";
import WorkInfo from "./WorkInfo";
import WorkImages from "./WorkImages";
import WorkMobile from "./WorkMobile";
import WorkTimline from "./WorkTimline";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "red",
};

const WorkView = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className="containerworkmain">
      <Carousel
        afterChange={onChange}
        className="carouselView"
        dotPosition="top"
      >
        <div>
          <WorkInfo />
        </div>
        <div>
          <WorkImages />
        </div>
        <div>
          <WorkTimline />
        </div>
      </Carousel>
      <div className="carouselViewmobile">
        <WorkInfo />
        <WorkImages />
        <WorkTimline />
      </div>
    </div>
  );
};

export default WorkView;
