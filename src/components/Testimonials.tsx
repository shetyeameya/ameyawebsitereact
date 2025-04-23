import React, { useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  FileText,
  Play,
  Pause,
} from "lucide-react";
import "../styles/testimonials-media.css";

interface Testimonial {
  id: number;
  author: string;
  role: string;
  company: string;
  quote: string;
  pdfUrl: string;
  colorVariant?: string;
}

// Sample testimonials - replace with your actual testimonial data
const testimonials: Testimonial[] = [
  {
    id: 1,
    author: "Poornima Mahesh",
    role: "HOD Electronics",
    company: "KC College of Engineering",
    quote:
      "Ameya is one of the most talented developers I've had the pleasure to work with. His deep understanding of React and attention to detail made our project a huge success.",
    pdfUrl: require("../Assets/Images/poornimalor.jpg"),
    colorVariant: "blue",
  },
  {
    id: 2,
    author: "Michael Rodriguez",
    role: "CTO",
    company: "StartupX",
    quote:
      "Working with Ameya transformed our development process. His expertise in React Native helped us deliver a flawless mobile experience ahead of schedule.",
    pdfUrl: "/pdfs/testimonial2.pdf",
    colorVariant: "green",
  },
  {
    id: 3,
    author: "Jennifer Chen",
    role: "Engineering Lead",
    company: "InnovateNow",
    quote:
      "Ameya's problem-solving skills are exceptional. He consistently delivered high-quality code and was a valuable team player who elevated everyone around him.",
    pdfUrl: "/pdfs/testimonial3.pdf",
    colorVariant: "pink",
  },
];

interface TestimonialCardProps {
  testimonial: Testimonial;
  onClick: () => void;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  onClick,
}) => {
  return (
    <div
      className={`testimonial-sticky-note ${testimonial.colorVariant || ""}`}
    >
      <div className="testimonial-content">
        <div className="quote-mark">"</div>
        <p className="testimonial-quote">{testimonial.quote}</p>
        <div className="quote-mark closing-quote">"</div>
        <div className="testimonial-author">
          <p className="author-name">{testimonial.author}</p>
          <p className="author-role">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
        <div className="testimonial-pdf" onClick={onClick}>
          <FileText size={16} />
          <span>Full Testimonial</span>
        </div>
      </div>
    </div>
  );
};

interface PDFModalProps {
  pdfUrl: string;
  onClose: () => void;
}

const PDFModal: React.FC<PDFModalProps> = ({ pdfUrl, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-container pdf-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-header">
          <h3 className="modal-title">Testimonial</h3>
          <button className="modal-close-button" onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        <div className="modal-body pdf-container">
          <iframe
            src={`${pdfUrl}#toolbar=0&navpanes=0`}
            className="pdf-iframe"
          ></iframe>
        </div>
        <div className="modal-footer">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="download-button"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  );
};

interface VideoPlayerProps {
  videoUrl: string;
  posterImage: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl = "/videos/intro.mp4",
  posterImage = "/images/video-poster.jpg",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div className="video-player-container">
      <div className="video-wrapper">
        <video
          ref={videoRef}
          src={videoUrl}
          poster={posterImage}
          onEnded={handleVideoEnd}
          className="video-element"
        ></video>
        <button className="video-control" onClick={togglePlay}>
          {isPlaying ? <Pause size={48} /> : <Play size={48} />}
        </button>
      </div>
      <h3 className="video-title">Meet Ameya</h3>
      <p className="video-description">
        A short introduction to my work, passion, and approach to development.
      </p>
    </div>
  );
};

const TestimonialsMedia: React.FC = () => {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const goToPreviousTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNextTestimonial = () => {
    setCurrentTestimonialIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const openPdfModal = (pdfUrl: string) => {
    setSelectedPdf(pdfUrl);
  };

  const closePdfModal = () => {
    setSelectedPdf(null);
  };

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            Testimonials & <span className="highlight">Media</span>
          </h2>
          <p className="section-description">
            Hear what others have to say and get to know me better.
          </p>
        </div>

        <div className="testimonials-media-content">
          <div className="video-section">
            <VideoPlayer
              videoUrl="/videos/intro.mp4"
              posterImage="/images/video-poster.jpg"
            />
          </div>

          <div className="testimonials-section">
            <h3 className="testimonials-title">What People Say</h3>

            <div className="testimonials-carousel">
              <button
                className="carousel-nav carousel-prev"
                onClick={goToPreviousTestimonial}
              >
                <ChevronLeft size={24} />
              </button>

              <div className="testimonials-viewport">
                <div
                  className="testimonials-slider"
                  style={{
                    transform: `translateX(-${currentTestimonialIndex * 100}%)`,
                  }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="testimonial-slide">
                      <TestimonialCard
                        testimonial={testimonial}
                        onClick={() => openPdfModal(testimonial.pdfUrl)}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <button
                className="carousel-nav carousel-next"
                onClick={goToNextTestimonial}
              >
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`testimonial-indicator ${
                    index === currentTestimonialIndex ? "active" : ""
                  }`}
                  onClick={() => setCurrentTestimonialIndex(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedPdf && <PDFModal pdfUrl={selectedPdf} onClose={closePdfModal} />}
    </section>
  );
};

export default TestimonialsMedia;
