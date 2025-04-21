import React from "react";
import { Col, Row, Image } from "antd";
import "./WorkInfo.css";
const WorkMobile = () => {
  return (
    <div className="containerworkImages">
      <Row>
        <Image.PreviewGroup
          items={[
            "https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp",
            "https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp",
            "https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp",
          ]}
        >
          <Image
            className="onlyimg"
            src={require("../../Assets/Images/resumeapp.png")}
          />
        </Image.PreviewGroup>
      </Row>
      Resume APP
    </div>
  );
};

export default WorkMobile;
