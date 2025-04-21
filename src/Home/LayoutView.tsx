import React, { useState, useRef, useEffect } from "react";
import { Anchor } from "antd";
import HomeSection from "./HomeSection/HomeSection";
import AboutView from "./AboutSection/AboutView";
import WorkView from "./WorkSection/WorkView";
import { getImages } from "../Reuse/CommonFunctions";
import { useDataActions } from "../Context/DataContext";
import ExtraView from "./Extra/ExtraView";
const Home = () => {
  const topRef = useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();
  const { addData } = useDataActions();

  // useEffect(() => {
  //   let isMounted = true;
  //   const getImagesList = async () => {
  //     const response = await getImages("family");
  //     if (response !== null) {
  //       addData(response);
  //     } else {
  //       addData(null);
  //     }
  //   };

  //   getImagesList();
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  // useEffect(() => {
  //   setTargetOffset(topRef.current?.clientHeight);
  // }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          height: "8vh",
          background: "black",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          color: "#FFF",
          zIndex: 9999,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "2%",
        }}
        ref={topRef}
      >
        <div style={{ flex: 0.3 }}>logo</div>
        <div
          style={{
            flex: 0.7,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Anchor
            direction="horizontal"
            targetOffset={targetOffset}
            items={[
              {
                key: "Home",
                href: "#Home",
                title: "Home",
              },
              {
                key: "About",
                href: "#About",
                title: "About",
              },
              {
                key: "Work",
                href: "#Work",
                title: "Work",
              },
              {
                key: "Extra",
                href: "#Extra",
                title: "Extra",
              },
              {
                key: "Contact",
                href: "#Contact",
                title: "Contact",
              },
            ]}
          />
        </div>
      </div>
      <div
        style={{
          width: "100%",
        }}
      >
        <div
          id={"Home"}
          style={{
            marginTop: "8vh",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <HomeSection />
        </div>
        <div
          id={"About"}
          style={{
            width: "100%",
          }}
        >
          <AboutView />
        </div>
        <div
          id={"Work"}
          style={{
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <WorkView />
        </div>
        <div
          id={"Extra"}
          style={{
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <ExtraView />
        </div>
        <div
          id={"Contact"}
          style={{
            minHeight: "100vh",
            width: "100%",
          }}
        >
          <WorkView />
        </div>
      </div>
    </div>
  );
};

export default Home;
