import React, { useState } from "react";
import { TextData } from "../data/AllText";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { timelineData } from "../data/AllText";

// Filter education data
const educationData: any = timelineData.filter(
  (item) =>
    item.title.includes("Bachelor") ||
    item.title.includes("Master") ||
    item.title.includes("University")
);

const About: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
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
                <button
                  className="carousel-arrow carousel-arrow-right"
                  onClick={goToNext}
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Add indicators if they're not already in your code */}
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
      </div>
    </section>
  );
};

export default About;
