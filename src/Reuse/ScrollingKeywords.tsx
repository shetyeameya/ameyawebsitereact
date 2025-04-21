import React from "react";
import "./ScrollingKeywords.css";
import { Skill } from "./AllText";

interface ScrollingKeywordsProps {
  keywords: Skill[];
  findVal?: string;
  List?: string[];
  objID: boolean;
}

const ScrollingKeywords: React.FC<ScrollingKeywordsProps> = ({
  keywords,
  findVal,
  List,
  objID,
}) => {
  const LibrariesList: React.FC = () => {
    const libraries = keywords.find(
      (skill) => skill.title === findVal
    )?.description;

    if (!libraries) return null;

    return (
      <div className="scrollingDiv">
        <h3>{findVal} : </h3>
        <p style={{ paddingLeft: 5 }}>{libraries}</p>
      </div>
    );
  };

  return (
    <div className="scrolling-keywords">
      <div className="keywords-container">
        {objID ? (
          <div>
            <LibrariesList />
          </div>
        ) : (
          <div>
            {keywords.map((keyword, index) => (
              <span key={index} className="keyword">
                {keyword.description}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollingKeywords;
