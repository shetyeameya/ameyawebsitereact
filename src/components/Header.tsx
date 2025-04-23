import React, { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Home", path: "#home" },
  { label: "Experience", path: "#work" },
  { label: "Skills", path: "#skills" },
  { label: "About", path: "#about" },
  { label: "Contact", path: "#contact" },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="container flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl md:text-3xl font-bold text-primary-600"
        >
          Ameya Ravindra Shetye
        </a>

        {/* Desktop Navigation */}
        <nav>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.path}
              className="font-medium text-gray-700 hover:text-primary-500"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 hover:text-primary-500"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button
            onClick={toggleDarkMode}
            className="text-gray-700"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="mobile-menu md:hidden">
            <nav>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.path}
                  className="text-gray-700 hover:text-primary-500"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
