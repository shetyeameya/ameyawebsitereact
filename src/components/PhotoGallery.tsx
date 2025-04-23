import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/photo-gallery.css";

interface Photo {
  id: number;
  src: string;
  alt: string;
  caption?: string;
}

// Sample photos - replace with your actual photos
const samplePhotos: Photo[] = [
  {
    id: 1,
    src: "/images/personal/photo1.jpg", // Replace with your actual image path
    alt: "Ameya with Romeo",
    caption: "Weekend adventures with Romeo",
  },
  {
    id: 2,
    src: "/images/personal/photo2.jpg", // Replace with your actual image path
    alt: "Coding session",
    caption: "Late night coding session",
  },
  {
    id: 3,
    src: "/images/personal/photo3.jpg", // Replace with your actual image path
    alt: "Hiking trip",
    caption: "Exploring nature trails with Romeo",
  },
  {
    id: 4,
    src: "/images/personal/photo4.jpg", // Replace with your actual image path
    alt: "Coffee break",
    caption: "Coffee and code - perfect combination",
  },
  {
    id: 5,
    src: "/images/personal/photo5.jpg", // Replace with your actual image path
    alt: "Romeo sleeping",
    caption: "Romeo helping with debugging",
  },
];

interface PhotoGalleryProps {
  photos?: Photo[];
  title?: string;
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos = samplePhotos,
  title = "Life Outside Work",
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const openLightbox = (photo: Photo) => {
    setSelectedPhoto(photo);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const goToPrevious = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );
    const prevIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;
    setSelectedPhoto(photos[prevIndex]);
  };

  const goToNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex(
      (photo) => photo.id === selectedPhoto.id
    );
    const nextIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;
    setSelectedPhoto(photos[nextIndex]);
  };

  return (
    <div className="photo-gallery-container">
      <h3 className="photo-gallery-title">{title}</h3>
      <div className="photo-gallery">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="polaroid"
            onClick={() => openLightbox(photo)}
          >
            <div className="polaroid-inner">
              <img src={photo.src} alt={photo.alt} className="polaroid-img" />
              {photo.caption && (
                <p className="polaroid-caption">{photo.caption}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedPhoto && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div
            className="lightbox-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <X size={24} />
            </button>
            <button
              className="lightbox-arrow lightbox-prev"
              onClick={goToPrevious}
            >
              <ChevronLeft size={32} />
            </button>
            <div className="lightbox-content">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="lightbox-img"
              />
              {selectedPhoto.caption && (
                <p className="lightbox-caption">{selectedPhoto.caption}</p>
              )}
            </div>
            <button className="lightbox-arrow lightbox-next" onClick={goToNext}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;
