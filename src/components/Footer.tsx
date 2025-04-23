import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-2">
              Ameya Ravindra <span className="text-primary-400">Shetye</span>
            </h2>
            <p className="text-gray-400">
              Creating delightful digital experiences
            </p>
          </div>

          <div className="footer-links mb-6 md:mb-0">
            <a href="#home">Home</a>
            <a href="#work">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Ameya Ravindra Shetye. All rights reserved.
          </p>

          <p className="text-gray-400 text-sm flex items-center">
            Made with <Heart size={14} className="text-error-500 mx-1" /> by
            Ameya Ravindra Shetye
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
