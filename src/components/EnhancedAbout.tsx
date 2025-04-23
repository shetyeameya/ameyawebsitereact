import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TextData } from "../data/AllText";
import { timelineData } from "../data/AllText";
import "../styles/about.css";

// Sample personal photos - replace with your actual images
const personalPhotos = [
  {
    id: 1,
    src: require("../Assets/Images/romeonme1.jpg"),
    alt: "Me with Romeo at the lake",
    caption: "Weekend adventures with Romeo",
  },
  {
    id: 2,
    src: require("../Assets/Images/romearch.jpg"),
    alt: "Romeo and Archie",
    caption: "Romeos favorite friend!",
  },
  {
    id: 3,
    src: require("../Assets/Images/birthday.jpg"),
    alt: "Birthday with Romeo",
    caption: "No birthday is complete without him!",
  },
  {
    id: 4,
    src: require("../Assets/Images/keeping.jpg"),
    alt: "At the lake",
    caption: "In my element!",
  },
];

// Filter education data
const educationData: any = timelineData.filter(
  (item) =>
    item.title.includes("Bachelor") ||
    item.title.includes("Master") ||
    item.title.includes("University")
);

const Enhancedabout: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const aboutData = TextData[0].About;
  const experienceData = TextData[0].Experience;
  const extraData = TextData[0].Extra;

  const goToPrevious = () => {
    const isFirstSlide = currentSlide === 0;
    const newIndex = isFirstSlide ? educationData.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentSlide === educationData.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex);
  };

  const openPhotoModal = (index: number) => {
    setActivePhotoIndex(index);
  };

  const closePhotoModal = () => {
    setActivePhotoIndex(null);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-dark-blue-lighter">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About{" "}
            <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {aboutData.text}
          </p>
        </div>

        <div className="about-section-card">
          <div className="about-info-card">
            <h3 className="about-info-title">My Story</h3>
            <div className="about-info-content">
              {aboutData.data
                .split("\n\n")
                .map((paragraph: any, index: any) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>

          <div className="about-info-card">
            <h3 className="about-info-title">Experience</h3>
            <div className="about-info-content">
              {experienceData.data
                .split("\n")
                .map((paragraph: any, index: any) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
            </div>
          </div>

          <div className="about-info-card">
            <h3 className="about-info-title">Education</h3>
            <div className="education-carousel">
              <div className="education-slide">
                {educationData[currentSlide] && (
                  <div className="education-card">
                    <h4 className="education-title">
                      {educationData[currentSlide].title}
                    </h4>
                    <div className="education-content">
                      {typeof educationData[currentSlide].desc === "string" ? (
                        <p>{educationData[currentSlide].desc}</p>
                      ) : (
                        <div className="education-details">
                          {Array.isArray(educationData[currentSlide].desc) &&
                            educationData[currentSlide].desc.map(
                              (detail: any, idx: any) => (
                                <div
                                  key={idx}
                                  className="education-detail-item"
                                >
                                  <h5>{detail.title}</h5>
                                  <p>{detail.description}</p>
                                </div>
                              )
                            )}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="carousel-controls">
                <button
                  className="carousel-arrow carousel-arrow-left"
                  onClick={goToPrevious}
                >
                  <ChevronLeft size={24} />
                </button>
                <div className="carousel-indicators">
                  {educationData.map((_: any, index: any) => (
                    <button
                      key={index}
                      className={`carousel-indicator ${
                        index === currentSlide ? "active" : "inactive"
                      }`}
                      onClick={() => goToSlide(index)}
                    ></button>
                  ))}
                </div>
                <button
                  className="carousel-arrow carousel-arrow-right"
                  onClick={goToNext}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>

          <div className="about-info-card">
            <h3 className="about-info-title">Personal Interests</h3>
            <div className="about-info-content">
              {extraData.data.split("\n").map((paragraph: any, index: any) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Personal Photo Gallery */}
        <div className="personal-gallery-section">
          <h3 className="text-2xl font-bold text-center mb-6">
            Life Beyond{" "}
            <span className="text-primary-600 dark:text-primary-400">Code</span>
          </h3>
          <p className="text-center mb-8 max-w-2xl mx-auto">
            When I'm not coding, I spend time with my dog Romeo exploring the
            outdoors, attending tech conferences, and pursuing my passion for
            photography.
          </p>

          <div className="photo-gallery">
            {personalPhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="polaroid-photo"
                onClick={() => openPhotoModal(index)}
              >
                <div className="polaroid-image-container">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="polaroid-image"
                  />
                </div>
                <p className="polaroid-caption">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo Modal */}
      {activePhotoIndex !== null && (
        <div className="photo-modal-overlay" onClick={closePhotoModal}>
          <div
            className="photo-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="photo-modal-close-button"
              onClick={closePhotoModal}
            >
              ×
            </button>
            <div className="photo-modal-content">
              <img
                src={personalPhotos[activePhotoIndex].src}
                alt={personalPhotos[activePhotoIndex].alt}
                className="photo-modal-image"
              />
              <p className="photo-modal-caption">
                {personalPhotos[activePhotoIndex].caption}
              </p>
            </div>
            <div className="photo-modal-navigation">
              <button
                className="photo-modal-nav-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhotoIndex((prev) =>
                    prev === 0 ? personalPhotos.length - 1 : prev! - 1
                  );
                }}
              >
                <ChevronLeft size={24} />
              </button>
              <button
                className="photo-modal-nav-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhotoIndex((prev) =>
                    prev === personalPhotos.length - 1 ? 0 : prev! + 1
                  );
                }}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Enhancedabout;
