import React from "react";
import { Col, Row, Image } from "antd";
import "./WorkInfo.css";
const WorkImages = () => {
  const ResumeList = [
    require("../../Assets/Images/resumeImg/resumeapp12.png"),
    require("../../Assets/Images/resumeImg/resumeapp1.png"),
    require("../../Assets/Images/resumeImg/resumeapp3.png"),
    require("../../Assets/Images/resumeImg/resumeapp4.png"),
    require("../../Assets/Images/resumeImg/resumeapp5.png"),
    require("../../Assets/Images/resumeImg/resumeapp6.png"),
    require("../../Assets/Images/resumeImg/resumeapp7.png"),
    require("../../Assets/Images/resumeImg/resumeapp8.png"),
    require("../../Assets/Images/resumeImg/resumeapp9.png"),
    require("../../Assets/Images/resumeImg/resumeapp10.png"),
    require("../../Assets/Images/resumeImg/resumeapp13.png"),
    require("../../Assets/Images/resumeImg/resumeapp14.png"),
    require("../../Assets/Images/resumeImg/resumeapp15.png"),
    require("../../Assets/Images/resumeImg/resumeapp16.png"),
  ];
  const rumbleList = [
    require("../../Assets/Images/rumimgs/img1.png"),
    require("../../Assets/Images/rumimgs/img3.png"),
    require("../../Assets/Images/rumimgs/img4.png"),
    require("../../Assets/Images/rumimgs/img5.png"),
    require("../../Assets/Images/rumimgs/img6.png"),
    require("../../Assets/Images/rumimgs/img7.png"),
    require("../../Assets/Images/rumimgs/img8.png"),
    require("../../Assets/Images/rumimgs/img9.png"),
    require("../../Assets/Images/rumimgs/img10.png"),
    require("../../Assets/Images/rumimgs/img11.png"),
    require("../../Assets/Images/rumimgs/img12.png"),
    require("../../Assets/Images/rumimgs/img13.png"),
    require("../../Assets/Images/rumimgs/img14.png"),
    require("../../Assets/Images/rumimgs/img15.png"),
    require("../../Assets/Images/rumimgs/img16.png"),
    require("../../Assets/Images/rumimgs/img17.png"),
    require("../../Assets/Images/rumimgs/img18.png"),
    require("../../Assets/Images/rumimgs/img19.png"),
    require("../../Assets/Images/rumimgs/img20.png"),
  ];

  return (
    <div className="containerworkImages">
      <Row>
        <Col
          sm={24}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "40vh",
          }}
        >
          <Image.PreviewGroup items={ResumeList}>
            <Image
              style={{
                width: "100%",
                height: "40vh",
                objectFit: "fill",
                borderRadius: 20,
              }}
              src={require("../../Assets/Images/resumeapp.png")}
            />
          </Image.PreviewGroup>
        </Col>
        <Col
          sm={24}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "40vh",
          }}
        >
          Resume APP
        </Col>
      </Row>
      <Row>
        <Col
          sm={24}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "40vh",
          }}
        >
          RumbleOn App
        </Col>
        <Col
          sm={24}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxHeight: "40vh",
          }}
        >
          <Image.PreviewGroup items={rumbleList}>
            <Image
              style={{
                width: "100%",
                height: "40vh",
                objectFit: "fill",
                borderRadius: 20,
              }}
              src={require("../../Assets/Images/project2.png")}
            />
          </Image.PreviewGroup>
        </Col>
      </Row>
    </div>
  );
};

export default WorkImages;
