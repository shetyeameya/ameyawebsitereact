import React from "react";

interface SectionProps {
  id: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, children }) => (
  <div
    id={id}
    style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);

export default Section;
