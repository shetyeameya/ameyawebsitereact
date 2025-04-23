import React from "react";
import { skillsList } from "../data/AllText";
import {
  Code,
  Database,
  BookOpen,
  Wrench,
  Layers,
  Briefcase,
  GitBranch,
} from "lucide-react";

const getIconForSkill = (title: string) => {
  switch (title) {
    case "Libraries":
      return <Code size={24} />;
    case "Databases & Storage":
      return <Database size={24} />;
    case "Languages":
      return <BookOpen size={24} />;
    case "Development Tools":
      return <Wrench size={24} />;
    case "Design Patterns":
      return <Layers size={24} />;
    case "Domains":
      return <Briefcase size={24} />;
    case "Management Tools":
      return <GitBranch size={24} />;
    default:
      return <Code size={24} />;
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="skills-section py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary-600">Skills</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">{getIconForSkill(skill.title)}</div>
              <h3 className="text-xl font-bold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
