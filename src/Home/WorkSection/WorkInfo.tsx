import React from "react";
import { Col, Row, Image } from "antd";
import DescriptionModal from "../../Reuse/DescriptionModal";
import { TextData } from "../../Reuse/AllText";
import { useDataState } from "../../Context/DataContext";
import ScrollingKeywords from "../../Reuse/ScrollingKeywords";
import "./WorkInfo.css";
import { skillsList } from "../../Reuse/AllText";

const WorkInfo = () => {
  return (
    <div className="containerwork">
      <Row style={{ color: "white" }}>
        <ScrollingKeywords
          keywords={skillsList}
          findVal="Languages"
          objID={true}
        />
      </Row>
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
              src={require("../../Assets/Images/cartoongrad.png")}
            />
            <Row style={{}}>
              <Col span={24} className="headerfont">
                MS. Electrical Engineering
              </Col>
              <Col span={24} className="headerfont">
                Southern Methodist University
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
            overflowY: "scroll",
          }}
        >
          <Row style={{ color: "black" }}>
            {skillsList &&
              skillsList
                .filter(
                  (val: any) =>
                    val.title !== "Languages" && val.title !== "Libraries"
                )
                .map((skills: any) => {
                  return (
                    <Row style={{ width: "100%", marginTop: "1%" }}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          textAlign: "left",
                          width: "100%",
                        }}
                      >
                        <div className="skillsTitle">{skills.title}</div>
                        <div className="skillsdesc">{skills.description}</div>
                      </div>
                    </Row>
                  );
                })}
          </Row>
        </Col>
      </Row>
      <Row style={{ padding: "1% 2%" }}>
        <DescriptionModal
          data={TextData[0].Experience.data}
          smallText={TextData[0].Experience.text}
          title="Work Experience"
        />
      </Row>
    </div>
  );
};

export default WorkInfo;
