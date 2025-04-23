import React from "react";
import { ArrowDownCircle, Code, Palette, BookOpen } from "lucide-react";
import ameyachristmas from "../Assets/Images/ameyachristmas.jpg";
const Hero: React.FC = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-7/12 order-2 md:order-1 mt-10 md:mt-0">
            <h2 className="text-accent-600 font-bold mb-3 animate-float">
              Hello, I'm
            </h2>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
              <span className="text-primary-600">Ameya</span> Ravindra Shetye
            </h1>
            <div className="intro-card mb-8">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
                I create{" "}
                <span className="text-secondary-500 font-semibold">
                  delightful
                </span>{" "}
                digital experiences with a focus on{" "}
                <span className="text-primary-500 font-semibold">
                  creativity
                </span>{" "}
                and{" "}
                <span className="text-accent-500 font-semibold">
                  innovation
                </span>
                .
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="role-badge">
                <Code className="text-primary-500" size={20} />
                <span className="text-gray-700 dark:text-gray-300">
                  Developer
                </span>
              </div>
              <div className="role-badge">
                <Palette className="text-secondary-500" size={20} />
                <span className="text-gray-700 dark:text-gray-300">
                  Designer
                </span>
              </div>
              <div className="role-badge">
                <BookOpen className="text-accent-500" size={20} />
                <span className="text-gray-700 dark:text-gray-300">
                  Creator
                </span>
              </div>
            </div>

            <a href="#work" className="cta-button">
              <span>View My Work</span>
              <ArrowDownCircle size={20} />
            </a>
          </div>

          <div className="md:w-5/12 order-1 md:order-2 flex justify-center">
            <div className="profile-image-container">
              <div className="profile-image">
                <img src={ameyachristmas} alt="Profile" />
              </div>
              <div className="emoji-badge">
                <span className="text-4xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
