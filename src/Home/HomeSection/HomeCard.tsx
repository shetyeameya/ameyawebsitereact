import React from "react";
import "./HomeCard.css";
import { Button } from "antd";
interface Props {
  title: string;
  image: any;
  onViewMore: () => void;
}

const HomeCard: React.FC<Props> = ({ title, image, onViewMore }) => {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})` }}>
      <div className="content">
        <h3 className="title">{title}</h3>
        <Button type="primary" onClick={onViewMore} className="view-more-btn">
          View More
        </Button>
      </div>
    </div>
  );
};

export default HomeCard;
