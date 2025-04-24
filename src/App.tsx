import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Enhancedabout from "./components/EnhancedAbout";
import TestimonialsMedia from "./components/Testimonials";

function App() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');

    anchors.forEach((anchor) => {
      const handleClick = (e: Event) => {
        e.preventDefault();

        const target = e.currentTarget as HTMLAnchorElement;
        const targetId = target.getAttribute("href");
        if (!targetId) return;

        const targetElement = document.querySelector(targetId);
        if (!targetElement) return;

        window.scrollTo({
          top:
            targetElement instanceof HTMLElement ? targetElement.offsetTop : 0,
          behavior: "smooth",
        });
      };

      anchor.addEventListener("click", handleClick);

      // Cleanup (important for React useEffect)
      return () => {
        anchor.removeEventListener("click", handleClick);
      };
    });

    document.title = "Ameya Ravindra Shetye | Personal Portfolio";

    const titleElement = document.querySelector("title");
    if (titleElement) {
      titleElement.removeAttribute("data-default");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Works />
        <Skills />
        {/* <About /> */}
        <Enhancedabout />
        <TestimonialsMedia />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
