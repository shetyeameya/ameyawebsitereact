import React from "react";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  onClick,
}) => {
  return (
    <div className="project-card" onClick={onClick}>
      <div className="project-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-card-body">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-card-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="project-card-link">
          <span>View Details</span>
          <ExternalLink size={16} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
