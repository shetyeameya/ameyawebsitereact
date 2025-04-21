import React from "react";
import "./About.css";
import { Col, Row, Image } from "antd";
import DescriptionModal from "../../Reuse/DescriptionModal";
import { TextData } from "../../Reuse/AllText";
import { useDataState } from "../../Context/DataContext";
import ScrollingKeywords from "../../Reuse/ScrollingKeywords";
import { skillsList } from "../../Reuse/AllText";
const AboutInfo = () => {
  const keywords = ["React", "JavaScript", "TypeScript", "CSS", "HTML"];
  return (
    <div className="containerabout">
      <Row gutter={[8, 8]} style={{ padding: "1% 2%", width: "100%" }}>
        <Col sm={24} md={12}>
          <div className="imgname">
            <Image
              width={250}
              height={300}
              preview={false}
              style={{
                borderRadius: 20,
                objectFit: "cover",
              }}
              src={require("../../Assets/Images/ameyahome.png")}
            />
            <Row>
              <Col span={24} className="headerfont">
                Ameya Ravindra Shetye
              </Col>
              <Col span={24} className="headerfont">
                Application Developer
              </Col>
            </Row>
          </div>
        </Col>
        <Col
          sm={24}
          md={12}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0 2%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 20,
          }}
        >
          <Row style={{ color: "black", fontSize: "2vw" }}>
            "Life is 10% what happens to us and 90% how we react to it."
          </Row>
          <Row
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
              color: "black",
              fontSize: "3vw",
            }}
          >
            — Charles R. Swindoll
          </Row>
        </Col>
      </Row>
      <Row style={{ padding: "1% 2%" }}>
        <DescriptionModal
          data={TextData[0].About.data}
          smallText={TextData[0].About.text}
          title="About Me"
        />
      </Row>
      <Row>
        <ScrollingKeywords
          keywords={skillsList}
          findVal="Libraries"
          objID={true}
        />
      </Row>
    </div>
  );
};

export default AboutInfo;
