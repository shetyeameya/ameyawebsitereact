import React from "react";
import "../styles/sticky-note.css";

interface StickyNoteCardProps {
  image: string;
  title: string;
  description: string;
  id: number;
  onClick: () => void;
}

const StickyNoteCard: React.FC<StickyNoteCardProps> = ({
  image,
  title,
  description,
  id,
  onClick,
}) => {
  const randomColors = ["blue", "pink", "", "green", "blue"];
  return (
    <div className={`sticky-note-card ${randomColors[id]}`}>
      <div className="sticky-note-content">
        <img src={image} alt={title} className="sticky-note-image" />
        <h3 className="sticky-note-title">{title}</h3>
        <p className="sticky-note-description">{description}</p>
        <button onClick={onClick} className="sticky-note-button">
          View Model
        </button>
      </div>
    </div>
  );
};

export default StickyNoteCard;
