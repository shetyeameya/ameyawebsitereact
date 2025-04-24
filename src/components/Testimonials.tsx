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
      "Post completion of the project, I found Ameya to be more matured and responsible. I noted that he worked better under pressure situations. Besides he got a taste of how things work in the real world and also the changing technologies. Given his maturity and the confidence to complete an undertaken task, I did not hesitate in assigning him a task.",
    pdfUrl: require("../Assets/Images/poornimalor.jpg"),
    colorVariant: "blue",
  },
  {
    id: 2,
    author: "Aditi Kamble",
    role: "Prof",
    company: "KC College of Engineering",
    quote:
      "I admired Ameya's ability to clearly express his thoughts in speech and writing. He never hesitated to clear even his slightest of doubt while at the same time he never hesitated to put forth his views. He believed in open communication. Moreover his practical books as well as assignments were satisfactory and were submitted well before time.",
    pdfUrl: require("../Assets/Images/aditilor.jpg"),
    colorVariant: "green",
  },
  {
    id: 3,
    author: "Vaishali N Kilarikar",
    role: "Assistant Prof",
    company: "KC College of Engineering",
    quote:
      "Undoubtedly Ameya managed to strike a fine balance between his academics and involvement in other activities. He held responsible positions of both a Cultural Secretary and General Coordinator during his tenure in the college.",
    pdfUrl: require("../Assets/Images/vaishalilor.jpg"),
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
  // Check if the URL is an image (from require)
  const isImage =
    typeof pdfUrl === "string"
      ? pdfUrl.match(/\.(jpeg|jpg|gif|png)$/) !== null
      : true;

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
          {isImage ? (
            <div className="image-container">
              <img
                src={pdfUrl}
                alt="Testimonial letter"
                className="testimonial-image"
              />
            </div>
          ) : (
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              className="pdf-iframe"
            ></iframe>
          )}
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
  videoUrl = "https://youtu.be/osERXSGy_yY",
  posterImage = "/images/video-poster.jpg",
}) => {
  // Remove any query parameters and get the base URL
  const cleanVideoUrl = videoUrl.split("?")[0];

  // Check if the URL is a YouTube URL
  const isYouTubeUrl =
    cleanVideoUrl.includes("youtu.be") || cleanVideoUrl.includes("youtube.com");

  // Extract YouTube video ID
  const getYouTubeID = (url: string): string => {
    if (url.includes("youtu.be/")) {
      return url.split("youtu.be/")[1];
    } else if (url.includes("youtube.com/watch?v=")) {
      return url.split("v=")[1].split("&")[0];
    } else if (url.includes("youtube.com/embed/")) {
      return url.split("embed/")[1];
    }
    return "";
  };

  const videoId = isYouTubeUrl ? getYouTubeID(cleanVideoUrl) : "";

  return (
    <div className="video-player-container">
      <div className="video-wrapper">
        <iframe
          className="youtube-embed"
          src={require("../Assets/Images/video.mp4")}
          title="Cricket Keeping"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <h3 className="video-title">Meet Ameya</h3>
      <p className="video-description">
        A short video of me playing cricket, my passion and how I like to spend
        my weekends.
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
