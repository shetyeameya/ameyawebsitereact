import React, { useState } from "react";
import "./WorkInfo.css";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Timeline, Col, Row, Button } from "antd";
import { title } from "process";
import { tintColor } from "../../Constants/colors";
import { mainTimeline, timelineData } from "../../Reuse/AllText";

const WorkTimline = () => {
  const [activetxt, setactiveTxt] = useState<number | null>(null);
  const [data, setData] = useState<any>(timelineData[0].desc);

  const renderCusButton = (data: mainTimeline, num: number) => {
    console.log("num:::", activetxt, num);
    const buttonLines = data.title
      .split("|")
      .map((line, index, array) =>
        index === array.length - 1
          ? line
          : [line, <div style={{ height: "0px" }} key={index} />]
      );
    return (
      <div key={num}>
        <Button
          onClick={() => {
            setactiveTxt(num);
            setData(timelineData[num].desc);
          }}
          type="text"
          style={{
            color: "black",
            flexDirection: "column",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            whiteSpace: "normal",
            wordBreak: "break-word",
            height: "auto",
            width: "100%",
            borderBottom: `${
              activetxt === num ? `2px solid ${tintColor}` : "none"
            }`,
          }}
          className="timeTitle"
        >
          {/* {buttonLines} */}
          {data.title}
        </Button>
      </div>
    );
  };

  return (
    <div className="containerworktime">
      {activetxt === null ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            padding: "2%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            borderRadius: 20,
            flex: 1,
            overflowY: "scroll",
            minHeight: "70vh",
            height: "fit-content",
            color: "black",
            overflow: "hidden",
          }}
        >
          <Timeline
            style={{ color: "black" }}
            items={[
              {
                dot: <ClockCircleOutlined className="timeline-clock-icon" />,
                color: "red",
                children: renderCusButton(timelineData[0], 0),
              },
              {
                dot: <ClockCircleOutlined className="timeline-clock-icon" />,
                color: "red",
                children: renderCusButton(timelineData[1], 1),
              },
              {
                dot: <ClockCircleOutlined className="timeline-clock-icon" />,
                color: "red",
                children: renderCusButton(timelineData[2], 2),
              },
              {
                dot: <ClockCircleOutlined className="timeline-clock-icon" />,
                color: "red",
                children: renderCusButton(timelineData[3], 3),
              },
              {
                dot: <ClockCircleOutlined className="timeline-clock-icon" />,
                color: "red",
                children: renderCusButton(timelineData[4], 4),
              },
              {
                dot: <ClockCircleOutlined className="timeline-clock-icon" />,
                color: "red",
                children: renderCusButton(timelineData[5], 5),
              },
            ]}
          />
        </div>
      ) : (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => {
              setactiveTxt(null);
            }}
            type="primary"
          >
            Back
          </Button>
          {typeof data === "string" ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#fff",
                color: "black",
                borderRadius: "20px",
                padding: "15% 5%",
              }}
            >
              <div className="skillsTitle">{timelineData[activetxt].title}</div>
              <div className="skillsdesc">{data}</div>
            </div>
          ) : (
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#fff",
                color: "black",
                borderRadius: "20px",
                padding: "2%",
                maxHeight: "70vh",
                overflowY: "scroll",
                flex: 1,
              }}
            >
              <div className="timeTitle">{timelineData[activetxt].title}</div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "10% !important",
                  width: "100%",
                  height: "100%",
                }}
              >
                {data.map((val: any) => {
                  return (
                    <div key={val} style={{}}>
                      <div className="timeTitle">{val.title}</div>
                      <div className="timedesc">{val.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkTimline;
