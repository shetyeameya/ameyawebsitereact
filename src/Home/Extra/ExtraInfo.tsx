import React from "react";
import "./Extra.css";
import { Col, Row, Image } from "antd";
import DescriptionModal from "../../Reuse/DescriptionModal";
import { TextData } from "../../Reuse/AllText";
const ExtraInfo = () => {
  return (
    <div className="containerExtra">
      <Row style={{ padding: "1% 2%", width: "100%" }}>
        <Col sm={24} md={8}>
          <div className="imgname">
            <Image
              width={250}
              height={300}
              preview={false}
              style={{
                borderRadius: 20,
                objectFit: "cover",
              }}
              src={require("../../Assets/Images/ameyaTrophy.png")}
            />
            <Row>
              <Col span={24} className="headerfont">
                Passion overcomes odds.
              </Col>
              <Col span={24} className="headerfont">
                It's not over till its over.
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm={24} md={16} className="imgClass">
          <Image
            width={"100%"}
            style={{
              maxHeight: "400px",
              borderRadius: "20px",
              objectFit: "cover",
            }}
            preview={{
              imageRender: () => (
                <div
                  style={{
                    width: "100%",
                    height: "90vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <video
                    style={{
                      width: "100%",
                      height: "90vh",
                    }}
                    muted
                    controls
                    src={require("../../Assets/Images/video.mp4")}
                  />
                </div>
              ),
              toolbarRender: () => null,
            }}
            src={require("../../Assets/Images/keeping.jpg")}
          />
        </Col>
      </Row>
      <Row style={{ color: "black", fontSize: "2vw", padding: "2%" }}>
        <DescriptionModal
          data={TextData[0].Extra.data}
          smallText={TextData[0].Extra.text}
          title="Extracurricular activities"
        />
      </Row>
    </div>
  );
};

export default ExtraInfo;
