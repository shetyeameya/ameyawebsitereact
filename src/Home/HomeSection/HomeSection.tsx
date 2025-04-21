import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import { tintColor } from "../../Constants/colors";
import HomeCard from "./HomeCard";

const HomeSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(0);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [containerRef]);

  const onViewMore = () => {
    console.log("clicked");
  };

  const List: any = [
    {
      title: "About",
      image: require("../../Assets/Images/ameyahome.png"),
    },
    {
      title: "Work",
      image: require("../../Assets/Images/cartoongrad.png"),
    },
    {
      title: "Extra",
      image: require("../../Assets/Images/ameyaTrophy.png"),
    },
    {
      title: "Contact",
      image: require("../../Assets/Images/ameyachristmas.jpg"),
    },
  ];
  // console.log("List::", List);s
  return (
    <div style={{ display: "flex", width: "100%", padding: "1%" }}>
      <div className="container" ref={containerRef}>
        {List.map((val: any, index: any) => (
          <div
            key={val.title}
            className={`box ${activeIndex === index ? "active" : ""}`}
            style={{
              border: `2px solid ${
                activeIndex === index ? tintColor : "black"
              }`,
              backgroundColor: `${activeIndex === index ? tintColor : "black"}`,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
          >
            <HomeCard
              key={val.title}
              title={val.title}
              image={val.image}
              onViewMore={onViewMore}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
