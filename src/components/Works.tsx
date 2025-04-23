import React, { useState } from "react";
import { Briefcase, Code, X, ChevronLeft, ChevronRight } from "lucide-react";
import { timelineData } from "../data/AllText";
import PokemonGo from "./PokemonGo";
import StickyNoteCard from "./StickyNoteCard";
import "../styles/carousel.css";
import Authentication from "./Authentication";

// Project data
const projectsData = [
  {
    id: 1,
    title: "RumbleOn App",
    description:
      "A comprehensive mobile application for RumbleOn, allowing users to browse, buy, and sell vehicles.",
    image: require("../Assets/Images/project2.png"),
    tags: ["React Native", "TypeScript", "Redux", "Firebase"],
    type: "carousel",
    images: [
      require("../Assets/Images/rumimgs/img1.png"),
      require("../Assets/Images/rumimgs/img3.png"),
      require("../Assets/Images/rumimgs/img4.png"),
      require("../Assets/Images/rumimgs/img5.png"),
      require("../Assets/Images/rumimgs/img6.png"),
      require("../Assets/Images/rumimgs/img7.png"),
      require("../Assets/Images/rumimgs/img8.png"),
      require("../Assets/Images/rumimgs/img9.png"),
      require("../Assets/Images/rumimgs/img10.png"),
      require("../Assets/Images/rumimgs/img11.png"),
      require("../Assets/Images/rumimgs/img12.png"),
      require("../Assets/Images/rumimgs/img13.png"),
      require("../Assets/Images/rumimgs/img14.png"),
      require("../Assets/Images/rumimgs/img15.png"),
      require("../Assets/Images/rumimgs/img16.png"),
      require("../Assets/Images/rumimgs/img17.png"),
      require("../Assets/Images/rumimgs/img18.png"),
      require("../Assets/Images/rumimgs/img19.png"),
      require("../Assets/Images/rumimgs/img20.png"),
    ],
  },
  {
    id: 2,
    title: "Native App",
    description:
      "A React Native application showcasing Resume and Pokemon with detailed information and interactive features.",
    image: require("../Assets/Images/resumeapp.png"),
    tags: ["React Native", "TypeScript", "PokeAPI"],
    type: "carousel",
    images: [
      require("../Assets/Images/resumeImg/resumeapp1.png"),
      require("../Assets/Images/resumeImg/resumeapp3.png"),
      require("../Assets/Images/resumeImg/resumeapp4.png"),
      require("../Assets/Images/resumeImg/resumeapp5.png"),
      require("../Assets/Images/resumeImg/resumeapp6.png"),
      require("../Assets/Images/resumeImg/resumeapp7.png"),
      require("../Assets/Images/resumeImg/resumeapp8.png"),
      require("../Assets/Images/resumeImg/resumeapp9.png"),
      require("../Assets/Images/resumeImg/resumeapp10.png"),
      require("../Assets/Images/resumeImg/resumeapp12.png"),
      require("../Assets/Images/resumeImg/resumeapp13.png"),
      require("../Assets/Images/resumeImg/resumeapp14.png"),
      require("../Assets/Images/resumeImg/resumeapp15.png"),
      require("../Assets/Images/resumeImg/resumeapp16.png"),
    ],
  },
  {
    id: 3,
    title: "PokemonGo Web",
    description:
      "A web application for exploring Pokemon data with sorting and filtering capabilities.",
    image: require("../Assets/Images/pokemongologo.jpg"),
    tags: ["React", "TypeScript", "PokeAPI"],
    type: "component",
    component: "PokemonGo",
  },
  {
    id: 4,
    title: "RideNow",
    description:
      "A website built for new and pre-owned motorcycles, ATVs, personal watercraft, and more, along with the largest selection of brand manufacturers",
    image: require("../Assets/Images/ridenow-logo.png"),
    tags: ["React", "TypeScript", "PokeAPI", "Next.js"],
    type: "link",
    component: "PokemonList",
  },
  {
    id: 5,
    title: "Authhaven (NPM Package)",
    description:
      "A modern React component library providing customizable authentication UI components including inputs, buttons, login and signup pages, forgot password flows, and two-factor authentication.",
    image:
      "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["Node.js", "NPM", "TypeScript", "CSS"],
    type: "component",
    component: "authhaven",
  },
];

interface ImageCarouselProps {
  images: string[];
  onClose: () => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container carousel-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 className="modal-title">Project Images</h3>
          <button className="modal-close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="carousel-content">
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrevious}
          >
            <ChevronLeft size={36} />
          </button>
          <div className="carousel-slide">
            <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
          </div>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
          >
            <ChevronRight size={36} />
          </button>
        </div>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${
                index === currentIndex ? "active" : ""
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

interface ComponentModalProps {
  component: string;
  onClose: () => void;
}

const ComponentModal: React.FC<ComponentModalProps> = ({
  component,
  onClose,
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container component-container"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 className="modal-title">
            {component === "PokemonGo" ? "Pokemon Go Web" : "Authhaven"}
          </h3>
          <button className="modal-close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          {component === "PokemonGo" ? <PokemonGo /> : <Authentication />}
        </div>
      </div>
    </div>
  );
};

interface DescriptionModalProps {
  title: string;
  description: string;
  onClose: () => void;
}

const DescriptionModal: React.FC<DescriptionModalProps> = ({
  title,
  description,
  onClose,
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <div
            className="description-content"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
};

// Link Modal
interface dataProps {
  title: string;
  link: string;
}
interface LinkModalProps {
  data: dataProps[];
  title: string;
  onClose: () => void;
}

const LinkModal: React.FC<LinkModalProps> = ({ data, title, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3 className="modal-title">{title}</h3>
          <button className="modal-close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body">
          <div className="description-content">
            {data.map((val: any) => {
              return (
                <a
                  className="modal-title"
                  href={val.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {val.title}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// Create a custom Project Sticky Note Card component
interface ProjectStickyNoteProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  onClick: () => void;
  id: number;
}

const ProjectStickyNote: React.FC<ProjectStickyNoteProps> = ({
  title,
  description,
  image,
  tags,
  id,
  onClick,
}) => {
  // Generate a random color
  const randomColors = ["", "green", "", "blue", "pink", "purple"];

  return (
    <div className={`sticky-note-card ${randomColors[id]}`}>
      <div className="sticky-note-content">
        <img src={image} alt={title} className="sticky-note-image" />
        <h3 className="sticky-note-title">{title}</h3>
        <p className="sticky-note-description">{description}</p>

        {/* Tags section - only for projects */}
        <div className="sticky-note-tags">
          {tags.map((tag, index) => (
            <span key={index} className="sticky-note-tag">
              {tag}
            </span>
          ))}
        </div>

        <button onClick={onClick} className="sticky-note-button">
          View Model
        </button>
      </div>
    </div>
  );
};

const Works: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"experience" | "projects">(
    "experience"
  );
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [modalType, setModalType] = useState<
    "carousel" | "component" | "description" | "link" | null
  >(null);

  // Filter timeline data to only experience
  const experienceData = timelineData.filter(
    (item) =>
      !item.title.includes("Bachelor") &&
      !item.title.includes("Master") &&
      !item.title.includes("University")
  );

  const openProjectModal = (project: any) => {
    setSelectedItem(project);
    setModalType(project.type as "carousel" | "component" | "description");
  };

  const openExperienceModal = (item: any) => {
    setSelectedItem(item);
    setModalType("description");
  };

  const closeModal = () => {
    setModalType(null);
  };

  // Function to get a short summary from experience data
  const getExperienceSummary = (item: any): string => {
    if (typeof item.desc === "string") {
      return item.desc.substring(0, 120) + "...";
    } else if (Array.isArray(item.desc) && item.desc.length > 0) {
      return item.desc[0].description.substring(0, 120) + "...";
    }
    return "";
  };

  // Function to get an image for experience items
  const getExperienceImage = (title: string): string => {
    if (title.includes("RumbleOn")) {
      return require("../Assets/Images/RumbleOnLogo.png");
    } else if (title.includes("Webspun")) {
      return require("../Assets/Images/webspunLLC.png");
    } else if (title.includes("Research")) {
      return require("../Assets/Images/SMULogo.png");
    } else if (title.includes("Electrical")) {
      return require("../Assets/Images/AxisElectrical.png");
    }
    return require("../Assets/Images/JPMorganLogo.png");
  };

  return (
    <>
      <section id="work" className="works-section py-20">
        <div className="container">
          <div className="works-header">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My <span className="text-primary-600">Journey</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore my professional experience and projects.
            </p>
          </div>

          <div className="tab-switch">
            <button
              className={`${activeTab === "experience" ? "active" : ""}`}
              onClick={() => setActiveTab("experience")}
            >
              <Briefcase size={18} />
              <span>Experience</span>
            </button>

            <button
              className={`${
                activeTab === "projects" ? "active education" : ""
              }`}
              onClick={() => setActiveTab("projects")}
            >
              <Code size={18} />
              <span>Projects</span>
            </button>
          </div>

          {activeTab === "experience" ? (
            <div className="sticky-notes-grid">
              {experienceData.map((item, index) => (
                <StickyNoteCard
                  id={index}
                  key={index}
                  title={item.title.split("|")[0].trim()}
                  description={getExperienceSummary(item)}
                  image={getExperienceImage(item.title)}
                  onClick={() => openExperienceModal(item)}
                />
              ))}
            </div>
          ) : (
            <div className="sticky-notes-grid">
              {projectsData.map((project) => (
                <ProjectStickyNote
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  onClick={() => openProjectModal(project)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modals */}
      {modalType === "carousel" && selectedItem && (
        <ImageCarousel images={selectedItem.images} onClose={closeModal} />
      )}

      {modalType === "component" && selectedItem && (
        <ComponentModal
          component={selectedItem.component}
          onClose={closeModal}
        />
      )}

      {modalType === "description" && selectedItem && (
        <DescriptionModal
          title={selectedItem.title || "Details"}
          description={
            selectedItem.detailedDescription ||
            (Array.isArray(selectedItem.desc)
              ? selectedItem.desc
                  .map(
                    (item: any) =>
                      `<div class="timeline-detail-modal">
                  <h4>${item.title}</h4>
                  <p>${item.description}</p>
                </div>`
                  )
                  .join("")
              : selectedItem.desc)
          }
          onClose={closeModal}
        />
      )}
      {modalType === "link" && selectedItem && (
        <LinkModal
          title={selectedItem.title || "Details"}
          data={[
            {
              title: "RumbleOn",
              link: "https://www.rumbleon.com/",
            },
            {
              title: "RideOn",
              link: "https://www.ridenow.com/",
            },
          ]}
          onClose={closeModal}
        />
      )}
    </>
  );
};

export default Works;
