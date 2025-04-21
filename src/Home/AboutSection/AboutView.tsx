import React, { useState, useEffect } from "react";
import "./About.css";
import { Carousel } from "antd";
import AboutInfo from "./AboutInfo";
import { getImages } from "../../Reuse/CommonFunctions";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "red",
};

const AboutView = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className="containerabout">
      <Carousel afterChange={onChange}>
        <div>
          <AboutInfo />
        </div>
      </Carousel>
    </div>
  );
};

export default AboutView;
